import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

  //pass data into a nested component
  @Input() rating: number;
  starWidth: number;

  //respond to user input from a nested component and pass to
  // parent component
  @Output() ratingClicked: EventEmitter<string> =
                    new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating *75/5;
  }

  onClick(): void {
    this.ratingClicked.emit(`${this.rating} was clicked`);
  }
}
