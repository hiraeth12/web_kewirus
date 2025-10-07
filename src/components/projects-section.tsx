// components/projects-section.tsx
"use client";

import React from "react";
import { Project } from "./types";
import ProjectCard from "./project-card";

interface ProjectsSectionProps {
  projects: Project[];
  onAddProject: () => void;
}

export default function ProjectsSection({
  projects,
  onAddProject,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Portfolio Proyek
            </h2>
            <p className="text-xl text-gray-600">
              Lihat beberapa proyek terbaru yang telah kami kerjakan untuk
              berbagai klien dari berbagai industri.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Belum ada proyek. Klik tombol "Tambah Proyek" untuk menambahkan.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Lihat Semua Proyek
          </button>
        </div>
      </div>
    </section>
  );
}
