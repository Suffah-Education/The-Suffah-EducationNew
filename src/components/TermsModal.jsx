import React from "react";
import { X } from "lucide-react";

const TermsModal = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl font-semibold text-gray-900">Terms & Conditions</h2>
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
              By using Suffah Education, you agree to follow these terms and conditions.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Account Rules</h3>
              <ul className="space-y-2 ml-6">
                {["Give correct account details", "Keep your login info safe", "You're responsible for your activity"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Course Usage</h3>
              <ul className="space-y-2 ml-6">
                {["Courses cannot be shared", "Do not share videos or PDFs", "No downloading or redistribution"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Payments and Refunds</h3>
              <ul className="space-y-2 ml-6">
                {["Payments are final", "Refund only if batch is cancelled", "Policy violations = no refund"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Student Guidelines</h3>
              <ul className="space-y-2 ml-6">
                {["Be respectful to teachers", "No harassment", "No sharing login"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Teacher Rules</h3>
              <ul className="space-y-2 ml-6">
                {["Deliver classes on time", "Provide original content", "Keep professional behaviour"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Termination</h3>
              <p className="text-gray-700">
                Accounts violating rules or Islamic ethics may be suspended.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Governing Law</h3>
              <p className="text-gray-700">
                These terms follow <strong>Indian law (UGC guidelines)</strong>. Any disputes will be handled in Beed courts.
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

            <p className="italic text-center text-gray-600 pt-4">
              "We aim to provide a safe, authentic Islamic learning environment."
            </p>
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

export default TermsModal;
