import { Header } from '@/components/layout/header';
import { HomePage } from '@/pages/home';
import { ItinerariesPage } from '@/pages/itineraries';
import { ItineraryDetailPage } from '@/pages/itinerary-detail';
import { FlightsPage } from '@/pages/flights';
import { HotelsPage } from '@/pages/hotels';
import { TransportationPage } from '@/pages/transportation';
import { InsurancePage } from '@/pages/insurance';
import { CreatorOnboardingPage } from '@/pages/creator-onboarding';
import { CreatorSignupPage } from '@/pages/creator-signup';
import { CreatorSignupSuccessPage } from '@/pages/creator-signup-success';
import { CreatorDashboardPage } from '@/pages/creator-dashboard';
import { CreatorNewItineraryPage } from '@/pages/creator-new-itinerary';
import { CreatorSettingsPage } from '@/pages/creator-settings';
import { CreatorLearnMorePage } from '@/pages/creator-learn-more';
import { UserDashboardPage } from '@/pages/user-dashboard';
import { SettingsPage } from '@/pages/settings';
import { SignInPage } from '@/pages/sign-in';
import { SignUpPage } from '@/pages/sign-up';
import { TermsPage } from '@/pages/terms';
import { PrivacyPage } from '@/pages/privacy';
import { ReturnsPage } from '@/pages/returns';
import { FAQPage } from '@/pages/faq';
import { TripDetailsPage } from '@/pages/trip-details';
import { AdminDashboardPage } from '@/pages/admin/dashboard';
import { RolesPage } from '@/pages/admin/roles';
import { SystemSettingsPage } from '@/pages/admin/settings';
import { SecurityPage } from '@/pages/admin/security';
import { AffiliatesPage } from '@/pages/admin/affiliates';
import { SupportPage } from '@/pages/admin/support';
import { PaymentsPage } from '@/pages/admin/payments';
import { MarketingPage } from '@/pages/admin/marketing';
import { ContentPage } from '@/pages/admin/content';
import { Chatbot } from '@/components/chat/chatbot';
import { AuthProvider } from '@/context/auth-context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<UserDashboardPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/trips/:id" element={<TripDetailsPage />} />
              <Route path="/itineraries" element={<ItinerariesPage />} />
              <Route path="/itineraries/:id" element={<ItineraryDetailPage />} />
              <Route path="/flights" element={<FlightsPage />} />
              <Route path="/hotels" element={<HotelsPage />} />
              <Route path="/transportation" element={<TransportationPage />} />
              <Route path="/insurance" element={<InsurancePage />} />
              <Route path="/for-creators" element={<CreatorOnboardingPage />} />
              <Route path="/creator-learn-more" element={<CreatorLearnMorePage />} />
              <Route path="/creator-signup" element={<CreatorSignupPage />} />
              <Route path="/creator-signup-success" element={<CreatorSignupSuccessPage />} />
              <Route path="/creator-dashboard" element={<CreatorDashboardPage />} />
              <Route path="/creator/new-itinerary" element={<CreatorNewItineraryPage />} />
              <Route path="/creator/settings" element={<CreatorSettingsPage />} />
              <Route path="/login" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/returns" element={<ReturnsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/admin/roles" element={<RolesPage />} />
              <Route path="/admin/settings" element={<SystemSettingsPage />} />
              <Route path="/admin/security" element={<SecurityPage />} />
              <Route path="/admin/affiliates" element={<AffiliatesPage />} />
              <Route path="/admin/support" element={<SupportPage />} />
              <Route path="/admin/payments" element={<PaymentsPage />} />
              <Route path="/admin/marketing" element={<MarketingPage />} />
              <Route path="/admin/content" element={<ContentPage />} />
            </Routes>
          </main>
          <Chatbot />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}