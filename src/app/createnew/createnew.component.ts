import { Component } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createnew',
  templateUrl: './createnew.component.html',
  styleUrls: ['./createnew.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CreateNewComponent {
  createNewForm: FormGroup;
  selectedImage: File | null = null;

  constructor() {
    // Initialize the form with controls
    this.createNewForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl('', Validators.required),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$') // Validates a 10-digit number
      ])
    });
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedImage = fileInput.files[0];
      console.log('File selected:', this.selectedImage);
    }
  }

  onSubmit(): void {
    if (this.createNewForm.valid) {
      const formData = new FormData();
      formData.append('email', this.createNewForm.get('email')?.value);
      formData.append('name', this.createNewForm.get('name')?.value);
      formData.append('city', this.createNewForm.get('city')?.value);
      formData.append('contact', this.createNewForm.get('contact')?.value);

      if (this.selectedImage) {
        formData.append('image', this.selectedImage);
      }

      console.log('Form Data Submitted:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      // Placeholder for sending data to a backend API
      // this.http.post('your-backend-url', formData).subscribe(
      //   (response) => {
      //     console.log('Form submitted successfully:', response);
      //   },
      //   (error) => {
      //     console.error('Error submitting form:', error);
      //   }
      // );
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(): void {
    if (confirm('Are you sure you want to cancel? All changes will be lost.')) {
      this.createNewForm.reset();
      this.selectedImage = null;
      console.log('Form reset.');
    }
  }
}
