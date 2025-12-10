
import { ProjectItem, SkillCategory, EducationItem, LanguageItem, ServiceItem, TestimonialItem, StatItem, Language, ExperienceItem, ProcessStep, FAQItem, QuoteServiceOption, QuoteComplexity } from './types';

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      projects: "Case Studies",
      whyUs: "Why Us",
      contact: "Contact",
      quote: "Get a Quote",
      clientArea: "Client Area"
    },
    hero: {
      subtitle: "Mazdaoui Digital Services",
      title: "Engineering Your",
      titleHighlight: "Digital Future",
      description: "We provide professional embedded systems, automation, and full-stack development solutions. Transform your ideas into reality with expert engineering.",
      viewServices: "View Our Services",
      contactUs: "Contact Us"
    },
    services: {
      title: "Our Professional Services",
      subtitle: "Solutions",
      priceUnit: "/ Hour",
      billing: "Flexible billing per project or hourly",
      cta: "Book This Service",
      paymentMethods: "Secure payment via:",
      popular: "Most Popular"
    },
    process: {
      title: "How We Work",
      subtitle: "Methodology"
    },
    quote: {
      title: "Project Estimator",
      subtitle: "Smart Quote",
      selectService: "1. Select a Service",
      selectComplexity: "2. Project Complexity",
      estimatedCost: "Estimated Budget",
      currency: "€",
      disclaimer: "This is a rough estimate based on typical project hours. Final quote may vary.",
      cta: "Request Official Quote"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "FAQ"
    },
    whyUs: {
      title: "Why Choose MDS?",
      subtitle: "The MDS Advantage",
      description: "We combine technical academic excellence with practical industrial experience to deliver robust, scalable, and efficient solutions."
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Testimonials"
    },
    projects: {
      title: "Recent Case Studies",
      subtitle: "Portfolio",
      viewMore: "View More Cases",
      viewLess: "View Fewer"
    },
    skills: {
      title: "Technology Stack",
      subtitle: "Competencies"
    },
    contact: {
      subtitle: "Start a Project",
      title: "Let's Build",
      titleHighlight: "Together",
      name: "Full Name",
      email: "Business Email",
      message: "Project Details",
      send: "Send Request",
      freeConsult: "Free Initial Consultation",
      successMessage: "Message sent successfully! We will contact you within 24 hours."
    },
    clientHub: {
      title: "Client Portal",
      tabPayment: "Pay Invoice",
      tabTracking: "Project Tracking",
      invoiceLabel: "Invoice Reference",
      amountLabel: "Amount (€)",
      payCard: "Pay with Card",
      payPaypal: "Pay with PayPal",
      secureNote: "Payments processed securely via Stripe/PayPal SSL.",
      trackLabel: "Project ID",
      trackBtn: "Track Status",
      demoStatus: "Phase 3: QA Testing - 85% Complete"
    },
    chat: {
      welcome: "Hello! 👋 How can MDS help you today?",
      placeholder: "Type a message...",
      send: "Send",
      typing: "MDS is typing..."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      process: "Processus",
      projects: "Réalisations",
      whyUs: "Pourquoi Nous",
      contact: "Contact",
      quote: "Devis Gratuit",
      clientArea: "Espace Client"
    },
    hero: {
      subtitle: "Mazdaoui Digital Services",
      title: "Ingénierie de votre",
      titleHighlight: "Avenir Numérique",
      description: "Nous fournissons des solutions professionnelles en systèmes embarqués, automatisation et développement full-stack. Transformez vos idées en réalité avec une ingénierie experte.",
      viewServices: "Voir nos Services",
      contactUs: "Nous Contacter"
    },
    services: {
      title: "Nos Services Professionnels",
      subtitle: "Solutions",
      priceUnit: "/ Heure",
      billing: "Facturation flexible au projet ou à l'heure",
      cta: "Réserver ce service",
      paymentMethods: "Paiement sécurisé via :",
      popular: "Le Plus Populaire"
    },
    process: {
      title: "Notre Méthodologie",
      subtitle: "Workflow"
    },
    quote: {
      title: "Simulateur de Devis",
      subtitle: "Budget Intelligent",
      selectService: "1. Choisissez un Service",
      selectComplexity: "2. Complexité du Projet",
      estimatedCost: "Budget Estimé",
      currency: "€",
      disclaimer: "Ceci est une estimation basée sur des heures types. Le devis final peut varier.",
      cta: "Demander un Devis Officiel"
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "FAQ"
    },
    whyUs: {
      title: "Pourquoi choisir MDS ?",
      subtitle: "L'avantage MDS",
      description: "Nous combinons l'excellence académique technique avec une expérience industrielle pratique pour livrer des solutions robustes, évolutives et efficaces."
    },
    testimonials: {
      title: "Avis Clients",
      subtitle: "Témoignages"
    },
    projects: {
      title: "Études de Cas Récentes",
      subtitle: "Portfolio",
      viewMore: "Voir plus de projets",
      viewLess: "Voir moins"
    },
    skills: {
      title: "Stack Technologique",
      subtitle: "Compétences"
    },
    contact: {
      subtitle: "Démarrer un Projet",
      title: "Construisons",
      titleHighlight: "Ensemble",
      name: "Nom Complet",
      email: "Email Professionnel",
      message: "Détails du Projet",
      send: "Envoyer la demande",
      freeConsult: "Consultation initiale gratuite",
      successMessage: "Message envoyé avec succès ! Nous vous contacterons sous 24h."
    },
    clientHub: {
      title: "Portail Client",
      tabPayment: "Payer Facture",
      tabTracking: "Suivi Projet",
      invoiceLabel: "Référence Facture",
      amountLabel: "Montant (€)",
      payCard: "Payer par Carte",
      payPaypal: "Payer via PayPal",
      secureNote: "Paiements traités en toute sécurité via Stripe/PayPal SSL.",
      trackLabel: "ID Projet",
      trackBtn: "Suivre Statut",
      demoStatus: "Phase 3 : Tests QA - 85% Complété"
    },
    chat: {
      welcome: "Bonjour ! 👋 Comment MDS peut vous aider aujourd'hui ?",
      placeholder: "Écrivez un message...",
      send: "Envoyer",
      typing: "MDS écrit..."
    }
  }
};

