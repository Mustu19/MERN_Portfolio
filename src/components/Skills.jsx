import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import mysql from "../assets/mysql.png";
import postgresql from "../assets/postgresql.png";
import bootstrap from "../assets/bootstrap.png";
import sql from "../assets/sql.png";
import firebase from "../assets/firebase.png";
import dsa from "../assets/dsa.png";
import dbms from "../assets/dbms.png";

const Skills = () => {
  const techs = [
    { id: 1, src: c, title: "C Language", style: "shadow-blue-500" },
    { id: 2, src: cpp, title: "C++ Language", style: "shadow-blue-300" },
    { id: 3, src: java, title: "Java", style: "shadow-orange-500" },
    { id: 4, src: python, title: "Python", style: "shadow-yellow-500" },
    { id: 5, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 6, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 7, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 8, src: sql, title: "SQL", style: "shadow-green-400" },
    { id: 9, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
    { id: 10, src: express, title: "Express", style: "shadow-white" },
    { id: 11, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 12, src: node, title: "NodeJs", style: "shadow-green-400" },
    { id: 13, src: firebase, title: "Firebase", style: "shadow-yellow-600" },
    { id: 14, src: tailwind, title: "TailwindCSS", style: "shadow-blue-600" },
    { id: 15, src: bootstrap, title: "Bootstrap", style: "shadow-blue-400" },
    { id: 16, src: github, title: "GitHub", style: "shadow-sky-400" },
    { id: 17, src: mysql, title: "MySQL", style: "shadow-sky-400" },
    { id: 18, src: postgresql, title: "PostgreSQL", style: "shadow-sky-400" },
    { id: 19, src: dsa, title: "DSA", style: "shadow-sky-400" },
    { id: 20, src: dbms, title: "DBMS", style: "shadow-sky-400" }
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b dark:from-gray-900 dark:to-black from-gray-800 to-black w-full skills"
    >
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="py-6 text-lg">
            These are the technologies and languages I've worked with in my projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} transition-all`}
            >
              <img src={src} alt={title} className="w-16 mx-auto mb-2" />
              <p className="mt-2 text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
