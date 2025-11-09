export default function Partners() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://iglobal.edu.np/public/storage/files/2/1672224132Iglobal%20bridge%20to%20success.jpeg"
              alt="Partner 1"
              className="max-h-28 w-auto object-contain"
            />
            <p className="mt-3 text-gray-700 text-sm font-medium">iGlobal Learining Center</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://www.paradise.com.np/images/main-logo.png"
              alt="Partner 2"
              className="max-h-28 w-auto object-contain"
            />
            <p className="mt-3 text-gray-700 text-sm font-medium">Paradise International (P) Ltd </p>
          </div>
        </div>
      </div>
    </section>
  );
}
