import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { DomSanitizer } from "@angular/platform-browser"
import { environment } from "src/environments/environment.prod"

@Injectable({
    providedIn: 'root',
  })
  export class CommonService {
  
    uploadUrl: string = environment.assetUrl;
    constructor( private http: HttpClient,private sanitizer: DomSanitizer) { }


    createImagePath(url: string) {
        return this.uploadUrl + url
      }

  }  





 