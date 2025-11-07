import Breadcrumb from "../context/breadcrumb";
import Teams from "../context/teams";

export default function Team() {
  return (
    <>
      <title>Team</title>

      <Breadcrumb title="Team" links={[{ name: "Team", path: "/team" }]} />
      <Teams />
    </>
  );
}
