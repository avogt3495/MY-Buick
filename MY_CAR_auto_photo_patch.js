/*
  MY CAR — VIN Auto Photo Patch v1.0

  Load this AFTER app.js.

  Behavior:
  1. Decode VIN using the app's existing NHTSA vPIC code.
  2. Search Wikimedia Commons and Wikipedia using year/make/model/trim.
  3. Never send the full VIN to an image provider.
  4. If no dependable image is found, generate a rough vehicle illustration.
  5. Repair old records that point to the missing images/vehicles folder.
*/

(() => {
  "use strict";

  const PATCH_VERSION = "1.0.0";
  const STALE_LOCAL_IMAGE = /^(?:\.\/)?images\/vehicles\//i;
  const GENERATED_PROVIDER = "MY CAR generated vehicle preview";
  const MAX_RESULTS = 16;

  function isStaleLocalVehicleImage(src) {
    return !src || STALE_LOCAL_IMAGE.test(String(src));
  }

  function vehicleTitle(data = {}) {
    return [data.year, data.make, data.model, data.trim]
      .map(value => String(value || "").trim())
      .filter(Boolean)
      .join(" ") || "Decoded vehicle";
  }

  function escapeXml(value) {
    return String(value ?? "").replace(/[<>&'\"]/g, character => ({
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;"
    })[character]);
  }

  function normalizePaintColor(value) {
    const text = String(value || "").toLowerCase();
    const colors = [
      ["black", "#272d35"],
      ["white", "#e9edf1"],
      ["pearl", "#e5e4df"],
      ["silver", "#9ca6b1"],
      ["gray", "#747f8b"],
      ["grey", "#747f8b"],
      ["red", "#a43c40"],
      ["blue", "#3e5f91"],
      ["green", "#466a58"],
      ["orange", "#ba6637"],
      ["yellow", "#c3a747"],
      ["brown", "#70584c"],
      ["beige", "#a99d86"],
      ["gold", "#a48a4d"],
      ["purple", "#66527f"]
    ];
    return colors.find(([name]) => text.includes(name))?.[1] || "#8d98a5";
  }

  function classifyVehicleBody(data = {}) {
    const text = [data.bodyClass, data.model, data.trim]
      .map(value => String(value || "").toLowerCase())
      .join(" ");

    if (/pickup|truck|crew cab|regular cab|extended cab/.test(text)) return "truck";
    if (/van|cargo van|passenger van|minivan/.test(text)) return "van";
    if (/sport utility|utility|suv|crossover/.test(text)) return "suv";
    if (/wagon|estate/.test(text)) return "wagon";
    if (/hatchback|hatch/.test(text)) return "hatchback";
    if (/convertible|cabriolet|roadster/.test(text)) return "convertible";
    if (/coupe|2-door|two door/.test(text)) return "coupe";
    return "sedan";
  }

  function generatedBodyPaths(bodyType) {
    const paths = {
      sedan: {
        body: "M100 218 L124 164 L187 145 L238 101 L365 101 L421 146 L503 166 L532 218 L522 244 L92 244 Z",
        glass: "M215 145 L252 111 L352 111 L395 145 Z",
        belt: "M121 166 L501 166"
      },
      coupe: {
        body: "M100 218 L125 164 L202 145 L260 101 L368 105 L420 148 L503 169 L532 218 L522 244 L92 244 Z",
        glass: "M232 145 L272 112 L360 114 L397 146 Z",
        belt: "M123 166 L500 168"
      },
      suv: {
        body: "M91 220 L110 151 L166 127 L205 79 L411 79 L463 128 L510 151 L536 220 L525 248 L81 248 Z",
        glass: "M190 127 L223 91 L394 91 L439 129 Z",
        belt: "M108 151 L509 151"
      },
      wagon: {
        body: "M91 220 L112 155 L169 135 L214 91 L431 91 L470 137 L513 156 L536 220 L525 246 L82 246 Z",
        glass: "M194 134 L230 102 L416 102 L448 136 Z",
        belt: "M110 155 L510 156"
      },
      hatchback: {
        body: "M98 219 L121 158 L185 137 L230 94 L392 94 L454 139 L510 161 L535 219 L523 246 L88 246 Z",
        glass: "M208 137 L245 105 L379 105 L429 139 Z",
        belt: "M119 158 L507 160"
      },
      truck: {
        body: "M81 220 L108 163 L169 149 L212 101 L334 101 L371 148 L424 153 L424 131 L535 131 L548 220 L536 248 L69 248 Z",
        glass: "M192 148 L228 112 L319 112 L348 148 Z",
        belt: "M106 163 L423 163 M428 151 L534 151"
      },
      van: {
        body: "M88 220 L105 112 L145 79 L429 79 L500 129 L535 220 L523 249 L78 249 Z",
        glass: "M137 126 L159 92 L408 92 L470 132 Z",
        belt: "M104 145 L501 145"
      },
      convertible: {
        body: "M100 219 L126 165 L197 145 L254 121 L371 121 L422 148 L503 169 L532 219 L522 244 L91 244 Z",
        glass: "M246 145 L276 125 L360 125 L394 146 Z",
        belt: "M124 166 L500 168"
      }
    };
    return paths[bodyType] || paths.sedan;
  }

  function buildVehicleFallbackSvg(data = {}) {
    const title = vehicleTitle(data);
    const paint = normalizePaintColor(data.color);
    const bodyType = classifyVehicleBody(data);
    const path = generatedBodyPaths(bodyType);
    const subtitle = [
      String(data.bodyClass || bodyType).replace(/\b\w/g, letter => letter.toUpperCase()),
      data.color ? String(data.color) : "Representative color"
    ].filter(Boolean).join(" • ");

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 640 360" role="img" aria-label="${escapeXml(title)} rough representative vehicle">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#111b2b"/>
            <stop offset="0.55" stop-color="#080d15"/>
            <stop offset="1" stop-color="#05080d"/>
          </linearGradient>
          <linearGradient id="paint" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${paint}" stop-opacity="1"/>
            <stop offset="0.52" stop-color="${paint}" stop-opacity="0.92"/>
            <stop offset="1" stop-color="#242d37" stop-opacity="0.98"/>
          </linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#29425a"/>
            <stop offset="1" stop-color="#101a25"/>
          </linearGradient>
          <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feGaussianBlur stdDeviation="9"/>
          </filter>
        </defs>
        <rect width="640" height="360" fill="url(#bg)"/>
        <circle cx="95" cy="57" r="118" fill="#317ccc" opacity="0.09"/>
        <circle cx="590" cy="44" r="146" fill="#5b9ee7" opacity="0.06"/>
        <path d="M0 272 H640 V360 H0 Z" fill="#0d141e"/>
        <path d="M0 272 H640" stroke="#2d4056" stroke-opacity="0.45"/>
        <ellipse cx="315" cy="263" rx="239" ry="31" fill="#000" opacity="0.46" filter="url(#shadow)"/>

        <g>
          <path d="${path.body}" fill="url(#paint)" stroke="#d8e5ef" stroke-opacity="0.21" stroke-width="2.3"/>
          <path d="${path.glass}" fill="url(#glass)" stroke="#8bc5ef" stroke-opacity="0.30" stroke-width="1.8"/>
          <path d="${path.belt}" fill="none" stroke="#d6e0ea" stroke-opacity="0.20" stroke-width="1.7"/>
          <path d="M105 219 H526" stroke="#020509" stroke-opacity="0.34" stroke-width="3"/>
          <path d="M132 181 H182" stroke="#edf5fa" stroke-opacity="0.72" stroke-width="8" stroke-linecap="round"/>
          <path d="M482 184 H518" stroke="#e15858" stroke-opacity="0.82" stroke-width="7" stroke-linecap="round"/>

          <g>
            <circle cx="180" cy="243" r="42" fill="#080b10" stroke="#ccd7e0" stroke-opacity="0.14" stroke-width="3"/>
            <circle cx="180" cy="243" r="23" fill="#78838e"/>
            <circle cx="180" cy="243" r="9" fill="#27313c"/>
            <circle cx="456" cy="243" r="42" fill="#080b10" stroke="#ccd7e0" stroke-opacity="0.14" stroke-width="3"/>
            <circle cx="456" cy="243" r="23" fill="#78838e"/>
            <circle cx="456" cy="243" r="9" fill="#27313c"/>
          </g>
        </g>

        <g font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif" text-anchor="middle">
          <text x="320" y="309" fill="#f3f7fb" font-size="22" font-weight="750">${escapeXml(title)}</text>
          <text x="320" y="334" fill="#8fa1b5" font-size="13">${escapeXml(subtitle)} • Rough VIN-based preview</text>
        </g>
      </svg>`;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg.replace(/\s{2,}/g, " ").trim());
  }

  function generatedImageResult(data = {}) {
    return {
      src: buildVehicleFallbackSvg(data),
      type: "generated",
      label: "ROUGH VIN MATCH",
      title: vehicleTitle(data),
      credit: GENERATED_PROVIDER,
      license: "Generated inside this browser",
      sourcePage: "",
      provider: GENERATED_PROVIDER
    };
  }

  function tokenList(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
      .split(/\s+/)
      .filter(token => token.length > 1);
  }

  function candidateScore(text, data = {}) {
    const lower = String(text || "").toLowerCase().replace(/[_-]+/g, " ");
    const year = String(data.year || "").toLowerCase();
    const makeTokens = tokenList(data.make);
    const modelTokens = tokenList(data.model);
    const trimTokens = tokenList(data.trim);
    let score = 0;

    if (year && lower.includes(year)) score += 7;
    makeTokens.forEach(token => { if (lower.includes(token)) score += 7; });
    modelTokens.forEach(token => { if (lower.includes(token)) score += 8; });
    trimTokens.forEach(token => { if (lower.includes(token)) score += 2; });

    if (/front|side|three.?quarter|3.?4|left|right|sedan|coupe|suv|vehicle|automobile|car/.test(lower)) score += 3;
    if (/rear only|interior|dashboard|engine|diagram|drawing|logo|badge|emblem|wheel|toy|model car|miniature|police|taxi|race|wreck|crash|burnt|brochure|advertisement|render/.test(lower)) score -= 10;

    const requiredMake = makeTokens.length === 0 || makeTokens.some(token => lower.includes(token));
    const requiredModel = modelTokens.length === 0 || modelTokens.some(token => lower.includes(token));
    if (!requiredMake) score -= 18;
    if (!requiredModel) score -= 18;

    return score;
  }

  async function fetchJson(url) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 9000);
    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        signal: controller.signal
      });
      if (!response.ok) throw new Error("Image provider returned " + response.status);
      return await response.json();
    } finally {
      clearTimeout(timer);
    }
  }

  async function searchWikimediaCommons(data = {}) {
    const year = String(data.year || "").trim();
    const make = String(data.make || "").trim();
    const model = String(data.model || "").trim();
    const trim = String(data.trim || "").trim();
    if (!make || !model) return null;

    const queries = [
      [year, make, model, trim, "automobile"].filter(Boolean).join(" "),
      [year, make, model, "car"].filter(Boolean).join(" "),
      [make, model, "automobile"].filter(Boolean).join(" ")
    ];

    let candidates = [];
    for (const query of queries) {
      const params = new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        generator: "search",
        gsrsearch: query,
        gsrnamespace: "6",
        gsrlimit: String(MAX_RESULTS),
        prop: "imageinfo",
        iiprop: "url|extmetadata",
        iiurlwidth: "1280"
      });
      const json = await fetchJson("https://commons.wikimedia.org/w/api.php?" + params.toString());
      const pages = Object.values(json?.query?.pages || {});
      candidates.push(...pages.map(page => {
        const info = page.imageinfo?.[0];
        const title = String(page.title || "").replace(/^File:/i, "");
        return { page, info, title, score: candidateScore(title, data) };
      }).filter(item => item.info && (item.info.thumburl || item.info.url)));

      if (candidates.some(item => item.score >= 20)) break;
    }

    candidates.sort((a, b) => b.score - a.score);
    const best = candidates[0];
    if (!best || best.score < 13) return null;

    const meta = best.info.extmetadata || {};
    return {
      src: best.info.thumburl || best.info.url,
      type: "representative",
      label: "VIN MATCH",
      title: best.title.replace(/\.[^.]+$/, "").replace(/_/g, " "),
      credit: typeof stripMarkup === "function"
        ? stripMarkup(meta.Artist?.value || meta.Credit?.value || "Wikimedia Commons contributor")
        : "Wikimedia Commons contributor",
      license: typeof stripMarkup === "function"
        ? stripMarkup(meta.LicenseShortName?.value || "Wikimedia Commons license")
        : "Wikimedia Commons license",
      sourcePage: best.info.descriptionurl || ("https://commons.wikimedia.org/wiki/" + encodeURIComponent(best.page.title)),
      provider: "Wikimedia Commons"
    };
  }

  async function searchEnglishWikipedia(data = {}) {
    const make = String(data.make || "").trim();
    const model = String(data.model || "").trim();
    if (!make || !model) return null;

    const query = [data.year, make, model, data.trim].filter(Boolean).join(" ");
    const params = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      generator: "search",
      gsrsearch: query,
      gsrlimit: "8",
      prop: "pageimages|pageterms",
      piprop: "thumbnail|original",
      pithumbsize: "1280",
      pilimit: "max",
      redirects: "1"
    });

    const json = await fetchJson("https://en.wikipedia.org/w/api.php?" + params.toString());
    const pages = Object.values(json?.query?.pages || {})
      .map(page => ({
        page,
        title: String(page.title || ""),
        description: String(page.terms?.description?.[0] || ""),
        src: page.thumbnail?.source || page.original?.source || ""
      }))
      .filter(item => item.src)
      .map(item => ({ ...item, score: candidateScore(item.title + " " + item.description, data) }))
      .sort((a, b) => b.score - a.score);

    const best = pages[0];
    if (!best || best.score < 12) return null;

    return {
      src: best.src,
      type: "representative",
      label: "VIN MATCH",
      title: best.title,
      credit: "Wikipedia / Wikimedia",
      license: "See source page",
      sourcePage: "https://en.wikipedia.org/?curid=" + best.page.pageid,
      provider: "Wikipedia"
    };
  }

  function getCompatibleCache() {
    try {
      return typeof readVehicleImageCache === "function"
        ? readVehicleImageCache()
        : JSON.parse(localStorage.getItem("mycar_vehicle_image_cache_v1") || "{}");
    } catch {
      return {};
    }
  }

  function saveCompatibleCache(cache) {
    try {
      if (typeof saveVehicleImageCache === "function") saveVehicleImageCache(cache);
      else localStorage.setItem("mycar_vehicle_image_cache_v1", JSON.stringify(cache));
    } catch {}
  }

  async function autoFindRepresentativeVehicleImage(data = {}, { force = false } = {}) {
    const key = typeof normalizedVehicleKey === "function"
      ? normalizedVehicleKey(data)
      : vehicleTitle(data).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

    if (!key) return generatedImageResult(data);

    const cache = getCompatibleCache();
    const cached = cache[key];
    if (!force && cached?.src && !isStaleLocalVehicleImage(cached.src)) return cached;
    if (cached && isStaleLocalVehicleImage(cached.src)) delete cache[key];

    let result = null;
    try {
      result = await searchWikimediaCommons(data);
    } catch (error) {
      console.info("MY CAR Commons image search fallback:", error.message);
    }

    if (!result) {
      try {
        result = await searchEnglishWikipedia(data);
      } catch (error) {
        console.info("MY CAR Wikipedia image search fallback:", error.message);
      }
    }

    result ||= generatedImageResult(data);
    cache[key] = result;
    saveCompatibleCache(cache);
    return result;
  }

  function imageFieldsFromResult(result) {
    return {
      representativeImage: result?.src || "",
      representativeImageType: result?.type || "generated",
      representativeImageTitle: result?.title || "Representative vehicle",
      representativeImageCredit: result?.credit || GENERATED_PROVIDER,
      representativeImageLicense: result?.license || "",
      representativeImageSourcePage: result?.sourcePage || ""
    };
  }

  // Stop the original code from reintroducing the missing local vehicle folder.
  try {
    if (typeof DEFAULT_BUICK === "object") {
      DEFAULT_BUICK.representativeImage = "";
      DEFAULT_BUICK.representativeImageType = "";
    }
    if (typeof BUILTIN_BUICK_IMAGE === "object") BUILTIN_BUICK_IMAGE.src = "";
  } catch {}

  // Replace the app's image finder.
  try {
    findRepresentativeVehicleImage = autoFindRepresentativeVehicleImage;
  } catch (error) {
    console.error("MY CAR could not replace image finder:", error);
  }

  // Replace migration so missing images/vehicles paths are removed instead of restored.
  try {
    migrateVehicleImage = function patchedMigrateVehicleImage(vehicle = {}) {
      const next = { ...vehicle };
      if (isStaleLocalVehicleImage(next.representativeImage)) {
        next.representativeImage = "";
        next.representativeImageType = "";
        next.representativeImageTitle = "";
        next.representativeImageCredit = "";
        next.representativeImageLicense = "";
        next.representativeImageSourcePage = "";
      }
      return next;
    };
  } catch {}

  // Use owner photo first, then remote VIN match, then generated rough preview.
  try {
    vehicleImagePresentation = async function patchedVehicleImagePresentation(vehicle, context) {
      if (vehicle?.coverPhotoId) {
        try {
          const record = await getPhotoRecord(vehicle.coverPhotoId);
          if (record?.blob) {
            const src = URL.createObjectURL(record.blob);
            if (vehicleImageObjectUrls?.[context]) vehicleImageObjectUrls[context].push(src);
            return {
              src,
              fallbackSrc: buildVehicleFallbackSvg(vehicle),
              type: "owner",
              label: "YOUR PHOTO",
              title: "Your actual vehicle photo",
              credit: "Stored on this device",
              sourcePage: ""
            };
          }
        } catch {}
      }

      let workingVehicle = { ...vehicle };
      let result = null;

      if (workingVehicle.representativeImage && !isStaleLocalVehicleImage(workingVehicle.representativeImage)) {
        result = {
          src: workingVehicle.representativeImage,
          type: workingVehicle.representativeImageType || "representative",
          label: workingVehicle.representativeImageType === "generated" ? "ROUGH VIN MATCH" : "VIN MATCH",
          title: workingVehicle.representativeImageTitle || vehicleTitle(workingVehicle),
          credit: [workingVehicle.representativeImageCredit, workingVehicle.representativeImageLicense].filter(Boolean).join(" • ") || "Representative image",
          sourcePage: workingVehicle.representativeImageSourcePage || ""
        };
      } else {
        result = await autoFindRepresentativeVehicleImage(workingVehicle);
        workingVehicle = {
          ...workingVehicle,
          ...imageFieldsFromResult(result),
          updatedAt: new Date().toISOString()
        };
        try { upsertVehicle(workingVehicle); } catch {}
      }

      return {
        ...result,
        fallbackSrc: buildVehicleFallbackSvg(workingVehicle)
      };
    };
  } catch (error) {
    console.error("MY CAR could not replace image presentation:", error);
  }

  // Any failed remote image instantly changes to the generated rough preview.
  try {
    applyImageElement = function patchedApplyImageElement(img, presentation = {}) {
      if (!img) return;
      img.classList.add("vehicleImageLoading");
      let fallbackUsed = false;
      img.onload = () => img.classList.remove("vehicleImageLoading");
      img.onerror = () => {
        img.classList.remove("vehicleImageLoading");
        if (fallbackUsed) {
          img.onerror = null;
          return;
        }
        fallbackUsed = true;
        img.src = presentation.fallbackSrc || buildVehicleFallbackSvg({
          model: presentation.title || "Vehicle"
        });
      };
      img.src = presentation.src || presentation.fallbackSrc || buildVehicleFallbackSvg({ model: "Vehicle" });
    };
  } catch {}

  // Garage cards did not use applyImageElement, so replace the small renderer.
  try {
    renderGarage = async function patchedRenderGarage() {
      const vehicles = getVehicles().map(migrateVehicleImage);
      const vehicleCount = document.getElementById("garageVehicleCount");
      if (vehicleCount) vehicleCount.textContent = vehicles.length;

      const list = document.getElementById("garageVehicleList");
      if (!list) return;
      revokeVehicleImageUrls("garage");

      const activeVehicle = getActiveVehicle();
      const rows = await Promise.all(vehicles.map(async vehicle => ({
        vehicle,
        presentation: await vehicleImagePresentation(vehicle, "garage")
      })));

      list.innerHTML = rows.map(({ vehicle, presentation }, index) => {
        const active = vehicle.id === activeVehicle.id;
        const canOpen = vehicle.moduleSet === "buick-v1";
        return '<article class="garageVehicleCard" data-vehicle-card="' + escapeHtml(vehicle.id) + '">' +
          '<div class="garageVehicleImage">' +
            '<img data-garage-image="' + index + '" alt="' + escapeHtml(formatVehicleName(vehicle)) + '">' +
            '<span class="garageVehicleBadge">' + (active ? 'ACTIVE VEHICLE' : 'DIGITAL PROFILE') + '</span>' +
            '<span class="garageVehicleSource">' + escapeHtml(presentation.label || 'ROUGH VIN MATCH') + '</span>' +
            '<div class="garageVehicleCopy"><span>' + escapeHtml(vehicle.nickname || "My Vehicle") + '</span><h3>' + escapeHtml(formatVehicleName(vehicle)) + '</h3><p>' + escapeHtml([vehicle.engine, vehicle.drivetrain, vehicle.color].filter(Boolean).join(" • ")) + '</p></div>' +
          '</div>' +
          '<div class="garageVehicleActions">' +
            '<button class="primary" type="button" data-vehicle-open="' + escapeHtml(vehicle.id) + '">' + (canOpen ? 'Open Vehicle' : 'Open Profile') + '</button>' +
            '<button type="button" data-vehicle-twin="' + escapeHtml(vehicle.id) + '">Digital Twin</button>' +
            '<button type="button" data-vehicle-profile="' + escapeHtml(vehicle.id) + '">Profile</button>' +
          '</div>' +
        '</article>';
      }).join("");

      rows.forEach((row, index) => {
        applyImageElement(list.querySelector('[data-garage-image="' + index + '"]'), row.presentation);
      });

      list.querySelectorAll("[data-vehicle-open]").forEach(btn => btn.addEventListener("click", () => {
        setActiveVehicle(btn.dataset.vehicleOpen);
        const vehicle = getActiveVehicle();
        showScreen(vehicle.moduleSet === "buick-v1" ? "home" : "vehicleprofile");
      }));
      list.querySelectorAll("[data-vehicle-twin]").forEach(btn => btn.addEventListener("click", () => {
        setActiveVehicle(btn.dataset.vehicleTwin);
        showScreen("digitaltwin");
      }));
      list.querySelectorAll("[data-vehicle-profile]").forEach(btn => btn.addEventListener("click", () => {
        setActiveVehicle(btn.dataset.vehicleProfile);
        showScreen("vehicleprofile");
      }));

      const total = await countAllPhotos();
      const count = document.getElementById("garagePhotoCount");
      if (count) count.textContent = total;
    };
  } catch (error) {
    console.error("MY CAR could not replace Garage renderer:", error);
  }

  // Show whether the result is a real source image or a generated rough preview.
  try {
    showVinImageState = function patchedShowVinImageState(state, message = "") {
      const card = document.getElementById("vinVehicleImageCard");
      const img = document.getElementById("vinVehicleImagePreview");
      const placeholder = document.getElementById("vinVehicleImagePlaceholder");
      const badge = document.getElementById("vinVehicleImageBadge");
      if (!card || !img || !placeholder) return;
      card.classList.remove("hidden");

      if (state === "loading") {
        img.removeAttribute("src");
        img.classList.add("hidden");
        placeholder.classList.remove("hidden");
        placeholder.querySelector("b").textContent = message || "Finding a vehicle image…";
        document.getElementById("vinVehicleImageTitle").textContent = "Searching by decoded year, make, and model";
        document.getElementById("vinVehicleImageSource").textContent = "The VIN itself is not sent to the image search.";
        if (badge) badge.textContent = "SEARCHING";
        return;
      }

      if (state === "found" && vinPendingImage) {
        img.classList.remove("hidden");
        placeholder.classList.add("hidden");
        applyImageElement(img, {
          ...vinPendingImage,
          fallbackSrc: buildVehicleFallbackSvg(currentVinConfirmData())
        });
        document.getElementById("vinVehicleImageTitle").textContent = vinPendingImage.title || vehicleTitle(currentVinConfirmData());
        document.getElementById("vinVehicleImageSource").textContent = vinPendingImage.type === "generated"
          ? "A rough preview was generated from the decoded vehicle type."
          : [vinPendingImage.credit, vinPendingImage.license].filter(Boolean).join(" • ") || "Representative vehicle image";
        if (badge) badge.textContent = vinPendingImage.type === "generated" ? "ROUGH MATCH" : "VIN MATCH";
        return;
      }

      img.classList.add("hidden");
      placeholder.classList.remove("hidden");
      placeholder.querySelector("b").textContent = message || "A rough preview will be generated";
      document.getElementById("vinVehicleImageTitle").textContent = "Vehicle details are still ready";
      document.getElementById("vinVehicleImageSource").textContent = "No full VIN is sent to any image provider.";
      if (badge) badge.textContent = "ROUGH MATCH";
    };
  } catch {}

  // Save the actual image result type and recolor generated previews with the final chosen color.
  try {
    saveVinVehicle = async function patchedSaveVinVehicle() {
      const existing = vinEditingVehicleId ? getVehicles().find(item => item.id === vinEditingVehicleId) : null;
      const year = document.getElementById("vinYearConfirm").value.trim();
      const make = document.getElementById("vinMakeConfirm").value.trim();
      const model = document.getElementById("vinModelConfirm").value.trim();
      const trim = document.getElementById("vinTrimConfirm").value.trim();
      const bodyClass = document.getElementById("vinBodyConfirm").value.trim();
      const color = document.getElementById("vinColorInput").value.trim();
      const isBuickProfile = existing?.moduleSet === "buick-v1" || (
        year === "2010" && make.toLowerCase() === "buick" && model.toLowerCase().includes("lacrosse")
      );
      const id = existing?.id || [year, make, model, Date.now()].join("-")
        .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

      const finalImage = vinPendingImage?.type === "generated"
        ? generatedImageResult({ year, make, model, trim, bodyClass, color })
        : (vinPendingImage || await autoFindRepresentativeVehicleImage({ year, make, model, trim, bodyClass, color }));

      const vehicle = {
        ...(existing || {}),
        id,
        nickname: document.getElementById("vinNicknameInput").value.trim() || "My Vehicle",
        year,
        make,
        model,
        trim,
        engine: document.getElementById("vinEngineConfirm").value.trim(),
        drivetrain: document.getElementById("vinDriveConfirm").value.trim(),
        bodyClass,
        color,
        mileage: cleanNumber(document.getElementById("vinMileageInput").value),
        vin: vinPendingValue,
        vinMasked: maskVin(vinPendingValue),
        vinLinked: true,
        moduleSet: isBuickProfile ? "buick-v1" : "generic",
        manufactured: existing?.manufactured || "",
        gvwr: existing?.gvwr || "",
        frontGawr: existing?.frontGawr || "",
        rearGawr: existing?.rearGawr || "",
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...imageFieldsFromResult(finalImage),
        coverPhotoId: existing?.coverPhotoId || ""
      };

      upsertVehicle(vehicle);
      if (vinSelectedMainPhotoFile) {
        vehicle.coverPhotoId = await saveMainVehiclePhoto(vehicle, vinSelectedMainPhotoFile);
        upsertVehicle(vehicle);
      }

      vinEditingVehicleId = null;
      vinPendingValue = "";
      vinDecodedData = null;
      vinPendingImage = null;
      vinSelectedMainPhotoFile = null;
      if (vinSelectedMainPhotoUrl) {
        URL.revokeObjectURL(vinSelectedMainPhotoUrl);
        vinSelectedMainPhotoUrl = null;
      }
      showScreen("vehicleprofile");
    };
  } catch (error) {
    console.error("MY CAR could not replace VIN save flow:", error);
  }

  async function repairStoredVehicleImages() {
    try {
      const cache = getCompatibleCache();
      Object.keys(cache).forEach(key => {
        if (isStaleLocalVehicleImage(cache[key]?.src)) delete cache[key];
      });
      saveCompatibleCache(cache);

      const vehicles = getVehicles();
      if (!vehicles.length) return;

      const repaired = [];
      for (const original of vehicles) {
        let vehicle = migrateVehicleImage(original);
        if (!vehicle.representativeImage) {
          const result = await autoFindRepresentativeVehicleImage(vehicle);
          vehicle = {
            ...vehicle,
            ...imageFieldsFromResult(result),
            updatedAt: new Date().toISOString()
          };
        }
        repaired.push(vehicle);
      }
      saveVehicles(repaired);

      await renderGarage();
      if (typeof current !== "undefined") {
        if (current === "home") await renderVehicleHome();
        if (current === "vehicleprofile") await renderVehicleProfile();
        if (current === "digitaltwin") await renderDigitalTwin();
      }
    } catch (error) {
      console.error("MY CAR image repair failed:", error);
    }
  }

  window.MY_CAR_VIN_PHOTO_PATCH = {
    version: PATCH_VERSION,
    buildVehicleFallbackSvg,
    findRepresentativeVehicleImage: autoFindRepresentativeVehicleImage,
    repairStoredVehicleImages
  };

  // app.js runs its first render before this patch loads. Repair and rerender immediately after.
  Promise.resolve().then(repairStoredVehicleImages);
})();
