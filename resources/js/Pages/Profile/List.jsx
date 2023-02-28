import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AllUsersTable from './Partials/AllUsersTable';

export default function List({ auth, users }) {
    // console.log(users);
    return (
        <AuthenticatedLayout
            auth={auth}
        >
            <Head title="Daftar User" />

            <AllUsersTable data={users} />
        </AuthenticatedLayout>
    );
}
