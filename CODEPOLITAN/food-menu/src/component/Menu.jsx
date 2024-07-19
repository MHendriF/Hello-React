import Food from "./Food";
import foodMenu from "../constant/data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Menu Available</h2>

      {foodMenu.length === 0 ? (
        <p>Kosong, gan. Besok dateng lagi.</p>
      ) : (
        <>
          <p>
            Aneka makanan Indonesia yang disajikan oleh warteg mang udin sebagai pemenuhan makanan kesehatan yang
            diperlukan dalam kehidupan sehari-hari.
          </p>
          <ul className="foods">
            {foodMenu.map((food) => (
              <Food key={food.nama} {...food} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
