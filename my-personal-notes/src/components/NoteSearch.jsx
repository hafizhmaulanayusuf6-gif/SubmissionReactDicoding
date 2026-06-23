import React from 'react';

function NoteSearch({ onSearch, keyword }) {
  const handleChange = (event) => onSearch(event.target.value);
  const handleClear = () => onSearch('');

  return (
    <div className="note-search" data-testid="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={handleChange}
        data-testid="note-search-input"
      />
      {keyword && (
        <button
          className="note-search__clear"
          onClick={handleClear}
          data-testid="note-search-clear"
        >
          &times;
        </button>
      )}
    </div>
  );
}

export default NoteSearch;