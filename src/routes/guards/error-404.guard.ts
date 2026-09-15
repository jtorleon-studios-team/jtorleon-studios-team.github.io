import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class Error404RedirectGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const IS_GH_404 = document.body.getAttribute("data-page-type") === "404";
    if (IS_GH_404) {
      this.router.navigate(["/error"]);
      return false;
    }
    return true;
  }
}
