import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SvgUseComponent } from "./svg-use.component";

@Component({
  standalone: true,
  selector: "app-header-component",
  imports: [
    RouterLink,
    CommonModule,
    SvgUseComponent
  ],
  template: `
    <header>
      <h1 class="title">
        <a routerLink="/">JTorLeon Studios</a>
      </h1>  
    </header>
  `,
  styles: `
    header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `,
})
export class HeaderComponent {

  public constructor() { }

}
