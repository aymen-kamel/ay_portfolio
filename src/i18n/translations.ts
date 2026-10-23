export interface CaseStudyData {
  id: string;
  name: string;
  categoryTag: string;
  badge: string;
  dates: string;
  tags: string[];
  shortDesc: string;
  statusBadge: string;
  overview: string;
  context: string;
  objectives: string[];
  role: string;
  architecture: string[];
  techStack: { label: string; items: string[] }[];
  challenges: string[];
  results: string[];
  lessons: string[];
  link?: string;
}

export interface TranslationContent {
  nav: {
    brand: string;
    role: string;
    links: {
      home: string;
      work: string;
      expertise: string;
      journey: string;
      about: string;
      contact: string;
    };
    viewResume: string;
  };
  hero: {
    roleLabel: string;
    headlinePart1: string;
    headlinePart2: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    description: string;
    status: string;
    ctaWork: string;
    ctaContact: string;
    location: string;
    scrollIndicator: string;
  };
  quoteBanner: {
    quote: string;
    pillars: string;
  };
  work: {
    sectionNum: string;
    title: string;
    description: string;
    viewCaseStudy: string;
    closeCaseStudy: string;
    academicBadge: string;
    productBadge: string;
    developmentNotice: string;
    filterAll: string;
    filterAI: string;
    filterWeb: string;
    projects: CaseStudyData[];
  };
  expertise: {
    sectionNum: string;
    title: string;
    description: string;
    pillars: {
      id: string;
      title: string;
      desc: string;
      technologies: string[];
    }[];
  };
  experience: {
    sectionNum: string;
    title: string;
    description: string;
    rolesTitle: string;
    educationTitle: string;
    certTitle: string;
    leadershipTitle: string;
    roles: {
      role: string;
      company: string;
      type: string;
      period: string;
      location: string;
      badge: string;
      bullets: string[];
      techs: string[];
    }[];
    education: {
      degree: string;
      institution: string;
      period: string;
      status: string;
      badge: string;
    }[];
    certifications: {
      title: string;
      subtitle: string;
      category: string;
      date: string;
      description: string;
    }[];
    leadership: {
      title: string;
      role: string;
      description: string;
    }[];
  };
  about: {
    sectionNum: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    principles: { title: string; desc: string }[];
  };
  contact: {
    sectionNum: string;
    headline: string;
    subheadline: string;
    emailLabel: string;
    copyEmail: string;
    emailCopied: string;
    phoneLabel: string;
    locationLabel: string;
    locationVal: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSend: string;
    formSending: string;
    formSuccess: string;
    socialsLabel: string;
  };
  resumeModal: {
    title: string;
    subtitle: string;
    downloadBtn: string;
    profileTitle: string;
    closeBtn: string;
  };
  footer: {
    copyright: string;
    rights: string;
  };
}

