import { Link } from "react-router-dom";

export const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center h-[100vh] bg-slate-900">
    <p className="mb-3 text-3xl font-bold text-white">404 - Not Found</p>
    <Link to="/">
      <p className="text-lg text-white">Back to Home</p>
    </Link>
  </div>
);
