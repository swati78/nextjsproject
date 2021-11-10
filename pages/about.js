import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <h2>About page</h2>
      <p>
        Why do we use it? It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using Content here, content here,
        making it look like readable English. Many desktop publishing packages
        and web page editors now use Lorem Ipsum as their default model text,
        and a search for lorem ipsum will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <Image src="/images/img2.jpg" height={350} width={550}></Image>
    </div>
  );
}
