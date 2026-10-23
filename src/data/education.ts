import { EducationItem, CertificationItem } from '../types';

export const education: EducationItem[] = [
  {
    id: 'msc-it',
    degree: 'Master of Science in Information Technology (M.Sc. IT)',
    institution: 'Saurashtra University (Sarvodaya College)',
    score: '8.71 CGPA',
    period: '2024 — 2026',
    courses: [
      'Enterprise Software Architecture',
      'Distributed Systems & Cloud Computing',
      'Advanced Database Management Systems',
      'Network Security & Cryptography'
    ]
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Saurashtra University (H & H B Kotak Institute of Science)',
    score: '7.90 CGPA',
    period: '2019 — 2022',
    courses: [
      'Backend Web Development & OOP',
      'Database Management Systems (DBMS)',
      'Data Structures & Algorithms',
      'Operating Systems & Networking'
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert-python',
    title: 'Python for Enterprise Web Development',
    issuer: 'Inlancer Technologies LLP',
    year: '2022'
  },
  {
    id: 'cert-drf',
    title: 'Django REST Framework Production Architecture',
    issuer: 'Inlancer Technologies LLP',
    year: '2022'
  },
  {
    id: 'cert-fastapi',
    title: 'FastAPI - High-Performance Asynchronous Python Framework',
    issuer: 'Inlancer Technologies LLP',
    year: '2022'
  }
];
