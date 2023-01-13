import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

import BootstrapComp from './components/bootstrap/bootstrapcomp';
import AlertDismissibleExample from './components/bootstrap/alert';
import Position from './components/bootstrap/Position';
import DndApp from './components/DndExample';
import 'antd/dist/antd.css'
import PersistentDrawerLeft from './components/MatCat';
import Dashboard2 from './components/Dasboard';
import { Route, Routes } from 'react-router';
import DropdownMenu from './components/dropdown.tsx';
import BasicTable from './components/MatTable.tsx';
import SimpleMap from './components/GoogleMaps';
import BasicTabs from './components/TabsComponent';
import DragAndDrop from './components/draganddroptable';
import Example from './components/EmojiPicker';
import { useTransition } from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import { SortableList } from './components/ReactSortableHoc';
import Fapp from './components/ReactSortableHocComp';
import { ImageUpload } from './components/imageUpload.tsx';
import MainTransIndex from './components/TransferList/Main';
import StepperWrapper from './stepper';

function App() {
  const {t} = useTransition()
  return (
    <div className="App"> 
      {/* <DndApp /> */}
      <Routes >
        <Route path='home' element={<PersistentDrawerLeft />}>
        
        </Route>
        <Route path='/map' element={<SimpleMap />} />
        <Route path='/Starred' element={<BasicTable />} />
        <Route path = "/tabs" element={<BasicTabs />} />
        <Route path='/dnd' element={<DragAndDrop />} />
        <Route path='/emoji' element = {<Example /> } />
        <Route path = '/draghoc' element={<SortableList />} />
        <Route path = '/sortableHoc' element={<Fapp />} />
        <Route path = '/transferlist' element={<MainTransIndex />} />
        <Route path = '/stepper' element={<StepperWrapper />} />


        <Route path='/1' element={<AlertDismissibleExample /> } />
      </Routes>
      
        
    
    {/* <Position /> */}
    {/* <AlertDismissibleExample /> */}
    </div>
  );
}

export default App;
