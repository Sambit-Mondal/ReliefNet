'use client';
import React, { SetStateAction, useEffect, useState } from 'react';

function Chatbot() {
  const [scriptError, setScriptError] = useState<string | Event | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "zHR1lCxAUltiaKPMp7BTz");
    script.setAttribute("domain", "www.chatbase.co");

    const loadScript = () => {
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Script loaded successfully.");
      };
      script.onerror = (error) => {
        console.error("Error loading script:", error);
        setScriptError(error);
      };
    };
    const timeoutId = setTimeout(loadScript, 500);
    return () => {
      clearTimeout(timeoutId);
      // document.body.removeChild(script);
    };
  }, []);

  if (scriptError) {
    return <div>Error loading chatbot script. Please try again later.</div>;
  }

  return (
    <div className='w-20' id="chatbot-container">
    </div>
  );
}

export default Chatbot;