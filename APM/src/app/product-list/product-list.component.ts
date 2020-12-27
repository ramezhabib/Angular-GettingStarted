import { Component, OnInit } from '@angular/core';
import { IProduct } from './product/product';
import { ProductService } from './product/product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  pageTitle = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  _listFilter: string;
  get listFilter(): string  {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private productService: ProductService) {

    this.listFilter = 'cart';
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }





}
