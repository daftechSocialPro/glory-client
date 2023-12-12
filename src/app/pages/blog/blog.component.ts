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
  paginatedBlogs: any;
  currentPage: any;
  itemsPerPage: number = 4;
  totalPages: any;
  pages: any[] | any;
  searchQuery: string | any;

  ngOnInit(): void {
    this.getBlogs()
    this.currentPage = 1; 
    this.getPaginatedBlogs();

  }

  constructor(private homeService: HomeService,private commonService:CommonService,private router: Router) { }

  getBlogs() {
    this.homeService.getBlog().subscribe({
      next: (res) => {
        this.blogs = res.data;
        this.totalPages = Math.ceil(this.blogs.length / this.itemsPerPage);
        this.updatePagination();
        this.currentPage = 1;  // Set currentPage to 1
        this.getPaginatedBlogs();  // Fetch paginated blogs
      }
    });
  }
  updatePagination() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getPaginatedBlogs();
    }
  }
  
  getPaginatedBlogs() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedBlogs = this.blogs.slice(startIndex, endIndex);
  }
  searchBlogs() {
    if (this.searchQuery) {
      this.paginatedBlogs = this.blogs.filter((blog: any) =>
        blog.attributes.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        blog.attributes.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.getPaginatedBlogs();
    }
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


