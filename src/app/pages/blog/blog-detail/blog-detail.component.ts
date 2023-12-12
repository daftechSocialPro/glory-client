import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {


  id:any
  singleblog: any



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSingleblog()
 
 
 
  }

  constructor(private homeService: HomeService,private commonService:CommonService,private route: ActivatedRoute,private router: Router) { }

  getSingleblog() {
    this.homeService.getsingleBlog(this.id).subscribe({
      next: (res) => {
        this.singleblog = res.data
      }
    })
  }
 


  getImagePath(image: any) {

    return this.commonService.createImagePath(image&&image.data.attributes.url)

  }
  

}
