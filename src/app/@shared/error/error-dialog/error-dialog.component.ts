import { Component, OnInit, Inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { any } from 'cypress/types/bluebird';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent {
  @Input() title: string = 'An error has occurred!';
  @Input() status: string = '';
  @Input() statusText: string = '';
  @Input() url: string = '';
  @Input() message: string = '';

  constructor(public activeModal: NgbActiveModal) {}
}
