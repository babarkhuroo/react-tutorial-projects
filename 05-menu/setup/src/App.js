import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  return <main>
    <section className="menu section">
      <div>
        <h2 className="title">our menu</h2>
        <div className="underline"></div>
        <Categories />
        <Menu items={menuItems} />
      </div>
    </section>
  </main>;
}

export default App;
