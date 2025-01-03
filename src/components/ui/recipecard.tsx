"use client";
import { useState } from "react";

interface Recipe {
  title: string;
  description: string;
  image: string;
}

const RecipeCard: React.FC<Recipe> = ({ title, description, image }) => {
  const [rating, setRating] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Optionally save to local storage or a backend
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="mt-1 text-gray-600">{description}</p>

      {/* Rating Section */}
      <div className="flex mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer ${
              star <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
            onClick={() => handleRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <p className="mt-1">Rating: {rating}</p>

      {/* Save Recipe Button */}
      <button
        onClick={handleSave}
        className={`mt-2 inline-block ${
          isSaved ? "bg-green-600" : "bg-red-600"
        } hover:bg-opacity-80 text-white font-semibold py-2 px-4 rounded`}
      >
        {isSaved ? "Saved" : "Save Recipe"}
      </button>

      {/* Comments Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Comments</h3>
        <form onSubmit={handleCommentSubmit} className="flex mt-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border p-2 flex-grow"
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            className="ml-2 bg-blue-600 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <ul className="mt-2">
          {comments.map((comment, index) => (
            <li key={index} className="border-b py-1">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
