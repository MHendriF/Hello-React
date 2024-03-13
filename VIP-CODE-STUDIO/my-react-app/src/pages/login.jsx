import FormLogin from '../components/Fragments/FormLogin';
import AuthLayouts from '../components/Layouts/AuthLayouts';

const LoginPage = (props) => {
    return (
        <AuthLayouts title='Login' type='login'>
            <FormLogin />
        </AuthLayouts>
    );
};

export default LoginPage;
