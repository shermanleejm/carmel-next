import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <p>header </p>
      <main> {children} </main>
      <Footer />
    </>
  );
}
