const Image = ({ src, alt, className, ...props }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={`max-w-full  ${className}`}
        {...props}
      />
    </div>
  );
};

export default Image;
