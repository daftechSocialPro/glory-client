import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutus:any
  aboutfeature:any
  constructor(private homeService:HomeService,
              private commonService:CommonService,){}
  ngOnInit(): void {
    this.getAbout()
    this.getAboutfeature()
  }
  getAbout(){
    this.homeService.getAbout().subscribe({
      next:(res)=>{
        this.aboutus=res.data
      
      }
      
    })
  }
  getAboutfeature(){
    this.homeService.getFeature().subscribe({
      next:(res)=>{
        this.aboutfeature=res.data
    
      }
      
    })
  }
  getImagePath(image: any) {

    return this.commonService.createImagePath(image.data.attributes.url)

  }
 
}
