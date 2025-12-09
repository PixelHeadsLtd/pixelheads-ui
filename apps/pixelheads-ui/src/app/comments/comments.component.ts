import { Component } from '@angular/core';
import { CommentArray } from '@pixelheads/ui';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  toggleBlade: boolean = false;
  userName: string = 'Michael King';
  commentsArray: CommentArray[] = [];

  addComment(comment: CommentArray) {
    // Check if the comment already exists in commentsArray
    const exists = this.commentsArray.some(c =>
      c.comment === comment.comment &&
      c.userName === comment.userName &&
      c.currentDate === comment.currentDate
    );

    // Add the comment only if it doesn't already exist
    if (!exists) {
      this.commentsArray.push(comment);
    }
  }

  onCommentRemoved(index: number) {
    console.log('You removed comment ' + index);
    // Do something...
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
