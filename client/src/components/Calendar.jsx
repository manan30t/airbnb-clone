const dow = ['S','M','T','W','T','F','S'];
function Month({ y, m, range, pick }) {
  const first = new Date(y, m, 1).getDay(), n = new Date(y, m + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: n }, (_, i) => i + 1)];
  const today = new Date(2026, 8, 28).getTime();
  return (
    <div className="month"><h3>{new Date(y, m).toLocaleString('en', { month: 'long' })} {y}</h3>
      <div className="grid" role="grid">
        {dow.map((d, i) => <span key={i} className="dow">{d}</span>)}
        {cells.map((d, i) => {
          if (!d) return <span key={i} />;
          const t = new Date(y, m, d).getTime();
          const sel = t === range.start || t === range.end;
          const mid = range.start && range.end && t > range.start && t < range.end;
          return <button key={i} disabled={t < today} onClick={() => pick(t)} className={'day' + (sel ? ' sel' : '') + (mid ? ' mid' : '')} aria-pressed={sel}>{d}</button>;
        })}
      </div></div>
  );
}
export default function Calendar({ range, onChange }) {
  const pick = (t) => {
    if (!range.start || range.end || t <= range.start) onChange({ start: t, end: null });
    else onChange({ start: range.start, end: t });
  };
  return <div className="cal"><Month y={2026} m={9} range={range} pick={pick} /><Month y={2026} m={10} range={range} pick={pick} /></div>;
}
