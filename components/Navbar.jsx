export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-2">
          <span className="text-white">🏫</span>
          <span>Student Portal</span>
        </div>
        <div className="space-x-6 text-sm font-medium">
          <a href="#students" className="hover:underline hover:text-blue-200 transition">
            Students
          </a>
          <a href="#add" className="hover:underline hover:text-blue-200 transition">
            Add Student
          </a>
        </div>
      </div>
    </nav>
  );
}
