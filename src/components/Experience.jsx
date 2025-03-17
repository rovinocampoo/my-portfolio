// Experience.jsx
import React from 'react';

const experiences = [
  {
    title: 'API Support L3',
    company: 'Support Ninja Global Inc.',
    duration: 'Aug 2023 - Oct 2023',
    description: [
      'Main point of contact for API-related issues.',
      'Assisted developers in troubleshooting API integrations.',
      'Provided documentation and technical guidance.',
    ],
  },
  {
    title: 'Head Barista / Co-Founder',
    company: 'Nomad Coffee Ilocos',
    duration: 'Jan 2020 - Present',
    description: [
      'Managed daily operations, inventory, and customer service.',
      'Handled administrative tasks, appointment scheduling.',
      'Oversaw social media marketing and customer engagement.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Accenture',
    duration: 'Mar 2019 - November 2023',
    description: [
      'Developed and maintained enterprise-level applications.',
      'Collaborated with cross-functional teams to design scalable solutions.',
      'Implemented best practices for code quality and performance optimization.',
    ],
  },
  // Add more experiences as needed
];

const Experience = () => (
  <section className="p-10 bg-gray-900 text-white">
    <h2 className="text-3xl font-bold">Experience</h2>
    {experiences.map((job, index) => (
      <div key={index} className="mt-4 border-b pb-4">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-400">
          {job.company} | {job.duration}
        </p>
        <ul className="mt-2 list-disc ml-5">
          {job.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Experience;
