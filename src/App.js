import React, { useState } from 'react';
import './index.css';
import profilePic from './me good headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ProjectDetails from './ProjectDetails';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Trybe',
      link: 'https://apps.apple.com/us/app/trybe-social/id6479568670',
      image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Trybe%2FIMG_2588.PNG?alt=media&token=7b79998d-4e02-4cf1-a13f-564bd6e92418',
      purpose: 'Help users find and create close groups of friends with similar interests.',
      demo: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Trybe%2FRPReplay_Final1721615522%20(1)%20(1).gif?alt=media&token=57080ab7-c5ff-4fd2-8828-f3b916094322',
      techStack: ['Flutter', 'Dart', 'Javascript', 'Firebase'],
      specialFeatures: [
        {
          name: 'Real-time Chat',
          image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Trybe%2FIMG_2585.PNG?alt=media&token=3f8fe94c-6d38-4ffa-9ddc-ac41e62d23b9',
          description: 'Allows users to chat in real-time with group members.'
        },
        {
          name: 'Group-voted Join Requests',
          image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Trybe%2FIMG_2586.PNG?alt=media&token=f47b609c-2cc3-4247-af64-c150eff229df',
          description: 'Allows Trybe members to have input on potential new members.'
        },
        {
          name: 'Trybe to Trybe Matching',
          image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Trybe%2FIMG_2587.PNG?alt=media&token=7d9e37d0-4bfd-4aaf-8751-6655a83399d9',
          description: 'Allows Trybes to match with other Trybes to create mega-groupchats and expand social circles.'
        },
        {
          name: 'Personal Message Hub',
          image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Trybe%2FIMG_2589.PNG?alt=media&token=f85a2675-f18b-4a9b-8295-d091815e7d2d',
          description: 'Centralizes all personal messages to facilitate 1-1 communication and Trybe joining.'
        },
        {
          name: 'Saving Users',
          image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Trybe%2FIMG_2590.PNG?alt=media&token=3841002b-53e6-4138-aa3b-725c97062f0a',
          description: 'Presents other users based on proximity to save for more intelligent new Trybe recommendations'
        },
        {
          name: 'Saving Trybes',
          image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Trybe%2FIMG_2591.PNG?alt=media&token=e1ef8f0b-0858-464a-b57d-143e667c3b47',
          description: 'Presents other Trybes based on proximity to save for future join requests'
        }
      ]
    },
    {
      id: 2,
      name: 'LearnGPT',
      link: 'https://learn-gpt-seven.vercel.app/',
      image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/LearnGPT%2FScreenshot%202024-07-22%20095318.png?alt=media&token=7fbf1992-df1c-42f7-abc2-69b6ab526d4f',
      purpose: 'A platform that uses AI to enhance learning by intelligently suggesting relevant info to topic inputs.',
      demo: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/LearnGPT%2Fcopy_7003F858-E31E-472C-B1E5-8DC65225D774.gif?alt=media&token=186c1914-51ad-4792-9825-d315a35d2121',
      techStack: ['React.js', 'Next.js', 'OpenAI'],
      specialFeatures: [
        {
          name: 'AI-Powered Recommendations',
          image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/LearnGPT%2FScreenshot%202024-07-22%20095217.png?alt=media&token=a7d96af5-6aff-488b-8819-c0f60c57d661',
          description: 'Provides relevant learning recommendations using AI.'
        }
      ]
    },
    {
      id: 3,
      name: 'Aura',
      link: 'https://aura-demo.vercel.app/',
      image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Aura%2FScreenshot%202024-07-22%20101019.png?alt=media&token=20a6aab8-55b9-44c8-85b3-a49314953ba1',
      purpose: 'Enable seamless temperature management between doctor and patient',
      demo: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Aura%2F20240723092925.gif?alt=media&token=63ff620a-38e2-4f18-b659-def9d7574585',
      techStack: ['React.js', 'SNode.js', 'Firebase'],
      specialFeatures: [
        {
          name: 'Adjustable Time Frames',
          image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Aura%2FScreenshot%202024-07-23%20121727.png?alt=media&token=9aa42c4b-a4bb-42e0-883a-d48a2f056857',
          description: 'Allows users to change the time frame to visualize temperature trends.'
        }
      ]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  const handleDeselect = () => {
    setSelectedProject(null);
    setShowDetails(false);
  };

  return (
    <div className="App text-center">
      <header className="flex flex-col md:flex-row justify-between items-center h-auto md:h-40 bg-gray-100 border-b-2 border-gray-200 p-4">
        <div className="flex-1 text-center mb-4 md:mb-0">
          <h1 className="text-4xl font-bold">Jason Cornell</h1>
          <p className="text-xl">Full Stack Engineer</p>
        </div>
        <div className="flex-1 flex justify-center md:justify-center mb-4 md:mb-0">
          <img src={profilePic} alt="Jason Cornell" className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover" />
        </div>
        <div className="flex-1 text-left md:pl-5">
          <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
          <ul>
            <li>
              <strong>Meta:</strong> Internal Tool Platform Development
              <br />
              <span className="text-sm">React.js, GraphQL, Hack (PHP)</span>
            </li>
            <li className="mt-2">
              <strong>ESPN:</strong> AI Chatbot
              <br />
              <span className="text-sm">Svelte.js, Node.js, OpenAI, AzureNLP</span>
            </li>
          </ul>
        </div>
      </header>
      {showDetails ? (
        <ProjectDetails project={selectedProject} onClose={handleDeselect} />
      ) : (
        <section className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project-container">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.name} <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
              <div className="project-img" onClick={() => handleProjectClick(project)}>
                <img src={project.image} alt={project.name} className="project-image" />
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default App;




