import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [query, setQuery] = useState('');

  // Mock data solicitado: 3 libros de ejemplo
  const mockData = [
    {
      id: 1,
      title: 'Cálculo de Stewart',
      author: 'James Stewart',
      available: true,
      coverUrl: 'https://placehold.co/300x450/ef4444/ffffff?text=Cálculo+de+Stewart'
    },
    {
      id: 2,
      title: 'Diseño UX/UI Centrado en el Humano',
      author: 'Don Norman',
      available: false,
      coverUrl: 'https://placehold.co/300x450/2563eb/ffffff?text=UX+UI'
    },
    {
      id: 3,
      title: 'Estructuras de Datos y Algoritmos',
      author: 'Thomas Cormen',
      available: true,
      coverUrl: 'https://placehold.co/300x450/475569/ffffff?text=Algoritmos'
    }
  ];

  return (
    <div className="dashboard-container">
      {/* 1. Encabezado */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">Biblioteca Universitaria</h1>
        <div className="user-profile" aria-label="Perfil de Tomás">
          <span className="profile-icon">👨‍🎓</span>
        </div>
      </header>

      {/* 2. Buscador Global */}
      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por título, autor, tema..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* Espacio preparado / Div oculto para el Autocompletado IA */}
          {query.length > 0 && (
            <div className="autocomplete-dropdown">
              <ul>
                <li className="autocomplete-item">Buscando "{query}" con IA...</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 3. Sección Novedades / Resultados */}
      <main className="results-section">
        <h2 className="section-title">Novedades</h2>
        <div className="cards-grid">
          {mockData.map((book) => (
            <article key={book.id} className="book-card">
              <img src={book.coverUrl} alt={`Portada de ${book.title}`} className="book-cover" />
              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                
                {/* Semáforo de Disponibilidad */}
                <div className={`availability-indicator ${book.available ? 'available' : 'unavailable'}`}>
                  {book.available ? '🟢 DISPONIBLE' : '🔴 PRESTADO'}
                </div>
                
                {/* Botón Principal de Acción */}
                <button 
                  className="btn-reserve"
                  disabled={!book.available}
                >
                  RESERVAR EN 1 CLIC
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;