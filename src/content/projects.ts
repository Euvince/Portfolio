import type { Project } from "@/lib/types";

/* Contenu éditable. Les textes traduits sont des paires [français, anglais]. */
export const projects: Project[] = [
  {
    slug: "networkxy",
    categories: ["mobile"],
    year: "2026",
    title: ["NetworkXY", "NetworkXY"],
    summary: [
      "Éditeur graphique de réseau domestique sur Android : dessin sur Canvas, connexions courbes, sauvegarde locale et export en image. Projet universitaire de Master 1.",
      "Graphical home-network editor on Android: Canvas drawing, curved connections, local saving and image export. Master 1 university project.",
    ],
    tags: ["Kotlin", "Canvas", "MVVM"],
    repoUrl: "https://github.com/Euvince",
    context: [
      [
        "NetworkXY permet de dessiner le réseau d’une maison (box, switchs, ordinateurs, imprimantes) et les liaisons entre ces appareils, directement depuis un téléphone, puis de partager le schéma.",
        "Réalisé en Kotlin pendant le Master 1 MIAGE, avec une architecture MVVM et un rendu entièrement dessiné sur Canvas.",
      ],
      [
        "NetworkXY lets you draw a home network (router, switches, computers, printers) and the links between devices straight from a phone, then share the diagram.",
        "Built in Kotlin during the Master 1 MIAGE, with an MVVM architecture and a fully Canvas-drawn rendering.",
      ],
    ],
    features: [
      [
        "Ajout et déplacement d’appareils sur le plan",
        "Connexions courbes entre les appareils",
        "Défilement du plan pour les grands schémas",
        "Sauvegarde locale des réseaux",
        "Export et partage du schéma en image",
      ],
      [
        "Adding and moving devices on the canvas",
        "Curved connections between devices",
        "Scrolling for large diagrams",
        "Local saving of networks",
        "Exporting and sharing the diagram as an image",
      ],
    ],
    stack: {
      frontend: [
        {
          name: "Kotlin",
        },
        {
          name: "Canvas",
        },
        {
          name: "MVVM",
        },
        {
          name: "ViewModel",
        },
      ],
    },
    structure: {
      frontend: `app/src/main/java/
  ui/         EditorScreen, NetworkView
  viewmodel/  NetworkViewModel
  model/      Device, Link, Network
  data/       LocalStorage
  share/      ImageExporter`,
    },
    learned: [
      [
        "Le dessin sur Canvas oblige à gérer soi-même les gestes, les coordonnées et le rafraîchissement. J’ai aussi appris à garder une vue simple en déplaçant la logique dans le ViewModel.",
      ],
      [
        "Canvas drawing means handling gestures, coordinates and redraws yourself. I also learned to keep the view simple by moving logic into the ViewModel.",
      ],
    ],
  },
  {
    slug: "starxy",
    categories: ["mobile"],
    year: "2026",
    inProgress: true,
    title: ["StarXY", "StarXY"],
    summary: [
      "Application Android des horaires de bus du réseau STAR : horaires théoriques GTFS, import persistant et notifications. Projet universitaire de Master 1.",
      "Android app for STAR bus timetables: GTFS scheduled times, persistent import and notifications. Master 1 university project.",
    ],
    tags: ["Kotlin", "Room", "WorkManager", "MVVM"],
    repoUrl: "https://github.com/Euvince",
    context: [
      [
        "StarXY consulte les horaires théoriques du réseau de bus STAR à partir des données ouvertes GTFS. L’objectif : les avoir sur le téléphone, même sans connexion, et être prévenu au bon moment.",
        "Projet universitaire de Master 1 en cours, en Kotlin avec une architecture MVVM.",
      ],
      [
        "StarXY browses the scheduled timetables of the STAR bus network from open GTFS data. The goal: have them on the phone, even offline, and get notified at the right time.",
        "Ongoing Master 1 university project, in Kotlin with an MVVM architecture.",
      ],
    ],
    features: [
      [
        "Consultation des horaires théoriques par ligne et par arrêt",
        "Import des données GTFS conservé sur l’appareil",
        "Mise à jour en arrière-plan avec WorkManager",
        "Notifications de rappel",
      ],
      [
        "Scheduled times by route and by stop",
        "GTFS data import kept on the device",
        "Background updates with WorkManager",
        "Reminder notifications",
      ],
    ],
    stack: {
      frontend: [
        {
          name: "Kotlin",
        },
        {
          name: "MVVM",
        },
        {
          name: "ViewModel",
        },
      ],
      backend: [
        {
          name: "Room",
          description: ["Base locale persistante des horaires", "Persistent local timetable database"],
        },
        {
          name: "WorkManager",
          description: ["Import GTFS et rappels en arrière-plan", "Background GTFS import and reminders"],
        },
        {
          name: "GTFS",
          description: ["Format ouvert des horaires du réseau", "Open timetable format of the network"],
        },
      ],
    },
    dataModel: [
      {
        name: "Stop",
        description: ["Arrêts du réseau", "Network stops"],
      },
      {
        name: "Route",
        description: ["Lignes de bus", "Bus routes"],
      },
      {
        name: "Trip",
        description: ["Courses d’une ligne", "Trips of a route"],
      },
      {
        name: "StopTime",
        description: ["Horaires de passage par arrêt", "Stop times per stop"],
      },
      {
        name: "Calendar",
        description: ["Jours de circulation", "Service days"],
      },
    ],
    structure: {
      frontend: `app/src/main/java/
  data/       Room (DAO, entités)
  import/     GtfsImportWorker
  ui/         écrans, adaptateurs
  viewmodel/  TimetableViewModel
  notify/     Reminders`,
    },
  },
  {
    slug: "facescan",
    categories: ["mobile", "web"],
    year: "2026",
    inProgress: true,
    title: ["FaceScan", "FaceScan"],
    summary: [
      "Prise de présence par QR code dynamique et reconnaissance faciale. Je suis responsable principal de l’application mobile et des API ; l’espace web enseignant est en Next.js.",
      "Attendance tracking with dynamic QR codes and facial recognition. I’m the main developer of the mobile app and the APIs; the teacher web space uses Next.js.",
    ],
    tags: ["Flutter", "Django", "PostgreSQL", "Next.js"],
    repoUrl: "https://github.com/Euvince",
    context: [
      [
        "FaceScan simplifie la prise de présence en classe : l’enseignant affiche un QR code qui change régulièrement, l’étudiant le scanne, puis son visage est vérifié pour limiter la fraude.",
        "Je suis responsable principal de l’application mobile Flutter et des API Django ; l’espace web destiné aux enseignants est développé en Next.js.",
      ],
      [
        "FaceScan simplifies class attendance: the teacher shows a QR code that changes regularly, the student scans it, then their face is checked to limit fraud.",
        "I’m the main developer of the Flutter mobile app and the Django APIs; the teacher web space is built with Next.js.",
      ],
    ],
    features: [
      [
        "Séance de cours avec QR code dynamique",
        "Scan du QR code depuis l’application mobile",
        "Vérification par reconnaissance faciale",
        "Dashboard web enseignant pour suivre les présences",
        "API REST sécurisées pour le mobile et le web",
      ],
      [
        "Class session with a dynamic QR code",
        "QR code scan from the mobile app",
        "Facial recognition check",
        "Teacher web dashboard to follow attendance",
        "Secured REST APIs for mobile and web",
      ],
    ],
    stack: {
      frontend: [
        {
          name: "Flutter",
        },
        {
          name: "Dart",
        },
        {
          name: "Next.js",
        },
      ],
      backend: [
        {
          name: "Django REST Framework",
          description: ["API REST pour le mobile et le web", "REST API for mobile and web"],
        },
        {
          name: "PostgreSQL",
          description: ["Données relationnelles", "Relational data"],
        },
      ],
    },
    dataModel: [
      {
        name: "User",
        description: ["Étudiants et enseignants", "Students and teachers"],
      },
      {
        name: "Course",
        description: ["Cours et groupes", "Courses and groups"],
      },
      {
        name: "Session",
        description: ["Séance avec QR code à durée limitée", "Session with a time-limited QR code"],
      },
      {
        name: "Attendance",
        description: ["Présence confirmée par le visage", "Attendance confirmed by face check"],
      },
      {
        name: "FaceProfile",
        description: ["Gabarit facial de référence", "Reference face template"],
      },
    ],
    structure: {
      frontend: `lib/
  core/
  features/
    auth/
    scan/
    attendance/
  shared/
  main.dart`,
      backend: `backend/
  config/
  accounts/
  courses/
  attendance/
  faces/
  manage.py`,
    },
    learned: [
      [
        "Combiner mobile, web et API m’oblige à garder des contrats clairs entre les trois. La reconnaissance faciale pose aussi des questions de fiabilité et de protection des données.",
      ],
      [
        "Combining mobile, web and API requires clear contracts between the three. Facial recognition also raises questions of reliability and data protection.",
      ],
    ],
  },
  {
    slug: "ebiblio",
    categories: ["web"],
    year: "2024",
    title: ["Ebiblio", "Ebiblio"],
    summary: [
      "Bibliothèque numérique de l’ENEAM : consultation et lecture en ligne de livres et de mémoires. J’ai réalisé l’API Laravel et participé à l’interface Next.js avec Daril.",
      "The ENEAM digital library: online browsing and reading of books and theses. I built the Laravel API and took part in the Next.js interface with Daril.",
    ],
    tags: ["Laravel", "Sanctum", "Next.js"],
    repoUrl: "https://github.com/Euvince",
    context: [
      [
        "Ebiblio est la bibliothèque numérique de l’ENEAM (École Nationale d’Économie Appliquée et de Management). L’objectif : moderniser l’accès aux ressources de l’école, livres, mémoires et thèses, avec une lecture directement dans le navigateur.",
        "Le projet est une application full-stack découplée, réalisée avec Daril : j’ai développé l’API REST Laravel et participé au frontend Next.js mené par Daril. Les deux dépôts communiquent via une API sécurisée par Laravel Sanctum.",
      ],
      [
        "Ebiblio is the digital library of ENEAM (National School of Applied Economics and Management). The goal: modernize access to the school’s resources, books, master’s theses and dissertations, with reading directly in the browser.",
        "The project is a decoupled full-stack application built with Daril: I developed the Laravel REST API and took part in the Next.js frontend led by Daril. Both repositories communicate through an API secured by Laravel Sanctum.",
      ],
    ],
    features: [
      [
        "Inscription, connexion et réinitialisation du mot de passe",
        "Catalogue de livres et de mémoires avec recherche par mots-clés",
        "Emprunts et réservations d’ouvrages",
        "Abonnements annuels et paiements",
        "Dépôt de mémoires et fiches de dépôt en PDF",
        "Rôles et permissions pour l’administration",
        "Rappels d’échéance envoyés en tâche de fond",
        "Import et export Excel, statistiques",
      ],
      [
        "Sign-up, login and password reset",
        "Catalogue of books and theses with keyword search",
        "Book loans and reservations",
        "Yearly subscriptions and payments",
        "Thesis submission and PDF filing reports",
        "Roles and permissions for administration",
        "Due-date reminders sent as background jobs",
        "Excel import and export, statistics",
      ],
    ],
    stack: {
      frontend: [
        {
          name: "Next.js 14",
          description: ["Framework React (App Router)", "React framework (App Router)"],
        },
        {
          name: "TypeScript",
          description: ["Typage intégral du projet", "Full typing of the project"],
        },
        {
          name: "NextAuth.js",
          description: ["Authentification et session côté client", "Authentication and client-side session"],
        },
        {
          name: "Axios + SWR",
          description: ["Requêtes HTTP et revalidation des données", "HTTP requests and data revalidation"],
        },
        {
          name: "React Hook Form, Zod",
          description: ["Formulaires et validation de schémas", "Forms and schema validation"],
        },
        {
          name: "TanStack Table",
          description: [
            "Tableaux avancés : tri, pagination, filtres",
            "Advanced tables: sorting, pagination, filters",
          ],
        },
        {
          name: "Recharts",
          description: ["Graphiques et statistiques", "Charts and statistics"],
        },
        {
          name: "Framer Motion",
          description: ["Animations d’interface", "Interface animations"],
        },
        {
          name: "React PDF, react-reader",
          description: [
            "Lecture de PDF et d’e-books dans le navigateur",
            "Reading PDFs and e-books in the browser",
          ],
        },
        {
          name: "Radix UI, Tailwind CSS",
          description: ["Composants accessibles et styles", "Accessible components and styling"],
        },
      ],
      backend: [
        {
          name: "Laravel 10",
          description: ["Framework PHP de l’API", "PHP framework of the API"],
        },
        {
          name: "Sanctum",
          description: ["Authentification par jetons", "Token authentication"],
        },
        {
          name: "Spatie Permission",
          description: ["Rôles et policies d’accès", "Roles and access policies"],
        },
        {
          name: "Spatie MediaLibrary",
          description: ["Fichiers et médias liés aux entités", "Files and media attached to entities"],
        },
        {
          name: "DomPDF, PHPWord",
          description: ["Génération de PDF et de documents Word", "PDF and Word document generation"],
        },
        {
          name: "Laravel Excel",
          description: ["Import et export de fichiers Excel", "Excel file import and export"],
        },
        {
          name: "Laravel Queue",
          description: ["Jobs asynchrones : notifications et rappels", "Async jobs: notifications and reminders"],
        },
        {
          name: "Scramble",
          description: ["Documentation OpenAPI automatique", "Automatic OpenAPI documentation"],
        },
      ],
    },
    dataModel: [
      {
        name: "Users, Roles, Permissions",
        description: ["Comptes et droits d’accès", "Accounts and access rights"],
      },
      {
        name: "Articles",
        description: ["Livres et ressources documentaires", "Books and documentary resources"],
      },
      {
        name: "SupportedMemories",
        description: ["Mémoires et thèses déposés", "Submitted theses"],
      },
      {
        name: "Loans, Reservations",
        description: ["Emprunts et réservations", "Loans and reservations"],
      },
      {
        name: "Subscriptions, Payments",
        description: ["Abonnements annuels et transactions", "Yearly subscriptions and transactions"],
      },
      {
        name: "Soutenances, FilingReports",
        description: ["Sessions de soutenance et fiches de dépôt", "Defense sessions and filing reports"],
      },
      {
        name: "SchoolYears, Cycles, Sectors",
        description: ["Calendrier académique et filières", "Academic calendar and programs"],
      },
      {
        name: "Reminders",
        description: ["Notifications et rappels d’échéance", "Notifications and due-date reminders"],
      },
    ],
    structure: {
      frontend: `app/
  (auth)/
  (app)/
    home/
    livres/
    memoires/
    settings/
  (dashboard)/
    admin/
components/
lib/
hooks/`,
      backend: `app/
  Http/Controllers/Api/
  Models/
  Policies/
  Jobs/
  Exports/
  Services/
database/migrations/
routes/api.php`,
    },
    learned: [
      [
        "Travailler en binôme sur un projet découplé m’a appris à définir des contrats d’API clairs, à documenter les endpoints et à déboguer des erreurs qui traversent les deux couches.",
        "J’ai aussi structuré un backend de taille réelle : rôles et policies, files de jobs, exports PDF et Excel.",
      ],
      [
        "Working in pairs on a decoupled project taught me to define clear API contracts, document endpoints and debug errors that cross both layers.",
        "I also structured a real-size backend: roles and policies, job queues, PDF and Excel exports.",
      ],
    ],
  },
];
