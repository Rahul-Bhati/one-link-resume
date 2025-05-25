const FeatureCard = ({
  icon,
  title,
  description




}: {icon: React.ReactNode;title: string;description: string;}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100" data-id="r7t38aqms" data-path="src/components/FeaturesSection.tsx">
      <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-indigo-600" data-id="zjaqeafew" data-path="src/components/FeaturesSection.tsx">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2" data-id="a8pw250mr" data-path="src/components/FeaturesSection.tsx">{title}</h3>
      <p className="text-gray-600" data-id="f7lk7k0dr" data-path="src/components/FeaturesSection.tsx">{description}</p>
    </div>);

};

const FeaturesSection = () => {
  const features = [
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" data-id="3xz7ksx4p" data-path="src/components/FeaturesSection.tsx">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" data-id="tbvditr4i" data-path="src/components/FeaturesSection.tsx" />
        </svg>,

    title: "Single Link, Always Up-to-Date",
    description: "Automatically reflects the latest uploaded resume or portfolio. No need to reshare when you make updates."
  },
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" data-id="wpsng1zdv" data-path="src/components/FeaturesSection.tsx">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" data-id="v6u529bqw" data-path="src/components/FeaturesSection.tsx" />
        </svg>,

    title: "Customizable Personal URLs",
    description: "Create your branded presence with a personalized URL like unilink.app/yourname that's easy to remember."
  },
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" data-id="bwq9d1n93" data-path="src/components/FeaturesSection.tsx">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" data-id="1h2vw2zri" data-path="src/components/FeaturesSection.tsx" />
        </svg>,

    title: "Analytics",
    description: "See how many views your resume got and from where. Track engagement and optimize your job application strategy."
  },
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" data-id="3aljm6t2b" data-path="src/components/FeaturesSection.tsx">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" data-id="urt27mmc5" data-path="src/components/FeaturesSection.tsx" />
        </svg>,

    title: "Access Control",
    description: "Make your resume public, private, or password-protected. You control who sees your information."
  },
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" data-id="hxavzhg64" data-path="src/components/FeaturesSection.tsx">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" data-id="iei9mx93u" data-path="src/components/FeaturesSection.tsx" />
        </svg>,

    title: "Cloud Sync",
    description: "Update via Google Drive, Dropbox, or upload manually. Seamlessly integrate with your existing workflow."
  },
  {
    icon:
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" data-id="mvr2diz3u" data-path="src/components/FeaturesSection.tsx">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" data-id="msx6nzrlc" data-path="src/components/FeaturesSection.tsx" />
        </svg>,

    title: "Version History",
    description: "Access or revert to previous versions of your resume. Tailor versions for different job applications."
  }];


  return (
    <section className="py-20 px-4 bg-white" id="features" data-id="pznrtpl8g" data-path="src/components/FeaturesSection.tsx">
      <div className="container mx-auto max-w-6xl" data-id="ute2dnnuj" data-path="src/components/FeaturesSection.tsx">
        <div className="text-center mb-16" data-id="mjb6gv8wu" data-path="src/components/FeaturesSection.tsx">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="eag104ep2" data-path="src/components/FeaturesSection.tsx">
            One Smart Link For All Your Career Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" data-id="ylyk3fqf3" data-path="src/components/FeaturesSection.tsx">
            UniLink helps you share your professional story more effectively with features designed for the modern job seeker.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="j03crvtza" data-path="src/components/FeaturesSection.tsx">
          {features.map((feature, index) =>
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description} />

          )}
        </div>
      </div>
    </section>);

};

export default FeaturesSection;