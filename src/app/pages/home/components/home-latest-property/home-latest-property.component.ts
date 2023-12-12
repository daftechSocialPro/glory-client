import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';
import { Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home-latest-property',
  templateUrl: './home-latest-property.component.html',
  styleUrls: ['./home-latest-property.component.css']
})
export class HomeLatestPropertyComponent implements OnInit {


 currentNav :number=3
  properties: any
  filterdProperties: any
  keywords: any;
  selectedType: any;
  selectedSite: any;
  constructor(private homeService: HomeService, private commonService: CommonService, private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getHomeProperties()
    this.route.queryParams.subscribe(params => {
      this.keywords = params['keywords'];
      this.selectedType = params['type'];
      this.selectedSite = params['site'];
    });
  }

  // performSearch() {
  //   this.homeService.searchProperties(this.keywords, this.selectedType, this.selectedSite).subscribe({
  //     next: (res) => {
  //       this.properties = res.data;
  //       this.filterdProperties = res.data;
  //     },
  //     error: (error) => {
  //       // Handle error
  //     }
  //   });
// }

  getHomeProperties() {
    this.homeService.getHomeProperty().subscribe({
      next: (res) => {
        this.properties = res.data
        this.filterdProperties = res.data
      }
    })
  }

  getImagePath(image: any) {

    return this.commonService.createImagePath(image.data[0].attributes.url)

  }
  propertyDetaile(id: string) {
    this.router.navigate(['/propertydetail', id]);
  }

  filterProperty(value: number) {
   
    this.currentNav=value

    if (this.currentNav==1) {
      this.filterdProperties = this.properties.filter((item: any) => {
        return item.attributes.type.toLowerCase() === "for sell"
      })

    } else if (this.currentNav==2) {
      this.filterdProperties = this.properties.filter((item: any) => {
        return item.attributes.type.toLowerCase() === "for rent"
      })
    }
    else {
      this.filterdProperties = this.properties

    }

  }

}
