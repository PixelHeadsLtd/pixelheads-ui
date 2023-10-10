import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'aa-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastrComponent implements OnInit {

  @Input() zIndex: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
