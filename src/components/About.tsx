
const About = () => {
  return (
    <div className="py-24 px-4 bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full opacity-60 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 animate-pulse"></span>
            <p className="text-pink-700 font-semibold text-sm uppercase tracking-wider">About Me</p>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Designing Solutions,
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Not Just Visuals
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm <span className="font-bold text-pink-600">Dhanyuni Harshitha</span>, a passionate Computer Science student with a deep fascination for Artificial Intelligence and innovative coding solutions. My journey in technology is driven by curiosity and a commitment to creating meaningful digital experiences.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently pursuing my B.Tech in Computer Science with an impressive <span className="font-bold text-purple-600">8.5 CGPA</span>, I combine strong academic performance with practical experience. My educational foundation includes exceptional results from Sri Chaitanya Jr College (97%) and Loyola (E.M) School (91%).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                During my AI internship at <span className="font-bold text-indigo-600">Skill Desire</span>, I contributed to cutting-edge projects that enhanced my understanding of machine learning algorithms and their real-world applications. This experience solidified my passion for AI and its potential to transform industries.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-pink-200">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</h3>
                  <p className="text-gray-700 font-semibold">Complete Projects</p>
                  <div className="w-16 h-1 bg-pink-400 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-200">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">3+</h3>
                  <p className="text-gray-700 font-semibold">Years of Experience</p>
                  <div className="w-16 h-1 bg-purple-400 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Education & Experience</h3>
            </div>
            
            <div className="space-y-8">
              <div className="group border-l-4 border-pink-500 pl-8 py-4 hover:bg-pink-50 rounded-r-2xl transition-colors duration-300">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">B.Tech Computer Science</h4>
                <p className="text-pink-600 font-semibold text-lg">Current • CGPA: 8.5</p>
                <p className="text-gray-600 mt-2">Focusing on AI, Machine Learning, and Software Development</p>
              </div>

              <div className="group border-l-4 border-purple-500 pl-8 py-4 hover:bg-purple-50 rounded-r-2xl transition-colors duration-300">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">MERN Stack Intern</h4>
                <p className="text-purple-600 font-semibold text-lg">Smartbridge</p>
                <p className="text-gray-600 mt-2">As a MERN Stack Intern at SmartBridge, I worked on full-stack web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js). My responsibilities included building responsive front-end interfaces using React, designing RESTful APIs with Express and Node.js, and managing data with MongoDB.</p>
              </div>

              <div className="group border-l-4 border-purple-500 pl-8 py-4 hover:bg-purple-50 rounded-r-2xl transition-colors duration-300">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">AI&ML Intern</h4>
                <p className="text-purple-600 font-semibold text-lg">Skill Desire</p>
                <p className="text-gray-600 mt-2">During my internship at SkillDzire, I gained practical experience in Artificial Intelligence and Machine Learning by working on a real-time Employee Burnout Prediction project. The system predicts employee burnout risk using HR and mental health data, applying data preprocessing, feature engineering, and predictive modeling to identify at-risk employees and help organizations take proactive measures to improve well-being and reduce attrition.</p>
              </div>

              <div className="group border-l-4 border-yellow-500 pl-8 py-4 hover:bg-yellow-50 rounded-r-2xl transition-colors duration-300">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">Intermediate Education</h4>
                <p className="text-yellow-600 font-semibold text-lg">Sri Chaitanya Jr College • 97%</p>
                <p className="text-gray-600 mt-2">Mathematics, Physics, Chemistry focus</p>
              </div>

              <div className="group border-l-4 border-green-500 pl-8 py-4 hover:bg-green-50 rounded-r-2xl transition-colors duration-300">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Secondary Education</h4>
                <p className="text-green-600 font-semibold text-lg">Loyola (E.M) School • 91%</p>
                <p className="text-gray-600 mt-2">Strong foundation in core subjects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
