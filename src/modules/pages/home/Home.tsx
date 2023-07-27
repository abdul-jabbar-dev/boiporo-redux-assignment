import { useEffect, useState } from "react"
import AllBooks from "../../components/AllBooks"
import IBooks from "../../../types/books"
import CategorieList from "../../components/CategorieList"
import SearchFilter from "../../components/SearchFilter"

function Home() {
    const [books, setBooks] = useState<IBooks[]>([])
    useEffect(() => {
        fetch("/books.json").then(res => res.json()).then(data => setBooks(data))
    }, [])

    return (
        <div className=" container mx-auto">
            <div className="flex gap-4">
                <div className="w-1/4">
                    <div>
                        {/* filter  year*/}
                        <div>
                            <h3 className="text-xl text-center">Find by Year</h3>
                            <br />
                            <div className="flex p-2 gap-x-4 items-center justify-center">
                                <label htmlFor="yearSearch " className="text-lg">Year: </label>
                                <input name="yearSearch" type="text" id="yearSearch" className="text-sm border-gray-300 rounded-lg block  p-2.5 placeholder-gray-400 text-black border " placeholder="2000" />
                            </div>

                        </div>

                        <br />
                        {/* filter  Categories*/}
                        <div>
                            <h3 className="text-xl text-center">All Categories</h3>
                            <CategorieList books={books}></CategorieList>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 ">

                    {/* filter search*/}
                    <div>
                        <SearchFilter></SearchFilter>
                    </div>

                    {/* books */}
                    <AllBooks books={books}></AllBooks>
                    
                </div>
            </div>
        </div>
    )
}

export default Home