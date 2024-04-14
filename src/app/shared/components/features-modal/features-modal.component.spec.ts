import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesModalComponent } from './features-modal.component';

describe('FeaturesModalComponent', () => {
  let component: FeaturesModalComponent;
  let fixture: ComponentFixture<FeaturesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
