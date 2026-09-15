import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
 
@Component({
  selector: 'app-contact-dialog-component',
  templateUrl: 'contact.dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDialogComponent { }
