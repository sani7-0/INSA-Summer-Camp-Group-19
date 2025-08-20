import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section id="footer">
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Section: About & Branding */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold">EduConnect — Social Media for Students</h2>
          <p className="text-sm">
            "Connecting learners, sharing knowledge, building futures."
          </p>
          <p className="text-xs">&copy; 2025 EduConnect. All rights reserved.</p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link to="/aboutus" className="hover:underline text-sm">About Us</Link>
          <Link to="/contactus" className="hover:underline text-sm">Contact Us</Link>
          <Link to="/privacy" className="hover:underline text-sm">Privacy Policy</Link>
          
          <Link to="/help" className="hover:underline text-sm">Help & Support</Link>
        </div>

        {/* Right Section: Stay Connected */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Replace '#' with your actual social media links */}
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
              {/* Example icon, replace with your icon library or SVGs */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook SVG Path */}
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H12v-2.89h-3.56V9.41c0-3.53 2.09-5.48 5.3-5.48 1.54 0 3.16.27 3.16.27v3.48h-1.78c-1.76 0-2.31 1.09-2.31 2.21v2.66h3.92l-.62 2.89h-3.3V22C18.34 21.13 22 17 22 12z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
              {/* Twitter SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter Path */}
                <path d="M24 4.56c-.89.39-1.84.65-2.83.77 1.02-.61 1.8-1.58 2.17-2.73-.95.56-2.01.97-3.14 1.19-.9-.96-2.17-1.56-3.58-1.56-2.71 0-4.92 2.2-4.92 4.92 0 .39.04.77.12 1.14-4.09-.2-7.72-2.17-10.15-5.16-.42.72-.66 1.56-.66 2.45 0 1.69.86 3.18 2.17 4.05-.8-.02-1.55-.24-2.2-.6v.06c0 2.36 1.68 4.33 3.91 4.77-.41.11-.84.17-1.28.17-.31 0-.61-.03-.91-.09.61 1.91 2.39 3.3 4.5 3.34-1.65 1.3-3.74 2.07-6.01 2.07-.39 0-.78-.02-1.16-.07 2.14 1.37 4.68 2.17 7.42 2.17 8.9 0 13.78-7.38 13.78-13.78 0-.21-.01-.42-.02-.63.94-.68 1.76-1.53 2.41-2.5z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
              {/* LinkedIn SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* LinkedIn Path */}
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.38-.62-2.5-2-2.5s-2 1.12-2 2.5v5.5h-3v-10h3v1.38c.54-.78 1.37-1.38 2.5-1.38 1.93 0 3.5 1.57 3.5 3.5v6z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
              {/* Instagram SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Instagram Path */}
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.963.24 2.43.403.583.182 1 .4 1.43.83.43.43.648.847.83 1.43.163.467.348 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.963-.403 2.43-.182.583-.4 1-.83 1.43-.43.43-.847.648-1.43.83-.467.163-.96.295-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.963-.24-2.43-.403-.583-.182-1-.4-1.43-.83-.43-.43-.648-.847-.83-1.43-.163-.467-.295-.96-.403-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.17.24-1.963.403-2.43.182-.583.4-1 .83-1.43.43-.43.847-.648 1.43-.83.467-.163.96-.295 2.43-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.154.24-2.91.512-.747.278-1.377.646-1.987 1.255-.61.61-.977 1.24-1.255 1.987-.272.756-.454 1.634-.512 2.91-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.24 2.154.512 2.91.278.747.646 1.377 1.255 1.987.61.61 1.24.977 1.987 1.255.756.272 1.634.454 2.91.512 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.154-.24 2.91-.512.747-.278 1.377-.646 1.987-1.255.61-.61.977-1.24 1.255-1.987.272-.756.454-1.634.512-2.91.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.24-2.154-.512-2.91-.278-.747-.646-1.377-1.255-1.987-.61-.61-1.24-.977-1.987-1.255-.756-.272-1.634-.454-2.91-.512-1.28-.058-1.688-.07-4.947-.07z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
          </div>

          {/* Subscribe Newsletter */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              Subscribe to Newsletter
            </label>
            <div className="flex">
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
      <button className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:bg-blue-700 text-white font-semibold px-4 rounded-r">
       Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
    </section>
  );
}

export default Footer;