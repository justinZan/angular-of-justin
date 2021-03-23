import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// 服务
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild('justin') justin: ElementRef;

  constructor(public storage: StorageService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const boxDom: any = document.getElementById('box');
    console.log(boxDom);

    console.log('justin', this.justin)
  }

}
