// components/types.ts
export interface Client {
  id: string;
  name: string;
  company: string;
  industry: string;
  testimonial: string;
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technology: string[];
  status: 'completed' | 'in-progress' | 'planning';
  maintenance: boolean;
  image?: string;
  duration: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

export type ModalType = 'add-client' | 'add-project' | null;