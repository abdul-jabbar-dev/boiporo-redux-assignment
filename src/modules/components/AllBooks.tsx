
import IBooks from "../../types/books"
import { Link } from "react-router-dom"
import WishlistStrok from "../../assets/icons/WishlistStrok"
import { useAddWishlistMutation, useRemoveWishlistMutation } from "../../redux/fetures/booksAPI/book"
import TUser from "../../types/user"
import WishlistBG from "../../assets/icons/WishlistBG"
import Ok from "../../assets/icons/Ok"

export default function AllBooks({ user, books }: { user: TUser, books: IBooks[] }) {
    const [addWishList] = useAddWishlistMutation()
    const [removeWishList] = useRemoveWishlistMutation()
    return (
        books.map((book: IBooks) => <><div className="flex h-max my-4 gap-x-8">
            <div  >
                <img className="h-full w-44" src={book.imageURL} alt="" />
            </div>
            <div className="w-full h-full ">
                <Link to={'/books/' + book?._id}> <h2 className="text-2xl font-semibold hover:underline hover:cursor-pointer flex gap-x-3">{book.title} <span>{user && user.reading.includes(book._id) && <Ok />}</span></h2></Link>
                <br />
                <h4>By: {book.author}</h4>
                <p>Publication Date: {book.publicationDate}</p>
                <div>
                    {
                        user && user.wishlist.includes(book._id) ?
                            <div onClick={() => removeWishList({ bookId: book._id })}><WishlistBG /></div> :
                            <div onClick={() => addWishList({ bookId: book._id })}>< WishlistStrok /></div>
                    }
                </div>
            </div>
        </div>
        </>)
    )
}
