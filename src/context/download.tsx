import { Link } from "react-router";
import { useDownload } from "../api/use";

export default function Down() {
  const { download, loading, error } = useDownload();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!download || download.length === 0) return <p>No Download found</p>;

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Downloads</h2>
      <ul className="space-y-4">
        {download.map(({ title, pdf }, id) => (
          <li
            key={id}
            className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>

            {/* Direct file download */}
            <Link
              to={pdf}
              download
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Download
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
