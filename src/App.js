import logo from './logo.svg';
import EnhancedTable from './components/EnhancedTable.tsx';
import Card from '@mui/material/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card variant = "outlined" sx={{ minWidth: 275 }}><EnhancedTable/></Card>
    </div>
  );
}

export default App;
