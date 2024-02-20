import { Component } from '@angular/core';

@Component({
  selector: 'home-new-release-section',
  standalone: true,
  imports: [],
  templateUrl: './home-new-release-section.component.html',
  styleUrl: './home-new-release-section.component.css',
})
export class HomeNewReleaseSectionComponent {
  sectionTitle: string = 'New Release';
  sectionDescription: string =
    'Discover the freshest reads in our Library! Dive into captivating stories and thrilling adventures hot off the press. Stay ahead of the curve and explore the latest additions to our collection today!';
  sectionImg: string =
    'https://cdn.mos.cms.futurecdn.net/ce75mXVcgCYB9aQ3qKwXt9-1200-80.jpg';
}
