import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  properties: any
  ngOnInit(): void {
    this.getHomeProperties()
  }

  constructor(private homeService: HomeService,private commonService:CommonService) { }

  getHomeProperties() {
    this.homeService.getHomeProperty().subscribe({
      next: (res) => {
        this.properties = res.data
      }
    })
  }

  getImagePath(image: any) {

    return this.commonService.createImagePath(image.data[0].attributes.url)

  }


}
