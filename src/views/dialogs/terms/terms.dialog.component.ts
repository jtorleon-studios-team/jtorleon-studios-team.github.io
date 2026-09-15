import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-dialog-component',
  templateUrl: 'terms.dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermDialogComponent { }
