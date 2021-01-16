import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [item, setItem] = useState();
  const [listItems, setListItems] = useState([]);


  const handleChange = (itemChange) => {
    setItem(itemChange);
    console.log(item);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setListItems(item);
    setItem('');
    console.log(itemDefined);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={(e) => handleChange(e.target.value)} />
        <button className="btn">Add</button>
      </form>
    </section>
  )
}

export default App
