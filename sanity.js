import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


const client = sanityClient({
  projectId: "h5jm5hlo",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



export default client;





// Rode isso para adicionar um exception para o "localhost 3000 CORS policy"
// sanity cors add http://localhost:3000 (mudar a porta do localhost caso necessário)
