import { useState } from 'react';

function AddMovie({ onAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0 ,
    trailerLink : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 , trailerLink :'' });  // Clear form
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col border  border-black gap-2 m-3 ">
      <input 
        type="text" 
        name="title" 
        value={newMovie.title} 
        placeholder="Title" 
        onChange={handleChange} 
        required 
        className='border border-black p-4 m-2 '
      />
      <input 
        type="text" 
        name="description" 
        value={newMovie.description} 
        placeholder="Description" 
        onChange={handleChange} 
        required 
        className='border border-black p-4 m-2 '
      />
      <input 
        type="text" 
        name="posterURL" 
        value={newMovie.posterURL} 
        placeholder="Poster URL" 
        onChange={handleChange} 
        required 
        className='border border-black p-4 m-2 '
      />
      <input 
        type="number" 
        name="rating" 
        value={newMovie.rating} 
        min="0" 
        max="10"
        onChange={handleChange} 
        required
        className='border border-black p-4 m-2 ' 
      />
       <input 
        type="text" 
        name="trailerLink" 
        value={newMovie.trailerLink} 
        placeholder="Trailer Link" 
        onChange={handleChange} 
        required 
        className='border border-black p-4 m-2 '
      />
      <button className='bg-black p-4 m-2 text-white' type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
