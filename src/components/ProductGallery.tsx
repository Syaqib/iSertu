interface ProductGalleryProps {
  image: string;
}

export default function ProductGallery({ image }: ProductGalleryProps) {
  return (
    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-lg font-medium mb-2">Product Image</div>
          <div className="text-gray-300 text-sm">{image}</div>
        </div>
      </div>
    </div>
  );
}
