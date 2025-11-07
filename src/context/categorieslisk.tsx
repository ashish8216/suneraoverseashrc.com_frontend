import { Link } from "react-router";
import { useCategories } from "../api/use";
import { useState } from "react";

export default function CategoriesLis() {
  const { categories, loading, error } = useCategories();
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!categories || categories.length === 0) return <p>No categories found</p>;

  const toggle = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const renderTree = (parentId: number | null) => {
    return categories
      .filter((cat) => cat.parentId === parentId)
      .map((cat) => {
        const hasChildren = categories.some(
          (child) => child.parentId === cat.id
        );
        const isExpanded = expandedIds.includes(cat.id);

        return (
          <li key={cat.id} className="py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link to={`/category/${cat.slug}`} className="hover:underline">
                  {cat.name} <span className="text-gray-500">({cat.item})</span>
                </Link>
              </div>

              {hasChildren && (
                <button
                  onClick={() => toggle(cat.id)}
                  className="text-green-600"
                  aria-label="Toggle Subcategories"
                >
                  {isExpanded ? "−" : "+"}
                </button>
              )}
            </div>

            {isExpanded && hasChildren && (
              <ul className="">{renderTree(cat.id)}</ul>
            )}
          </li>
        );
      });
  };

  return (
    <>
      <h2>Category</h2>
      <div className="container">
        <ul>{renderTree(null)}</ul>
      </div>
    </>
  );
}
