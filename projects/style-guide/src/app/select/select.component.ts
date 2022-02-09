import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
  
  standardSelect: boolean;
  dataList: boolean;
  
  dataListHTML =
  `<form>
  <div class="field small boxed">
    <label for="ice-cream-choice">Data list - favourite ice cream</label>
    <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" class="list"/>
    <datalist id="ice-cream-flavors">
      <option value="Please select" disabled selected>
      <option value="Chocolate">
      <option value="Coconut">
      <option value="Mint">
      <option value="Strawberry">
      <option value="Vanilla">
    </datalist>
  </div>
</form>`;

standardSelectHTML =
` <form class="flex-group">
<div class="field small">
  <label for="pet-select">Select - choose a pet</label>
  <select name="pets" id="pet-select">
    <option value="" selected>Please select</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </select>
</div>
<div class="field small">
  <label for="pet-select">Select (disabled="true")</label>
  <select name="pets" id="pet-select" disabled="true">
    <option value="" selected>Please select</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </select>
</div>
</form>`;
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];

  cities2 = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];

  cities3 = [
    { id: 1, name: 'Vilnius', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x' },
    { id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
    { id: 3, name: 'Pavilnys', avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15' }
  ];

  cities4 = [];

  users = [
    { id: 'anjmao', name: 'Anjmao' },
    { id: 'varnas', name: 'Tadeus Varnas' }
  ];

  selectedAccount = 'Adam'
  accounts = [
    { name: 'Adam has a very long name indeed', email: 'adam@email.com', age: 12, country: 'United States' },
    { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
    { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
    { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
    { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
    { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
    { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
    { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
    { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }
  ];

  selectedCityIds: string[];
  selectedCity: string;
  selectedCityName = 'Vilnius';
  selectedCityId: number;
  selectedUserIds: number[];

  constructor() {this.create10kCities();}

  addCustomUser = (term) => ({ id: term, name: term });

  private create10kCities() {
    this.cities4 = Array.from({ length: 10000 }, (value, key) => key)
      .map(val => ({
        id: val,
        name: `city ${val}`
      }));
  }


  ngOnInit() {
  }

}
