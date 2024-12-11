import { Footer } from '@/components/layout/footer';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using TravelGo's services, you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. User Accounts</h2>
          <p>
            You must provide accurate and complete information when creating an account.
            You are responsible for maintaining the security of your account and password.
          </p>

          <h2>3. Booking and Payments</h2>
          <p>
            All bookings are subject to availability and confirmation. Prices are in USD unless
            otherwise stated. Payment processing is handled securely through our payment partners.
          </p>

          <h2>4. Cancellations and Refunds</h2>
          <p>
            Cancellation policies vary by itinerary and are clearly stated at the time of booking.
            Refunds are processed according to the specific terms of each booking.
          </p>

          <h2>5. User Content</h2>
          <p>
            By submitting content to TravelGo, you grant us a worldwide, non-exclusive license to use,
            reproduce, and distribute that content.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            TravelGo is not liable for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of our services.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services
            constitutes acceptance of any changes.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}