const ButtonCon = (val) => {
  const { name, className } = val;
  return (
    <button type="button" value={name} className={className}>{name}</button>
  );
};

export default ButtonCon;
