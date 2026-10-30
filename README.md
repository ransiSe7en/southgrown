# Southgrown

A free South Australian food marketplace built with Sites and Vinext.

## Included

Responsive homepage, searchable marketplace, product and grower pages, signed-in seller profiles, photo uploads, editable listings, saved food and private buyer/seller conversations. D1 stores records; R2 stores photos. Only suburbs/postcodes are public location fields. The example catalogue is labelled and cannot be purchased or messaged.

Sign-in uses Sites' ChatGPT authentication. Direct purchases are arranged in messages. Online checkout is an explicitly non-functional visual preview, as requested; it collects no card details. Purchase history and purchase-linked reviews are deferred with ordering/payment backend work for V2.

The small listing-writing helper is optional and remains unavailable until an OpenAI service key is configured securely through Sites. Configure secret `OPENAI_API_KEY` using the OpenAI Developers plugin workflow; optional `OPENAI_MODEL` defaults to `gpt-5-mini`. It has a per-user hourly usage limit and suggestions must be accepted by the seller. No credentials belong in this repository.

## Local development

Install with the Sites install helper, generate schema changes with `npm run db:generate`, build, and apply generated migrations with the starter's Wrangler local D1 command before `npm run dev`. See the bundled Sites skill for publishing.

## Scope

The postcode check accepts SA's 5xxx range; no distance calculation or address geocoding is implemented. Filter by suburb/postcode. No certification, identity or quality-verification badges are implied. Sellers must meet applicable food-sale requirements. Production starts owner-private for review; public access is a separate Sites setting.

Product photography is from Unsplash. Fonts: DM Sans and Manrope via Google Fonts.
