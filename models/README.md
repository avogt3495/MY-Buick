# MY CAR Model Registry v3

This registry is no longer intended to contain every individual vehicle. It stores:

1. Prepared exact models when licensed assets exist.
2. Generation-family packages that cover many years and trims.
3. Automatic body-style templates for vehicles without a dedicated model.
4. A universal interactive fallback.

The optional cloud resolver can return a licensed GLB URL and part/hinge mappings. The client never sends the full VIN to the model resolver, only decoded vehicle fields.
