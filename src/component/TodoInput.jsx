import { useState } from "react";

function TodoInput({ addlist }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add a new task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="add-btn"
        onClick={() => {
          if (inputText.trim() !== "") {
            addlist(inputText);
            setInputText("");
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
