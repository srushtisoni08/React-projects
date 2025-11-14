import { useState , useCallback, useEffect} from 'react'
import './App.css'

function App() {
  const [password, setPass] = useState("");
  const [length , setLength ] = useState(8);

  const [isNum, setNumber] = useState(false);
  const [isSpecialChar, setSC] = useState(false);

  let String = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq";

  const generate_password = useCallback(() =>{
    let pass = "";

    if (isNum) String += "1234567890";
    if (isSpecialChar) String += "`~!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?/";
    
    for(let i = 1; i <= length;i++){
      let char = Math.floor(Math.random() * String.length);
      pass += String[char];
    }
    setPass(pass);
  },[isNum,isSpecialChar,setPass,length]);

  useEffect(() => {
    generate_password();
  }, [generate_password]);

  const copy_pass = () => {
    window.navigator.clipboard.writeText(password);
  }
 
  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <input 
          type="text" 
          readOnly 
          placeholder="Password" 
          value={password}
        />
        <button onClick={copy_pass}>Copy</button>
      </div>
      <div>
        <div>
          <input
            type='range'
            value={length}
            min={5}
            max={100}
            onChange={(e) => {setLength(Number(e.target.value))}}
          />
          <h5>{length}</h5>
        </div>
        <div>
          <input
            type="checkbox"
            checked={isNum}
            onChange={() => setNumber(prev => !prev)}
          />
          <h5>Numbers</h5>
        </div>

        <div>
          <input
            type="checkbox"
            checked={isSpecialChar}
            onChange={() => setSC(prev => !prev)}
          />
          <h5>Special Characters</h5>
        </div>
      </div>
    </div>
  )
}

export default App
