import React from 'react';
import { materias } from '../data/data'; // muestra la lista de materias disponibles para inscripción y manda llamar data.js
// Cada materia incluye su nombre, descripción, horario, profesor y unidades valorativas que ya definimos en data.js
const MateriaList = ({ inscribirMateria }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {materias.map((materia) => (
        <div key={materia.id} className="border p-4 rounded-xl">
          <h2 className="font-bold text-lg">{materia.nombre}</h2>
          <p>{materia.descripcion}</p>
          <p>Horario: {materia.horario}</p>
          <p>Profesor: {materia.profesor}</p>
          <p>Unidades Valorativas: {materia.unidades}</p>
          <button 
            onClick={() => inscribirMateria(materia)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2"
          > 
            Inscribir
          </button> 
        </div> // Al presionar el botón "Inscribir", se ejecuta la función inscribirMateria para añadir la materia a las inscritas
      ))}
    </div>
  );
};

export default MateriaList;
