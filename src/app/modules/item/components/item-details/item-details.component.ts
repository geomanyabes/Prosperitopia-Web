// item-details.component.ts
import { Component, EventEmitter, Input, Output, OnInit, Inject } from '@angular/core';
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
  @Output() submitForm: EventEmitter<Item> = new EventEmitter<Item>(); // Output event for form submission

  public breakpoint: number; // Breakpoint observer code
  public form: FormGroup;
  title: string = 'Item Form';

  constructor(@Inject(MAT_DIALOG_DATA) public data: Item,
   private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ItemDetailsComponent>,
   private itemService: ItemService) {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: []
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
    this.itemService.createItem(data).subscribe(e => {
      this.dialogRef.close(e);
    });
    // Emit the form data when the form is submitted
    this.submitForm.emit(this.form.value);
  }
  onCancel() {
    this.dialogRef.close(this.form.value);
  }
  

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  // private markAsDirty(group: FormGroup): void {
  //   group.markAsDirty();
  //   // tslint:disable-next-line:forin
  //   for (const i in group.controls) {
  //     group.controls[i].markAsDirty();
  //   }
  // }
}
