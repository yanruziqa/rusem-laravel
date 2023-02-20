import Breadcrumb from '@/Components/Breadcrumb';
import FrontLayout from '@/Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import Banner from './Partial/ShowWebinar/Banner';
import CourseInfo from './Partial/ShowWebinar/CourseInfo';

export default function ShowWebinar(props) {
    return (
        <FrontLayout menu={props.category}>
            <Head title={props.webinar.judul} />
            <Banner>
                <Breadcrumb location={props.breadcrumb}/>
            </Banner>
            <CourseInfo courseInfo={props.webinar} />
        </FrontLayout>
    );
}
