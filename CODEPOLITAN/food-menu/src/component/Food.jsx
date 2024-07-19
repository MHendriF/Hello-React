export default function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props;
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width="100" height="70" />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? harga : "Habis"}</span>
      </div>
    </li>
  );
}
