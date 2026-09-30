const photos = [
  { src: 'https://picsum.photos/seed/goa-lounge/1000/1000', alt: 'Outdoor lounge with rattan chairs' },
  { src: 'https://picsum.photos/seed/goa-sitting/700/700', alt: 'Sitting area with cushions' },
  { src: 'https://picsum.photos/seed/goa-jacuzzi/700/700', alt: 'Private wooden-deck jacuzzi' },
  { src: 'https://picsum.photos/seed/goa-bedroom/700/700', alt: 'Bedroom with double bed' },
  { src: 'https://picsum.photos/seed/goa-building/700/700', alt: 'Apartment building exterior' },
];
export default function Gallery() {
  return (
    <div className="gal" id="photos">
      {photos.map((p, i) => <img key={i} className={'ph p' + i} src={p.src} alt={p.alt} loading={i === 0 ? 'eager' : 'lazy'} />)}
      <button className="showall">Show all photos</button>
    </div>
  );
}
