import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { BaseComponent } from "./base.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-error", standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 15px">
      <h1 class="textCenter" i18n>Aie! Error 404, page not found !</h1>
    </div>`,
})
export class ErrorComponent extends BaseComponent implements OnInit, OnDestroy {

  public constructor(private _titleInjected: Title, private _metaInjected: Meta) {
    super(_titleInjected, _metaInjected,
      "Ai! Error 404, page not found !",
      "Ai! Error 404, page not found !"
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
