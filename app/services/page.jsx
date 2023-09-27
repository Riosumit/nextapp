import Navbar from '../components/Navbar/Navbar'

export default function Services() {
  return (
    <div className="home bg-white h-screen flex flex-row">
      <Navbar/>
      <main className='sm:w-10/12 w-screen flex h-screen'>
        <h1 className='m-auto text-gray-400 font-bold text-5xl'>Services</h1>
      </main>
    </div>
  )
}
