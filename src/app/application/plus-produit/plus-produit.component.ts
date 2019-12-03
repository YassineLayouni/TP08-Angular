import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {ProduitsService} from '../produits.service';

@Component({
  selector: 'app-plus-produit',
  templateUrl: './plus-produit.component.html',
  styleUrls: ['./plus-produit.component.css']
})
export class PlusProduitComponent implements OnInit {
  
  products;
  productForm: FormGroup = new FormGroup(
 { id:new FormControl('',Validators.required),
   libelle:new FormControl('',[Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')])} );
  
  onSubmitForm()
 {
 alert(this.service.addProduit(this.productForm.value['id'],this.productForm.value['libelle']));
 }
  constructor(private service:ProduitsService) { }
  public get idProduct()
 { return this.productForm.get('id'); }
 public get libelleProduct()
 { return this.productForm.get('libelle'); }

  ngOnInit() {
    this.products = this.service.products;
  }

}
