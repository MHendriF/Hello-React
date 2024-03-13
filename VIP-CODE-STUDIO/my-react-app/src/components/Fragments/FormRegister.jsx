import Button from '../Elements/Buttons';
import InputForm from '../Elements/Inputs/InputForm';

const FormRegister = (props) => {
    return (
        <form action=''>
            <InputForm label='Fullname' name='fullname' type='text' placeholder='Insert your name here ....'></InputForm>
            <InputForm label='Email' name='email' type='email' placeholder='example@email.com'></InputForm>
            <InputForm label='Password' name='password' type='password' placeholder='********'></InputForm>
            <InputForm label='Confirm Password' name='password' type='confirmPassword' placeholder='********'></InputForm>
            <Button classname='bg-blue-600'>Register</Button>
        </form>
    );
};

export default FormRegister;
