function Line({ width = "48rem" }) {
  return (
    <div className=" flex items-center gap-[6.25rem]">
      <hr className="w-64 bg-secondary " />
      <hr className={` bg-secondary`} style={{ width }} />
    </div>
  );
}

export default Line;
