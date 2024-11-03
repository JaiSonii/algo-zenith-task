
import './App.css';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import { chapters } from './utils/utilArray';
import '@fontsource/dm-sans';


function App() {
  return (
    <div className="grid grid-cols-5 font-sans h-screen">
      <div className='col-span-1'>
        <LeftSidebar />
      </div>
      <div className='col-span-4'>
        <MainContent chapters={chapters}/>
      </div>
    </div>
  );
}

export default App;
