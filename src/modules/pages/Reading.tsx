import { Link } from "react-router-dom"
import { useGetBookInforFromUserQuery, useRemoveReadingMutation } from "../../redux/fetures/booksAPI/book"
import IBooks from "../../types/books"
import Reset from "../../assets/icons/Reset"
import { ClipLoader } from "react-spinners"


export default function Reading() {
    const { data: books } = useGetBookInforFromUserQuery(undefined)
    const [removeReading, { isLoading }] = useRemoveReadingMutation()
    if (isLoading) {
        return <ClipLoader color="#36d7b7" />
    }
    return (
        <div className={'container mx-auto flex h-max flex-wrap gap-y-4 mt-9'}>
            {books && books?.reading.length===0 && <div className="text-center mx-auto">No Book read</div>}
            {books && books.reading.map((book: IBooks) => <><div className=" w-1/2  flex gap-x-3" >
                <div  >
                    <img className="h-full w-32" src={book.imageURL} alt="" />
                </div>
                <div className="w-full h-full ">
                    <Link to={'/books/' + book?._id}> <h2 className="text-2xl font-semibold hover:underline hover:cursor-pointer flex gap-x-3">{book.title}  </h2></Link>
                    <br />
                    <h4>By: {book.author}</h4>
                    <p>Publication Date: {book.publicationDate}</p>
                    <div>
                        <button className="w-1/3 bg-red-700 py-1 mt-3 text-gray-50 mr-6 flex justify-center items-center gap-x-2" onClick={() => removeReading({ bookId: book._id })}> Reset for read' <Reset className="w-4" ></Reset></button>
                    </div>
                </div>
            </div>
            </>)}
        </div>
    )
}
