import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent {

  toggleBlade:boolean = false;
  progressIndicator: boolean = false;
  progressIndicatorIcons: boolean = false;
  showCurrent: boolean = false;
  showVisited: boolean = false;
  showIncomplete: boolean = false;
  showComplete: boolean = false;
  showError: boolean = false;
  progressComplete: boolean = false;
  reset: boolean = false;
  showMore: boolean = false;
  stepOneIconColour: string = 'aa-pink-100';
  stepTwoIconColour: string = '';
  stepThreeIconColour: string = '';
  stepFourIconColour: string = '';
  stepFiveIconColour: string = '';

  stepOneClass: string = 'current';
  stepTwoClass: string|null='';
  stepThreeClass: string|null='';
  stepFourClass: string|null='';
  stepFiveClass: string|null='';

  stepOne: boolean = true;
  stepTwo: boolean = false;
  stepThree: boolean = false;
  stepFour: boolean = false;
  stepFive: boolean = false;

  isLink: boolean = false;

  stepOneText: string =
  `
    By default the 'current' class MUST be added to the first
    stop the user arrives at
  `;
  stepTwoText: string = '';
  stepThreeText: string = '';
  stepFourText: string = '';
  stepFiveText: string = '';

  progressLink: string = '';

  onClick() { console.log('You clicked'); }

  checkProgress() {
    if(this.showIncomplete) {
      this.stepOneClass = `incomplete`;
      this.stepOneText =
      `
        If a user moves away from an unfinished stop, the 'incomplete' class
        MUST remain until the section is complete
      `;
      this.stepTwo = true;
      this.stepTwoClass = 'current';
      this.stepTwoText =
      `
        You've moved to the next step but in this
        example step-one is still incomplete
      `;
      this.stepThree = false;
      this.stepFour = false;
      this.stepFive = false;
      this.stepOneIconColour = 'aa-grey-25 shake'
      this.stepTwoIconColour = 'aa-pink-100'
    }
    if(this.showComplete) {
      this.stepOneClass = 'complete';
      this.stepOneText =
      `
        Well done! You returned to step-one and completed the section
      `;
      this.stepTwoClass = 'incomplete';
      this.stepTwoText =
      `
        Because you left step-two to complete step-one,
        step-two is now incomplete
      `;
      this.stepOneIconColour = 'aa-pink-100'
      this.stepTwoIconColour = 'aa-grey-25 shake rotateNeg45'
    }
    if(this.showError) {
      this.stepTwoClass = 'error';
      this.stepThree = true;
      this.stepOne = false;
      this.stepThreeClass = 'current';
      this.stepThreeText =
      `
        You've moved to step-three but now there's an error at step-two.
        In some cases you may want to prevent your users from progression
        past a step containing an error, this will be a business decision
      `;
      this.stepTwoText = 'Oops you have an `error` at step-two'
      this.stepTwoIconColour = 'aa-pink-100'
      this.stepThreeIconColour = 'aa-grey-25 shake'
    }
    if(this.progressComplete) {
      this.stepTwoClass = 'complete'
      this.stepThreeClass = 'complete'
      this.stepFourClass = 'complete'
      this.stepFiveClass = 'complete'
      this.stepOne = false;
      this.stepTwo = false;
      this.stepThree = false;
      this.stepFive = true;
      this.stepFiveText =
      `
        You have successfully completed your journey
      `;
      this.stepFiveIconColour = 'aa-pink-100'
    }
    if(this.reset) {
      this.stepOne = true;
      this.stepOneClass = 'current';
      this.stepOneText =
      `
        The 'current' class should be passed to the bus-stop
        that you have first arrived at. No data would have been
        added on first arrival. Click the above button to see
        the 'incomplete' state
      `
      this.stepTwo = false;
      this.stepThree = false;
      this.stepFour = false;
      this.stepFive = false;

      this.stepTwoClass = null;
      this.stepThreeClass = null;
      this.stepFourClass = null;
      this.stepFiveClass = null;

      this.reset = false;
      this.showCurrent = false;
      this.showIncomplete = false;
      this.showComplete = false;
      this.showError = false;
      this.progressComplete = false;
    }
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

}
