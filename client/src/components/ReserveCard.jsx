const fmt = (t) => (t ? new Date(t).toLocaleDateString('en-US') : 'Add date');
export default function ReserveCard({ range, nights }) {
  return (
    <aside className="side">
      <div className="promo"><span>Get 10% off your next stay.<br /><a href="#terms">Terms apply</a></span><button className="claim">Claim</button></div>
      <div className="card">
        <p className="pr"><u>₹{Math.round(nights * 5699.8).toLocaleString('en-IN')}</u> for {nights} nights</p>
        <div className="box"><div><small>CHECK-IN</small>{fmt(range.start)}</div><div><small>CHECKOUT</small>{fmt(range.end)}</div>
          <label className="guests"><small>GUESTS</small><select defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option></select></label></div>
        <p className="free">Free cancellation before <b>17 October</b></p>
        <button className="reserve big">Reserve</button>
        <p className="muted c">You won't be charged yet</p>
      </div>
      <a className="report" href="#report">Report this listing</a>
    </aside>
  );
}
