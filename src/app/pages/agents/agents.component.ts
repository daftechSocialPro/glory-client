import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  agents:any
  constructor(private homeService:HomeService,
              private commonService:CommonService,){}
  ngOnInit(): void {
    this.getAgents()
  }
  getAgents(){
    this.homeService.getHomeAgent().subscribe({
      next:(res)=>{
        this.agents=res.data
      }
    })
  }
  getImagePath(image: any) {

    return this.commonService.createImagePath(image.data.attributes.url)

  }
 
}