export const SERVICES_DATA: Record<Language, ServiceItem[]> = {
  en: [
    {
      title: "Automation & Scripting",
      description: "Streamline your workflows with custom Python scripts, VBA macros, and automated testing tools to save time and reduce errors.",
      price: "25€",
      icon: "Cpu",
      features: ["Excel/VBA Macro Development", "Python Data Processing Scripts", "Automated Reporting Tools", "Task Automation"]
    },
    {
      title: "IoT & Embedded Systems",
      description: "End-to-end prototyping and programming for Arduino, ESP32, and Raspberry Pi. From sensor integration to cloud connectivity.",
      price: "30€",
      icon: "Wifi",
      features: ["Arduino & ESP32 Firmware", "Raspberry Pi Solutions", "Sensor Integration (LIDAR, TPMS)", "CAN Bus Communication"]
    },
    {
      title: "Web & Mobile App Dev",
      description: "Modern digital presence solutions. We build responsive websites, dashboards, and Android mobile applications tailored to your needs.",
      price: "28€",
      icon: "Globe",
      features: ["React.js Web Applications", "Django/Flask Backends", "Android App Development", "Dashboard Creation"]
    },
    {
      title: "Engineering & Simulation",
      description: "Advanced engineering support including Matlab/Simulink modeling, image processing, and technical algorithm development.",
      price: "30€",
      icon: "Activity",
      features: ["Matlab/Simulink Modeling", "Computer Vision (OpenCV)", "Signal Processing", "Technical Documentation"]
    },
    {
      title: "PCB & Hardware Design",
      description: "Professional PCB layout and schematic design for your electronic prototypes, ensuring industrial standards.",
      price: "29€",
      icon: "Cpu",
      features: ["Schematic Capture", "PCB Layout Design", "BOM Generation", "Prototyping Support"]
    },
    {
      title: "Automotive Diagnostics",
      description: "Specialized services in automotive protocols (CAN, UDS, OBD-II). Diagnostics tool development and log analysis.",
      price: "30€",
      icon: "Car",
      features: ["UDS/OBD-II Protocol Impl.", "CAN Bus Analysis", "Diagnostic Tools", "Vector/CANoe Support"]
    },
    {
      title: "Cloud & DevOps",
      description: "Setting up CI/CD pipelines and cloud infrastructure for your embedded or web projects to ensure smooth deployment.",
      price: "28€",
      icon: "Cloud",
      features: ["CI/CD Pipelines", "Docker Containerization", "AWS/Azure IoT Setup", "Version Control (Git)"]
    },
    {
      title: "AI & Machine Learning",
      description: "Integration of basic AI models for predictive maintenance, pattern recognition, or computer vision in your products.",
      price: "30€",
      icon: "Brain",
      features: ["Predictive Maintenance Models", "Image Classification", "Data Mining", "Python ML Libraries"]
    },
    {
      title: "Technical Training",
      description: "Personalized coaching and training sessions for teams or individuals on Python, Embedded Systems, or Automotive tools.",
      price: "25€",
      icon: "BookOpen",
      features: ["Python for Engineers", "Intro to Embedded C", "Automotive Protocols", "1-on-1 Mentoring"]
    }
  ],
  fr: [
    {
      title: "Automatisation & Scripting",
      description: "Optimisez vos flux de travail avec des scripts Python, macros VBA et outils de test automatisés pour gagner du temps.",
      price: "25€",
      icon: "Cpu",
      features: ["Développement Macros Excel/VBA", "Scripts Python Traitement de Données", "Outils de Reporting Automatisés", "Automatisation de Tâches"]
    },
    {
      title: "IoT & Systèmes Embarqués",
      description: "Prototypage et programmation de bout en bout pour Arduino, ESP32 et Raspberry Pi. De l'intégration capteurs au cloud.",
      price: "30€",
      icon: "Wifi",
      features: ["Firmware Arduino & ESP32", "Solutions Raspberry Pi", "Intégration Capteurs (LIDAR, TPMS)", "Communication Bus CAN"]
    },
    {
      title: "Dév Web & Mobile",
      description: "Solutions numériques modernes. Nous créons des sites web responsifs, tableaux de bord et applications mobiles Android.",
      price: "28€",
      icon: "Globe",
      features: ["Applications Web React.js", "Backends Django/Flask", "Développement App Android", "Création de Dashboards"]
    },
    {
      title: "Ingénierie & Simulation",
      description: "Support ingénierie avancé incluant modélisation Matlab/Simulink, traitement d'image et algorithmes techniques.",
      price: "30€",
      icon: "Activity",
      features: ["Modélisation Matlab/Simulink", "Vision par Ordinateur (OpenCV)", "Traitement du Signal", "Documentation Technique"]
    },
    {
      title: "Conception PCB & Hardware",
      description: "Conception professionnelle de schémas et routage PCB pour vos prototypes électroniques, respectant les standards industriels.",
      price: "29€",
      icon: "Cpu",
      features: ["Saisie de Schémas", "Routage PCB", "Génération BOM", "Support Prototypage"]
    },
    {
      title: "Diagnostic Automobile",
      description: "Services spécialisés en protocoles automobiles (CAN, UDS, OBD-II). Développement d'outils de diagnostic et analyse de logs.",
      price: "30€",
      icon: "Car",
      features: ["Impl. Protocoles UDS/OBD-II", "Analyse Bus CAN", "Outils de Diagnostic", "Support Vector/CANoe"]
    },
    {
      title: "Cloud & DevOps",
      description: "Mise en place de pipelines CI/CD et infrastructure cloud pour vos projets embarqués ou web afin d'assurer un déploiement fluide.",
      price: "28€",
      icon: "Cloud",
      features: ["Pipelines CI/CD", "Conteneurisation Docker", "Config AWS/Azure IoT", "Contrôle de Version (Git)"]
    },
    {
      title: "IA & Machine Learning",
      description: "Intégration de modèles IA pour la maintenance prédictive, reconnaissance de formes ou vision par ordinateur.",
      price: "30€",
      icon: "Brain",
      features: ["Modèles Maintenance Prédictive", "Classification d'Images", "Data Mining", "Librairies ML Python"]
    },
    {
      title: "Formation Technique",
      description: "Coaching personnalisé et sessions de formation pour équipes ou individus sur Python, Systèmes Embarqués ou outils Auto.",
      price: "25€",
      icon: "BookOpen",
      features: ["Python pour Ingénieurs", "Intro au C Embarqué", "Protocoles Automobiles", "Mentorat 1-à-1"]
    }
  ]
};

