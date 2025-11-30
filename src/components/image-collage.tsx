const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpg",
  "/images/img13.jpg",
  "/images/img14.jpg",
  "/images/img15.jpg",
  "/images/img16.jpg",
  "/images/img17.jpg",
  "/images/img18.jpg",
  "/images/img19.jpg",
  "/images/img20.jpg",
];

export default function ImageCollage() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div
        className="
          grid 
          grid-cols-6 
          auto-rows-[150px]
          gap-4 
          w-full 
          max-w-6xl
        "
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden ${
              // Randomize some image spans to create an asymmetric collage look
              index % 7 === 0
                ? "col-span-3 row-span-2"
                : index % 5 === 0
                ? "col-span-2 row-span-2"
                : "col-span-2 row-span-1"
            }`}
          >
            <img
              src={src}
              alt={`collage-${index}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
