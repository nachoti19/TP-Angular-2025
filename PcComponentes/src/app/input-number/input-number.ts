import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input-number',
  imports: [],
  templateUrl: './input-number.html',
  styleUrl: './input-number.css'
})
export class InputNumber implements OnInit {

  @Input()
  quantity!: number;
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  downQuantity(quantity: number): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(quantity: number): void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  constructor() {}

  ngOnInit(): void {
  }
}