export const CHAT_BOT_LOGIC = {
  en: [
    { keywords: ["hello", "hi", "hey", "morning", "evening"], response: "Hello! Ready to start your digital transformation?" },
    { keywords: ["price", "cost", "rate", "quote", "expensive", "money"], response: "Our services start at roughly 25-30€/hour. Try our Quote Calculator above for a precise estimate!" },
    { keywords: ["contact", "email", "phone", "call", "reach"], response: "You can email us at contact@mds-engineering.com or use the contact form at the bottom of the page." },
    { keywords: ["service", "iot", "web", "automation", "python"], response: "We specialize in IoT, Automation, and Web Development. Which one interests you?" },
    { keywords: ["thank", "thanks", "cool", "great"], response: "You're welcome! Let me know if you need anything else." }
  ],
  fr: [
    { keywords: ["bonjour", "salut", "hello", "coucou"], response: "Bonjour ! Prêt à lancer votre transformation numérique ?" },
    { keywords: ["prix", "coût", "tarif", "devis", "argent", "combien"], response: "Nos services commencent vers 25-30€/h. Essayez notre Simulateur de Devis ci-dessus pour une estimation !" },
    { keywords: ["contact", "email", "téléphone", "appeler", "joindre"], response: "Écrivez-nous à contact@mds-engineering.com ou utilisez le formulaire de contact en bas de page." },
    { keywords: ["service", "iot", "web", "automatisation", "python"], response: "Nous sommes experts en IoT, Automatisation et Web. Lequel vous intéresse ?" },
    { keywords: ["merci", "top", "super", "cool"], response: "Je vous en prie ! N'hésitez pas si vous avez d'autres questions." }
  ]
};

