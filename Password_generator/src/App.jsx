import { useState , useCallback, useEffect} from 'react'

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
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-rose-400 p-4 md:p-10">
    <div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl p-6 md:p-12 w-full max-w-2xl">

      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-10">
        Password Generator
      </h1>

      <div className="flex items-center gap-4 mb-10">
        <input 
          type="text" 
          readOnly
          placeholder="Password"
          value={password}
          className="flex-1 bg-gray-100 border border-gray-300 text-indigo-700 rounded-xl px-4 py-3 text-xl font-medium focus:outline-indigo-600"
        />
        <button 
          onClick={copy_pass} 
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-indigo-700 active:scale-95 transition"
        >
          Copy
        </button>
      </div>

      <div className="mb-10">
        <label className="text-indigo-700 font-semibold text-xl">Length: {length}</label>
        <input
          type="range"
          value={length}
          min={5}
          max={100}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-indigo-600 mt-2"
        />
      </div>

      <div className="flex items-center gap-10">
        
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={isNum}
            onChange={() => setNumber(prev => !prev)}
            className="w-6 h-6 accent-indigo-600"
          />
          <h5 className="text-indigo-800 font-medium text-xl">Include Numbers</h5>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={isSpecialChar}
            onChange={() => setSC(prev => !prev)}
            className="w-6 h-6 accent-indigo-600"
          />
          <h5 className="text-indigo-800 font-medium text-xl">Include Special Characters</h5>
        </div>
      </div>
    </div>
  </div>
);

}

export default App
