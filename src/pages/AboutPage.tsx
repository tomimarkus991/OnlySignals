import { Link } from "react-router-dom";

export const AboutPage = () => (
  <div className="flex flex-col items-center justify-center h-[100vh] bg-slate-900">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white">About</h1>
    </div>
    <Link to="/" className="mt-6">
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
        Home
      </button>
    </Link>
  </div>
);
