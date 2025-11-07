import { Link } from "react-router";

export default function Error() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-red-600">404</h1>
      <h2 className="mt-4 mb-2 text-2xl font-semibold">Page Not Found</h2>
      <p className="mb-6 text-gray-600">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="rounded bg-green-600 px-6 py-2 text-white transition hover:bg-green-700"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
