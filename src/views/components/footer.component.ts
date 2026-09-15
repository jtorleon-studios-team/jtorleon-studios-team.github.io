import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { RouterLink } from "@angular/router";
import { ContactDialogComponent } from "views/dialogs/contact/contact.dialog.component";
import { PrivacyDialogComponent } from "views/dialogs/privacy/privacy.dialog.component";
 
@Component({
  standalone: true,
  selector: "app-footer-component",
  imports: [RouterLink],
  template: `
    <footer>
      <p>
        <a 
          (click)="this.openContactDialog()"
          title="visit contact us!">contact us</a> -
        <a 
          (click)="this.openPrivacyDialog()"
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
export class FooterComponent {

  public constructor(
    private readonly dialog: MatDialog,
  ) { }
  public openContactDialog() { this.dialog.open(ContactDialogComponent) }
  public openPrivacyDialog() { this.dialog.open(PrivacyDialogComponent) }
}
