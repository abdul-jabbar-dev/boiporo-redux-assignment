import { SubmitHandler, useForm } from "react-hook-form";
import IBooks from "../../../types/books";
import { useCreateABookMutation } from "../../../redux/fetures/booksAPI/book";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function AddBook() {
    const [createBook, { isLoading, error, isError, isSuccess }] = useCreateABookMutation()
    const { register, handleSubmit, formState: { errors } } = useForm<IBooks>();
    const onSubmit: SubmitHandler<IBooks> = (data) => {
        createBook({ data })
    }
    const notify = () => toast("Book create successfully");
    if (isError) {
        console.log(error)
    }
    if (isLoading) {
        return <ClipLoader color="#36d7b7" />
    } if (isSuccess) {
        notify()
        return <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
        />
    }
    return (
        <div className="container mx-auto ">
            <div className="flex justify-center my-12">
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/3">
                    <h1 className="text-center mb-4 mt-2 text-xl">Let's create a book</h1>
                    <div className="w-full">
                        <div className="flex flex-col">
                            <label htmlFor="title">Title</label>
                            <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border " placeholder="The Three Musketeers" {...register("title", { required: true })} type="text" name="title" />
                            {errors.title && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="author">Author</label>
                            <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border " placeholder="Alexandre Dumas" {...register("author", { required: true })} type="text" name="author" />
                            {errors.author && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                        </div>
                        <div className="flex gap-x-2">

                            <div className="flex flex-col w-1/2">
                                <label htmlFor="publicationDate">Publication Date</label>
                                <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border " placeholder="2014-06-15"  {...register("publicationDate", { required: true })} type="text" name="publicationDate" />
                                {errors.publicationDate && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                            </div>

                            <div className="flex flex-col  w-1/2">
                                <label htmlFor="reviews">Reviews</label>
                                <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border " placeholder="4.7"  {...register("reviews", { required: true })} type="text" name="reviews" />
                                {errors.reviews && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="genre">Genre</label>
                            <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border " placeholder="Adventures" {...register("genre", { required: true })} type="text" name="genre" />
                            {errors.genre && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="imageURL">ImageURL</label>
                            <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border " placeholder="https://m.media-amazon.com/images/I/41TxXqToCCL._SX348_BO1,204,203,200_.jpg" {...register("imageURL", { required: true })} type="text" name="imageURL" />
                            {errors.imageURL && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                        </div>
                    </div>
                    <input className="border block mx-auto px-3 py-1 rounded-lg uppercase my-5" type="submit" value={'Create'} />
                </form>
            </div>
        </div>
    )
}
