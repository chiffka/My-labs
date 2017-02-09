import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Product }           from '../../product';
import { ProductService }    from '../../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  model: Product;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = new Product();
  }

  onChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.model.image = files[0].name;
  }

  onSubmit(): void {
    console.log(this.model);
    this.add(this.model.productTitle, this.model.price, this.model.description, this.model.image);
  }

  add(productTitle: string, price: number, description: string, image: string): void {
    productTitle = productTitle.trim();

    if (!description || !image) {
      description = '';
      image = '';
    }

    this.productService.add(image, productTitle, description, price)
      .then(() => this.router.navigate(['/products']));
  }
}
