import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentList} from './component-list/component-list';
import {ComponentCart} from './component-cart/component-cart';
import {HomePage} from './home-page/home-page';

@Component({
  selector: 'pc-root',
  imports: [RouterOutlet, ComponentList, ComponentCart, HomePage],
  templateUrl: './pc.html',
  styleUrl: './pc.css',
})


export class Pc {
  title:string = 'Pc Componentes';
}
