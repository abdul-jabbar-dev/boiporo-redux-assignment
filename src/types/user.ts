type TUser = {
  _id: string;
  name: string;
  email: string;
  books: [string];
  wishlist: [string];
  reading: [string];
  createdAt: string;
  updatedAt: string;
  token?:string
};
export default TUser;
