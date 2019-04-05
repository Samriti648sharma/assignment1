import { Component, OnInit } from '@angular/core';
import { FaqService } from './faq.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq:any; //store response data

  constructor(private service: FaqService,private Route:Router) { }

  ngOnInit() {
    this.service.fetch_faq().subscribe(
      (response) => {this.faq=response
      
    },
      (error) => console.log(error)
    );
  }

 

}
