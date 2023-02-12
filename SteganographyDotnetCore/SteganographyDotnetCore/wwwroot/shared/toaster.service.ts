import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ToasterService {
  constructor(private snackBar: MatSnackBar) { }

  open(message: string) {
    this.snackBar.open(message, '', { duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom' });
  }
}
