/**
 * CONFIGURATION DU PORTFOLIO
 * Modifiez ces valeurs pour mettre à jour le contenu du site sans toucher au code.
 * 
 * === PARTIES MODIFIABLES ===
 * 
 * 1. IMAGES HERO (page d'accueil) :
 *    - serious: "m1.png" -> Image principale (modifiable)
 *    - smiling: "m2.png" -> Image souriante (modifiable)
 *    - additionalImages: ["coo.jpg", "junior512.png", "u.png", "bouteille deau.png"] -> 4 images qui changent au scroll (modifiable)
 * 
 * 2. IMAGE SECTION "À PROPOS" :
 *    - aboutImage: "junior520.jpg" -> Image de la section "L'EXPERTISE..." (modifiable)
 *      Peut être une image (.jpg, .png) ou une vidéo (.mp4)
 * 
 * 3. SERVICES & PORTFOLIO :
 *    - Chaque service a un portfolio avec des images/vidéos et titres
 *    - Format : { url: "chemin/image.jpg", title: "Titre personnalisé" }
 *    - Vous pouvez modifier les URLs et les titres pour chaque service
 * 
 * 4. IMAGES DÉFILEMENT (marquee) :
 *    - Les images viennent de CONFIG.portfolio en bas du fichier
 *    - Format : { url: "image.jpg", title: "Titre", category: "Catégorie", type: "image" }
 * 
 * === GUIDE DES MODIFICATIONS ===
 * - Pour changer une image : modifiez simplement le nom du fichier dans les guillemets
 * - Pour ajouter une vidéo : utilisez un fichier .mp4
 * - Les images doivent être dans le dossier du projet ou des URLs valides
 */

