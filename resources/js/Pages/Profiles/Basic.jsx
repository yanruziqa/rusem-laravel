import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateBasicProfile from './Partials/UpdateBasicProfile';

export default function EditProfiles({ auth, basicProfile }) {
    console.log(basicProfile);
    return (
        <AuthenticatedLayout
            auth={auth}
        >
            <Head title="Basic Profile" />

            <UpdateBasicProfile />
        </AuthenticatedLayout>
    );
}
