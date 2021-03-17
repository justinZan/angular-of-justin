import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList: Array<any> = [{
    id: 1,
    name: '首页'
  }, {
    id: 2,
    name: '列表'
  }, {
    id: 3,
    name: '详细信息'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
