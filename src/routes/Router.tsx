import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@/pages";

import { routes } from ".";

const useThemeUtils = () => {
  const root = document.documentElement;

  useEffect(() => {
    if (localStorage.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const Router = () => {
  useThemeUtils();
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.to} path={route.to} element={route.element} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
