import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactForm!: FormGroup;
  formResponse!: string;
  loading: boolean = false;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required)
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      return;
    }
  
    this.loading = true; 
  
    const formData = { data: this.contactForm.value };
   
  
    this.homeService.contactus(formData).subscribe(
      () => {
        this.formResponse = 'Message sent successfully';
        
        this.contactForm.reset();
        this.loading = false; 
      },
      (error) => {
        this.formResponse = 'Please try again later.';
        console.error(error);
        this.loading = false; 
      }
    );
  }
}