import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public toggleBlade: boolean;

  constructor() { }

  commentsHTML = 
  `<div class="aa-comments">
  <div class="field">
      <label>Comment</label>
      <textarea [(ngModel)]="txtComment" placeholder="Your Comment"></textarea>
      <button *ngIf="txtComment" class="secondary margin-top-1" (click)="addComment()">Add comment</button>
  </div>
  
  <div class="field boxed" *ngIf="comments.length" >
      <div class="flex-group space-between flex-align-center">
          <h3>Comments ({{comments.length}})</h3>
          <a *ngIf="!toggleComments" (click)="toggleComments=!toggleComments" class="margin-top-0-5 cursor-pointer">hide</a>
          <a *ngIf="toggleComments" (click)="toggleComments=!toggleComments" class="margin-top-0-5 cursor-pointer">show</a>
      </div>
      <div *ngIf="!toggleComments" class="scroll-panel">
          <div class="scroll-panel-content" [ngStyle]="{'max-height':'8rem'}">
            <table class="table-comments">
              <thead>
                <tr>
                  <th width="62%"><div><span>Comment</span></div></th>
                  <th width="20%"><div><span>Added by</span></div></th>
                  <th width="16%"><div><span>Date added</span></div></th>
                  <th width="2"><div><span>&nbsp;</span></div></th>
                </tr>
              </thead>
              <tbody>
                  <tr *ngFor="let cmt of comments"> 
                      <td title="{{ cmt }}">{{ cmt }}</td>
                      <td title="{{ name }}">{{ name }}</td>
                      <td title="{{ date }}">{{ date }}</td>
                      <td><button class="material-icons aa-red-100 transparent" (click)="removeComment($index)">delete_forever</button></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
  </div>
</div>`

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
  toggleComments: boolean;
  clicked = false;
  comments: string[] = [];
  txtComment: '';
  date: any = '15-Feb-2022';
  name: string = 'Michael Stuart King';

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


  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  ngOnInit(): void {
  }

}
