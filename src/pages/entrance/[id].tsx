import { useParams } from 'react-router-dom';
import EntranceDetail from '../../components/entrance/detail';

const EntranceId = () => {
  const { id } = useParams();
  if (!id) return null;
  return (
    <div className="mx-auto max-w-xl text-center">
      <div className="text-8xl text-stone-600">Detail</div>
      <EntranceDetail id={id} />
    </div>
  );
};

export default EntranceId;
