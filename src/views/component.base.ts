
import { Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export abstract class BaseComponent {
  private _subscriptions: Subscription[];

  public constructor(
    private title: Title,
    private meta: Meta,
    contentTitle: string,
    contentDescription: string
  ) {
    this._subscriptions = [];
    this.setTitle(contentTitle);
    this.setDescription(contentDescription);
  }

  public onInit(): void {
    this._subscriptions = this.attachSubscriptions();
  }

  public onDestroy(): void {
    this._subscriptions.forEach(v => v.unsubscribe());
    this._subscriptions.splice(0, this._subscriptions.length);
  }

  public abstract attachSubscriptions(): Subscription[];

  public setTitle(contentTitle: string): void {
    this.title.setTitle(contentTitle);
    this.meta.updateTag({ name: 'og:title', content: contentTitle });
  }

  public setDescription(contentDescription: string): void {
    this.meta.updateTag({ name: 'description', content: contentDescription });
    this.meta.updateTag({ name: 'og:description', content: contentDescription });
  }

} 
