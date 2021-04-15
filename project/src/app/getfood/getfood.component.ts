import { Component, OnInit } from '@angular/core';
import {ServicedataService} from 'src/app/services/servicedata.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-getfood',
  templateUrl: './getfood.component.html',
  styleUrls: ['./getfood.component.css']
})
export class GetfoodComponent implements OnInit {
myForm: FormGroup;
myFormF: FormGroup;
myFormC: FormGroup;
products=[];
carbs:any=[]
carbresults=[];
fats:any=[];
fatresults=[];
cals:any=[];
calresults=[];
maxlist=Array.from(new Array(100), (x, i) => i);
minlist=Array.from(new Array(100), (x, i) => i);
minfatlist=Array.from(new Array(100), (x, i) => i);
maxfatlist=Array.from(new Array(100), (x, i) => i);
mincallist=Array.from(new Array(800), (x, i) => i);
maxcallist=Array.from(new Array(800), (x, i) => i);



  constructor(private dataservice: ServicedataService,private fb: FormBuilder) { }

  ngOnInit(): void {

 this.myForm = this.fb.group({
      mincarbs: ['', Validators.required],
      
      maxcarbs: ['', [Validators.required]],
    });


 this.myFormF = this.fb.group({
      minfats: ['', Validators.required],
      
      maxfats: ['', [Validators.required]],
    });

   this.myFormC = this.fb.group({
      mincal: ['', Validators.required],
      
      maxcal: ['', [Validators.required]],
    });
  
    this.dataservice.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;


    });
  }


  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('mincarbs', form.value.mincarbs);
    console.log('maxcarbs', form.value.maxcarbs);
    this.carbs=[form.value.mincarbs,form.value.maxcarbs];
      this.dataservice.postCarbs(this.carbs).subscribe((data: any)=>{
      this.carbresults=data;
      console.log(this.carbresults);
      


    });


  }

   onSubmitF(form: FormGroup)
   {
    console.log('Valid?', form.valid); // true or false
    console.log('minfats', form.value.minfats);
    console.log('maxfats', form.value.maxfats);
       this.fats=[form.value.minfats,form.value.maxfats];
      this.dataservice.postFats(this.fats).subscribe((data: any)=>{
      this.fatresults=data;
      console.log(this.fatresults);



  });
  }

   onSubmitC(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('mincal', form.value.mincal);
    console.log('maxcal', form.value.maxcal);

    this.cals=[form.value.mincal,form.value.maxcal];
      this.dataservice.postCals(this.cals).subscribe((data: any)=>{
      this.calresults=data;
      console.log(this.calresults);



  });
  }




}
