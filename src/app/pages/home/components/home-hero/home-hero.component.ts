import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { propertyParams } from 'src/app/pages/property/property.component';
>>>>>>> f5338362f21d00a245c612e4c137ce549ac274e1

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css']
})
export class HomeHeroComponent implements OnInit {

  homeHero:any
  type:any
  homeHeroImage:any
  sites:any[] = []
  properties:any
  keywords: any;
  selectedType: any;
  selectedSite: any;
  Propertyparam : propertyParams= {
    Category: '',
    Location: '',
    PropertyType: '',
    Query: ''
  };

  ngOnInit(): void {
    
    this.getHomeHero()
    this.getHomeProperties()
    this.getType()
    

  

  }


  constructor(
    private commonService:CommonService,
    private homeService : HomeService,
    private router: Router){

      this.getType()
      this.getHomeProperties()

  }

  getHomeHero (){

     this.homeService.getHomeHero().subscribe({
      next:(res)=>{
        this.homeHero = res.data 
        this.getImagePath(this.homeHero.attributes.backgroundImage)
      }
     })
  }
  getType(){
    this.homeService.getHomeType().subscribe({
      next:(res)=>{
        this.type=res.data
      
     
      }
    })
  }
  getHomeProperties() {
    this.homeService.getHomeSites().subscribe({
      next: (res) => {
        this.sites = res.data
   
      }
    })
  }
  getProperties() {
    this.homeService.getHomeProperty().subscribe({
      next: (res) => {
        this.properties = res.data
      
      }
    })
  }
  getImagePath(image: any) {

    this.homeHeroImage= this.commonService.createImagePath(image.data.attributes.url)
    console.log(this.homeHeroImage)
  }
  searchProperties() {
    this.router.navigate(['/property'], {
      queryParams:this.Propertyparam
    });
  }

}
