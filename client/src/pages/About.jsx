import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About</h1>
      <p className="mb-4 text-slate-700">
        This here, is a full-stack web application built with the MERN stack. It
        includes authentication features that allow users to sign up or sign in,
        log out and delete their accounts.
      </p>
      <p className="mb-4 text-slate-700">
        The front-end was created using React and styled using Tailwind CSS. I
        used React Routers for client-side routing. The back-end is built with
        Node.js and Express, and uses MongoDB as the database. Authentication is
        implemented using JSON Web Tokens(JWT)
      </p>
    </div>
  );
}
