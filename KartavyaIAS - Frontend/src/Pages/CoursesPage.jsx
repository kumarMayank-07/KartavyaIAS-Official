import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Courses from "../Components/Courses";
import { Helmet } from 'react-helmet'

function CoursesPage() {
    return (
        <div className="min-h-screen bg-brand-surface flex flex-col">
            <Helmet>
                            <title>Kartavya IAS - Courses</title>
                        </Helmet>
            <div className="flex-grow">
                <Courses />
            </div>
        </div>
    );
}

export default CoursesPage;
