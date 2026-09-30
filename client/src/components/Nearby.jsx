import { useState } from 'react';
const stays = [
  ['Beautiful Studio with a view to die for', '₹23,600', '4.91', 'nearby-1'],
  ['NAQAB - 1bhk with private pool', '₹42,218', '4.95', 'nearby-2'],
  ['Greentique Luxury Flat with plunge pool, Calangute', '₹44,506', '4.94', 'nearby-3'],
  ['The Tropical Studio | 5 mins to Beach', '₹22,824', '4.96', 'nearby-4'],
  ['Luxury Casa Bella 1BHK with plunge pool, Calangute', '₹39,942', '4.95', 'nearby-5'],
  ['Sunlit Loft, Baga', '₹31,200', '4.90', 'nearby-6'],
];
export default function Nearby() {
  const [page, setPage] = useState(0);
  return (
    <section className="near">
      <div className="nh"><h2>More stays nearby</h2>
        <div className="pg">{page + 1} / 2 <button aria-label="Previous" disabled={!page} onClick={() => setPage(0)}>‹</button><button aria-label="Next" disabled={page} onClick={() => setPage(1)}>›</button></div></div>
      <div className="stays">{stays.slice(page * 5, page * 5 + 5).map(([t, p, r, seed]) => (
        <a href="#stay" key={t}><img className="sm" src={`https://picsum.photos/seed/${seed}/400/400`} alt={t} loading="lazy" /><b>{t}</b><br />{p} ★ {r}</a>))}</div>
    </section>
  );
}
