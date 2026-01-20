export default function Button({ children, ...props }) {
  return (
    <button className="btn btn-primary rounded-pill" {...props}>
      {children}
    </button>
  );
}
