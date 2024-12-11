import { Footer } from '@/components/layout/footer';

export function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Return & Refund Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2>1. Cancellation Windows</h2>
          <p>
            Each itinerary has specific cancellation windows clearly displayed during booking:
          </p>
          <ul>
            <li>More than 30 days before departure: Full refund minus processing fees</li>
            <li>15-30 days before departure: 50% refund</li>
            <li>Less than 15 days before departure: No refund</li>
          </ul>

          <h2>2. Refund Process</h2>
          <p>
            Refunds are processed within 5-10 business days of approval. The time it takes for
            the refund to appear in your account depends on your payment method and financial institution.
          </p>

          <h2>3. Exceptional Circumstances</h2>
          <p>
            In cases of unexpected events (natural disasters, travel restrictions, etc.), we may
            offer more flexible cancellation terms. Each case is reviewed individually.
          </p>

          <h2>4. Travel Insurance</h2>
          <p>
            We strongly recommend purchasing travel insurance to protect against unexpected
            cancellations. Some premium bookings include basic travel insurance coverage.
          </p>

          <h2>5. Modifications</h2>
          <p>
            Itinerary modifications may be possible subject to availability and may incur
            additional fees. Contact our support team to discuss modification options.
          </p>

          <h2>6. Disputes</h2>
          <p>
            If you have concerns about a refund, please contact our customer support team.
            We aim to resolve all disputes fairly and promptly.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}