const AboutMe = () => {
  return (
    <div>
      <section class="container mx-auto my-8 p-8 rounded-md">
        <h2 class="text-3xl font-semibold mb-4">About Us</h2>
        <p class="text-gray-700 leading-relaxed">
          Welcome to Meals Mania, where we bring the flavors of the world to
          your plate. Our chefs are passionate about creating a diverse and
          delicious menu that caters to a variety of tastes and preferences.
          Whether you're a fan of Asian, European, or American cuisines, we have
          something special for you.
        </p>
        <p class="text-gray-700 leading-relaxed mt-4">
          At Your Restaurant Name, we believe in using the freshest ingredients
          to ensure that every dish is a culinary delight. Our menu features a
          wide range of appetizers, entrees, and desserts that showcase the rich
          and diverse tapestry of global cuisine.
        </p>
      </section>

      <section class="container mx-auto my-8 p-8 bg-white rounded-md">
        <h2 class="text-3xl font-semibold mb-4">Our Menu</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-200 p-6 rounded-md">
            <h3 class="text-xl font-semibold mb-2">Asian Cuisine</h3>
            <p class="text-gray-700">
              Explore the vibrant and savory flavors of Asian cuisine with our
              delectable dishes inspired by various regions.
            </p>
          </div>

          <div class="bg-gray-200 p-6 rounded-md">
            <h3 class="text-xl font-semibold mb-2">European Delights</h3>
            <p class="text-gray-700">
              Indulge in the elegance of European cuisine, featuring classic
              dishes that capture the essence of the continent.
            </p>
          </div>

          <div class="bg-gray-200 p-6 rounded-md">
            <h3 class="text-xl font-semibold mb-2">American Classics</h3>
            <p class="text-gray-700">
              Savor the taste of home with our American classics, prepared with
              a modern twist to delight your taste buds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
