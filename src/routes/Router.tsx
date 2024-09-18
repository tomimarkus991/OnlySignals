import OneSignal from "onesignal-cordova-plugin";
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

const OneSignalInit = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      return;
    }

    OneSignal.initialize("230811cb-f2d5-4b0e-9c4d-d33b31389924");

    OneSignal.Notifications.requestPermission(true);
  }, []);
};

export const Router = () => {
  useThemeUtils();

  OneSignalInit();

  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.to} path={route.to} element={route.element} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
