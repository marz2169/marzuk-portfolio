export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/marzuk-profile.jpg"
              alt="Marzuk Haider Chowdhury"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-4 text-center">
          Marzuk Haider Chowdhury
        </h1>
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold tracking-wider text-gray-700 mb-2">
            DATA ANALYTICS
          </h2>
          <h2 className="text-xl md:text-2xl font-bold tracking-wider text-gray-700">
            PROFESSIONAL
          </h2>
        </div>

        {/* Navigation Dots */}
        <div className="flex space-x-3 mb-8">
          <a href="#about" className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-600 transition-colors"></a>
          <a href="#experience" className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-600 transition-colors"></a>
          <a href="#projects" className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-600 transition-colors"></a>
          <a href="#contact" className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-600 transition-colors"></a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                  ABOUT
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">HI!</h3>
                  <p className="text-gray-600 leading-relaxed">
                    My analytical mindset, passion for data-driven insights, and 
                    dedication to continuous learning have shaped my career in 
                    Data Analytics and Business Operations.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">CERTIFICATES</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Google Data Analytics Professional Certificate</li>
                    <li>• SQL & Python Programming</li>
                    <li>• Data Visualization & R Programming</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">CONTACT</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>marzukchowdhury23@gmail.com</p>
                    <p>+1 236 866 7081</p>
                    <p>Burnaby, BC, Canada</p>
                  </div>
                </div>
              </div>
              
              <a
                href="/Marzuk Resume 2025.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Resume
              </a>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">SKILLS & EXPERTISE</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I have a strong passion for transforming complex datasets into 
                    actionable business insights that drive strategic decision-making 
                    and operational excellence.
                  </p>
                  <p>
                    My favorite part about data analytics is seeing how statistical 
                    analysis and visualization can reveal hidden patterns that become 
                    the foundation for successful business strategies and growth.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-900">Data Analytics Professional</h5>
                    <p className="text-sm text-gray-600">Google Certified | 2025</p>
                    <p className="text-gray-600 text-sm mt-2">
                      Completed comprehensive program covering data cleaning, visualization, 
                      R programming, SQL, and data-driven decision-making with hands-on projects 
                      and real-world case studies.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Education & Involvement</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-900">British Columbia Institute of Technology (BCIT)</h5>
                    <p className="text-sm text-gray-600">Diploma of Accounting (2023 - 2026)</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Bangladesh Student Association - SFU</h5>
                    <p className="text-sm text-gray-600">Community Engagement Lead (2024)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated About Me Section */}
      <section className="min-h-screen py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              ABOUT ME
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - About Me Content */}
            <div className="space-y-6">
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-2xl font-medium text-gray-800 leading-relaxed">
                  <em className="text-indigo-600">&ldquo;Turning challenges into opportunities—and spreadsheets into stories—is my superpower.&rdquo;</em>
                </p>
                
                <p className="text-lg">
                  I&apos;m <strong className="text-gray-900">Marzuk Haider Chowdhury</strong>, a detail-driven accounting and business enthusiast 
                  with a passion for making every project a success.
                </p>
                
                <p className="text-lg">
                  From optimizing financial workflows to leading dynamic teams and creative campaigns, 
                  I thrive on solving problems and building strong connections. Whether in the boardroom 
                  or on campus, I&apos;m always up for making an impact and keeping things interesting along the way!
                </p>
                
                {/* Personal Philosophy Box */}
                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border border-indigo-100 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">💡</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">What Drives Me</h4>
                      <p className="text-gray-700">
                        The perfect blend of analytical thinking and creative problem-solving, 
                        where every challenge becomes an opportunity to innovate and excel.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Strengths */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Financial Analysis Expert</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Team Leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Creative Problem Solving</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Community Engagement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="relative">
              <div className="relative group">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                
                {/* Main photo container */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/marzuk-profile.jpg"
                    alt="Marzuk Haider Chowdhury - About Me"
                    className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  />
                  
                  {/* Photo overlay info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <h4 className="font-bold text-gray-900">Marzuk Haider Chowdhury</h4>
                      <p className="text-sm text-gray-600">Data Analytics Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Education Section */}
      <section className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              EDUCATION
            </h2>
            <p className="text-xl text-gray-600 mb-6">My Academic Journey & Achievements</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-16">
            
            {/* BCIT - Current */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-semibold">
                      2023 - 2026 • Current
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      British Columbia Institute of Technology
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      Diploma of Accounting
                    </h4>
                    
                    <div className="space-y-4 text-gray-600">
                      <p className="text-lg leading-relaxed">
                        Pursuing a comprehensive accounting program focused on practical business applications, 
                        financial analysis, and modern accounting technologies.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                          <h5 className="font-semibold text-gray-900 mb-2">Key Focus Areas</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Financial Accounting & Reporting</li>
                            <li>• Management Accounting</li>
                            <li>• Business Analytics</li>
                            <li>• Taxation & Auditing</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                          <h5 className="font-semibold text-gray-900 mb-2">Skills Developed</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Advanced Excel & Analytics</li>
                            <li>• QuickBooks & Accounting Software</li>
                            <li>• Financial Statement Analysis</li>
                            <li>• Business Communication</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/BCIT.jpg"
                      alt="BCIT Campus"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <h5 className="font-bold text-gray-900">BCIT</h5>
                        <p className="text-sm text-gray-600">Burnaby Campus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fraser International College */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full text-sm font-semibold">
                      2022 - 2023 • Completed
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Fraser International College
                    </h3>
                    <h4 className="text-xl font-semibold text-purple-600 mb-4">
                      University Transfer Program
                    </h4>
                    
                    <div className="space-y-4 text-gray-600">
                      <p className="text-lg leading-relaxed">
                        Completed foundation courses preparing for university-level studies, 
                        focusing on academic English, mathematics, and business fundamentals.
                      </p>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                        <h5 className="font-semibold text-gray-900 mb-2">Academic Achievements</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Successfully completed university transfer requirements</li>
                          <li>• Strong foundation in business mathematics</li>
                          <li>• Advanced academic English proficiency</li>
                          <li>• Smooth transition to BCIT accounting program</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:order-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-300"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/fraser-international-college.webp"
                      alt="Fraser International College Campus"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <h5 className="font-bold text-gray-900">Fraser International College</h5>
                        <p className="text-sm text-gray-600">SFU Burnaby Campus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mastermind School */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-sm font-semibold">
                      2020 - 2022 • Completed
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Mastermind School
                    </h3>
                    <h4 className="text-xl font-semibold text-amber-600 mb-4">
                      O Levels & A Levels
                    </h4>
                    
                    <div className="space-y-4 text-gray-600">
                      <p className="text-lg leading-relaxed">
                        Completed Cambridge International O Levels and A Levels with focus on 
                        mathematics, sciences, and business studies, building a strong academic foundation.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
                          <h5 className="font-semibold text-gray-900 mb-2">O Levels Subjects</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Mathematics</li>
                            <li>• English Language</li>
                            <li>• Sciences (Physics, Chemistry)</li>
                            <li>• Business Studies</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                          <h5 className="font-semibold text-gray-900 mb-2">A Levels Subjects</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Advanced Mathematics</li>
                            <li>• Business Studies</li>
                            <li>• Accounting</li>
                            <li>• Economics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  {/* Graduation photo showcase */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-white p-2 rounded-xl shadow-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/mastermind-graduation.jpg"
                          alt="Mastermind Graduation Ceremony"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="bg-white/90 backdrop-blur-sm rounded p-2">
                            <p className="text-xs font-semibold text-gray-900">Graduation Day</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-white p-2 rounded-xl shadow-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/mastermind-school.jpg"
                          alt="Mastermind School Campus"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="bg-white/90 backdrop-blur-sm rounded p-2">
                            <p className="text-xs font-semibold text-gray-900">School Campus</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Educational Philosophy */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Philosophy</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  &ldquo;Education is not just about acquiring knowledge—it&apos;s about developing the analytical mindset 
                  and practical skills needed to solve real-world challenges. Each step of my academic journey 
                  has shaped my ability to think critically, work collaboratively, and approach problems with 
                  both creativity and precision.&rdquo;
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center space-x-8 text-sm font-semibold text-gray-600">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-2"></div>
                      Continuous Learning
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></div>
                      Practical Application
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full mr-2"></div>
                      Global Perspective
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>
            <p className="text-xl text-gray-300 mb-6">8+ Years of diverse professional experience across multiple industries</p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-16">
            
            {/* Sales Associate - Go Sales */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-blue-500 rounded-full hidden lg:block"></div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                <div className="lg:text-right space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    2023 - 2024 • Sales Excellence
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      Sales Associate
                    </h3>
                    <h4 className="text-xl font-semibold text-emerald-400 mb-4">
                      Go Sales – Vancouver, BC
                    </h4>
                    
                    <div className="space-y-4 text-gray-300">
                      <p className="text-lg leading-relaxed">
                        Achieved exceptional sales performance in a competitive Vancouver market, 
                        setting company records and mentoring new team members for success.
                      </p>
                      
                      <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <h5 className="font-semibold text-white mb-3">Key Achievements</h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-emerald-400">Record Sales Performance:</strong> Reached record daily sales of <strong className="text-green-300">$4,568</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-emerald-400">Team Development:</strong> Trained and supported new hires for performance gains</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-emerald-400">Customer Relationship Management:</strong> Built lasting client relationships</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 rounded-lg border border-green-700/30">
                        <h5 className="font-semibold text-white mb-2">Technical Skills Used</h5>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Salesforce</span>
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded">HubSpot CRM</span>
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">Pipedrive</span>
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded">MS Excel</span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Google Workspace</span>
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded">Calendly</span>
                          <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded">Aircall</span>
                          <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded">ClickUp</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
                  <div className="relative bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-lg">
                        <img 
                          src="/gO sales.jpg" 
                          alt="Go Sales Logo" 
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      <h5 className="font-bold text-emerald-400 mb-2">Sales Excellence</h5>
                      <p className="text-sm text-gray-400 mb-4">Record-breaking performance in Vancouver market</p>
                      
                      <div className="space-y-3">
                        <div className="bg-slate-700/50 p-3 rounded-lg">
                          <h6 className="text-white font-medium mb-1">Daily Sales Record</h6>
                          <p className="text-2xl font-bold text-green-400">$4,568</p>
                        </div>
                        <div className="bg-slate-700/50 p-3 rounded-lg">
                          <h6 className="text-white font-medium mb-1">Key Strength</h6>
                          <p className="text-xs text-gray-300">Training & mentoring new team members</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-gray-900 hidden lg:block"></div>
              </div>
            </div>

            {/* Customer Service Representative - Compass Group */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                <div className="lg:order-2 space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    2022 - 2024 • Customer Service
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      Customer Service Representative
                    </h3>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">
                      Compass Group Canada – Burnaby, BC: SFU DINING
                    </h4>
                    
                    <div className="space-y-4 text-gray-300">
                      <p className="text-lg leading-relaxed">
                        Delivered exceptional customer service in a high-volume university dining environment, 
                        managing transactions and building strong professional relationships.
                      </p>
                      
                      <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <h5 className="font-semibold text-white mb-3">Key Responsibilities & Achievements</h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-blue-400">High-Volume Service:</strong> Delivered exceptional customer service in university dining environment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-blue-400">POS Management:</strong> Handled POS transactions and addressed customer concerns efficiently</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-blue-400">Operational Excellence:</strong> Ensured cleanliness and operational efficiency</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-blue-400">Professional Relationships:</strong> Developed close relationships with management and team</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-blue-400">Process Improvement:</strong> Contributed to operational improvements</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:order-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-20"></div>
                  <div className="relative bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-lg">
                        <img 
                          src="/compass-group-logo.png" 
                          alt="Compass Group Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h5 className="font-bold text-blue-400 mb-2">SFU Dining Services</h5>
                      <p className="text-sm text-gray-400 mb-4">Compass Group Canada - University Environment</p>
                      
                      <div className="space-y-3">
                        <div className="bg-slate-700/50 p-3 rounded-lg">
                          <h6 className="text-white font-medium mb-1">Environment</h6>
                          <p className="text-xs text-gray-300">High-volume university dining</p>
                        </div>
                        <div className="bg-slate-700/50 p-3 rounded-lg">
                          <h6 className="text-white font-medium mb-1">Key Achievement</h6>
                          <p className="text-xs text-gray-300">Strong professional relationships & operational improvements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 hidden lg:block"></div>
              </div>
            </div>

            {/* Assistant Manager - Hur Nusrat Fashion */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                <div className="lg:text-right space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    2016 - 2022 • Management Role
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      Assistant Manager
                    </h3>
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">
                      <a 
                        href="https://www.facebook.com/HURnusrat" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors duration-300 inline-flex items-center gap-2"
                      >
                        Hur Nusrat Fashion – Dhaka, Bangladesh
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                      </a>
                    </h4>
                    
                    <div className="space-y-4 text-gray-300">
                      <p className="text-lg leading-relaxed">
                        Managed comprehensive retail operations for 6+ years, overseeing staff, inventory, 
                        and customer service in a fast-paced fashion retail environment.
                      </p>
                      
                      <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <h5 className="font-semibold text-white mb-3">Management Responsibilities</h5>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-purple-400">Staff Management:</strong> Managed staff schedules and store operations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-purple-400">Inventory Control:</strong> Oversaw inventory management and stock control</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-purple-400">Financial Management:</strong> Managed cash flow and financial operations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span><strong className="text-purple-400">Customer Service:</strong> Ensured exceptional customer service standards</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-purple-700/30">
                        <h5 className="font-semibold text-white mb-2">Technical Proficiencies</h5>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded">Excel</span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Google Sheets</span>
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded">Square POS</span>
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">Shopify</span>
                          <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded">Canva</span>
                          <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded">Asana</span>
                          <span className="px-2 py-1 bg-teal-500/20 text-teal-300 rounded">TSheets</span>
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded">Loom</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
                  <div className="relative bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2 shadow-lg">
                        <img 
                          src="/hur nusrat logo-01.png" 
                          alt="Hur Nusrat Fashion Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h5 className="font-bold text-purple-400 mb-2">Fashion Retail Management</h5>
                      <p className="text-sm text-gray-400 mb-4">6+ Years of Management Experience</p>
                      
                      <div className="space-y-3">
                        <div className="bg-slate-700/50 p-3 rounded-lg">
                          <h6 className="text-white font-medium mb-1">Duration</h6>
                          <p className="text-lg font-bold text-purple-400">6+ Years</p>
                        </div>
                        <div className="bg-slate-700/50 p-3 rounded-lg">
                          <h6 className="text-white font-medium mb-1">Industry</h6>
                          <p className="text-xs text-gray-300">Fashion Retail & Management</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-900 hidden lg:block"></div>
              </div>
            </div>

          </div>

          {/* Professional Skills Summary */}
          <div className="mt-20">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-slate-800 to-gray-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-center mb-8">Core Professional Competencies</h3>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-emerald-400 mb-2">Sales Excellence</h4>
                    <p className="text-sm text-gray-400">Record-breaking performance, client relationships, team training</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-blue-400 mb-2">Customer Service</h4>
                    <p className="text-sm text-gray-400">High-volume environments, relationship building, problem resolution</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-purple-400 mb-2">Management</h4>
                    <p className="text-sm text-gray-400">Staff scheduling, inventory control, operational efficiency</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-amber-400 mb-2">Technical Skills</h4>
                    <p className="text-sm text-gray-400">CRM systems, POS software, productivity tools, analytics</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-300 italic">
                    &ldquo;8+ years of diverse professional experience across sales, customer service, and management roles, 
                    consistently delivering exceptional results while building strong relationships and driving operational excellence.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">
            FAVOURITE PROJECTS
          </h2>
          
          <div className="space-y-16">
            {/* Project 1 - Google Data Analytics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl font-bold text-blue-600">2025</div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Course Completion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                  <div className="text-sm text-gray-600">Professional Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Hands-on Projects</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                GOOGLE DATA ANALYTICS PROFESSIONAL CERTIFICATE
              </h3>
              
              <p className="text-gray-600 mb-4">
                A comprehensive program covering the fundamentals of data cleaning, 
                data visualization, R programming, SQL, spreadsheets, and data-driven 
                decision-making with real-world case studies.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Project Highlights</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Conducted comprehensive data analysis projects using SQL and R</li>
                  <li>• Created interactive dashboards and visualizations</li>
                  <li>• Demonstrated proficiency in Google Sheets, Excel, and Tableau</li>
                  <li>• Applied statistical analysis to real business scenarios</li>
                </ul>
              </div>

              {/* Certification Display */}
              <div className="mt-8">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Official Certification</h4>
                  <p className="text-gray-600">Verified by Google Career Certificates</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  {/* Certificate Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="text-lg font-bold text-gray-900">Google Data Analytics Professional Certificate</h5>
                        <p className="text-sm text-gray-600">Issued by Google Career Certificates via Coursera</p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                        ✓ Verified
                      </div>
                    </div>
                  </div>
                  
                  {/* Certificate Content */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      
                      {/* Certificate Image - Smaller Size */}
                      <div className="relative group">
                        <a 
                          href="/google-analytics-certificate.png" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block rounded-lg overflow-hidden shadow-md border border-gray-200 cursor-pointer"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/google-analytics-certificate.png"
                            alt="Google Data Analytics Professional Certificate - Marzuk Haider Chowdhury"
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-3 left-3 text-white">
                              <p className="text-xs font-medium">Click to view full certificate</p>
                            </div>
                            <div className="absolute top-3 right-3 text-white">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                      
                      {/* Certificate Details */}
                      <div className="space-y-4">
                        
                        {/* Verification Status */}
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center text-green-600">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Coursera Verified
                          </div>
                          <div className="flex items-center text-blue-600">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Industry Recognized
                          </div>
                        </div>
                        
                        {/* Key Achievements */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h6 className="font-semibold text-gray-900 mb-2 text-sm">Certificate Highlights</h6>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• 100% Course Completion Rate</li>
                            <li>• 8 Professional Courses Completed</li>
                            <li>• 5+ Hands-on Data Projects</li>
                            <li>• Real-world Business Case Studies</li>
                          </ul>
                        </div>
                        
                        {/* Skills Demonstrated */}
                        <div>
                          <h6 className="font-semibold text-gray-900 mb-3 text-sm">Technical Skills Demonstrated</h6>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium text-center">SQL</span>
                            <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium text-center">R Programming</span>
                            <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium text-center">Tableau</span>
                            <span className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium text-center">Data Visualization</span>
                            <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-medium text-center">Google Sheets</span>
                            <span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-xs font-medium text-center">Statistical Analysis</span>
                          </div>
                        </div>
                        
                        {/* View Certificate Button */}
                        <div className="pt-2">
                          <a 
                            href="/google-analytics-certificate.png" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md text-center"
                          >
                            View Full Certificate
                          </a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - Community Engagement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl font-bold text-green-600">2024</div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$3,500</div>
                  <div className="text-sm text-gray-600">Total Funds Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                  <div className="text-sm text-gray-600">Students Engaged</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Event Success Rate</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                BANGLADESH STUDENT ASSOCIATION - SFU
              </h3>
              
              <p className="text-gray-600 mb-4">
                Community Engagement Lead organizing high-impact initiatives involving 
                250+ students and raising significant funds for charitable causes.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Project Highlights</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Led fundraising initiatives for events of communities</li>
                  <li>• Organized and coordinated multiple campus-wide events</li>
                  <li>• Managed event logistics and volunteer coordination</li>
                  <li>• Developed community outreach strategies and partnerships</li>
                </ul>
              </div>

              {/* Image Gallery */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">Event Gallery</h4>
                <div className="grid grid-cols-2 gap-4">
                  {/* Image 1 */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/Screenshot 2025-08-02 181154.png"
                      alt="BSA Event - Community Engagement"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">Community Event</p>
                      </div>
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/Screenshot 2025-08-02 181313.png"
                      alt="BSA Event - Fundraising Initiative"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">Fundraising Event</p>
                      </div>
                    </div>
                  </div>

                  {/* Image 3 */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/Screenshot 2025-08-02 181329.png"
                      alt="BSA Event - Team Collaboration"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">Team Collaboration</p>
                      </div>
                    </div>
                  </div>

                  {/* Image 4 */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/Screenshot 2025-08-02 181529.png"
                      alt="BSA Event - Student Engagement"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">Student Engagement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 - Fit Mirror AI */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl font-bold text-indigo-600">2025</div>
                <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/fitmirror-ai-logo.png"
                    alt="FitMirror AI Logo"
                    className="w-5 h-5 rounded-full"
                  />
                  FitMirror AI
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">AI</div>
                  <div className="text-sm text-gray-600">Style Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3D</div>
                  <div className="text-sm text-gray-600">Virtual Try-On</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">Real-Time</div>
                  <div className="text-sm text-gray-600">Recommendations</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                FIT MIRROR AI - AI STYLIST PLATFORM
                <span className="block text-sm font-medium text-indigo-600 mt-1">Created & Developed by Marzuk Haider Chowdhury</span>
              </h3>
              
              <p className="text-gray-600 mb-6">
                <strong>A self-developed innovative AI-powered styling platform</strong> that I created from concept to deployment. 
                This comprehensive project showcases my ability to build end-to-end AI solutions, providing personalized outfit 
                recommendations based on body type analysis, occasion, preferences, and weather. Features real-time 3D virtual 
                try-on capabilities using advanced machine learning and computer vision technologies that I implemented independently.
              </p>

              {/* Key Features */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  AI-Powered Features
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>Body Type Analysis:</strong> AI analyzes uploaded photos or measurements</li>
                    <li>• <strong>Smart Recommendations:</strong> Context-aware outfit suggestions</li>
                    <li>• <strong>Weather Integration:</strong> Location-based styling advice</li>
                  </ul>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <strong>3D Virtual Try-On:</strong> Real-time outfit visualization</li>
                    <li>• <strong>Color Matching:</strong> Personalized color palette analysis</li>
                    <li>• <strong>Occasion-Based:</strong> Styling for specific events</li>
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Technology Stack
                </h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Frontend</h5>
                    <div className="space-y-1">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">React/Next.js</span>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Three.js</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Backend</h5>
                    <div className="space-y-1">
                      <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Python</span>
                      <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded text-xs">FastAPI</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">AI/ML</h5>
                    <div className="space-y-1">
                      <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">OpenAI</span>
                      <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">TensorFlow</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Tools</h5>
                    <div className="space-y-1">
                      <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">Blender</span>
                      <span className="inline-block px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Gallery */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">Project Showcase</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* AI Interface Image */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/fit-mirror-ai-1.png"
                      alt="Fit Mirror AI - User Interface and Style Analysis"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">AI Style Analysis Interface</p>
                        <p className="text-xs opacity-90">Smart body type detection</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        AI Powered
                      </div>
                    </div>
                  </div>

                  {/* 3D Virtual Try-On */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/fit-mirror-ai-2.png"
                      alt="Fit Mirror AI - 3D Virtual Try-On System"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">3D Virtual Try-On</p>
                        <p className="text-xs opacity-90">Real-time outfit visualization</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        3D Technology
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Engine */}
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/fit-mirror-ai-3.png"
                      alt="Fit Mirror AI - Smart Recommendation Engine"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">Smart Recommendations</p>
                        <p className="text-xs opacity-90">Context-aware suggestions</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        ML Algorithm
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Achievements */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2 text-center">Personal Development Achievements</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <ul className="space-y-1">
                      <li>• <strong>Independently integrated</strong> OpenAI for intelligent style recommendations</li>
                      <li>• <strong>Self-implemented</strong> real-time 3D rendering with Three.js</li>
                      <li>• <strong>Built from scratch</strong> computer vision models for body analysis</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• <strong>Developed end-to-end</strong> weather API integration for contextual styling</li>
                      <li>• <strong>Created responsive</strong> full-stack web application with Next.js</li>
                      <li>• <strong>Designed and implemented</strong> secure user data handling and privacy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-light">
            Let&apos;s
          </h2>
          <h2 className="text-5xl md:text-7xl font-bold">
            create
          </h2>
          <h2 className="text-5xl md:text-7xl font-light">
            together
          </h2>
          
          <div className="pt-8 space-y-4">
            <p className="text-xl text-gray-300">Ready to transform data into insights?</p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a
                href="mailto:marzukchowdhury23@gmail.com"
                className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/marzuk-chowdhury-741a951b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
