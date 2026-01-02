import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import edusphere from '../media/edusphere.png';
import expensemate from '../media/expensemate.png';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ProjectsShowcase = () => {
  const projects = [
    {
      title: 'EduSphere - Online Course Management System',
      description:
        'A PERN stack e-learning platform enabling secure course purchases (Razorpay), role-based access (JWT), and media-rich content (Cloudinary) with automated enrollment and responsive dashboards.',
      tech: [
        'TypeScript',
        'React.js',
        'NodeJS',
        'ExpressJS',
        'PostgreSQL',
        'Cloudinary',
        'Razorpay',
      ],
      github: 'https://github.com/himudit/EduSphere',
      live: 'https://edusphere-wine.vercel.app/',
      image: edusphere, // Ensure this path is correct
    },
    {
      title: 'ExpenseMate - Your Personal Expense Tracker',
      description:
        'A React expense tracker with Appwrite authentication, Redux state management, and Recharts visualizations for tracking income, expenses, and financial insights.',
      tech: ['ReactJS', 'Recharts', 'Appwrite', 'Redux Toolkit'],
      github: 'https://github.com/himudit/ExpenseTracker',
      live: 'https://expensemate-nu.vercel.app/',
      image: expensemate,
    },
  ];

  return (
    <div className="relative w-full py-16 p-8 bg-white dark:bg-black">
      {/* Grid background */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="max-w-full mx-auto px-5 relative z-10">
        <div
          className="w-full bg-bg border-4 border-black dark:bg-darkBg
                            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                            transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-300 p-6 mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-black text-black text-center dark:text-darkText">
            Projects I&#39;ve Worked On 🚀
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-bg p-6 rounded-lg transform transition-transform hover:scale-105 dark:bg-darkBg"
              style={{
                border: '3px solid black',
                boxShadow: '8px 8px 0px 0px #000000',
              }}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform group-hover:scale-110"
                  width={600}
                  height={400}
                />
              </div>

              <h3 className="text-2xl font-bold mb-2 transform">{project.title}</h3>

              <p className="text-text dark:text-darkText mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-semibold bg-yellow-300 dark:text-black"
                    style={{
                      border: '2px solid black',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-black font-bold transform transition-transform hover:-translate-y-1 hover:shadow-lg dark:text-black"
                  style={{
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px 0px #000000',
                  }}
                >
                  <Github size={20} />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-400 text-black font-bold transform transition-transform hover:-translate-y-1 hover:shadow-lg dark:text-black"
                  style={{
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px 0px #000000',
                  }}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
