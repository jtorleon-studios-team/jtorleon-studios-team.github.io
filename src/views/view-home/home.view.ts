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
    super(_title, _meta, "JTorLeon Studios - HUB", "Explore a wide range of projects, content, and services on platforms like Patreon, GitHub, Curseforge, Modrinth, and Fiverr. From discovering code and downloading mods to accessing professional services, everything you need is available in one place.");
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
