import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  toggleBlade: boolean = false;
  showMore: boolean = false;

  items = [
    {
      carouselTitle: 'Obi-Wan Kenobi',
      carouselImage: 'assets/images/samples/obi-wan.png',
      carouselDesc: 'A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a ment...'
    },
    {
      carouselTitle: 'Yoda',
      carouselImage: 'assets/images/samples/yoda.png',
      carouselDesc: 'Yoda`s origins are a mystery; his species, as well as his species home planet is unknown. At some point, he joined the Jedi Order, eventually obtaining the rank of Jedi Master and becoming a member of the Jedi High Counc...'
    },
    {
      carouselTitle: 'Darth Vader',
      carouselImage: 'assets/images/samples/darth.png',
      carouselDesc: 'Anakin Skywalker`s life was once that of a child slave on the harsh desert planet of Tatooine, before the Jedi master Qui-Gon Jinn discovered him and determined that Anakin was the chosen one due to being conceived by th...'
    },
    {
      carouselTitle: 'Han Solo',
      carouselImage: 'assets/images/samples/han-solo.png',
      carouselDesc: 'Han Solo, formerly known only as Han until being given the surname Solo by chief recruitment officer Drawd Munbrin, was a human male smuggler who became a leader in the Alliance to Restore the Republic and an ins...'
    }
  ]

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
