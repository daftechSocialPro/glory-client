import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-clients',
  templateUrl: './home-clients.component.html',
  styleUrls: ['./home-clients.component.css'],
})
export class HomeClientsComponent implements OnInit {
  clients: any;
  ngOnInit(): void {
    this.getHomeClients();
  }

  constructor(
    private homeService: HomeService,
    private commonService: CommonService,
    private router: Router
  ) {}

  getHomeClients() {
    this.homeService.getHomeClients().subscribe({
      next: (res) => {
        this.clients = res.data;
      },
    });
  }

  getImagePath(image: any) {
    return this.commonService.createImagePath(image.data.attributes.url);
  }
  clientDetail(id: string) {
    this.router.navigate(['/client', id]);
  }
}
