import { Component } from '@angular/core';
import {ComponentCart} from '../component-cart/component-cart';
import {ComponentList} from '../component-list/component-list';

@Component({
  selector: 'home-page',
  imports: [
    ComponentCart,
    ComponentList

  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  constructor() {}

  ngOnInit(): void {

  }
}
