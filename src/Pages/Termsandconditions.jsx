import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const TermsAndConditions = () => {
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

        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <p className="mb-6">
          By using Suffah Education, you agree to follow these rules.
        </p>

        <h2 className="text-xl font-semibold mb-4">1. Account Rules</h2>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Give correct account details.</li>
          <li>Keep your login info safe.</li>
          <li>You're responsible for your activity.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">2. Course Usage</h2>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Courses cannot be shared.</li>
          <li>Do not share videos or PDFs.</li>
          <li>No downloading or redistribution.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">3. Payments and Refunds</h2>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Payments are final.</li>
          <li>Refund only if batch is cancelled.</li>
          <li>Policy violations = no refund.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">4. Student Guidelines</h2>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Be respectful to teachers.</li>
          <li>No harassment.</li>
          <li>No sharing login.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">5. Teacher Rules</h2>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Deliver classes on time.</li>
          <li>Provide original content.</li>
          <li>Keep professional behaviour.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">6. Termination</h2>

        <p className="mb-6">
          Accounts violating rules or Islamic ethics may be suspended.
        </p>

        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

        <p>Email: <strong>support@suffaheducation.com</strong></p>
        <p className="mb-10">Phone: <strong>+91-7082189797</strong></p>

        <p className="italic text-gray-700">
          “We aim to provide a safe, authentic Islamic learning environment.”
        </p>

      </div>
    </div>
  );
};

export default TermsAndConditions;