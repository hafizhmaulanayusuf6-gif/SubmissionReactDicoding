import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive, keyword, dataTestId = 'notes-list' }) {
  // TODO [Basic] validasi notes agar tidak kosong.
  const hasNotes = notes && notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        {/* TODO [Basic] tampilkan pesan kosong yang informatif ketika tidak ada catatan. */}
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          Tidak ada catatan.
        </p>
      </div>
    );
  }

  // Fungsi grouping (tambahan)
  const groupNotesByMonthYear = (notes) => {
    const groups = {};
    notes.forEach((note) => {
      const date = new Date(note.createdAt);
      const month = date.getMonth();
      const year = date.getFullYear();
      const key = `${year}-${String(month + 1).padStart(2, '0')}`;
      if (!groups[key]) {
        groups[key] = {
          label: `${date.toLocaleString('id-ID', { month: 'long' })} ${year}`,
          items: [],
        };
      }
      groups[key].items.push(note);
    });
    const sortedKeys = Object.keys(groups).sort((a, b) => b.localeCompare(a));
    return sortedKeys.map((key) => ({
      key,
      label: groups[key].label,
      items: groups[key].items,
    }));
  };

  const groups = groupNotesByMonthYear(notes);

  return (
    <div className="notes-list notes-list--grouped" data-testid={dataTestId}>
      {/* TODO [Basic] gunakan array.map untuk merender NoteItem untuk setiap catatan. */}
      {/* TODO [Skilled] ekstrak tombol aksi menjadi komponen reusable agar dipakai NoteItem. */}
      {/* TODO [Advanced] kelompokkan catatan per bulan-tahun dan render tiap grup dalam <section className="notes-group">. */}
      {groups.map((group) => (
        <section key={group.key} className="notes-group">
          <div className="notes-group__header">
            <h3 className="notes-group__title">{group.label}</h3>
            <span className="notes-group__count">{group.items.length} catatan</span>
          </div>
          <div className="notes-group__items">
            {group.items.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                keyword={keyword}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default NotesList;