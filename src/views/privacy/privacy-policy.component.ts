import { BaseComponent } from "../base.component";
import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { HeaderComponent } from "../components/header.component";

declare let PRIVACY: [number, string][];

@Component({
  selector: "app-privacy-policy",
  standalone: true,
  templateUrl: "./privacy-policy.component.html",
  styleUrl: "./privacy-policy.component.scss",
  imports: [CommonModule, HeaderComponent]
})
export class PrivacyPolicyComponent extends BaseComponent implements OnInit, OnDestroy {

  public constructor(
    private readonly _route: ActivatedRoute,
    private readonly _title: Title,
    private readonly _meta: Meta
  ) {
    super(_title, _meta, "privacy-policy", "privacy-policy");
  }

  public override attachSubscriptions(): Subscription[] {
    return [];
  }

  public ngOnInit(): void {
    super.onInit();
  }

  public ngOnDestroy(): void {
    super.onDestroy();
  }


  public get privacyText(): [number, string][] {
    return PRIVACY;
  }

}
