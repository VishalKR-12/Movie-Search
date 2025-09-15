function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/2 p-2 rounded-l-md text-black"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
