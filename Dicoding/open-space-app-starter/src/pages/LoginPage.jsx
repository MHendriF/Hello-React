import React from 'react';
import { IoEarthOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function LoginPage() {
    const dispatch = null; // @TODO: get dispatch function from store

    const onLogin = ({ id, password }) => {
        // @TODO: dispatch async action to login
    };

    return (
        <section className='login-page'>
            <header className='login-page__hero'>
                <h1>
                    <IoEarthOutline />
                </h1>
            </header>
            <article className='login-page__main'>
                <h2>
                    See <strong>The World</strong>, <br />
                    Through Open Space.
                </h2>

                <LoginInput login={onLogin} />
                <p>
                    Don&apos;t have an account? <Link to='/register'>Register</Link>
                </p>
            </article>
        </section>
    );
}

export default LoginPage;