import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import SiteName from './components/SiteName';
import SocialLink from './components/SocialLink';
import Slider from './components/Slider';
import { lazy, Suspense } from 'react';
const Posts = lazy(() => import('./components/Posts'))


function App() {
  return (
    <>
      <div className='container-fluid upperheader'>
        <SiteName />
        <SocialLink />
      </div>
      <div className='container'>
        <Slider />
        <Suspense fallback="Loading....">
          <Posts />
        </Suspense>

      </div>
    </>
  );
}
export default App;