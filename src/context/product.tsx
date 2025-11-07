import { Link } from "react-router";
import { useShop } from "../api/use";
import CategoriesLis from "../context/categorieslisk";
import TagList from "../context/taglisk";
import { useState } from "react";

export default function Product() {
  const [page, setPage] = useState(1);

  const { products, pagination, loading, error } = useShop(page); // assuming your hook accepts (page, slug)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products || products.length === 0) return <p>No Products found</p>;

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(2, page - 1);
    const end = Math.min(pagination.last_page - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="container mb-8">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="w-full lg:w-1/4">
          <CategoriesLis />
          <TagList />
        </div>
        <div className="w-full lg:w-3/4">
          <h2>Products</h2>

          <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2">
            {products.map(({ id, name, image, slug }) => (
              <Link
                to={`/product/${slug}`}
                key={id}
                className="block shadow transition hover:shadow-md"
              >
                <div className="flex h-[150px] w-full items-center justify-center overflow-hidden bg-white md:h-[250px]">
                  <img
                    src={image}
                    alt={`Photo of ${name}`}
                    aria-hidden="true"
                    loading="lazy"
                    className="max-h-full object-contain"
                  />
                </div>
                <div className="p-2">
                  <p
                    className="h-[45px] overflow-hidden text-left text-sm text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex flex-wrap items-center justify-center space-x-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="m-1 rounded bg-gray-200 px-3 py-1 disabled:opacity-50"
            >
              Prev
            </button>

            <button
              onClick={() => setPage(1)}
              className={`m-1 rounded px-3 py-1 ${
                page === 1 ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              1
            </button>

            {page > 4 && <span className="px-2">...</span>}

            {getPageNumbers().map((pg) => (
              <button
                key={pg}
                onClick={() => setPage(pg)}
                className={`m-1 rounded px-3 py-1 ${
                  page === pg ? "bg-blue-500 text-white" : "bg-gray-100"
                }`}
              >
                {pg}
              </button>
            ))}

            {page < pagination.last_page - 3 && (
              <span className="px-2">...</span>
            )}

            {pagination.last_page > 1 && (
              <button
                onClick={() => setPage(pagination.last_page)}
                className={`m-1 rounded px-3 py-1 ${
                  page === pagination.last_page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {pagination.last_page}
              </button>
            )}

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === pagination.last_page}
              className="m-1 rounded bg-gray-200 px-3 py-1 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
