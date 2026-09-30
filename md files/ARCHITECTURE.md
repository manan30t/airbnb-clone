# System Architecture

```
Browser (React + Vite, :5173)
   |  /api/*  (Vite dev proxy)
Express (:5000)  -->  routes -> controllers -> models
   |
MongoDB (optional; only if MONGO_URI is set)
```

## Client (`client/src`)
- `pages/Home.jsx`: owns booking state (selected date range) and composes sections.
- `components/`: Header, Gallery, SubNav (scroll-spy + sticky price bar), Calendar (range picker), ReserveCard, Reviews, Nearby (paged carousel).
- `index.css`: single stylesheet with CSS variables for colors and layout width.
- State: local React state only; date range is lifted to Home and shared by Calendar, ReserveCard and SubNav.

## Server (`server`)
- `server.js`: Express app, CORS, JSON, `/api/health`, optional Mongo connection.
- `routes/listing.js` and `controllers/listing.js`: serve listing summary data. Static content stays in the client until a data layer is needed.
- `models/`: reserved for Mongoose schemas (Listing, Review, Booking).

## Config
`server/.env`: `PORT`, `MONGO_URI`. Root scripts: `npm run dev | client | server`.

## Key decisions
- Plain CSS with variables, no UI libraries, to keep pixel control.
- Scroll-spy via a passive scroll listener; sticky elements use `position: sticky`.
- Placeholder gradients stand in for photos until real assets are added to `client/src/assets`.
