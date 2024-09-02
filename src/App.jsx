import React, { useState } from "react";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";

const projects = [
  {
  type: 'website',
  title: 'PhonoLogix',
  clientType: '[Direct Client]',
  description: 'The idea of launching a platform for online therapy...',
  images: ["/2/2a.jpg","./2/2b.jpg","./2/2c.jpg"],
  link: 'https://portal.speechally.in/login',
},
{
  type: 'mobile',
  title: 'Digihealth',
  clientType: '[Client through other Company]',
  description: 'Your ideal healthcare partner...',
  images: ['/1/1a.jpg', '/1/1b.jpg', '/1/1c.jpg'],
  link: 'https://play.google.com/store/apps/details?id=com.sahisehat',
},
  {
    type: "mobile",
    title: "GenWE",
    clientType: "[Client through other Company]",
    description: `This app is about connecting, learning, and sharing. GenWE is a platform for teenagers aged 13-19. We pair teens from different backgrounds, helping them build a friendship and learn from each other. It is all about learning real-life leadership skills and thus helping reduce social exclusion and discrimination.`,
    images: [,"./3/3a.jpg" ,"./3/3b.jpg" ,"./3/3c.jpg" ,"./3/3d.jpg"],
    link: "https://play.google.com/store/apps/details?id=com.genwemobile",
    secondaryLink:
      "https://apps.apple.com/in/app/genwe-new-friend-new-skills/id1537440686",
  },
  {
    type: "mobile",
    title: "StarHire",
    clientType: "[Direct Client]",
    description: `StarHire is your digital solution for easy and efficient management of routine tasks for your team, be it Leave, Documents, Employee Data, or internal Communication. And for the wellbeing of your Stars, StarHire offers a Wellness Module to help your team maintain healthy habits and track their health.`,
    images: ["/4/4a.jpg","./4/4b.jpg","/4/4c.jpg","/4/4d.jpg"],
    link: "https://play.google.com/store/apps/details?id=com.cms.starhire",
    secondaryLink: "https://apps.apple.com/in/app/mint-hr/id1578097748",
  },
  {
    type: "mobile",
    title: "Kite",
    clientType: "[Direct Client]",
    description: "Portal to purchase medicines in big quantities.",
    images: [,"/5/5a.jpg","/5/5b.jpg","/5/5c.jpg","/5/5d.jpg"],
    link: "https://play.google.com/store/apps/details?id=com.cms.medcommerce",
    secondaryLink: "https://apps.apple.com/in/app/kite-digiceutix/id1640907110",
  },
  {
    type: "mobile",
    title: "Indiroam",
    clientType: "[Client through other Company]",
    description: `Whether you’re looking for a coffee shop, night life, or to go out for lunch at a local eatery, indiRoam is the app you need to find all the locally authentic and independent restaurants in Houston.`,
    images: [,"/6/6a.jpg","/6/6b.jpg","/6/6c.jpg"],
    link: "https://play.google.com/store/apps/details?id=com.indiroam",
  },
  {
    type: "mobile",
    title: "BM Transport",
    clientType: "[Client through other Company, In Progress]",
    description: `It is a truck booking service. It has two apps. One is for truck drivers and the other is for customers.`,
    images: ["/7/7a.jpg" ,"/7/7b.jpg" ,"/7/7c.jpg" ,"/7/7d.jpg"],
  },
  {
    type: "mobile",
    title: "GoTime",
    clientType: "[Client through other Company, In Progress]",
    description: `It is a sports app where users can create sports events and challenges and others can join them.`,
    images: ["/8/8a.jpg" ,"/8/8b.jpg" ,"/8/8c.jpg"],
  },
  {
    type: "website",
    title: "Ambit Finvest Pvt. Ltd.",
    clientType: "[Client through other company]",
    description: `Ambit Finvest Pvt. Ltd. presents a comprehensive website built on Next.js, offering a wealth of information and services to meet the financial needs of individuals and businesses alike.`,
    images: ["/9/9a.png","/9/9b.png","/9/9c.png"],
    link: "https://ambit-finserv-web.vercel.app/",
  },
  {
    type: "mobile",
    title: "Bhojnam",
    clientType: "[Direct Client, In Progress]",
    description: `Bhojnam is an innovative e-commerce platform designed to cater to the culinary needs of events, gatherings, and daily meals with its comprehensive food ordering services.`,
    images: ["/10/10a.png" ,"/10/10b.png" ,"/10/10c.png" ,"/10/10d.png" ],
  },
  {
    type: "mobile",
    title: "Mint Engage",
    clientType: "[Direct Client]",
    description: `Mint Engage is an integrated platform designed to promote employee wellness, engagement, and productivity within organizations.`,
    images: ["/4/4a.jpg","/4/4b.jpg","/4/4c.jpg" ],
    link: "https://play.google.com/store/apps/details?id=com.cms.mintengage",
    secondaryLink: "https://apps.apple.com/in/app/mint-engage/id6449997467",
  },
];

function App() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredProjects = projects.filter(
    (project) => (filter === 'all' || project.type === filter) && project.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <Header onFilterChange={handleFilterChange} onSearch={handleSearch} />
      
          {filteredProjects.map((project, index) => (
              <ProjectSection {...project} />
          ))}     

    </div>
  );
}
export default App