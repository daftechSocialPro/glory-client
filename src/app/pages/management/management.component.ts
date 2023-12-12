import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  managmntteam:any
  aboutfeature:any
  constructor(private homeService:HomeService,
              private commonService:CommonService,){}
  ngOnInit(): void {
    this.getAbout()
 
  }
  getAbout(){
    this.homeService.getManagemntTeam().subscribe({
      next:(res)=>{
        this.managmntteam=res.data
      
      }
      
    })
  }
  getImagePath(image: any) {

    return this.commonService.createImagePath(image.data.attributes.url)

  }
}
