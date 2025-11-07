import { useTeam } from "../api/use";

export default function Teams() {
  const { team, loading, error } = useTeam();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!team || team.length === 0) return <p>No teams found</p>;

  return (
    <section className="container mx-auto px-4 mb-8">
      <h2 className="text-2xl font-semibold mb-4">teams</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {team.map(({ content, id, name }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={content.image}
              alt={name}
              aria-hidden="true"
              loading="lazy"
              className="rounded-t-lg w-full h-48 object-contain"
            />
            <div className="p-3">
              <h3>{name}</h3>
              <b>{content.post}</b>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
