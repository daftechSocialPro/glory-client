import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-progress',
  templateUrl: './home-progress.component.html',
  styleUrls: ['./home-progress.component.css']
})
export class HomeProgressComponent implements OnInit{

  progress:any
  year:any
  constructor(private homeService:HomeService,){}
  ngOnInit(): void {
    this.getProgress()
    this.getYear()
  }
  getProgress(){
    this.homeService.getHomeProgress().subscribe({
      next:(res)=>{
        this.progress=res.data
      }
    })
  }
  getYear(){
    this.homeService.getYear().subscribe({
      next:(res)=>{
        this.year=res.data
       
      }
    })
  }

}
