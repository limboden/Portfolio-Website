// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  const styles = {
    footerButtons: {
      margin: '5px'
    }
  }
  return (
    <>
      <header>
        <h1>Lukas Imboden</h1>
      </header>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <footer>
        <a class="btn btn-primary" target="_blank" style={styles.footerButtons} href="http://www.github.com/limboden">Github</a>
        <a class="btn btn-primary" target="_blank" style={styles.footerButtons} href="https://www.linkedin.com/in/lukas-imboden-06b74a22a/">Linked In</a>
      </footer>
    </>
  );
}

export default App;
