import './App.css'
import Loading from './components/Loading'
import useRouteElements from './useRouteElements'
function App() {
  const routeElements = useRouteElements()
  return (
    <>
     {routeElements}
     <Loading />
    </>
  )
}

export default App
