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
      bgColor: 'bg-ph-blue-sky-100',
      headingColor: 'force-white',
      iconColor: 'force-white',
      toggleIconColor: 'force-white'
    },
    {
      name: 'Episode II - Attack of the Clones',
      bgColor: 'bg-ph-lime-100',
      headingColor: 'force-white',
      iconColor: 'force-white',
      toggleIconColor: 'force-white'
    },
    {
      name: 'Episode III - Revenge of the Sith',
      bgColour: '',
      headingColor: 'ph-blue-100',
      iconColour: 'ph-blue-100',
      toggleIconColor: 'ph-blue-100'
    },
    {
      name: 'Episode IV - A New Hope',
      bgColor: 'bg-ph-blue-100',
      headingColor: 'force-white',
      iconColour: 'force-white',
      toggleIconColor: 'force-white'
    },
    {
      name: 'Episode V - The Empire Strikes Back',
      bgColor: 'bg-ph-red-100',
      headingColor: 'force-white',
      iconColour: 'force-white',
      toggleIconColor: 'force-white'
    },
    {
      name: 'Episode VI - Return of the Jedi',
      bgColor: 'bg-ph-orange-100',
      headingColor: 'force-white',
      iconColour: 'force-white',
      toggleIconColor: 'force-white'
    },
    {
      name: 'Episode VII - The Force Awakens',
      bgColor: 'bg-ph-green-100',
      headingColor: 'force-white',
      iconColor: 'force-white',
      toggleIconColor: 'force-white'
    },
    {
      name: 'Episode VIII - The Last Jedi',
      bgColor: 'bg-ph-grey-100',
      headingColor: 'ph-white-100',
      iconColor: 'ph-white-100',
      toggleIconColor: 'ph-white-100'
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
