import MapContainerComponent from './components/MapContainerComponent';

import cl from './App.module.scss'
import TableComponent from './components/TableComponent';
function App() {
  return (
    <div className="App">
        <div className={cl.windowWrapper}>
          <div className={cl.window}>
              <div className={cl.mapWrapper}>
                <MapContainerComponent/>
              </div>
              <div className={cl.listWrapper}>
              <TableComponent/>
              </div> 
          </div>
        </div>
    </div>
  );
}

export default App;
