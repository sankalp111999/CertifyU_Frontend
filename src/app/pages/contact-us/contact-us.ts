import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component,signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs {
  contactForm!: FormGroup;
  formValidity =signal(false);

  constructor(private fb:FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });

    this.contactForm.statusChanges.subscribe({
      next: (status) => {
        this.formValidity.set(status === 'VALID');
      },
    });

  }

  onSubmit() {
    // if(this.contactForm.valid) {
    //   this.contactServices.sendMessage(this.contactForm.value).subscribe({
    //     next: () => {
    //       this.contactForm.reset();
    //     },
    //     error: (error: HttpErrorResponse) => {

    //     },
    //   });
    // }else {

    // }
  }
}
