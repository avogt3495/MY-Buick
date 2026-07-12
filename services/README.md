# MY CAR Model Resolver Service

The static app now supports an optional cloud model-resolution endpoint.

## Request
POST JSON with decoded vehicle fields only:
`year`, `make`, `model`, `trim`, `bodyClass`, `engine`, `drivetrain`.

The full VIN must not be sent to the model resolver. VIN decoding remains a separate step.

## Response
Return `accuracy` (`exact`, `generation`, `approximate`, or `universal`), `key`, `label`, `assetReady`, optional `asset`, `fallback`, `confidence`, `partNodes`, and `hinges`.

Until an endpoint is configured, the app resolves locally using generation families and automatic body-style templates.
