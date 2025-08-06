import React from "react";
import {
  ExternalLink,
  Github,
  Shield,
  Network,
  Cpu,
  Cloud,
  Bug,
  AlertTriangle,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SOC Analyst Lab",
      description:
        "Comprehensive Security Operations Center simulation using zSecurity's Blue Team Series, implementing real-world threat detection and incident response procedures.",
      tools: ["SIEM", "Splunk", "ELK Stack", "Wireshark", "Suricata"],
      icon: Shield,
      category: "Blue Team",
      highlights: [
        "Real-time threat detection",
        "Incident response workflows",
        "Log analysis",
      ],
      githubUrl: "https://github.com/Atharvashinde8105/SOC-Analyst-Lab",
    },
    {
      title: "Network Analysis using AI/ML",
      description:
        "Machine learning-powered network traffic analysis system for detecting anomalies and potential security threats in network communications.",
      tools: ["Python", "Scikit-learn", "Pandas", "NetworkX", "TensorFlow"],
      icon: Network,
      category: "AI/ML",
      highlights: [
        "Anomaly detection",
        "Traffic pattern analysis",
        "Automated alerts",
      ],
      githubUrl: "https://github.com/Atharvashinde8105/Network-Analysis-using-AI-ML",
    },
    {
      title: "Custom Physical Keylogger",
      description:
        "Hardware-based keylogger implementation using Arduino Pro Micro for security testing and awareness demonstrations in controlled environments.",
      tools: ["Arduino Pro Micro", "C++", "Hardware Design", "USB HID"],
      icon: Cpu,
      category: "Red Team",
      highlights: [
        "Hardware development",
        "Stealth operations",
        "Educational tool",
      ],
      githubUrl: "https://github.com/Atharvashinde8105/Custom-Physical-Keylogger",
    },
    {
      title: "AWS IAM Security Implementation",
      description:
        "Comprehensive Identity and Access Management security framework implementation with least privilege principles and automated compliance monitoring.",
      tools: ["AWS IAM", "CloudTrail", "Python", "Boto3", "Terraform"],
      icon: Cloud,
      category: "Cloud Security",
      highlights: [
        "Zero-trust architecture",
        "Policy automation",
        "Compliance monitoring",
      ],
      githubUrl: "https://github.com/Atharvashinde8105/AWS-IAM-Security-Implementation",
    },
    {
      title: "Vulnerability Management Lab",
      description:
        "End-to-end vulnerability assessment and management system using industry-standard tools for identifying, prioritizing, and remediating security vulnerabilities.",
      tools: ["Nessus", "OpenVAS", "Metasploit", "Burp Suite", "Python"],
      icon: Bug,
      category: "Vulnerability Assessment",
      highlights: [
        "Automated scanning",
        "Risk prioritization",
        "Remediation tracking",
      ],
      githubUrl: "https://github.com/Atharvashinde8105/Vulnerability-Management-Lab",
    },
    {
      title: "Security Incident Response with TheHive",
      description:
        "Collaborative incident response platform implementation for managing security incidents, case tracking, and forensic analysis workflows.",
      tools: ["TheHive", "Cortex", "MISP", "Elasticsearch", "Docker"],
      icon: AlertTriangle,
      category: "Incident Response",
      highlights: [
        "Case management",
        "Threat intelligence",
        "Collaborative workflows",
      ],
      githubUrl: "https://github.com/Atharvashinde8105/Security-Incident-Response-with-TheHive",
    },
  ];

  const categoryColors = {
    "Blue Team": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "AI/ML": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Red Team": "bg-red-500/20 text-red-400 border-red-500/30",
    "Cloud Security": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Vulnerability Assessment":
      "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Incident Response": "bg-green-500/20 text-green-400 border-green-500/30",
  };

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of cybersecurity projects demonstrating practical skills
            in threat detection, security analysis, and innovative security
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="group bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-elegant-hover animate-on-scroll overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        categoryColors[
                          project.category as keyof typeof categoryColors
                        ] ||
                        "bg-secondary text-secondary-foreground border-border"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </a>

                    <button className="p-2 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-muted-foreground mb-6">
            Interested in learning more about any of these projects?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
          >
            Get In Touch
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
