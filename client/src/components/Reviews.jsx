const cats = [['Cleanliness','5.0'],['Accuracy','5.0'],['Check-in','5.0'],['Communication','5.0'],['Location','4.8'],['Value','4.8']];
const list = [['Amit','2 months on Airbnb','1 week ago','Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.'],
 ['Aheesh','3 years on Airbnb','2 weeks ago','We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos.'],
 ['Samiksha','8 months on Airbnb','May 2026','the host nitish was really great help'],
 ['Vedant','4 years on Airbnb','May 2026','We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained.']];
export default function Reviews() {
  return (
    <section id="reviews" className="rev">
      <div className="score"><h2 className="big">4.95</h2><h3>Guest favourite</h3>
        <p>This home is a guest favourite based on ratings, reviews and reliability</p><a href="#how">How reviews work</a></div>
      <div className="cats">
        <div className="cat"><span>Overall rating</span>{[5,4,3,2,1].map((n) => <div key={n} className="bar"><i>{n}</i><b><em style={{ width: n === 5 ? '95%' : n === 4 ? '5%' : 0 }} /></b></div>)}</div>
        {cats.map(([n, v]) => <div key={n} className="cat"><span>{n}</span><strong>{v}</strong></div>)}
      </div>
      <div className="rlist">{list.map(([n, s, d, t]) => (
        <article key={n}><div className="who"><span className="av">{n[0]}</span><div><b>{n}</b><br /><small className="muted">{s}</small></div></div>
          <p className="stars">★★★★★ · {d}</p><p>{t}</p></article>))}</div>
    </section>
  );
}
