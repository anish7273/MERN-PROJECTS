import SearchBar from "./SearchBar";


export default function Appbar(){
    return(
        <div className="flex justify-between">
            <div className="inline-flex items-center pl-8">youtube</div>
            <div>
                <SearchBar/>
            </div>
            <div className="inline-flex items-center pr-8 ">
                <button className=" inline-flex items-center border border-grey-500 pl-2 pb-1 pr-2 rounded-md" type="button">signin</button></div>
        </div>
    )
}