import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
  buttonText







}: {name: string;price: string;description: string;features: string[];isPopular?: boolean;buttonText: string;}) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border ${isPopular ? 'border-indigo-200 ring-2 ring-indigo-600 ring-opacity-20' : 'border-gray-200'} p-8 flex flex-col h-full relative`} data-id="zgsf4hy7m" data-path="src/components/PricingSection.tsx">
      {isPopular &&
      <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg" data-id="d34tj9gcv" data-path="src/components/PricingSection.tsx">
          POPULAR
        </div>
      }
      <div className="mb-6" data-id="qmcva3k8d" data-path="src/components/PricingSection.tsx">
        <h3 className="text-lg font-semibold mb-1" data-id="6kacqzzre" data-path="src/components/PricingSection.tsx">{name}</h3>
        <div className="flex items-end mb-2" data-id="tkwngf537" data-path="src/components/PricingSection.tsx">
          <span className="text-4xl font-bold" data-id="d00imvd37" data-path="src/components/PricingSection.tsx">{price}</span>
          {price !== "Free" && <span className="text-gray-500 ml-1" data-id="qozrjvhfv" data-path="src/components/PricingSection.tsx">/month</span>}
        </div>
        <p className="text-gray-600 text-sm" data-id="pyaqrd843" data-path="src/components/PricingSection.tsx">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow" data-id="hodnwpgps" data-path="src/components/PricingSection.tsx">
        {features.map((feature, index) =>
        <li key={index} className="flex items-start" data-id="aabm0qib9" data-path="src/components/PricingSection.tsx">
            <div className="mr-2 mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600" data-id="yv52mlp0v" data-path="src/components/PricingSection.tsx">
              <Check className="h-3 w-3" />
            </div>
            <span className="text-gray-600 text-sm" data-id="1jmm95hhf" data-path="src/components/PricingSection.tsx">{feature}</span>
          </li>
        )}
      </ul>
      
      <Button
        variant={isPopular ? "default" : "outline"}
        className={`w-full ${isPopular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}>

        {buttonText}
      </Button>
    </div>);

};

const PricingSection = () => {
  const tiers = [
  {
    name: "Free",
    price: "Free",
    description: "Perfect for students getting started",
    features: [
    "One personal resume link",
    "Basic analytics (view count)",
    "Manual resume updates",
    "Public access only",
    "Standard URL (unilink.app/user-id)"],

    buttonText: "Get Started",
    isPopular: false
  },
  {
    name: "Pro",
    price: "$5",
    description: "For serious job seekers and professionals",
    features: [
    "Multiple resume links",
    "Advanced analytics (views, sources, clicks)",
    "Cloud sync (Google Drive, Dropbox)",
    "Password protection & private links",
    "Custom URL (unilink.app/yourname)",
    "Version history (last 10 versions)",
    "Email notifications for views"],

    buttonText: "Upgrade to Pro",
    isPopular: true
  },
  {
    name: "Team",
    price: "$15",
    description: "For career services and small teams",
    features: [
    "Everything in Pro, plus:",
    "5 team member accounts",
    "Admin dashboard",
    "Branded link experience",
    "Priority support",
    "Unlimited version history",
    "Advanced usage reports"],

    buttonText: "Contact Sales",
    isPopular: false
  }];


  return (
    <section className="py-20 px-4 bg-white" id="pricing" data-id="3xilu83p5" data-path="src/components/PricingSection.tsx">
      <div className="container mx-auto max-w-6xl" data-id="58m2xxbtl" data-path="src/components/PricingSection.tsx">
        <div className="text-center mb-16" data-id="xm3o05bem" data-path="src/components/PricingSection.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="aq1necxlg" data-path="src/components/PricingSection.tsx">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" data-id="26yykhv2l" data-path="src/components/PricingSection.tsx">
            Choose the plan that works for your career stage. No hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="doc8hsidk" data-path="src/components/PricingSection.tsx">
          {tiers.map((tier, index) =>
          <PricingTier
            key={index}
            name={tier.name}
            price={tier.price}
            description={tier.description}
            features={tier.features}
            buttonText={tier.buttonText}
            isPopular={tier.isPopular} />

          )}
        </div>
        
        <div className="mt-12 bg-indigo-50 rounded-xl p-8 text-center" data-id="0qhczsen3" data-path="src/components/PricingSection.tsx">
          <h3 className="text-xl font-semibold mb-2" data-id="70wmy4314" data-path="src/components/PricingSection.tsx">Need a custom solution?</h3>
          <p className="text-gray-600 mb-6" data-id="r4dpe6qar" data-path="src/components/PricingSection.tsx">
            We offer special pricing for universities, career centers, and large organizations.
          </p>
          <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-100">
            Contact our team
          </Button>
        </div>
      </div>
    </section>);

};

export default PricingSection;