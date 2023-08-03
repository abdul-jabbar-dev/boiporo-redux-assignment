interface IBooks {
  publisher: string;
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string;
  imageURL: string;
}

export type TFilter = {
  year?: string | undefined;
  genre?: string | undefined;
  search?: string | undefined;
};
export default IBooks;
