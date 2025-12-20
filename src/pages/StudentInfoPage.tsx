import { useState } from 'react';

export default function StudentInfoPage({ onNext }: { onNext: (s: any) => void }) {
  const [form, setForm] = useState({
    name: '',
    registerNo: '',
    department: '',
    section: '',
    year: '',
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
  if (!form.name || !form.department || !form.year) {
    alert('Please fill all required fields');
    return;
  }

  onNext({
    ...form,
    year: Number(form.year),
  });
};


  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold text-center mb-4">
        🌾 Pongal Tech Persona
      </h1>

      {['name', 'registerNo', 'department', 'section', 'year'].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.toUpperCase()}
          onChange={handleChange}
          className="w-full p-3 mb-3 border rounded-lg"
        />
      ))}

<select
  name="financeLevel"
  onChange={handleChange}
  className="w-full p-3 mb-3 border rounded-lg"
>
  <option value="">Monthly Savings (Approx)</option>
  <option value="LOW">Below ₹1,000</option>
  <option value="MEDIUM">₹1,000 – ₹5,000</option>
  <option value="HIGH">₹5,000 – ₹10,000</option>
  <option value="VERY_HIGH">Above ₹10,000</option>
</select>

     <button
  onClick={submit}
  className="w-full bg-pongal-fire text-black py-2 rounded-lg mt-2"
>
  Next →
</button>

    </div>
  );
}
