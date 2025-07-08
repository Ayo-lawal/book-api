/* eslint-disable prettier/prettier */
export interface Book {
  id: number;
  title: string;
  author: string;
  publishedYear: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishedYear: 1960,
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949,
  },
  {
    id: 3,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    publishedYear: 1932,
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publishedYear: 1951,
  },
  {
    id: 6,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    publishedYear: 1953,
  },
  {
    id: 7,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publishedYear: 1813,
  },
  {
    id: 8,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publishedYear: 1937,
  },
  {
    id: 9,
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    publishedYear: 1890,
  },
  {
    id: 10,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publishedYear: 1954,
  },
];
