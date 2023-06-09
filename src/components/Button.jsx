import React from 'react';

function Button({ text, styling, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 font-medium transition-all text-white 
    py-1.5 text-sm px-3 rounded-full ${styling}`}
    >
      {text}
    </button>
  );
}

export default Button;
