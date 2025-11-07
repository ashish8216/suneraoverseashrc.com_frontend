import { Link } from "react-router";
import { useServicesHome } from "../api/use";

export default function ServiceHome() {
  const { services, loading, error } = useServicesHome();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!services || services.length === 0) return <p>No service found</p>;

  return (
    <section className="container mx-auto px-4 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map(({ content, id, slug, title }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <Link to={`/service/${slug}`}>
              <img
                src={content.image}
                alt={title}
                aria-hidden="true"
                loading="lazy"
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-3">
                <b>{title}</b>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
