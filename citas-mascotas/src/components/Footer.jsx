export const Footer = () => {
  return (
    <div className="bg-indigo-700 text-center rounded-md py-2">
        <h2 className="text-white text-2xl md:text-4xl font-bold">Desarrollador por: Sebastian Valbuena</h2>
        <p className="text-white text-1xl md:text-2xl mt-2">Proyecto Desarrollado con React y Tailwind</p>

        <div className="flex justify-center gap-2">
          <a href="https://github.com/sebastianvalbuena7/" target="_blank"><i className='bx bxl-github text-4xl text-white hover:text-gray-200'></i></a>
          <a href="https://www.linkedin.com/in/sebastianvalbuenaacosta/" target="_blank"><i className='bx bxl-linkedin-square text-4xl text-white hover:text-gray-200' ></i></a>
          <a href="https://www.instagram.com/sebastianvalbuena9246/" target="_blank"><i className='bx bxl-instagram-alt text-4xl text-white hover:text-gray-200' ></i></a>
        </div>
    </div>
  )
}