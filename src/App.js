import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import ProjectDetails from './ProjectDetails';

// Assets
import './index.css';

// Project Data
const projects = [
  {
    id: 1,
    name: 'Trybe',
    link: 'https://jointrybesocial.com/trybes',
    image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/IMG_8028.PNG?alt=media&token=6c2c5e82-f4fe-4669-90f2-4b1b0491a95e',
    purpose: 'Help people find groups of friends and group discounts for local businesses.',
    demo: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/ScreenRecording_06-08-2025%2015-42-20_1.gif?alt=media&token=4530b286-f0b6-4253-b1fa-aead9752f9bf',
    techStack: ['React', 'React Native', 'FastAPI (Python)', 'Firebase'],
    specialFeatures: [
      {
        name: 'Real-time Chat',
        image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/IMG_8032.PNG?alt=media&token=6863f4b6-7a9f-478f-b514-58f8a5720e1a',
      },
      {
        name: 'Trybe Profiles',
        image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/Screenshot%202025-06-08%20at%203.39.26%E2%80%AFPM.jpeg?alt=media&token=97e79330-a77f-4d8e-b640-bc3f8ce8f68c',
      },
      {
        name: 'User Profiles',
        image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/IMG_8039.PNG?alt=media&token=6c5e923e-e46b-4f0f-a9d8-da7f6b8b8ab2',
      },
      {
        name: 'Memories',
        image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/IMG_8029.PNG?alt=media&token=8df4091b-90c1-4a12-986a-f4097498b574',
        description: 'Video/Image memories delivered with Cloudflare CDN.'
      },
    ]
  },
  {
    id: 2,
    name: 'LearnGPT',
    link: 'https://learn-gpt-seven.vercel.app/',
    image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/LearnGPT%2FScreenshot%202024-07-22%20095318.png?alt=media&token=7fbf1992-df1c-42f7-abc2-69b6ab526d4f',
    purpose: 'An AI-powered tool to enhance learning by intelligently suggesting relevant info to topic inputs.',
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
    name: 'Splvts',
    link: 'https://splvts.com/',
    image: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/IMG_8034.png?alt=media&token=f1ae70cd-9e5b-4e0c-b781-34acba912265',
    purpose: 'Automatic payments from Creators to Managers, powered by Plaid Webhooks.',
    demo: 'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/IMG_8035.png?alt=media&token=53be81a0-6e37-476d-bbd9-4e022978823f',
    techStack: ['React.js', 'Node.js', 'Firebase'],
    specialFeatures: []
  },
  {
    id: 4,
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

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  const handleDeselect = () => {
    setSelectedProject(null);
    setShowDetails(false);
  };

  return (
    <div className="App">
      <header className="flex flex-col items-center text-center h-auto bg-gray-100 border-b-2 border-gray-200 p-4">
        <div className="mb-4">
          <h1 className="text-4xl font-bold">Jason Cornell</h1>
          <p className="text-xl">Full Stack Engineer</p>
        </div>
        <div className="flex justify-center mb-4">
          <img 
            src={'https://firebasestorage.googleapis.com/v0/b/aura-86da0.appspot.com/o/IMG_1880%202.jpg?alt=media&token=5830d654-beca-421b-8f99-311b9283998d'} 
            alt="Jason Cornell" 
            className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover" 
          />
        </div>
        <div className="w-full md:w-auto flex flex-col items-center text-center px-2">
          <h2 className="text-2xl font-semibold mb-2">3 Years of Experience</h2>
          <ul>
            <li>
              <strong>Sigma Connectivity:</strong> Meta Contract
              <br />
              <span className="text-sm">React.js, GraphQL, Hack (PHP)</span>
            </li>
            <li className="mt-2">
              <strong>Accenture:</strong> Meta/ESPN Contracts
              <br />
              <span className="text-sm">Svelte.js, Node.js, OpenAI, AzureNLP, React.js, GraphQL, Hack (PHP)</span>
            </li>
          </ul>
        </div>
      </header>

      {showDetails ? (
        <ProjectDetails 
          project={selectedProject} 
          onClose={handleDeselect} 
        />
      ) : (
        <section className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project-container">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                {project.name} <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
              <div 
                className="project-img" 
                onClick={() => handleProjectClick(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="project-image" 
                />
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default App;




