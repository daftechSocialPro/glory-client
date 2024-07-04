import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeHeroComponent } from './pages/home/components/home-hero/home-hero.component';
import { HomeClientsComponent } from './pages/home/components/home-clients/home-clients.component';
import { HomeLatestPropertyComponent } from './pages/home/components/home-latest-property/home-latest-property.component';
import { HomeWhyChooseUsComponent } from './pages/home/components/home-why-choose-us/home-why-choose-us.component';
import { HomeTopAreasComponent } from './pages/home/components/home-top-areas/home-top-areas.component';
import { HomeAgentsComponent } from './pages/home/components/home-agents/home-agents.component';
import { HomeProgressComponent } from './pages/home/components/home-progress/home-progress.component';
import { HomeCustomerReviewsComponent } from './pages/home/components/home-customer-reviews/home-customer-reviews.component';
import { HomeBlogComponent } from './pages/home/components/home-blog/home-blog.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthHeaderIneterceptor } from './http-interceptors/auth-header-interceptor';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertiDetailComponent } from './pages/home/components/properti-detail/properti-detail.component';
import { GalleriaModule } from 'primeng/galleria';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { ManagementComponent } from './pages/management/management.component';
import { Nav2Component } from './layout/nav2/nav2.component';
import { PropertyComponent } from './pages/property/property.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeCitesComponent } from './pages/home/home-cites/home-cites.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SisterComponent } from './pages/sister/sister.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeHeroComponent,
    HomeClientsComponent,
    HomeLatestPropertyComponent,
    HomeWhyChooseUsComponent,
    HomeTopAreasComponent,
    HomeAgentsComponent,
    HomeProgressComponent,
    HomeCustomerReviewsComponent,
    HomeBlogComponent,
    SpinnerComponent,
    PropertiDetailComponent,
    ContactusComponent,
    AboutComponent,
    ManagementComponent,
    Nav2Component,
    PropertyComponent,
    AgentsComponent,
    HomeCitesComponent,
    BlogComponent,
    BlogDetailComponent,
    SisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    GalleriaModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSliderModule,
    DropdownModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    DataViewModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderIneterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
