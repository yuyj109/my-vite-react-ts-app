const EntranceDetail = ({ id }: { id: string }) => {
  return (
    <div className="text-3xl hover:bg-violet-100 hover:text-violet-400">
      ID: {id}
    </div>
  );
};

export default EntranceDetail;
