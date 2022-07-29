export const MappedDetails = ({ label, text }) => {
  return (
    <div className="flex">
      <div className="mr-2 font-semibold">{label}:</div>
      <div className="font-light">{text}</div>
    </div>
  );
};