export const CHAT_DEFAULT_RESPONSE = {
  en: "I'm not sure I understood specific details, but I can connect you with a senior engineer. Please leave your email in the chat.",
  fr: "Je ne suis pas sûr d'avoir saisi les détails, mais je peux vous connecter avec un ingénieur senior. Laissez votre email ici."
};

// --- NEW DATA FOR FEATURES ---

export const PROCESS_STEPS: Record<Language, ProcessStep[]> = {
  en: [
    { title: "Discovery & Analysis", description: "We define the scope, requirements, and technical feasibility.", icon: "Search" },
    { title: "Architecture & Design", description: "Designing the system architecture, hardware selection, and UI/UX.", icon: "PenTool" },
    { title: "Development", description: "Agile coding, firmware programming, and circuit implementation.", icon: "Code" },
    { title: "Testing & QA", description: "Rigorous testing (Unit, HIL, Integration) to ensure reliability.", icon: "CheckSquare" },
    { title: "Delivery & Support", description: "Deployment, documentation handover, and post-project support.", icon: "Rocket" }
  ],
  fr: [
    { title: "Découverte & Analyse", description: "Nous définissons le périmètre, les besoins et la faisabilité technique.", icon: "Search" },
    { title: "Architecture & Design", description: "Conception de l'architecture système, choix matériel et UI/UX.", icon: "PenTool" },
    { title: "Développement", description: "Codage Agile, programmation firmware et implémentation circuits.", icon: "Code" },
    { title: "Tests & QA", description: "Tests rigoureux (Unitaire, HIL, Intégration) pour assurer la fiabilité.", icon: "CheckSquare" },
    { title: "Livraison & Support", description: "Déploiement, remise documentation et support après-projet.", icon: "Rocket" }
  ]
};

