import { useParams } from "react-router";
import { useProduct } from "../api/use";
import Breadcrumb from "../context/breadcrumb";

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const { product, loading, error } = useProduct(slug ?? "");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <>
      <title>{product.name}</title>

      <Breadcrumb
        title={product.name}
        links={[
          { name: "Shop", path: "/shop" },
          { name: product.name, path: `/product/${product.slug}` },
        ]}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2">
        {/* Image Section */}
        <div>
          <img
            src={product.image}
            alt={`Photo of ${product.name}`}
            aria-hidden="true"
            loading="lazy"
            className="h-auto w-full rounded-xl shadow"
          />
        </div>

        {/* Info Section */}
        <div>
          <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>

          <div className="mb-6 space-y-4 text-gray-500">
            {/* Category */}
            <div>
              <p className="text-sm font-semibold">Category:</p>
              {product.category && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.category.split(",").map((category, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full bg-green-100 px-2 py-1 text-sm"
                    >
                      {category.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Tag */}
            <div>
              <p className="mt-3 text-sm font-semibold">Tag:</p>
              {product.tag && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tag.split(",").map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block rounded-full bg-green-100 px-2 py-1 text-sm"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description / Specification / Video Section */}
      <div className="container mb-8 space-y-6">
        {product.description ? (
          <section
            className="prose prose-sm rounded-lg bg-gray-50 p-4"
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />
        ) : (
          <p className="text-sm text-gray-500 italic"></p>
        )}

        {product.video ? (
          <section
            className="prose prose-sm rounded-lg bg-gray-50 p-4"
            dangerouslySetInnerHTML={{
              __html: product.video,
            }}
          />
        ) : (
          <p className="text-sm text-gray-500 italic"></p>
        )}
      </div>
    </>
  );
}
