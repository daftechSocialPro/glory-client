import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { HomeService } from 'src/app/service/home.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-cites',
  templateUrl: './home-cites.component.html',
  styleUrls: ['./home-cites.component.css']
})
export class HomeCitesComponent  implements OnInit {
  contactForm!: FormGroup;
  formResponse!: string;
  customOptions = {
    loop: true,
    autoplay: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 5
      }
    }
  };
  
  sites: any
  ngOnInit(): void {
    this.getHomeProperties()
    this.contactForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required)
    });
  }

  constructor(private homeService: HomeService,private commonService:CommonService) { }

  getHomeProperties() {
    this.homeService.getHomeSites().subscribe({
      next: (res) => {
        this.sites = res.data
      }
    })
  }

  getImagePath(image: any) {

    return this.commonService.createImagePath(image.data.attributes.url)

  }


  submitForm() {
    if (this.contactForm.invalid) {
      return;
    }

    const formData = {data:this.contactForm.value};
    console.log("formmmdata", formData)

    this.homeService.contactus(formData).subscribe(
      () => {
        this.formResponse = 'Message sent successfully';
        console.log("formmm2", this.formResponse)
        this.contactForm.reset();
      },
      (error) => {
        this.formResponse = 'Please try again later.';
        console.error(error);
      }
    );
  }
}
