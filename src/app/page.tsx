import Header from "../components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <iframe
        src="/path/to/your-file.pdf"
        width="100%"
        height="800px"
        style={{ border: "none" }}
        title="Embedded PDF"
      ></iframe>
    </>
  );
}
