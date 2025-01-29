const Image = ({ src, alt, className, ...props }) => {
  return (
    <div className="">
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto max-w-full object-cover  ${className}`}
        {...props}
      />
    </div>
  );
};

export default Image;
