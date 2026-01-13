import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesGridComponent } from './industries-grid.component';

describe('IndustriesGridComponent', () => {
  let component: IndustriesGridComponent;
  let fixture: ComponentFixture<IndustriesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
