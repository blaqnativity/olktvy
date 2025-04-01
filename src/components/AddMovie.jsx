const AddMovie = ({ newMovie, handleChange, handleSubmit }) => {
  return (
    <div className="p-4 max-w-lg mx-auto ">
      <input
        type="text"
        name="title"
        value={newMovie.title}
        placeholder="Title"
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md mb-2"
      />
      <input
        type="text"
        name="description"
        value={newMovie.description}
        placeholder="Description"
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md mb-2"
      />
      <input
        type="text"
        name="posterURL"
        value={newMovie.posterURL}
        placeholder="Poster URL"
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md mb-2"
      />
      <input
        type="number"
        name="rating"
        value={newMovie.rating}
        placeholder="Rating"
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded-md w-full"
      >
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;
