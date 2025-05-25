const StepCard = ({
  number,
  title,
  description




}: {number: string;title: string;description: string;}) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left" data-id="xr4paiaub" data-path="src/components/HowItWorksSection.tsx">
      <div className="bg-indigo-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4" data-id="5babvh5g3" data-path="src/components/HowItWorksSection.tsx">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2" data-id="1dwzqi63n" data-path="src/components/HowItWorksSection.tsx">{title}</h3>
      <p className="text-gray-600" data-id="s8jnaj6b2" data-path="src/components/HowItWorksSection.tsx">{description}</p>
    </div>);

};

const HowItWorksSection = () => {
  const steps = [
  {
    number: "1",
    title: "Upload your resume",
    description: "Upload your PDF resume or connect to Google Drive or Dropbox to automatically sync your latest version."
  },
  {
    number: "2",
    title: "Get your personal link",
    description: "Receive a customized UniLink URL (like unilink.app/yourname) that you can personalize and brand to your identity."
  },
  {
    number: "3",
    title: "Share it anywhere",
    description: "Add your UniLink to LinkedIn, Twitter, email signatures, business cards, and anywhere else you want to be discovered."
  }];


  return (
    <section className="py-20 px-4 bg-indigo-50" id="how-it-works" data-id="lbrx5ankz" data-path="src/components/HowItWorksSection.tsx">
      <div className="container mx-auto max-w-6xl" data-id="tqfs76seu" data-path="src/components/HowItWorksSection.tsx">
        <div className="text-center mb-16" data-id="wd8oe5mbi" data-path="src/components/HowItWorksSection.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="fb918z2m6" data-path="src/components/HowItWorksSection.tsx">
            How UniLink Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" data-id="7zgbpuklu" data-path="src/components/HowItWorksSection.tsx">
            Three simple steps to create your permanent, always-updated resume link.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative" data-id="ms5ctrvtc" data-path="src/components/HowItWorksSection.tsx">
          {steps.map((step, index) =>
          <StepCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description} />

          )}
          
          {/* Connecting Line (visible only on medium screens and above) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-indigo-200 z-0" data-id="tqnz2w8sk" data-path="src/components/HowItWorksSection.tsx">
            <div className="absolute left-1/3 w-1/3 h-full bg-indigo-300" data-id="r4yylsab1" data-path="src/components/HowItWorksSection.tsx"></div>
            <div className="absolute left-2/3 w-1/3 h-full bg-indigo-400" data-id="jplx6hn1q" data-path="src/components/HowItWorksSection.tsx"></div>
          </div>
        </div>
        
        {/* Illustration */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-indigo-100" data-id="j7pa18bmc" data-path="src/components/HowItWorksSection.tsx">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="zy2use2f0" data-path="src/components/HowItWorksSection.tsx">
            <div className="flex flex-col items-center justify-center p-4 border border-dashed border-indigo-200 rounded-lg bg-indigo-50" data-id="xka4hyoyh" data-path="src/components/HowItWorksSection.tsx">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-indigo-500 mb-3" data-id="t122rjfuo" data-path="src/components/HowItWorksSection.tsx">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" data-id="sbdfffyok" data-path="src/components/HowItWorksSection.tsx" />
              </svg>
              <div className="text-center" data-id="yf05vmd93" data-path="src/components/HowItWorksSection.tsx">
                <div className="font-medium" data-id="69hl0lc6s" data-path="src/components/HowItWorksSection.tsx">Upload Resume</div>
                <div className="text-sm text-gray-500" data-id="ar3ky7eas" data-path="src/components/HowItWorksSection.tsx">PDF, DOCX, or Link</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4" data-id="tsq3rtfkk" data-path="src/components/HowItWorksSection.tsx">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-400" data-id="3emy62lg6" data-path="src/components/HowItWorksSection.tsx">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" data-id="4nrw83eu1" data-path="src/components/HowItWorksSection.tsx" />
              </svg>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 border border-indigo-200 rounded-lg bg-white shadow-sm" data-id="q60uvvf6t" data-path="src/components/HowItWorksSection.tsx">
              <div className="w-full mb-2 flex justify-between items-center" data-id="pcxray15u" data-path="src/components/HowItWorksSection.tsx">
                <div className="bg-indigo-600 text-white text-xs px-2 py-1 rounded" data-id="8v6ueoi1d" data-path="src/components/HowItWorksSection.tsx">UniLink</div>
                <div className="text-xs text-gray-500" data-id="ajwj2dpjt" data-path="src/components/HowItWorksSection.tsx">Always up-to-date</div>
              </div>
              <div className="w-full bg-gray-100 p-3 rounded-lg mb-3 text-sm text-center text-gray-700" data-id="8v1a02e2x" data-path="src/components/HowItWorksSection.tsx">
                unilink.app/yourname
              </div>
              <div className="w-full flex justify-between" data-id="r5pohqsze" data-path="src/components/HowItWorksSection.tsx">
                <div className="text-xs text-gray-500" data-id="aljygxycg" data-path="src/components/HowItWorksSection.tsx">Analytics available</div>
                <div className="text-xs text-indigo-600 font-medium" data-id="5t7pcam4h" data-path="src/components/HowItWorksSection.tsx">Copy Link</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HowItWorksSection;