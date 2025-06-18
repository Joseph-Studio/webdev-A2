'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import AddStudentForm from '../components/StudentsList';
import initialStudents from '../data/students';
import Footer from '@/components/Footer';
export default function Home() {
  const [students, setStudents] = useState(initialStudents);

  const handleAddStudent = (newStu) => {
    setStudents(prev => [...prev, newStu]);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Form to add a student */}
      <AddStudentForm onAddStudent={handleAddStudent} />

      {/* Display the list */}
      <section className="max-w-2xl mx-auto p-4 text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Student List</h2>
        <ul className="space-y-3">
          {students.map((s, i) => (
            <li key={i} className="p-4 border border-gray-300 rounded bg-white shadow">
              <p><strong>Name:</strong> {s.firstName} {s.lastName}</p>
              <p><strong>DOB:</strong> {s.dob}</p>
              <p><strong>Grade:</strong> {s.grade}</p>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
