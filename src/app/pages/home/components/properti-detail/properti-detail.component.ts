import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';
import { ActivatedRoute,Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-properti-detail',
  templateUrl: './properti-detail.component.html',
  styleUrls: ['./properti-detail.component.css']
})
export class PropertiDetailComponent implements OnInit {


  id:any
  singleproperties: any
  features:any
  agent:any
  properties:any
  property:any
  productImages: any[] = [];
  selectedImage: string = '';
  imageSize: number = 0;


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSingleProperties()
    this.getFeatures()
    this.getAgents()
    this.getHomeProperties()
    this.getLetestProperty()
 
 
  }

  constructor(private homeService: HomeService,private commonService:CommonService,private route: ActivatedRoute,private router: Router) { }

  getSingleProperties() {
    this.homeService.getsingleProperty(this.id).subscribe({
      next: (res) => {
        this.singleproperties = res.data
        console.log("img", this.singleproperties)
       
      }
    })
  }
  getFeatures(){
    this.homeService.getHomeFeatures().subscribe({
      next:(res)=>{
        this.features=res.data
      }
    })
  }
  getAgents() {
    this.homeService.getsingleHomeAgent(1).subscribe({
      next: (res) => {
     this.agent=res.data
      }
    });
  }
  
  // getHomeProperties() {
  //   this.homeService.getHomeProperty().subscribe({
  //     next: (res) => {
  //       this.properties = res.data

     
  //     }
  //   })
  // }
  getHomeProperties() {
    this.homeService.getHomeProperty().subscribe({
      next: (res) => {
        this.properties = res.data;
        this.productImages = this.properties.map((property: any) => {
          const image = property.attributes.Images.data[0];
          const url = image.attributes.url;
          return { url: url };
        });
        this.imageSize = this.productImages.length > 0 ? 510 : 0;
  
        console.log("productImages:", this.productImages);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
  changeImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  autoWidth(): boolean | undefined {
    return this.productImages.length > 0 ? true : undefined;
  }
  getLetestProperty() {
    const excludedId = this.route.snapshot.paramMap.get('id');
    
    this.homeService.getHomeProperty().subscribe((res) => {
      if (res.data && res.data.length > 0) {
        const property = res.data[1];
        this.property = property;
      }
    });
  }

  getImagePath(image: any) {

    return this.commonService.createImagePath(image&&image.data[0]&&image.data[0].attributes.url)

  }
  getImagePath3(image: any) {
    return this.commonService.createImagePath(image&&image.data.attributes.url);
  }
  getImagePath2(imageUrl: string) {
    return this.commonService.createImagePath(imageUrl);
  }
  contactus() {
    this.router.navigate(['/contact']); 
  }

}
