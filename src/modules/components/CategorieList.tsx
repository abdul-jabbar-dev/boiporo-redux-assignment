import { useEffect, useState } from "react";
import IBooks from "../../types/books";

export default function CategorieList({ books }: { books: IBooks[] }) {
    const [category, setCategory] = useState<string[]>()
    const [sCategory, setSCategory] = useState<string[]>(['Fantasy', 'Thriller'])
    useEffect(() => {
        setCategory(Array.from(new Set(books.map(b => b.genre))))
    }, [books])


    return (
        <div>
            <div className="my-2">
                Selected
                <ul className="list-none ml-6 ">
                    {sCategory.map(sc => <li className=" hover:text-sky-700 hover:cursor-pointer hover:underline text-md my-1" key={sc}>{sc} X </li>)}
                </ul>
            </div>
            <hr />  
            <ul className="list-none ml-6 ">
                {
                    category?.map(b => <li className=" hover:text-sky-700 hover:cursor-pointer hover:underline text-md my-1" key={b}>{b} </li>)
                }
            </ul>
        </div>
    )
}
