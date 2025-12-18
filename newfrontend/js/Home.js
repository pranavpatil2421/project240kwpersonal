// filepath: newfrontend/js/Home.js
function Home() {
  const [dashboardData, setDashboardData] = React.useState({
    gauge: 99,
    numbers: [73, 27, 35, 119, 67, 157],
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDashboardData((prev) => ({
        ...prev,
        numbers: prev.numbers.map(() => Math.floor(Math.random() * 200)),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Emoji icon replacements
  const TrendingUp = () => <span style={{fontSize: "1.5em"}}>📈</span>;
  const Zap = () => <span style={{fontSize: "1.5em"}}>⚡</span>;
  const Clock = () => <span style={{fontSize: "1.5em"}}>⏰</span>;
  const Sparkles = () => <span style={{fontSize: "1.2em"}}>✨</span>;
  const CheckCircle2 = () => <span style={{fontSize: "1.2em"}}>✔️</span>;
  const Shield = () => <span style={{fontSize: "1.5em"}}>🛡️</span>;
  const Target = () => <span style={{fontSize: "1.5em"}}>🎯</span>;
  const BarChart3 = () => <span style={{fontSize: "1.5em"}}>📊</span>;
  const Users = () => <span style={{fontSize: "1.5em"}}>👥</span>;
  const Award = () => <span style={{fontSize: "1.5em"}}>🏆</span>;
  const Globe = () => <span style={{fontSize: "1.5em"}}>🌎</span>;
  const FileCheck = () => <span style={{fontSize: "1.5em"}}>📄</span>;
  const Cpu = () => <span style={{fontSize: "1.5em"}}>🖥️</span>;
  const TestTube = () => <span style={{fontSize: "1.5em"}}>🧪</span>;
  const ArrowRight = () => <span style={{fontSize: "1.2em"}}>→</span>;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100">
              <Sparkles />
              <span className="text-xs font-medium text-gray-700">AI-Powered Testing Platform</span>
            </div>
            {/* Headline */}
            <h1 className="text-3xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Accelerate{' '}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                Electronic Product
              </span>
              <br />
              Testing, Simulation, and Certification
            </h1>
            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed max-w-xl">
              An integrated AI platform for design verification, simulation, product debugging, and certification management — all in one place.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="/product-details" className="w-full sm:w-auto">
                <button className="group relative w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all text-sm min-h-[44px]">
                  <span className="flex items-center gap-2">
                    Begin with Your Product
                    <ArrowRight />
                  </span>
                </button>
              </a>
              <a href="/services" className="w-full sm:w-auto">
                <button className="w-full px-6 py-3 border-2 border-blue-600 bg-white text-blue-600 rounded-lg font-semibold shadow-lg text-sm min-h-[44px]">
                  Explore Services
                </button>
              </a>
            </div>
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              { [
                { icon: TrendingUp, value: '99%', label: 'Accuracy' },
                { icon: Zap, value: '10x', label: 'Faster' },
                { icon: Clock, value: '24/7', label: 'Support' },
              ].map((stat, idx) => (
                <div key={idx} className="group relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <stat.icon />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              )) }
            </div>
          </div>
          {/* Right Side - Dashboard Graphic */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <span className="text-white font-semibold">QE47 Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs text-gray-400">Live</span>
                </div>
              </div>
              {/* Dashboard Content */}
              <div className="space-y-6">
                {/* Top Metrics Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="bg-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-2xl">{dashboardData.gauge}</span>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 flex-1 border border-gray-700/50">
                    <div className="text-white text-sm mb-3 font-semibold flex items-center gap-2">
                      <CheckCircle2 />
                      Status Items
                    </div>
                    <div className="space-y-2">
                      {['06%', '75%', '25%'].map((percent, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className="text-gray-300 flex items-center gap-2">
                            <CheckCircle2 />
                            Item {i + 1}
                          </span>
                          <span className="text-blue-400 font-semibold">{percent}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-600 rounded-2xl w-20 h-20 flex items-center justify-center shadow-xl">
                    <CheckCircle2 style={{fontSize: "2em"}} />
                  </div>
                </div>
                {/* Numbers Row */}
                <div className="flex justify-around items-center py-4 bg-gray-800 rounded-xl border border-gray-700/30">
                  {dashboardData.numbers.map((num, i) => (
                    <span key={i} className="text-2xl font-bold text-blue-400">{num}</span>
                  ))}
                </div>
                {/* Charts Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-white text-sm mb-3 font-semibold">Total Values</div>
                    <div className="flex items-end space-x-1.5 h-20">
                      {[8, 12, 6, 10, 14, 9].map((height, i) => (
                        <div key={i} style={{height: `${height * 5}px`}} className="bg-blue-600 w-full rounded-t-lg shadow-lg" />
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700/50">
                    <div className="text-white text-sm mb-3 font-semibold">Error Type</div>
                    <div className="h-20 flex items-end">
                      <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <polyline
                          points="0,35 15,30 30,25 45,20 60,15 75,10 90,8 100,5"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Bottom Row */}
                <div className="grid grid-cols-3 gap-4">
                  {{
                    { title: 'Simulation Status', type: 'wave' },
                    { title: 'Hardware Type', type: 'bars' },
                    { title: 'Low-High Ratio', type: 'bar' },
                  }.map((chart, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700/50">
                      <div className="text-white text-xs mb-3 font-semibold">{chart.title}</div>
                      <div className="h-16">
                        {chart.type === 'wave' && (
                          <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <path
                              d="M 0,15 Q 25,5 50,15 T 100,15"
                              fill="none"
                              stroke="#3B82F6"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        {chart.type === 'bars' && (
                          <div className="flex items-end space-x-1.5 h-full">
                            {[8, 6, 10, 7].map((h, i) => (
                              <div key={i} style={{height: `${h * 5}px`}} className="bg-blue-600 w-full rounded-t-lg shadow-md" />
                            ))}
                          </div>
                        )}
                        {chart.type === 'bar' && (
                          <div style={{width: '100%'}} className="bg-blue-600 h-full rounded-lg shadow-lg" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Product Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing, simulation, and certification services powered by cutting-edge technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {{
              {
                icon: TestTube,
                title: 'Advanced Testing',
                description: 'Comprehensive testing suite covering EMC, RF, Safety, and Environmental testing with real-time analysis and automated reporting.',
              },
              {
                icon: Cpu,
                title: 'AI-Powered Simulation',
                description: 'Predictive simulation technology that identifies potential issues before physical testing, saving time and resources.',
              },
              {
                icon: Shield,
                title: 'Certification Management',
                description: 'Streamlined certification process with compliance tracking, documentation management, and automated renewal reminders.',
              },
              {
                icon: Target,
                title: 'Design Verification',
                description: 'Automated design validation and quality assurance to ensure your product meets all specifications and standards.',
              },
              {
                icon: BarChart3,
                title: 'Real-Time Analytics',
                description: 'Comprehensive dashboards with live metrics, performance tracking, and actionable insights for data-driven decisions.',
              },
              {
                icon: FileCheck,
                title: 'Complete Documentation',
                description: 'Automated report generation, test documentation, and compliance certificates with professional formatting.',
              },
            }.map((feature, index) => (
              <div key={index} className="group relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <feature.icon />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              How It <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto px-4">
              Simple, streamlined process from submission to certification
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {{
              { step: '01', title: 'Submit Product', description: 'Upload your product details and specifications through our secure portal', icon: FileCheck },
              { step: '02', title: 'Analysis & Planning', description: 'Our AI analyzes your requirements and creates a comprehensive test plan', icon: Target },
              { step: '03', title: 'Testing & Simulation', description: 'Automated testing and simulation processes run with real-time monitoring', icon: TestTube },
              { step: '04', title: 'Certification & Reports', description: 'Receive detailed reports, certificates, and compliance documentation', icon: Award },
            }.map((step, index) => (
              <div key={index} className="relative group h-full flex">
                <div className="relative text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 w-full flex flex-col h-full">
                  <div className="relative mb-6 flex justify-center flex-shrink-0">
                    <div className="relative w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <step.icon />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-xl border-4 border-white z-10">
                      <span className="text-sm">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {{
              { icon: Users, value: '500+', label: 'Satisfied Clients' },
              { icon: TestTube, value: '10K+', label: 'Tests Completed' },
              { icon: Award, value: '99.9%', label: 'Success Rate' },
              { icon: Globe, value: '50+', label: 'Countries Served' },
            }.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-xl flex items-center justify-center">
                  <stat.icon />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Product Development?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join hundreds of companies using our platform to streamline testing, simulation, and certification processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/product-details">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2">
                  Get Started Free
                  <ArrowRight />
                </button>
              </a>
              <a href="/pricing">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
                  View Pricing
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Home />);