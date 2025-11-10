import React, { useState, useEffect } from "react";

const ImagePopupAuto: React.FC = () => {
  const [open, setOpen] = useState(false);

  const imageUrl =
    "https://suneranepal.com.np/public//storage/files/1/87e832ef-12b9-4a95-8808-9c220b89d48c.jpg";

  // ✅ Auto open after short delay
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Close when clicking outside
  const handleBackdropClick = () => {
    setOpen(false);
  };

  // ✅ Prevent close when clicking image area
  const handleImageClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Custom fade-in animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out;
            }
          `,
        }}
      />

      {/* ✅ Popup Overlay */}
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
              alt="Popup"
              className="rounded-2xl shadow-2xl max-h-[80vh] object-contain animate-fadeIn"
            />

            {/* Close button */}
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
