export default function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const close = 20;
  const isOpen = hour >= open && hour <= close;

  if (isOpen) {
    return <FooterOpenHour open={open} close={close} />;
  } else {
    return <FooterClosedHour open={open} close={close} />;
  }
}

function FooterOpenHour({ open, close }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} MHFCode | open hour : {open} - close hour : {close}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterClosedHour({ open, close }) {
  return (
    <footer className="footer">
      <p>
        Maaf gan masih tutup. Coba dateng lagi sekitar jam {open}-{close}.
      </p>
    </footer>
  );
}
