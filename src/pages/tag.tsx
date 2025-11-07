import { useTagProducts } from "../api/use";
import Breadcrumb from "../context/breadcrumb";
import CategoriesList from "../context/categorieslisk";
import TagList from "../context/taglisk";
import { Link, useParams } from "react-router";

export default function Tag() {
  const { slug } = useParams<{ slug: string }>();
  const { tag, loading, error, products } = useTagProducts(slug ?? "");

  return (
    <>
      <title>{tag?.name ?? "Tag"}</title>

      {tag && (
        <Breadcrumb
          title={tag.name}
          links={[
            { name: "Product", path: "/shop" },
            {
              name: tag.name,
              path: `/tag/${tag.slug}`,
            },
          ]}
        />
      )}

      <div className="container mb-8">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/4">
            <CategoriesList />
            <TagList />
          </div>
          <div className="w-full lg:w-3/4">
            <h2>{tag?.name ?? "tag"}</h2>

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
            )}
          </div>
        </div>
      </div>
    </>
  );
}
