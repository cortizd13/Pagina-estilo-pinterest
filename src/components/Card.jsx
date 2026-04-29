function Card({ src, alt, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img loading="lazy" className="img-card" src={src} alt={alt} />
    </div>
  );
}

export default Card;