import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    // ✅ MODIFIED: Increased margin-top from mt-40 to mt-48 to ensure clearance of both fixed TopBanner and Navbar.
    <div className="w-full flex justify-center px-4 mt-48 mb-20"> 
      <div className="max-w-4xl w-full bg-white p-6 sm:p-10 shadow rounded-lg">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 mb-6 font-medium hover:underline"
        >
          <FaArrowLeft /> Back
        </button>

        <p className="text-sm text-green-700 font-semibold mb-4">
          Last Updated: 14/11/2025
        </p>

        <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>

        <p className="mb-6">
          Suffah Education (“we”, “our”, “us”) is committed to protecting your
          privacy and ensuring your personal information is handled with honesty,
          transparency, and Islamic ethics.
        </p>

        <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>

        <p className="mb-4">
          We only collect basic details such as:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Name</li>
          <li>Phone Number</li>
          <li>Email</li>
          <li>Login details</li>
          <li>Selected courses/batches</li>
        </ul>

        <p className="mb-6">
          We NEVER access your contacts, photos, device storage, or sensitive info without permission.
        </p>

        <h2 className="text-xl font-semibold mb-4">Use of Information</h2>

        <p className="mb-4">Your data is used ONLY for:</p>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Creating your account</li>
          <li>Enabling course access</li>
          <li>Learning progress</li>
          <li>Class alerts</li>
          <li>Teacher communication</li>
        </ul>

        <p className="text-green-700 font-semibold mb-8">
          ✓ We do NOT use your information for advertising.
        </p>

        <h2 className="text-xl font-semibold mb-4">Third-Party Sharing</h2>

        <p className="mb-6">
          We DO NOT sell or share your data with anyone except essential service
          providers (hosting, SMS, payment gateways).
        </p>

        <h2 className="text-xl font-semibold mb-4">Cookies</h2>

        <p className="mb-6">
          Cookies help improve your login experience. You may disable them anytime.
        </p>

        <h2 className="text-xl font-semibold mb-4">Your Rights</h2>

        <ul className="list-disc ml-6 mb-10 space-y-1">
          <li>Request your stored data</li>
          <li>Request corrections</li>
          <li>Request account deletion</li>
          <li>Withdraw access anytime</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

        <p>Email: <strong>support@suffaheducation.com</strong></p>
        <p className="mb-10">Phone: <strong>+91-7082189797</strong></p>

        <h2 className="text-xl font-semibold mb-3">Islamic Ethics</h2>

        <p>
          Your data is treated as an <strong>Amanah (trust)</strong> according to Islamic
          values and is used only to enhance your learning journey.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;