import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { ContactService } from 'src/app/service/contact.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  locations: any = null;
  phones: any = null;
  social_media: any = null;
  properties: any;
  email: any;
  ngOnInit(): void {
    this.getHomeProperties();
    this.refreshData();
  }

  constructor(
    private homeService: HomeService,
    private commonService: CommonService,
    private contactService: ContactService
  ) {}

  getHomeProperties() {
    this.homeService.getHomeProperty().subscribe({
      next: (res) => {
        this.properties = res.data;
      },
    });
  }

  getImagePath(image: any) {
    return this.commonService.createImagePath(image.data[0].attributes.url);
  }
  refreshData() {
    this.contactService.getAllLocation().subscribe({
      next: (res) => {
        this.locations = res.data;
      },
    });
    this.contactService.getAllPhone().subscribe({
      next: (res) => {
        this.phones = res.data;
      },
    });
    this.contactService.getAllSocialMedia().subscribe({
      next: (res) => {
        this.social_media = res.data;
      },
    });
    this.contactService.getAllEmail().subscribe({
      next: (res) => {
        this.email = res.data;
      },
    });
  }
}
