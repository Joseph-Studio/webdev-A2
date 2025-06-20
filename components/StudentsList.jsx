import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required.';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required.';
    if (!formData.dob.trim()) {
      errs.dob = 'Date of birth is required.';
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.dob)) {
      errs.dob = 'Date format must be YYYY-MM-DD.';
    }
    if (!formData.grade.trim()) {
      errs.grade = 'Grade is required.';
    } else if (isNaN(formData.grade) || +formData.grade < 1 || +formData.grade > 12) {
      errs.grade = 'Grade must be a number between 1 and 12.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddStudent(formData);
      setFormData({ firstName: '', lastName: '', dob: '', grade: '' });
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black max-w-2xl mx-auto p-6 mt-8 border rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add New Student</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {['firstName', 'lastName', 'dob', 'grade'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
              {field === 'dob' ? 'Date of Birth' : field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type={field === 'dob' ? 'date' : field === 'grade' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[field] && (
              <p className="text-sm text-red-600 mt-1">{errors[field]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
        >
          Add Student
        </button>
      </div>
    </form>
  );
};

export default AddStudentForm;
