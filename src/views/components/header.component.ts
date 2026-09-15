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
      <a routerLink="/" class="glass">
        <img src="assets/img/android-chrome-192x192.png" alt="Logo of JTorLeon Studios"  />
      </a>
    </header>
  `,
  styles: `
    header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding:12.5px 0;

      a { padding: 8px }
      img { display:flex }
      a, img { border-radius: 100% }

      a:hover {
        background-color: rgba(255, 255, 255, 0.4);
        img { animation: rotate .5s ease-in-out }
      }

      @keyframes rotate {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
      }
    }
  `,
})
export class HeaderComponent {

  public constructor() { }

}
