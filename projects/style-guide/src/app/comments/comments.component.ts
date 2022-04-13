import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  toggleBlade: boolean;
  toggleComments: boolean;
  clicked = false;
  comments: string[] = [];
  txtComment: '';
  date: any = '15-Feb-2022';
  name: string = 'Michael Stuart King';

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  addComment() {
    if(this.txtComment) {
      this.comments.push(this.txtComment);
      this.txtComment = '';
    } else {
      this.clicked = true;
    }
  }

  removeComment($index) {
    this.comments.splice($index, 1);
  }

  ngOnInit(): void {
  }

}
