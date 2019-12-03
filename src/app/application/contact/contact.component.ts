import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { FormGroup,FormControl,Validators,FormArray} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  onAjouterPreference()
 {
 this.lesPreferences.push(new FormControl(''));
 //Autre possibilité
 //this.lesPreferences.push(this.formBuilder.control(''));
 }
  constructor(private router:Router,private  formBuilder:FormBuilder) { }


onContacter()
 {
 console.log(this.contactForm.value);
 console.log(this.contactForm.value['nom']);
 console.log(this.contactForm.get('email').value);
 console.log(this.contactForm.value['genre']);
 console.log(this.contactForm.value['region']);
 console.log(this.contactForm.value['newsLetter']);
 for(let p of this.lesPreferences.controls)
 {
     console.log(p.value);
 }
 }

public get nom(){
  return this.contactForm.get('nom');
}

public get lesPreferences()
 {
 return this.contactForm.get('preferences') as FormArray;
 }
  ngOnInit() {
    this.contactForm = this.formBuilder.group(
 {nom:['', [Validators.required,Validators.minLength(8)]],
 email: ['', Validators.required],
 genre:['Homme', Validators.required],
 region:['Autre'],
 newsLetter:[true],
 preferences:this.formBuilder.array([])
 }
 )
  }

  onAccueil()
  {
    this.router.navigate(['/accueil']);
  }




}
