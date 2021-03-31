import { Component, OnInit } from '@angular/core';
import {ServicedataService} from 'src/app/services/servicedata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private dataservice: ServicedataService) { }

  ngOnInit(): void {




  }

}
