export const about = {
  fr: {
      title: "PARCOURS ET COMPÉTENCES",
      subtitle: "Parcours atypique, discipline militaire appliquée aux opérations de sécurité et d'analyse technique.",
      
      // Section Bio & Objectifs
      bioTitle: "[ 01. PROFIL PROFESSIONNEL & OBJECTIFS ]",
      bioText: `Technophile doté d'un esprit opérationnel, j'ai passé 6 ans au sein du 3e Régiment de Parachutistes d'Infanterie de Marine (3e RPIMa) où j’ai opéré en tant que soldat puis en tant que chef d'équipe. Cette expérience a renforcé ma discipline, ma résistance au stress et mon aptitude à suivre des protocoles stricts en situation critique.

Aujourd'hui basé à Toulouse, j'ai amorcé ma reconversion dans la cyberdéfense avec la même rigueur et motivation. Entièrement autodidacte, je fais de l’apprentissage en autonomie ma force principale pour me permettre de suivre l’évolution des nouvelles menaces et de poursuivre ma montée en compétences. 

Je me suis formé intensivement aux métiers de la Blue Team, je maîtrise l'analyse de logs, le triage d'alertes et la manipulation d'outils clés comme Splunk ou ELK, des compétences validées par les certifications CompTIA Security+ et Google Cybersecurity (et actuellement en préparation de la certification Blue Team Level 1).
Curieux et polyvalent, je pratique également le développement web (React, Tailwind CSS, JavaScript) sur mon temps libre, ce qui me permet de comprendre le fonctionnement des applications que je dois défendre et de concevoir des outils sur mesure (comme ce portfolio !).

Mon objectif : Intégrer un SOC à Toulouse d'ici la fin de l'année, mettre mon sens de l'observation et ma réactivité au service de la surveillance de vos infrastructures, afin d'évoluer durablement au sein de l'entreprise en montant en compétences et en responsabilités.`,
        bioTransition: "Découvrez ci-dessous mon parcours auto-didacte et mes certifications.",
      
      // Section Certifs & Formations
      certsTitle: "[ 02. CERTIFICATIONS OFFICIELLES ]",
      googleDesc: "Certification introductive offrant un premier ancrage complet dans les fondamentaux de la sécurité : modèles de gestion des risques (NIST CSF), bases des réseaux et des OS (Linux/Windows), requêtes SQL et premiers scripts Python d'automatisation. Initiation globale à l'analyse de menaces, à la gestion de logs et aux concepts de détection via SIEM (Chronicle/Splunk) et IDS/IPS (Suricata).",
      comptiaDesc: `Certification de référence validant le socle technique et opérationnel indispensable pour intégrer un centre de surveillance (SOC). Maîtrise des architectures réseaux sécurisées, de la défense en profondeur et des principes de cryptographie appliquée et d'IAM.
      Spécifiquement orientée opérations : analyse détaillée des vecteurs d'attaque courants (Phishing, Ransomware, attaques web OWASP), triage d'alertes, méthodologie de réponse aux incidents (de l'identification au post-incident via les frameworks NIST/ISO), qualification et priorisation des vulnérabilités (scoring CVE/CVSS), ainsi que l'application des politiques de sécurité et de conformité (RGPD).`,
      btl1Desc: "Formation intensive 100% pratique sur les opérations de Blue Teaming : analyse des artefacts Windows, investigation de logs (Splunk/ELK), phishing et réponse aux incidents (IR).",

      // Section TryHackMe
      thmTitle: "[ 03. ENTRAÎNEMENT & LABS (TRYHACKME) ]",
      thmSubtitle: "Plus de 200 heures de pratique concrète sur des scénarios d'attaque et de défense réels.",
      socl2Type: "Blue Team / Avancé",
      socl1Type: "Blue Team / Fondamentaux",
      csType: "Général / Fondamentaux",
      jrptType: "Red Team / Intermédiaire",
      webfunType: "Web Tech / Securité",
      presecType: "Pré-requis / Networking",
      socl2Desc: "Ce parcours concrétise la transition vers des fonctions d'analyse avancée et de réponse aux incidents (SOC L2). J’y ai approfondi la maîtrise des SIEM/XDR avec les requêtes complexe (SPL sous Splunk, KQL/Lucene sous Elastic), le déploiement de règles de détection personnalisées sur Wazuh (Sigma) et la mise en place d'environnements de laboratoire SOC. En ingénierie de la détection, j'ai pu m'appuyer sur la Cyber Threat Intelligence pour transformer des indicateurs en règles tactiques et automatiser les flux de réponse via SOAR. Pour la recherche proactive, le parcours couvre la conduite de sessions de Threat Hunting à travers toutes les phases d'une compromission (accès initial, pivotement, exfiltration), ainsi que la validation des détections par de l'émulation d'attaques (Purple Teaming avec Atomic Red Team et CALDERA). Enfin, j'y ai développé des compétences méthodologiques en réponse aux incidents (cycle complet NIST/SANS) et en analyse de malwares, combinant l'étude de l'architecture x86, l'analyse statique/dynamique, le débogage et l'inspection de documents malveillants ou de fichiers PE.",
      socl1Desc: "C’est le parcours central de ma formation, directement axé sur les opérations quotidiennes d’un analyste SOC L1. J’y ai appris la méthodologie de tri et de rédaction de rapports d'incidents, l'utilisation des workbooks et la prise en main des solutions clés de sécurité : EDR, SOAR, et SIEM (Splunk, Elastic Stack). Ainsi que les frameworks de référence (MITRE ATT&CK, Cyber Kill Chain, Unified Kill Chain, Pyramid of Pain) pour contextualiser les menaces et comprendre le déroulement d'une attaque. Sur le plan pratique, le parcours couvre l'analyse approfondie de phishing, le monitoring réseau (Wireshark, NetworkMiner, Snort/IDS) pour détecter l'exfiltration ou les attaques MitM, ainsi que la surveillance des logs d'audit Windows et Linux pour identifier la persistance, l'élévation de privilèges ou l'usage de techniques Living Off The Land. Il intègre également les bases de l'analyse de malwares et l'enrichissement par la Cyber Threat Intelligence (CTI). Enfin, j'ai mis en pratique ces compétences lors du triage d'alertes en environnement SIEM et au travers de plusieurs scénarios d'investigation réalistes (capstones Boogeyman, Tempest).",
      csDesc: "Ce parcours complet couvre l'intégralité des bases de la cybersécurité moderne. J'y ai consolidé mes bases en administration système sous Linux et Windows, en gestion Active Directory, ainsi qu'en commandes Bash et PowerShell. Côté réseau, j'ai approfondi les protocoles fondamentaux (TCP/IP, DNS, HTTP/S) et l'analyse de trafic via Wireshark, Tcpdump et Nmap. Le parcours couvre également la sécurité web et les données — mécanismes SQL, cryptographie, hachage, vulnérabilités de l'OWASP Top 10 — ainsi que la prise en main d'outils offensifs comme Metasploit, Burp Suite, Hydra et Gobuster pour comprendre les méthodes d'attaque. Dans le défensif j'ai appris l'analyse de logs, l'initiation aux principes du DFIR, le fonctionnement des SIEM, pare-feux et IDS, ainsi que l'utilisation d'outils d'investigation comme CyberChef, CAPA, REMnux et FlareVM.",
      jrptDesc: "Ce parcours m'a permis de passer du côté 'Red Team' pour comprendre concrètement comment un attaquant s'introduit dans un système : de la reconnaissance initiale avec Nmap jusqu'à l'élévation de privilèges sous Windows et Linux, en passant par l'exploitation web et l'usage de Metasploit. Voir le système d'information avec les yeux de l'adversaire me permet aujourd'hui de détecter les signaux faibles beaucoup plus vite, de mieux anticiper les chemins d'attaque et de comprendre la vraie gravité derrière une alerte SOC.",
      webfunDesc: "Formation fondamentale sur les technologies web et leurs vecteurs d'attaque (OWASP Top 10, SQLi, XSS, SSRF, IDOR, Command Injection). Pratique de l'analyse de flux et de requêtes HTTP/S via Burp Suite. Cette maîtrise du fonctionnement des applications web m'a permis de mieux comprendre le contexte des alertes SOC, de distinguer les faux positifs et d'identifier plus aisément les tentatives d'exploitation dans les journaux d'événements.",
      presecDesc: "Module fondamental couvrant le socle prérequis à la sécurité offensive et défensive : fonctionnement matériel/OS (Windows/Linux CLI, virtualisation, Cloud), fondamentaux des réseaux (modèle OSI, paquets/trames, DNS, HTTP/S) et bases logicielles (SQL, scripts Python/JS, encodage). Première approche des principes de sécurité (Triade CIA, cryptographie, rôles d'attaquant vs défenseur).",

      // Section Dev
      devTitle: "[ 04. DÉVELOPPEMENT WEB ]",
      devDesc: "Modules FreeCodeCamp (HTML5, CSS3, JavaScript, React, Tailwind CSS). Capable de concevoir des interfaces web dynamiques et des scripts d'automatisation.",

      // Section CV
      cvButton: "[ DEPLOYER / AFFICHER LE CV COMPLET ]",
      cvClose: "[ FERMER ]"
  },
  en: {
      title: "CURRICULUM & SKILLS",
      subtitle: "Atypical background, military discipline applied to security operations and technical analysis.",
      
      bioTitle: "[ 01. BACKGROUND & OBJECTIVES ]",
      bioText: `Tech enthusiast with an operational mindset, I spent 6 years serving as a French infantry paratrooper (3RPIMa) as a soldier and squad leader. This experience built my strong discipline, stress resilience, and ability to follow strict protocols in high-pressure environments.

Now based in Toulouse, I am transitioning into cyber defense with the same rigor and drive. As a fully self-taught practitioner, I leverage my continuous learning ability to stay ahead of evolving threats and consistently expand my skill set.

I have trained intensively in Blue Team operations, developing proficiency in log analysis, alert triage, and core SIEM platforms such as Splunk and ELK—skills validated by the CompTIA Security+ and Google Cybersecurity certifications (with Blue Team Level 1 currently in progress).
Curious and versatile, I also practice web development (React, Tailwind CSS, JavaScript) in my spare time. This allows me to better understand the application layers I defend and to build custom tools (such as this portfolio!).

My goal: Join a SOC in Toulouse by the end of the year, put my keen observation skills and responsiveness to work monitoring your infrastructure, and grow within the company over the long term as I take on new skills and responsibilities.`,
        bioTransition: "Discover below my self-taught journey and certifications.",
      
      certsTitle: "[ 02. CERTIFICATIONS ]",
      googleDesc: "Foundational certification serving as a broad entry point across key security domains: risk management frameworks (NIST CSF), core networking and OS administration (Linux/Windows), SQL querying, and basic Python automation. Provides a comprehensive baseline in threat analysis, log management, and SOC detection concepts using SIEM (Chronicle/Splunk) and IDS/IPS (Suricata) tools.",
      comptiaDesc: `Industry-standard credential validating the essential technical and operational baseline required for SOC operations. Mastery of secure network architectures, defense-in-depth principles, applied cryptography, and Identity & Access Management (IAM).
      Operationally focused: detailed analysis of common attack vectors (Phishing, Ransomware, OWASP top threats), alert triage, incident response methodology (from detection to post-incident using NIST/ISO frameworks), vulnerability assessment and prioritization (CVE/CVSS scoring), and enforcement of security policies and compliance standards (GDPR).`,
      btl1Desc: "100% hands-on training focused on Blue Team operations: Windows artifact analysis, log investigation (Splunk/ELK), phishing, and incident response (IR).",

      thmTitle: "[ 03. PRACTICE & LABS (TRYHACKME) ]",
      thmSubtitle: "Over 200 hours of hands-on experience on real-world attack and defense scenarios.",
      socl2Type: "Blue Team / Advanced",
      socl1Type: "Blue Team / Fundamentals",
      csType: "General / Fundamentals",
      jrptType: "Red Team / Intermediate",
      webfunType: "Web Tech / Security",
      presecType: "Prerequisites / Networking",
      socl2Desc: "This path marks the transition toward advanced analysis and Incident Response (SOC L2 functions). I deepened my SIEM/XDR proficiency through complex querying (Splunk SPL, Elastic KQL/Lucene), custom detection rule engineering on Wazuh using Sigma, and SOC lab setup. In Detection Engineering, I leverage Cyber Threat Intelligence to transform threat indicators into actionable tactical rules and streamline automated workflows using SOAR. For proactive defense, the curriculum covers structured Threat Hunting across all phases of an intrusion (foothold, pivoting, endgame), alongside detection validation through adversary emulation (Purple Teaming using Atomic Red Team and CALDERA). Lastly, I acquired formal Incident Response methodologies (covering the full NIST/SANS lifecycle) and malware analysis skills, incorporating x86 assembly, Windows internals, static and dynamic analysis, debugging, and malicious document/PE header inspection.",
      socl1Desc: "This is the core path of my training, directly aligned with the day-to-day operations of a SOC L1 analyst. I developed hands-on methodology for alert triage, incident reporting, workbook execution, and the operational use of key security solutions: EDR, SOAR, and SIEM platforms (Splunk, Elastic Stack). I apply industry frameworks (MITRE ATT&CK, Cyber Kill Chain, Unified Kill Chain, Pyramid of Pain) to map threat behaviors and understand attack lifecycles. Operationally, the curriculum covers end-to-end phishing analysis, network traffic monitoring (Wireshark, NetworkMiner, Snort/IDS) to detect exfiltration or MitM attempts, and security log analysis across Windows and Linux to catch persistence, privilege escalation, or Living Off The Land techniques. It also includes malware analysis fundamentals and threat intelligence enrichment (CTI). Finally, I applied these skills through hands-on SIEM alert triage and complex, multi-stage investigation challenges (such as the Boogeyman and Tempest capstones).",
      csDesc: "This path serves as a comprehensive review of all core cybersecurity pillars. I consolidated my system administration foundations across Linux, Windows, and Active Directory environments, alongside shell scripting using Bash and PowerShell. On the networking side, I covered essential protocols (TCP/IP, DNS, HTTP/S) and practiced traffic analysis using Wireshark, Tcpdump, and Nmap. The curriculum also covers web security and data protection—SQL fundamentals, cryptography, hashing, OWASP Top 10 vulnerabilities—combined with hands-on practice using offensive tooling like Metasploit, Burp Suite, Hydra, and Gobuster to understand attacker vectors. Finally, the defensive module ties everything together through log analysis, DFIR fundamentals, SIEM/IDS/Firewall architecture, and exposure to analysis tools including CyberChef, CAPA, REMnux, and FlareVM.",
      jrptDesc: "This path gave me hands-on Red Team exposure to understand how attackers actually break into a system: from initial recon with Nmap to Windows/Linux privilege escalation, web exploitation, and Metasploit framework usage. Seeing the network through an adversary's eyes helped me spot subtle indicators much faster, anticipate attack paths, and gauge the real severity behind a SOC alert.",
      webfunDesc: "Fundamental path covering core web technologies and modern vulnerability mechanics (OWASP Top 10, SQLi, XSS, SSRF, IDOR, Command Injection). Hands-on experience analyzing HTTP/S traffic and request manipulation using Burp Suite. Understanding underlying application behaviors enhanced my SOC alert triage skills, helps filter false positives, and taught me precise identification of exploit attempts within security logs.",
      presecDesc: "Foundational path covering essential prerequisites for both offensive and defensive security: hardware & OS fundamentals (Windows/Linux CLI, virtualization, Cloud), networking core concepts (OSI model, packets/frames, DNS, HTTP/S), and software basics (SQL, Python/JS scripting, data encoding). Introduces core security concepts (CIA Triad, cryptography, hacker vs. defender roles).",

      devTitle: "[ 04. WEB DEVELOPMENT ]",
      devDesc: "FreeCodeCamp modules (HTML5, CSS3, JavaScript, React, Tailwind CSS). Capable of building dynamic web UIs and automation scripts.",

      cvButton: "[ DEPLOY / VIEW FULL RESUME ]",
      cvClose: "[ CLOSE ]"
  }
};