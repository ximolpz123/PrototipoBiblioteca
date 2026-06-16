import React from 'react';

const ReservationSuccess = ({ reservation, onReset }) => {
  return (
    <section className="success-screen">
      <div className="check-icon">✅</div>
      <h2 style={{ marginBottom: '10px' }}>¡Reserva Exitosa!</h2>
      <p>Tu recurso <strong>{reservation.title}</strong> ha sido reservado y guardado en tu sesión.</p>
      <p style={{ marginTop: '15px', color: 'var(--text-muted)' }}>
        Presenta este código en el módulo de biblioteca:
      </p>
      
      <div className="code-box">{reservation.code}</div>
      
      <button className="btn-primary" onClick={onReset}>
        Volver al Dashboard
      </button>
    </section>
  );
};

export default ReservationSuccess;