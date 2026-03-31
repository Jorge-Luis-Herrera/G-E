import { useState, useEffect } from 'react';
import '../styles/booking.css';

const SERVICES_LIST = [
  'Corte Ejecutivo', 'Corte con Diseño', 'Corte + Barba Perfilada', 'Corte Infantil',
  'Color Completo', 'Mechas / Highlights', 'Balayage Artístico', 'Retoque de Raíz',
  'Hidratación Profunda', 'Keratina Alisadora', 'Tratamiento Anticaída', 'Mascarilla Nutritiva',
  'Peinado para Evento', 'Peinado de Novia', 'Ondas y Rizos', 'Recogido Elegante',
];

const STEPS = [
  { number: 1, label: 'Servicio' },
  { number: 2, label: 'Fecha' },
  { number: 3, label: 'Datos' },
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [online, setOnline] = useState(navigator.onLine);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ service: '', date: '', time: '', name: '', phone: '', notes: '' });

  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off); };
  }, []);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const today = new Date().toISOString().split('T')[0];

  const submit = (e) => {
    e.preventDefault();
    const booking = { ...form, id: Date.now(), timestamp: new Date().toISOString(), synced: online };
    const all = JSON.parse(localStorage.getItem('ge-bookings') || '[]');
    all.push(booking);
    localStorage.setItem('ge-bookings', JSON.stringify(all));
    setDone(true);
  };

  const reset = () => { setForm({ service: '', date: '', time: '', name: '', phone: '', notes: '' }); setStep(1); setDone(false); };

  const CheckSvg = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
  );

  if (done) {
    return (
      <section id="reservar" className="booking section">
        <div className="container">
          <div className="booking__container">
            <div className="booking__success" role="status" aria-live="polite">
              <div className="booking__success-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h2 className="booking__success-title">{online ? '¡Cita Reservada!' : '¡Reserva Guardada!'}</h2>
              <p className="booking__success-text">
                {online ? `Tu cita para "${form.service}" el ${form.date} a las ${form.time} ha sido registrada.` : 'Tu reserva se guardó localmente y se enviará al reconectar.'}
              </p>
              <button className="btn btn--primary" onClick={reset}>Nueva Reserva</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservar" className="booking section" aria-labelledby="booking-title">
      <div className="container">
        <header className="booking__header">
          <span className="section__label">Reservar</span>
          <h2 id="booking-title" className="section__title">Agenda tu cita</h2>
          <p className="section__subtitle" style={{ margin: '0 auto' }}>Reserva en menos de un minuto. Sin complicaciones.</p>
        </header>
        <div className="booking__container">
          {!online && (
            <div className="booking__offline-notice" role="alert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
              Sin conexión — tu reserva se guardará localmente
            </div>
          )}
          <div className="booking__steps" aria-label="Progreso">
            {STEPS.map((s, i) => (
              <div key={s.number} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className={`booking__step ${step === s.number ? 'booking__step--active' : ''} ${step > s.number ? 'booking__step--completed' : ''}`}>
                  <div className="booking__step-number">{step > s.number ? <CheckSvg /> : s.number}</div>
                  <span className="booking__step-label">{s.label}</span>
                </div>
                {i < STEPS.length - 1 && <div className="booking__step-line" aria-hidden="true"/>}
              </div>
            ))}
          </div>
          <form className="booking__form" onSubmit={submit} noValidate>
            {step === 1 && (
              <div className="booking__field">
                <label htmlFor="booking-service" className="booking__label">¿Qué servicio te interesa?</label>
                <select id="booking-service" className="booking__select" value={form.service} onChange={e => set('service', e.target.value)} required aria-required="true">
                  <option value="" disabled>Selecciona un servicio</option>
                  {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}
            {step === 2 && (
              <div className="booking__datetime">
                <div className="booking__field">
                  <label htmlFor="booking-date" className="booking__label">Fecha</label>
                  <input id="booking-date" type="date" className="booking__input" value={form.date} min={today} onChange={e => set('date', e.target.value)} required aria-required="true"/>
                </div>
                <div className="booking__field">
                  <label htmlFor="booking-time" className="booking__label">Hora</label>
                  <input id="booking-time" type="time" className="booking__input" value={form.time} min="09:00" max="19:00" onChange={e => set('time', e.target.value)} required aria-required="true"/>
                </div>
              </div>
            )}
            {step === 3 && (
              <>
                <div className="booking__field">
                  <label htmlFor="booking-name" className="booking__label">Nombre</label>
                  <input id="booking-name" type="text" className="booking__input" placeholder="Tu nombre completo" value={form.name} onChange={e => set('name', e.target.value)} required aria-required="true" autoComplete="name"/>
                </div>
                <div className="booking__field">
                  <label htmlFor="booking-phone" className="booking__label">Teléfono</label>
                  <input id="booking-phone" type="tel" className="booking__input" placeholder="+58 412 123 4567" value={form.phone} onChange={e => set('phone', e.target.value)} required aria-required="true" autoComplete="tel"/>
                </div>
                <div className="booking__field">
                  <label htmlFor="booking-notes" className="booking__label">Notas <span style={{ fontWeight: 400, color: 'var(--color-text-tertiary)' }}>(opcional)</span></label>
                  <textarea id="booking-notes" className="booking__textarea" placeholder="¿Alguna preferencia?" value={form.notes} onChange={e => set('notes', e.target.value)}/>
                </div>
              </>
            )}
            <div className="booking__actions">
              {step > 1 && <button type="button" className="btn btn--ghost" onClick={() => setStep(step - 1)}>Atrás</button>}
              {step < 3 ? (
                <button type="button" className="btn btn--primary" onClick={() => setStep(step + 1)} disabled={(step === 1 && !form.service) || (step === 2 && (!form.date || !form.time))}>Continuar</button>
              ) : (
                <button type="submit" className="btn btn--primary" disabled={!form.name || !form.phone}>Confirmar Reserva</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
