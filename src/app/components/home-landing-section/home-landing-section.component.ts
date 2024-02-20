import { Component } from '@angular/core';
import { Book } from '../../modules/book.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-landing-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-landing-section.component.html',
  styleUrl: './home-landing-section.component.css',
})
export class HomeLandingSectionComponent {
  book: Book = {
    name: 'The Road',
    author: 'Cormac McCarthy',
    image: 'https://i.redd.it/zvx5szymh7871.jpg',
    description:
      'The Road is a post-apocalyptic novel by American writer Cormac McCarthy. It tells the story of a father and his young son traveling through a post-apocalyptic landscape, struggling to survive and maintain their humanity in a world devoid of civilization and hope.',
    publishTime: '09/26/2006',
    pages: 287,
    readedPages: 200,
    category: ['fiction', 'dystopian', 'post-apocalyptic'],
    rating: 4.1,
  };
}
