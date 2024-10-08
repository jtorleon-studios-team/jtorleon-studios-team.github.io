import { BaseComponent } from "../component.base";
import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.view.html",
  styleUrl: "./home.view.scss",
  imports: [CommonModule, RouterLink]
})
export class HomeComponent extends BaseComponent implements OnInit, OnDestroy {


  public constructor(
    private readonly _route: ActivatedRoute,
    private readonly _title: Title,
    private readonly _meta: Meta
  ) {
    super(_title, _meta, "home", "home");
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
