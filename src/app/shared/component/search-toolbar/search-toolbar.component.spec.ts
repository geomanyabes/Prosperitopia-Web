import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared.module';

import { SearchToolbarComponent } from './search-toolbar.component';

describe('SearchToolbarComponent', () => {
  let component: SearchToolbarComponent;
  let fixture: ComponentFixture<SearchToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, BrowserAnimationsModule],
      declarations: [SearchToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
