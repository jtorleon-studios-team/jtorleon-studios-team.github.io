import { BaseComponent } from "../component.base";
import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-contacts-us",
  standalone: true,
  templateUrl: "./contact-us.view.html",
  styleUrl: "./contact-us.view.scss",
  imports: [CommonModule, RouterLink]
})
export class ContactsUsComponent extends BaseComponent implements OnInit, OnDestroy {
  /* TODO need to implement contact view */
  public constructor(
    private readonly _route: ActivatedRoute,
    private readonly _title: Title,
    private readonly _meta: Meta
  ) {
    super(_title, _meta, "contacts-us", "contacts-us");
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
