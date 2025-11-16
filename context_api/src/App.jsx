import { useState ,useEffect} from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import Themebtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [theme,setTheme] = useState("Light") 
  const DarkMode = () => setTheme("Dark");
  const LightMode = () => setTheme("Light");
  // Now we actually made all values portion of ThemeContext but it is not actually functional How will it know that I have to change colour so we will use useEffect to do this.
  
  useEffect(()=> {
    document.querySelector('html').classList.remove('Light','Dark')
    document.querySelector('html').classList.add(theme)
  },[setTheme])
  //so here we removed everything and set that theme colour which we have set.

  return (
    <ThemeProvider value={{theme,DarkMode,LightMode}}> 
    {/* Now we set that what is in ThemeContext but they do not do anything for now so we will define their hooks abve and give them functionality*/}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn/>                 
          </div>

          <div className="w-full max-w-sm mx-auto">
             <Card/>               
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
