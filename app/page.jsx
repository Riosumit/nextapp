import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (
    <div className="home bg-white h-screen flex flex-row">
      <Navbar/>
      <main className='w-full'>
        <article className='m-auto mt-24 p-5 bg-[#393d46] text-slate-100 w-11/12 rounded-xl h-[260px]'>
          <h1 className='font-semibold text-4xl'>Welcome to Our Site!</h1>
          <br /><p className='text-[#a1a6ab] text-sm w-[500px] max-w-full'>Tools from Google for building app infrastructure, improving app quality and growing your business</p>
        </article>
      </main>
    </div>
  )
}
