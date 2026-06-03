// Centralized portfolio data — edit values here and they propagate everywhere.

export const profile = {
  name: "Yakkala Bala Mahanth",
  title: "DevOps Engineer | Cloud & Infrastructure Automation",
  tagline: "DevOps Engineer | Cloud & Infrastructure Automation",
  location: "India",
  email: "balamahanth2@gmail.com",
  github: "https://github.com/BalaMahanth2",
  linkedin: "https://www.linkedin.com/in/bala-mahanth-10b341251/",
  resume: "/BalaMahanth_Devops_Resume.pdf",
  // Save your photo at public/profile.jpg — or change this path to match your filename (.png, .webp also fine).
  image: "/profile.jpeg",
  roles: [
    "Junior DevOps Engineer",
    "Cloud & Infrastructure Automation",
    "Linux & Docker Operations",
    "CI/CD Pipeline Builder",
    "AWS Infrastructure Engineer",
  ],
};
 
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Journey", href: "#timeline" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const aboutText = [
  "I’m a Junior DevOps Engineer currently working in the VFX industry, where I build automation tools, manage Linux-based production environments, and support large-scale infrastructure workflows used by artists and production teams daily.",
  "My work includes CI/CD automation, Docker-based deployments, infrastructure provisioning, Python/Bash scripting, monitoring, and operational troubleshooting across distributed Linux systems.",
  "I’ve worked on: GitHub Actions CI/CD pipelines, Docker & Docker Compose deployments, AWS infrastructure and IAM management, Ansible-based Linux automation, Prometheus & Grafana monitoring, Python automation workflows, Linux server administration.",
  "I enjoy designing systems that reduce manual effort, improve deployment reliability, and scale efficiently across production environments.",
  "I also use AI-assisted engineering tools like GitHub Copilot and AI agents to accelerate development workflows, improve productivity, and automate repetitive engineering tasks.",
];

export const skills = {
  Programming: [
    { name: "Python", level: 90 },
    { name: "Bash", level: 80 },
    { name: "Shell Scripting", level: 80 },
  ],
  "Operating Systems": [
    { name: "Linux", level: 88 },
    { name: "Rocky Linux", level: 80 },
    { name: "Ubuntu", level: 82 },
    { name: "Windows", level: 65 },
  ],
  "DevOps Tools": [
    { name: "Docker", level: 80 },
    { name: "Kubernetes", level: 60 },
    { name: "Git", level: 90 },
    { name: "GitHub Actions", level: 75 },
    { name: "Jenkins", level: 65 },
    { name: "Ansible", level: 60 },
    { name: "NGINX", level: 75 },
    { name: "Terraform", level: 45 },
    { name: "Helm", level: 60 },
  ],
  Cloud: [
    { name: "AWS", level: 65 },
    { name: "Networking", level: 70 },
    { name: "Reverse Proxy", level: 75 },
    { name: "CI/CD", level: 75 },
  ],
  "Monitoring & Infra": [
    { name: "Prometheus", level: 65 },
    { name: "Grafana", level: 70 },
    { name: "Logging Systems", level: 70 },
  ],
  Databases: [
    { name: "MongoDB", level: 65 },
    { name: "MySQL", level: 65 },
    { name: "PostgreSQL", level: 70 },
  ],
  "VFX & Pipeline": [
    { name: "Houdini", level: 70 },
    { name: "AYON (Ayon pipeline)", level: 75 },
    { name: "ShotTrack", level: 65 },
    { name: "Nuke", level: 60 },
    { name: "USD", level: 55 },
  ],
};

