import React, { useState } from "react";
import { Code, Shield, Cloud, Database, Network, Search, Filter } from "lucide-react";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const skillCategories = [
    {
      category: "Programming",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "C++", "JavaScript", "PowerShell", "Bash", "SQL"]
    },
    {
      category: "Security Tools",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      skills: ["Wireshark", "Nessus", "Metasploit", "Burp Suite", "OWASP ZAP", "Nmap"]
    },
    {
      category: "Cloud & IAM",
      icon: Cloud,
      color: "from-orange-500 to-yellow-500",
      skills: ["AWS IAM", "Azure Security", "Terraform", "CloudTrail", "GuardDuty", "Boto3"]
    },
    {
      category: "SIEM & Analytics",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["Splunk", "ELK Stack", "TheHive", "Cortex", "MISP", "Suricata"]
    },
    {
      category: "AI/ML",
      icon: Search,
      color: "from-purple-500 to-violet-500",
      skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "NetworkX", "Matplotlib"]
    },
    {
      category: "Infrastructure",
      icon: Network,
      color: "from-indigo-500 to-blue-600",
      skills: ["VirtualBox", "Docker", "Kubernetes", "Linux", "Windows Server", "Sysinternals"]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(skill => ({ ...cat, skill }))
  );

  const filters = ["All", ...skillCategories.map(cat => cat.category)];

  const filteredSkills = activeFilter === "All" 
    ? allSkills 
    : allSkills.filter(item => item.category === activeFilter);

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning cybersecurity, cloud technologies, 
            AI/ML, and infrastructure management.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all hover:scale-105 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-card-foreground border border-border hover:border-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Categories Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.category}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 text-sm text-muted-foreground">
                  {category.skills.length} technologies
                </div>
              </div>
            );
          })}
        </div>

        {/* Filtered Skills Cloud */}
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold text-center mb-8">
            {activeFilter === "All" ? "All Technologies" : `${activeFilter} Technologies`}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {filteredSkills.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`${item.category}-${item.skill}`}
                  className="group relative bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                    animation: "fade-in 0.5s ease-out forwards"
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {item.skill}
                    </span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-popover text-popover-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border shadow-lg">
                    {item.category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="font-bold text-green-500 mb-2">Expert</h4>
              <p className="text-sm text-muted-foreground">Python, Security Analysis, SIEM</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              </div>
              <h4 className="font-bold text-yellow-500 mb-2">Advanced</h4>
              <p className="text-sm text-muted-foreground">Cloud Security, AI/ML, Network Analysis</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <h4 className="font-bold text-blue-500 mb-2">Intermediate</h4>
              <p className="text-sm text-muted-foreground">Infrastructure, DevSecOps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;