import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  baseUrl: string = environment.baseUrl + '';
  baseUrlPdf: string = environment.baseUrl;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}
  getAllLocation() {
    return this.http.get<any>(this.baseUrl + '/locations');
  }
  getAllPhone() {
    return this.http.get<any>(this.baseUrl + '/phones');
  }
  getAllSocialMedia() {
    return this.http.get<any>(this.baseUrl + '/social-medias');
  }
  getAllEmail() {
    return this.http.get<any>(this.baseUrl + '/emails');
  }
}
