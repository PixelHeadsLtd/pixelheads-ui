import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

  error: boolean;
  warning: boolean;
  success: boolean;
  info: boolean;
  toggleBlade: boolean;

  triggerToastr() {
    if(this.error) {
      setTimeout(()=> {
        this.error = false;
      },5000);
    }
    if(this.warning) {
      setTimeout(()=> {
        this.warning = false;
      },5000);
    }
    if(this.success) {
      setTimeout(()=> {
        this.success = false;
      },5000);
    }
    if(this.info) {
      setTimeout(()=> {
        this.info = false;
      },5000);
    }
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
