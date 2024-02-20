import { Component } from '@angular/core';
import { HomeLandingSectionComponent } from '../../components/home-landing-section/home-landing-section.component';
import { HomeOtherBooksSectionComponent } from '../../components/home-other-books-section/home-other-books-section.component';
import { HomeNewReleaseSectionComponent } from '../../components/home-new-release-section/home-new-release-section.component';
import { HomeRecommendedSectionComponent } from '../../components/home-recommended-section/home-recommended-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeLandingSectionComponent,
    HomeOtherBooksSectionComponent,
    HomeNewReleaseSectionComponent,
    HomeRecommendedSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
