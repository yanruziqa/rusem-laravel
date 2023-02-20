import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthHeader from './Partial/Header';
import LoginForm from './Partial/LoginFom';
import AuthFooter from './Partial/Footer';

export default function Login({ status, canResetPassword }) {

    return (
        <AuthLayout>
            <Head title="Log in" />
            <AuthHeader header="Masuk ke Akun Anda" />
            <LoginForm />
            <AuthFooter 
                WelcomeText="Belum Jadi Instructor?"
                LinkText="Yuk Bergabung"
                LinkRoute={route('admin.register')}
            />
        </AuthLayout>
    );
}
