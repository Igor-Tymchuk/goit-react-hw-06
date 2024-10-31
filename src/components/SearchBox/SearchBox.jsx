const SearchBox = ({ handleSearch, search }) => {
    return <div><input type="text" onChange={handleSearch} value={search} /></div>
};

export default SearchBox;