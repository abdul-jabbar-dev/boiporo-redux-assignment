
import IBooks from "../../types/books"
import { Link } from "react-router-dom"
import WishlistStrok from "../../assets/icons/WishlistStrok"

export default function AllBooks({ books }: { books: IBooks[] }) {
    return (
        books.map((book: IBooks) => <><div className="flex h-max my-4 gap-x-8">
            <div  >
                <img className="h-full w-44" src={book.imageURL} alt="" />
            </div>
            <div className="w-full h-full ">
                <Link to={'/books/' + book?._id}> <h2 className="text-2xl font-semibold hover:underline hover:cursor-pointer">{book.title}</h2></Link>
                <br />
                <h4>By: {book.author}</h4>
                <p>Publication Date: {book.publicationDate}</p>
                <div className="mt-6">
                    <WishlistStrok />
                </div>
            </div>
        </div>
        </>)
    )
}
