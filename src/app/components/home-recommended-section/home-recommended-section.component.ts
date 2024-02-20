import { Component } from '@angular/core';
import { Book } from '../../modules/book.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-recommended-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-recommended-section.component.html',
  styleUrl: './home-recommended-section.component.css',
})
export class HomeRecommendedSectionComponent {
  sectionTitle: string = 'Recommended for you';
  books: Book[] = [
    {
      name: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      image:
        'https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg',
      description:
        'The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults, but is often read by adolescents for its themes of angst and alienation, and as a critique on superficiality in society.',
      publishTime: '07/16/1951',
      pages: 277,
      readedPages: 200,
      category: ['coming-of-age', 'classic'],
      rating: 4.0,
    },
    {
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      image:
        'https://themarblefaunbooksandgifts.com/cdn/shop/products/Peacock_Cover_glitter_card_5_x_7.jpg?v=1571638712',
      description:
        'Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book, who learns about the repercussions of hasty judgments and eventually comes to appreciate the difference between superficial goodness and actual goodness.',
      publishTime: '01/28/1813',
      pages: 279,
      readedPages: 250,
      category: ['fiction', 'romance', 'classic'],
      rating: 4.4,
    },
    {
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      image:
        'https://i.pinimg.com/originals/27/cf/91/27cf91f605923223613909c7b9d2219f.jpg',
      description:
        "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
      publishTime: '09/21/1937',
      pages: 310,
      readedPages: 300,
      category: ['fiction', 'fantasy'],
      rating: 4.4,
    },
    {
      name: 'Harry Potter',
      author: 'J.K. Rowling',
      image:
        'https://media.harrypotterfanzone.com/sorcerers-stone-us-childrens-edition.jpg',
      description:
        "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
      publishTime: '06/26/1997',
      pages: 309,
      readedPages: 280,
      category: ['fiction', 'fantasy'],
      rating: 4.4,
    },
  ];
}
