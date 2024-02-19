import { ModalService } from '@angloamerican/components';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {

  toggleModal: boolean = false;
  toggleModalTwo: boolean = false;
  toggleBlade: boolean = false;
  showModalGist: boolean = false;
  showModalEventGist: boolean = false;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  constructor(private modalService: ModalService) {}

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  openModal() {
    this.sub = this.modalService
      .openModal(this.entry,
        'Are you sure?',
        'This is your message to be displayed')
      .subscribe((v:any) => {
        //your logic
      });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
