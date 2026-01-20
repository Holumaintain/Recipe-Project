export default function RecipeRating({ rating }) {
  return (
    <div className="mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`ci-star${star <= rating ? "-filled text-warning" : ""}`}
        ></i>
      ))}
    </div>

  );
}
