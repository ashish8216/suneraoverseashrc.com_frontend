import { Link, useSearchParams } from "react-router";
import { useSearch } from "../api/use";
import Breadcrumb from "../context/breadcrumb";
import CategoriesList from "../context/categorieslisk"; // fixed typo
import TagList from "../context/taglisk";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const { products, loading, error } = useSearch(query);

  return (
    <>
      <title>{`Search: ${query}`} </title>

      <Breadcrumb
        title={`Search: ${query}`}
        links={[{ name: "Product", path: "/shop" }]}
      />

      <div className="container mb-8">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/4">
            <CategoriesList />
            <TagList />
          </div>
          <div className="w-full lg:w-3/4">
            <h2>Search results for: {query}</h2>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-600">Error: {error}</p>}
            {!loading && products.length === 0 && (
              <p>No products found for "{query}".</p>
            )}

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map(({ id, name, image, slug }) => (
                <Link
                  to={`/product/${slug}`}
                  key={id}
                  className="block shadow transition hover:shadow-md"
                >
                  <div className="flex h-[150px] items-center justify-center overflow-hidden bg-white md:h-[250px]">
                    <img
                      src={image}
                      alt={name}
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
          </div>
        </div>
      </div>
    </>
  );
}
