import { HttpClient } from "@angular/common/http";
import { BaseComponent } from "../component.base";
import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map, Subscription } from "rxjs";


@Component({
  selector: "app-privacy-policy",
  standalone: true,
  templateUrl: "./privacy-policy.view.html",
  styleUrl: "./privacy-policy.view.scss",
  imports: [CommonModule, RouterLink]
})
export class PrivacyPolicyComponent extends BaseComponent implements OnInit, OnDestroy {
  private _privacyText: [number, string][];

  public constructor(
    private readonly _route: ActivatedRoute,
    private readonly _title: Title,
    private readonly _meta: Meta,
    private readonly _httpClient: HttpClient,
  ) {
    super(_title, _meta,
      "JTorLeon Studios Privacy Policy",
      "Learn how we collect, use, and protect your personal " +
      "information in compliance with data privacy laws. Our" +
      " Privacy Policy ensures transparency and security for all users"
    );
    this._privacyText = [[0, "PRIVACY"]]
  }

  public override attachSubscriptions(): Subscription[] {
    return [
      this._httpClient.get("privacy-policy.txt", {
        responseType: "text"
      }).pipe(map(text => {
        const data: [number, string][] = [];
        const lines = text.split("\n");
        let currentParagraph: string = "";
        for (const line of lines) {
          const lineTrim = line.trim();
          // if title:
          if (lineTrim.startsWith("#")) {
            // close current paragraph
            if (currentParagraph.length > 0) {
              data.push([0, currentParagraph])
              currentParagraph = "";
            }

            const titleLevel = line.match(/^#+/)?.[0].length || 0;
            if (titleLevel > 0 && titleLevel <= 6) {
              data.push([titleLevel, line.slice(titleLevel).trim()]);
            }
          }
          // else other:
          else {
            currentParagraph += line;
          }
        }

        if (currentParagraph.length > 0) {
          data.push([0, currentParagraph])
        }

        return data
      }))
        .subscribe(r => { this._privacyText = r; }),
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
