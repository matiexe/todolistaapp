export function Container({ children }) {
  return (
    <div className="container pt-5 tex-center">
      <h1 className="fs-3  text-center pb-3"> TODO LIST APP</h1>
      <div className="col-md-6 offset-md-3">{children}</div>
    </div>
  );
}
