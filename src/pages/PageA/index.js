import { Link } from 'react-router-dom';

function PageA() {
  return (
    <>
      <div>PageA</div>
      <div>
        <a href="/2">move to PageB by a tag</a>
        <br />
        <Link to="/2">move to PageB</Link>
      </div>
    </>
  );
}

export default PageA;