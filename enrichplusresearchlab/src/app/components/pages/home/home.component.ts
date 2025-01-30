import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  words: string[] = [
    'Emotive Analytics',
    'Natural Language Processing',
    'Research in AI',
    'Intelligent Computing',
    'Community Health',
    'Healthcare Technologies',
    '+ Advanced Analytics'
  ];
 
}
