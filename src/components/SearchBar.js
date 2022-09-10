const SearchBar = (props) => {
  return (
    <input
      name="search"
      type="search"
      placeholder="Search character"
      className=" bg-green-100 p-2 ml-4 mr-4"
      onChange={(e) => {
        props.onChange(e)
      }}
    />
  )
}

export default SearchBar
