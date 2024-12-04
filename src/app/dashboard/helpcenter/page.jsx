// pages/dashboard/helpcenter/page.jsx (or HelpCenter.jsx)
"use client";

import { useState } from "react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of our platform to get started quickly.",
      link: "#",
    },
    {
      title: "Account Management",
      description: "Manage your account, settings, and privacy preferences.",
      link: "#",
    },
    {
      title: "Troubleshooting",
      description: "Resolve common issues with step-by-step solutions.",
      link: "#",
    },
  ];

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header Section */}
      <header className="bg-[#006A4E] text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Help Center</h1>
          <button className="px-4 py-2 bg-white text-[#006A4E] rounded-lg shadow hover:bg-gray-100">
            Contact Support
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            id="searchInput"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 text-lg border rounded-lg shadow focus:ring-2 focus:ring-[#006A4E] focus:outline-none"
          />
        </div>

        {/* Categories Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-[#006A4E] mb-2">
                {category.title}
              </h2>
              <p className="text-gray-700">{category.description}</p>
              <a
                href={category.link}
                className="text-[#006A4E] mt-4 inline-block"
              >
                Learn More →
              </a>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800">
                How do I reset my password?
              </h3>
              <p className="text-gray-600 mt-2">
                To reset your password, click on Forgot Password on the login
                page and follow the instructions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, you can upgrade or downgrade your plan anytime from the
                account settings page.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HelpCenter;
