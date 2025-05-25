import { Avatar } from "@/components/ui/avatar";

const TestimonialCard = ({
  quote,
  name,
  school,
  avatarSeed





}: {quote: string;name: string;school: string;avatarSeed: string;}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full" data-id="65baratk9" data-path="src/components/TestimonialsSection.tsx">
      <div className="mb-6 flex-grow" data-id="11scu88bm" data-path="src/components/TestimonialsSection.tsx">
        <svg
          className="w-8 h-8 text-indigo-200 mb-4"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true" data-id="fxx06lzdt" data-path="src/components/TestimonialsSection.tsx">

          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" data-id="nmsrt6zpb" data-path="src/components/TestimonialsSection.tsx" />
        </svg>
        <p className="text-gray-700" data-id="na4fltbmz" data-path="src/components/TestimonialsSection.tsx">{quote}</p>
      </div>
      <div className="flex items-center mt-4" data-id="wxu4jvyb9" data-path="src/components/TestimonialsSection.tsx">
        <Avatar className="h-10 w-10 mr-3">
          <img
            src={`https://api.dicebear.com/7.x/micah/svg?seed=${avatarSeed}`}
            alt={name}
            className="h-full w-full object-cover" data-id="f29jh0sxz" data-path="src/components/TestimonialsSection.tsx" />

        </Avatar>
        <div data-id="mzfahw80t" data-path="src/components/TestimonialsSection.tsx">
          <p className="font-medium text-gray-900" data-id="fa83eos7m" data-path="src/components/TestimonialsSection.tsx">{name}</p>
          <p className="text-sm text-gray-500" data-id="vkdqinwby" data-path="src/components/TestimonialsSection.tsx">{school}</p>
        </div>
      </div>
    </div>);

};

const TestimonialsSection = () => {
  const testimonials = [
  {
    quote: "I stopped worrying about sending the wrong resume. UniLink just works.",
    name: "Aayush Kumar",
    school: "IIT Delhi",
    avatarSeed: "aayush"
  },
  {
    quote: "My application callbacks increased by 40% after I started using UniLink. Recruiters love the analytics feature.",
    name: "Sarah Chen",
    school: "Stanford University",
    avatarSeed: "sarah"
  },
  {
    quote: "As someone applying to multiple roles, the version history feature is a game-changer. I can tailor my resume for each company.",
    name: "Michael Okonkwo",
    school: "MIT",
    avatarSeed: "michael"
  }];


  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50" id="testimonials" data-id="l6gzjpc5s" data-path="src/components/TestimonialsSection.tsx">
      <div className="container mx-auto max-w-6xl" data-id="4xe966q0o" data-path="src/components/TestimonialsSection.tsx">
        <div className="text-center mb-16" data-id="uddeoutux" data-path="src/components/TestimonialsSection.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="rxrfl8ynl" data-path="src/components/TestimonialsSection.tsx">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" data-id="299oe6nak" data-path="src/components/TestimonialsSection.tsx">
            Join thousands of students and professionals who've simplified their job application process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="uoovrnpau" data-path="src/components/TestimonialsSection.tsx">
          {testimonials.map((testimonial, index) =>
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            school={testimonial.school}
            avatarSeed={testimonial.avatarSeed} />

          )}
        </div>
        
        <div className="mt-16 text-center" data-id="cmmn9cp46" data-path="src/components/TestimonialsSection.tsx">
          <p className="text-gray-500 mb-2" data-id="ts1uidnlb" data-path="src/components/TestimonialsSection.tsx">Trusted by students from top universities worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70" data-id="b3es6m39u" data-path="src/components/TestimonialsSection.tsx">
            <div className="text-xl font-bold text-gray-400" data-id="g04k4iznp" data-path="src/components/TestimonialsSection.tsx">STANFORD</div>
            <div className="text-xl font-bold text-gray-400" data-id="af9xn59s4" data-path="src/components/TestimonialsSection.tsx">MIT</div>
            <div className="text-xl font-bold text-gray-400" data-id="fc46micza" data-path="src/components/TestimonialsSection.tsx">OXFORD</div>
            <div className="text-xl font-bold text-gray-400" data-id="1dbemugfq" data-path="src/components/TestimonialsSection.tsx">IIT</div>
            <div className="text-xl font-bold text-gray-400" data-id="y4gc6lcfl" data-path="src/components/TestimonialsSection.tsx">NUS</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;