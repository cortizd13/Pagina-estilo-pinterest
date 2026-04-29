import Card from "./Card";
import images from "../data/images.json";

function Main({ onImageClick }) {
  return (
    <main>
      <div className="contenedor-principal">
        {images.map((img) => (
          <Card
            key={img.id}
            src={img.src}
            alt={img.alt}
            onClick={() => onImageClick(img.src)}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;