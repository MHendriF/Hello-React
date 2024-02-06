import Button from './Button';
import Card from './Card';

export default function AppComponent() {
    return (
        <div className='bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Hellow React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}
