import React from "react";
import { X } from "lucide-react";

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 z-40" 
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg max-h-[90vh] w-full max-w-2xl overflow-y-auto">
          
          {/* Header */}
          <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">Privacy Policy</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-5 text-gray-800">
            <p className="text-sm text-gray-600">
              Last Updated: 14/11/2025
            </p>

            <p className="leading-relaxed">
              Suffah Education ("we", "our", "us") is committed to protecting your privacy
              and ensuring your personal information is handled with honesty, transparency,
              and Islamic ethics.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h3>
              <p className="mb-3">We only collect basic details such as:</p>
              <ul className="space-y-2 ml-6">
                {["Name", "Phone Number", "Email", "Login details", "Selected courses/batches"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-700">
                ✓ We NEVER access contacts, photos, or device storage without permission.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Use of Information</h3>
              <p className="mb-3">Your data is used ONLY for:</p>
              <ul className="space-y-2 ml-6">
                {["Creating your account", "Enabling course access", "Learning progress", "Class alerts", "Teacher communication"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-700">
                ✓ We do NOT use your information for advertising.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Sharing</h3>
              <p className="text-gray-700">
                We DO NOT sell or share your data with anyone except essential service
                providers (hosting, SMS, payment gateways).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
              <ul className="space-y-2 ml-6">
                {["Request your stored data", "Request corrections", "Request account deletion", "Withdraw access anytime"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Islamic Ethics</h3>
              <p className="text-gray-700">
                Your data is treated as an <strong>Amanah (trust)</strong> according to Islamic
                values and is used only to enhance your learning journey.
              </p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-700 mb-2">
                📧 <strong>support@suffaheducation.com</strong>
              </p>
              <p className="text-gray-700">
                📞 <strong>+91-7082189797</strong>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 border-t flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-900 text-white font-semibold rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyModal;
