import { useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import Studyapp from '../assets/StudyApp.png';
import Weatherapp from '../assets/WeatherApp.png';
const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Online Learning Platform",
      description:
        "A full-stack web application (built with the MERN stack) where users can register, log in, browse courses, and enroll. It serves as an ed-tech platform built for interactive learning and course management.",
      technologies: ["React JS","Node JS","Express JS","MongoDB","CSS","Bootstrap","Compass"],
      category: "Web Development",
      github: "https://github.com/DhanyuniHarshitha/LearnHub-MERN",
      demo: "https://github.com/DhanyuniHarshitha/LearnHub-MERN",
      image: Studyapp,
      featured: false,
      isImageProject: true,
    },
    {
      title: "Weather App",
      description:
        "A responsive web application that fetches real-time weather details (temperature, humidity, wind speed, and conditions) for any city worldwide using an external weather API. The project demonstrates skills in API integration, dynamic data rendering, and building interactive user-friendly interfaces.",
      technologies: ["React", "CSS", "REST API"],
      category: "Web Development",
      github: "https://github.com/DhanyuniHarshitha/Weather_App",
      demo: "https://dhanyuniharshitha.github.io/Weather_App",
      image: Weatherapp,
      featured: false,
      isImageProject: true,
    },
    {
      title: "Employee Burnout Prediction using Machine Learning",
      description:
        "A machine learning-based system that predicts employee burnout risk using HR and mental health data. The project applies data preprocessing, feature engineering, and predictive modeling to help organizations identify at-risk employees and take proactive measures to improve well-being and reduce attrition.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        " XGBoost",
        " Random Forest",
        "Logistic",
        "Regression",
        "Jupyter Notebook / Google Colab",
        " GitHub",
      ],
      category: "Machine Learning",
      github:
        "https://github.com/DhanyuniHarshitha/Employee_burnout-prediction",
      demo: "https://github.com/DhanyuniHarshitha/Employee_burnout-prediction",
      image: "🤖",
      featured:false,
      isImageProject: false,
    },
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full opacity-40 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full mb-6">
            <Star className="w-4 h-4 text-pink-600 mr-2" />
            <p className="text-pink-700 font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </p>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Digital Product
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Showcases
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing innovation in cloud computing,
            web development, and artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100 ${
                activeProject === index
                  ? "ring-4 ring-pink-400 ring-opacity-50 scale-105"
                  : ""
              } ${project.featured ? "lg:scale-105" : ""}`}
              onClick={() => setActiveProject(index)}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg z-10">
                  Featured
                </div>
              )}

              <div className="p-8">
                {project.isImageProject ? (
                  <div className="mb-8 rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="text-7xl mb-8 text-center group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                )}

                <div className="mb-6">
                  <span className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold border border-pink-200">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-700 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors duration-300"
                  >
                    <Github
                      size={18}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm font-medium">Code</span>
                  </a>

                  {/* Live Project Link */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <ExternalLink
                      size={18}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm font-medium">View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
