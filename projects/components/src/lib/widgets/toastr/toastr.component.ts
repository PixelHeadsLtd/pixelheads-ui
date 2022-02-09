import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aa-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
