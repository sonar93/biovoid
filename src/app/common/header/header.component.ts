import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  menu: Array<object> = [
    {
      item: 'Главная',
      url: '/home'
    },
    {
      item: 'Продукты',
      url: '/products'
    },
    {
      item: 'Услуги',
      url: '/services'
    },
    {
      item: 'О нас',
      url: '/about'
    },
    {
      item: 'Контакты',
      url: '/contacts'
    }
  ];

  ngOnInit() {
  }

}
