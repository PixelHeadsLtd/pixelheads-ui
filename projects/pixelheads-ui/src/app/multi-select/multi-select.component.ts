import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

interface City {
  id: number;
  name: string;
}

interface Country {
  id: number;
  name: string;
  cities: City[];
}

interface SelectedCity {
  id: number;
  name: string;
}

interface SelectedItem {
  country?: string;
  cities: string[];
  isGrey?: boolean;
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  toggleBlade: boolean = false;
  form: FormGroup;
  selectedItemsDisplay: SelectedItem[] = [];

  items: Country[] = [
    {
      id: 1,
      name: 'USA',
      cities: [
        { id: 1, name: 'New York' },
        { id: 2, name: 'Los Angeles' },
        { id: 3, name: 'Chicago' },
        { id: 4, name: 'Houston' },
        { id: 5, name: 'Phoenix' }
      ]
    },
    {
      id: 2,
      name: 'Canada',
      cities: [
        { id: 6, name: 'Toronto' },
        { id: 7, name: 'Vancouver' },
        { id: 8, name: 'Montreal' },
        { id: 9, name: 'Calgary' },
        { id: 10, name: 'Ottawa' }
      ]
    },
    {
      id: 3,
      name: 'UK',
      cities: [
        { id: 11, name: 'London' },
        { id: 12, name: 'Manchester' },
        { id: 13, name: 'Birmingham' },
        { id: 14, name: 'Liverpool' },
        { id: 15, name: 'Edinburgh' }
      ]
    },
    {
      id: 4,
      name: 'Australia',
      cities: [
        { id: 16, name: 'Sydney' },
        { id: 17, name: 'Melbourne' },
        { id: 18, name: 'Brisbane' },
        { id: 19, name: 'Perth' },
        { id: 20, name: 'Adelaide' }
      ]
    },
    {
      id: 5,
      name: 'Germany',
      cities: [
        { id: 21, name: 'Berlin' },
        { id: 22, name: 'Munich' },
        { id: 23, name: 'Frankfurt' },
        { id: 24, name: 'Hamburg' },
        { id: 25, name: 'Cologne' }
      ]
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedItems: [[]]
    });
  }

  get selectedItems(): FormArray {
    return this.form.get('selectedItems') as FormArray;
  }

  onSubmit() {
    const selectedItems = this.form.value.selectedItems as SelectedCity[];
    const selectedCitiesNames = selectedItems.map(item => item.name);
  
    this.selectedItemsDisplay = this.items.map(country => {
      // Find selected cities for the current country
      const selectedCities = country.cities
        .filter(city => selectedCitiesNames.includes(city.name))
        .map(city => city.name);
  
      // Check if the current country is selected
      const isCountrySelected = selectedItems.some(item => item.name === country.name);
  
      return {
        country: isCountrySelected || selectedCities.length > 0 ? country.name : undefined,
        cities: selectedCities,
        isGrey: selectedCities.length > 0 && !isCountrySelected
      };
    }).filter(item => item.cities.length > 0 || item.country !== undefined);
  }
  
  onClear() {
    this.form.reset({ selectedItems: [] });
    this.selectedItemsDisplay = [];
  }

  onMultiSelectChange(selectedItems: any[]) {
    this.selectedItems.clear();
    selectedItems.forEach(item => this.selectedItems.push(this.fb.control(item)));
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
