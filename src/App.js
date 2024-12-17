import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import SiteName from './components/SiteName';
import SocialLink from './components/SocialLink';


function App() {  
  return (
    <>
    <div className='container-fluid upperheader'>
      <SiteName />
      <SocialLink />
    </div>
    <div className='container'>
      
      
    </div>
    </>
  );
}
export default App;