const Loading = () => {
  return (
    <>
      <img
        src={require("../../img/loading.gif")}
        alt="Loading..."
        style={{
          width: "200px",
          display: "block",
          margin: "auto",
          marginTop: "100px",
        }}
      />
    </>
  );
};
export default Loading;
