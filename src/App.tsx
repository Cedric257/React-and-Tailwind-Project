import './App.css'

export default function App() {

  return (
    <>
  <h1 className="text-3xl font-bold underline text-center bg-red-800">
    Hello world!
  </h1>
  <div className='gap-60 flex flex-col'>
<button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800 rounded mt-1.5">Submit</button>
<button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 ms-1.5">Submit</button>
</div>
    </>
  )
}

