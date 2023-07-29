
import { useParams } from "react-router-dom";
// import WishlistStrok from "../../../assets/icons/WishlistStrok";
import { useGetABookQuery } from "../../../redux/fetures/booksAPI/book";
import { ClipLoader } from 'react-spinners';

const BookDetails = () => {
    const { id } = useParams();
    const { data: books, isLoading } = useGetABookQuery(id)
    
    // const [addWishlist] = useAddWishlistMutation()
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
                        <a href={"/editebooks/" + books?.title}>Edite</a>
                    </div>
                    <div className="mt-6 flex items-center gap-x-5">
                        <button className="bg-blue-700 text-white rounded-lg px-4 py-3">Click here to read </button>
                        {/* {<div onClick={()=>}>< WishlistStrok /></div>} */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookDetails