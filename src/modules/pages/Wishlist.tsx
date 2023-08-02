import { Link } from "react-router-dom"
import { useAddWishlistMutation, useGetBookInforFromUserQuery, useRemoveWishlistMutation, useGetUserQuery } from "../../redux/fetures/booksAPI/book"
import IBooks from "../../types/books"
import WishlistBG from "../../assets/icons/WishlistBG"
import WishlistStrok from "../../assets/icons/WishlistStrok"
import { ClipLoader } from "react-spinners"

export default function Wishlist() {
    const { data: books } = useGetBookInforFromUserQuery(undefined)
    const { data: user } = useGetUserQuery({ token: localStorage.getItem("token") })
    const [addWishList, { isLoading: AWLoading }] = useAddWishlistMutation()
    const [removeWishList, { isLoading: RWLoading }] = useRemoveWishlistMutation()
    if (RWLoading || AWLoading) {
        return <ClipLoader color="#36d7b7" />
    }
    return (
        <div className={'container mx-auto flex h-max flex-wrap gap-y-4 mt-9'}>
            {books && books?.wishlist.length === 0 && <div className="text-center mx-auto">No wishlist to read</div>}
            {books && books.wishlist.map((book: IBooks) => <><div className=" w-1/2  flex gap-x-3" >
                <div  >
                    <img className="h-full w-32" src={book.imageURL} alt="" />
                </div>
                <div className="w-full h-full ">
                    <Link to={'/books/' + book?._id}> <h2 className="text-2xl font-semibold hover:underline hover:cursor-pointer flex gap-x-3">{book.title}  </h2></Link>
                    <br />
                    <h4>By: {book.author}</h4>
                    <p>Publication Date: {book.publicationDate}</p>
                    <div>
                        {
                            user && user.wishlist.includes(book._id) ?
                                <div onClick={() => {
                                    removeWishList({ bookId: book._id });
                                }}><WishlistBG /></div> :
                                <div onClick={() => {
                                    addWishList({ bookId: book._id })
                                }}>< WishlistStrok /></div>
                        }
                    </div>
                </div>
            </div>
            </>)}
        </div>
    )
}
