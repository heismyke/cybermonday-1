# Cyber Monday – Site 1 (Single-product landing page)

Q4 calibration e-commerce site for the **Cyber Monday** event.
Site 1 of 2: a focused sales page that sells **one hero product**.

| | |
|---|---|
| **Event** | Cyber Monday |
| **Type** | Single-product landing page |
| **Owner** | Person 6 |
| **Stack** | React + Vite |
| **Hosting** | Netlify (auto-deploy from `main`) |
| **Deliver by** | 3:00 AM WAT, 30 Sept 2026 |
| **Live URL** | _TBD_ |

## Concept

- **Brand name:** ONDE
- **Hero product:** ONDE One, wireless noise-cancelling headphones
- **Offer:** Cyber Monday, 69 900 FCFA instead of 129 000 FCFA (-46 %), free 48 h delivery, 2-year warranty, 38 left
- **Target customer:** commuters, students and open-space workers in Benin who want quiet
- **Mood / palette:** minimal dark tech, black `#0a0a0b`, off-white `#f4f4f2`, electric lime `#c8ff3e`
- **Fonts:** Inter Tight (text) + JetBrains Mono (numbers and prices), self-hosted
- **Language:** French
- **Images:** AI-generated, see [IMAGES.md](IMAGES.md) for the prompts and file names
- **Content:** all text and prices live in `src/data/product.js`

## Page sections (top to bottom)

1. **Announcement bar**: offer + countdown to the end of Cyber Monday
2. **Hero**: centred headline, price, "Je profite de -46 %" button, rating, sold-percentage bar, large product image
3. **Specs**: 4 key numbers (40 h, -35 dB, 10 min, 250 g)
4. **Features**: 2 alternating image/text blocks with checklists
5. **Reviews**: rating summary + 3 verified reviews
6. **Guarantees**: warranty, delivery, 30-day trial, secure payment
7. **FAQ**
8. **Final call to action**: large countdown, price, button
9. **Footer**: payment methods, WhatsApp, © 2026
10. **Sticky buy bar** on mobile, and an **order modal** that ends on an order-confirmed screen with a WhatsApp button

## Conversion checklist

**Attract**
- [x] Themed hero with a clear offer
- [x] Self-hosted fonts, lazy-loaded images
- [x] Works on mobile

**Retain**
- [x] Countdown timer to end of offer
- [x] Strong product visuals and specs

**Convince**
- [x] Old price crossed out, new price shown
- [x] Customer reviews + star rating
- [x] Warranty, returns, delivery, secure-payment badges
- [x] FAQ

**Convert**
- [x] Buy button visible straight away, sticky on mobile
- [x] Urgency (stock bar, "only X left")
- [x] Short order form, payment choice, WhatsApp confirmation

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
```

## Deploy

Netlify → *Add new site* → *Import from GitHub* → `team-q4-calibrage/cybermonday-1`

- Build command: `npm run build`
- Publish directory: `dist`
- Site name: random, not guessable (e.g. `cm1-xxxx.netlify.app`)

## Before submitting

- Add the images from [IMAGES.md](IMAGES.md).
- Replace the placeholder WhatsApp number (`whatsapp` in `src/data/product.js`).
- Keep this repo **private**; share the live link only in the team group.
