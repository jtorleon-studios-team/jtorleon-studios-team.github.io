import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-footer-component",
  imports: [RouterLink],
  template: `
    <footer>
      <p>
        <a routerLink="contact-us"
          title="visit contact us!">contact us</a> -
        <a routerLink="privacy-policy"
          title="see our privacy policy" 
          download="privacy-policy.txt">privacy policy</a>
      </p>
    </footer>
  `,
  styles: `
    footer {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--height-footer);
      width: 100%;
      background-color: rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(5px);
      z-index: 99;
    }
  `,
})
export class FooterComponent { }
