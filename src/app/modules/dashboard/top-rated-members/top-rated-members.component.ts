import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rated-members',
  templateUrl: './top-rated-members.component.html',
  styleUrls: ['./top-rated-members.component.scss'],
})
export class TopRatedMembersComponent implements OnInit {
  @Input() data: any;
  @Input() title: string;

  constructor() {}
  ngOnInit() {}
}
