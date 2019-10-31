import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  constructor(private toastr: ToastrService) { }

  public clickInfo(): void {
    this.toastr.info('This is informativ text', 'Info');
  }

  public clickSuccess(): void {
    this.toastr.success('This is successful text', 'Success');
  }

  public clickError(): void {
    this.toastr.error('This is error text', 'Error');
  }

}
