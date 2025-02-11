import { useState } from 'react';

function Filter({ onFilter }) {
  
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter(title, rating);
  };

  return (
    <div className="flex flex-col gap-2 m-3 ">
      <input 
        type="text" 
        placeholder="Filter by title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        className='border border-black m-2 p-4'
      />
      <input 
        type="number" 
        placeholder="Filter by rating" 
        value={rating} 
        onChange={e => setRating(e.target.value)} 
        min="0" 
        max="10"
        className='border border-black m-2 p-4'
      />
      <button className='bg-black text-white p-4 m-2' onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default Filter;
