import { Link } from "react-router-dom";

export const HomePage = () => (
  <div className="flex flex-col items-center justify-center h-[100vh] bg-slate-900">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white">OnlySignals</h1>
      <p className="mt-8 text-lg text-white">Get OneSignal notifications in your app</p>
    </div>
    <Link to="/about" className="mt-6">
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
        About
      </button>
    </Link>
  </div>
);
