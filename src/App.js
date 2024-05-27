import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
export default function App() {
  const [items, setItem] = useState([]);

  function handleItems(item) {
    setItem((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function clearList() {
    const ass = window.confirm("Are you sure you want to delete?");
    if (ass === true) setItem([]);
  }
  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        clearList={clearList}
        key={items.id}
      />
      <Stats items={items} />
    </div>
  );
}
