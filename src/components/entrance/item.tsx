import { Link } from 'react-router-dom';

const EntranceItem = ({ id }: { id: string }) => {
  return (
    <div className="text-3xl hover:bg-violet-100 hover:text-violet-400">
      <Link to={`/entrance/${id}`}>ITEM: {id}</Link>
    </div>
  );
};

export default EntranceItem;
