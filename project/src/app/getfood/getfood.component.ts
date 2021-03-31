import { Component, OnInit } from '@angular/core';
import {ServicedataService} from 'src/app/services/servicedata.service';

@Component({
  selector: 'app-getfood',
  templateUrl: './getfood.component.html',
  styleUrls: ['./getfood.component.css']
})
export class GetfoodComponent implements OnInit {
products=[];

  constructor(private dataservice: ServicedataService) { }

  ngOnInit(): void {

  
  
    this.dataservice.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    

    })  
  }

}
