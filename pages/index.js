import Link from "next/link";
import Header from "../components/header";

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/about">
        <h1>Hola mundo</h1>
      </Link>
    </section>
  </main>
);