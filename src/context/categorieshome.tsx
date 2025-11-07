import { Link } from "react-router";
import { useCategories } from "../api/use";

export default function CategoriesHome() {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!categories || categories.length === 0) return <p>No category found</p>;

  // Top-level categories (no parentId)
  const parents = categories.filter((cat) => cat.parentId === null);

  // Subcategories for each parent
  const getChildren = (parentId: number) =>
    categories.filter((cat) => cat.parentId === parentId);

  return (
    <div className="container mx-auto mb-8 px-4">
      <h2 className="mb-6 text-center text-2xl font-semibold">Category</h2>

      <div className="space-y-10">
        {parents.map((parent) => (
          <div key={parent.id} className="mt-2 border-t-2 pt-2">
            <div className="flex flex-col md:flex-row">
              {/* Parent Category */}
              <Link to={`/category/${parent.slug}`} className="w-full md:w-1/3">
                <div className="flex h-[220px] w-full items-center justify-center overflow-hidden md:h-auto">
                  <img
                    src={parent.image}
                    alt={`Photo of ${parent.name}`}
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3 text-center text-lg font-medium">
                  {parent.name}
                </div>
              </Link>

              {/* Subcategories */}
              <div className="w-full px-2 pt-2 pb-2 md:w-1/1">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                  {getChildren(parent.id).map((sub) => (
                    <Link key={sub.id} to={`/category/${sub.slug}`}>
                      <div className="flex h-[120px] w-full items-center justify-center overflow-hidden bg-gray-50 md:h-[180px]">
                        <img
                          src={sub.image}
                          alt={`Photo of ${sub.name}`}
                          aria-hidden="true"
                          loading="lazy"
                          className="h-full w-full bg-white object-contain"
                        />
                      </div>
                      <div className="mt-2 text-center text-sm font-medium">
                        {sub.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
