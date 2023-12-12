import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  
  properties: any
  propertie:any
  
  Propertyparam : propertyParams= {
    Category: '',
    Location: '',
    PropertyType: '',
    Query: ''
  };
  
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (Object.keys(params).length > 0) {
        this.Propertyparam = params as propertyParams;
      }
    });
    this.getHomeProperties();
  }

  
 
  
  constructor(private homeService: HomeService,private commonService:CommonService,
    private http: HttpClient,
    private route: ActivatedRoute) { }
  
  getHomeProperties() {
    this.homeService.getHomeProperty(this.Propertyparam).subscribe({
      next: (res) => {
        this.properties = res.data
      }
    })
  }
  
  getImagePath(image: any) {
    
    return this.commonService.createImagePath(image.data[0].attributes.url)
    
  }
  getImagePath2(image: any) {
    
    return this.commonService.createImagePath(image.data.attributes.url)
    
  }
 
  
 
  
}




export interface propertyParams {
  Category : string;
  Location : string;
  PropertyType : string;
  Query : string;
}
