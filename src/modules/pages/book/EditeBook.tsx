import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom"
import IBooks from "../../../types/books";


export default function EditeBook() {
    const { id } = useParams()
    const { register, handleSubmit, formState: { errors } } = useForm<IBooks>();
    const onSubmit: SubmitHandler<IBooks> = (data) => {
        console.log(data)
    };
    return (
        <div className="container mx-auto">
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
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
                </form>
            </div>
        </div>
    )
}
