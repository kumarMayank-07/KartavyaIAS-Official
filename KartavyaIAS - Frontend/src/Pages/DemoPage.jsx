import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const rawApiBase = import.meta.env.VITE_API_URL || 'https://kartavya-ias-official.vercel.app';
const API_BASE = rawApiBase.replace(/\/$/, '');

// Extract YouTube ID
const extractYouTubeId = (input) => {
  if (!input) return '';
  const str = input.trim();
  const longMatch = str.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (longMatch) return longMatch[1];
  const shortMatch = str.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  const embedMatch = str.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) return str;
  return str;
};

const categoryMeta = {
  'Economy': { icon: '📊', color: 'from-violet-500 to-purple-600' },
  'History': { icon: '🏛️', color: 'from-amber-500 to-orange-600' },
  'Geography': { icon: '🌍', color: 'from-green-500 to-emerald-600' },
  'Polity': { icon: '⚖️', color: 'from-blue-500 to-indigo-600' },
  'Science & Tech': { icon: '🔬', color: 'from-cyan-500 to-teal-600' },
  'Environment': { icon: '🌱', color: 'from-lime-500 to-green-600' },
  'Current Affairs': { icon: '📰', color: 'from-red-500 to-rose-600' },
  'Ethics': { icon: '🧭', color: 'from-sky-500 to-blue-600' },
  'Essay': { icon: '✍️', color: 'from-fuchsia-500 to-pink-600' },
  'CSAT': { icon: '🧮', color: 'from-yellow-500 to-amber-600' },
};

const allCategories = Object.keys(categoryMeta);

// ✅ Syllabus Data
const syllabusData = {
  History: ["Ancient India", "Medieval India", "Modern India", "World History"],
  Polity: ["Constitution", "Fundamental Rights", "Parliament", "Judiciary"],
  Geography: ["Physical Geography", "Indian Geography", "World Geography"],
  Economy: ["Basic Concepts", "Budget", "Banking", "Inflation"],
  Environment: ["Ecology", "Biodiversity", "Climate Change"],
  Science: ["Physics Basics", "Biology Basics", "Technology Developments"],
};

function DemoPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);

      fetch(`${API_BASE}/api/videos?category=${encodeURIComponent(selectedCategory)}`)
        .then((res) => res.json())
        .then((data) => {
          setVideos(data.data || []);
          setActiveVideo(data.data?.[0] || null);
          setLoading(false);
        })
        .catch(() => {
          setVideos([]);
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">

      <Helmet>
        <title>Kartavya IAS - Demo Lectures</title>
      </Helmet>

      <div className="bg-[#001740] py-4 px-6 text-white shadow-lg">
                      <div className="max-w-7xl mx-auto flex justify-between items-center">
                          <Link to="/" className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
                              ← Back to Home
                          </Link>
                          <h1 className="font-black text-xl tracking-tight">KARTAVYA IAS &nbsp;&nbsp;<span className="text-brand-gold">DEMO LECTURES</span></h1>
                      </div>
                  </div>

      {/* Heading */}
      {!selectedCategory && (
        <div className="text-center pt-14 pb-10 px-6">
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Choose a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Subject</span>
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto text-lg font-medium">
            Watch free demo lectures from our expert faculty.
          </p>
        </div>
      )}

      {/* Categories */}
      {!selectedCategory && (
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {allCategories.map((cat) => {
              const meta = categoryMeta[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="group bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition"
                >
                  <span className="text-4xl">{meta.icon}</span>
                  <h4 className="font-bold mt-2">{cat}</h4>
                </button>
              );
            })}
          </div>
        </div>
      )}


     

      {/* Videos */}
      {selectedCategory && (
        <div className="max-w-6xl mx-auto px-6 py-10">

          <button onClick={() => setSelectedCategory(null)} className="mb-6">
            ← Back
          </button>

          {loading && <p>Loading...</p>}

          {!loading && activeVideo && (
            <div>
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${extractYouTubeId(activeVideo.youtubeVideoId)}`}
                allowFullScreen
              />
              <h3 className="mt-4 font-bold">{activeVideo.title}</h3>
            </div>
          )}

        </div>
      )}

      

    </div>
  );
}

export default DemoPage;