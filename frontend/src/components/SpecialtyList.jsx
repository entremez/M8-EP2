import React, { useEffect, useState } from "react";

const SpecialtyList = () => {
  const [specialties, setSpecialties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los datos");
        return res.json();
      })
      .then((data) => {
        // Aseguramos que sea un array
        const dataArray = Array.isArray(data) ? data : [data];
        setSpecialties(dataArray);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar las especialidades");
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Especialidades:</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-disc pl-5">
        {specialties.map((spec, idx) => (
          <li key={idx}>
            <strong>{spec.code}:</strong> {spec.display}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialtyList;
