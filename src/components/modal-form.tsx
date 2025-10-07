// components/modal-form.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Client, Project, ModalType } from './types';

interface ModalFormProps {
  type: ModalType;
  onClose: () => void;
  onSubmit: (data: Partial<Client> | Partial<Project>) => void;
}

export default function ModalForm({ type, onClose, onSubmit }: ModalFormProps) {
  const [clientData, setClientData] = useState({
    name: '',
    company: '',
    industry: '',
    testimonial: ''
  });

  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    technology: [] as string[],
    status: 'planning' as Project['status'],
    maintenance: false,
    duration: ''
  });

  const [techInput, setTechInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (type) {
      // Focus first input when modal opens
      const firstInput = document.querySelector('.modal-form input') as HTMLInputElement;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    }
  }, [type]);

  const validateClientForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!clientData.name.trim()) newErrors.name = 'Nama wajib diisi';
    if (!clientData.company.trim()) newErrors.company = 'Perusahaan wajib diisi';
    if (!clientData.industry.trim()) newErrors.industry = 'Industri wajib diisi';
    if (!clientData.testimonial.trim()) newErrors.testimonial = 'Testimonial wajib diisi';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateProjectForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!projectData.title.trim()) newErrors.title = 'Judul proyek wajib diisi';
    if (!projectData.description.trim()) newErrors.description = 'Deskripsi wajib diisi';
    if (projectData.technology.length === 0) newErrors.technology = 'Minimal satu teknologi harus diisi';
    if (!projectData.duration.trim()) newErrors.duration = 'Durasi wajib diisi';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateClientForm()) {
      onSubmit({
        ...clientData,
        id: Date.now().toString()
      });
      handleClose();
    }
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateProjectForm()) {
      onSubmit({
        ...projectData,
        id: Date.now().toString()
      });
      handleClose();
    }
  };

  const handleClose = () => {
    setClientData({ name: '', company: '', industry: '', testimonial: '' });
    setProjectData({ title: '', description: '', technology: [], status: 'planning', maintenance: false, duration: '' });
    setTechInput('');
    setErrors({});
    onClose();
  };

  const addTechnology = () => {
    if (techInput.trim() && !projectData.technology.includes(techInput.trim())) {
      setProjectData(prev => ({
        ...prev,
        technology: [...prev.technology, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const removeTechnology = (tech: string) => {
    setProjectData(prev => ({
      ...prev,
      technology: prev.technology.filter(t => t !== tech)
    }));
  };

  if (!type) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {type === 'add-client' ? 'Tambah Testimoni Klien' : 'Tambah Proyek Baru'}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Tutup modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {type === 'add-client' ? (
            <form onSubmit={handleClientSubmit} className="modal-form space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Klien
                </label>
                <input
                  type="text"
                  value={clientData.name}
                  onChange={(e) => setClientData(prev => ({ ...prev, name: e.target.value }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nama lengkap klien"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  value={clientData.company}
                  onChange={(e) => setClientData(prev => ({ ...prev, company: e.target.value }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="PT. Nama Perusahaan"
                />
                {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industri
                </label>
                <input
                  type="text"
                  value={clientData.industry}
                  onChange={(e) => setClientData(prev => ({ ...prev, industry: e.target.value }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.industry ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., E-commerce, Fintech, Healthcare"
                />
                {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Testimonial
                </label>
                <textarea
                  value={clientData.testimonial}
                  onChange={(e) => setClientData(prev => ({ ...prev, testimonial: e.target.value }))}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.testimonial ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Testimonial atau review dari klien..."
                />
                {errors.testimonial && <p className="mt-1 text-sm text-red-600">{errors.testimonial}</p>}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Tambah Testimoni
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleProjectSubmit} className="modal-form space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Proyek
                </label>
                <input
                  type="text"
                  value={projectData.title}
                  onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nama proyek"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi
                </label>
                <textarea
                  value={projectData.description}
                  onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Deskripsi singkat proyek..."
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teknologi
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tambah teknologi (tekan Enter)"
                  />
                  <button
                    type="button"
                    onClick={addTechnology}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Tambah
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectData.technology.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTechnology(tech)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                {errors.technology && <p className="mt-1 text-sm text-red-600">{errors.technology}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={projectData.status}
                    onChange={(e) => setProjectData(prev => ({ ...prev, status: e.target.value as Project['status'] }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="planning">Perencanaan</option>
                    <option value="in-progress">Sedang Berjalan</option>
                    <option value="completed">Selesai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durasi
                  </label>
                  <input
                    type="text"
                    value={projectData.duration}
                    onChange={(e) => setProjectData(prev => ({ ...prev, duration: e.target.value }))}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.duration ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., 3 bulan"
                  />
                  {errors.duration && <p className="mt-1 text-sm text-red-600">{errors.duration}</p>}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={projectData.maintenance}
                    onChange={(e) => setProjectData(prev => ({ ...prev, maintenance: e.target.checked }))}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Maintenance aktif
                  </span>
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Tambah Proyek
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}