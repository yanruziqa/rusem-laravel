import FrontLayout from '@/Layouts/FrontLayout';
import Slider from './Partial/Slide';
import Fitur from './Partial/Fitur';
import { Head } from '@inertiajs/react';
import Kategori from './Partial/Kategori';
import CallToAction from './Partial/CTO';
import Testimonial from './Partial/Testimonial';
import Webinar from './Partial/Webinar';

export default function Home(props) {
    return (
        <FrontLayout menu={props.category}>
            <Head title="Home" />
            <Slider />
            <Fitur />
            <Kategori categoryList={props.category}/>
            <Webinar webinars={props.webinar} categories={props.webinarByCategory} />
            <CallToAction />
            <Testimonial testimonials={props.testimonial} />
        </FrontLayout>
    );
}
