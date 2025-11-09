import React, { useState, useEffect, MouseEvent } from "react";

const ImagePopupAuto: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const imageUrl: string =
    "https://images.unsplash.com/photo-1612832020729-4570bf0b236f?w=800&q=80";

  // ✅ Auto open on mount
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500); // slight delay for smooth entry
    return () => clearTimeout(timer);
  }, []);

  const handleBackdropClick = () => {
    setOpen(false);
  };

  const handleImageClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // prevent closing when clicking on image area
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Thumbnail */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        @keyframes fadeIn {\n  from { opacity: 0; transform: scale(0.95); }\n  to { opacity: 1; transform: scale(1); }\n}\n\n.animate-fadeIn {\n  animation: fadeIn 0.3s ease-out;\n}\n\n      ",
        }}
      />

      {/* Popup Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div
            className="relative max-w-3xl w-auto mx-4"
            onClick={handleImageClick}
          >
            <img
              src={imageUrl}
              alt="Preview"
              className="rounded-2xl shadow-2xl max-h-[80vh] object-contain animate-fadeIn"
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow"
              aria-label="Close image"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePopupAuto;