export const CONFIG = {
  profile: {
    name: "Aka Junior",
    title: "Expert Digital & Spécialiste IA",
    location: "Côte d'Ivoire",
    whatsapp: "2250708105701",
    email: "contact@akajunior.com",
    description: "Développeur web expert, spécialiste en Intelligence Artificielle, graphiste et monteur vidéo. Je transforme vos visions en réalités numériques d'exception avec mon équipe créative.",
    heroImages: {
      serious: "m1.png", // MODIFIABLE : Image principale page d'accueil (homme sérieux)
      smiling: "m2.png", // MODIFIABLE : Image souriante page d'accueil
      // MODIFIABLE : Images qui apparaissent quand vous descendez et remontez (4 images au total)
      // Le système fait un cycle automatique entre ces 4 images
      additionalImages: [
        "m1.png", // MODIFIABLE : Image alternative 1
        "m2.png", // MODIFIABLE : Image alternative 2
        "m3.png", // MODIFIABLE : Image alternative 3
        "moi png-Stantard.png", // MODIFIABLE : Image alternative 4
        // AJOUTEZ D'AUTRES IMAGES ICI SI VOUS VOULEZ - le cycle continue automatiquement
      ]
    }
  },

  nav: {
    links: [
      { name: "Accueil", href: "#home" },
      { name: "À Propos", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Pourquoi Nous", href: "#whyus" }, // MODIFIABLE : Ajout du lien vers la nouvelle section
      { name: "Contact", href: "#contact" },
    ],
    cta: "Let's Talk"
  },

  hero: {
    titleTop: "Aka",
    titleBottom: "Junior",
    cta: "Lancer un Projet",
    scrollLabel: "Scroll to explore"
  },
  
  about: {
    badgeValue: "07+",
    badgeLabel: "Ans d'Exp",
    subtitle: "// L'Architecte",
    title: "L'EXPERTISE  AU SERVICE DE <span className=\"text-outline\">VOTRE VISION</span>.",
    // MODIFIABLE : Image ou vidéo pour la section "À Propos" 
    // Peut être: une image (ex: "junior520.jpg", "coo.jpg", "bouteille deau.png") 
    // ou une vidéo (ex: "video short.mp4", "montagevideo imo.mp4")
    aboutImage: "juniorpro.png", // MODIFIABLE : Changez cette image/vidéo
    paragraphs: [
      "Je ne me contente pas de coder. Je conçois des écosystèmes numériques qui captivent, convertissent et dominent. Mon approche fusionne l'ingénierie logicielle de pointe avec une esthétique visuelle sans compromis.",
      "Spécialiste en IA et en développement web haute performance, j'accompagne les marques et les entrepreneurs qui exigent l'excellence. Chaque ligne de code est une brique de votre futur empire digital."
    ],
    text: "Avec une approche axée sur l'excellence et l'innovation, j'accompagne les entreprises et les particuliers dans leur transformation digitale. Mon expertise multidisciplinaire me permet de concevoir des solutions complètes, de la stratégie IA au montage vidéo haute définition.",
    stats: [
      { label: "Projets Terminés", value: "150+" },
      { label: "Clients Satisfaits", value: "98%" },
      { label: "Années d'Expérience", value: "5+" },
    ]
  },

  services_section: {
    subtitle: "// Expertise",
    title: "SOLUTIONS <br /> <span className=\"text-outline\">D'EXCEPTION</span>.",
    moreInfo: "Plus d'information",
    launchMission: "Lancer Mission",
    modalSubtitle: "// Réalisations",
    modalDescription: "Découvrez une sélection de nos meilleurs travaux récents dans ce domaine d'expertise.",
    modalCta: "Discuter du projet"
  },

  portfolio_section: {
    subtitle: "// Archives",
    title: "NOS <span className=\"text-primary\">VICTOIRES</span> RÉCENTES."
  },

  whyus_section: {
    subtitle: "// Pourquoi Moi ?",
    title: "POURQUOI Moi  ? <span className=\"text-outline\">JUNIOR</span>.",
    // MODIFIABLE : Cartes des avantages - vous pouvez modifier les titres et descriptions
    advantages: [
      {
        icon: "Zap", // MODIFIABLE : Icône (lucide-react)
        title: "RAPIDITÉ", // MODIFIABLE
        description: "Délais de livraison optimisés sans compromis sur la qualité." // MODIFIABLE
      },
      {
        icon: "ShieldCheck", // MODIFIABLE
        title: "QUALITÉ PREMIUM", // MODIFIABLE
        description: "Un rendu professionnel répondant aux standards internationaux." // MODIFIABLE
      },
      {
        icon: "DollarSign", // MODIFIABLE
        title: "PRIX COMPÉTITIFS", // MODIFIABLE
        description: "Des tarifs adaptés à vos besoins et à votre budget." // MODIFIABLE
      },
      {    
        icon: "Headphones", // MODIFIABLE
        title: "SUPPORT 24/7", // MODIFIABLE
        description: "Une équipe à votre écoute pour vous accompagner à chaque étape." // MODIFIABLE
      }
    ]
  },

  marquee_section: {
    subtitle: "// Galerie de Créations",
    title: "Flux <span className=\"text-outline\">Continu</span> d'Innovation."
  },

  contact_section: {
    subtitle: "// Contact",
    title: "PRÊT À <br /> TRANSFORMER <br /> LE MONDE ?",
    whatsappLabel: "WhatsApp / Tel",
    emailLabel: "Email",
    formTitle: "Lancer une mission",
    formNamePlaceholder: "NOM COMPLET",
    formEmailPlaceholder: "EMAIL",
    formProjectPlaceholder: "VOTRE PROJET",
    formSubmit: "Envoyer Message",
    whatsappDirectLabel: "Ou via WhatsApp",
    whatsappDirectLink: "Direct Chat"
  },

  loader: {
    text: "Chargement de l'excellence"
  },

  footer: {
    copyrightText: "Tous droits réservés."
  },

  /**
   * SERVICES & RÉALISATIONS
   * MODIFIABLE : Changez les URLs et titres des images/vidéos pour chaque service
   * Format : { url: "chemin/image.jpg", title: "Titre personnalisé" }
   * Pour les vidéos : utilisez des fichiers .mp4
   */
  services: [
    {
      id: 1,
      title: "Développement Web",
      description: "Sites web sur mesure, applications web progressives et e-commerce haute performance.",
      icon: "Globe",
      image: "siteweb.png",
      portfolio: [
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", title: "Site E-commerce Luxe" }, // MODIFIABLE
        { url: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80", title: "Application SaaS" }, // MODIFIABLE
        { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80", title: "Site Vitrine Premium" } // MODIFIABLE
      ]
    },
    {
      id: 2,
      title: "Intelligence Artificielle",
      description: "Solutions IA personnalisées, chatbots intelligents et systèmes d'automatisation.",
      icon: "Cpu",
      image: "IA.png",
      portfolio: [
        { url: "https://images.unsplash.com/photo-1573164713612-4e7cbd01d816?auto=format&fit=crop&w=800&q=80", title: "Shooting IA" }, // MODIFIABLE
        { url: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=800&q=80", title: "Video IA" }, // MODIFIABLE
        { url: "automatisation.png", title: "Automatisation Processus" } // MODIFIABLE
      ]
    },
    {
      id: 3,
      title: "Design Graphique",
      description: "Identité visuelle, logos, chartes graphiques et supports de communication.",
      icon: "Palette",
      image: "design.png",
      portfolio: [
        { url: "logo1.png", title: "Logo Entreprise Tech" }, // MODIFIABLE
        { url: "carte.png", title: "Carte de Visite Premium" }, // MODIFIABLE
        { url: "affiche.png", title: "Affiche" } // MODIFIABLE
      ]
    },
    {
      id: 4,
      title: "Montage Vidéo",
      description: "Vidéos promotionnelles, clips musicaux, motion design et montage professionnel.",
      icon: "Video",
      image: "ideo.png",
      portfolio: [
        { url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", title: "Montage Short" }, // MODIFIABLE
        { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", title: "Publicité Produit" }, // MODIFIABLE
        { url: "youtube.png", title: "Video Youtube" } // MODIFIABLE
      ]
    }
  ],

  /**
   * IMAGES DÉFILEMENT (MARQUEE) - MODIFIABLE
   * Ces images défilent en bas du site
   * Format : { id, title, category, type, url }
   */
  portfolio: [
    {
      id: 1,
      title: "Affiche",
      category: "Affiche",
      type: "image",
      url: "afficheleke.jpg" // MODIFIABLE
    },

     {
      id: 2,
      title: "IA",
      category: "Shooting IA",
      type: "image",
      url: "gourde.png" // MODIFIABLE
    },
    
    {
      id: 3,
      title: "IA",
      category: "Shooting IA",
      type: "image",
      url: "boumboum.png"
    },
    {
      id: 4,
      title: "IA",
      category: "Shooting IA",
      type: "image",
      url: "chaussure.jpg" // MODIFIABLE
    },
    {
      id: 5,
      title: "IA",
      category: "Shooting IA",
      type: "image",
      url: "poulet2.png" // MODIFIABLE
    },
    {
      id: 6,
      title: "Shooting IA",
      category: "image",
      type: "image",
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", // MODIFIABLE
      thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Affiche",
      category: "Affiche",
      type: "image",
      url: "weekend.png" // MODIFIABLE
    },
    {
      id: 8,
     title: "IA",
      category: "Shooting IA",
      type: "video",
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", // MODIFIABLE
      thumbnail: "https://images.unsplash.com/photo-1573164713612-4e7cbd01d816?auto=format&fit=crop&w=800&q=80" // MODIFIABLE
    }
  ],

  socials: {
    instagram: "https://instagram.com/akajunior",
    linkedin: "https://linkedin.com/in/akajunior",
    twitter: "https://twitter.com/akajunior"
  }
};
