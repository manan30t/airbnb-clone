# PRD: Airbnb Listing Clone

## Goal
Recreate the reference listing page (https://airbnb-clone-umber-two.vercel.app) as an original MERN app, matching visuals, motion, and keyboard/a11y behavior.

## Scope (from reference screenshots)
1. Header: logo, search pill (Anywhere / Anytime / Add guests), Become a host, language and menu buttons.
2. Title bar with Share and Save; 5-photo gallery grid with "Show all photos".
3. Sticky sub-nav (Photos, Amenities, Reviews, Location) with active underline; price and Reserve appear after scrolling past the gallery.
4. Overview, host row, highlights, translated-info notice, "Where you'll sleep".
5. Amenities grid with struck-through unavailable items; "Show all 50 amenities".
6. Two-month calendar (Oct/Nov 2026) with range selection and Clear dates.
7. Sticky reserve card: Claim promo, dates, guests, free-cancellation note, Reserve, report link.
8. Reviews: 4.95 laurel score, category ratings, filter chips, two-column review list.
9. Map block with pin and zoom controls; neighbourhood highlights.
10. Meet your host, co-hosts, host details, Message host.
11. Things to know (cancellation, house rules, safety) and "More stays nearby" carousel (1/2).

## Non-functional
- Pixel-level match at ~1900px desktop; responsive at tablet and mobile.
- Keyboard navigation, visible focus, semantic HTML, ARIA where needed.
- Hover, scroll and transition behavior matching the reference.
- Original code only; no copying of the reference source.

## Out of scope
Real booking, payments, auth, real map tiles.

## Success criteria
Side-by-side screenshot diff is minimal; Lighthouse accessibility 95+; `npm run dev` starts cleanly.
