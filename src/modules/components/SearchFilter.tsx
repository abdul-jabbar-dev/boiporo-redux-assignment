import { TFilter } from "../../types/books";

export default function SearchFilter({ filter, setFilter }: { filter: TFilter, setFilter: React.Dispatch<React.SetStateAction<TFilter>> }) {
    return (

        <>

            <div className=" w-1/3 mx-auto my-8" >
                <input onChange={(e) => {
                    setFilter({ ...filter, search: e.target.value })
                }} type="text" id="bookSearch" className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border " placeholder="Search" required />
            </div>
        </>
    )
}
