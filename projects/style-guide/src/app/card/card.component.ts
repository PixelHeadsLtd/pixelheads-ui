import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  cardView: boolean = true;
  cardViewLarge: boolean;
  listView: boolean;
  imgPath = "./assets/images/samples/darth.png";
  imgPath2 = "./assets/images/samples/obi-wan.png";
  imgPath3 = "./assets/images/samples/yoda.png";
  imgPath4 = "./assets/images/samples/luke.png";
  showCard: boolean;
  showCardOptional: boolean;
  showCardMini: boolean;
  showAvatar: boolean;
  showCardList: boolean;
  toggleBlade: boolean;
  cardDescription: string = 'This is the card description, it must not exceed two lines, therefore we are truncating large descriptions';
  
  constructor() {}
  
  public onClick() { 
    console.log('Hello I was clicked'); 
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {}
}
