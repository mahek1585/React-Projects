import React from 'react'

const SearchInput = ({value,onChange}) => {
  return (
    <div className=" w-full p-4 flex gap-4">
          <input 
          className="px-4 py-2 flex-1 bg-white"
          placeholder ="searcg Pokemon..."
          value={value}
          onChange={onChange}
          />
          <button className="px-4 py-2 text-black font-medium  bg-amber-300">
            Search
          </button>
        </div>
  )
}

export default SearchInput