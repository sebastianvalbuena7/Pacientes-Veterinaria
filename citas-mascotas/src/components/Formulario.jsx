import {useState, useEffect} from 'react'
import { Error } from './Error'

export const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.entries(paciente).length > 0) {
      const {nombre, propietario, email, fecha, sintomas} = paciente
      setNombre(nombre)
      setPropietario(propietario)
      setEmail(email)
      setFecha(fecha)
      setSintomas(sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = e => {
    e.preventDefault()

    //Validar formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
    } else {
      setError(false)
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      }
      if(paciente.id) {
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map(pacienteState => {
          if(pacienteState.id === paciente.id) {
            return objetoPaciente
          } else {
            return pacienteState
          }
        })

        setPacientes(pacientesActualizados)
        setPaciente({})
      } else {
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente])
      }

      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
    }
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y <span className="text-indigo-600 font-bold">Adminístralos</span></p>

      <form className="bg-white shadow-md rounded-lg py-6 px-5 mb-10" onSubmit={handleSubmit}>
        {error ? <Error mensaje='Todos los campos son obligatorios'/> : ''}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
          <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" value={nombre} onChange={() => setNombre(event.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Nombre Propietario</label>
          <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" value={propietario} onChange={() => setPropietario(event.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Email</label>
          <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email Contacto Propietario" value={email} onChange={() => setEmail(event.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">Alta</label>
          <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" value={fecha} onChange={() => setFecha(event.target.value)}/>
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Síntomas</label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los Síntomas" type="date" value={sintomas} onChange={() => setSintomas(event.target.value)}/>
        </div>
        <input type="submit" className="bg-indigo-600 w-full rounded-md p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={Object.entries(paciente)
          .length > 0 ? 'Editar Paciente'  : 'Agregar Paciente'}/>
      </form>
    </div>
  )
}