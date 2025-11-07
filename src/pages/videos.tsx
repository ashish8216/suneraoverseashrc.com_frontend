import { useVideo } from "../api/use";
import Breadcrumb from "../context/breadcrumb";

export default function Videos() {
  const { videos, loading, error } = useVideo();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!videos || videos.length === 0) return <p>No Video found</p>;

  return (
    <>
      <title>Videos</title>

      <Breadcrumb
        title="Videos"
        links={[{ name: "Videos", path: "/videos" }]}
      />

      <div className="container my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map(({ id, title, video }) => (
          <div key={id} className="aspect-video">
            {video}
            <br />
            <b>{title}</b>
          </div>
        ))}
      </div>
    </>
  );
}
