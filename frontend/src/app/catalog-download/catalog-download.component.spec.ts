import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDownloadComponent } from './catalog-download.component';

describe('CatalogDownloadComponent', () => {
  let component: CatalogDownloadComponent;
  let fixture: ComponentFixture<CatalogDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
