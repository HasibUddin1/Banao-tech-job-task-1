
import { useContext } from 'react'
import './App.css'
import { AuthContext } from './providers/AuthProvider'

function App() {

  const {user} = useContext(AuthContext)

  return (
    <>
      <div className="card mt-10">
        <h1 className='mt-2 text-4xl text-center font-bold'>
          Welcome to the website, {user?.displayName}
        </h1>
      </div>
    </>
  )
}

export default App
