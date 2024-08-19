import './App.css';

function App() {
  return (
    <>
      <nav className="navbar bg-body-secondary">
        <div className="container-fluid">
          <h3 className="navbar-brand">Navbar</h3>
          <form className="d-flex" role="search">           
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default App;
