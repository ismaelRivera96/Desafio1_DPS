import React from 'react'; 
// generamos la constante Resumen Inscripcion y definimos la suma de UV y el boton para eliminar materias
const ResumenInscripcion = ({ materiasInscritas, eliminarMateria, limpiarInscripciones }) => {
  const totalUnidades = materiasInscritas.reduce((total, materia) => total + materia.unidades, 0);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Materias Inscritas</h2>
      <ul>
        {materiasInscritas.map((materia) => (
          <li key={materia.id} className="border p-2 rounded-xl mb-2">
            {materia.nombre} - {materia.unidades} UV
            <button 
              onClick={() => eliminarMateria(materia.id)}
              className="bg-red-500 text-white ml-4 px-2 py-1 rounded-lg"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p>Total de Unidades Valorativas: {totalUnidades}</p>
      <button 
        onClick={limpiarInscripciones}
        className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Limpiar Inscripciones
      </button>
    </div> // hacemos la funcion para borrar toda la inscripcion
  );
};

export default ResumenInscripcion;
