export const Error = ({mensaje}) => {
  return (
    <div className='bg-red-700 text-white font-bold text-center p-3 uppercase mb-3 rounded'>
        <p>{mensaje}</p>
    </div>
  )
}