import Image from "next/image";

interface ProductGalleryProps {
  image: string;
}

export default function ProductGallery({ image }: ProductGalleryProps) {
  return (
    <div className="aspect-square rounded-lg overflow-hidden relative">
      <Image
        src={image}
        alt="Product Image"
        fill
        className="object-contain p-4"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
      <div className="w-full h-full flex items-center justify-center hidden" style={{ backgroundColor: '#f0e7d3' }}>
        <div className="text-center">
          <div className="text-gray-400 text-lg font-medium mb-2">Product Image</div>
          <div className="text-gray-300 text-sm">{image}</div>
        </div>
      </div>
    </div>
  );
}
