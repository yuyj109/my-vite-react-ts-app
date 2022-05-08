import { Link } from 'react-router-dom';

const GNB = () => {
  return (
    <div className="mx-auto max-w-xl text-center">
      <ul className="flex flex-row gap-2">
        <li className="hover:text-blue-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link to="/entrance">Entrance</Link>
        </li>
      </ul>
    </div>
  );
};

export default GNB;
