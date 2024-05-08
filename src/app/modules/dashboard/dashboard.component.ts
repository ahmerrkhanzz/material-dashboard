import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public tableData: any = [
    {
      name: 'Clyde Chapman',
      storeName: 'Calvin Klein',
      purcahses: 521,
      purchaseAmount: '35,000',
      currency: '$'
    },
    {
      name: 'Alex Schwaze',
      storeName: 'Dior',
      purcahses: 521,
      purchaseAmount: '35,000',
      currency: '$'
    },
    {
      name: 'Micheal Clarke',
      storeName: 'Louis Vuitton',
      purcahses: 521,
      purchaseAmount: '35,000',
      currency: '$'
    },
    {
      name: 'Shane Watson',
      storeName: 'Channel',
      purcahses: 521,
      purchaseAmount: '35,000',
      currency: '$'
    },
    {
      name: 'Leonel Messi',
      storeName: 'Cougar',
      purcahses: 521,
      purchaseAmount: '35,000',
      currency: '$'
    }
  ]

  public stats: any[] = [
    {
      title: 'Total Members',
      value: '45,000',
      percentage: '-23%',
      comparison: 'vs last year',
      feedback: false
    },
    {
      title: 'Active Members',
      value: '23,313',
      percentage: '+11%',
      comparison: 'vs last month',
      feedback: true
    },
    {
      title: 'Inactive Members',
      value: '12,161',
      percentage: '-3%',
      comparison: 'vs last month',
      feedback: false
    }
  ]

  public topRatedMembers: any[] = [
    {
      name: 'Jane Doe',
      value: '450 purchases'
    },
    {
      name: 'John Smith',
      value: '390 purchases'
    },
    {
      name: 'Alex Border',
      value: '210 purchases'
    }
  ]

  public storeOverview: any[] = [
    {
      name: 'Calvin Klein',
      value: '+$315 cashback'
    },
    {
      name: 'Dior',
      value: '+$289 cashback'
    },
    {
      name: 'Louis Vuitton',
      value: '+$289 cashback'
    },
    {
      name: 'Channel',
      value: '+$289 cashback'
    },
    {
      name: 'Cougar',
      value: '+$289 cashback'
    }
  ]
  constructor() {}
  ngOnInit() {}
}
