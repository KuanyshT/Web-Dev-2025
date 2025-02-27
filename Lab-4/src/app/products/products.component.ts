import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-products',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Легенда Венская 160 см граб черный',
      price: '109 900₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pba/8465283.jpeg?format=preview-large'
    },
    {
      name: 'SUPER DIAMOND Мел Super Diamond серый, Украина серый',
      price: '9 400₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h30/hcf/86276096360478.jpg?format=preview-large'
    },
    {
      name: 'Тренажёр для отработки ударов Стоп шар СТАРТ BILTSB',
      price: '80 000₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/he1/86210669445150.jpg?format=preview-large'
    },
    { name: 'Легенда Тюльпан-1 160 см граб черный', price: '174 900₸', image: 'https://resources.cdn-kaspi.kz/img/m/p/p9e/pe2/8462646.jpeg?format=gallery-medium' },
    { name: 'Демисезонная куртка Mammut синий', price: '177 00₸', image: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h01/83834709901342.jpg?format=preview-large' },
    { name: 'Кепка Salomon LC2023700 размер универсальный', price: '14 900₸', image: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/h06/86259698335774.jpg?format=preview-large' },
    { name: 'Шапка Salomon SALOMON BEANIE C18471 размер', price: '10 900₸', image: 'https://resources.cdn-kaspi.kz/img/m/p/p17/pf3/17691307.jpeg?format=preview-large' },
    { name: 'CAPITA The Black Snowboard of Death 2022-2023 165 см черный', price: '44 900₸', image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h38/68603944370206.jpg?format=preview-large' },
    { name: 'Кроссовки ASICS metarise зеленый, мультиколор', price: '25 571₸', image: 'https://resources.cdn-kaspi.kz/img/m/p/p40/p94/4001835.jpeg?format=preview-large' },
    { name: 'Metasport Zone 6 футов', price: '2 000 000₸', image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h91/85504470745118.jpg?format=preview-large' }
  ];

  chunkedProducts: any[][] = [];

  constructor() {
    this.chunkedProducts = this.chunkArray(this.products, 3);
  }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
}
