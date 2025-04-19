import { FiArrowRight, FiArrowUpRight, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi"
import { useSelector } from "react-redux"
import logo from '../../assets/logo.png'

export default function Footer() {
  const bgcolor = useSelector((state) => state.theme.navbar)
  const txtcolor = useSelector((state) => state.theme.textcolor)

  return (
    <footer className="w-full pt-10 pb-6" style={{ backgroundColor: bgcolor, color: txtcolor }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Support Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              GET <span className="text-black">SUP</span>
              <span className="text-lime-500">PORT</span>
              <span className="text-black">?</span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-1">India</h3>
                <p className="text-sm">
                  Tizzy Cloud is a team of enthusiastic techies specialized in Cloud Computing services. Since inception we are focused on educating rather just selling services.
                </p>
                <p className="text-sm">Jones St, NSW, 2000</p>
              </div>

            </div>
          </div>

          {/* Center Button */}
          <div className="flex justify-center items-start">
            <div className="w-20 h-20">
              <img src={logo} alt="" />
            </div>
          </div>

          {/* as Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Useful a</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="space-y-2">
                <a href="#" className="block transition-colors">
                  About Us
                </a>
                <a href="#" className="block transition-colors">
                  FAQs
                </a>
                <a href="#" className="block transition-colors">
                  Term & Conditions
                </a>
                <a href="#" className="block transition-colors">
                  Careers
                </a>
              </div>
              <div className="space-y-2">
                <a href="#" className="block  transition-colors">
                  Contact
                </a>
                <a href="#" className="block  transition-colors">
                  Services
                </a>
                <a href="#" className="block  transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block  transition-colors">
                  Help Desk
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-1 focus:ring-lime-500"
                />
                <button className="bg-white border border-l-0 border-gray-300 rounded-r px-3 py-2 hover:bg-gray-50 transition-colors">
                  <FiArrowRight size={20} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FiFacebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FiLinkedin size={20} />
              <span className="sr-only">aedIn</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FiTwitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <div className="text-sm text-gray-600">Copyright © {new Date().getFullYear()} Direc. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}
