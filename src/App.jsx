import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Test from './Test'
import Dp from './Dp'
import UseState from './useState'
import LearningUseEffect from './LearningUseEffect'

function App() { // This is not a function. It's a componet. Componet is those type of function which return jsx code.
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/about' element={ <About /> }/>
      <Route path='/contact' element={ <Contact /> }/>
      <Route path='/test' element={ <Test /> }/>
      <Route path='/dp' element={ <Dp /> }/>
      <Route path='/use-state' element={ <UseState /> }/>
      <Route path='/use-effect' element={ <LearningUseEffect /> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

