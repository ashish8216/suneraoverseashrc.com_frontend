import { Link } from "react-router";

type BreadcrumbLink = {
  name: string;
  path: string;
};

type BreadcrumbProps = {
  title: string;
  links?: BreadcrumbLink[];
};

export default function Breadcrumb({ title, links = [] }: BreadcrumbProps) {
  return (
    <>
      <section className="relative bg-[#000] bg-[url(/listicle_1721641295378_8ivo1_1000x333.avif)] bg-cover bg-no-repeat py-8">
        <div className="absolute inset-0 z-10 bg-[#000] bg-gradient-to-r opacity-60" />
        <div className="justify-left relative z-10 container mx-auto p-10">
          <h2 className="mb-4 py-2  font-semibold text-white">{title}</h2>
          <ul className="justify-left flex flex-wrap items-center space-x-2 text-sm sm:text-base font-semibold text-white">
            <li>
              <Link to="/" className="hover:underline px-2 py-1 inline-block">
                Home
              </Link>
            </li>
            {links.map(({ name, path }) => (
              <li key={path} className="flex items-center">
                <span className="mx-1">/</span>
                <Link
                  to={path}
                  className="hover:underline px-2 py-1 inline-block"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
