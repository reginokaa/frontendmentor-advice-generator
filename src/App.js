import './App.css';
import { AdviceWindow } from './components/AdviceWindow';


  const appStyle = {
    backgroundColor: 'hsl(218, 23%, 16%)',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

function App() {

  return (
    <div style={appStyle}>
      <AdviceWindow />
    </div>
  );
}

export default App;
