import Image from "next/image";

const CaseImages = ({ color, images }) => {
  return (
    <div className="case__images" style={{ backgroundColor: color }}>
      {images.map(img => (
        <Image
          key={img.id}
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
        />
      ))}
    </div>
  );
}

export default CaseImages;
