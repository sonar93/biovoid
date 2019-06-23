import { Component, OnInit } from '@angular/core';
import {log} from 'util';
import {stringify} from 'querystring';

@Component({
  selector: 'products-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  fluid: Array<object> = [
    {
      title: 'Описание продукта',
      // content: '',
      icon: 'assets/icons/file.png',
      next: 'assets/icons/arrow-right.png',
      width: '100%',
      color: 'purple'
    },
    {
      title: 'Скачать',
      content: 'Докум-ция, программы и драйверы',
      icon: 'assets/icons/path.png',
      // next: 'assets/icons/arrow-right.png',
      width: '66.6666666667%',
      color: 'green',
      wrap: 'left'
    },
    {
      title: 'Примеры',
      content: 'C# API',
      icon: 'assets/icons/grid.png',
      // next: 'assets/icons/arrow-right.png',
      width: '66.6666666667%',
      color: 'blue',
      wrap: 'left'
    },
    {
      title: 'Видео',
      content: 'Смотреть',
      icon: 'assets/icons/video.png',
      next: 'assets/icons/arrow-right.png',
      width: '33.3333333333%',
      color: 'yellow',
    },
  ];

  ngOnInit() {
  }
}
