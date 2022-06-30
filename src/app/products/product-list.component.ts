import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Product List';

  products: any[] = [
    {
      productId: 2,
      productName: 'Product 2',
      productCode: 'PD-02',
      releaseDate: 'March 18, 2022',
      description: 'Product 2 Product 2 Product 2, Product 2',
      price: 3.14,
      starRating: 4.2,
      imageUrl: './app/assests/images/assistant_direction_FILL0_wght400_GRAD0_opsz48.png',
    },
    {
      productId: 4,
      productName: 'Product 4',
      productCode: 'PD-04',
      releaseDate: 'Apr 18, 2022',
      description: 'Product 4 Product 4 Product 4, Product 4',
      price: 40.4,
      starRating: 3.0,
      imageUrl: '',
    },
  ];
}
