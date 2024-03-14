import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';

const FormLogin = (props) => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = '/products';
        console.log('Login');
    };

    return (
        <form onSubmit={handleLogin}>
            <InputForm label='Email' name='email' type='email' placeholder='example@email.com'></InputForm>
            <InputForm label='Password' name='password' type='password' placeholder='********'></InputForm>
            <Button classname='bg-blue-600 w-full' type='submit'>
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
