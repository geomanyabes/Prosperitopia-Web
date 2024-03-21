// item-details.component.ts
import { Component, EventEmitter, Input, Output, OnInit, Inject, input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from '../../interface/item.interface';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  @Input() item: Item | undefined; // Input property to pass item data
  @Input() readonly: boolean;
  @Output() submitForm: EventEmitter<Item> = new EventEmitter<Item>(); // Output event for form submission

  public breakpoint: number; // Breakpoint observer code
  public form: FormGroup;
  title: string = 'Item Form';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Item,
   private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ItemDetailsComponent>,
   private itemService: ItemService) {
    this.readonly = false;
    this.form = this.formBuilder.group({
      id: [],
      name: [{value: '', disabled: this.readonly}, Validators.required],
      description: [{value: '', disabled: this.readonly}, Validators.required],
      category: [{value: '', disabled: this.readonly}, Validators.required],
      price: [{value: '', disabled: this.readonly}]
    });
    this.breakpoint = 0;
  }

  ngOnInit(): void {
    this.form.reset(this.data);
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code
  }

  ngOnChanges(): void {
    // Detect changes to the input item and update the form accordingly
    if (this.item) {
      this.form.patchValue(this.item);
    }
  }

  onSubmit(): void {
    let data = this.form.value;
    if(data.id == 0) {
      this.itemService.createItem(data).subscribe(e => {
        this.dialogRef.close(e);
        // Emit the form data when the form is submitted
        this.submitForm.emit(this.form.value);
      });
    }
    else {
      this.itemService.updateItem(data.id, data).subscribe(e => {
        this.dialogRef.close(e);
        // Emit the form data when the form is submitted
        this.submitForm.emit(this.form.value);
      });
    }
  }
  onCancel() {
    this.dialogRef.close(this.form.value);
  }
  

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }
}
