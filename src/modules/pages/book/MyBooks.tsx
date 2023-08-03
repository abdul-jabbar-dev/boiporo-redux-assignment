import { ClipLoader } from "react-spinners"
import { useDeleteABookMutation, useGetAllBooksQuery, useGetUserQuery } from "../../../redux/fetures/booksAPI/book"
import IBooks from "../../../types/books"
import Edit from "../../../assets/icons/Edit"
import { Link } from "react-router-dom"
import Delete from "../../../assets/icons/Delete"

export default function MyBooks() {
    const { data: books, isLoading: bloder } = useGetAllBooksQuery(undefined)
    const [deleteBook] = useDeleteABookMutation()
    const { data: user, isLoading: uloder } = useGetUserQuery({ token: localStorage.getItem("token") }, { refetchOnMountOrArgChange: true })
    if (bloder || uloder) {
        <ClipLoader color="#36d7b7" />
    }

    return (
        <div className="container mx-auto">
            <ul className="list-none  flex   flex-wrap ">
                {
                    books && user && (books.filter((book: IBooks) => book.publisher === user._id)).map((b: IBooks, key: number) => <li key={key} className="py-3  sm:py-4 w-1/3">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-16 h-16 rounded-xl" src={b.imageURL} alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {b.title}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {b.genre}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base pr-6 font-semibold text-gray-900 dark:text-white">
                                <div>
                                    <Link to={"/editebooks/" + b?._id}> <Edit className='w-6 hover:scale-110 cursor-pointer' /></Link>
                                    <Delete onClicks={() => {
                                        const is = confirm('Are you sure?');
                                        is && deleteBook({ bookId: b._id })
                                    }} className='w-6 hover:scale-110 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}
