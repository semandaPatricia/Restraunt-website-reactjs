import React from 'react'
import Foods from '../data/data'

const SearchFilter = () => {
    const [searchFood, setsearchFood] = useState("");

  return (
    <div>
    <input
      type="text"
      placeholder="search..."
      onChange={(event) => {
        setsearchFood(event.target.value);
      }}
    />
    {Foods.filter((value) => {
      if (searchFood == "") {
        return value
      }else if(value.name.toLocaleLowerCase().includes(searchFood.toLocaleLowerCase()))
      return value
    })
    .map((value, key) => {
      return (
        <div>
          <p>{value.name}</p>
        </div>
      );
    })}
  </div>
  )
}

export default SearchFilter