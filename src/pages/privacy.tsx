import { Footer } from '@/components/layout/footer';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including personal information such as
            your name, email address, and payment information when you create an account or make a booking.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services,
            process your transactions, and communicate with you about your bookings and account.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We share your information only with service
            providers necessary to provide our services and as required by law.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You can
            manage your preferences through your account settings or by contacting us.
          </p>

          <h2>6. Cookies</h2>
          <p>
            We use cookies and similar technologies to provide and improve our services and
            understand how you use our platform.
          </p>

          <h2>7. Updates to Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any
            material changes by posting the new policy on our website.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}