export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At TPG Management, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, phone number, and any other details you provide when contacting us or using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide and improve our services.</li>
        <li>To communicate with you regarding inquiries or updates.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or share your personal information with third parties, except as required by law or to provide our services (e.g., with trusted partners).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:mike@tpgmanagement.net" className="text-blue-500 hover:underline">mike@tpgmanagement.net</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
      </p>
      <address className="mt-4">
        <p>Email: <a href="mailto:mike@tpgmanagement.net" className="text-blue-500 hover:underline">mike@tpgmanagement.net</a></p>
        <p>Phone: <a href="tel:732-978-9390" className="text-blue-500 hover:underline">(732) 978-9390</a></p>
      </address>
    </main>
  );
}