// item-details.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from '../../interface/item.interface';
import { Category } from '../../../category/interface/category.interface';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  @Input() item: Item | undefined; // Input property to pass item data
  @Output() submitForm: EventEmitter<Item> = new EventEmitter<Item>(); // Output event for form submission

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [],
      category: this.formBuilder.group({
        id: [],
        name: ['', Validators.required],
        description: ['', Validators.required]
      })
    });
  }

  ngOnChanges(): void {
    // Detect changes to the input item and update the form accordingly
    if (this.item) {
      this.form.patchValue(this.item);
    }
  }

  onSubmit(): void {
    // Emit the form data when the form is submitted
    this.submitForm.emit(this.form.value);
  }
}
