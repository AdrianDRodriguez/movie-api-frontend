export function MoviesHeader() {
  return (
    <header>
      <ul className="nav justify-content-center">
          <li className="nav-item">
              <a className="nav-link active" href="#">Active link</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Disabled link</a>
          </li>
      </ul>
    </header>
  );
}
