import { FaSearch } from "react-icons/fa";
const ProductSearchForm = () => {
  return (
    <form
      role="search"
      action="/search"
      method="GET"
      className="flex flex-nowrap items-center  w-[800px] max-w-full px-4 py-2 bg-white  "
      id="bb-form-quick-search"
    >
      {/* Search Input */}
      <input
        type="search"
        name="q"
        placeholder="Search for Products..."
        autoComplete="off"
        className="flex-1 min-w-0  p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
      />

      {/* Category Dropdown */}

      {/* Submit Button */}
      <button
        type="submit"
        title="Search"
        className="p-4 bg-green-700 text-white  hover:bg-green-800"
      >
        <FaSearch className="text-lg" />
      </button>
    </form>
  );
};

export default ProductSearchForm;
