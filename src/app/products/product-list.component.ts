import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;

  products: any[] = [
    {
      productId: 2,
      productName: 'Product 2',
      productCode: 'PD-02',
      releaseDate: 'March 18, 2022',
      description: 'Product 2 Product 2 Product 2, Product 2',
      price: 3.14,
      starRating: 4.2,
      imageUrl: 'assets/images/cherry.jpg',
    },
    {
      productId: 4,
      productName: 'Product 4',
      productCode: 'PD-04',
      releaseDate: 'Apr 18, 2022',
      description: 'Product 4 Product 4 Product 4, Product 4',
      price: 40.4,
      starRating: 3.0,
      imageUrl: 'assets/images/tab.jpg',
    },
  ];
}
