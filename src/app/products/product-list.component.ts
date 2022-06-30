import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter : ', value);
    this.filteredProducts = this.performFilter(value);
  }

  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Apple Photo',
      productCode: 'PD-02',
      releaseDate: 'March 18, 2022',
      description: 'Product 2 Product 2 Product 2, Product 2',
      price: 3.14,
      imageUrl: 'assets/img/product1.png',
      starRating: 4.2,
    },
    {
      productId: 4,
      productName: 'Organic pinewine',
      productCode: 'PD-04',
      releaseDate: 'Apr 18, 2022',
      description: 'Product 4 Product 4 Product 4, Product 4',
      price: 40.4,
      starRating: 3.0,
      imageUrl: 'assets/img/tab.jpg',
    },
  ];

  filteredProducts: IProduct[] = this.products;

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In ngOnInit');
  }
}
