import { Component } from '@angular/core';

@Component({
  selector: 'component-cart',
  imports: [],
  templateUrl: './component-cart.html',
  styleUrl: './component-cart.css'
})
export class ComponentCart {
  cart: Cart = {
    nombre: "prueba",
    precio: 2,
    image: "string",
    quantity: 2,
  }
  constructor() {}

  ngOnInit(): void {

  }
}
