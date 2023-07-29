import './App.css';
import Sidebar from './components/slidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import Widgets from './components/widget/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      
    {/*タイムライン  */}
<Timeline/>

    {/* Widget */}
    <Widgets/>
      </div>
  );
}

export default App;
