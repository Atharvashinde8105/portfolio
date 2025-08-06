import React from "react";
import { Award, CheckCircle, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Cybersecurity Certificate",
      issuer: "Google",
      date: "2024",
      type: "Professional Certificate",
      description: "Comprehensive cybersecurity program covering threat detection, incident response, and security analysis.",
      skills: ["Network Security", "Threat Analysis", "Incident Response", "Risk Management"],
      verified: true,
      color: "from-blue-600 to-blue-800"
    }
  ];

  const jobSimulations = [
    {
      title: "Cybersecurity Job Simulation",
      issuer: "Mastercard",
      date: "2024",
      type: "Job Simulation",
      description: "Hands-on cybersecurity simulation covering real-world scenarios in financial services security.",
      skills: ["Financial Security", "Threat Modeling", "Security Architecture"],
      verified: true,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Cybersecurity Job Simulation",
      issuer: "AIG",
      date: "2024", 
      type: "Job Simulation",
      description: "Insurance industry cybersecurity challenges and risk assessment methodologies.",
      skills: ["Risk Assessment", "Compliance", "Security Governance"],
      verified: true,
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Cybersecurity Job Simulation",
      issuer: "Tata Group",
      date: "2024",
      type: "Job Simulation", 
      description: "Enterprise-level cybersecurity implementation and management across diverse business units.",
      skills: ["Enterprise Security", "Multi-domain Security", "Security Strategy"],
      verified: true,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const allCredentials = [...certifications, ...jobSimulations];

  return (
    <section id="certifications" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Certifications & <span className="text-primary">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and hands-on industry simulations that validate 
            my cybersecurity expertise and practical skills.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-on-scroll">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{allCredentials.length}</div>
            <div className="text-sm text-muted-foreground">Total Credentials</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{jobSimulations.length}</div>
            <div className="text-sm text-muted-foreground">Job Simulations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2024</div>
            <div className="text-sm text-muted-foreground">Latest Year</div>
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 animate-on-scroll">
            <Award className="w-6 h-6 text-primary" />
            Professional Certifications
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="group bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-elegant-hover animate-on-scroll overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.verified && (
                      <div className="flex items-center gap-1 text-green-500">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                    <span>•</span>
                    <span>{cert.type}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold mb-2">Key Skills:</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Verify Credential
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Simulations */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 animate-on-scroll">
            <CheckCircle className="w-6 h-6 text-primary" />
            Industry Job Simulations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobSimulations.map((simulation, index) => (
              <div 
                key={simulation.title}
                className="group bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-on-scroll overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${simulation.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{simulation.date}</span>
                  </div>

                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {simulation.issuer}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {simulation.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-2">Focus Areas:</h5>
                    <div className="space-y-1">
                      {simulation.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm committed to staying current with the latest cybersecurity trends and technologies. 
              Currently pursuing additional certifications in cloud security and advanced threat detection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
                🎯 Target: CISSP 2025
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium">
                📚 AWS Security Specialty
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-lg text-sm font-medium border border-accent/20">
                🔒 OSCP Preparation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;