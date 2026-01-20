export default function RecipeComments({ comments }) {
  return (
    <div className="mt-4">
      <h5>Comments</h5>
      {comments.map((c) => (
        <div key={c.id} className="border-bottom py-2">
          <strong>{c.user}</strong>
          <p className="mb-1">{c.comment}</p>
        </div>
      ))}
    </div>
  );
}
