export const getStaticPaths = aysnc () => {
    const GQL_API = 'http://localhost:3030';
  const GQL_QUERY = `
    query($id: Int){
      products(id: Int){
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
      query: GQL_QUERY,
      variables,
    }),
  });
  const data = await res.json()

    const paths = data.map(product => {
        return {
            parms: { id: product.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const GQL_API = 'http://localhost:3030';
  const GQL_QUERY = `
    query($id: Int){
      products(id: Int){
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
    const id = context.params.id;
    const res = await fetch('http://localhost:3030' + id ); //fix
    const data = await res.json();
    
    return {
        props: { product: data }
    }
}

const Details = ({ product }) => {
    return (
        <div>
            <h1>{ product.title }</h1>
            <p> { product.text }</p>
            <h1>Details Page</h1>
        </div>
    );
}

export default Details;