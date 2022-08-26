import { useState } from 'react'
import { AtlasThemeProvider } from "@diligentcorp/atlas-theme-mui";
import { Button } from '@mui/material';
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AtlasThemeProvider>
        <Button>Hello</Button>
      </AtlasThemeProvider>
    </div>
  )
}

export default App
