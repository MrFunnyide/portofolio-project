const Button = (props) => {
  const { children, className } = props;
  return <button className={`p-3 ${className}`}> {children}</button>;
};

export default Button;
