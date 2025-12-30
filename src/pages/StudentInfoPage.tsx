import { useState } from "react";
import { submitStudentDetails } from "../api/quiz.api";

export default function StudentInfoPage({
  onNext,
}: {
  onNext: (s: any) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    registerNo: "",
    department: "",
    section: "",
    year: "",
    financeLevel: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (!form.name || !form.department || !form.year) {
      alert("Please fill all required fields");
      return;
    }

    // Build student object
    const studentData = {
      name: form.name,
      registerNo: form.registerNo,
      department: form.department,
      section: form.section,
      year: form.year, // Keep as string
      financeLevel: form.financeLevel || undefined,
    };

    // Save student details to backend (best-effort, non-blocking)
    await submitStudentDetails({
      name: form.name,
      registerNo: form.registerNo,
      department: form.department,
      section: form.section,
      year: form.year,
    });

    // Proceed to quiz
    onNext(studentData);
  };

  const fieldLabels: Record<string, string> = {
    name: "Full Name",
    registerNo: "Register Number",
    department: "Department",
    section: "Section",
    year: "Year",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {/* College Logo Placeholder */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-400">Logo</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🌾 Pongal Tech Persona
          </h1>
          <p className="text-sm text-gray-500">Tell us about yourself</p>
        </div>

        <div className="space-y-4">
          {["name", "registerNo", "department", "section", "year"].map(
            (field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {fieldLabels[field]}
                  {["name", "department", "year"].includes(field) && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                <input
                  name={field}
                  value={form[field as keyof typeof form]}
                  placeholder={`Enter ${fieldLabels[field].toLowerCase()}`}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pongal-fire focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                />
              </div>
            )
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Monthly Savings (Approx)
            </label>
            <select
              name="financeLevel"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pongal-fire focus:border-transparent transition-all text-gray-900 bg-white"
            >
              <option value="">Select savings range</option>
              <option value="LOW">Below ₹1,000</option>
              <option value="MEDIUM">₹1,000 – ₹5,000</option>
              <option value="HIGH">₹5,000 – ₹10,000</option>
              <option value="VERY_HIGH">Above ₹10,000</option>
            </select>
          </div>
        </div>

        <button
          onClick={submit}
          className="w-full mt-6 bg-pongal-fire text-white font-bold py-4 rounded-lg bg-orange-600 focus:outline-none focus:ring-2 focus:ring-pongal-fire focus:ring-offset-2 transition-all shadow-md text-base"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
