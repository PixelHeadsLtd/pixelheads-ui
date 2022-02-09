import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Subject } from 'rxjs';
@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html'
})

export class AvatarComponent implements ICellRendererAngularComp {
    public user: any;
    public isManager = false;
    public showNameAsHyperlink = true;
    private readonly destroy$ = new Subject();


    params;
    link: string;

    agInit(params): void {
      this.params = params;
      this.link = this.params.link || null;
    }

    refresh(params: any): boolean {
      return false;
    }

    onClick($event) {
      if (this.params.onClick instanceof Function) {
        // put anything into params u want pass into parents component
        console.log('This event handles your data');
        const params = {
          event: $event,
          rowData: this.params.node.data,
          // ...something
        }
        this.params.onClick(this.params);
      }
    }
  }