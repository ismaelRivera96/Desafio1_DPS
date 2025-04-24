import React from 'react';
// se muestra el titulo de la aplicacion se gerera una costante para las materias que se inscriben
const Header = ({ totalMaterias }) => {
  return (
    <header className="bg-blue-500 text-white p-4 text-center rounded-xl">
      <h1 className="text-xl font-bold">Sistema de Inscripción a Materias</h1>
      <p>Materias inscritas: {totalMaterias}</p>
    </header>
  );
};

export default Header;