export const FAQ_ITEMS: Record<Language, FAQItem[]> = {
  en: [
    { question: "Do you provide source code?", answer: "Yes, full source code and intellectual property rights are transferred to the client upon final payment." },
    { question: "How is payment structured?", answer: "Typically 40% upfront to start, 30% at the milestone, and 30% upon final delivery. For small tasks, hourly billing applies." },
    { question: "Do you offer post-delivery support?", answer: "We offer a 3-month free bug-fix warranty on all delivered software. Extended maintenance contracts are available." },
    { question: "Can you sign an NDA?", answer: "Absolutely. We treat all client data and project details with strict confidentiality and are happy to sign NDAs." }
  ],
  fr: [
    { question: "Fournissez-vous le code source ?", answer: "Oui, l'intégralité du code source et les droits de propriété intellectuelle sont transférés au client après le paiement final." },
    { question: "Comment se structure le paiement ?", answer: "Généralement 40% d'acompte, 30% à mi-parcours et 30% à la livraison. Pour les petites tâches, facturation à l'heure." },
    { question: "Offrez-vous un support après livraison ?", answer: "Nous offrons une garantie de correction de bugs de 3 mois gratuite. Des contrats de maintenance sont disponibles." },
    { question: "Pouvez-vous signer un NDA ?", answer: "Absolument. Nous traitons toutes les données clients avec une stricte confidentialité et signons des accords de non-divulgation." }
  ]
};

export const QUOTE_SERVICES: QuoteServiceOption[] = [
  { id: 'automation', label: 'Automation / Scripting', baseRate: 25 },
  { id: 'iot', label: 'IoT / Embedded', baseRate: 30 },
  { id: 'web', label: 'Web / Mobile App', baseRate: 28 },
  { id: 'auto', label: 'Automotive Diag', baseRate: 30 },
  { id: 'ai', label: 'AI / Data Science', baseRate: 30 }
];

export const QUOTE_COMPLEXITY: Record<Language, QuoteComplexity[]> = {
  en: [
    { id: 'small', label: 'Small / Prototype', hoursMultiplier: 20, desc: '< 1 week' },
    { id: 'medium', label: 'Medium / MVP', hoursMultiplier: 80, desc: '2-4 weeks' },
    { id: 'large', label: 'Large / Full Product', hoursMultiplier: 200, desc: '1-2 months' }
  ],
  fr: [
    { id: 'small', label: 'Petit / Prototype', hoursMultiplier: 20, desc: '< 1 semaine' },
    { id: 'medium', label: 'Moyen / MVP', hoursMultiplier: 80, desc: '2-4 semaines' },
    { id: 'large', label: 'Grand / Produit Complet', hoursMultiplier: 200, desc: '1-2 mois' }
  ]
};

export const TESTIMONIALS: Record<Language, TestimonialItem[]> = {
  en: [
    {
      name: "Jean Dupont",
      role: "CTO",
      company: "AutoTech Solutions",
      content: "MDS transformed our testing process. The automated scripts developed saved us over 200 hours of manual work in just two months. Highly recommended for automotive software expertise.",
      avatarLetter: "J"
    },
    {
      name: "Sarah Miller",
      role: "Product Manager",
      company: "IoT Innovations",
      content: "We needed a quick prototype for our new connected sensor. Mazdaoui Digital Services delivered a working ESP32 prototype with cloud dashboard integration in record time.",
      avatarLetter: "S"
    },
    {
      name: "Ahmed Benali",
      role: "R&D Lead",
      company: "SmartSystems",
      content: "The expertise in CAN bus analysis and UDS protocols was crucial for our project. Professional, punctual, and technically very strong.",
      avatarLetter: "A"
    }
  ],
  fr: [
    {
      name: "Jean Dupont",
      role: "CTO",
      company: "AutoTech Solutions",
      content: "MDS a transformé notre processus de test. Les scripts automatisés développés nous ont fait gagner plus de 200 heures de travail manuel en seulement deux mois.",
      avatarLetter: "J"
    },
    {
      name: "Sarah Miller",
      role: "Chef de Produit",
      company: "IoT Innovations",
      content: "Nous avions besoin d'un prototype rapide pour notre nouveau capteur connecté. MDS a livré un prototype ESP32 fonctionnel avec tableau de bord cloud en un temps record.",
      avatarLetter: "S"
    },
    {
      name: "Ahmed Benali",
      role: "Responsable R&D",
      company: "SmartSystems",
      content: "L'expertise en analyse de bus CAN et protocoles UDS a été cruciale pour notre projet. Professionnel, ponctuel et techniquement très solide.",
      avatarLetter: "A"
    }
  ]
};

