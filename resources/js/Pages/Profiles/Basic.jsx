import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateBasicProfile from './Partials/UpdateBasicProfile';
import UpdateEducationProfile from './Partials/UpdateEducationProfile';

export default function EditProfiles({ auth, basicProfile, educationProfile }) {
    console.log(educationProfile);
    return (
        <AuthenticatedLayout
            auth={auth}
        >
            <Head title="Edit Profile" />

            <UpdateBasicProfile />
            <UpdateEducationProfile />
        </AuthenticatedLayout>
    );
}
