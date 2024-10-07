import { BaseComponent } from "../base.component";
import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { HeaderComponent } from "../components/header.component";

@Component({
  selector: "app-contacts-us",
  standalone: true,
  templateUrl: "./contact-us.component.html",
  styleUrl: "./contact-us.component.scss",
  imports: [CommonModule, HeaderComponent]
})
export class ContactsUsComponent extends BaseComponent implements OnInit, OnDestroy {


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
