import { Component, OnInit } from '@angular/core';
import { CommentArray } from 'projects/components/src/lib/elements/comments/comments.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  toggleBlade: boolean = false;
  userName: string = 'Michael King';
  commentsArray: CommentArray[] = [];

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }


}
