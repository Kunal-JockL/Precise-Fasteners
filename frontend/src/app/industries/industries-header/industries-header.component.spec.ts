import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesHeaderComponent } from './industries-header.component';

describe('IndustriesHeaderComponent', () => {
  let component: IndustriesHeaderComponent;
  let fixture: ComponentFixture<IndustriesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
