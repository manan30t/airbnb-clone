import { useState } from 'react';
import Header from '../components/Header.jsx';
import Gallery from '../components/Gallery.jsx';
import SubNav from '../components/SubNav.jsx';
import Calendar from '../components/Calendar.jsx';
import ReserveCard from '../components/ReserveCard.jsx';
import Reviews from '../components/Reviews.jsx';
import Nearby from '../components/Nearby.jsx';

const amenities = ['Kitchen','Wifi','Dedicated workspace','Free parking on premises','Pool','Hot tub','Pets allowed','Exterior security cameras on property'];

export default function Home() {
  const [range, setRange] = useState({ start: new Date(2026, 9, 18).getTime(), end: new Date(2026, 9, 23).getTime() });
  const nights = range.start && range.end ? Math.round((range.end - range.start) / 864e5) : 0;
  return (
    <>
      <Header />
      <SubNav price={Math.round(nights * 5699.8)} nights={nights} />
      <main className="wrap">
        <div className="titlebar"><h1>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>
          <div className="actions"><button className="link">Share</button><button className="link">Save</button></div></div>
        <Gallery />
        <div className="cols">
          <div className="left">
            <section><h2>Entire serviced apartment in Candolim, India</h2><p className="muted">3 guests · 1 bedroom · 1 bed · 1 bathroom</p></section>
            <section id="amenities"><h2>What this place offers</h2>
              <ul className="amen">{amenities.map((a) => <li key={a}>{a}</li>)}
                <li className="off">Carbon monoxide alarm</li><li className="off">Smoke alarm</li></ul>
              <button className="btn-outline">Show all 50 amenities</button></section>
            <section><h2>{nights} nights in Candolim</h2>
              <Calendar range={range} onChange={setRange} />
              <button className="link clear" onClick={() => setRange({ start: null, end: null })}>Clear dates</button></section>
          </div>
          <ReserveCard range={range} nights={nights} />
        </div>
        <Reviews />
        <section id="location"><h2>Where you’ll be</h2><div className="map" role="img" aria-label="Approximate location map">
          <div className="pin" /></div><p>Exact location will be provided after booking.</p></section>
        <Nearby />
      </main>
    </>
  );
}
