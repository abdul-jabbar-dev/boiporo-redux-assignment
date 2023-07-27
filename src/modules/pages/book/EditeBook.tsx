import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom"
import IBooks from "../../../types/books";
import { useEffect, useState } from 'react';

export default function EditeBook() {
    const { id } = useParams()
    const [book, setBook] = useState<IBooks>()
    const { register, handleSubmit, formState: { errors } } = useForm<IBooks>({
        values: book
    });
    const onSubmit: SubmitHandler<IBooks> = (data) => {
        console.log(data)
    };
    useEffect(() => {
        fetch('/books.json').then(res => res.json()).then((data: IBooks[]) => setBook(data.find(book => book.title === id)!))
    }, [id])

    return (
        <div className="container mx-auto ">
            <div className="flex justify-center my-12">
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/3">
                    <h1 className="text-center mb-4 mt-2 text-xl">Let's Edite <span className="font-bold">{book?.title}</span></h1>
                    <div className="w-full">
                        <div className="flex flex-col">
                            <label htmlFor="title">Title</label>
                            <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border "  {...register("title", { required: true })} type="text" name="title" />
                            {errors.title && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="author">Author</label>
                            <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border "  {...register("author", { required: true })} type="text" name="author" />
                            {errors.author && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="genre">Genre</label>
                            <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border "  {...register("genre", { required: true })} type="text" name="genre" />
                            {errors.genre && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="imageURL">ImageURL</label>
                            <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border "  {...register("imageURL", { required: true })} type="text" name="imageURL" />
                            {errors.imageURL && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                        </div>
                    </div>
                    <input className="border block mx-auto px-3 py-1 rounded-lg uppercase my-5" type="submit" value={'Update'} />
                </form>
            </div>
        </div>
    )
}
