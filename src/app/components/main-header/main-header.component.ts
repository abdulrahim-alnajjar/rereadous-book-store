import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
})
export class MainHeaderComponent implements OnInit {
  searchReactiveForm: FormGroup;

  ngOnInit() {
    this.searchReactiveForm = new FormGroup({
      searchValue: new FormControl(null),
    });
  }
  // Submit form
  OnSubmit(): void {
    console.log(this.searchReactiveForm.value);
  }
}
