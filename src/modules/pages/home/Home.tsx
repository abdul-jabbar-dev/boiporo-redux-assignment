
import CategorieList from "../../components/CategorieList"
import SearchFilter from "../../components/SearchFilter"
import AllBooks from "../../components/AllBooks"
import { ClipLoader } from "react-spinners"
import { useGetAllBooksQuery, useGetUserQuery } from "../../../redux/fetures/booksAPI/book"
import { useEffect, useState } from 'react';
import { TFilter } from "../../../types/books"

function Home() {
    const { data: user } = useGetUserQuery({ token: localStorage.getItem("token") }, { refetchOnMountOrArgChange: true })
    const [filter, setFilter] = useState<TFilter>({ year: undefined, genre: undefined, search: undefined })
    const { data: books, isLoading, refetch } = useGetAllBooksQuery(filter)
    useEffect(() => {
        refetch()
    }, [filter, refetch])
    if (isLoading) {
        return <ClipLoader color="#36d7b7" />
    }

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
                                <input onChange={(e) => {
                                    setFilter({ ...filter, year: e.target.value })
                                }} name="yearSearch" type="text" id="yearSearch" className="text-sm border-gray-300 rounded-lg block  p-2.5 placeholder-gray-400 text-black border " placeholder="2000" />
                            </div>

                        </div>

                        <br />
                        {/* filter  Categories*/}
                        <div>
                            <h3 className="text-xl text-center">All Categories</h3>
                            <CategorieList   filter={filter} setFilter={setFilter}></CategorieList>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 ">

                    {/* filter search*/}
                    <div>
                        <SearchFilter filter={filter} setFilter={setFilter}></SearchFilter>
                    </div>

                    {/* books */}
                    <AllBooks user={user} books={books} ></AllBooks>

                </div>
            </div>
        </div>
    )
}

export default Home