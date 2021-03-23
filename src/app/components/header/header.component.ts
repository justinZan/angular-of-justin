import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() private childData = new EventEmitter();

  @Input() title: any;

  public menuList: any[] = [{
    id: 1,
    name: '列表',
    routr: '/layout'
  }, {
    id: 2,
    name: '统计',
    routr: '/chart'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  clickHandle() {
    this.childData.emit('我是丁帅帅');
  }

}
