///  <reference types="@angular/localize" /> 
import { LOCALE_ID } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideRouter, withComponentInputBinding, withHashLocation } from "@angular/router";
import { MainComponent } from "./views/main.component";

import { ErrorComponent } from "./views/error.component";
import { HomeComponent } from "./views/home/home.component";
import { Route } from "@angular/router";
import { Error404RedirectGuard } from "guards/error-404.guard";
import { PrivacyPolicyComponent } from "views/privacy/privacy-policy.component";
import { ContactsUsComponent } from "views/contact/contact-us.component";
import { ProjectsComponent } from "views/projects/projects.component";

export const IS_GH_404 = document.body.getAttribute("data-page-type") === "404";

export const ROUTES: Route[] = [
  // |"/"| & |"/index.html"| -> HomeComponent
  { path: "index.html", redirectTo: "" },
  { component: HomeComponent, path: "", pathMatch: "full", canActivate: [Error404RedirectGuard] },

  { component: PrivacyPolicyComponent, path: "privacy-policy" },
  { component: ContactsUsComponent, path: "contact-us" },
  { component: ProjectsComponent, path: "projects" },
  // other -> error
  { component: ErrorComponent, path: "error" },
  { component: ErrorComponent, path: "**" }
]


bootstrapApplication(MainComponent, {
  providers: [

    provideRouter(ROUTES,
      withHashLocation(),
      withComponentInputBinding()
    ),

    provideHttpClient(withFetch()),

    {
      provide: LOCALE_ID,
      useValue: "en-US"
    }
  ]
}).catch(e => console.error(e));
