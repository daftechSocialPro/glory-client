import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-home-top-areas',
  templateUrl: './home-top-areas.component.html',
  styleUrls: ['./home-top-areas.component.css']
})
export class HomeTopAreasComponent implements OnInit {


  chooses:any
  constructor(private homeService:HomeService,private commonService:CommonService,){}
  ngOnInit(): void {
    this.getWhyChooseUs()
  }


  getWhyChooseUs(){
    this.homeService.getHomeWhyChooseUs().subscribe({
      next:(res)=>{
        this.chooses=res.data
        
      }
    })
  }
  getImagePath(image: any) {

    return this.commonService.createImagePath(image.data.attributes.url)

  }

}
