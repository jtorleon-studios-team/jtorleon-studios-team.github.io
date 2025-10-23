import { Route } from "@angular/router";
import { ErrorComponent } from "../views/view-error/error.view";
import { HomeComponent } from "../views/view-home/home.view";
import { Error404RedirectGuard } from "./guards/error-404.guard";

export const ROUTES: Route[] = [
  // |"/"| & |"/index.html"| -> HomeComponent
  { path: "index.html", redirectTo: "" },
  {
    component: HomeComponent, path: "",
    pathMatch: "full",
    canActivate: [Error404RedirectGuard]
  },

  // other -> error
  { component: ErrorComponent, path: "error" },
  { path: "**", redirectTo: "error" }
]
