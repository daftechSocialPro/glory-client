import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  properties: any;
  paginatedProperties: any;
  currentPage: any;
  itemsPerPage: any;
  totalPages: any;
  pages: any[] | any;
  propertie: any;
  Category!: string | null;
  Location!: string | null;
  Beds!: number | null;
  Query!: string | null;
  PropertyType!: string;
  Propertyparam: propertyParams = {
    Category: '',
    Location: '',
    Beds: 1,
    PropertyType: '',
    Query: '',
  };

  constructor(
    private homeService: HomeService,
    private commonService: CommonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        this.Propertyparam = params as propertyParams;
        this.Category = this.Propertyparam.Category;
        this.Beds = this.Propertyparam.Beds;
        this.Location = this.Propertyparam.Location;
        this.Query = this.Propertyparam.Query;
      }
    });

    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.getHomeProperties();
  }

  getHomeProperties() {
    this.Propertyparam = {
      ...this.Propertyparam,
      Category: this.Category,
      Location: this.Location,
      Beds: this.Beds,
      PropertyType: this.PropertyType,
      Query: this.Query,
    };
    this.homeService.getHomeProperty(this.Propertyparam).subscribe({
      next: (res) => {
        this.properties = res.data;
        this.totalPages = Math.ceil(this.properties.length / this.itemsPerPage);
        this.updatePagination();
      },
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

export interface propertyParams {
  Category: string | null;
  Location: string | null;
  Beds: number | null;
  PropertyType: string | null;
  Query: string | null;
}
