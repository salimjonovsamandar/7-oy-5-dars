import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-teal-400 w-full h-dvh">
      <h2 className="text-center text-red-500 text-9xl pt-32 pb-16 font-serif italic">
        Not Found
      </h2>
      <p className="text-center text-6xl pb-16 font-serif italic">
        Could not find requested resource
      </p>
      <Link
        className="btn btn-success w-64 text-white p-3 h-20 block mx-auto items-center text-center text-4xl "
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
