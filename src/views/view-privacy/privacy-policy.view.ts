import { HttpClient } from "@angular/common/http";
import { BaseComponent } from "../component.base";
import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Subscription } from "rxjs";


@Component({
  selector: "app-privacy-policy",
  standalone: true,
  templateUrl: "./privacy-policy.view.html",
  styleUrl: "./privacy-policy.view.scss",
  imports: [CommonModule, RouterLink]
})
export class PrivacyPolicyComponent extends BaseComponent implements OnInit, OnDestroy {
  private readonly _privacyText: [number, string][];

  public constructor(
    private readonly _route: ActivatedRoute,
    private readonly _title: Title,
    private readonly _meta: Meta,
    private readonly _httpClient: HttpClient,
  ) {
    super(_title, _meta, "privacy-policy", "privacy-policy");
    this._privacyText = [[0, "PRIVACY"]]
  }

  public override attachSubscriptions(): Subscription[] {
    return [
      this._httpClient.get("privacy-policy.txt", {
        responseType: "text"
      })
        .pipe()
        .subscribe(r => {
          console.log(r)
        })
    ];
  }

  public ngOnInit(): void {
    super.onInit();
  }

  public ngOnDestroy(): void {
    super.onDestroy();
  }


  public get privacyText(): [number, string][] {
    return this._privacyText;
  }

}
