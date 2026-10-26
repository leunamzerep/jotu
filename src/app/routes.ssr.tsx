import type { RouteObject } from "react-router-dom";
import { routes } from "./routes";
import { PageTransition } from "@/components/layout/PageTransition";

export const createServerRoutes = (): RouteObject[] =>
  routes.map(({ path, Component }) => ({
    path,
    element: (
      <PageTransition>
        <Component />
      </PageTransition>
    ),
  }));
