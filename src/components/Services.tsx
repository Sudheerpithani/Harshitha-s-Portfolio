
import { Palette, Zap, Rocket, Bot, Cloud, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating modern, user-friendly interfaces with attention to detail and seamless user experience. Focus on accessibility and visual hierarchy.",
      features: ["Responsive Design", "User Research", "Prototyping", "Visual Design"],
      bgColor: "from-pink-50 to-rose-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200"
    },
    {
      icon: Zap,
      title: "Interactive Animations", 
      description: "Implementing smooth, engaging animations that enhance user interaction and bring websites to life with modern CSS and JavaScript techniques.",
      features: ["CSS Animations", "JavaScript Effects", "Micro-interactions", "Performance Optimization"],
      bgColor: "from-yellow-50 to-orange-50",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200"
    },
    {
      icon: Rocket,
      title: "Web Development",
      description: "Building fast, scalable web applications using modern frameworks and best practices. From frontend to backend solutions.",
      features: ["React Applications", "Backend APIs", "Database Design", "Cloud Deployment"],
      bgColor: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Developing intelligent systems and machine learning models to solve complex problems and automate business processes.",
      features: ["Machine Learning", "Data Analysis", "AI Integration", "Automation"],
      bgColor: "from-purple-50 to-indigo-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Architecting and deploying scalable cloud infrastructure with focus on security, performance, and cost optimization.",
      features: ["AWS Services", "Infrastructure Setup", "Security Implementation", "Performance Monitoring"],
      bgColor: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: Smartphone,
      title: "Responsive Solutions",
      description: "Ensuring perfect functionality across all devices and screen sizes with mobile-first approach and progressive enhancement.",
      features: ["Mobile Optimization", "Cross-browser Testing", "Performance Tuning", "SEO Optimization"],
      bgColor: "from-gray-50 to-slate-50",
      iconColor: "text-gray-600",
      borderColor: "border-gray-200"
    }
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-40 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-purple-600 mr-2" />
            <p className="text-purple-700 font-semibold text-sm uppercase tracking-wider">Services</p>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Expertise Service!
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Let's Check It Out
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions combining creativity, technical expertise, and innovation to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${service.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer hover:-translate-y-3 border ${service.borderColor}`}
            >
              <div className="bg-white p-4 rounded-2xl shadow-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon className={`${service.iconColor} group-hover:scale-110 transition-transform duration-300`} size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-4 group-hover:bg-pink-600 transition-colors duration-300 group-hover:scale-125 transform"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button className="flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors duration-300 group-hover:translate-x-2 transform">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h3>
            <p className="text-pink-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <button className="group bg-white text-pink-600 px-10 py-4 rounded-2xl font-bold hover:bg-pink-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3">
              <span>Get In Touch</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
