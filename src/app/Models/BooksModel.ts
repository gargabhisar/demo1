export interface BooksModel {
    bookId: number;
    title: string;
    isbn: string;
    size: string;
    pages: number;
    pricePaperback: number;
    priceKindle: number;
    image: string;
    description: string;
    authorId: number;
    publicationId: number;
}