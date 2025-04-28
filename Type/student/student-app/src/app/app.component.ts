import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Defining properties for the student information
  name: string = '';
  grade: string = '';
  subject: string = '';
  rollNo: string = '';
  address: string = '';
  phone: string = '';

  // Function to handle input changes dynamically
  onInputChange(event: Event, field: string): void {
    const inputElement = event.target as HTMLInputElement;

    // Dynamically update the value of the specific property (field)
    if (field === 'name') {
      this.name = inputElement.value;
    } else if (field === 'grade') {
      this.grade = inputElement.value;
    } else if (field === 'subject') {
      this.subject = inputElement.value;
    } else if (field === 'rollNo') {
      this.rollNo = inputElement.value;
    } else if (field === 'address') {
      this.address = inputElement.value;
    } else if (field === 'phone') {
      this.phone = inputElement.value;
    }
  }

  // Function to save student information
  saveStudent(): void {
    console.log('Student Saved:', {
      name: this.name,
      grade: this.grade,
      subject: this.subject,
      rollNo: this.rollNo,
      address: this.address,
      phone: this.phone
    });
  }
}
