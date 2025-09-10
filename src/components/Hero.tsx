import { ArrowDown, Github, Linkedin, Upload } from 'lucide-react';
import { useState, useRef } from 'react';

const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>('https://i.postimg.cc/bNbRyrd3/picture.jpg');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-pink-50 border border-pink-200 rounded-full animate-fade-in">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
              <p className="text-pink-600 font-medium text-sm">Available for opportunities</p>
            </div>
            
            <div className="space-y-2 animate-fade-in delay-200">
              <p className="text-pink-600 font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Harshitha
                <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Dhanyuni
                </span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 font-medium animate-fade-in delay-400">
              Innovating through 
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold"> Code </span>
              and 
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold"> Artificial Intelligence</span>
            </p>
          </div>

          <div className="animate-fade-in delay-600">
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Passionate Computer Science student with <span className="font-semibold text-pink-600">8.7 CGPA</span>, 
              focused on creating innovative solutions in AI and web development. Currently pursuing B.Tech 
              while gaining hands-on experience in cutting-edge technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-800">
            <button 
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 animate-fade-in delay-1000">
            <a 
              href="https://github.com/DhanyuniHarshitha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
            >
              <Github size={24} className="text-gray-600 group-hover:text-pink-600 transition-colors duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/harshitha-dhanyuni-9689742a7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
            >
              <Linkedin size={24} className="text-gray-600 group-hover:text-pink-600 transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in delay-1200">
          <div className="relative group">
            <div className="relative w-96 h-96 rounded-3xl bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              <div className="w-full h-full rounded-3xl bg-white p-2 relative overflow-hidden">
                <div 
                  className={`w-full h-full rounded-2xl relative cursor-pointer transition-all duration-300 ${
                    isDragging ? 'bg-pink-100 border-2 border-dashed border-pink-400' : 
                    profileImage ? 'bg-transparent' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={handleUploadClick}
                >
                  {profileImage ? (
                    <>
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center text-white">
                          <Upload size={32} className="mx-auto mb-2" />
                          <p className="text-sm font-medium">Change Photo</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center space-y-4 flex flex-col items-center justify-center h-full">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                        <Upload size={32} className="text-pink-600" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-600 font-medium">Upload Your Photo</p>
                        <p className="text-sm text-gray-500">Drag & drop or click to browse</p>
                        <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>8.7 CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout} 
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100"
        >
          <ArrowDown size={24} className="text-pink-600" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
