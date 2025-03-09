import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-2 mt-4 mb-8 sm:mt-16 p-4 pb-0">
      <Header>Vendor Information</Header>
      <a href={"https://forms.gle/AqpyBjTTTWyq46j29"} className="flex w-full flex-col justify-center items-center">
        <Button>Submit an Invoice</Button>
      </a>
      <Header className="mt-6" variant="blue">Required Additional Insured Information</Header>
      <div className="w-full max-w-[500px] text-left flex items-start flex-col justify-start">
        <p className="text-xl max-w-[838px] text-blue-950">
          <strong>Company Name:</strong> TPG Management LLC{" "}
        </p>
        <p className="text-xl max-w-[838px] mb-4 text-blue-950">
          <strong>Address:</strong> PO Box 212 Holmdel, NJ 07733
        </p>
        <p className="text-xl max-w-[838px] mb-4 text-blue-950">
          <strong>Forward copy of Certificate of Insurance:</strong>
        </p>
        <p className="text-xl max-w-[838px] mb-4 text-blue-950">
          Once the endorsement is completed, please provide a Certificate of Insurance (COI) showing TPG Management LLC as an additional insured. The
          COI should be emailed to julian@tpgcompanies.net or mailed to the address listed below :
        </p>
        <p className="text-xl max-w-[838px] text-blue-950">TPG Management LLC</p>
        <p className="text-xl max-w-[838px] text-blue-950">PO BOX 212</p>
        <p className="text-xl max-w-[838px] text-blue-950">Holmdel, NJ 07733</p>
      </div>
    </main>
  );
}
