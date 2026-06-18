import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Courses from "../Components/Courses";
import About from "../Components/About";
import Enroll from "../Components/Enroll";
import Footer from "../Components/Footer";
import { Helmet } from 'react-helmet'
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
         <Helmet>
                <title>Kartavya IAS - Home</title>
                <meta name="description" content="Kartavya IAS is a premier institute for UPSC CSE preparation, offering comprehensive courses, expert guidance, and a structured approach to help aspirants achieve their goals." />
                <meta name="keywords" content="UPSC CSE, IAS preparation, Kartavya IAS, UPSC courses, Civil Services Exam, UPSC coaching, IAS coaching, UPSC syllabus" />
                <meta name="author" content="Kartavya IAS" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.kartavyaias.com/" />
                <meta property="og:title" content="Kartavya IAS - Home" />
                <meta property="og:description" content="Kartavya IAS is a premier institute for UPSC CSE preparation, offering comprehensive courses, expert guidance, and a structured approach to help aspirants achieve their goals." />
                <meta property="og:image" content="https://www.kartavyaias.com/og-image.jpg" />
                <meta property="og:url" content="https://www.kartavyaias.com/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kartavya IAS - Home" />
                <meta name="twitter:description" content="Kartavya IAS is a premier institute for UPSC CSE preparation, offering comprehensive courses, expert guidance, and a structured approach to help aspirants achieve their goals." />
                <meta name="twitter:image" content="https://www.kartavyaias.com/twitter-image.jpg" />
            </Helmet>
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