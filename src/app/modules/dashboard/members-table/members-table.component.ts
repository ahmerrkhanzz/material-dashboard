import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss'],
})
export class MembersTableComponent implements OnInit {
  @Input() data: any;
  @Input() title: string;
  @Input() value: string;
  @Input() percentage: string;
  @Input() feedback: boolean;
  
  constructor() {}
  ngOnInit() {
    console.log(this.title);
  }
}
