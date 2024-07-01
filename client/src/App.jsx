import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './components/Home'
import Auth from './components/Auth'
import { useModal } from './hooks/modalHook'
import { useContext } from 'react'
import { UserContext } from './context/UserProvider'
import BeginJourneyModal from './components/BeginJourneyModal'
import Game from './components/Game'

function App() {

  const authModal = useModal()

  const { toggleModal, modalStyles, overlayStyles, modalOff } = authModal

  const { token, user, trainer } = useContext(UserContext)


console.log(token)

  return (
    <>
      <Navbar toggleModal={toggleModal} />

      <Auth modalStyles={modalStyles} overlayStyles={overlayStyles} toggleModal={toggleModal} modalOff={modalOff} />

      {token && user && (!trainer || !trainer.setupComplete) && <BeginJourneyModal />}

      <Routes>
        <Route path='/' element={(token && trainer) ? <Navigate to='/play' /> : <Home />} />
        <Route path='/play' element={(token && trainer) ? <Game /> : <Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default App
