const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "6jeuia7j3hmk",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "RVav2ABSWAvesbEvHfN5qwWG8zVeD9i8eQEy0mHl3Qw"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

export default client;
  