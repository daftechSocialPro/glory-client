import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  properties: any;
  paginatedProperties: any;
  currentPage: any;
  itemsPerPage: any;
  totalPages: any;
  pages: any[] | any;

  constructor(private homeService: HomeService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.currentPage = 1;
    this.itemsPerPage = 5; 
    this.getHomeProperties();
  }

  getHomeProperties() {
    this.homeService.getHomeProperty().subscribe({
      next: (res) => {
        this.properties = res.data;
        this.totalPages = Math.ceil(this.properties.length / this.itemsPerPage);
        this.updatePagination();
      }
    });
  }

  updatePagination() {
    this.paginatedProperties = this.properties.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  getImagePath(image: any) {
    return this.commonService.createImagePath(image.data[0].attributes.url);
  }

  getImagePath2(image: any) {
    return this.commonService.createImagePath(image.data.attributes.url);
  }
}
