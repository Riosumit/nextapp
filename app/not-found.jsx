import Link from 'next/link'

export default function About() {
    return (
      <div className="h-screen bg-white flex flex-row px-5">
        <div className="bg-black h-fit m-auto w-[400px] px-3 py-5 max-w-xl rounded-md">
          <h1 className=''>404 - Page Not Found</h1>
          <Link href="/" className='text-[blue] text-sm'>Return to Home</Link>
        </div>
      </div>
    )
  }