export const projects = [
  {
    title: "Dockerized AYON Pipeline Setup",
    description:
      "Containerized the AYON VFX production pipeline with Docker Compose — services, databases, and reverse proxy wired together for one-command bring-up.",
    tech: ["Docker", "Docker Compose", "NGINX", "Linux", "Python"],
    github: "https://github.com/mahanth-vfx",
    demo: "",
    accent: "from-cyan-500/30 to-blue-500/30",
  },
  {
    title: "Linux Server Deployment Automation",
    description:
      "Ansible playbooks + Bash bootstrap scripts that provision Rocky Linux servers — users, firewall, services, monitoring agents — fully idempotent.",
    tech: ["Ansible", "Bash", "Rocky Linux", "Systemd"],
    github: "https://github.com/mahanth-vfx",
    demo: "",
    accent: "from-purple-500/30 to-pink-500/30",
  },
  {
    title: "Render Farm Monitoring Dashboard",
    description:
      "Prometheus + Grafana dashboard for VFX render farm — node health, GPU/CPU load, queue depth, and alerting on SLO breaches.",
    tech: ["Prometheus", "Grafana", "Python", "Node Exporter"],
    github: "https://github.com/mahanth-vfx",
    demo: "",
    accent: "from-emerald-500/30 to-cyan-500/30",
  },
  {
    title: "NGINX Reverse Proxy Setup",
    description:
      "Multi-service reverse proxy with HTTPS, rate limiting, and clean subdomain routing — TLS automated via certbot.",
    tech: ["NGINX", "Linux", "TLS", "Bash"],
    github: "https://github.com/mahanth-vfx",
    demo: "",
    accent: "from-blue-500/30 to-purple-500/30",
  },
  {
    title: "Automated Backup System",
    description:
      "Cron + rsync + S3 lifecycle backups with integrity checks, retention policies, and Slack notifications on failure.",
    tech: ["Bash", "rsync", "AWS S3", "Cron"],
    github: "https://github.com/mahanth-vfx",
    demo: "",
    accent: "from-amber-500/30 to-pink-500/30",
  },
  {
    title: "Python DevOps Automation Scripts",
    description:
      "Collection of Python utilities: log parser, disk sweep, deployment helper, and config-drift detector — used daily in production.",
    tech: ["Python", "Click", "Paramiko", "PyYAML"],
    github: "https://github.com/mahanth-vfx",
    demo: "",
    accent: "from-cyan-500/30 to-emerald-500/30",
  },
  {
    title: "Kubernetes Learning Cluster",
    description:
      "Local k3s + kind setup with Helm-deployed apps, ingress, secrets, and HPA — a sandbox for learning production patterns.",
    tech: ["Kubernetes", "k3s", "Helm", "kubectl"],
    github: "https://github.com/mahanth-vfx",
    demo: "",
    accent: "from-purple-500/30 to-blue-500/30",
  },
  {
    title: "CI/CD Pipeline Project",
    description:
      "GitHub Actions pipeline: lint → test → build → Docker push → deploy. Zero-touch from commit to staging environment.",
    tech: ["GitHub Actions", "Docker", "Python", "Bash"],
    github: "https://github.com/mahanth-vfx",
    demo: "",
    accent: "from-pink-500/30 to-purple-500/30",
  },
  {
    title: "Infrastructure Monitoring Setup",
    description:
      "End-to-end observability stack — Prometheus, Grafana, Loki, Alertmanager — wired into a small fleet of Linux hosts.",
    tech: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
    github: "https://github.com/mahanth-vfx",
    demo: "",
    accent: "from-emerald-500/30 to-blue-500/30",
  },
];

export const experience = [
  {
    company: "LittleBlackStar Private Limited",
    role: "Junior Pipeline Developer",
    period: "1+ yr · Present",
    location: "India",
    bullets: [
      "Built Python automation tools used daily by artists — eliminating manual steps in render and asset workflows.",
      "Maintained Linux-based production pipeline infrastructure across artist workstations and the render farm.",
      "Optimized pipeline workflows, reducing turnaround time on common artist tasks.",
      "Troubleshot infrastructure issues across networking, file storage, and render scheduling.",
      "Authored automation scripts for asset publishing, render submission, and farm health checks.",
      "Supported render pipeline reliability and on-call coverage during crunch deliveries.",
      "Transferable to DevOps: production reliability mindset, Linux-first toolchain, automation-by-default.",
    ],
  },
];

export const timeline = [
  {
    title: "Started Learning Python",
    desc: "First steps into scripting — automating repetitive tasks and small CLI tools.",
    icon: "Code2",
  },
  {
    title: "Learned Linux Fundamentals",
    desc: "Shell, permissions, processes, services — the bedrock of every server I'd touch later.",
    icon: "Terminal",
  },
  {
    title: "Entered Pipeline Development",
    desc: "Joined VFX industry as a Pipeline Developer — Python + Linux at production scale.",
    icon: "GitBranch",
  },
  {
    title: "Started Docker & Containers",
    desc: "Packaging services, building images, and shipping consistent environments.",
    icon: "Box",
  },
  {
    title: "Learning Kubernetes",
    desc: "Pods, services, ingress, HPA — orchestration patterns on a local k3s lab.",
    icon: "Layers",
  },
  {
    title: "Building CI/CD Pipelines",
    desc: "GitHub Actions and Jenkins — lint, test, build, deploy, observe, repeat.",
    icon: "Workflow",
  },
  {
    title: "Exploring Cloud Infrastructure",
    desc: "AWS fundamentals — VPC, EC2, S3, IAM — and infrastructure-as-code.",
    icon: "Cloud",
  },
  {
    title: "Moving Toward DevOps Engineering",
    desc: "Bridging dev and ops — reliability, automation, observability, and scale.",
    icon: "Rocket",
  },
];

export const certifications = [
  {
    title: "ISC2 Certified in Cybersecurity",
    issuer: "ISC2",
    desc: "Foundational cybersecurity principles — risk, access control, network security, incident response.",
    icon: "ShieldCheck",
    badge: "CC",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    desc: "Cloud concepts, AWS services, security, billing, and architectural best practices.",
    icon: "Cloud",
    badge: "CLF",
  },
  {
    title: "Linux & DevOps Learning Path",
    issuer: "Self-directed / Multiple",
    desc: "Linux administration, Docker, Kubernetes, CI/CD, monitoring — ongoing focused learning.",
    icon: "Terminal",
    badge: "DevOps",
  },
];

// GitHub username used to fetch live stats widgets.
export const githubUsername = "BalaMahanth2";
