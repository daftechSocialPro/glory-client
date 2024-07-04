import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-sister',
  templateUrl: './sister.component.html',
  styleUrls: ['./sister.component.css'],
})
export class SisterComponent implements OnInit {
  aboutus: any;
  aboutfeature: any;
  id!: string | undefined;
  client: any;
  constructor(
    private homeService: HomeService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAbout();

    this.id = this.route.snapshot.paramMap.get('id')?.toString();
    this.getAboutfeature();
    this.getHomeClient();
  }
  getHomeClient() {
    if (this.id)
      this.homeService.getHomeClientsById(this.id).subscribe({
        next: (res) => {
          this.client = res.data;
          console.log(this.client);
        },
      });
  }

  getAbout() {
    this.homeService.getAbout().subscribe({
      next: (res) => {
        this.aboutus = res.data;
      },
    });
  }
  getAboutfeature() {
    this.homeService.getFeature().subscribe({
      next: (res) => {
        this.aboutfeature = res.data;
      },
    });
  }
  getImagePath(image: any) {
    return this.commonService.createImagePath(image.data.attributes.url);
  }
}
