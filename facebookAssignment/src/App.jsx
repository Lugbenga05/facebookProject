import { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [page, setPage] = useState(false)

  return (
    <>
      <div>
          <Login page={page} setPage={setPage} />
          {
            page ? <Signup  page={page} setPage={setPage} /> : ""
          }
      </div>

    </>
  )
}

export default App
