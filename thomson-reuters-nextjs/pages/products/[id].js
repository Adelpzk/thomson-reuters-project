import parse from 'html-react-parser';

export const getStaticPaths = async () => {
    const GQL_API = 'http://localhost:3030';
  const GQL_QUERY = `
    query{
      products{
        title
        author
        publisher
        publication_date
        image
        text
        id
      }
    }
  `
  const res = await fetch(GQL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GQL_QUERY
    }),
  });
  const data = await res.json()
    console.log(data);
    const paths = data.data.products.map(product => {
        return {
            params: { id: product.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const GQL_API = 'http://localhost:3030';
  const GQL_QUERY = `
    query{
      products(id: ${id}){
        title
        author
        publisher
        publication_date
        image
        text
        id
      }
    }
  `
 
   
    const res = await fetch(GQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GQL_QUERY
      }),
    });
    const data = await res.json();
    
    return {
        props: { product: data.data.products[0] }
    }
}

const Details = ({ product }) => {
    return (
        <div>
          <h1>Details Page</h1>
            <h1>{ product.title }</h1>
            <img src={product.image} alt="Product image" width="200" height="200"></img>
            <div>
            {parse(product.text)}
            </div>
            
        </div>
    );
}

export default Details;