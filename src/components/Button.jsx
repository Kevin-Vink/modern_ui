import React from 'react';

function Button({ text, styling }) {
  return (
    <button type="button" className={`bg-blue-600 hover:bg-blue-700 font-medium transition-colors text-white py-1.5 text-sm px-3 rounded-full ${styling}`}>
      {text}
    </button>
  );
}

export default Button;
