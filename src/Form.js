import { useState } from "react";
export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [check, setCheck] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newItem = { desc, check, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDesc("");
    setCheck(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={check} onChange={(e) => setCheck(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
