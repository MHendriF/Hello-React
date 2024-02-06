export default function Card({ children }) {
    return <div className='shadow rounded-lg overflow-hidden bg-white'>{children}</div>;
}

function Title({ children }) {
    return (
        <div className='p-4 border-b'>
            <h1 className='text-xl'>{children}</h1>
        </div>
    );
}

function Body({ children }) {
    return <h1 className='leading-relaxed p-4'>{children}</h1>;
}

function Footer({ children }) {
    return <div className='bg-slate-50 p-4'>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;
