import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewReleaseSectionComponent } from './home-new-release-section.component';

describe('HomeNewReleaseSectionComponent', () => {
  let component: HomeNewReleaseSectionComponent;
  let fixture: ComponentFixture<HomeNewReleaseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNewReleaseSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeNewReleaseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
