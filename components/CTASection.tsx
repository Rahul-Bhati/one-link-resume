import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white" data-id="4rp8rkx0r" data-path="src/components/CTASection.tsx">
      <div className="container mx-auto max-w-6xl text-center" data-id="g5jcd3ae5" data-path="src/components/CTASection.tsx">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-id="ucdpgubqk" data-path="src/components/CTASection.tsx">
          Ready to Streamline Your Resume Sharing?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto" data-id="bfhe9mv28" data-path="src/components/CTASection.tsx">
          Join thousands of students and professionals who've simplified their job application process with UniLink.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="1jfkc4gvd" data-path="src/components/CTASection.tsx">
          <Button
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6 h-auto text-lg">

            Get Started — It's Free
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg">

            See Demo
          </Button>
        </div>
      </div>
    </section>);

};

export default CTASection;