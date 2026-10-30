# Southgrown

A free South Australian food marketplace built with Sites and Vinext.

## Included

Responsive homepage, searchable marketplace, product and grower pages, signed-in seller profiles, photo uploads, editable listings, saved food and private buyer/seller conversations. D1 stores live records; R2 stores live photos. Only suburbs/postcodes are public location fields. Sample offers on the live marketplace are labelled and cannot be purchased or messaged; demo mode makes them interactive without contacting anyone.

## Demo walkthrough

Open `/demo` or choose **Try demo** in the header. The toolbar switches between Alex (buyer) and Lakeside Growers (seller). Demo state is saved only in this browser under `southgrown-demo-v1`; it never writes to D1, R2, the live messaging API or a payment service. **Reset demo** restores the catalogue, saved food, seller profile, and three prepared conversations. **Exit demo** returns to the live site. Hosted Site access still uses its existing private ChatGPT gate.

For a five-minute demo: browse 5095 → open the egg listing → Message grower → open the prepared pickup conversation → switch to Seller and reply → open My account to edit an active listing, show the sold-out spinach and publish the herb draft. Show the honey delivery and spinach availability chats from Messages. Online checkout stays a non-transactional preview; the optional AI helper stays disconnected.

Demo seller forms can use a prepared photo or load a local photo up to 2 MB. New and edited listings, drafts, favourites and messages survive a page refresh on the same browser. They do not sync to other devices. Larger changes may exceed browser storage; the UI reports when it cannot persist them.

Sign-in uses Sites' ChatGPT authentication. Direct purchases are arranged in messages. Online checkout is an explicitly non-functional visual preview, as requested; it collects no card details. Purchase history and purchase-linked reviews are deferred with ordering/payment backend work for V2.

The small listing-writing helper is optional and remains unavailable until an OpenAI service key is configured securely through Sites. Configure secret `OPENAI_API_KEY` using the OpenAI Developers plugin workflow; optional `OPENAI_MODEL` defaults to `gpt-5-mini`. It has a per-user hourly usage limit and suggestions must be accepted by the seller. No credentials belong in this repository.

## Local development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:5173/demo` for the self-contained demonstration. It needs no API keys, payment account or live database data.

To exercise the live marketplace locally, build once with `npm run build` and apply the schema before using the live routes:

```sh
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_thankful_gunslinger.sql
```

Generate future schema migrations with `npm run db:generate`. Run `node scripts/test-demo.mjs` for demo state checks. `node scripts/smoke.mjs` exercises the local live API and requires the dev server plus migrated local database; it creates development-only fixtures.

The hosting manifest identifies the existing Southgrown Site. Forks should use their own Site identity when deploying. See the bundled Sites skill for publishing.

## Scope

The postcode check accepts SA's 5xxx range; no distance calculation or address geocoding is implemented. Filter by suburb/postcode. No certification, identity or quality-verification badges are implied. Sellers must meet applicable food-sale requirements. Production starts owner-private for review; public access is a separate Sites setting.

Product photography is from Unsplash. Fonts: DM Sans and Manrope via Google Fonts.
