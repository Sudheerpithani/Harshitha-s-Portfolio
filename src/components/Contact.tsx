import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_dl5cfya';
  const EMAILJS_TEMPLATE_ID = 'template_0lptusj';
  const EMAILJS_PUBLIC_KEY = '01TQRtD-Iq2Uy4Vr5';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Harshitha Dhanyuni',
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS result:', result);

      // Create submission with timestamp
      const submission = {
        ...formData,
        timestamp: new Date().toLocaleString(),
        id: Date.now()
      };
      
      // Add to submissions list
      setSubmissions(prev => [submission, ...prev]);
      
      // Show success toast
      toast({
        title: "Message Sent Successfully! 🚀",
        description: `Thank you ${formData.name}! Your message has been sent via email.`,
      });
      
      // Log the submission details
      console.log('New Contact Form Submission:', submission);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-pink-600 font-semibold text-lg mb-2">CONTACT</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let's create something amazing together.
          </p>
        </div>

        {/* Admin Panel for Submissions */}
        {submissions.length > 0 && (
          <div className="mb-8">
            <button
              onClick={() => setShowSubmissions(!showSubmissions)}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              {showSubmissions ? 'Hide' : 'Show'} Contact Submissions ({submissions.length})
            </button>
            
            {showSubmissions && (
              <div className="mt-4 bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
                <h3 className="text-lg font-semibold mb-4">Contact Form Submissions</h3>
                {submissions.map((submission) => (
                  <div key={submission.id} className="bg-white p-4 rounded-lg mb-4 border">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Name:</strong> {submission.name}</div>
                      <div><strong>Email:</strong> {submission.email}</div>
                      <div><strong>Subject:</strong> {submission.subject}</div>
                      <div><strong>Time:</strong> {submission.timestamp}</div>
                    </div>
                    <div className="mt-2">
                      <strong>Message:</strong>
                      <p className="text-gray-700 mt-1">{submission.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with innovative teams. Whether you have a project in mind or just want to connect, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-300">
                <div className="bg-pink-600 p-3 rounded-full">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href="mailto:tirrid85@gmail.com" className="text-pink-600 hover:text-pink-700">
                    tirrid85@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/harshitha-dhanyuni-9689742a7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-gray-600 p-3 rounded-full">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">GitHub</h4>
                  <a 
                    href="https://github.com/DhanyuniHarshitha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    View my projects
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                <div className="bg-yellow-600 p-3 rounded-full">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a href="tel:8790436336" className="text-yellow-600 hover:text-yellow-700">
                    +91 8790436336
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message 🚀'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2024 Harshitha Dhanyuni. Made with 💝 and lots of ☕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
