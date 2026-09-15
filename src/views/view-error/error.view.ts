import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { BaseComponent } from "../component.base";
import { Subscription } from "rxjs";

@Component({
  selector: "app-error", standalone: true,
  imports: [CommonModule],
  templateUrl: "./error.view.html",
  styleUrl: "./error.view.scss"
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
