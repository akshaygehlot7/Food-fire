import React from 'react'

const Search = () => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <input
          type="text"
        //   value={searchQuery}
        //   onChange={(e) => handleChange(e.target.value)}
          style={{width: "26rem"}}
          className="px-5  border border-gray-400 p-2 rounded-l-full"
        />
        <button
          className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
          onClick={() => {}}
        >
          🔍
        </button>
      </div>
    </div>
  )
}

export default Search
