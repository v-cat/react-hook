import logo from './logo.svg';
import './App.css';
import FirstDemo from './modules/first-demo/index';
import { Button } from 'antd';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">hello world</header> */}
      <Button type="primary">Button</Button>
      <FirstDemo />
    </div>
  );
}

export default App;
