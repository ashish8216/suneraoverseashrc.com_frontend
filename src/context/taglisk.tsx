import { Link } from "react-router";
import { useTags } from "../api/use";

export default function TagList() {
  const { tags, loading, error } = useTags();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tags || tags.length === 0) return <p>No tags found</p>;

  return (
    <>
      <h2>Tags</h2>
      <div className="container">
        {tags.map(({ id, name, slug }) => (
          <Link to={`/tag/${slug}`} key={id}>
            <button className="m-1 mt-1 rounded bg-green-600 p-1 text-white transition hover:bg-green-700">
              {name}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
