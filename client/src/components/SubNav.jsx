import { useEffect, useState } from 'react';
const tabs = ['photos', 'amenities', 'reviews', 'location'];
export default function SubNav({ price, nights }) {
  const [active, setActive] = useState('photos');
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500);
      const cur = tabs.filter((t) => document.getElementById(t)?.getBoundingClientRect().top < 120).pop();
      setActive(cur || 'photos');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <nav className="sub" aria-label="Listing sections"><div className="wrap row">
      <ul>{tabs.map((t) => <li key={t}><a href={'#' + t} aria-current={active === t ? 'true' : undefined}>{t[0].toUpperCase() + t.slice(1)}</a></li>)}</ul>
      <div className="sr"><div><b>₹{price.toLocaleString('en-IN')}</b> for {nights} nights<br /><small>★ 4.95 · 19 reviews</small></div><button className="reserve">Reserve</button></div>
    </div></nav>
  );
}
