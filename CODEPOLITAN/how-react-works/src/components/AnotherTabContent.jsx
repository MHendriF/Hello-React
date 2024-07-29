export default function AnotherTabContent() {
  return (
    <div className="tab-content">
      <h4>Saya adalah tab yg berbeda, jadi data pada State akan hilang 💣</h4>
      <p>Pada saat kamu kembali ke tab yang memiliki data, maka akan hilang dan mulai dari awal.</p>
    </div>
  );
}
