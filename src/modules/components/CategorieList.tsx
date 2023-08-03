
import { useGetGenreQuery } from "../../redux/fetures/booksAPI/book";
import { TFilter } from "../../types/books";

export default function CategorieList({ filter, setFilter }: {
    filter: TFilter, setFilter: React.Dispatch<React.SetStateAction<TFilter>>
}) {

    const { data: category } = useGetGenreQuery(undefined)
    console.log(category)
    return (
        <div>

            <div className="my-4"> selected: <p onClick={() => setFilter({ ...filter, genre: undefined })} className="inline hover:text-red-700 hover:cursor-pointer hover:underline text-md ">{filter.genre}</p>  </div>
            <ul className="list-none ml-6 ">
                {
                    category?.map((b: string) => <li onClick={() => setFilter({ ...filter, genre: b })} className=" hover:text-sky-700 hover:cursor-pointer hover:underline text-md my-1" key={b}>{b} </li>)
                }
            </ul>
        </div>
    )
}
