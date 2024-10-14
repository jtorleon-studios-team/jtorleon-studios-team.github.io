import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class DiscordRedirectGuard implements CanActivate {
  private static INVITE = "https://discord.gg/tCxberHPsd";

  constructor(private router: Router) { }

  canActivate(): boolean {
    window.location.href = DiscordRedirectGuard.INVITE;
    return false;
  }
}
