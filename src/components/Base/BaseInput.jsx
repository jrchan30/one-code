const BaseInput = ({ className, type = 'text', ...props }) => {
  return (
    <input
      className={`border border-blue-300 rounded-full py-2 px-5 text-center ${className}`}
      type={type}
      {...props}
    />
  );
};

export default BaseInput;
