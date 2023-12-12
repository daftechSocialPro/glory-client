import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-customer-reviews',
  templateUrl: './home-customer-reviews.component.html',
  styleUrls: ['./home-customer-reviews.component.css']
})
export class HomeCustomerReviewsComponent implements OnInit{
  customOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 12000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  };

  testimonial:any
  constructor(private homeService:HomeService,private commonService:CommonService){}
  ngOnInit(): void {
    this.getTestimonial()
  }
  getTestimonial(){
    this.homeService.getHomeTestimonial().subscribe({
      next:(res)=>{
        this.testimonial=res.data
      }
    })
  }
  
  getImagePath(image: any) {

    return this.commonService.createImagePath(image.data[0].attributes.url)

  }

}
