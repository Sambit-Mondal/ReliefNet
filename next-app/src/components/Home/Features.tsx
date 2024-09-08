'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Features = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Consider mobile if width is less than 768px
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sections = ["Disaster-Analysis", "Blockchain-Transparency", "Interactive-Risk-Maps", "Post-Disaster-Recovery", "Real-Time-Alerts"];
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleSectionClick = (section: string) => {
    if (!isMobile) {
      setSelectedSection(section);
    }
  };

  return (
    <div className="flex flex-col mt-3">
      <div className="section-container px-8 flex items-center justify-center">
        <div className="text-container flex flex-col lg:p-[2rem] lg:max-w-[40%]">
          {sections.map((section) => (
            <div
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`cursor-pointer mb-8 ${selectedSection === section
                ? "text-blue-theme border-blue-theme"
                : "text-white opacity-30 border-gray-500 transition duration-200 ease-in-out hover:text-blue-theme"
                }`}
            >
              <div className="section-content pl-5 border-l-4">
                <h2 className="font-bold text-lg">{section}</h2>
                <p className="text-white">
                  {section === "Disaster-Analysis"
                    ? "AI-driven disaster prediction for early warnings."
                    : section === "Blockchain-Transparency"
                      ? "Transparent tracking of relief funds and resources, along with insurance claims."
                      : section === "Interactive-Risk-Maps"
                        ? "Real-time risk maps for prioritized response."
                        : section === "Post-Disaster-Recovery"
                          ? "Algorithms to spot victims for their effective evacuation."
                          : section === "Real-Time-Alerts"
                            ? "Instant disaster notifications via multiple channels."
                            : ""
                  }
                </p>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div className="image-container ml-10">
            {selectedSection === "Disaster-Analysis" && (
              <Image
                src="/Feature1.jpg"
                alt="Disaster Analysis"
                width={500}
                height={300}
                className="rounded-md m-20 drop-shadow-md shadow-lg shadow-blue-theme"
              />
            )}
            {selectedSection === "Blockchain-Transparency" && (
              <Image
                src="/Feature2.jpg"
                alt="Blockchan Transparency"
                width={500}
                height={300}
                className="rounded-md m-24 drop-shadow-md shadow-lg shadow-blue-theme"
              />
            )}
            {selectedSection === "Interactive-Risk-Maps" && (
              <Image
                src="/Feature3.jpg"
                alt="Interactive Risk Maps"
                width={500}
                height={300}
                className="rounded-md m-24 drop-shadow-md shadow-lg shadow-blue-theme"
              />
            )}
            {selectedSection === "Post-Disaster-Recovery" && (
              <Image
                src="/Feature4.jpg"
                alt="Post Disaster Recovery"
                width={500}
                height={300}
                className="rounded-md m-24 drop-shadow-md shadow-lg shadow-blue-theme"
              />
            )}
            {selectedSection === "Real-Time-Alerts" && (
              <Image
                src="/Feature5.jpg"
                alt="Real Time Alerts"
                width={500}
                height={300}
                className="rounded-md m-32 drop-shadow-md shadow-lg shadow-blue-theme"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;