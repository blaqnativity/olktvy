const Filter = ({ filter, setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter({ ...filter, title: e.target.value });
  };

  const handleRatingChange = (e) => {
    setFilter({ ...filter, rating: e.target.value });
  };

  return (
    <div className=" mt-6 flex flex-col gap-4 p-4 max-w-lg mx-auto">
      <input
        type="text"
        value={filter.title}
        placeholder="Search by title..."
        onChange={handleTitleChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        value={filter.rating}
        placeholder="Min Rating"
        onChange={handleRatingChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Filter;
