import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Arial', padding: '2rem' }}>
      <h1>🎉 Willkommen bei Basarbox</h1>
      <p>Wähle deinen Zugang:</p>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <Link href="/verkaeufer">
          <button style={buttonStyle}>Ich bin Verkäufer</button>
        </Link>
        <Link href="/veranstalter">
          <button style={buttonStyle}>Ich bin Veranstalter</button>
        </Link>
      </div>
    </main>
  );
}

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1rem',
  cursor: 'pointer',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
};