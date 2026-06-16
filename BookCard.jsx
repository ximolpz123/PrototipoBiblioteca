import React from 'react';

const BookCard = ({ book, onReserve }) => {
  const { available, title, author, coverUrl, format } = book;

  return (
    <article className="book-card">
      <img src={coverUrl} alt={`Portada del libro ${title}`} className="book-cover" />
      <div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)' }}>{author}</p>
      </div>
      <div className="meta-data">
        <span className="format-tag">{format}</span>
        <div className="status-indicator" aria-label={available ? 'Disponible' : 'Prestado'}>
          <span className={`dot ${available ? 'green' : 'red'}`} />
          {available ? 'Disponible' : 'Prestado'}
        </div>
      </div>
      <button
        className="btn-primary"
        onClick={() => onReserve(book)}
        disabled={!available}
      >
        {available ? 'Reservar en 1 Clic' : 'No Disponible'}
      </button>
    </article>
  );
};

export default BookCard;