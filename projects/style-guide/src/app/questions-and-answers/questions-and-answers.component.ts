import { Component, OnInit, Inject } from '@angular/core';
import { SelectOption } from 'projects/components/src/public-api';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.scss']
})
export class QuestionsAndAnswersComponent implements OnInit {

  toggleFilter: boolean;
  closeDropdown: boolean;
  QuestionOne: boolean;
  QuestionTwo: boolean;
  QuestionThree: boolean;
  QuestionFour: boolean;
  QuestionFive: boolean;
  QuestionSix: boolean;
  QuestionSeven: boolean;
  QuestionEight: boolean;
  QuestionNine: boolean;
  QuestionTen: boolean;
  showDropdown: boolean;
  showHighlight: boolean;
  selectedIndex: any = null;
  private document: Document;

  optionArray: SelectOption[] = [
    {
      id: 'whichThirdPary', 
      display: 'Which 3rd party components do we currently support?',
      showIcon: true,
      icon: 'widgets',
      iconColor: 'aa-green-50'
    },
    {
      id: 'whatDateFormat', 
      display: 'What date format should I use for the NGB-datepicker?',
      showIcon: true,
      icon: 'edit_calendar',
      iconColor: 'aa-orange-50'
    },
    {
      id: 'contextMenu', 
      display: 'How do I add a context-menu to AG-grid?',
      showIcon: true,
      icon: 'more_vert',
      iconColor: 'aa-red-100'
    },
    {
      id: 'toolTip', 
      display: 'How do I add a tooltip to AG-grid?',
      showIcon: true,
      icon: 'mode_comment',
      iconColor: 'aa-ochre-100'
    },
    {
      id: 'setHeight', 
      display: 'How do I set the height on AG-grid?',
      showIcon: true,
      icon: 'menu',
      iconColor: 'aa-light-blue-80'
    },
    {
      id: 'dlInAgGrid', 
      display: 'Which Design Language components can I use with AG-grid?',
      showIcon: true,
      icon: 'touch_app',
      iconColor: 'aa-green-50'
    },
    {
      id: 'agGridHelp', 
      display: 'Where can I get further help with AG-grid?',
      showIcon: true,
      icon: 'public',
      iconColor: 'aa-pink-100'
    },
    {
      id: 'dlComponents', 
      display: 'Where can I find the markup for a given component?',
      showIcon: true,
      icon: 'visibility',
      iconColor: 'aa-burgundy-100'
    },
    {
      id: 'customCss', 
      display: 'Can we use custom css in our projects?',
      showIcon: true,
      icon: 'error_outline',
      iconColor: 'aa-plum-100'
    },
    {
      id: 'whichNode', 
      display: 'How do I know which node packages to use?',
      showIcon: true,
      icon: 'numbers',
      iconColor: 'aa-orange-50'
    }
];

  constructor(@Inject(DOCUMENT) document: Document) {
    this.document = document;
  }

  onOptionSelected(selectOption : SelectOption) {
    this.document.getElementById(selectOption.id).scrollIntoView({behavior: "smooth", block: "start" });
  }

  highlight(index: number) {
    this.selectedIndex = index;
  }

  ngOnInit(): void {
  }

}
