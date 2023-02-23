import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth }) {
    return (
        <AuthenticatedLayout
            auth={auth}
        >
            <Head title="Profile" />

            <UpdateProfileInformationForm />
            <UpdatePasswordForm />
        </AuthenticatedLayout>
    );
}
