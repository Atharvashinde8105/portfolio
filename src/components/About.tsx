import React from "react";
import { GraduationCap, Brain, Users, Target, Shield, Code } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Brain, title: "Problem Solving", description: "Analytical thinking and creative solutions" },
    { icon: Users, title: "Leadership", description: "Team collaboration and project management" },
    { icon: Target, title: "Adaptability", description: "Quick learning and flexible approach" },
    { icon: Shield, title: "Security Mindset", description: "Always thinking like an attacker and defender" }
  ];

  const education = [
    {
      degree: "M.S. Cybersecurity",
      school: "Stevens Institute of Technology",
      period: "2024–2026",
      status: "Current"
    },
    {
      degree: "B.E. Computer Science (AI/ML Honors)",
      school: "A.P. Shah Institute of Technology",
      period: "2020–2024",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="animate-on-scroll">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Atharva Mhendra Shinde, a cybersecurity graduate student at Stevens Institute of Technology 
                with a strong foundation in threat detection, red/blue team simulations, and cloud security.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm driven by curiosity and fueled by challenge. I thrive when solving real-world problems 
                through innovative thinking and disciplined execution. My passion lies in creating secure, 
                resilient systems that protect against evolving cyber threats.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's analyzing network traffic, implementing security protocols, or conducting 
                vulnerability assessments, I approach each challenge with enthusiasm and precision.
              </p>
            </div>
          </div>

          {/* Skills and Education */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6">Core Strengths</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.title}
                      className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:scale-105 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{skill.title}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.degree} className="relative">
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h4 className="font-semibold text-lg">{edu.degree}</h4>
                          <p className="text-primary font-medium">{edu.school}</p>
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-accent/20 text-accent-foreground'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    {/* Timeline connector */}
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-full w-0.5 h-6 bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;