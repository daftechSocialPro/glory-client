import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-why-choose-us',
  templateUrl: './home-why-choose-us.component.html',
  styleUrls: ['./home-why-choose-us.component.css'],
})
export class HomeWhyChooseUsComponent implements OnInit {
  features: any;
  videolink: any;
  isVideoPopupOpen: boolean = false;

  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.getFeatures();
    this.getVedios();
  }
  getFeatures() {
    this.homeService.getHomeFeatures().subscribe({
      next: (res) => {
        this.features = res.data;
      },
    });
  }
  getVedios() {
    this.homeService.getVedios().subscribe({
      next: (res) => {
        this.videolink = res.data;
        console.log('vedio', this.videolink);
      },
    });
  }

  openVideoPopup() {
    this.isVideoPopupOpen = true;
  }

  closeVideoPopup() {
    this.isVideoPopupOpen = false;
    console.log(this.isVideoPopupOpen);
  }
}
