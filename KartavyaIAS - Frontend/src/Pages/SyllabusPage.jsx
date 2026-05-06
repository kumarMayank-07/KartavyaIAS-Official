import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const syllabusData = {
  about: {
    "Examination Pattern": [
      "The Civil Services Examination (CSE) is a nationwide competitive exam in India conducted by the Union Public Service Commission (UPSC). It is held to recruit candidates for various central government services such as the Indian Administrative Service (IAS), Indian Foreign Service (IFS), and Indian Police Service (IPS), among others. The examination is conducted in three stages. \n\n",
      "The Civil Services Examination will consist of three successive stages. \n\n (i) The Civil Services Preliminary Examination is an objective-type test used to shortlist candidates for the Main Examination. The notification is generally released between February and March, and the exam is conducted around June or July each year. The results are typically declared by mid-August. \n\n (ii) The Civil Services Main Examination includes written papers followed by a personality test (interview) for final selection into various services and posts. The written exams are usually held in October, with results announced around February. The final outcome after the interview stage is generally declared in May. \n\n (iii) The Personality Test (Interview) is the final stage of the selection process, where candidates are assessed on their personality traits, communication skills, and overall suitability for a career in public service. The interview is conducted after the Main Examination results are declared, and the final results are typically announced in May. \n\n",
      "The UPSC Civil Services Examination syllabus is structured into three stages: Preliminary, Mains, and Interview. \n\n 1) The Preliminary stage primarily evaluates a candidate’s awareness of current events and their aptitude skills within a limited timeframe. It serves as a screening test and is qualifying in nature. \n\n 2) The Mains stage is designed to assess a candidate’s depth of knowledge in various subjects along with their ability to express ideas clearly and effectively. It focuses on analytical thinking and coherent presentation. The Main Examination consists of nine papers, each based on specific subjects outlined in the syllabus. Both Preliminary and Mains stages are written examinations. Candidates who successfully clear these two stages move on to the interview round. \n\n 3) In the interview stage, candidates are evaluated by a panel that reviews their academic and professional background. The discussion revolves around topics of general interest to determine their suitability for a career in public service. The aim is to assess not just intellectual ability but also personal qualities such as awareness, judgment, communication skills, leadership potential, and integrity.",
    ],
    "Eligibility Conditions": [
      "Nationality: \n For the Indian Administrative Service and the Indian Police Service, a candidate must be a citizen ofIndia. \n For other services, a candidate must be either: \n 1. a citizen of India, or \n 2. a subject of Nepal, or \n 3. a subject of Bhutan, or \n 4. a Tibetan refugee who came over to India before January 1, 1962, with the intention of permanently settling in India, or \n 5. a person of Indian origin who has migrated from Pakistan, Myanmar, Sri Lanka, East African countries of Kenya, Uganda, the United Republic of Tanzania (formerly Tanganyika and Zanzibar), Zambia, Malawi, Zaire, Ethiopia and Vietnam with the intention of permanently settling in India. Provided further that candidates belonging to categories b, c, d above will not be eligible for appointment to the Indian Foreign Service. A candidate in whose case a certificate of eligibility is necessary, may be admitted to the examination but the offer of appointment may be given only after the necessary eligibility certificate has been issued to him/her by the government of India.",
    ],
     " Minimum Educational Qualification": [
      "The candidate must hold a degree of any of Universities incorporated by an Act of the Central or State Legislature in India or other educational institutions established by an Act of Parliament or declared to be deemed as a University Under Section-3 of the University Grants Commission Act, 1956, or possess an equivalent qualification.",
      "Candidates who have appeared at an examination the passing of which would render them educationally qualified for the Commission's examination but have not been informed of the results as also the candidates who intend to appear at such a qualifying examination will also be eligible for admission to the Preliminary Examination. All candidates who are declared qualified by the Commission for taking the Civil Services (Main) Examination will be required to produce proof of passing the requisite examination with their application for the Main Examination failing which such candidates will not be admitted to the Main Examination. \n\n In exceptional cases the Union Public Service Commission may treat a candidate who has not any of the foregoing qualifications as a qualified candidate provided that he/she has passed examination conducted by the other Institutions, the standard of which in the opinion of the Commission justifies his/her admission to the examination.",
      "Candidates possessing professional and technical qualifications which are recognised by the Government as equivalent to professional and technical degree would also be eligible for admission to the examination.",
      "Candidates who have passed the final professional M.B.B.S. or any other Medical Examination but have not completed their internship by the time of submission of their applications for the Civil Services (Main) Examination, will be provisionally admitted to the Examination provided they submit along with their application a copy of certificate from the concerned authority of the University/Institution that they had passed the requisite final professional medical examination. In such cases, the candidates will be required to produce at the time of their interview original Degree or a certificate from the concerned competent authority of the University/Institution that they had completed all requirements (including completion of internship) for the award of the Degree.",
    ],
     "Age and Attempts": [
      "Category | Upper Age Limit | Number of Attempts\n General: 32 years | 6 attempts\n\ OBC: 35 years | 9 attempts\n\ SC/ST: 37 years | Attempts allowed till upper age limit\n\ PH: General – 42 years, OBC – 45 years, SC/ST – 47 years | General – 9 attempts, OBC – 9 attempts, SC/ST – Attempts allowed till upper age limit\n\ J&K Domicile: General – 37 years, OBC – 40 years, SC/ST – 42 years, PH – 47 years | Attempts allowed till upper age limit\n\ Disabled Servicemen: General – 37 years, OBC – 38 years, SC/ST – 40 years | Attempts allowed till upper age limit\n\ Ex-Servicemen (Military Service): General – 37 years, OBC – 40 years, SC/ST – 42 years | Attempts allowed till upper age limit ",
      "Note: \n 1. A candidate must have attained the age of 21 years. \n2. An attempt at a preliminary examination shall be deemed to be an attempt for the Civil Services examination. \n 3. If a candidate actually appears in any one paper in the preliminary examination, he/she shall be deemed to have made an attempt at the examination."
    ],
  },
  prelims: {
    "Information": [
      "The Preliminary Examination consists of two papers of Objective type(multiple choice questions).& The preliminary examination of UPSC is for screening purpose only. The marks obtained in the UPSC prelims examination amount to a qualification to take the UPSC Main examination and will not be counted for determining a candidate's final order of merit.",
      "Paper I - General Studies (GS), \n Paper Type - Objective Paper, \n Duration - 2 hours, \n Maximum Marks - 200, \n No. of Questions = 100, \n Negative Marking -  1/3 marks for each wrong answer \n\n Paper II - Civil Services Aptitude Test (CSAT), \n Paper Type - Objective Paper, \n Duration = 2 hours, \n Maximum Marks - 200, \n No. of Questions = 80, \n Negative Marking - 1/3 marks for each wrong answer \n\n Both the papers are conducted on the same day, with Paper I in the morning session and Paper II in the afternoon session. Candidates must qualify in Paper II by securing at least 33% of the marks to be eligible for the Main Examination. The marks obtained in Paper I are used to determine the cut-off for qualifying for the Main Examination, but they do not contribute to the final ranking of candidates. \n\n Note : It is mandatory for the candidate to appear in both the papers of Civil Services (Prelim) examination for the purpose of evaluation. Therefore a candidate will be disqualified in case he or she does not appear in both the papers of the (Prelims) exam. Question paper is set in both Hindi and English Languages.",
    ],
    "General Studies Paper I \u00A0\u00A0\u00A0 [200 Marks,  Duration: 2 hours,  100 Questions]": [
      "Current Affairs (National & International importance)",
      "History of India & Indian National Movement",
      "Indian & World Geography",
      "Indian Polity & Governance",
      "Economic & Social Development",
      "Environment & Ecology, Biodiversity, Climate Change",
      "General Science"
    ],
    "CSAT (Paper II - Qualifying) \u00A0\u00A0\u00A0 [200 Marks,  Duration: 2 hours,  80 Questions]": [
      "CSAT (Paper II - Qualifying)",
      "Comprehension",
      "Logical Reasoning & Analytical Ability",
      "Decision Making & Problem Solving",
      "General Mental Ability",
      "Basic Numeracy (Class X level)",
      "Data Interpretation"
    ]
  },
  mains: {
    "Essay": [
      "Philosophical Essays",
      "Social Issues",
      "Governance & Development Topics"
    ],

    "GS Paper I": [
      "Indian Culture & Heritage",
      "Modern Indian History",
      "World History",
      "Indian Society",
      "Geography (World & India)"
    ],

    "GS Paper II": [
      "Polity & Constitution",
      "Governance",
      "Social Justice",
      "International Relations"
    ],

    "GS Paper III": [
      "Indian Economy",
      "Agriculture",
      "Science & Technology",
      "Environment & Disaster Management",
      "Internal Security"
    ],

    "GS Paper IV (Ethics)": [
      "Ethics & Human Values",
      "Attitude",
      "Emotional Intelligence",
      "Case Studies",
      "Integrity & Aptitude"
    ]
  },
  optional: {
    "Agriculture Optional": [
      "Paper-I: \n\n Ecology and its relevance to man, natural resources, their sustainable management and conservation.Physical and social environment as factors of crop distribution and production. Agro ecology; croppingpattern as indicators of environments. Environmental pollution and associated hazards to crops, animalsand humans. Climate change - International conventions and global initiatives. Green house effect andglobal warming. Advance tools for ecosystem analysis - Remote sensing (RS) and GeographicInformation Systems (GIS). \n\n Cropping patterns in different agro-climatic zones of the country. Impact of highyielding and short-duration varieties on shifts in cropping patterns. Concepts of various cropping and farming systems.Organic and Precision farming. Package of practices for production of important cereals, pulses, oilseeds, fibres, sugar, commercial and fodder crops. \n\n Important features and scope of various types of forestry plantations such as social forestry, agro-forestry, and natural forests. Propagation of forest plants. Forest products. Agro forestry and valueaddition. Conservation of forest flora and fauna. \n\n Weeds, their characteristics, dissemination and association with various crops; their multiplications;cultural, biological, and chemical control of weeds. Soil- physical, chemical and biological properties.Processes and factors of soil formation. Soils of India. Mineral and organic constituents of soils andtheir role in maintaining soil productivity. Essential plant nutrients and other beneficial elements insoils and plants. Principles of soil fertility, soil testing and fertilizer recommendations, integratednutrient management. Biofertilizers. Losses of nitrogen in soil, nitrogen-use efficiency in submergedrice soils, nitrogen fixation in soils. Efficient phosphorus and potassium use. Problem soils and theirreclamation. Soil factors affecting greenhouse gas emission. \n\n Soil conservation, integrated watershed management. Soil erosion and its management. Dry landagriculture and its problems. Technology for stabilizing agriculture production in rain fed areas. Water-use efficiency in relation to crop production, criteria for scheduling irrigations, ways and means ofreducing runoff losses of irrigation water. Rainwater harvesting. Drip and sprinkler irrigation. Drainageof waterlogged soils, quality of irrigation water, effect of industrial effluents on soil and waterpollution. Irrigation projects in India. \n\n Farm management, scope, importance and characteristics, farm planning. Optimum resource use andbudgeting. Economics of different types of farming systems. Marketing management - strategies fordevelopment, market intelligence. Price fluctuations and their cost; role of co-operatives in agriculturaleconomy; types and systems of farming and factors affecting them. Agricultural price policy. CropInsurance. \n\n Agricultural extension, its importance and role, methods of evaluation of extension programmes, socio-economic survey and status of big, small and marginal farmers and landless agricultural labourers.Training programmes for extension workers. Role of Krishi Vigyan Kendra's (KVK) in disseminationof Agricultural technologies. Non Government Organization (NGO) and self-help group approach forrural development. \n\n",
      "Paper-II: \n\n Cell structure, function and cell cycle. Synthesis, structure and function of genetic material. Laws ofheredity. Chromosome structure, chromosomal aberrations, linkage and cross-over, and theirsignificance in recombination breeding. Polyploidy, euploids and aneuploids. Mutations - and their rolein crop improvement. Heritability, sterility and incompatibility, classification and their application incrop improvement. Cytoplasmic inheritance, sex-linked, sex-influenced and sex-limited characters. \n\n History of plant breeding. Modes of reproduction, selfing and crossing techniques. Origin, evolutionand domestication of crop plants, center of origin, law of homologous series, crop geneticresourcesconservation and utilization. Application of principles of plant breeding, improvement of cropplants. Molecular markers and their application in plant improvement. Pure-line selection, pedigree,mass and recurrent selections, combining ability, its significance in plant breeding. Heterosis and itsexploitation. Somatic hybridization. Breeding for disease and pest resistance. Role of interspecific andintergeneric hybridization. Role of genetic engineering and biotechnology in crop improvement.Genetically modified crop plants. \n\n Seed production and processing technologies. Seed certification, seed testing and storage. DNA fingerprinting and seed registration. Role of public and private sectors in seed production and marketing.Intellectual Property Rights (IPR) issues, WTO issues and its impact on Agriculture. \n\n Principles of Plant Physiology with reference to plant nutrition, absorption, translocation andmetabolism of nutrients. Soil - water- plant relationship. \n\n Enzymes and plant pigments; photosynthesis- modern concepts and factors affecting the process,aerobic and anaerobic respiration; C3, C4 and CAM mechanisms. Carbohydrate, protein and fatmetabolism. Growth and development; photoperiodism and vernalilzation. Plant growth substances andtheir role in crop production. Physiology of seed development and germination; dormancy. Stressphysiology - draught, salt and water stress. \n\n Major fruits, plantation crops, vegetables, spices and flower crops. Package practices of majorhorticultural crops. Protected cultivation and high tech horticulture. Post harvest technology and valueaddition of fruits and vegetables. Landscaping and commercial floriculture. Medicinal and aromaticplants. Role of fruits and vegetables in human nutrition. \n\n Diagnosis of pests and diseases of field crops, vegetables, orchard and plantation crops and theireconomic importance. Classification of pests and diseases and their management. Integrated pest anddisease management. Storage pests and their management. Biological control of pests and diseases.Epidemiology and forecasting of major crop pests and diseases. Plant quarantine measures. Pesticides,their formulation and modes of action. \n\n Food production and consumption trends in India. Food security and growing population - vision 2020.Reasons for grain surplus. National and international food policies. Production, procurement,distribution constraints. Availability of food grains, per capita expenditure on food. Trends in poverty,Public Distribution System and Below Poverty Line population, Targeted Public Distribution System(PDS), policy implementation in context to globalization. Processing constraints. Relation of foodproduction to National Dietary Guidelines and food consumption pattern. Food based dietaryapproaches to eliminate hunger. Nutrient deficiency - Micro nutrient deficiency : Protein EnergyMalnutrition or Protein Calorie Malnutrition (PEM or PCM), Micro nutrient deficiency and HRD incontext of work capacity of women and children. Food grain productivity and food security.",
      
    ],
    "Animal Husbandry & Veterinary Science Optional": [
      "Nationality: \n For the Indian Administrative Service and the Indian Police Service, a candidate must be a citizen ofIndia. \n For other services, a candidate must be either: \n 1. a citizen of India, or \n 2. a subject of Nepal, or \n 3. a subject of Bhutan, or \n 4. a Tibetan refugee who came over to India before January 1, 1962, with the intention of permanently settling in India, or \n 5. a person of Indian origin who has migrated from Pakistan, Myanmar, Sri Lanka, East African countries of Kenya, Uganda, the United Republic of Tanzania (formerly Tanganyika and Zanzibar), Zambia, Malawi, Zaire, Ethiopia and Vietnam with the intention of permanently settling in India. Provided further that candidates belonging to categories b, c, d above will not be eligible for appointment to the Indian Foreign Service. A candidate in whose case a certificate of eligibility is necessary, may be admitted to the examination but the offer of appointment may be given only after the necessary eligibility certificate has been issued to him/her by the government of India.",
    ],
    "Anthropology Optional": [
      "Nationality: \n For the Indian Administrative Service and the Indian Police Service, a candidate must be a citizen ofIndia. \n For other services, a candidate must be either: \n 1. a citizen of India, or \n 2. a subject of Nepal, or \n 3. a subject of Bhutan, or \n 4. a Tibetan refugee who came over to India before January 1, 1962, with the intention of permanently settling in India, or \n 5. a person of Indian origin who has migrated from Pakistan, Myanmar, Sri Lanka, East African countries of Kenya, Uganda, the United Republic of Tanzania (formerly Tanganyika and Zanzibar), Zambia, Malawi, Zaire, Ethiopia and Vietnam with the intention of permanently settling in India. Provided further that candidates belonging to categories b, c, d above will not be eligible for appointment to the Indian Foreign Service. A candidate in whose case a certificate of eligibility is necessary, may be admitted to the examination but the offer of appointment may be given only after the necessary eligibility certificate has been issued to him/her by the government of India.",
    ],
    "Botany Optional": [
      "Nationality: \n For the Indian Administrative Service and the Indian Police Service, a candidate must be a citizen ofIndia. \n For other services, a candidate must be either: \n 1. a citizen of India, or \n 2. a subject of Nepal, or \n 3. a subject of Bhutan, or \n 4. a Tibetan refugee who came over to India before January 1, 1962, with the intention of permanently settling in India, or \n 5. a person of Indian origin who has migrated from Pakistan, Myanmar, Sri Lanka, East African countries of Kenya, Uganda, the United Republic of Tanzania (formerly Tanganyika and Zanzibar), Zambia, Malawi, Zaire, Ethiopia and Vietnam with the intention of permanently settling in India. Provided further that candidates belonging to categories b, c, d above will not be eligible for appointment to the Indian Foreign Service. A candidate in whose case a certificate of eligibility is necessary, may be admitted to the examination but the offer of appointment may be given only after the necessary eligibility certificate has been issued to him/her by the government of India.",
    ],
    "Chemistry Optional": [
      "Nationality: \n For the Indian Administrative Service and the Indian Police Service, a candidate must be a citizen ofIndia. \n For other services, a candidate must be either: \n 1. a citizen of India, or \n 2. a subject of Nepal, or \n 3. a subject of Bhutan, or \n 4. a Tibetan refugee who came over to India before January 1, 1962, with the intention of permanently settling in India, or \n 5. a person of Indian origin who has migrated from Pakistan, Myanmar, Sri Lanka, East African countries of Kenya, Uganda, the United Republic of Tanzania (formerly Tanganyika and Zanzibar), Zambia, Malawi, Zaire, Ethiopia and Vietnam with the intention of permanently settling in India. Provided further that candidates belonging to categories b, c, d above will not be eligible for appointment to the Indian Foreign Service. A candidate in whose case a certificate of eligibility is necessary, may be admitted to the examination but the offer of appointment may be given only after the necessary eligibility certificate has been issued to him/her by the government of India.",
    ],
    "Civil Engineering Optional": [
      "Nationality: \n For the Indian Administrative Service and the Indian Police Service, a candidate must be a citizen ofIndia. \n For other services, a candidate must be either: \n 1. a citizen of India, or \n 2. a subject of Nepal, or \n 3. a subject of Bhutan, or \n 4. a Tibetan refugee who came over to India before January 1, 1962, with the intention of permanently settling in India, or \n 5. a person of Indian origin who has migrated from Pakistan, Myanmar, Sri Lanka, East African countries of Kenya, Uganda, the United Republic of Tanzania (formerly Tanganyika and Zanzibar), Zambia, Malawi, Zaire, Ethiopia and Vietnam with the intention of permanently settling in India. Provided further that candidates belonging to categories b, c, d above will not be eligible for appointment to the Indian Foreign Service. A candidate in whose case a certificate of eligibility is necessary, may be admitted to the examination but the offer of appointment may be given only after the necessary eligibility certificate has been issued to him/her by the government of India.",
    ],
    "Commerce & Accountancy Optional": [
      "Nationality: \n For the Indian Administrative Service and the Indian Police Service, a candidate must be a citizen ofIndia. \n For other services, a candidate must be either: \n 1. a citizen of India, or \n 2. a subject of Nepal, or \n 3. a subject of Bhutan, or \n 4. a Tibetan refugee who came over to India before January 1, 1962, with the intention of permanently settling in India, or \n 5. a person of Indian origin who has migrated from Pakistan, Myanmar, Sri Lanka, East African countries of Kenya, Uganda, the United Republic of Tanzania (formerly Tanganyika and Zanzibar), Zambia, Malawi, Zaire, Ethiopia and Vietnam with the intention of permanently settling in India. Provided further that candidates belonging to categories b, c, d above will not be eligible for appointment to the Indian Foreign Service. A candidate in whose case a certificate of eligibility is necessary, may be admitted to the examination but the offer of appointment may be given only after the necessary eligibility certificate has been issued to him/her by the government of India.",
    ],
  },
  interview: [
    "Personality Test",
    "Mental Alertness",
    "Critical Thinking",
    "Leadership Qualities",
    "Communication Skills"
  ]
};

