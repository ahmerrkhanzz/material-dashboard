import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  @Input() title: string;
  @Input() comparison: string;
  @Input() value: string;
  @Input() percentage: string;
  @Input() feedback: boolean;
  
  constructor() {}
  ngOnInit() {
  }
}
