import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

 
  blogs: any

  ngOnInit(): void {
    this.getBlogs()

  }

  constructor(private homeService: HomeService,private commonService:CommonService,private router: Router) { }

  getBlogs() {
    this.homeService.getBlog().subscribe({
      next: (res) => {
        this.blogs = res.data;
        console.log("blogs", this.blogs);
  
      }
    });
  }
  getDay(createdAt: string) {
    const date = new Date(createdAt);
    return date.getDate();
  }
  
  getMonth(createdAt: string) {
    const date = new Date(createdAt);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return monthNames[date.getMonth()];
  }
  getImagePath(image: any) {

    return this.commonService.createImagePath(image.data.attributes.url)

  }
  
  blogDetaile(id: string) {
    this.router.navigate(['/blog', id]);
  }

}
