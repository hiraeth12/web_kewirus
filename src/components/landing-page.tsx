// components/landing-page.tsx
'use client';

import React, { useState } from 'react';
import { Client, Project, ModalType } from './types';
import Header from './header';
import HeroSection from './hero-section';
import ServicesSection from './services-section';
import PricingTable from './pricing-table';
import ClientsSection from './clients-section';
import ProjectsSection from './projects-section';
import ContactSection from './contact-section';
import ModalForm from './modal-form';
import Footer from './footer';

export default function LandingPage() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'Jos Verstappen',
      company: 'Red Bull Racing',
      industry: 'F1 Racing',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id semper lectus, in aliquam odio. In lectus orci, molestie in erat ac, commodo faucibus est. Nulla tincidunt, lacus vel suscipit accumsan, eros sem molestie sapien, sit amet porta sapien lectus vitae urna. Nulla ut feugiat justo, vitae pretium magna. Aliquam.'
    },
    {
      id: '2',
      name: 'Ocsar Picastri',
      company: 'StartupIndo',
      industry: 'Fintech',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id semper lectus, in aliquam odio. In lectus orci, molestie in erat ac, commodo faucibus est. Nulla tincidunt, lacus vel suscipit accumsan, eros sem molestie sapien, sit amet porta sapien lectus vitae urna. Nulla ut feugiat justo, vitae pretium magna. Aliquam.'
    },
    {
      id: '3',
      name: 'Sarles Leglreg',
      company: 'HealthCare Plus',
      industry: 'Healthcare',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id semper lectus, in aliquam odio. In lectus orci, molestie in erat ac, commodo faucibus est. Nulla tincidunt, lacus vel suscipit accumsan, eros sem molestie sapien, sit amet porta sapien lectus vitae urna. Nulla ut feugiat justo, vitae pretium magna. Aliquam.'
    }
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'SeismoTrack',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tincidunt nulla. Proin finibus risus a elit feugiat euismod. Suspendisse.',
      technology: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      status: 'completed',
      maintenance: true,
      duration: '6 bulan',
      image: '/seismotrack.png'
    },
    {
      id: '2',
      title: 'Learning Management System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tincidunt nulla. Proin finibus risus a elit feugiat euismod. Suspendisse.',
      technology: ['React Native', 'Node.js', 'MongoDB', 'Docker'],
      status: 'in-progress',
      maintenance: false,
      duration: '8 bulan',
      image: '/lms.png'
    },
    {
      id: '3',
      title: 'Profile Perusahaan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tincidunt nulla. Proin finibus risus a elit feugiat euismod. Suspendisse.',
      technology: ['Next.js', 'Express', 'MySQL', 'Redis'],
      status: 'completed',
      maintenance: true,
      duration: '10 bulan',
      image: '/kuon-yagi.png'
    }
  ]);

  const [modalType, setModalType] = useState<ModalType>(null);

  const handleAddClient = (clientData: Partial<Client>) => {
    const newClient: Client = {
      id: clientData.id || Date.now().toString(),
      name: clientData.name || '',
      company: clientData.company || '',
      industry: clientData.industry || '',
      testimonial: clientData.testimonial || ''
    };
    setClients(prev => [...prev, newClient]);
  };

  const handleAddProject = (projectData: Partial<Project>) => {
    const newProject: Project = {
      id: projectData.id || Date.now().toString(),
      title: projectData.title || '',
      description: projectData.description || '',
      technology: projectData.technology || [],
      status: projectData.status || 'planning',
      maintenance: projectData.maintenance || false,
      duration: projectData.duration || ''
    };
    setProjects(prev => [...prev, newProject]);
  };

  const handleModalSubmit = (data: Partial<Client> | Partial<Project>) => {
    if (modalType === 'add-client') {
      handleAddClient(data as Partial<Client>);
    } else if (modalType === 'add-project') {
      handleAddProject(data as Partial<Project>);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingTable />
        <ClientsSection 
          clients={clients} 
        />
        <ProjectsSection 
          projects={projects} 
        />
        <ContactSection />
      </main>
      <Footer />
      
      <ModalForm
        type={modalType}
        onClose={() => setModalType(null)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}