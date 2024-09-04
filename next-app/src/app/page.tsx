'use client';
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const HomePage = () => {
  const router = useRouter();

  const handleSignout = async () => {
    try {
      // Call the signout API
      await axios.post('/api/signout');

      // Redirect the user to the /auth page
      router.push('/auth');
    } catch (error) {
      console.error('Signout Error:', error);
    }
  };

  return (
    <div>
      <h1>Protected Home Page</h1>
      <p>Welcome, you are authenticated!</p>
      <button className="bg-black text-white" onClick={handleSignout}>
        Signout
      </button>
    </div>
  );
};

export default HomePage;