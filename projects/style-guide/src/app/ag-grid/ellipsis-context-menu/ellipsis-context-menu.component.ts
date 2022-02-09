import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { openAgGridContextMenuOnClick } from './context-menu.function';

@Component({
  selector: 'app-ellipsis-context-menu',
  templateUrl: './ellipsis-context-menu.component.html',
})
export class EllipsisContextMenuComponent implements ICellRendererAngularComp {
  private params: ICellRendererParams;

  value: string;
  showEllipsis = true;

  agInit(params: ICellRendererParams) {
    this.params = params;
    this.value = params.value;
  }

  showMenu(mouseEvent: MouseEvent) {
    openAgGridContextMenuOnClick(this.params, mouseEvent);
  }

  refresh(): boolean {
    return false;
  }
  
}