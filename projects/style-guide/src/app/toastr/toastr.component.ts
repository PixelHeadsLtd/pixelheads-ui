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

  toastrHTML = 
  `<aa-toastr>
    <aa-toastr-item
        (closeToastr)="triggerToastr()"
        [showToastr]="error" 
        [isError]="true"
        heading="What the!"
        message="OK chaps, looks like there's a serios error going on here, but I reckon we can fox it..."
     >
    </aa-toastr-item>
    <aa-toastr-item
        (closeToastr)="triggerToastr()"
        [showToastr]="warning" 
        [isWarning]="true"
        heading="That's not so bad"
        message="Well I guess this isn't as bad as it looks, probably needs investigation though..."
    >
    </aa-toastr-item>
    <aa-toastr-item
        (closeToastr)="triggerToastr()"
        [showToastr]="success" 
        [isSuccess]="true"
        heading="This is amazing"
        message="OK, a bit pat on the back for everyone..."
    >
    </aa-toastr-item>
    <aa-toastr-item
        (closeToastr)="triggerToastr()"
        [showToastr]="info" 
        [isInfo]="true"
        heading="Guess what"
        message="I thought you might wanna knwo about this..."
    >
    </aa-toastr-item>
</aa-toastr>`;

  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
  
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit(): void {
  }

}
