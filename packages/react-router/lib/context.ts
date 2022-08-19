import * as React from "react";
import type { History, Location } from "history";
import { Action as NavigationType } from "history";

import type { RouteMatch, RouteObject } from "./router";

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */
export type Navigator = Pick<History, "go" | "push" | "replace" | "createHref">;

interface NavigationContextObject {
  basename: string;
  navigator: Navigator;
  static: boolean;
}

export const NavigationContext = React.createContext<NavigationContextObject>(
  null!
);

if (__DEV__) {
  NavigationContext.displayName = "Navigation";
}

interface LocationContextObject {
  location: Location;
  navigationType: NavigationType;
}

export const LocationContext = React.createContext<LocationContextObject>(
  null!
);

if (__DEV__) {
  LocationContext.displayName = "Location";
}

export interface RouteContextObject {
  outlet: React.ReactElement | null;
  current: RouteObject | null;
  matches: RouteMatch[];
  routes: RouteObject[];
  data: object | null;
}

export const RouteContext = React.createContext<RouteContextObject>({
  outlet: null,
  matches: [],
  routes: [],
  current: null,
  data: null,
});

if (__DEV__) {
  RouteContext.displayName = "Route";
}
