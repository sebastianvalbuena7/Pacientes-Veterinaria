export const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "Quieres eliminar este paciente?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4F46E5',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'El paciente ha sido eliminado.',
                'success'
              )
              eliminarPaciente(id)
            }
          })
    }

    return (
        <div className="p-5 mx-5 my-10 mt-5 bg-white shadow-md py-6 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: <span className="font-normal normal-case">{fecha}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>

            <div className="flex justify-between mt-10 gap-2">
                <button 
                    type="button" 
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-bold uppercase"
                    onClick={() => setPaciente(paciente)}
                    >Editar</button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded text-white font-bold uppercase" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    )
}