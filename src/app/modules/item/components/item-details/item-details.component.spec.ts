import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemModule } from '../../item.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemDetailsComponent } from './item-details.component';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemModule],
      providers: [  
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [ItemDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
