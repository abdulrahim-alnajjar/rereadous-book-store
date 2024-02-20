import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecommendedSectionComponent } from './home-recommended-section.component';

describe('HomeRecommendedSectionComponent', () => {
  let component: HomeRecommendedSectionComponent;
  let fixture: ComponentFixture<HomeRecommendedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRecommendedSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeRecommendedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
