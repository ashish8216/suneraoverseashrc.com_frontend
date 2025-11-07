import { useParams } from "react-router";
import { useService } from "../api/use";
import Breadcrumb from "../context/breadcrumb";

export default function ProjectOne() {
  const { slug } = useParams<{ slug: string }>();
  const { service, loading, error } = useService(slug ?? "");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;
  if (!service) return <p>No Service found.</p>;

  return (
    <>
      <title>{service.title}</title>

      <Breadcrumb
        title={service.title}
        links={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/service/${service.slug}` },
        ]}
      />
      <br />
      <div className="container mb-8 space-y-6">
        {/* Image Section */}
        <div>
          <img
            src={service.content.image}
            alt={`Photo of ${service.title}`}
            loading="lazy"
            className="h-auto w-full rounded-xl shadow"
          />
        </div>

        {/* Info Section */}
        <div>
          <h1 className="mb-2 text-3xl font-bold">{service.title}</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mb-8 space-y-6">
        {service.content.description ? (
          <section
            className="prose prose-sm rounded-lg bg-gray-50 p-4"
            dangerouslySetInnerHTML={{
              __html: service.content.description,
            }}
          />
        ) : (
          <p className="text-sm text-gray-500 italic">
            No description available.
          </p>
        )}
      </div>
    </>
  );
}
