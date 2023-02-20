import CoursesGrid from "./Grid";
import CoursesList from "./List";

export default function Courses({courses}){
    const jumlah = courses.length;
    return (
        <div className="courses-section section-padding-01">
            <div className="container">
                <div className="archive-filter-bars">
                    <div className="archive-filter-bar">
                        <p>We found <span>{jumlah}</span> courses available for you</p>
                    </div>

                    <div className="archive-filter-bar">

                        <div className="filter-bar-wrapper">
                            <span>See</span>
                            <ul className="nav">
                                <li><button className="active" data-bs-toggle="tab" data-bs-target="#grid"><i className="fas fa-th"></i></button></li>
                                <li><button data-bs-toggle="tab" data-bs-target="#list"><i className="fas fa-bars"></i></button></li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="tab-content">
                    <div className="tab-pane show fade active" id="grid">
                        <CoursesGrid courses={courses} />
                    </div>
                    <div className="tab-pane fade" id="list">
                        <CoursesList courses={courses} />
                    </div>
                </div>
            </div>
        </div>
    );
}