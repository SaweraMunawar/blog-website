
import Head from 'next/head';
import RecipeCard from '@/components/ui/recipecard';

const Blog: React.FC = () => {
  const recipes = [
    {
      title: 'Margherita Pizza',
      description: 'A classic pizza with fresh mozzarella, tomatoes, and basil.',
      image: 'Margherita-Pizza.jpg',
    },
    {
      title: 'Pepperoni Pizza',
      description: 'A favorite with spicy pepperoni and gooey cheese.',
      image: 'Pepperoni-Pizza.jpg', 
    },
    {
      title: 'Veggie Pizza',
      description: 'Loaded with fresh vegetables and a delicious tomato sauce.',
      image: 'Veggie-Pizza.jpg',
    },

  ];

  return (
    <div className="bg-orange-200 min-h-screen p-8">
      <Head>
        <title>Pizza Blog - Recipes</title>
        <meta name="description" content="Explore delicious pizza recipes!" />
      </Head>

      <h1 className="text-4xl font-bold text-center mb-8">Pizza Recipes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} title={recipe.title} description={recipe.description} image={recipe.image} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
