import { 
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ModalService } from 'projects/components/src/lib/widgets/services/modal-service/modal.service';
// path in node_modules for devs - import { ModalService } from '@angloamerican/components/lib/widgets/services/modal-service/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  toggleModal: boolean;
  toggleBlade: boolean;
  showModalGist: boolean;
  showModalEventGist: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  constructor(private modalService: ModalService) {}

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  ngOnInit(): void {}

  openModal() {
    this.sub = this.modalService
      .openModal(this.entry, 
        'Are you sure?', 
        'This is your message to be displayed')
      .subscribe((v) => {
        //your logic
      });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
