import React from 'react';

function NoteActionButton({ variant, onClick, dataTestId }) {
  const labelMap = {
    delete: 'Delete',
    archive: 'Arsipkan',
    unarchive: 'Pindahkan',
  };
  const classNameMap = {
    delete: 'note-item__delete-button',
    archive: 'note-item__archive-button',
    unarchive: 'note-item__archive-button',
  };

  return (
    <button
      className={classNameMap[variant]}
      type="button"
      onClick={onClick}
      data-testid={dataTestId}
    >
      {labelMap[variant]}
    </button>
  );
}

export default NoteActionButton;