export const STATS: Record<Language, StatItem[]> = {
  en: [
    { value: "5+", label: "Years Experience", icon: "Clock" },
    { value: "50+", label: "Projects Delivered", icon: "CheckCircle" },
    { value: "100%", label: "Client Satisfaction", icon: "Heart" },
    { value: "24/7", label: "Tech Support", icon: "Headphones" }
  ],
  fr: [
    { value: "5+", label: "Années d'Expérience", icon: "Clock" },
    { value: "50+", label: "Projets Livrés", icon: "CheckCircle" },
    { value: "100%", label: "Satisfaction Client", icon: "Heart" },
    { value: "24/7", label: "Support Technique", icon: "Headphones" }
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "Automated CAN Log Analysis",
    type: "Data Solution",
    description: "A high-performance Python solution to parse, analyze, and visualize gigabytes of CAN logs, automatically identifying anomalies for engineering teams.",
    tech: ["Python", "Pandas", "Automation", "Big Data"]
  },
  {
    title: "IoT Cloud Gateway",
    type: "Connected Device",
    description: "Implementation of a secure IoT gateway using ESP32 to read vehicle CAN bus data and transmit telemetry to a cloud platform via Wi-Fi.",
    tech: ["ESP32", "IoT", "MQTT", "Cloud Architecture"]
  },
  {
    title: "Corporate HIL Reporting Tool",
    type: "Process Automation",
    description: "Custom VBA/Excel enterprise tool that automatically aggregates results from different HIL test campaigns into executive dashboards.",
    tech: ["VBA", "Excel", "Business Intelligence", "HIL"]
  },
  {
    title: "Vehicle Maintenance App",
    type: "Mobile Solution",
    description: "Android application designed for fleet management, handling preventive maintenance scheduling with automatic user reminders.",
    tech: ["Android", "Java", "SQLite", "UX/UI"]
  },
  {
    title: "Computer Vision Safety System",
    type: "AI & Research",
    description: "Development of a facial recognition safety system for automotive ADAS applications using Raspberry Pi and OpenCV.",
    tech: ["Python", "OpenCV", "AI", "Embedded Linux"]
  },
  {
    title: "Interactive 3D Data Viz",
    type: "Web Application",
    description: "Real-time web visualization dashboard rendering vehicle signal data in an interactive 3D environment.",
    tech: ["Three.js", "React", "Data Viz", "WebSocket"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Development & Scripting",
    skills: ["Python", "C/C++", "VBA", "Java", "React.js", "Django", "Flask"]
  },
  {
    title: "Embedded & IoT",
    skills: ["Arduino", "ESP32", "Raspberry Pi", "CAN/LIN", "UDS", "MQTT", "Sensors"]
  },
  {
    title: "Engineering Tools",
    skills: ["Matlab/Simulink", "CANoe", "CANalyzer", "INCA", "Altium Designer"]
  },
  {
    title: "Data & Automation",
    skills: ["Excel Macros", "Test Automation", "CAPL", "Data Analysis", "Image Processing"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Specialized Master in Embedded Systems",
    school: "ENSIAS",
    period: "2018 - 2020",
    location: "Rabat, Morocco"
  },
  {
    degree: "Bachelor in Electronics & Computer Science",
    school: "FSSM",
    period: "2015 - 2018",
    location: "Marrakech, Morocco"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Senior Embedded Engineer",
    company: "AutoTech Solutions",
    period: "2020 - Present",
    location: "Paris, France",
    details: [
      "Lead development of ECU firmware for electric vehicles.",
      "Implemented UDS diagnostic stack and CAN communication layer.",
      "Optimized bootloader sequence reducing startup time by 40%."
    ],
    tools: ["C/C++", "CANoe", "Vector", "UDS"]
  },
  {
    role: "Software Developer",
    company: "TechInnovate",
    period: "2018 - 2020",
    location: "Lyon, France",
    details: [
      "Developed Python automation scripts for hardware testing validation.",
      "Created a web-based dashboard for real-time sensor monitoring.",
      "Collaborated with cross-functional teams to define system requirements."
    ],
    tools: ["Python", "Django", "React", "Docker"]
  }
];

export const LANGUAGES: LanguageItem[] = [
  { language: "French", level: "Full Professional" },
  { language: "English", level: "Full Professional" },
  { language: "Arabic", level: "Native" }
];
