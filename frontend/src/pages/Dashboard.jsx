import eventImage from "../assets/event.png";
import networkingImage from "../assets/networking.png";
import careerImage from "../assets/career.png";
import schoolImage from "../assets/school.png";

function Dashboard() {
    return (
        <div className="p-10 bg-gray-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-16 text-center rounded-lg shadow-lg mb-12">
                <h2 className="text-5xl font-extrabold">Welcome to the Student Portal</h2>
                <p className="mt-4 text-xl">Empowering students with events, networking, and career opportunities.</p>
            </div>

            {/* Education Section with Background Image */}
            <div className="relative w-full h-96 mb-12 flex items-center justify-center">
                <img src={schoolImage} alt="School" className="absolute w-full h-full object-cover rounded-lg shadow-lg opacity-30" />
                <div className="relative max-w-3xl text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-xl">
                    <h3 className="text-4xl font-bold text-blue-700">The Power of Education</h3>
                    <p className="mt-4 text-gray-700 text-lg">
                        Education is the foundation of success, shaping the future of students by providing knowledge, skills, and opportunities. 
                        Through learning, we empower young minds to innovate, collaborate, and build a better tomorrow.
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid md:grid-cols-3 gap-12">
                {/* Event Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <img src={eventImage} alt="Upcoming Event" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h3 className="text-3xl font-bold text-blue-700">Upcoming Event</h3>
                        <p className="text-gray-600 mt-3">Join our latest tech seminar on AI innovations. Register now!</p>
                        <button className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                            Register
                        </button>
                    </div>
                </div>

                {/* Networking Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <img src={networkingImage} alt="Networking" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h3 className="text-3xl font-bold text-green-700">Student Networking</h3>
                        <p className="text-gray-600 mt-3">Connect with peers and industry professionals in our student forum.</p>
                        <button className="mt-5 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                            Join Now
                        </button>
                    </div>
                </div>

                {/* Career Opportunities Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <img src={careerImage} alt="Career" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h3 className="text-3xl font-bold text-purple-700">Career Opportunities</h3>
                        <p className="text-gray-600 mt-3">Explore internships, part-time jobs, and full-time career paths.</p>
                        <button className="mt-5 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                            Explore
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 bg-black text-white py-12">
                <div className="container mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
                    {/* About Us Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400">Student Portal connects students with events, networking opportunities, and career resources to help them succeed.</p>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400">📧 Email: support@studentportal.com</p>
                        <p className="text-gray-400">📞 Phone: +91 987 654 321</p>
                    </div>

                    {/* Address Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                        <p className="text-gray-400">🏢 123 Student Ave, Block-F</p>
                        <p className="text-gray-400">📍 New Delhi, PinCode-110001</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-12 border-t border-gray-600 pt-6 text-gray-400">
                    <p>© 2025 Student Portal. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Dashboard;