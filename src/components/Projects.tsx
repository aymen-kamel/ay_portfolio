import React, { useState } from "react";
import { ExternalLink, Calendar, Zap, Sparkles, Filter, Code2, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProjectItem {
  id: string;
  name: string;
  category: "ai" | "web" | "automation";
  dates: string;
  tags: string[];
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  featured?: boolean;
  link?: string;
  award?: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "smartplayai",
      name: "SmartPlayAI — Padel Video Analytics",
      category: "ai",
      dates: "2026 (SFE)",
      tags: ["YOLOv11", "TrackNet", "FastAPI", "React", "Computer Vision"],
      shortDesc: "Plateforme d'analyse vidéo intelligente pour le padel : détection & suivi des joueurs, détection de balle et métriques tactiques en temps réel.",
      fullDesc: "SmartPlayAI est une solution complète d'analyse de performance sportive par vision par ordinateur. Le système ingère des flux vidéo de matchs de padel, applique des modèles YOLOv11 pour le tracking des joueurs et TrackNet pour la trajectoire de la balle, puis restitue des statistiques tactiques complètes via une API FastAPI et une interface web React.",
      highlights: [
        "Détection et suivi multi-joueurs avec modèles YOLOv11 fine-tunés.",
        "Tracking ultra-rapide de la balle avec l'architecture TrackNet.",
        "Calcul des zones d'occupation et trajectoires tactiques en temps réel.",
        "API REST ultra-rapide avec FastAPI et Dashboard React réactif."
      ],
      featured: true
    },
    {
      id: "utopiahire",
      name: "UtopiaHire: AI Career Architect",
      category: "automation",
      dates: "TSYP13 Competition",
      tags: ["AI Matching", "LLM", "Talent Sourcing", "FastAPI", "React"],
      shortDesc: "Plateforme IA de recommandation de carrière et talent mapping connectant compétences, offres et profils candidats.",
      fullDesc: "UtopiaHire est un assistant carrière et plateforme de sourcing RH propulsé par l'IA. Développé pour la compétition nationale TSYP13, il permet de classifier les matrices de compétences, d'évaluer l'adéquation profil/poste et de guider les étudiants et recruteurs.",
      highlights: [
        "Lauréat de la 3e Place Nationale à TSYP13 (Équipe FSS).",
        "Algorithmes de recommandation et de matching sémantique compétences-offres.",
        "Génération automatisée de feedbacks d'orientation professionnelle."
      ],
      featured: true,
      award: "🏆 3e Place TSYP13"
    },
    {
      id: "heroscore",
      name: "HeroScore SaaS",
      category: "web",
      dates: "2025 (OSTX)",
      tags: ["SaaS", "AI Scoring", "Microservices", "Python", "Web"],
      shortDesc: "Plateforme SaaS de gamification et d'analyse automatique de données sportives avec scoring IA en temps réel.",
      fullDesc: "HeroScore est une plateforme SaaS co-fondée dans le cadre du programme startup OSTX 2025. Elle automatise l'analyse de données sportives et génère des classements et indices de performance basés sur des algorithmes d'IA.",
      highlights: [
        "Architecture microservices scalable.",
        "Algorithmes de scoring et d'évaluation en temps réel.",
        "Dashboard interactif de gamification et de suivi des métriques."
      ],
      featured: true
    },
    {
      id: "yolo-detection-api",
      name: "API Détection de Joueurs (YOLO11)",
      category: "ai",
      dates: "2025",
      tags: ["YOLOv11", "FastAPI", "OpenCV", "REST API"],
      shortDesc: "Service REST de détection d'objets et joueurs en temps réel pour l'analyse vidéo sportive.",
      fullDesc: "API REST haute performance développée avec FastAPI et YOLOv11 pour traiter les flux vidéo frame par frame et renvoyer une réponse JSON structurée contenant les détections et coordonnées des joueurs.",
      highlights: [
        "Inférence optimisée frame-by-frame.",
        "Endpoints REST asynchrones FastAPI.",
        "Intégration facile avec des tableaux de bord analytiques."
      ]
    },
    {
      id: "ai-interview-mock",
      name: "AI Interview Mock App",
      category: "web",
      dates: "2024 - 2025",
      tags: ["LLM", "Speech-to-Text", "React", "FastAPI"],
      shortDesc: "Application web interactive de simulation d'entretiens techniques avec feedback et évaluation IA.",
      fullDesc: "Plateforme web permettant aux candidats de s'entraîner aux entretiens d'embauche. L'application enregistre les réponses vocales, les retranscrit via Speech-to-Text, puis évalue les réponses à l'aide de LLMs pour fournir un rapport détaillé.",
      highlights: [
        "Speech-to-text temps réel.",
        "Évaluation automatique des réponses et détection de mots-clés.",
        "Interface fluide et conviviale."
      ]
    },
    {
      id: "chat-rag-intelligent",
      name: "Chat RAG Intelligent",
      category: "ai",
      dates: "2024",
      tags: ["RAG", "Vector Search", "LLM", "Embeddings"],
      shortDesc: "Système de question-réponse sur documents avec Retrieval-Augmented Generation et recherche sémantique.",
      fullDesc: "Assistant conversationnel capable d'analyser des corpus de documents PDF/TXT, de vectoriser l'information et de répondre aux questions complexes de l'utilisateur avec citation exacte des sources.",
      highlights: [
        "Vectorisation et indexation sémantique des documents.",
        "Système de prompt engineering optimisé avec LLMs.",
        "Interface conversationnelle naturelle."
      ]
    },
    {
      id: "cats-vs-dogs-dl",
      name: "Classification Computer Vision (VGG16 / ResNet50)",
      category: "ai",
      dates: "2024",
      tags: ["Deep Learning", "TensorFlow", "Transfer Learning"],
      shortDesc: "Comparaison et fine-tuning des architectures VGG16 et ResNet50 pour la classification d'images (94% accuracy).",
      fullDesc: "Projet de vision par ordinateur explorant l'efficacité du transfer learning sur de profonds réseaux de neurones convolutifs. Atteint une précision de 94% sur le jeu de test.",
      highlights: [
        "Fine-tuning des couches convolutives.",
        "Data augmentation & régularisation.",
        "Matrice de confusion et métriques détaillées."
      ]
    },
    {
      id: "n8n-telegram-bot",
      name: "n8n Telegram Match Automation Bot",
      category: "automation",
      dates: "2025",
      tags: ["n8n", "Telegram API", "Automation", "SofaScore API"],
      shortDesc: "Bot d'automatisation Telegram envoyant des alertes de matchs et métriques en temps réel.",
      fullDesc: "Workflow conçu sous n8n qui interroge les APIs sportives et envoie des notifications instantanées enrichies sur Telegram.",
      highlights: [
        "Execution asynchrone n8n.",
        "Formatage automatique de messages rich text."
      ]
    }
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Projets Sélectionnés
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez mes réalisations en Intelligence Artificielle, Computer Vision, Développement Web et Automatisation.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: "all", label: "Tous les projets" },
              { id: "ai", label: "🤖 IA & Computer Vision" },
              { id: "web", label: "🌐 Web & SaaS" },
              { id: "automation", label: "⚡ Automatisation & Sourcing" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === tab.id
                    ? "bg-primary/20 text-primary border-primary/50 shadow-md shadow-primary/20 scale-105"
                    : "bg-card/40 text-muted-foreground border-primary/10 hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`cv-card group cursor-pointer hover:border-primary/60 transition-all duration-300 flex flex-col justify-between ${
                  project.featured ? "border-primary/30" : ""
                }`}
              >
                <div>
                  {/* Top badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-accent rounded-full border border-primary/20 flex items-center gap-1">
                      <Calendar size={12} /> {project.dates}
                    </span>
                    {project.award ? (
                      <span className="text-xs font-bold px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full animate-pulse">
                        {project.award}
                      </span>
                    ) : project.featured ? (
                      <span className="text-xs font-semibold px-2.5 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full flex items-center gap-1">
                        <Zap size={12} /> Featured
                      </span>
                    ) : null}
                  </div>

                  <h3 className="text-2xl font-bold text-gradient mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted/40 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-primary/10 flex items-center justify-between text-xs text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Voir les détails & architecture</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Project Detail Dialog */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl bg-card/95 border-primary/40 backdrop-blur-2xl text-foreground p-6 sm:p-8">
            <DialogHeader>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="px-3 py-1 bg-primary/20 text-accent text-xs font-semibold rounded-full border border-primary/30">
                  {selectedProject.dates}
                </span>
                {selectedProject.award && (
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/40">
                    {selectedProject.award}
                  </span>
                )}
              </div>
              <DialogTitle className="text-3xl font-bold text-gradient mt-2">
                {selectedProject.name}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-base pt-2">
                {selectedProject.fullDesc}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 pt-4">
              {/* Highlights */}
              <div>
                <h4 className="text-base font-bold text-primary mb-3 flex items-center gap-2">
                  <Sparkles size={18} className="text-accent" /> Points Clés & Architecture
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <Code2 size={18} className="text-primary" /> Stack Technique
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-primary/20 flex justify-end">
                <Button
                  onClick={() => setSelectedProject(null)}
                  className="hero-button bg-primary/20 text-primary border-primary/40 px-6"
                >
                  Fermer
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;