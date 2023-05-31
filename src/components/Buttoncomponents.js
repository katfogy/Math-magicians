const ButtonCon = (properties) => {
  const { name, className } = properties;
  return (
    <button type="button" value={name} className={className}>{name}</button>
  );
};

export default ButtonCon;
