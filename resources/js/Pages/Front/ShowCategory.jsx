import Breadcrumb from '@/Components/Breadcrumb';
import FrontLayout from '@/Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import Courses from './Partial/ShowCategory/Courses';
import Banner from './Partial/ShowWebinar/Banner';

export default function ShowCategory(props) {
    return (
        <FrontLayout menu={props.category}>
            <Head title={props.kategori.nama_kategori} />
            <Banner>
                <Breadcrumb location={props.breadcrumb}/>
                <div className="page-banner__caption text-center">
                    <h2 className="page-banner__main-title">{props.kategori.nama_kategori}</h2>
                </div>
            </Banner>
            <Courses courses={props.webinar}/>
        </FrontLayout>
    );
}
