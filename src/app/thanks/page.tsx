import Header from "../components/ui/Header";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2 mt-4 mb-8 sm:mt-16 p-4">
          <Header>Thank You for Your Submission!</Header>
          <p className="text-xl max-w-[838px] mb-3 text-blue-950">
            We appreciate you taking the time to reach out to TPG Management. Your submission has been received, and our team is already reviewing it.
          </p>
          <p className="text-xl max-w-[838px] mb-3 text-blue-950">
            We look forward to sharing more about our property management services and what makes us unique. As a management company built by owners and
            investors, we bring a distinct perspective to everything we do. Our owner-first approach ensures that your needs are at the forefront of our
            operations, giving you peace of mind and confidence in your investments.
          </p>
          <p className="text-xl max-w-[838px] mb-3 text-blue-950">
            One of our dedicated team members will be in touch with you shortly to share more about TPG Management. If you have any questions in the
            meantime, please don’t hesitate to call us at 732-978-9390.
          </p>
          <p className="text-xl max-w-[838px] mb-3 text-blue-950">Thank you for trusting TPG Management. We’re excited to possibly work with you!</p>
      </div>
    </main>
  );
}