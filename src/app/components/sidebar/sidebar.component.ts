import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/members', title: 'Members',  icon:'person', class: '' },
    { path: '/profiles', title: 'Profiles',  icon:'content_paste', class: '' },
    { path: '/invoices', title: 'Invoices',  icon:'library_books', class: '' },
  ];

  constructor() { }

  ngOnInit() {
  }
}
