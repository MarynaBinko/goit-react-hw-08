import { useState } from "react"


const SearchBox = ({onSearch}) => {
    const [query, setQuery]=useState("");

    const handleChange = (event)=>{
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

  return (
    <div>
      <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
      />
    </div>
  )
}

export default SearchBox
