import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export const getStaticPaths = async () => {
  const GQL_API = `http://frp.vlb.mybluehost.me/graphql`;
  const GQL_QUERY = `
    query{
      posts{
        nodes {
          postId
          title
        }
      }
    }
    `;
  const res = await fetch(GQL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GQL_QUERY,
    }),
  });

  const result = await res.json();

  const paths = result.data.posts.nodes.map((blog) => {
    //console.log(typeof blog.postId);
    return {
      params: {
        title: blog.title.toLowerCase().replace(/\s+/g, "-").toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  //console.log(context.params.title.replace(/-+/g, " "));
  const GQL_API = `http://frp.vlb.mybluehost.me/graphql`;
  const GQL_QUERY = `
  query{
    posts(where: {title:"${context.params.title.replace(/-+/g, " ")}"}){
      nodes {
        postId
        title
        author {
          node {
            name
          }
        }
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        tags {
          nodes {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
    `;
  //console.log(GQL_QUERY);
  const res = await fetch(GQL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GQL_QUERY,
    }),
  });

  const result = await res.json();
  //console.log(result);

  return {
    props: { blog: result.data.posts.nodes[0] },
  };
};

export default function Details({ blog }) {
  var d = new Date(blog.date);
  var options = { year: "numeric", month: "short", day: "numeric" };

  return (
    <>
      <div className="blog">
        <div className="blog-title">
          <img src={blog.featuredImage.node.sourceUrl}></img>
          {blog.categories.nodes.map((category) => (
            <p>{category.name}</p>
          ))}
          <h2> {blog.title} </h2>
          <p>{blog.author.node.name}</p>
          <p>{d.toLocaleDateString("en-US", options)}</p>
        </div>
        <div className="blog-content">{parse(blog.content)}</div>
        <ul className="blog-tags">
          {blog.tags.nodes.map((tag) => (
            <li>{tag.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
