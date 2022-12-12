import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorDialogService {
  constructor(private modalService: NgbModal) {}

  openDialog(error: HttpErrorResponse): void {
    const modalRef = this.modalService.open(ErrorDialogComponent);
    modalRef.componentInstance.status = error.status;
    modalRef.componentInstance.statusText = error.statusText;
    modalRef.componentInstance.url = error.url;
    modalRef.componentInstance.message = error.message;
  }
}
