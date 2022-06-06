import { Component } from '@angular/core';
import { CarouselData } from '../class/carousel-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  currentIndex = 0;
  toggleBlade: boolean;

  carouselContent:CarouselData[] = [
    { 
      carouselHeading: 'Obi-Wan Kenobi', 
      carouselBody: 'A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a ment...', 
      carouselImage: 'assets/images/samples/obi-wan.png'
    },
    {
      carouselHeading: 'Yoda', 
      carouselBody: 'Yoda`s origins are a mystery; his species, as well as his species home planet is unknown. At some point, he joined the Jedi Order, eventually obtaining the rank of Jedi Master and becoming a member of the Jedi High Counc...',
      carouselImage: 'assets/images/samples/yoda.png'
    },
    {
      carouselHeading: 'Darth Vader', 
      carouselBody: 'Anakin Skywalker`s life was once that of a child slave on the harsh desert planet of Tatooine, before the Jedi master Qui-Gon Jinn discovered him and determined that Anakin was the chosen one due to being conceived by th...', 
      carouselImage: 'assets/images/samples/darth.png'
    },
    {
      carouselHeading: 'Han Solo', 
      carouselBody: 'Han Solo, formerly known only as Han until being given the surname Solo by chief recruitment officer Drawd Munbrin, was a human male smuggler who became a leader in the Alliance to Restore the Republic and an ins...', 
      carouselImage: 'assets/images/samples/han-solo.png'
    }
  ];

  carouselFooter:CarouselData[] = [
    {carouselNumber: '1'},
    {carouselNumber: '2'},
    {carouselNumber: '3'},
    {carouselNumber: '4'}
  ];

  nextStep() {
    if(this.currentIndex !== this.carouselContent.length-1) {
      this.currentIndex++;
    }
  }

  prevStep() {
    if(this.currentIndex !== 0) {
      this.currentIndex--;
    }
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
