import { Subscription } from "rxjs";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

import { BaseComponent } from "@/views/base.component";
import { HeaderComponent } from "@/views/components/header.component";
import { FooterComponent } from "@/views/components/footer.component";
import { RainEmojiComponent } from "@/views/components/rain-emoji.component";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RainEmojiComponent
  ],
  selector: "app-root",
  template: `
    <noscript>
      <strong i18n>
        We're sorry but vue doesn't work properly without JavaScript enabled. Please
        enable it to continue.
      </strong>
    </noscript>
    <app-rain-emoji />
    <router-outlet />
    <app-footer-component />
  `,
})
export class MainComponent extends BaseComponent implements OnInit, OnDestroy {

  public constructor(private _titleInjected: Title, private _metaInjected: Meta) {
    super(_titleInjected, _metaInjected,
      "Link Tree - JTorLeon Studios Team",
      "Link Tree - JTorLeon Studios Team"
    );
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

}

