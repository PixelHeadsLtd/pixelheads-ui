import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  showVertOne: boolean = false;
  showVertTwo: boolean = false;
  showVertThree: boolean = false;
  showVertFour: boolean = false;
  showVertFive: boolean = false;

  showOne: boolean = false;
  showTwo: boolean = false;
  showThree: boolean = false;
  showFour: boolean = false;
  showFive: boolean = false;
  showSix: boolean = false;
  showSeven: boolean = false;
  showSevenNested: boolean = false;

  showCleanOne: boolean = false;
  showCleanTwo: boolean = false;

  showAccordion: boolean = false;
  showBespoke: boolean = false; 
  showAccordionVertical: boolean = false;
  showAccordionAlt: boolean = false;
  showDragDrop: boolean = false;

  showJustification: boolean = false;
  addJustification: boolean = false;

  toggleBlade: boolean = false;
  showBodyOne: boolean = false;

  constructor() { }

  movies = [
    {
      name: 'Episode I - The Phantom Menace',
      bgColor: 'bg-aa-blue-sky-100',
      headingColor: 'aa-white-100',
      iconColor: 'aa-white-100',
      toggleIconColor: 'aa-white-100'
    },
    {
      name: 'Episode II - Attack of the Clones',
      bgColor: 'bg-aa-lime-100',
      headingColor: 'aa-white-100',
      iconColor: 'aa-white-100',
      toggleIconColor: 'aa-white-100'
    },
    {
      name: 'Episode III - Revenge of the Sith',
      bgColour: '',
      headingColor: 'aa-blue-100',
      iconColour: 'aa-blue-100',
      toggleIconColor: 'aa-blue-100'
    },
    {
      name: 'Episode IV - A New Hope',
      bgColor: 'bg-aa-blue-100',
      headingColor: 'aa-white-100',
      iconColour: 'aa-white-100',
      toggleIconColor: 'aa-white-100'
    },
    {
      name: 'Episode V - The Empire Strikes Back',
      bgColor: 'bg-aa-red-100',
      headingColor: 'aa-white-100',
      iconColour: 'aa-white-100',
      toggleIconColor: 'aa-white-100'
    },
    {
      name: 'Episode VI - Return of the Jedi',
      bgColor: 'bg-aa-orange-100',
      headingColor: 'aa-white-100',
      iconColour: 'aa-white-100',
      toggleIconColor: 'aa-white-100'
    },
    {
      name: 'Episode VII - The Force Awakens',
      bgColor: 'bg-aa-green-100',
      headingColor: 'aa-white-100',
      iconColor: 'aa-white-100',
      toggleIconColor: 'aa-white-100'
    },
    {
      name: 'Episode VIII - The Last Jedi',
      bgColor: 'bg-aa-grey-100',
      headingColor: 'aa-white-100',
      iconColor: 'aa-white-100',
      toggleIconColor: 'aa-white-100'
    }
  ];

  openedIndex: number = 0;
  toggleMe: boolean = false;

  toggleAccordion(index: number) {
    this.openedIndex = index;
    console.log('you opened ' + this.openedIndex);

    if (index === 0) {
      this.movies
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  onClick() {
    console.log('You clicked');
  }

  justification() {
    this.showJustification = true;
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