const tabs = ["About","Prelims", "Mains", "Optional Subjects", "Interview"];

export default function SyllabusPage() {
  const [activeTab, setActiveTab] = useState("About");
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderContent = () => {
  if (activeTab === "Interview") {
    return (
      <div className="bg-white rounded-2xl p-6 shadow">
        <ul className="space-y-3 text-gray-700">
          {syllabusData.interview.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span>•</span> {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const data =
    activeTab === "Prelims"
      ? syllabusData.prelims
      : activeTab === "About"
      ? syllabusData.about
      : activeTab === "Optional Subjects"
      ? syllabusData.optional
      : syllabusData.mains;

  return (
    <div className="space-y-4">
      {Object.entries(data).map(([section, topics]) => (
        <div key={section} className="bg-white rounded-2xl shadow overflow-hidden">
          
          <button
            onClick={() => toggleSection(section)}
            className="w-full flex justify-between items-center p-5 font-bold text-left text-gray-900 hover:bg-gray-50"
          >
            <span>{section}</span>
            <span>{openSections[section] ? "−" : "+"}</span>
          </button>

          {openSections[section] && (
            <div className="px-6 pb-5 border-t">
              <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                {topics.map((topic, i) => (
                  <li key={i} className="flex gap-2 whitespace-pre-line">
                    <span className="text-brand-blue">•</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pb-8">

      <Helmet>
        <title>UPSC CSE Syllabus | Kartavya IAS</title>
      </Helmet>

      <div className="bg-[#001740] py-4 px-6 text-white shadow-lg">
                      <div className="max-w-7xl mx-auto flex justify-between items-center">
                          <Link to="/" className="text-sm font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
                              ← Back to Home
                          </Link>
                          <h1 className="font-black text-xl tracking-tight">KARTAVYA IAS &nbsp;&nbsp; <span className="text-brand-gold">UPSC SYLLABUS</span></h1>
                      </div>
                  </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center my-4">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
          UPSC CSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Syllabus</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Complete syllabus for Prelims, Mains and Interview as per UPSC guidelines.
        </p>
      </div>

      <div className="max-w-5xl mx-auto text-gray-600 leading-relaxed mb-4">
        The Union Public Service Commission Syllabus provides a structured roadmap for aspirants preparing for the exam. The UPSC Prelims syllabus encompasses General Studies and CSAT, evaluating knowledge in history, polity, economic , environment ,current affairs etc. The UPSC Mains syllabus comprises nine papers, focusing on essay writing, governance, and optional subjects. By Having better understanding of UPSC Syllabus along with Consistent practice through mock tests, effective time management, and thorough revision are essential for achieving success in the prestigious Civil Services exam.
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 flex-wrap gap-3">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-bold transition ${
              activeTab === tab
                ? "bg-gradient-to-r from-brand-red to-brand-blue text-white shadow-lg"
                : "bg-white text-gray-700 border"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {renderContent()}
      </div>

    </div>
  );
}