export const translations: Record<"fr" | "en", TranslationContent> = {
  fr: {
    nav: {
      brand: "AK.",
      role: "AI ENGINEER · FULL-STACK DEVELOPER",
      links: {
        home: "Accueil",
        work: "Projets",
        expertise: "Expertise",
        journey: "Parcours",
        about: "À propos",
        contact: "Contact",
      },
      viewResume: "Voir le CV",
    },
    hero: {
      roleLabel: "AI ENGINEER · FULL-STACK DEVELOPER",
      headlinePart1: "Concevoir l'intelligence.",
      headlinePart2: "Créer l'impact.",
      headlineLine1: "Concevoir",
      headlineLine2: "l'intelligence.",
      headlineLine3: "Créer l'impact.",
      description:
        "Je conçois des systèmes intelligents et des produits digitaux qui transforment des idées ambitieuses en impact réel.",
      status: "Ouvert aux opportunités en IA & Software Engineering",
      ctaWork: "Découvrir mes projets",
      ctaContact: "Me contacter",
      location: "Basé en Tunisie · Disponible pour des opportunités internationales",
      scrollIndicator: "01 / 05 — SELECTED WORK",
    },
    quoteBanner: {
      quote: "Turning ideas into intelligent experiences.",
      pillars: "AI · ENGINEERING · PRODUCT · IMPACT",
    },
    work: {
      sectionNum: "02 / 04",
      title: "Projets sélectionnés.",
      description:
        "Une sélection soignée de réalisations combinant vision par ordinateur, modélisation d'intelligence artificielle, ingénierie logicielle et vision produit.",
      viewCaseStudy: "Étude de cas détaillée",
      closeCaseStudy: "Fermer l'étude de cas",
      academicBadge: "Projet Académique (PFE)",
      productBadge: "Produit Indépendant",
      developmentNotice: "Projet en cours de développement actif",
      filterAll: "Tous les projets",
      filterAI: "IA & Computer Vision",
      filterWeb: "Full-Stack & SaaS",
      projects: [
        {
          id: "smartplayai",
          name: "SmartPlayAI",
          categoryTag: "FINAL YEAR PROJECT · COMPUTER VISION",
          badge: "PFE 2026 — FSS & IIT Sfax",
          dates: "2026 (PFE en cours)",
          tags: ["Computer Vision", "Deep Learning", "YOLOv11", "TrackNet", "FastAPI", "React"],
          shortDesc:
            "Système intelligent d'analyse vidéo sportive pour le padel combinant vision par ordinateur et deep learning pour transformer des séquences de match en indicateurs tactiques et statistiques de performance.",
          statusBadge: "Projet Académique de Fin d'Études (En développement)",
          overview:
            "SmartPlayAI est le projet de fin d'études d'Aymen Kamel à la Faculté des Sciences de Sfax (FSS). Il s'agit d'une plateforme d'analyse vidéo sportive automatisée dédiée au padel, exploitant les avancées récentes en détection d'objets et suivi trajectoire haute fréquence.",
          context:
            "Le padel connaît un essor mondial spectaculaire mais manque cruellement d'outils analytiques automatisés et accessibles. Les solutions professionnelles existantes reposent sur des capteurs matériels très onéreux ou des caméras spécialisées inaccessibles aux clubs et joueurs amateurs.",
          objectives: [
            "Concevoir un pipeline de vision par ordinateur traitant des vidéos de matchs standard sans capteurs additionnels.",
            "Détecter et suivre les 4 joueurs de padel avec robustesse aux occultations et changements rapides de rythme.",
            "Traquer la balle de padel à haute vitesse et extraire sa trajectoire continue.",
            "Générer des métriques tactiques (zones d'occupation, répartition des coups, dynamiques de jeu).",
            "Exposer les résultats via une API REST asynchrone haute performance et un tableau de bord React intuitif."
          ],
          role: "Développeur IA & Computer Vision — Responsable de la conception de l'architecture logicielle, de l'entraînement/fine-tuning des modèles YOLOv11 et TrackNet, du backend FastAPI et du dashboard interactif React.",
          architecture: [
            "Ingestion Vidéo & Prétraitement frame-par-frame via OpenCV.",
            "Module Détection & Tracking Joueurs basé sur YOLOv11 fine-tuné et ByteTrack.",
            "Module Tracking Balle haute fréquence basé sur l'architecture convolutive TrackNet.",
            "Calcul Géométrique & Homographie pour projeter les coordonnées vidéo sur le plan 2D du court.",
            "API REST FastAPI asynchrone pour la distribution des métadonnées tactiques.",
            "Interface Web React réactive affichant heatmaps, trajectoires et statistiques comparatives."
          ],
          techStack: [
            { label: "Vision par Ordinateur", items: ["YOLOv11", "TrackNet", "OpenCV", "ByteTrack"] },
            { label: "Deep Learning & ML", items: ["PyTorch", "Python 3.11", "NumPy", "Pandas"] },
            { label: "Backend & API", items: ["FastAPI", "Uvicorn", "AsyncIO", "REST API"] },
            { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Recharts"] }
          ],
          challenges: [
            "Détection de la balle de padel de petite taille avec flou de mouvement élevé et occultations partielles contre les parois vitrées.",
            "Maintien des identifiants des joueurs lors de croisements fréquents au filet.",
            "Optimisation du débit d'inférence pour traiter les vidéos dans un temps d'exécution raisonnable sans clusters GPU industriels."
          ],
          results: [
            "Modèle expérimental capable de détecter les joueurs et la trajectoire de la balle sur des séquences vidéo réelles.",
            "Pipeline d'extraction de métriques tactiques fonctionnel (heatmaps et zones de présence).",
            "Projet sélectionné comme Stage de Fin d'Études (PFE) d'excellence à la FSS."
          ],
          lessons: [
            "L'importance critique de la préparation et de l'annotation rigoureuse des données d'entraînement pour les objets rapides.",
            "Les compromis d'architecture entre vitesse d'inférence et précision de détection en vision sportive.",
            "La structuration modulaire d'un backend IA pour permettre l'évolution indépendante des modèles."
          ]
        },
        {
          id: "memora",
          name: "MÉMORA",
          categoryTag: "INDEPENDENT PRODUCT · ENTREPRENEURSHIP",
          badge: "Produit Indépendant en Développement",
          dates: "2026 (Prototypage actif)",
          tags: ["Full-Stack", "Cloud Video", "NFC Hardware", "Product Design", "UX/UI"],
          shortDesc:
            "Une expérience hybride physique-digitale qui relie la photographie tangible et les souvenirs vidéo numériques privés grâce à des cartes interactives dotées de puces NFC et d'un repli QR sécurisé.",
          statusBadge: "Produit Indépendant en Phase de Prototypage",
          overview:
            "MÉMORA est une aventure entrepreneuriale initiée par Aymen Kamel. Le projet fusionne la noblesse de la papeterie physique de luxe et la technologie sans contact (NFC) pour créer des supports mémoriels interactifs.",
          context:
            "À l'ère du smartphone, les souvenirs vidéo les plus précieux se perdent dans des galeries numériques infinies et impersonnelles, tandis que les tirages photo traditionnels restent statiques et muets.",
          objectives: [
            "Concevoir une carte photo physique haut de gamme dissimulant une puce NFC haute durabilité.",
            "Développer un lecteur web instantané ne nécessitant aucune installation d'application par le destinataire.",
            "Bâtir une infrastructure cloud garantissant le streaming vidéo privé, rapide et chiffré.",
            "Intégrer une solution de secours par QR code discret pour les appareils sans lecteur NFC actif."
          ],
          role: "Co-concepteur & Développeur Full-Stack — Pilotage de la vision produit, prototypage des cartes NFC, architecture cloud de stockage vidéo, et développement de l'application web réactive.",
          architecture: [
            "Cartes physiques haute texture intégrant puces NTAG213 / NTAG215 pré-encodées.",
            "Redirection dynamique par URL sécurisée avec tokens de consultation uniques.",
            "Infrastructure cloud de stockage et streaming vidéo à faible latence.",
            "Interface web immersive au design minimaliste pour la lecture instantanée du média."
          ],
          techStack: [
            { label: "Hardware & Sans-Contact", items: ["NFC NTAG213/215", "Web NFC API", "QR Fallback"] },
            { label: "Full-Stack Web", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
            { label: "Cloud & Stockage", items: ["Cloudflare R2 / Storage", "Video Transcoding", "REST APIs"] },
            { label: "Design Produit", items: ["Figma", "Design Éditorial", "Packaging Luxe"] }
          ],
          challenges: [
            "Garantir une lecture NFC fluide sur iOS et Android sans friction ni installation d'application tierce.",
            "Optimiser l'encodage vidéo pour un chargement instantané même avec des connexions mobiles instables.",
            "Concevoir une identité visuelle physique et numérique cohérente, sobre et luxueuse."
          ],
          results: [
            "Prototypes physiques de cartes NFC fonctionnels testés avec succès.",
            "Architecture web de lecture vidéo interactive opérationnelle.",
            "Projet sélectionné pour incubation et poursuite du développement entrepreneurial."
          ],
          lessons: [
            "La convergence physique-numérique exige une attention obsessionnelle aux premiers instants de l'expérience utilisateur.",
            "L'importance de la sobriété technique au service de l'émotion humaine du produit."
          ]
        },
        {
          id: "heroscore",
          name: "HeroScore SaaS",
          categoryTag: "SAAS · STARTUP PROGRAM",
          badge: "Programme OSTX Startup 2025",
          dates: "2025",
          tags: ["SaaS", "Microservices", "Python", "AI Scoring", "REST APIs"],
          shortDesc:
            "Plateforme SaaS de gamification et d'analyse automatisée de données sportives avec génération en temps réel de classements et d'indices de performance basés sur l'IA.",
          statusBadge: "Projet de Startup Incubé (OSTX 2025)",
          overview:
            "Co-fondé dans le cadre du programme startup OSTX 2025, HeroScore automatise l'analyse des métriques sportives pour les tournois et ligues semi-professionnelles.",
          context:
            "L'engagement des participants dans les ligues locales souffre de la lourdeur manuelle de la saisie des résultats et du manque d'analyse statistique valorisante.",
          objectives: [
            "Bâtir une architecture microservices capable d'ingérer et d'agréger des scores sportifs en temps réel.",
            "Entraîner des algorithmes d'évaluation pour classer objectivement les performances individuelles et collectives.",
            "Offrir un tableau de bord dynamique et engageant pour les organisateurs et sportifs."
          ],
          role: "Co-fondateur & Lead AI Developer — Conception des algorithmes de scoring, architecture des microservices et intégration des flux de données.",
          architecture: [
            "Architecture backend distribuée en microservices Python.",
            "Moteur de calcul de scores pondérés et détection de tendances de jeu.",
            "API REST sécurisée pour l'interfaçage avec les applications web clientes."
          ],
          techStack: [
            { label: "Intelligence Artificielle", items: ["Python", "Algorithmes de Scoring", "Pandas", "Scikit-Learn"] },
            { label: "Backend", items: ["Microservices", "REST API", "PostgreSQL", "Docker"] }
          ],
          challenges: [
            "Concevoir une formule de scoring équitable tenant compte de la variabilité des oppositions.",
            "Assurer la scalabilité de l'ingestion de données lors des pics de fin de rencontre."
          ],
          results: [
            "Projet lauréat sélectionné et accompagné par le programme d'idéation OSTX 2025.",
            "Architecture microservices validée lors de simulations de tournois."
          ],
          lessons: [
            "La rigueur d'ingénierie doit s'articuler avec une compréhension intime des besoins des utilisateurs finaux."
          ]
        },
        {
          id: "utopiahire",
          name: "UtopiaHire: AI Career Architect",
          categoryTag: "AI INNOVATION · COMPETITION WINNER",
          badge: "3e Place Nationale — TSYP13",
          dates: "2024",
          tags: ["LLM", "Semantic Matching", "Talent Sourcing", "FastAPI", "React"],
          shortDesc:
            "Plateforme d'intelligence artificielle de recommandation de carrière et de cartographie de compétences, récompensée de la 3e place nationale à la compétition IEEE TSYP13.",
          statusBadge: "Projet Primé à l'Échelle Nationale",
          overview:
            "UtopiaHire utilise les modèles de langage et l'analyse sémantique pour évaluer les compétences des profils techniques et les mettre en correspondance avec les opportunités d'emploi adaptées.",
          context:
            "Le fossé entre les compétences académiques des jeunes diplômés et les exigences du marché technologique ralentit le recrutement et crée des disparités d'orientation.",
          objectives: [
            "Développer un algorithme de matching sémantique comparant matrices de compétences et fiches de poste.",
            "Générer des recommandations d'évolution personnalisées assistées par LLM.",
            "Faciliter le sourcing technique pour les recruteurs IT."
          ],
          role: "Développeur IA & Architecte Technique (Équipe FSS) — Implémentation du moteur de matching et de l'interface utilisateur.",
          architecture: [
            "Vectorisation des descriptions de postes et des CVs candidats.",
            "Moteur de similarité cosinus avec seuillage adaptatif.",
            "Génération de retours pédagogiques automatisés via API LLM."
          ],
          techStack: [
            { label: "Modèles & IA", items: ["LLM Embeddings", "Semantic Search", "Prompt Engineering"] },
            { label: "Full-Stack", items: ["FastAPI", "React", "TypeScript", "Tailwind CSS"] }
          ],
          challenges: [
            "Standardiser des profils candidats hétérogènes sans perte de nuances techniques.",
            "Optimiser la vitesse de calcul des similarités sémantiques sur un large corpus."
          ],
          results: [
            "3e Place Nationale décernée à la compétition TSYP13 parmi des dizaines d'équipes universitaires.",
            "Validation de la pertinence des classements par des professionnels du secteur IT."
          ],
          lessons: [
            "L'importance de l'explicabilité des algorithmes de recommandation pour gagner la confiance des utilisateurs."
          ]
        },
        {
          id: "yolo-detection-api",
          name: "API Détection de Joueurs (YOLO11)",
          categoryTag: "REST SERVICE · COMPUTER VISION",
          badge: "Projet d'Ingénierie IA 2025",
          dates: "2025",
          tags: ["YOLOv11", "FastAPI", "OpenCV", "Async Python"],
          shortDesc:
            "Microservice REST haute cadence d'inférence de vision par ordinateur pour la détection frame par frame des joueurs et objets sur flux sportifs.",
          statusBadge: "Composant Logiciel Opérationnel",
          overview:
            "Service REST asynchrone conçu pour découpler les calculs lourds de détection d'objets des applications clientes en transmettant des métadonnées JSON géoréférencées.",
          context:
            "La centralisation du traitement vidéo exige un service d'inférence dédié capable d'ingérer des flux et de répondre avec une latence minimale.",
          objectives: [
            "Créer un endpoint d'inférence optimisé pour le traitement d'images haute résolution.",
            "Fournir une réponse structurée contenant les boîtes englobantes, classes et scores de confiance.",
            "Faciliter l'intégration avec n'importe quel tableau de bord analytique."
          ],
          role: "Développeur Unique — Conception de l'API, optimisation des boucles d'inférence et conteneurisation.",
          architecture: [
            "Serveur FastAPI asynchrone avec gestionnaire de tâches d'arrière-plan.",
            "Pipeline d'inférence YOLOv11 avec mise en cache du modèle en mémoire GPU.",
            "Formatage JSON standardisé des détections."
          ],
          techStack: [
            { label: "IA & Vision", items: ["YOLOv11", "Ultralytics", "OpenCV"] },
            { label: "Backend", items: ["FastAPI", "Python 3.11", "Uvicorn"] }
          ],
          challenges: [
            "Minimiser le temps de sérialisation des tenseurs et d'envoi des coordonnées matricielles.",
            "Gestion propre de la mémoire vidéo lors des requêtes concurrentes."
          ],
          results: [
            "Inférence stable et reproductible intégrable dans des pipelines de traitement vidéo en direct."
          ],
          lessons: [
            "L'architecture asynchrone est indispensable pour isoler les temps de calcul d'un modèle d'IA."
          ]
        },
        {
          id: "ai-interview-mock",
          name: "AI Interview Mock App",
          categoryTag: "AI WEB APPLICATION",
          badge: "Projet Web & IA",
          dates: "2024–2025",
          tags: ["LLM", "Speech-to-Text", "React", "FastAPI"],
          shortDesc:
            "Application web interactive de simulation d'entretiens techniques avec transcription vocale temps réel et évaluation pédagogique automatisée par LLMs.",
          statusBadge: "Prototype Réalisé",
          overview:
            "Outil d'entraînement aux entretiens d'embauche permettant aux candidats de répondre vocalement à des questions techniques et de recevoir un rapport d'analyse structuré.",
          context:
            "La préparation aux entretiens techniques manque souvent de feedback objectif et immédiat pour les étudiants et jeunes diplômés.",
          objectives: [
            "Capturer et transcrire l'audio des réponses candidates en temps réel.",
            "Évaluer la pertinence technique, le vocabulaire métier et la clarté de l'argumentation.",
            "Fournir des pistes concrètes d'amélioration."
          ],
          role: "Développeur Full-Stack & IA — Intégration Speech-to-Text, conception des prompts d'évaluation et interface utilisateur.",
          architecture: [
            "Capture audio dans le navigateur avec API Web Audio.",
            "Transcription asynchrone via modèle Speech-to-Text.",
            "Moteur d'évaluation LLM structurant un rapport d'analyse à plusieurs critères."
          ],
          techStack: [
            { label: "IA", items: ["LLM API", "Speech-to-Text", "Prompt Design"] },
            { label: "Web", items: ["React", "FastAPI", "Tailwind CSS"] }
          ],
          challenges: [
            "Gérer la transcription de vocabulaire technique pointu sans déformation des concepts.",
            "Assurer une évaluation bienveillante mais rigoureuse."
          ],
          results: [
            "Simulateur fonctionnel testé par des pairs étudiants en informatique."
          ],
          lessons: [
            "L'expérience utilisateur en interaction vocale repose sur la fluidité des indicateurs d'état en direct."
          ]
        },
        {
          id: "chat-rag-intelligent",
          name: "Chat RAG Intelligent",
          categoryTag: "RAG & SEMANTIC SEARCH",
          badge: "Recherche Sémantique 2024",
          dates: "2024",
          tags: ["RAG", "Vector Search", "LLM", "Embeddings"],
          shortDesc:
            "Assistant conversationnel de question-réponse sur corpus documentaires avec indexation vectorielle sémantique et citation vérifiable des sources.",
          statusBadge: "Projet Réalisé",
          overview:
            "Solution de Retrieval-Augmented Generation (RAG) permettant d'interroger en langage naturel des documents techniques complexes sans risque d'hallucination.",
          context:
            "L'extraction rapide d'informations fiables dans des documents volumineux est un enjeu majeur pour les équipes d'ingénierie.",
          objectives: [
            "Segmenter et vectoriser des corpus PDF et texte.",
            "Retrouver les passages les plus pertinents par similarité sémantique.",
            "Formuler une réponse synthétique citant les passages d'origine."
          ],
          role: "Développeur IA — Mise en place du pipeline d'ingestion, de vectorisation et d'interrogation du modèle.",
          architecture: [
            "Chunking textuel et calcul d'embeddings vectoriels.",
            "Base de données vectorielle pour recherche k-NN.",
            "Génération augmentée avec contexte strict."
          ],
          techStack: [
            { label: "Composants RAG", items: ["Embeddings", "Vector Store", "LLM", "Python"] }
          ],
          challenges: [
            "Optimiser la taille et le chevauchement des segments textuels pour préserver le contexte."
          ],
          results: [
            "Assistant précis éliminant les hallucinations sur la documentation testée."
          ],
          lessons: [
            "La qualité d'un système RAG dépend à 80% de la rigueur de sa phase de chunking et de prétraitement."
          ]
        },
        {
          id: "cats-vs-dogs-dl",
          name: "Classification CV (VGG16 / ResNet50)",
          categoryTag: "DEEP LEARNING · TRANSFER LEARNING",
          badge: "Projet Académique 2024",
          dates: "2024",
          tags: ["Deep Learning", "TensorFlow", "Transfer Learning", "CNN"],
          shortDesc:
            "Étude comparative et optimisation par transfer learning des architectures convolutives VGG16 et ResNet50, atteignant 94% de précision sur jeu de test.",
          statusBadge: "Étude Terminée (94% Accuracy)",
          overview:
            "Projet de recherche académique évaluant les gains de performance et la vitesse de convergence offerts par le transfer learning sur de profonds réseaux convolutifs.",
          context:
            "L'entraînement de CNN from scratch nécessite d'immenses jeux de données et ressources matérielles, d'où l'importance de maîtriser le transfer learning.",
          objectives: [
            "Comparer VGG16 et ResNet50 sur des tâches de classification fine d'images.",
            "Appliquer des techniques avancées d'augmentation de données et régularisation.",
            "Mesurer les métriques de précision, rappel et matrice de confusion."
          ],
          role: "Développeur Deep Learning — Prétraitement des données, entraînement, fine-tuning et analyse métrique.",
          architecture: [
            "Extraction de caractéristiques avec couches pré-entraînées sur ImageNet.",
            "Fine-tuning progressif des dernières couches convolutives.",
            "Régularisation avec Dropout et Batch Normalization."
          ],
          techStack: [
            { label: "Deep Learning", items: ["TensorFlow", "Keras", "NumPy", "Matplotlib"] }
          ],
          challenges: [
            "Éviter le surapprentissage (overfitting) sur les classes complexes.",
            "Ajuster les taux d'apprentissage de façon différenciée."
          ],
          results: [
            "94% de précision validée sur le jeu de données test."
          ],
          lessons: [
            "La maîtrise des hyperparamètres de fine-tuning est déterminante pour tirer parti des réseaux profonds."
          ]
        }
      ]
    },
    expertise: {
      sectionNum: "03 / 04",
      title: "Expertise.",
      description:
        "Une pratique d'ingénierie transversale qui allie rigueur mathématique, vision par ordinateur et développement de produits logiciels scalables.",
      pillars: [
        {
          id: "01",
          title: "Intelligence Artificielle & Computer Vision",
          desc: "Conception et déploiement de modèles de vision par ordinateur, détection et tracking d'objets haute fréquence, architectures convolutionnelles (YOLO, TrackNet), et intégration de modèles de langage (LLMs & RAG).",
          technologies: ["Computer Vision", "YOLOv11", "TrackNet", "LLMs & RAG", "PyTorch", "TensorFlow", "OpenCV", "Deep Learning"]
        },
        {
          id: "02",
          title: "Développement Full-Stack & APIs",
          desc: "Architecture d'applications web modernes et réactives, conception d'APIs REST asynchrones haute cadence, services distribués et interfaces utilisateur nettes et accessibles.",
          technologies: ["FastAPI", "React", "TypeScript", "NestJS", "Node.js", "Angular", "Tailwind CSS", "REST APIs"]
        },
        {
          id: "03",
          title: "Ingénierie Logicielle & Cloud",
          desc: "Rigueur d'architecture logicielle, conception de microservices, pipeline d'ingestion de données, conteneurisation, gestion de bases de données relationnelles et non relationnelles.",
          technologies: ["Architecture Logicielle", "Docker", "Git & GitHub", "PostgreSQL", "SQL", "Cloudflare", "Microservices", "DevOps Basics"]
        },
        {
          id: "04",
          title: "IT Talent Sourcing & Vision Produit",
          desc: "Compréhension fine des compétences et rôles technologiques, cartographie de talents, qualification technique de profils ingénieurs, et sensibilité produit pour transformer la technique en valeur concrète.",
          technologies: ["IT Talent Sourcing", "Screening Technique", "Talent Mapping", "Méthodologie Agile/Scrum", "Product Thinking", "Communication Client"]
        }
      ]
    },
    experience: {
      sectionNum: "04 / 04",
      title: "Parcours & Formation.",
      description:
        "Une formation d'ingénieur rigoureuse couplée à des initiatives concrètes en startup, recherche académique et leadership associatif.",
      rolesTitle: "Expériences & Rôles",
      educationTitle: "Formation Académique",
      certTitle: "Certifications Vérifiées & Prix",
      leadershipTitle: "Leadership & Engagements",
      roles: [
        {
          role: "Développeur IA & Computer Vision",
          company: "SmartPlayAI",
          type: "Stage de Fin d'Études (PFE)",
          period: "2026",
          location: "Tunisie",
          badge: "SFE 2026",
          bullets: [
            "Conception et développement d'une plateforme intelligente d'analyse vidéo sportive pour le padel.",
            "Détection et suivi des joueurs à l'aide de modèles YOLO et d'algorithmes de tracking avancés.",
            "Détection de la balle avec le modèle TrackNet et analyse fine des trajectoires en temps réel.",
            "Extraction automatisée de statistiques de performance et génération d'indicateurs tactiques.",
            "Développement d'APIs REST asynchrones haute performance avec FastAPI et intégration dans une interface React."
          ],
          techs: ["YOLOv11", "TrackNet", "FastAPI", "React", "Python", "Computer Vision"]
        },
        {
          role: "Co-fondateur & Lead AI Developer",
          company: "HeroScore",
          type: "Programme OSTX Startup",
          period: "2025",
          location: "Tunisie / Remote",
          badge: "Startup OSTX",
          bullets: [
            "Développement d'une plateforme SaaS de gamification avec analyse automatique des données sportives.",
            "Conception et entraînement d'algorithmes d'IA pour le scoring et l'évaluation en temps réel des performances.",
            "Conception d'une architecture microservices évolutive et intégration d'APIs intelligentes."
          ],
          techs: ["Python", "Machine Learning", "Microservices", "REST APIs", "SaaS Analytics"]
        },
        {
          role: "Stage Développeur Full-Stack & IA",
          company: "Djagora",
          type: "Stage Professionnel",
          period: "2025",
          location: "Sfax, Tunisie",
          badge: "Full-Stack & IA",
          bullets: [
            "Développement d'applications web modernes et réactives avec Angular et NestJS.",
            "Intégration de fonctionnalités d'intelligence artificielle au sein des produits logiciels existants.",
            "Contribution à l'architecture backend, à la conception d'APIs REST et aux tests de performance."
          ],
          techs: ["Angular", "NestJS", "TypeScript", "REST APIs", "AI Integration"]
        }
      ],
      education: [
        {
          degree: "Cycle Ingénieur — Informatique / Data & AI",
          institution: "Institut International de Technologie (IIT Sfax)",
          period: "En cours",
          status: "Formation Ingénieur en Data Science & Intelligence Artificielle",
          badge: "Cycle Ingénieur"
        },
        {
          degree: "Licence en Sciences Informatiques",
          institution: "Faculté des Sciences de Sfax (FSS)",
          period: "2023 — 2026",
          status: "Diplômé Licence Sciences Informatiques",
          badge: "Diplômé FSS"
        },
        {
          degree: "Baccalauréat Mathématiques",
          institution: "Lycée Habib Maazoun",
          period: "2023",
          status: "Mention Très Bien — Section Mathématiques",
          badge: "Mention Très Bien"
        }
      ],
      certifications: [
        {
          title: "NVIDIA Deep Learning Institute",
          subtitle: "Deep Learning Fundamentals",
          category: "IA & Réseaux de Neurones",
          date: "Certifié",
          description: "Formation certifiée approfondie sur les architectures neuronales, l'entraînement de modèles de vision par ordinateur, et l'optimisation des hyperparamètres."
        },
        {
          title: "TSYP13 National Competition",
          subtitle: "3e Place Nationale — Équipe FSS",
          category: "Prix National d'Innovation IA",
          date: "Distinction Nationale",
          description: "Récompense pour le projet 'UtopiaHire: AI Career Architect' — plateforme IA de matching sémantique compétences-opportunités."
        },
        {
          title: "OSTX Startup Program",
          subtitle: "Incubation & Idéation SaaS",
          category: "Entrepreneuriat",
          date: "2025",
          description: "Programme d'accélération axé sur la conception de produits SaaS, l'architecture microservices, le prototypage rapide et le pitch investisseurs."
        },
        {
          title: "IELTS Academic",
          subtitle: "Overall Band 5.5",
          category: "Certification Linguistique",
          date: "Certification Officielle",
          description: "Évaluation officielle des compétences académiques en langue anglaise (compréhension et expression écrite et orale)."
        }
      ],
      leadership: [
        {
          title: "IEEE Computer Society",
          role: "Membre du Bureau Exécutif (2 ans)",
          description: "Coordination d'activités techniques, organisation d'ateliers d'ingénierie logicielle, de webinaires et de hackathons régionaux."
        },
        {
          title: "Congrès & Compétitions Techniques",
          role: "Participant Actif & Représentant",
          description: "Participation à CSTAM, IEEE Xtreme 18.0, WiEAct et PESTGM.i autour des avancées en intelligence artificielle et développement logiciel."
        }
      ]
    },
    about: {
      sectionNum: "01 / 04",
      title: "À propos.",
      subtitle: "Ingénieur en devenir alliant modélisation d'intelligence artificielle et conception produit.",
      p1:
        "Diplômé en Sciences Informatiques de la Faculté des Sciences de Sfax (2026) et poursuivant actuellement mon Cycle Ingénieur en Informatique / Data & AI à l'IIT Sfax, mon parcours est guidé par une exigence : transformer des concepts d'intelligence artificielle avancés en systèmes logiciels performants, fiables et utiles.",
      p2:
        "De la conception de pipelines de vision par ordinateur en temps réel (SmartPlayAI) à la création d'architectures SaaS modulaires (HeroScore), j'aime intervenir sur l'intégralité du cycle de vie d'un projet : compréhension du problème, choix des modèles, conception des APIs asynchrones et soin apporté à l'interface finale.",
      p3:
        "Curieux, autonome et rigoureux, je m'intéresse également de près à la qualification technique des profils IT et aux dynamiques d'équipes d'ingénierie internationales, avec la volonté continue d'apprendre au contact de projets ambitieux.",
      principles: [
        {
          title: "Rigueur d'Ingénierie",
          desc: "Privilégier la clarté architecturale, la reproductibilité et la robustesse du code avant tout artifice."
        },
        {
          title: "Sens du Produit",
          desc: "Une technologie n'a de sens que si elle résout un problème concret et offre une expérience évidente."
        },
        {
          title: "Évolution Continue",
          desc: "Veille constante sur l'état de l'art en IA, Computer Vision et pratiques de développement full-stack."
        }
      ]
    },
    contact: {
      sectionNum: "05 / 05",
      headline: "Construisons quelque chose de concret.",
      subheadline:
        "Une opportunité en IA ou Software Engineering, un projet ambitieux ou une idée à discuter ? Échangeons.",
      emailLabel: "Email direct",
      copyEmail: "Copier l'email",
      emailCopied: "Email copié !",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      locationVal: "Sfax, Tunisie · Ouvert à l'international",
      formName: "Votre nom complet *",
      formEmail: "Adresse email *",
      formSubject: "Sujet de votre message",
      formMessage: "Votre message *",
      formSend: "Envoyer le message",
      formSending: "Envoi en cours...",
      formSuccess: "Merci pour votre message ! Je vous répondrai dans les plus brefs délais.",
      socialsLabel: "Réseaux & Plateformes",
    },
    resumeModal: {
      title: "AYMEN KAMEL",
      subtitle: "Diplômé Sciences Informatiques · Étudiant Ingénieur IIT Sfax · IA & Full-Stack",
      downloadBtn: "Télécharger le CV (PDF)",
      profileTitle: "Profil & Synthèse Professionnelle",
      closeBtn: "Fermer",
    },
    footer: {
      copyright: "Aymen Kamel",
      rights: "Concevoir l'intelligence. Créer de l'impact.",
    }
  },
  en: {
    nav: {
      brand: "AK.",
      role: "AI ENGINEER · FULL-STACK DEVELOPER",
      links: {
        home: "Home",
        work: "Work",
        expertise: "Expertise",
        journey: "Journey",
        about: "About",
        contact: "Contact",
      },
      viewResume: "View Resume",
    },
    hero: {
      roleLabel: "AI ENGINEER · FULL-STACK DEVELOPER",
      headlinePart1: "Engineering intelligence.",
      headlinePart2: "Creating impact.",
      headlineLine1: "Engineering",
      headlineLine2: "intelligence.",
      headlineLine3: "Creating impact.",
      description:
        "I build intelligent systems and digital products that turn ambitious ideas into real-world impact.",
      status: "Open to AI / Software Engineering opportunities",
      ctaWork: "Explore my work",
      ctaContact: "Get in touch",
      location: "Based in Tunisia · Available for international opportunities",
      scrollIndicator: "01 / 05 — SELECTED WORK",
    },
    quoteBanner: {
      quote: "Turning ideas into intelligent experiences.",
      pillars: "AI · ENGINEERING · PRODUCT · IMPACT",
    },
    work: {
      sectionNum: "02 / 04",
      title: "Selected Work.",
      description:
        "A curated selection of projects combining computer vision, artificial intelligence modeling, software engineering, and product vision.",
      viewCaseStudy: "Detailed Case Study",
      closeCaseStudy: "Close Case Study",
      academicBadge: "Final Year Project (PFE)",
      productBadge: "Independent Product",
      developmentNotice: "Active development in progress",
      filterAll: "All Projects",
      filterAI: "AI & Computer Vision",
      filterWeb: "Full-Stack & SaaS",
      projects: [
        {
          id: "smartplayai",
          name: "SmartPlayAI",
          categoryTag: "FINAL YEAR PROJECT · COMPUTER VISION",
          badge: "PFE 2026 — FSS & IIT Sfax",
          dates: "2026 (PFE in progress)",
          tags: ["Computer Vision", "Deep Learning", "YOLOv11", "TrackNet", "FastAPI", "React"],
          shortDesc:
            "An intelligent padel match analysis system combining computer vision and deep learning to transform match footage into meaningful tactical performance insights.",
          statusBadge: "Final Year Academic Engineering Project (In Development)",
          overview:
            "SmartPlayAI is Aymen Kamel's Final Year Engineering Project at the Faculty of Sciences of Sfax (FSS). It is an automated video analysis platform dedicated to padel, leveraging recent breakthroughs in object detection and high-speed trajectory tracking.",
          context:
            "Padel is experiencing massive global growth but lacks accessible, automated video analytics. Existing pro solutions rely on expensive sensor hardware or specialized multi-camera setups that are unaffordable for local clubs and amateur players.",
          objectives: [
            "Build a computer vision pipeline processing standard broadcast footage without external sensors.",
            "Detect and track all 4 padel players with high robustness to occlusions and rapid court movements.",
            "Track high-speed ball motion and reliably extract continuous trajectory data.",
            "Generate tactical metrics (court coverage heatmaps, shot distribution, match dynamics).",
            "Expose analytics through a high-performance asynchronous FastAPI REST backend and responsive React dashboard."
          ],
          role: "AI & Computer Vision Developer — Leading software architecture design, YOLOv11 and TrackNet model training/fine-tuning, FastAPI backend services, and interactive React dashboard.",
          architecture: [
            "Video Ingestion & Frame Preprocessing via OpenCV.",
            "Player Detection & Tracking module based on fine-tuned YOLOv11 and ByteTrack.",
            "High-frequency Ball Tracking module leveraging convolutional TrackNet architecture.",
            "Geometric Homography Mapping projecting video coordinates onto a 2D court representation.",
            "Asynchronous FastAPI REST endpoints serving tactical metadata.",
            "React Web Interface visualizing live trajectory charts, heatmaps, and player statistics."
          ],
          techStack: [
            { label: "Computer Vision", items: ["YOLOv11", "TrackNet", "OpenCV", "ByteTrack"] },
            { label: "Deep Learning & ML", items: ["PyTorch", "Python 3.11", "NumPy", "Pandas"] },
            { label: "Backend & API", items: ["FastAPI", "Uvicorn", "AsyncIO", "REST API"] },
            { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Recharts"] }
          ],
          challenges: [
            "Small padel ball size compounded by high motion blur and partial occlusions against glass court walls.",
            "Maintaining player identities across frequent crossings near the net.",
            "Optimizing inference throughput to process footage in practical timeframes without industrial GPU clusters."
          ],
          results: [
            "Experimental model capable of tracking players and ball trajectory across real match footage.",
            "Working tactical analytics extraction pipeline (heatmaps and presence zones).",
            "Selected as a flagship Final Year Project (PFE) at FSS."
          ],
          lessons: [
            "The critical importance of disciplined training data annotation for high-speed small objects.",
            "Balancing architectural trade-offs between inference framerate and detection precision.",
            "Designing modular AI backends to decouple vision pipelines from user-facing APIs."
          ]
        },
        {
          id: "memora",
          name: "MÉMORA",
          categoryTag: "INDEPENDENT PRODUCT · ENTREPRENEURSHIP",
          badge: "Independent Product in Development",
          dates: "2026 (Active prototyping)",
          tags: ["Full-Stack", "Cloud Video", "NFC Hardware", "Product Design", "UX/UI"],
          shortDesc:
            "A premium physical-digital memory experience bringing physical photographs and private digital video memories together through elegant NFC-enabled products and secure QR fallback.",
          statusBadge: "Independent Product Prototype Phase",
          overview:
            "MÉMORA is an independent entrepreneurial product created by Aymen Kamel. The project bridges fine tactile physical stationery with contactless NFC technology to create living, interactive memories.",
          context:
            "In our smartphone era, our most meaningful video memories become buried in endless, impersonal camera rolls, while printed photographs remain static and silent.",
          objectives: [
            "Design a luxury physical photo card embedding an invisible, durable NFC chip.",
            "Develop an instantaneous web player requiring zero app downloads by the recipient.",
            "Build secure cloud infrastructure ensuring private, fast, and encrypted video streaming.",
            "Integrate an elegant QR fallback for devices without active NFC readers."
          ],
          role: "Co-creator & Full-Stack Developer — Leading product direction, NFC physical prototyping, cloud video streaming architecture, and interactive web application.",
          architecture: [
            "Tactile textured physical cards embedding pre-encoded NTAG213 / NTAG215 chips.",
            "Dynamic URL redirection using secure single-token authentication.",
            "Low-latency cloud video storage and adaptive streaming pipeline.",
            "Minimalist, editorial web interface for immediate media playback."
          ],
          techStack: [
            { label: "Hardware & Contactless", items: ["NFC NTAG213/215", "Web NFC API", "QR Fallback"] },
            { label: "Full-Stack Web", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
            { label: "Cloud & Storage", items: ["Cloudflare R2 / Storage", "Video Transcoding", "REST APIs"] },
            { label: "Product Design", items: ["Figma", "Editorial Design", "Luxury Packaging"] }
          ],
          challenges: [
            "Ensuring seamless NFC reading across iOS and Android without third-party app friction.",
            "Optimizing video compression for instant start times on mobile network connections.",
            "Crafting a physical and digital identity that feels timeless and understated."
          ],
          results: [
            "Physical NFC card prototypes engineered and verified on real devices.",
            "Interactive video playback web application fully operational.",
            "Accepted for incubation and continued venture prototyping."
          ],
          lessons: [
            "Phygital products demand meticulous care in the first 3 seconds of user interaction.",
            "Technology should recede into the background to keep the emotional experience front and center."
          ]
        },
        {
          id: "heroscore",
          name: "HeroScore SaaS",
          categoryTag: "SAAS · STARTUP PROGRAM",
          badge: "OSTX Startup Program 2025",
          dates: "2025",
          tags: ["SaaS", "Microservices", "Python", "AI Scoring", "REST APIs"],
          shortDesc:
            "SaaS platform for sports data gamification and automated performance analysis, featuring real-time AI scoring and dynamic player leaderboards.",
          statusBadge: "Incubated Startup Project (OSTX 2025)",
          overview:
            "Co-founded through the OSTX 2025 startup program, HeroScore automates sports performance tracking for tournaments and semi-professional leagues.",
          context:
            "Local sports tournament organizers struggle with manual scorekeeping and lack analytical tools to engage participants.",
          objectives: [
            "Construct a microservices architecture ingesting live match data.",
            "Train evaluation algorithms to generate objective player performance indices.",
            "Provide a sleek, gamified dashboard for organizers and athletes."
          ],
          role: "Co-founder & Lead AI Developer — Designing scoring algorithms, microservices infrastructure, and live data pipelines.",
          architecture: [
            "Distributed backend architecture powered by Python microservices.",
            "Weighted scoring engine calculating real-time player ratings.",
            "Secure REST APIs interfacing with client web applications."
          ],
          techStack: [
            { label: "Artificial Intelligence", items: ["Python", "Scoring Algorithms", "Pandas", "Scikit-Learn"] },
            { label: "Backend", items: ["Microservices", "REST API", "PostgreSQL", "Docker"] }
          ],
          challenges: [
            "Designing a fair scoring formula that accounts for varying opposition strength.",
            "Handling data ingestion spikes during tournament finals."
          ],
          results: [
            "Selected and supported by the OSTX 2025 startup ideation program.",
            "Microservices architecture validated across simulated tournament workloads."
          ],
          lessons: [
            "Engineering rigor must constantly align with direct customer problem feedback."
          ]
        },
        {
          id: "utopiahire",
          name: "UtopiaHire: AI Career Architect",
          categoryTag: "AI INNOVATION · COMPETITION WINNER",
          badge: "3rd Place National Award — TSYP13",
          dates: "2024",
          tags: ["LLM", "Semantic Matching", "Talent Sourcing", "FastAPI", "React"],
          shortDesc:
            "AI-powered career recommendation and skill-mapping platform awarded 3rd place nationally at the IEEE TSYP13 competition.",
          statusBadge: "Nationally Awarded Engineering Project",
          overview:
            "UtopiaHire leverages large language models and semantic vector analysis to match engineering candidate skills with relevant industry roles.",
          context:
            "The gap between academic computer science curricula and industry hiring criteria creates hiring friction and career misalignment.",
          objectives: [
            "Build a semantic matching engine comparing skill matrices with job requirements.",
            "Generate actionable, LLM-guided career progression roadmaps.",
            "Streamline candidate technical sourcing for IT recruiters."
          ],
          role: "AI Developer & Technical Architect (Team FSS) — Implementing semantic matching algorithms and user interface.",
          architecture: [
            "Vector embeddings for candidate CVs and technical job postings.",
            "Cosine similarity ranking with adaptive thresholds.",
            "Automated feedback generation using structured LLM prompts."
          ],
          techStack: [
            { label: "AI Models", items: ["LLM Embeddings", "Semantic Search", "Prompt Engineering"] },
            { label: "Full-Stack", items: ["FastAPI", "React", "TypeScript", "Tailwind CSS"] }
          ],
          challenges: [
            "Standardizing unstructured candidate profiles without stripping technical depth.",
            "Optimizing vector computation speed over large candidate datasets."
          ],
          results: [
            "Awarded 3rd Place Nationally at IEEE TSYP13 among university teams.",
            "Algorithm recommendations validated by technical recruiters."
          ],
          lessons: [
            "Recommendation explainability is vital to establishing user trust in AI hiring systems."
          ]
        },
        {
          id: "yolo-detection-api",
          name: "Player Detection API (YOLO11)",
          categoryTag: "REST SERVICE · COMPUTER VISION",
          badge: "AI Engineering Project 2025",
          dates: "2025",
          tags: ["YOLOv11", "FastAPI", "OpenCV", "Async Python"],
          shortDesc:
            "High-throughput asynchronous REST microservice for real-time player detection and bounding-box coordinate tracking on sports video streams.",
          statusBadge: "Operational Software Component",
          overview:
            "Asynchronous REST service built to offload heavy computer vision computation from client dashboards, streaming geo-referenced JSON detections.",
          context:
            "Centralizing video inference requires dedicated microservices capable of processing video frames with minimal latency.",
          objectives: [
            "Expose an optimized inference endpoint for high-resolution imagery.",
            "Deliver structured JSON responses with bounding boxes, classes, and confidence scores.",
            "Enable frictionless integration with any frontend dashboard."
          ],
          role: "Sole Developer — API architecture, inference loop optimization, and Dockerization.",
          architecture: [
            "Asynchronous FastAPI server with background task queues.",
            "YOLOv11 inference pipeline caching weights in GPU memory.",
            "Standardized JSON output serialization."
          ],
          techStack: [
            { label: "AI & Vision", items: ["YOLOv11", "Ultralytics", "OpenCV"] },
            { label: "Backend", items: ["FastAPI", "Python 3.11", "Uvicorn"] }
          ],
          challenges: [
            "Minimizing tensor serialization overhead over REST endpoints.",
            "Managing GPU memory cleanup across concurrent video sessions."
          ],
          results: [
            "Stable, reproducible inference service ready for live sports pipeline integration."
          ],
          lessons: [
            "Asynchronous architecture is essential to isolate AI model compute times."
          ]
        },
        {
          id: "ai-interview-mock",
          name: "AI Interview Mock App",
          categoryTag: "AI WEB APPLICATION",
          badge: "Web & AI Project",
          dates: "2024–2025",
          tags: ["LLM", "Speech-to-Text", "React", "FastAPI"],
          shortDesc:
            "Interactive technical interview practice platform featuring real-time speech transcription and automated LLM-based pedagogical evaluation.",
          statusBadge: "Working Prototype",
          overview:
            "Technical job interview practice simulator enabling candidates to speak naturally and receive structured evaluation reports.",
          context:
            "Engineering students and junior developers frequently lack accessible, objective technical interview feedback.",
          objectives: [
            "Capture and transcribe spoken answers in real time.",
            "Evaluate technical precision, industry terminology, and argument clarity.",
            "Deliver constructive improvement suggestions."
          ],
          role: "Full-Stack & AI Developer — Speech-to-text integration, evaluation prompt design, and web UI.",
          architecture: [
            "Browser-level audio capture via Web Audio APIs.",
            "Asynchronous speech-to-text transcription.",
            "Multi-criteria LLM evaluation returning structured feedback."
          ],
          techStack: [
            { label: "AI", items: ["LLM API", "Speech-to-Text", "Prompt Design"] },
            { label: "Web", items: ["React", "FastAPI", "Tailwind CSS"] }
          ],
          challenges: [
            "Transcribing specialized engineering terminology without distortion.",
            "Calibrating prompts for rigorous yet constructive assessment."
          ],
          results: [
            "Functional simulator tested by fellow computer science students."
          ],
          lessons: [
            "Voice-first interfaces demand crystal-clear real-time visual status cues."
          ]
        },
        {
          id: "chat-rag-intelligent",
          name: "Intelligent Document RAG Chat",
          categoryTag: "RAG & SEMANTIC SEARCH",
          badge: "Semantic Search 2024",
          dates: "2024",
          tags: ["RAG", "Vector Search", "LLM", "Embeddings"],
          shortDesc:
            "Technical documentation Q&A assistant featuring semantic vector search, chunk embeddings, and verifiable source citations.",
          statusBadge: "Completed Project",
          overview:
            "Retrieval-Augmented Generation (RAG) assistant allowing natural-language queries across technical documents without hallucination risk.",
          context:
            "Extracting precise information from large engineering PDF corpora is a constant productivity bottleneck.",
          objectives: [
            "Segment and vectorize PDF and text document sets.",
            "Retrieve top-k relevant excerpts using cosine similarity.",
            "Generate grounded syntheses citing original page sources."
          ],
          role: "AI Developer — Ingestion pipeline, vector storage, and query orchestration.",
          architecture: [
            "Document chunking and vector embedding generation.",
            "Vector database for fast k-NN semantic search.",
            "Grounded response generation with strict context enforcement."
          ],
          techStack: [
            { label: "RAG Components", items: ["Embeddings", "Vector Store", "LLM", "Python"] }
          ],
          challenges: [
            "Tuning chunk size and overlap to preserve technical context across page breaks."
          ],
          results: [
            "High-precision document assistant eliminating hallucinations on benchmark manuals."
          ],
          lessons: [
            "RAG system accuracy depends primarily on the discipline of the chunking and ingestion phase."
          ]
        },
        {
          id: "cats-vs-dogs-dl",
          name: "Computer Vision Classification (VGG16 / ResNet50)",
          categoryTag: "DEEP LEARNING · TRANSFER LEARNING",
          badge: "Academic Project 2024",
          dates: "2024",
          tags: ["Deep Learning", "TensorFlow", "Transfer Learning", "CNN"],
          shortDesc:
            "Comparative study and transfer learning fine-tuning of deep convolutional neural network architectures reaching 94% test accuracy.",
          statusBadge: "Completed Study (94% Test Accuracy)",
          overview:
            "Academic deep learning project evaluating transfer learning convergence and accuracy gains across VGG16 and ResNet50.",
          context:
            "Training deep convolutional networks from scratch demands massive compute and datasets, highlighting the value of fine-tuning pre-trained backbones.",
          objectives: [
            "Compare VGG16 and ResNet50 performance on fine-grained image classification.",
            "Apply data augmentation, dropout, and batch normalization.",
            "Evaluate precision, recall, and confusion matrix metrics."
          ],
          role: "Deep Learning Developer — Preprocessing, training, fine-tuning, and metric analysis.",
          architecture: [
            "Pre-trained ImageNet convolutional feature extractor.",
            "Progressive unfreezing of deep layers for targeted fine-tuning.",
            "Dropout and early stopping regularization."
          ],
          techStack: [
            { label: "Deep Learning", items: ["TensorFlow", "Keras", "NumPy", "Matplotlib"] }
          ],
          challenges: [
            "Preventing overfitting while maintaining generalization on unseen validation splits."
          ],
          results: [
            "Achieved 94% validated classification accuracy on test sets."
          ],
          lessons: [
            "Careful learning-rate schedules are essential when unfreezing deep convolutional layers."
          ]
        }
      ]
    },
    expertise: {
      sectionNum: "03 / 04",
      title: "Expertise.",
      description:
        "A cross-disciplinary engineering practice bridging mathematical rigor, computer vision, and scalable production software development.",
      pillars: [
        {
          id: "01",
          title: "Artificial Intelligence & Computer Vision",
          desc: "Designing and deploying computer vision models, real-time object tracking (YOLO, TrackNet), deep convolutional architectures, and LLM integrations with RAG pipelines.",
          technologies: ["Computer Vision", "YOLOv11", "TrackNet", "LLMs & RAG", "PyTorch", "TensorFlow", "OpenCV", "Deep Learning"]
        },
        {
          id: "02",
          title: "Full-Stack Development & APIs",
          desc: "Architecting responsive modern web apps, high-throughput asynchronous REST APIs, distributed microservices, and clean, accessible user interfaces.",
          technologies: ["FastAPI", "React", "TypeScript", "NestJS", "Node.js", "Angular", "Tailwind CSS", "REST APIs"]
        },
        {
          id: "03",
          title: "Software Engineering & Cloud",
          desc: "Modular software architecture, microservices design, video ingestion pipelines, Docker containerization, relational/NoSQL database modeling, and cloud deployments.",
          technologies: ["Software Architecture", "Docker", "Git & GitHub", "PostgreSQL", "SQL", "Cloudflare", "Microservices", "DevOps Basics"]
        },
        {
          id: "04",
          title: "IT Talent Sourcing & Product Thinking",
          desc: "Deep understanding of technical engineering roles, talent mapping, rigorous developer screening, and product instinct to turn raw tech into real-world impact.",
          technologies: ["IT Talent Sourcing", "Technical Screening", "Talent Mapping", "Agile/Scrum", "Product Thinking", "Client Communication"]
        }
      ]
    },
    experience: {
      sectionNum: "04 / 04",
      title: "Journey & Education.",
      description:
        "Rigorous engineering education complemented by hands-on startup ventures, academic research, and community leadership.",
      rolesTitle: "Experience & Roles",
      educationTitle: "Academic Background",
      certTitle: "Verified Certifications & Awards",
      leadershipTitle: "Leadership & Community",
      roles: [
        {
          role: "AI & Computer Vision Developer",
          company: "SmartPlayAI",
          type: "Final Year Project (PFE)",
          period: "2026",
          location: "Tunisia",
          badge: "PFE 2026",
          bullets: [
            "Conception and engineering of an intelligent padel match video analytics platform.",
            "Player detection and continuous tracking leveraging fine-tuned YOLO models and tracking algorithms.",
            "Ball tracking utilizing TrackNet architecture with real-time trajectory analytics.",
            "Automated performance metric extraction and tactical indicator generation.",
            "Development of high-throughput asynchronous REST APIs with FastAPI and integration into a React dashboard."
          ],
          techs: ["YOLOv11", "TrackNet", "FastAPI", "React", "Python", "Computer Vision"]
        },
        {
          role: "Co-founder & Lead AI Developer",
          company: "HeroScore",
          type: "OSTX Startup Program",
          period: "2025",
          location: "Tunisia / Remote",
          badge: "OSTX Startup",
          bullets: [
            "Engineering a sports data gamification SaaS platform with automated match analysis.",
            "Designing and training AI scoring algorithms for real-time player and team ratings.",
            "Architecting scalable microservices and integrating intelligent API workflows."
          ],
          techs: ["Python", "Machine Learning", "Microservices", "REST APIs", "SaaS Analytics"]
        },
        {
          role: "Full-Stack & AI Engineering Intern",
          company: "Djagora",
          type: "Professional Internship",
          period: "2025",
          location: "Sfax, Tunisia",
          badge: "Full-Stack & AI",
          bullets: [
            "Development of reactive web applications using Angular and NestJS.",
            "Integration of artificial intelligence features into existing client software solutions.",
            "Backend architecture contributions, REST API design, and performance testing."
          ],
          techs: ["Angular", "NestJS", "TypeScript", "REST APIs", "AI Integration"]
        }
      ],
      education: [
        {
          degree: "Engineering Degree (Cycle Ingénieur) — Data & AI",
          institution: "International Institute of Technology (IIT Sfax)",
          period: "In Progress",
          status: "Engineering Cycle in Data Science & Artificial Intelligence",
          badge: "Cycle Ingénieur"
        },
        {
          degree: "Bachelor in Computer Science (Licence)",
          institution: "Faculty of Sciences of Sfax (FSS)",
          period: "2023 — 2026",
          status: "Graduated with Computer Science Degree",
          badge: "FSS Graduate"
        },
        {
          degree: "High School Baccalaureate — Mathematics",
          institution: "Lycée Habib Maazoun",
          period: "2023",
          status: "Graduated with Highest Honors (Mention Très Bien)",
          badge: "Highest Honors"
        }
      ],
      certifications: [
        {
          title: "NVIDIA Deep Learning Institute",
          subtitle: "Deep Learning Fundamentals",
          category: "AI & Neural Networks",
          date: "Certified",
          description: "Certified training on deep neural architectures, computer vision model training, hyperparameter optimization, and PyTorch/TensorFlow."
        },
        {
          title: "TSYP13 National Competition",
          subtitle: "3rd Place Winner — Team FSS",
          category: "National AI Award",
          date: "National Award",
          description: "Recognized for project 'UtopiaHire: AI Career Architect' — AI semantic matching engine connecting candidate skills to roles."
        },
        {
          title: "OSTX Startup Program",
          subtitle: "Incubation & SaaS Ideation",
          category: "Entrepreneurship",
          date: "2025",
          description: "Startup acceleration program focusing on SaaS architecture, microservices prototyping, and investor pitching."
        },
        {
          title: "IELTS Academic",
          subtitle: "Overall Band 5.5",
          category: "Language Certification",
          date: "Official Certification",
          description: "Official academic English language proficiency evaluation (reading, writing, listening, speaking)."
        }
      ],
      leadership: [
        {
          title: "IEEE Computer Society",
          role: "Executive Bureau Member (2 Years)",
          description: "Coordinating technical workshops, software engineering seminars, and regional hackathons fostering student innovation."
        },
        {
          title: "Tech Congresses & Symposia",
          role: "Active Participant & Representative",
          description: "Active engagement at CSTAM, IEEE Xtreme 18.0, WiEAct, and PESTGM.i presenting advances in AI and modern web engineering."
        }
      ]
    },
    about: {
      sectionNum: "01 / 04",
      title: "About.",
      subtitle: "Aspiring engineer bridging artificial intelligence modeling and digital product craft.",
      p1:
        "Graduated in Computer Science from the Faculty of Sciences of Sfax (2026) and currently pursuing my Engineering Degree in Data & AI at IIT Sfax, my journey is driven by a clear aim: translating cutting-edge artificial intelligence concepts into reliable, high-performance software that solves real problems.",
      p2:
        "From engineering real-time computer vision pipelines (SmartPlayAI) to co-founding modular SaaS architectures (HeroScore), I love working across the complete project lifecycle: domain problem analysis, model selection, asynchronous API design, and meticulous user experience execution.",
      p3:
        "Curious, disciplined, and entrepreneurial, I also hold a strong interest in technical IT candidate screening and international engineering team collaboration, constantly learning from ambitious technical challenges.",
      principles: [
        {
          title: "Engineering Rigor",
          desc: "Prioritizing architectural clarity, maintainability, and code robustness over superficial novelty."
        },
        {
          title: "Product Sensibility",
          desc: "Technology achieves value only when it solves a concrete human problem with intuitive design."
        },
        {
          title: "Continuous Learning",
          desc: "Constantly researching state-of-the-art developments in AI, Computer Vision, and full-stack software practices."
        }
      ]
    },
    contact: {
      sectionNum: "05 / 05",
      headline: "Let's build something meaningful.",
      subheadline:
        "Have an opportunity in AI or Software Engineering, an ambitious project, or an idea worth discussing? Let's connect.",
      emailLabel: "Direct Email",
      copyEmail: "Copy Email",
      emailCopied: "Email copied!",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationVal: "Sfax, Tunisia · Open to International Roles",
      formName: "Full Name *",
      formEmail: "Email Address *",
      formSubject: "Subject",
      formMessage: "Message *",
      formSend: "Send Message",
      formSending: "Sending...",
      formSuccess: "Thank you for reaching out! I will get back to you shortly.",
      socialsLabel: "Platforms & Profiles",
    },
    resumeModal: {
      title: "AYMEN KAMEL",
      subtitle: "Computer Science Graduate · IIT Sfax Engineering Student · AI & Full-Stack",
      downloadBtn: "Download Resume (PDF)",
      profileTitle: "Executive Summary & Profile",
      closeBtn: "Close",
    },
    footer: {
      copyright: "Aymen Kamel",
      rights: "Engineering intelligence. Creating impact.",
    }
  }
};
