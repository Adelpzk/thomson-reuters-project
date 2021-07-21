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
        price
        jurisdiction
        ibsn
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
        price
        jurisdiction
        ibsn
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
  var options = { year: "numeric", month: "short", day: "numeric" };
  var d = new Date(product.publication_date)
  return (
      <div>
          <h1>{ product.title }</h1>
          <img src={product.image} alt="Product image" width="200" height="200"></img>
          <div>
          {parse(product.text)}
          </div>
          <br></br>
          <div>
          <h4>{ "Publication date: " + d.toLocaleDateString("en-US", options) }</h4>
          <h4>{ "IBSN: " + product.ibsn }</h4>
          <h4>{ "Price: $" + product.price }</h4>
          <h4>{ "Author: " + product.author }</h4>
          <h4>{ "Publisher: " + product.publisher }</h4>
          <h4>{ "Jurisdiction: " + product.jurisdiction }</h4>
          </div>
      </div>
  );
}

export default Details;