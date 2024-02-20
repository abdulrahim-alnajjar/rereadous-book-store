import { Component } from '@angular/core';
import { Book } from '../../modules/book.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-other-books-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-other-books-section.component.html',
  styleUrl: './home-other-books-section.component.css',
})
export class HomeOtherBooksSectionComponent {
  sectionTitle: string = 'Other books';
  books: Book[] = [
    {
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
      description:
        'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.',
      publishTime: '07/11/1960',
      pages: 336,
      readedPages: 200,
      category: ['fiction', 'novel', 'classic'],
      rating: 4.4,
    },
    {
      name: '1984',
      author: 'George Orwell',
      image:
        'https://i.pinimg.com/736x/e0/9d/e8/e09de82ba8ac2e5b06dfda9ca341be90.jpg',
      description:
        '1984 is a dystopian novel by English author George Orwell, published in 1949. The novel is set in Airstrip One (formerly known as Great Britain), a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.',
      publishTime: '06/08/1949',
      pages: 328,
      readedPages: 250,
      category: ['fiction', 'dystopian'],
      rating: 4.7,
    },
    {
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781645176596/the-great-gatsby-and-other-works-9781645176596_hr.jpg',
      description:
        "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby.",
      publishTime: '10/10/1925',
      pages: 180,
      readedPages: 150,
      category: ['fiction', 'novel', 'classic'],
      rating: 4.3,
    },
  ];
}
