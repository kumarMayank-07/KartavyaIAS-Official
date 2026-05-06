import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Courses from "../Components/Courses";
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom";

function CoursesPage() {
    return (
        <div className="min-h-screen bg-brand-surface flex flex-col">
            <Helmet>
                            <title>Kartavya IAS - Courses</title>
                        </Helmet>

                        <div className="bg-[#001740] py-4 px-6 text-white shadow-lg">
                      <div className="max-w-7xl mx-auto flex justify-between items-center">
                          <Link to="/" className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
                              ← Back to Home
                          </Link>
                          <h1 className="font-black text-xl tracking-tight">KARTAVYA IAS &nbsp;&nbsp;<span className="text-brand-gold">COURSES</span></h1>
                      </div>
                  </div>
            <div className="flex-grow">
                <Courses />
            </div>
        </div>
    );
}

export default CoursesPage;
