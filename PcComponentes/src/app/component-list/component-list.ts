import {Component, OnInit} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {InputNumber} from '../input-number/input-number';

@Component({
  selector: 'component-list',
  imports: [
    CurrencyPipe,
    InputNumber
  ],
  templateUrl: './component-list.html',
  styleUrl: './component-list.css'
})
export class ComponentList implements OnInit{

  component: Componente[] = [
    {
      tipo: 'Procesador',
      nombre: 'Ryzen 7 5800x',
      precio: 270000,
      stock: 5,
      image: '/assets/img/ryzen.jpg',
      quantity: 0,
    },
    {
      tipo: 'Procesador',
      nombre: 'Ryzen 3 2200g',
      precio: 80000,
      stock: 0,
      image: 'assets/img/ryzen.jpg',
      quantity: 0,
    },
    {
      tipo: 'Placa de video',
      nombre: 'rx 6700xt',
      precio: 450000,
      stock: 1,
      image: 'assets/img/ryzen.jpg',
      quantity: 0,
    },
    {
      tipo: 'Motherboard',
      nombre: 'ASUS A320M-K',
      precio: 50000,
      stock: 8,
      image: 'assets/img/ryzen.jpg',
      quantity: 0,
    }
  ]



  constructor() {}

  ngOnInit(): void {

  }

}
