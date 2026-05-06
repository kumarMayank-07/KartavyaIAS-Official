import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Courses from "../Components/Courses";
import About from "../Components/About";
import Enroll from "../Components/Enroll";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import FreeEducation from '../Assets/Freeeducation.jpeg';
import Close from '../Assets/close.png';

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <>
      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-10 flex items-center justify-center z-50">
          <div className=" rounded-2xl p-4 relative max-w-md w-full">
            
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-4 right-4 sm:-right-8 text-gray-600 text-xl font-bold hover:cursor-pointer"
            >
              <img src={Close} alt="Close" className="w-4 h-4" />
            </button>

            {/* Demo Image */}
            <Link to="/courses">
              <img
              src={FreeEducation}
              alt="Popup"
              className="rounded-xl w-full shadow-2xl"
            />
            </Link>
          </div>
        </div>
      )}

      <main>
        <Hero />
        <Courses isHomePage={true} />

        <div className="max-w-6xl mx-auto px-6 pb-20">
  <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
    
    <h3 className="text-2xl font-black mb-3">
      Explore the Complete UPSC Syllabus
    </h3>

    <p className="text-gray-600 mb-6">
      Get a structured overview of the full UPSC CSE syllabus and plan your preparation with clarity and direction.
    </p>

    <Link
      to="/syllabus"
      className="bg-gradient-to-r from-brand-red to-brand-blue text-white px-6 py-3 rounded-xl font-bold"
    >
      View UPSC CSE Syllabus
    </Link>

  </div>
</div>

        <About />
      </main>
    </>
  );
}

export default HomePage;