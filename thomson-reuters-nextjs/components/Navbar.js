import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div>
        <Image
          src="/tr_logo.png"
          className="app-logo"
          height={100}
          width={427}
        />
        <h1 className="app-title">Thomson Reuters GraphQL POC NextJS App</h1>
        <ul className="nav-pages">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
