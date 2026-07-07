import { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Code2,
  Layers,
  Palette,
  ChevronDown,
  Mail,
  MapPin,
  Sparkles,
  X,
} from 'lucide-react';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/raymartlauigan', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/raymartlauigan', icon: Linkedin },
  {
    label: 'Behance',
    href: 'https://behance.net/raymartlauigan',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.956c-.329-2.859-3.851-2.754-3.956 0zM8.867 12c1.39 0 2.116-.58 2.116-1.73 0-1.15-.726-1.727-2.116-1.727H5v3.456h3.867zM5 16.273h4.101c1.522 0 2.345-.703 2.345-2.01 0-1.307-.823-2.01-2.345-2.01H5v4.02zM0 5v14h9.81c2.83 0 4.951-1.462 4.951-4.353 0-1.845-.889-3.015-2.34-3.54 1.13-.594 1.86-1.658 1.86-3.11C14.281 5.954 12.17 5 9.81 5H0z" />
      </svg>
    ),
  },
  { label: 'Instagram', href: 'https://instagram.com/raymartlauigan', icon: Instagram },
];

const SKILLS = [
  { category: 'Frontend', icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
  { category: 'Backend', icon: Layers, items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'REST APIs'] },
  { category: 'Design', icon: Palette, items: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Adobe XD'] },
];

const PROJECTS = [
  {
    title: 'Enterprise CRM Platform',
    shortDescription:
      'A full-featured customer relationship management system built for a logistics company. Includes pipeline management, reporting dashboards, and automated workflows that reduced manual data entry by 60%.',
    fullDescription:
      'Built a comprehensive CRM system for a logistics company to streamline their sales operations and customer management. The platform includes a visual pipeline management interface, real-time reporting dashboards, automated email workflows, and integration with their existing systems.',
    contribution:
      'Led full-stack development including system architecture, database design, and API development. Implemented the React frontend with real-time updates, built the Node.js backend with comprehensive REST APIs, and designed the PostgreSQL schema for optimal performance. Integrated third-party services for email automation and payment processing.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'AWS', 'REST APIs'],
    category: 'Web App',
    year: '2024',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Real Estate Listing Portal',
    shortDescription:
      'A property listing and search platform with advanced filtering, map integrations, and agent management. Served thousands of monthly users with near-instant search results.',
    fullDescription:
      'Developed a modern real estate platform that connects buyers, sellers, and agents in Southeast Asia. The platform features advanced property search with filters, interactive map views, agent profiles, and inquiry management. Built with performance as a priority to handle thousands of concurrent users.',
    contribution:
      'Architected the Next.js frontend with SSR for SEO optimization. Implemented Supabase backend with complex queries and real-time subscriptions. Integrated Mapbox for interactive property viewing. Optimized database queries and implemented caching strategies to achieve sub-500ms load times.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Mapbox', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    category: 'Web Platform',
    year: '2024',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Healthcare Appointment System',
    shortDescription:
      'An end-to-end scheduling and patient management solution for a private clinic. Features include SMS reminders, doctor availability calendars, and EHR integrations.',
    fullDescription:
      'Created a complete healthcare management system for a private clinic to replace their manual appointment system. Includes patient management, doctor scheduling, automated SMS reminders, prescription management, and medical history tracking.',
    contribution:
      'Designed and developed the Vue.js frontend with an intuitive calendar interface. Built Express.js APIs for appointment management and patient records. Implemented Twilio integration for SMS notifications. Set up MySQL database with HIPAA-compliant data handling and backup procedures.',
    stack: ['Vue.js', 'Express', 'MySQL', 'Twilio', 'Node.js', 'JWT Auth', 'Docker'],
    category: 'Web App',
    year: '2023',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'E-Commerce Dashboard',
    shortDescription:
      'A multi-vendor marketplace dashboard providing real-time analytics, inventory management, and order processing for a retail brand operating across Southeast Asia.',
    fullDescription:
      'Built an advanced analytics and management dashboard for a multi-vendor marketplace. Features include real-time sales analytics, inventory tracking across multiple warehouses, order fulfillment workflows, and vendor performance metrics.',
    contribution:
      'Developed the React frontend with interactive charts and real-time data visualization. Implemented GraphQL APIs for efficient data fetching and mutations. Set up Redis caching layer to optimize performance for heavy analytics queries. Designed the database schema for scalability.',
    stack: ['React', 'Tailwind CSS', 'GraphQL', 'Redis', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'Dashboard',
    year: '2023',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Brand Identity & Design System',
    shortDescription:
      "Comprehensive brand identity design including logo, typography, color system, and a reusable component library for a fintech startup's product suite.",
    fullDescription:
      'Designed a cohesive brand identity and component system for a fintech startup launching multiple products. Created a complete design system with 50+ components, comprehensive style guide, and implementation documentation for developers.',
    contribution:
      'Led the entire design process from brand strategy through execution. Created logo variations, defined typography hierarchy, built a 6-color system with accessibility considerations. Designed all UI components and documented specifications for developer handoff. Ensured consistency across web and mobile platforms.',
    stack: ['Figma', 'Adobe XD', 'Design Systems', 'Prototyping', 'User Testing', 'Design Handoff'],
    category: 'Design',
    year: '2023',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Inventory & POS System',
    shortDescription:
      'A point-of-sale and inventory management system for a chain of retail stores, featuring barcode scanning, low-stock alerts, and daily revenue reports.',
    fullDescription:
      'Developed a desktop POS and inventory system for a retail chain with 15 stores. System includes real-time inventory sync, barcode scanning, sales reporting, and admin management tools for centralized control.',
    contribution:
      'Built the Electron desktop application with React for the POS interface. Implemented local SQLite database with sync to central Node.js server. Created barcode scanning integration and receipt printing functionality. Designed responsive layouts for different screen sizes used in retail environments.',
    stack: ['React', 'Electron', 'SQLite', 'Node.js', 'Express', 'TypeScript', 'IPC Communication'],
    category: 'Desktop App',
    year: '2022',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
    >
      <span className="w-9 h-9 rounded-xl border border-slate-700 group-hover:border-blue-500/50 bg-slate-800/50 group-hover:bg-blue-500/10 flex items-center justify-center transition-all duration-200">
        <Icon className="w-4 h-4" />
      </span>
      <span className="text-sm font-medium hidden sm:block link-underline">{label}</span>
    </a>
  );
}

function ProjectCard({ project, index, onClick }: { project: typeof PROJECTS[0]; index: number; onClick: () => void }) {
  const { ref, inView } = useInView();

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      style={{ animationDelay: `${(index % 3) * 100}ms` }}
      className={`card-hover group relative bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden text-left w-full
        ${inView ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="tag">{project.category}</span>
          <span className="tag tag-slate">{project.year}</span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center">
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="tag tag-slate">{tech}</span>
          ))}
          {project.stack.length > 4 && (
            <span className="tag tag-slate">+{project.stack.length - 4}</span>
          )}
        </div>
      </div>

      {/* Bottom note */}
      <div className="px-6 pb-5">
        <p className="text-xs text-slate-600 italic">* Click to view details</p>
      </div>
    </button>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  const titles = ['Full-Stack Developer', 'UI/UX Designer', 'Product Engineer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="orb w-[500px] h-[500px] bg-blue-600/8 absolute -top-40 -right-40" style={{ animationDelay: '0s' }} />
        <div className="orb w-[400px] h-[400px] bg-teal-500/6 absolute top-1/2 -left-40" style={{ animationDelay: '3s' }} />
        <div className="orb w-[300px] h-[300px] bg-blue-400/5 absolute bottom-40 right-1/4" style={{ animationDelay: '6s' }} />
      </div>

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="font-display font-bold text-xl tracking-tight"
          >
            <span className="text-gradient">RL</span>
            <span className="text-slate-300 ml-1 font-light text-base hidden sm:inline">Raymart Lauigan</span>
          </button>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-white bg-blue-500/15 border border-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 dot-grid">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="animate-fade-in-up delay-100 opacity-0 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Available for freelance work</span>
          </div>

          <h1 className="animate-fade-in-up delay-200 opacity-0 font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-4">
            Hi, I'm{' '}
            <span className="text-gradient">Raymart</span>
          </h1>

          {/* Animated title */}
          <div className="animate-fade-in-up delay-300 opacity-0 h-10 flex items-center justify-center mb-6">
            <p className="font-display text-xl sm:text-2xl text-slate-300 font-medium">
              <span key={titleIndex} className="inline-block animate-fade-in-up">
                {titles[titleIndex]}
              </span>
              <span className="cursor-blink text-blue-400 ml-0.5">|</span>
            </p>
          </div>

          <p className="animate-fade-in-up delay-400 opacity-0 text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            I design and build digital products that solve real problems. From pixel-perfect interfaces
            to robust backend systems — crafting experiences that users love.
          </p>

          {/* Social links */}
          <div className="animate-fade-in-up delay-500 opacity-0 flex items-center justify-center gap-3 mb-12">
            {SOCIALS.map((s) => (
              <SocialLink key={s.label} href={s.href} icon={s.icon as React.ComponentType<{ className?: string }>} label={s.label} />
            ))}
          </div>

          {/* CTA */}
          <div className="animate-fade-in-up delay-600 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="px-7 py-3.5 rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-7 py-3.5 rounded-2xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:bg-slate-800/60 active:scale-95"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors duration-200 animate-bounce"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            ref={aboutRef}
            className={`grid md:grid-cols-2 gap-16 items-center ${aboutInView ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          >
            {/* Text */}
            <div>
              <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight mb-6">
                Crafting digital<br />
                <span className="text-gradient">experiences</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm a full-stack developer and UI/UX designer based in the Philippines with a passion for
                  building clean, performant, and meaningful digital products. I work end-to-end — from
                  concept and design to deployment and maintenance.
                </p>
                <p>
                  Over the years I've collaborated with clients across logistics, healthcare, real estate,
                  and retail to deliver software that genuinely improves how they operate. Every project
                  is an opportunity to solve a real problem beautifully.
                </p>
                <p>
                  When I'm not coding, I'm sketching UI concepts, exploring new design systems, or
                  contributing to open source projects.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  Philippines
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-400" />
                  Open to opportunities
                </span>
              </div>
            </div>

            {/* Skills */}
            <div
              ref={skillsRef}
              className={`space-y-4 ${skillsInView ? 'animate-fade-in-up opacity-0 delay-200' : 'opacity-0'}`}
            >
              {SKILLS.map(({ category, icon: Icon, items }) => (
                <div
                  key={category}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <h3 className="font-display font-semibold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="tag tag-green">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-28 px-6">
        {/* Section bg accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
              Selected <span className="text-gradient">Work</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              A curated selection of projects built for clients across various industries.
              All projects are confidential — showcased with permission.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            ref={contactRef}
            className={`${contactInView ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
              Let's build something<br />
              <span className="text-gradient">together</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and
              let's see how I can help bring your vision to life.
            </p>

            <a
              href="mailto:raymart@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 mb-14"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>

            {/* Social row */}
            <div className="border-t border-slate-800 pt-10">
              <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-medium">Find me on</p>
              <div className="flex items-center justify-center gap-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group flex flex-col items-center gap-2"
                  >
                    <span className="w-12 h-12 rounded-2xl border border-slate-800 group-hover:border-blue-500/40 bg-slate-900 group-hover:bg-blue-500/10 flex items-center justify-center transition-all duration-200 text-slate-500 group-hover:text-blue-400">
                      <s.icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors duration-200">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/60 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-sm">
          <span className="font-display font-semibold text-gradient">Raymart Lauigan</span>
          <span>© {new Date().getFullYear()} — All rights reserved</span>
          <span className="flex items-center gap-1.5">
            Designed & built with care
          </span>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm animate-fade-in-up" />

          {/* Modal */}
          <div
            className="relative bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-fade-in-up shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image */}
            <div className="relative h-56 md:h-72 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag">{selectedProject.category}</span>
                  <span className="tag tag-slate">{selectedProject.year}</span>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-18rem)]">
              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Project Overview</h4>
                <p className="text-slate-300 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Contribution */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3">My Contribution</h4>
                <p className="text-slate-400 leading-relaxed">{selectedProject.contribution}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech} className="tag tag-green">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-500 italic">
                  * Project details kept confidential per client agreement. Demo links available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
