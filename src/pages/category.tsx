// frontend/pages/Category.tsx
import { Link, useParams } from "react-router";
import { useCategoryProducts } from "../api/use";
import Breadcrumb from "../context/breadcrumb";
import CategoriesList from "../context/categorieslisk";
import TagList from "../context/taglisk";

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const { category, loading, error, products } = useCategoryProducts(
    slug ?? ""
  );

  return (
    <>
      <title>{category?.name ?? "Categories"}</title>

      <meta
        name="description"
        content={`Welcome to ${category?.name ?? "our store"}`}
      />

      {category && (
        <Breadcrumb
          title={category.name}
          links={[
            { name: "Product", path: "/shop" },
            { name: category.name, path: `/category/${category.slug}` },
          ]}
        />
      )}

      <div className="container mb-8">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <CategoriesList />
            <TagList />
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <h2 className="mb-4 text-xl font-semibold">
              {category?.name ?? "Category"}
            </h2>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {!loading && (!products || products.length === 0) ? (
              <p>No Products found</p>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products?.map(({ id, name, image, slug }) => (
                  <Link
                    to={`/product/${slug}`}
                    key={id}
                    className="block shadow transition hover:shadow-md"
                  >
                    <div className="flex h-[150px] items-center justify-center overflow-hidden bg-white md:h-[250px]">
                      <img
                        src={image}
                        alt={`Photo of ${name}`}
                        loading="lazy"
                        className="max-h-full object-contain"
                      />
                    </div>
                    <div className="p-2">
                      <p
                        className="h-[45px] overflow-hidden text-sm text-ellipsis"
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
