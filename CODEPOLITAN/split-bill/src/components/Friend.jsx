export default function Friend({ friend, onSelected, selectedFriend }) {
  const { id, name, image, balance } = friend;
  const isSelected = selectedFriend?.id === id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          Kamu berhutang Rp{Math.abs(balance)} ke {name}
        </p>
      )}{" "}
      {balance > 0 && (
        <p className="green">
          {name} berhutang Rp{balance} ke kamu
        </p>
      )}
      {balance === 0 && <p>{name} dan kamu tidak ada hutang</p>}
      <button className="button" onClick={() => onSelected(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
