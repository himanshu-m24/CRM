import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class NewUserComponent implements OnInit{
  form!: FormGroup<any> ;

  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit() {
 
    this.form = this.fb.group({
      rows: this.fb.array([]),
    });
    
    this.addRow();
  }

  get rows() {
    return this.form.get('rows') as FormArray;
  }

  createRow(): FormGroup {
    return this.fb.group({
      name: [''],
      address: [''],
    });
  }

  addRow() {
    this.rows.push(this.createRow());
  }

  deleteRow(index: number) {
    if (this.rows.length > 1) {
      this.rows.removeAt(index);
    }
  }

  onSubmit() {
    console.log(this.form.value); // Log all form data to the console
  }
}
