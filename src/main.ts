///  <reference types="@angular/localize" /> 

import { bootstrapApplication } from "@angular/platform-browser";
import { withComponentInputBinding } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { withHashLocation } from "@angular/router";
import { withFetch } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { LOCALE_ID } from "@angular/core";

import { MainComponent } from "./views/main.component";
import { ROUTES } from "./routes/routes";

bootstrapApplication(
  MainComponent,
  {
    providers: [
      provideRouter(ROUTES,
        withHashLocation(),
        withComponentInputBinding()
      ),
      provideHttpClient(withFetch()),
      { provide: LOCALE_ID, useValue: "en-US" }
    ]
  })
  .catch(e => console.error(e));
