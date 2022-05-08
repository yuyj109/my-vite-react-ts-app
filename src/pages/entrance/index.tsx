import EntranceItem from '../../components/entrance/item';

const EntranceIndex = () => (
  <div className="mx-auto max-w-xl space-x-5 text-center">
    <div className="text-8xl text-stone-600">Entrance</div>
    {[1, 2, 3, 4, 5].map((id) => (
      <EntranceItem key={id} id={String(id)} />
    ))}
  </div>
);

export default EntranceIndex;
