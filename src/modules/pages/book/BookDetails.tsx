
import { useParams } from "react-router-dom";
import WishlistStrok from "../../../assets/icons/WishlistStrok";
import { useAddReadingMutation, useAddWishlistMutation, useGetABookQuery, useRemoveWishlistMutation, useGetUserQuery } from "../../../redux/fetures/booksAPI/book";
import { ClipLoader } from 'react-spinners';
import WishlistBG from "../../../assets/icons/WishlistBG";

const BookDetails = () => {
    const { id } = useParams();
    const { data: books, isLoading } = useGetABookQuery(id)
    const { data: user } = useGetUserQuery({ token: localStorage.getItem("token") })
    console.log(!user === undefined)
    const [addWishlist] = useAddWishlistMutation()
    const [removeWishlist] = useRemoveWishlistMutation()
    const [addReading, { isLoading: ReadIsLoding }] = useAddReadingMutation()
    if (isLoading) {
        return <ClipLoader color="#36d7b7" />
    }
    return (
        <div>
            <div className=" container mx-auto flex gap-x-14 my-8">
                <img src={books?.imageURL} alt="" />
                <div className="   my-auto">
                    <div className="">
                        <h1 className="text-5xl text-gray-900">{books?.title}</h1>
                        <br />
                        <h3 className="text-xl text-gray-600 font-extralight">{books?.author}</h3>
                        <h3 className="text-xl text-gray-600">Books category: {books?.genre}</h3>
                        <h3 className="text-xl text-gray-600">Rating: {books?.reviews}</h3>
                        <h3 className="text-xl text-gray-600">Publication Date: {books?.publicationDate}</h3>

                    </div>
                    <div className="mt-6 flex items-center gap-x-5">
                        {!user === undefined ? user.reading.includes(books._id) ? "Already reading" : <button disabled={ReadIsLoding} onClick={() => addReading({ bookId: books._id })} className="bg-blue-700 text-white rounded-lg px-4 py-3">{ReadIsLoding ? 'Loding...' : ' Click here to read '}</button> : ""}
                        {
                            !user === undefined ? user.wishlist.includes(books._id) ?
                                <div onClick={() => removeWishlist({ bookId: books._id })}><WishlistBG /></div> :
                                <div onClick={() => addWishlist({ bookId: books._id })}>< WishlistStrok /></div> :
                                ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookDetails