import React, { useState, useEffect } from 'react';
import './App.css';
import mockData from './data/mockData.json';
import BookCard from './components/BookCard';
import ReservationSuccess from './components/ReservationSuccess';

function App() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Todos');
  const [books, setBooks] = useState(mockData);
  const [suggestions, setSuggestions] = useState([]);
  const [successData, setSuccessData] = useState(null);

  // Efecto: Simula IA autocompletado y filtra en tiempo real
  useEffect(() => {
    if (query.length > 2) {
      const matched = mockData.filter(b => b.title.toLowerCase().includes(query.toLowerCase()));
      setSuggestions(matched.slice(0, 3)); // Mostrar top 3 sugerencias
    } else {
      setSuggestions([]);
    }

    // Filtrado visual instantáneo en el Dashboard
    let filtered = mockData;
    if (query) {
      filtered = filtered.filter(b => 
        b.title.toLowerCase().includes(query.toLowerCase()) || 
        b.author.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (filter !== 'Todos') {
      filtered = filtered.filter(b => b.format === filter.replace('Solo ', ''));
    }
    setBooks(filtered);
  }, [query, filter]);

  // Proceso Ágil de Reserva (1 Clic)
  const handleReserve = (book) => {
    const code = `LIB-${Math.floor(1000 + Math.random() * 9000)}`;
    const reservation = {
      bookId: book.id,
      title: book.title,
      code,
      date: new Date().toISOString()
    };

    // Simulando base de datos persistente localmente
    const existingReservations = JSON.parse(localStorage.getItem('biblioteca_reservas') || '[]');
    localStorage.setItem('biblioteca_reservas', JSON.stringify([...existingReservations, reservation]));

    setSuccessData(reservation);
    setQuery('');
  };

  // Interfaz Condicional de Éxito
  if (successData) {
    return (
      <div className="app-container">
        <ReservationSuccess reservation={successData} onReset={() => setSuccessData(null)} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="dashboard-header">
        <h1>Buscador de Biblioteca</h1>
        
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Busca títulos, autores o temas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* Dropdown UI Autocompletado */}
          {suggestions.length > 0 && (
            <ul className="autocomplete-dropdown">
              {suggestions.map(s => (
                <li key={s.id} className="autocomplete-item" onClick={() => { setQuery(s.title); setSuggestions([]); }}>
                  <strong>{s.title}</strong> - <small>{s.author}</small>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="filters-container">
          {['Todos', 'Solo Físicos', 'Solo Digitales'].map(f => (
            <button key={f} className={`pill ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </header>

      <main className="book-grid">
        {books.map(book => <BookCard key={book.id} book={book} onReserve={handleReserve} />)}
      </main>
    </div>
  );
}

export default App;