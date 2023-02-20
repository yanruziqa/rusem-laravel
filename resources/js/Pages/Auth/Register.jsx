import { Head } from '@inertiajs/react';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthHeader from './Partial/Header';
import AuthFooter from './Partial/Footer';
import RegisterForm from './Partial/RegisterForm';

export default function Register() {

    return (
        <AuthLayout>
            <Head title="Register" />
            <AuthHeader header="Daftar Sekarang" />
            <RegisterForm />
            <AuthFooter
                WelcomeText="Sudah Jadi Instructor?"
                LinkText="Masuk ke Akun Anda"
                LinkRoute={route('admin.login')}
            />
        </AuthLayout>
    );
}
