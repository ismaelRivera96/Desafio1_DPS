"use client";

import React, { useState } from 'react';
import Header from './components/Header';
import MateriaList from './components/MateriaList';
import ResumenInscripcion from './components/ResumenInscripcion';

const HomePage = () => {
  const [materiasInscritas, setMateriasInscritas] = useState([]);

  const inscribirMateria = (materia) => {
    if (!materiasInscritas.find((m) => m.id === materia.id)) {
      setMateriasInscritas([...materiasInscritas, materia]);
    }
  };

  const eliminarMateria = (id) => {
    setMateriasInscritas(materiasInscritas.filter((m) => m.id !== id));
  };

  const limpiarInscripciones = () => {
    setMateriasInscritas([]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Header totalMaterias={materiasInscritas.length} />
      <MateriaList inscribirMateria={inscribirMateria} />
      <ResumenInscripcion 
        materiasInscritas={materiasInscritas} 
        eliminarMateria={eliminarMateria} 
        limpiarInscripciones={limpiarInscripciones} 
      />
    </div>
  );
};

export default HomePage;
