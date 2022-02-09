import { Component, OnInit } from '@angular/core';
import { StepperData } from '../class/stepper-data';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  stepperForm = new FormGroup({
    name: new  FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    company: new  FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    reg: new  FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    postcode: new  FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    //email: new FormControl('', [Validators.required, Validators.email]),
  });

  stepperHTML = '';

  stepsHeader = [
    new StepperData('check', '1', 'Please tell us your name', '', false),
    new StepperData('check', '2', 'What company do you work for?', '', false),
    new StepperData('check', '3', 'Business registration number', '', false),
    new StepperData('check', '4', 'Post code', '', false)
  ];

  stepsContent = [
    new StepperData('', '', 'Name', 'name', false),
    new StepperData('', '', 'Company name', 'company', true),
    new StepperData('', '', 'Business registration number', 'reg', true),
    new StepperData('', '', 'Post code', 'postcode', true)
  ];

  stepsHeaderData = this.stepsHeader[0];
  stepContentData = this.stepsContent[0];

  currentIndex = 0;
  stepComplete: boolean = false;

  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  nextStep() {
    this.stepComplete = true;
    if(this.currentIndex !== this.stepsContent.length) {
      this.currentIndex++;
    }
    if(this.currentIndex === 2 && this.stepperForm.controls.reg.errors) {
      console.log("here's an error")
    }
  }

  prevStep() {
    if(this.currentIndex !== 0) {
      this.currentIndex--;
    }
  }

  reset() {
    this.currentIndex = 0;
    this.stepperForm.reset();
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

  ngOnInit() {
  }

}
