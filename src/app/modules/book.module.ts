export class Book {
  constructor(
    public name: string,
    public image: string,
    public author: string,
    public description: string,
    public publishTime: string,
    public category: string[],
    public pages: number,
    public readedPages: number,
    public rating: number
  ) {
    name = String();
    author = String();
    description = String();
    publishTime = String();
    image = String();
    category = Array();
    pages = Number();
    readedPages = Number();
    rating = Number();
  }
}
