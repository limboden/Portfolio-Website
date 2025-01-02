// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  const styles = {
    everything: {
      backgroundColor: '#3F4F4A'
    },
    header: {
      color: '#83C15D'
    },
    pageContent: {
      padding: '0px 10px'
    },
    footerButtons: {
      margin: '5px'
    }
  }
  return (
    <div style={styles.everything} >
      <header style={styles.header} >
        <h1>Lukas Imboden</h1>
      </header>
      <Nav />
      <main style={styles.pageContent} >
        <Outlet />
      </main>
      <footer>
        <a className="btn btn-primary" target="_blank" style={styles.footerButtons} href="http://www.github.com/limboden" rel="noreferrer">Github</a>
        <a className="btn btn-primary" target="_blank" style={styles.footerButtons} href="https://www.linkedin.com/in/lukas-imboden-06b74a22a/" rel="noreferrer">Linked In</a>
      </footer>
    </div>
  );
}

export default App;
