import { Route } from "@angular/router";
import { ErrorComponent } from "../views/view-error/error.view";
import { HomeComponent } from "../views/view-home/home.view";
import { Error404RedirectGuard } from "./guards/error-404.guard";
import { PrivacyPolicyComponent } from "../views/view-privacy/privacy-policy.view";
import { ContactsUsComponent } from "../views/view-contact/contact-us.view";
import { DiscordRedirectGuard } from "./guards/discord-redirect.guard";

export const ROUTES: Route[] = [
  // |"/"| & |"/index.html"| -> HomeComponent
  { path: "index.html", redirectTo: "" },
  {
    component: HomeComponent, path: "",
    pathMatch: "full",
    canActivate: [Error404RedirectGuard]
  },

  {
    component: PrivacyPolicyComponent,
    path: "privacy-policy"
  },

  {
    component: ContactsUsComponent,
    path: "contact-us"
  },

  {
    path: "discord",
    canActivate: [DiscordRedirectGuard]
  },

  // other -> error
  { component: ErrorComponent, path: "error" },
  { path: "**", redirectTo: "error" }
]
