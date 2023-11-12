import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{



  botonActualizar: boolean = false;

  productForm = new FormGroup({
    id: new FormControl<number>(0),
    title: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    description: new FormControl<string>('', [Validators.required, Validators.maxLength(600)]),
    price: new FormControl<number>(0, [Validators.required]),
    category: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.required])
  })

  update(): void{
    if (this.productForm.valid){
      let id = this.productForm.get('id')?.value ?? 0;
      let title = this.productForm.get('title')?.value ?? '';
      let description = this.productForm.get('description')?.value ?? '';
      let price = this.productForm.get('price')?.value ?? 0;
      let category = this.productForm.get('category')?.value ?? '';
      let image = this.productForm.get('image')?.value ?? '';

      let product: IProduct = {
        id: id,
        title: title,
        price: price,
        category: category,
        description: description,
        image: image
      }

      this.productService.updateProduct(product).subscribe(data => {
        console.log("Producto editado", data);
        this.resetForm();
      });
    } else {
      console.log("Formulario no válido");
    }
  }

  toggleButton(){
    this.botonActualizar = !this.botonActualizar;
  }

  selectedProduct!: IProduct

  constructor (private productService: ProductServiceService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      id: [0],
      title: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.maxLength(600)]],
      price: [0, Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getProduct(parseInt(params.get("id") || "1"))
    })

  }

  getProduct(id: number): void {
    this.productService.getProductById(id).subscribe(data => {
      this.selectedProduct = data;
      this.productForm.get('id')?.setValue(data.id)
    })
  }

  resetForm(): void {
    this.productForm.reset();
  }

}
