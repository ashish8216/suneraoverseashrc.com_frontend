export default function Partners() {
  return (
    <div className="container mx-8">
      <h2 className=" text-center ">Partners</h2>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="box bg-white rounded-2xl  shadow-md p-6 w-50% text-center hover:shadow-lg transition">
          <img
            src="https://www.paradise.com.np/images/main-logo.png"
            alt="Partner 1"
            className="mx-auto h-16  object-contain"
          />
          <p className="mt-2 text-sm font-medium text-gray-700">Partner 1</p>
        </div>

        <div className="box bg-white rounded-2xl shadow-md p-6 w-50% text-center hover:shadow-lg transition">
          <img
            src="https://iglobal.edu.np/public/storage/files/2/1672224132Iglobal%20bridge%20to%20success.jpeg"
            alt="Partner 2"
            className="mx-auto h-16 object-contain"
          />
          <p className="mt-2 text-sm font-medium text-gray-700">Partner 2</p>
        </div>
      </div>
    </div>
  );
}
