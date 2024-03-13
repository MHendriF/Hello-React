import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';

const FormLogin = (props) => {
    return (
        <form action=''>
            <InputForm label='Email' name='email' type='email' placeholder='example@email.com'></InputForm>
            <InputForm label='Password' name='password' type='password' placeholder='********'></InputForm>
            <Button classname='bg-blue-600'>Login</Button>
        </form>
    );
};

export default FormLogin;
