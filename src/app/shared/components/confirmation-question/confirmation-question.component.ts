import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-question',
  templateUrl: './confirmation-question.component.html',
  styleUrls: ['./confirmation-question.component.scss']
})
export class ConfirmationQuestionComponent {

  @Input() icon: string;
  @Input() question: string;
  constructor() { }


}
