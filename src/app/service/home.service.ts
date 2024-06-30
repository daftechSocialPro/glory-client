import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
import { propertyParams } from '../pages/property/property.component';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl: string = environment.baseUrl + '';
  baseUrlPdf: string = environment.baseUrl;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getHomeHero() {
    return this.http.get<any>(this.baseUrl + '/home-heroes/1?populate=*');
  }

  getHomeClients() {
    return this.http.get<any>(this.baseUrl + '/clients?populate=*');
  }

  getHomeProperty(param?: propertyParams) {
    let params = new HttpParams();

    if (param?.PropertyType) {
      params = params.append('filters[type2][$containsi]', param?.PropertyType);
    }
    if (param?.Location) {
      params = params.append('filters[location][$containsi]', param?.Location);
    }
    if (param?.Category) {
      params = params.append('filters[type][$containsi]', param?.Category);
    }
    if (param?.Query) {
      params = params.append('filters[name][$containsi]', param?.Query);
    }
    if (param?.BedsMin !== undefined) {
      params = params.append('filters[beds][$gte]', param.BedsMin.toString());
    }
    if (param?.BedsMax !== undefined) {
      params = params.append('filters[beds][$lte]', param.BedsMax.toString());
    }
    return this.http.get<any>(this.baseUrl + '/properties?populate=*', {
      params: params,
    });
  }

  getsingleProperty(id: any) {
    return this.http.get<any>(this.baseUrl + `/properties/${id}?populate=*`);
  }
  getHomeWhyChooseUs() {
    return this.http.get<any>(this.baseUrl + '/whychooseuses?populate=*');
  }
  getHomeAgent() {
    return this.http.get<any>(this.baseUrl + '/agents?populate=*');
  }
  getsingleHomeAgent(id: number) {
    return this.http.get<any>(this.baseUrl + `/agents/${id}?populate=*`);
  }

  getHomeProgress() {
    return this.http.get<any>(this.baseUrl + '/realstatenumbers');
  }
  getHomeTestimonial() {
    return this.http.get<any>(this.baseUrl + '/testimonies?populate=*');
  }
  getHomeSites() {
    return this.http.get<any>(this.baseUrl + '/sites?populate=*');
  }
  getHomeFeatures() {
    return this.http.get<any>(this.baseUrl + '/features');
  }
  getAbout() {
    return this.http.get<any>(this.baseUrl + '/aboutuses?populate=*');
  }
  getFeature() {
    return this.http.get<any>(this.baseUrl + '/aboutfeatyres?populate=*');
  }
  getManagemntTeam() {
    return this.http.get<any>(this.baseUrl + '/managemntteams?populate=*');
  }

  contactus(formData: any) {
    return this.http.post<any>(this.baseUrl + '/contactuses', formData);
  }
  getHomeType() {
    return this.http.get<any>(this.baseUrl + '/configurations');
  }
  getYear() {
    return this.http.get<any>(this.baseUrl + '/years');
  }
  getVedios() {
    return this.http.get<any>(this.baseUrl + '/vedios');
  }
  getBlog() {
    return this.http.get<any>(this.baseUrl + '/blogs?populate=*');
  }
  getsingleBlog(id: number) {
    return this.http.get<any>(this.baseUrl + `/blogs/${id}?populate=*`);
  }
  // searchProperties(keywords: string, type: string, site: string) {
  //   const searchQuery = {
  //     _where: {
  //       _or: [
  //         { title_contains: keywords },
  //         { description_contains: keywords }
  //       ],
  //       type: type,
  //       site: site
  //     }
  //   };

  //   const url = `${this.apiUrl}/properties?_limit=10&_sort=createdAt:DESC&_where=${JSON.stringify(searchQuery)}`;
  //   return this.http.get(url);
  // }
}
