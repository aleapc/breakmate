// BreakMate Privacy Policy - Internationalization (15 languages)
const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', name: 'English', label: 'EN' },
  { code: 'pt-BR', flag: '🇧🇷', name: 'Português', label: 'PT' },
  { code: 'es', flag: '🇪🇸', name: 'Español', label: 'ES' },
  { code: 'fr', flag: '🇫🇷', name: 'Français', label: 'FR' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch', label: 'DE' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano', label: 'IT' },
  { code: 'zh-CN', flag: '🇨🇳', name: '中文', label: 'ZH' },
  { code: 'ja', flag: '🇯🇵', name: '日本語', label: 'JA' },
  { code: 'ko', flag: '🇰🇷', name: '한국어', label: 'KO' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский', label: 'RU' },
  { code: 'hi', flag: '🇮🇳', name: 'हिन्दी', label: 'HI' },
  { code: 'ar', flag: '🇸🇦', name: 'العربية', label: 'AR', dir: 'rtl' },
  { code: 'bn', flag: '🇧🇩', name: 'বাংলা', label: 'BN' },
  { code: 'nl', flag: '🇳🇱', name: 'Nederlands', label: 'NL' },
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe', label: 'TR' },
];

const T = {};
function makeLang(overrides) { return Object.assign({}, T.en, overrides); }

// =====================
// ENGLISH (base)
// =====================
T.en = {
  'back': '← Back to Home',
  'pp.title': 'Privacy Policy',
  'pp.updated': 'Last updated: February 16, 2026',
  'pp.summary': '<strong>In short:</strong> BreakMate does not collect, store, or transmit any personal data. The application works entirely offline and requires no accounts, no internet connection, and no permissions beyond basic desktop access.',
  'pp.s1.title': '1. Overview',
  'pp.s1.text': 'BreakMate is a desktop application for Windows that provides health reminders (eye rest, hydration, posture, movement, and stretching). This privacy policy explains how BreakMate handles your data.',
  'pp.s2.title': '2. Data Collection',
  'pp.s2.text': 'BreakMate does <strong>not</strong> collect any personal data. Specifically:',
  'pp.s2.l1': 'No personal information is collected (name, email, phone, etc.)',
  'pp.s2.l2': 'No usage analytics or telemetry are collected',
  'pp.s2.l3': 'No browsing data or activity is tracked',
  'pp.s2.l4': 'No location data is accessed',
  'pp.s2.l5': 'No device identifiers are collected',
  'pp.s2.l6': 'No crash reports are sent',
  'pp.s3.title': '3. Network Activity',
  'pp.s3.text': 'BreakMate operates <strong>100% offline</strong>. The application makes zero network requests. It does not connect to any servers, APIs, or cloud services. No internet connection is required to use BreakMate.',
  'pp.s4.title': '4. Local Data Storage',
  'pp.s4.text': 'BreakMate stores a small amount of data locally on your device to remember your preferences:',
  'pp.s4.l1': '<strong>Settings:</strong> Reminder intervals, language preference, and display options',
  'pp.s4.l2': '<strong>Statistics:</strong> Daily reminder counts and water intake tracking',
  'pp.s4.l3': '<strong>Registry:</strong> Installation path and autostart preference',
  'pp.s4.text2': 'All data is stored in the following locations:',
  'pp.s5.title': '5. Third-Party Services',
  'pp.s5.text': 'BreakMate does not integrate with any third-party services, SDKs, or analytics platforms. The application does not include any advertising frameworks.',
  'pp.s6.title': '6. Cookies',
  'pp.s6.text': 'BreakMate does not use cookies. The application does not run in a browser context and does not store or access browser cookies.',
  'pp.s7.title': '7. Accounts & Authentication',
  'pp.s7.text': 'BreakMate does not require any account creation, login, or authentication. There is no user registration process.',
  'pp.s8.title': '8. Children\'s Privacy',
  'pp.s8.text': 'BreakMate does not collect any personal data from anyone, including children. The application is safe for users of all ages.',
  'pp.s9.title': '9. Data Deletion',
  'pp.s9.text': 'Since all data is stored locally on your device, you have complete control over it:',
  'pp.s9.l1': '<strong>Uninstall the application</strong> to remove all BreakMate data from your device',
  'pp.s9.l3': 'The uninstaller removes all application files and registry entries',
  'pp.s10.title': '10. Changes to This Policy',
  'pp.s10.text': 'If we make changes to this privacy policy, we will update the "Last updated" date at the top. Since BreakMate does not collect any data, significant changes to this policy are unlikely.',
  'pp.s11.title': '11. Contact',
  'pp.s11.text': 'If you have any questions about this privacy policy or BreakMate\'s data practices, you can open an issue on our <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">GitHub page</a>.',
  'pp.commitment': '<strong>Our commitment:</strong> BreakMate was built with privacy as a core principle. We believe your health data and personal information belong to you alone. That\'s why we designed BreakMate to work entirely offline, with zero data collection.',
  'pp.footer': '© 2025–2026 BreakMate. All rights reserved.',
};

// =====================
// PORTUGUESE (Brazil)
// =====================
T['pt-BR'] = makeLang({
  'back': '← Voltar ao Início',
  'pp.title': 'Política de Privacidade',
  'pp.updated': 'Última atualização: 16 de fevereiro de 2026',
  'pp.summary': '<strong>Resumindo:</strong> O BreakMate não coleta, armazena ou transmite nenhum dado pessoal. O aplicativo funciona totalmente offline e não requer contas, conexão com a internet ou permissões além do acesso básico ao desktop.',
  'pp.s1.title': '1. Visão Geral',
  'pp.s1.text': 'BreakMate é um aplicativo de desktop para Windows que fornece lembretes de saúde (descanso visual, hidratação, postura, movimento e alongamento). Esta política de privacidade explica como o BreakMate trata seus dados.',
  'pp.s2.title': '2. Coleta de Dados',
  'pp.s2.text': 'O BreakMate <strong>não</strong> coleta nenhum dado pessoal. Especificamente:',
  'pp.s2.l1': 'Nenhuma informação pessoal é coletada (nome, e-mail, telefone, etc.)',
  'pp.s2.l2': 'Nenhuma análise de uso ou telemetria é coletada',
  'pp.s2.l3': 'Nenhum dado de navegação ou atividade é rastreado',
  'pp.s2.l4': 'Nenhum dado de localização é acessado',
  'pp.s2.l5': 'Nenhum identificador de dispositivo é coletado',
  'pp.s2.l6': 'Nenhum relatório de falhas é enviado',
  'pp.s3.title': '3. Atividade de Rede',
  'pp.s3.text': 'O BreakMate opera <strong>100% offline</strong>. O aplicativo não faz nenhuma requisição de rede. Não se conecta a nenhum servidor, API ou serviço em nuvem. Nenhuma conexão com a internet é necessária para usar o BreakMate.',
  'pp.s4.title': '4. Armazenamento Local de Dados',
  'pp.s4.text': 'O BreakMate armazena uma pequena quantidade de dados localmente no seu dispositivo para lembrar suas preferências:',
  'pp.s4.l1': '<strong>Configurações:</strong> Intervalos dos lembretes, preferência de idioma e opções de exibição',
  'pp.s4.l2': '<strong>Estatísticas:</strong> Contagens diárias de lembretes e rastreamento de ingestão de água',
  'pp.s4.l3': '<strong>Registro:</strong> Caminho de instalação e preferência de início automático',
  'pp.s4.text2': 'Todos os dados são armazenados nos seguintes locais:',
  'pp.s5.title': '5. Serviços de Terceiros',
  'pp.s5.text': 'O BreakMate não se integra com nenhum serviço, SDK ou plataforma de análise de terceiros. O aplicativo não inclui nenhuma estrutura de publicidade.',
  'pp.s6.title': '6. Cookies',
  'pp.s6.text': 'O BreakMate não usa cookies. O aplicativo não roda em contexto de navegador e não armazena ou acessa cookies de navegador.',
  'pp.s7.title': '7. Contas e Autenticação',
  'pp.s7.text': 'O BreakMate não requer criação de conta, login ou autenticação. Não há processo de registro de usuário.',
  'pp.s8.title': '8. Privacidade de Crianças',
  'pp.s8.text': 'O BreakMate não coleta nenhum dado pessoal de ninguém, incluindo crianças. O aplicativo é seguro para usuários de todas as idades.',
  'pp.s9.title': '9. Exclusão de Dados',
  'pp.s9.text': 'Como todos os dados são armazenados localmente no seu dispositivo, você tem controle total sobre eles:',
  'pp.s9.l1': '<strong>Desinstale o aplicativo</strong> para remover todos os dados do BreakMate do seu dispositivo',
  'pp.s9.l3': 'O desinstalador remove todos os arquivos do aplicativo e entradas de registro',
  'pp.s10.title': '10. Alterações nesta Política',
  'pp.s10.text': 'Se fizermos alterações nesta política de privacidade, atualizaremos a data de "Última atualização" no topo. Como o BreakMate não coleta nenhum dado, mudanças significativas nesta política são improváveis.',
  'pp.s11.title': '11. Contato',
  'pp.s11.text': 'Se você tiver dúvidas sobre esta política de privacidade ou as práticas de dados do BreakMate, abra uma issue em nossa <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">página no GitHub</a>.',
  'pp.commitment': '<strong>Nosso compromisso:</strong> O BreakMate foi construído com a privacidade como princípio fundamental. Acreditamos que seus dados de saúde e informações pessoais pertencem somente a você. Por isso projetamos o BreakMate para funcionar totalmente offline, com zero coleta de dados.',
  'pp.footer': '© 2025–2026 BreakMate. Todos os direitos reservados.',
});

// =====================
// SPANISH
// =====================
T.es = makeLang({
  'back': '← Volver al Inicio',
  'pp.title': 'Política de Privacidad',
  'pp.updated': 'Última actualización: 16 de febrero de 2026',
  'pp.summary': '<strong>En resumen:</strong> BreakMate no recopila, almacena ni transmite ningún dato personal. La aplicación funciona completamente sin conexión y no requiere cuentas, conexión a internet ni permisos más allá del acceso básico al escritorio.',
  'pp.s1.title': '1. Descripción General',
  'pp.s1.text': 'BreakMate es una aplicación de escritorio para Windows que proporciona recordatorios de salud (descanso visual, hidratación, postura, movimiento y estiramientos). Esta política de privacidad explica cómo BreakMate maneja tus datos.',
  'pp.s2.title': '2. Recopilación de Datos',
  'pp.s2.text': 'BreakMate <strong>no</strong> recopila ningún dato personal. Específicamente:',
  'pp.s2.l1': 'No se recopila información personal (nombre, correo electrónico, teléfono, etc.)',
  'pp.s2.l2': 'No se recopilan análisis de uso ni telemetría',
  'pp.s2.l3': 'No se rastrean datos de navegación ni actividad',
  'pp.s2.l4': 'No se accede a datos de ubicación',
  'pp.s2.l5': 'No se recopilan identificadores de dispositivo',
  'pp.s2.l6': 'No se envían informes de errores',
  'pp.s3.title': '3. Actividad de Red',
  'pp.s3.text': 'BreakMate opera <strong>100% sin conexión</strong>. La aplicación no realiza solicitudes de red. No se conecta a ningún servidor, API o servicio en la nube. No se requiere conexión a internet para usar BreakMate.',
  'pp.s4.title': '4. Almacenamiento Local de Datos',
  'pp.s4.text': 'BreakMate almacena una pequeña cantidad de datos localmente en tu dispositivo para recordar tus preferencias:',
  'pp.s4.l1': '<strong>Configuración:</strong> Intervalos de recordatorios, preferencia de idioma y opciones de visualización',
  'pp.s4.l2': '<strong>Estadísticas:</strong> Conteo diario de recordatorios y seguimiento de ingesta de agua',
  'pp.s4.l3': '<strong>Registro:</strong> Ruta de instalación y preferencia de inicio automático',
  'pp.s4.text2': 'Todos los datos se almacenan en las siguientes ubicaciones:',
  'pp.s5.title': '5. Servicios de Terceros',
  'pp.s5.text': 'BreakMate no se integra con ningún servicio de terceros, SDK o plataforma de análisis. La aplicación no incluye ningún marco publicitario.',
  'pp.s6.title': '6. Cookies',
  'pp.s6.text': 'BreakMate no utiliza cookies. La aplicación no se ejecuta en un contexto de navegador y no almacena ni accede a cookies del navegador.',
  'pp.s7.title': '7. Cuentas y Autenticación',
  'pp.s7.text': 'BreakMate no requiere creación de cuentas, inicio de sesión ni autenticación. No hay proceso de registro de usuario.',
  'pp.s8.title': '8. Privacidad de Menores',
  'pp.s8.text': 'BreakMate no recopila datos personales de nadie, incluidos menores. La aplicación es segura para usuarios de todas las edades.',
  'pp.s9.title': '9. Eliminación de Datos',
  'pp.s9.text': 'Como todos los datos se almacenan localmente en tu dispositivo, tienes control total sobre ellos:',
  'pp.s9.l1': '<strong>Desinstala la aplicación</strong> para eliminar todos los datos de BreakMate de tu dispositivo',
  'pp.s9.l3': 'El desinstalador elimina todos los archivos de la aplicación y entradas del registro',
  'pp.s10.title': '10. Cambios en esta Política',
  'pp.s10.text': 'Si realizamos cambios en esta política de privacidad, actualizaremos la fecha de "Última actualización" en la parte superior. Dado que BreakMate no recopila ningún dato, cambios significativos en esta política son improbables.',
  'pp.s11.title': '11. Contacto',
  'pp.s11.text': 'Si tienes preguntas sobre esta política de privacidad o las prácticas de datos de BreakMate, puedes abrir un issue en nuestra <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">página de GitHub</a>.',
  'pp.commitment': '<strong>Nuestro compromiso:</strong> BreakMate fue construido con la privacidad como principio fundamental. Creemos que tus datos de salud e información personal te pertenecen solo a ti. Por eso diseñamos BreakMate para funcionar completamente sin conexión, con cero recopilación de datos.',
  'pp.footer': '© 2025–2026 BreakMate. Todos los derechos reservados.',
});

// =====================
// FRENCH
// =====================
T.fr = makeLang({
  'back': '← Retour à l\'accueil',
  'pp.title': 'Politique de Confidentialité',
  'pp.updated': 'Dernière mise à jour : 16 février 2026',
  'pp.summary': '<strong>En bref :</strong> BreakMate ne collecte, ne stocke ni ne transmet aucune donnée personnelle. L\'application fonctionne entièrement hors ligne et ne nécessite aucun compte, aucune connexion Internet ni aucune autorisation au-delà de l\'accès basique au bureau.',
  'pp.s1.title': '1. Aperçu',
  'pp.s1.text': 'BreakMate est une application de bureau pour Windows qui fournit des rappels de santé (repos des yeux, hydratation, posture, mouvement et étirements). Cette politique de confidentialité explique comment BreakMate gère vos données.',
  'pp.s2.title': '2. Collecte de Données',
  'pp.s2.text': 'BreakMate ne collecte <strong>aucune</strong> donnée personnelle. Plus précisément :',
  'pp.s2.l1': 'Aucune information personnelle n\'est collectée (nom, e-mail, téléphone, etc.)',
  'pp.s2.l2': 'Aucune analyse d\'utilisation ni télémétrie n\'est collectée',
  'pp.s2.l3': 'Aucune donnée de navigation ni activité n\'est suivie',
  'pp.s2.l4': 'Aucune donnée de localisation n\'est accédée',
  'pp.s2.l5': 'Aucun identifiant d\'appareil n\'est collecté',
  'pp.s2.l6': 'Aucun rapport de crash n\'est envoyé',
  'pp.s3.title': '3. Activité Réseau',
  'pp.s3.text': 'BreakMate fonctionne <strong>100% hors ligne</strong>. L\'application ne fait aucune requête réseau. Elle ne se connecte à aucun serveur, API ou service cloud. Aucune connexion Internet n\'est nécessaire pour utiliser BreakMate.',
  'pp.s4.title': '4. Stockage Local des Données',
  'pp.s4.text': 'BreakMate stocke une petite quantité de données localement sur votre appareil pour mémoriser vos préférences :',
  'pp.s4.l1': '<strong>Paramètres :</strong> Intervalles des rappels, préférence de langue et options d\'affichage',
  'pp.s4.l2': '<strong>Statistiques :</strong> Compteurs quotidiens de rappels et suivi de la consommation d\'eau',
  'pp.s4.l3': '<strong>Registre :</strong> Chemin d\'installation et préférence de démarrage automatique',
  'pp.s4.text2': 'Toutes les données sont stockées aux emplacements suivants :',
  'pp.s5.title': '5. Services Tiers',
  'pp.s5.text': 'BreakMate ne s\'intègre à aucun service tiers, SDK ou plateforme d\'analyse. L\'application n\'inclut aucun framework publicitaire.',
  'pp.s6.title': '6. Cookies',
  'pp.s6.text': 'BreakMate n\'utilise pas de cookies. L\'application ne s\'exécute pas dans un contexte de navigateur et ne stocke ni n\'accède aux cookies du navigateur.',
  'pp.s7.title': '7. Comptes et Authentification',
  'pp.s7.text': 'BreakMate ne nécessite aucune création de compte, connexion ou authentification. Il n\'y a aucun processus d\'inscription.',
  'pp.s8.title': '8. Vie Privée des Enfants',
  'pp.s8.text': 'BreakMate ne collecte aucune donnée personnelle de personne, y compris les enfants. L\'application est sûre pour les utilisateurs de tous âges.',
  'pp.s9.title': '9. Suppression des Données',
  'pp.s9.text': 'Puisque toutes les données sont stockées localement sur votre appareil, vous en avez le contrôle total :',
  'pp.s9.l1': '<strong>Désinstallez l\'application</strong> pour supprimer toutes les données de BreakMate de votre appareil',
  'pp.s9.l3': 'Le programme de désinstallation supprime tous les fichiers de l\'application et les entrées du registre',
  'pp.s10.title': '10. Modifications de cette Politique',
  'pp.s10.text': 'Si nous apportons des modifications à cette politique de confidentialité, nous mettrons à jour la date de "Dernière mise à jour" en haut. Comme BreakMate ne collecte aucune donnée, des changements significatifs de cette politique sont peu probables.',
  'pp.s11.title': '11. Contact',
  'pp.s11.text': 'Si vous avez des questions sur cette politique de confidentialité ou les pratiques de données de BreakMate, vous pouvez ouvrir un ticket sur notre <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">page GitHub</a>.',
  'pp.commitment': '<strong>Notre engagement :</strong> BreakMate a été conçu avec la confidentialité comme principe fondamental. Nous croyons que vos données de santé et informations personnelles vous appartiennent. C\'est pourquoi nous avons conçu BreakMate pour fonctionner entièrement hors ligne, avec zéro collecte de données.',
  'pp.footer': '© 2025–2026 BreakMate. Tous droits réservés.',
});

// =====================
// GERMAN
// =====================
T.de = makeLang({
  'back': '← Zurück zur Startseite',
  'pp.title': 'Datenschutzrichtlinie',
  'pp.updated': 'Zuletzt aktualisiert: 16. Februar 2026',
  'pp.summary': '<strong>Kurzfassung:</strong> BreakMate sammelt, speichert oder überträgt keine personenbezogenen Daten. Die Anwendung funktioniert vollständig offline und erfordert keine Konten, keine Internetverbindung und keine Berechtigungen über den grundlegenden Desktop-Zugriff hinaus.',
  'pp.s1.title': '1. Überblick',
  'pp.s1.text': 'BreakMate ist eine Desktop-Anwendung für Windows, die Gesundheitserinnerungen bereitstellt (Augenruhe, Flüssigkeitszufuhr, Haltung, Bewegung und Dehnung). Diese Datenschutzrichtlinie erklärt, wie BreakMate mit Ihren Daten umgeht.',
  'pp.s2.title': '2. Datenerhebung',
  'pp.s2.text': 'BreakMate erhebt <strong>keine</strong> personenbezogenen Daten. Im Einzelnen:',
  'pp.s2.l1': 'Es werden keine persönlichen Informationen erhoben (Name, E-Mail, Telefon usw.)',
  'pp.s2.l2': 'Es werden keine Nutzungsanalysen oder Telemetriedaten erhoben',
  'pp.s2.l3': 'Es werden keine Browserdaten oder Aktivitäten verfolgt',
  'pp.s2.l4': 'Es wird nicht auf Standortdaten zugegriffen',
  'pp.s2.l5': 'Es werden keine Gerätekennungen erhoben',
  'pp.s2.l6': 'Es werden keine Absturzberichte gesendet',
  'pp.s3.title': '3. Netzwerkaktivität',
  'pp.s3.text': 'BreakMate arbeitet <strong>100% offline</strong>. Die Anwendung stellt keine Netzwerkanfragen. Sie verbindet sich mit keinen Servern, APIs oder Cloud-Diensten. Keine Internetverbindung ist erforderlich, um BreakMate zu verwenden.',
  'pp.s4.title': '4. Lokale Datenspeicherung',
  'pp.s4.text': 'BreakMate speichert eine geringe Menge an Daten lokal auf Ihrem Gerät, um Ihre Einstellungen zu merken:',
  'pp.s4.l1': '<strong>Einstellungen:</strong> Erinnerungsintervalle, Spracheinstellung und Anzeigeoptionen',
  'pp.s4.l2': '<strong>Statistiken:</strong> Tägliche Erinnerungszähler und Wasserzufuhr-Tracking',
  'pp.s4.l3': '<strong>Registrierung:</strong> Installationspfad und Autostart-Einstellung',
  'pp.s4.text2': 'Alle Daten werden an folgenden Orten gespeichert:',
  'pp.s5.title': '5. Drittanbieter-Dienste',
  'pp.s5.text': 'BreakMate integriert sich nicht mit Drittanbieter-Diensten, SDKs oder Analyseplattformen. Die Anwendung enthält keine Werbe-Frameworks.',
  'pp.s6.title': '6. Cookies',
  'pp.s6.text': 'BreakMate verwendet keine Cookies. Die Anwendung läuft nicht in einem Browser-Kontext und speichert oder greift nicht auf Browser-Cookies zu.',
  'pp.s7.title': '7. Konten & Authentifizierung',
  'pp.s7.text': 'BreakMate erfordert keine Kontoerstellung, Anmeldung oder Authentifizierung. Es gibt keinen Benutzerregistrierungsprozess.',
  'pp.s8.title': '8. Datenschutz für Kinder',
  'pp.s8.text': 'BreakMate erhebt keine personenbezogenen Daten von niemandem, einschließlich Kindern. Die Anwendung ist für Benutzer jeden Alters sicher.',
  'pp.s9.title': '9. Datenlöschung',
  'pp.s9.text': 'Da alle Daten lokal auf Ihrem Gerät gespeichert werden, haben Sie die volle Kontrolle darüber:',
  'pp.s9.l1': '<strong>Deinstallieren Sie die Anwendung</strong>, um alle BreakMate-Daten von Ihrem Gerät zu entfernen',
  'pp.s9.l3': 'Das Deinstallationsprogramm entfernt alle Anwendungsdateien und Registrierungseinträge',
  'pp.s10.title': '10. Änderungen dieser Richtlinie',
  'pp.s10.text': 'Wenn wir Änderungen an dieser Datenschutzrichtlinie vornehmen, aktualisieren wir das Datum „Zuletzt aktualisiert" oben. Da BreakMate keine Daten erhebt, sind wesentliche Änderungen dieser Richtlinie unwahrscheinlich.',
  'pp.s11.title': '11. Kontakt',
  'pp.s11.text': 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder den Datenpraktiken von BreakMate haben, können Sie ein Issue auf unserer <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">GitHub-Seite</a> erstellen.',
  'pp.commitment': '<strong>Unser Versprechen:</strong> BreakMate wurde mit Datenschutz als Grundprinzip entwickelt. Wir glauben, dass Ihre Gesundheitsdaten und persönlichen Informationen nur Ihnen gehören. Deshalb haben wir BreakMate so konzipiert, dass es vollständig offline funktioniert, mit null Datenerhebung.',
  'pp.footer': '© 2025–2026 BreakMate. Alle Rechte vorbehalten.',
});

// =====================
// ITALIAN
// =====================
T.it = makeLang({
  'back': '← Torna alla Home',
  'pp.title': 'Informativa sulla Privacy',
  'pp.updated': 'Ultimo aggiornamento: 16 febbraio 2026',
  'pp.summary': '<strong>In breve:</strong> BreakMate non raccoglie, memorizza o trasmette alcun dato personale. L\'applicazione funziona interamente offline e non richiede account, connessione Internet né permessi oltre l\'accesso base al desktop.',
  'pp.s1.title': '1. Panoramica',
  'pp.s1.text': 'BreakMate è un\'applicazione desktop per Windows che fornisce promemoria per la salute (riposo degli occhi, idratazione, postura, movimento e stretching). Questa informativa sulla privacy spiega come BreakMate gestisce i tuoi dati.',
  'pp.s2.title': '2. Raccolta Dati',
  'pp.s2.text': 'BreakMate <strong>non</strong> raccoglie alcun dato personale. Nello specifico:',
  'pp.s2.l1': 'Nessuna informazione personale viene raccolta (nome, email, telefono, ecc.)',
  'pp.s2.l2': 'Nessuna analisi di utilizzo o telemetria viene raccolta',
  'pp.s2.l3': 'Nessun dato di navigazione o attività viene tracciato',
  'pp.s2.l4': 'Nessun dato di localizzazione viene acceduto',
  'pp.s2.l5': 'Nessun identificatore di dispositivo viene raccolto',
  'pp.s2.l6': 'Nessun rapporto di crash viene inviato',
  'pp.s3.title': '3. Attività di Rete',
  'pp.s3.text': 'BreakMate funziona <strong>100% offline</strong>. L\'applicazione non effettua alcuna richiesta di rete. Non si collega a nessun server, API o servizio cloud. Nessuna connessione Internet è necessaria per usare BreakMate.',
  'pp.s4.title': '4. Archiviazione Locale dei Dati',
  'pp.s4.text': 'BreakMate memorizza una piccola quantità di dati localmente sul tuo dispositivo per ricordare le tue preferenze:',
  'pp.s4.l1': '<strong>Impostazioni:</strong> Intervalli dei promemoria, preferenza di lingua e opzioni di visualizzazione',
  'pp.s4.l2': '<strong>Statistiche:</strong> Conteggi giornalieri dei promemoria e tracciamento dell\'assunzione di acqua',
  'pp.s4.l3': '<strong>Registro:</strong> Percorso di installazione e preferenza di avvio automatico',
  'pp.s4.text2': 'Tutti i dati sono memorizzati nelle seguenti posizioni:',
  'pp.s5.title': '5. Servizi di Terze Parti',
  'pp.s5.text': 'BreakMate non si integra con alcun servizio di terze parti, SDK o piattaforma di analisi. L\'applicazione non include alcun framework pubblicitario.',
  'pp.s6.title': '6. Cookie',
  'pp.s6.text': 'BreakMate non utilizza cookie. L\'applicazione non viene eseguita in un contesto browser e non memorizza né accede ai cookie del browser.',
  'pp.s7.title': '7. Account e Autenticazione',
  'pp.s7.text': 'BreakMate non richiede la creazione di account, accesso o autenticazione. Non esiste un processo di registrazione utente.',
  'pp.s8.title': '8. Privacy dei Minori',
  'pp.s8.text': 'BreakMate non raccoglie alcun dato personale da nessuno, inclusi i minori. L\'applicazione è sicura per utenti di tutte le età.',
  'pp.s9.title': '9. Cancellazione dei Dati',
  'pp.s9.text': 'Poiché tutti i dati sono memorizzati localmente sul tuo dispositivo, hai il pieno controllo su di essi:',
  'pp.s9.l1': '<strong>Disinstalla l\'applicazione</strong> per rimuovere tutti i dati di BreakMate dal tuo dispositivo',
  'pp.s9.l3': 'Il programma di disinstallazione rimuove tutti i file dell\'applicazione e le voci del registro',
  'pp.s10.title': '10. Modifiche a Questa Politica',
  'pp.s10.text': 'Se apportiamo modifiche a questa informativa sulla privacy, aggiorneremo la data "Ultimo aggiornamento" in alto. Poiché BreakMate non raccoglie alcun dato, cambiamenti significativi a questa politica sono improbabili.',
  'pp.s11.title': '11. Contatti',
  'pp.s11.text': 'Se hai domande su questa informativa sulla privacy o sulle pratiche dei dati di BreakMate, puoi aprire una issue sulla nostra <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">pagina GitHub</a>.',
  'pp.commitment': '<strong>Il nostro impegno:</strong> BreakMate è stato costruito con la privacy come principio fondamentale. Crediamo che i tuoi dati sanitari e le informazioni personali appartengano solo a te. Ecco perché abbiamo progettato BreakMate per funzionare interamente offline, con zero raccolta di dati.',
  'pp.footer': '© 2025–2026 BreakMate. Tutti i diritti riservati.',
});

// =====================
// CHINESE (Simplified)
// =====================
T['zh-CN'] = makeLang({
  'back': '← 返回首页',
  'pp.title': '隐私政策',
  'pp.updated': '最后更新：2026年2月16日',
  'pp.summary': '<strong>简而言之：</strong>BreakMate不收集、存储或传输任何个人数据。该应用程序完全离线运行，不需要帐户、互联网连接或基本桌面访问以外的任何权限。',
  'pp.s1.title': '1. 概述',
  'pp.s1.text': 'BreakMate是一款Windows桌面应用程序，提供健康提醒（眼睛休息、饮水、姿势、运动和拉伸）。本隐私政策说明了BreakMate如何处理您的数据。',
  'pp.s2.title': '2. 数据收集',
  'pp.s2.text': 'BreakMate<strong>不</strong>收集任何个人数据。具体来说：',
  'pp.s2.l1': '不收集个人信息（姓名、电子邮件、电话等）',
  'pp.s2.l2': '不收集使用分析或遥测数据',
  'pp.s2.l3': '不跟踪浏览数据或活动',
  'pp.s2.l4': '不访问位置数据',
  'pp.s2.l5': '不收集设备标识符',
  'pp.s2.l6': '不发送崩溃报告',
  'pp.s3.title': '3. 网络活动',
  'pp.s3.text': 'BreakMate <strong>100%离线</strong>运行。该应用程序不发送任何网络请求。它不连接任何服务器、API或云服务。使用BreakMate不需要互联网连接。',
  'pp.s4.title': '4. 本地数据存储',
  'pp.s4.text': 'BreakMate在您的设备上本地存储少量数据以记住您的偏好设置：',
  'pp.s4.l1': '<strong>设置：</strong>提醒间隔、语言偏好和显示选项',
  'pp.s4.l2': '<strong>统计数据：</strong>每日提醒计数和饮水量跟踪',
  'pp.s4.l3': '<strong>注册表：</strong>安装路径和自动启动偏好',
  'pp.s4.text2': '所有数据存储在以下位置：',
  'pp.s5.title': '5. 第三方服务',
  'pp.s5.text': 'BreakMate不集成任何第三方服务、SDK或分析平台。该应用程序不包含任何广告框架。',
  'pp.s6.title': '6. Cookie',
  'pp.s6.text': 'BreakMate不使用Cookie。该应用程序不在浏览器环境中运行，不存储或访问浏览器Cookie。',
  'pp.s7.title': '7. 帐户与身份验证',
  'pp.s7.text': 'BreakMate不需要创建帐户、登录或身份验证。没有用户注册流程。',
  'pp.s8.title': '8. 儿童隐私',
  'pp.s8.text': 'BreakMate不收集任何人的个人数据，包括儿童。该应用程序对所有年龄段的用户都是安全的。',
  'pp.s9.title': '9. 数据删除',
  'pp.s9.text': '由于所有数据都存储在您的设备上，您对其拥有完全控制权：',
  'pp.s9.l1': '<strong>卸载应用程序</strong>以从设备中删除所有BreakMate数据',
  'pp.s9.l3': '卸载程序会删除所有应用程序文件和注册表项',
  'pp.s10.title': '10. 本政策的更改',
  'pp.s10.text': '如果我们对本隐私政策进行更改，我们将更新顶部的"最后更新"日期。由于BreakMate不收集任何数据，本政策不太可能发生重大变更。',
  'pp.s11.title': '11. 联系方式',
  'pp.s11.text': '如果您对本隐私政策或BreakMate的数据处理有任何疑问，可以在我们的<a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">GitHub页面</a>上提交问题。',
  'pp.commitment': '<strong>我们的承诺：</strong>BreakMate以隐私为核心原则构建。我们相信您的健康数据和个人信息仅属于您自己。这就是为什么我们将BreakMate设计为完全离线运行，零数据收集。',
  'pp.footer': '© 2025–2026 BreakMate。保留所有权利。',
});

// =====================
// JAPANESE
// =====================
T.ja = makeLang({
  'back': '← ホームに戻る',
  'pp.title': 'プライバシーポリシー',
  'pp.updated': '最終更新日：2026年2月16日',
  'pp.summary': '<strong>要約：</strong>BreakMateは個人データの収集、保存、送信を一切行いません。アプリケーションは完全にオフラインで動作し、アカウント、インターネット接続、基本的なデスクトップアクセス以外の権限は不要です。',
  'pp.s1.title': '1. 概要',
  'pp.s1.text': 'BreakMateはWindows用のデスクトップアプリケーションで、健康リマインダー（目の休憩、水分補給、姿勢、運動、ストレッチ）を提供します。このプライバシーポリシーでは、BreakMateがお客様のデータをどのように扱うかを説明します。',
  'pp.s2.title': '2. データ収集',
  'pp.s2.text': 'BreakMateは個人データを一切<strong>収集しません</strong>。具体的には：',
  'pp.s2.l1': '個人情報（氏名、メール、電話番号など）は収集されません',
  'pp.s2.l2': '利用分析やテレメトリーは収集されません',
  'pp.s2.l3': '閲覧データやアクティビティは追跡されません',
  'pp.s2.l4': '位置情報にはアクセスしません',
  'pp.s2.l5': 'デバイス識別子は収集されません',
  'pp.s2.l6': 'クラッシュレポートは送信されません',
  'pp.s3.title': '3. ネットワーク活動',
  'pp.s3.text': 'BreakMateは<strong>100%オフライン</strong>で動作します。アプリケーションはネットワークリクエストを一切行いません。サーバー、API、クラウドサービスに接続しません。BreakMateの使用にインターネット接続は不要です。',
  'pp.s4.title': '4. ローカルデータ保存',
  'pp.s4.text': 'BreakMateは設定を記憶するために、デバイスにわずかなデータをローカルに保存します：',
  'pp.s4.l1': '<strong>設定：</strong>リマインダー間隔、言語設定、表示オプション',
  'pp.s4.l2': '<strong>統計：</strong>日次リマインダー回数と水分摂取量の記録',
  'pp.s4.l3': '<strong>レジストリ：</strong>インストールパスと自動起動設定',
  'pp.s4.text2': 'すべてのデータは以下の場所に保存されます：',
  'pp.s5.title': '5. サードパーティサービス',
  'pp.s5.text': 'BreakMateはサードパーティサービス、SDK、分析プラットフォームと統合しません。アプリケーションには広告フレームワークは含まれていません。',
  'pp.s6.title': '6. Cookie',
  'pp.s6.text': 'BreakMateはCookieを使用しません。アプリケーションはブラウザコンテキストで実行されず、ブラウザCookieの保存やアクセスは行いません。',
  'pp.s7.title': '7. アカウントと認証',
  'pp.s7.text': 'BreakMateはアカウント作成、ログイン、認証を必要としません。ユーザー登録プロセスはありません。',
  'pp.s8.title': '8. 子どものプライバシー',
  'pp.s8.text': 'BreakMateは子どもを含む誰からも個人データを収集しません。アプリケーションはすべての年齢のユーザーに安全です。',
  'pp.s9.title': '9. データの削除',
  'pp.s9.text': 'すべてのデータはデバイスにローカルに保存されているため、完全にコントロールできます：',
  'pp.s9.l1': '<strong>アプリケーションをアンインストール</strong>して、デバイスからすべてのBreakMateデータを削除してください',
  'pp.s9.l3': 'アンインストーラーはすべてのアプリケーションファイルとレジストリエントリを削除します',
  'pp.s10.title': '10. ポリシーの変更',
  'pp.s10.text': 'このプライバシーポリシーに変更を加える場合は、上部の「最終更新日」を更新します。BreakMateはデータを収集しないため、このポリシーの大幅な変更は考えにくいです。',
  'pp.s11.title': '11. お問い合わせ',
  'pp.s11.text': 'このプライバシーポリシーやBreakMateのデータ取り扱いについてご質問がある場合は、<a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">GitHubページ</a>でissueを作成してください。',
  'pp.commitment': '<strong>私たちの約束：</strong>BreakMateはプライバシーを核心原則として構築されました。お客様の健康データと個人情報はお客様だけのものであると信じています。そのため、BreakMateを完全にオフラインで動作し、データ収集ゼロで設計しました。',
  'pp.footer': '© 2025–2026 BreakMate. All rights reserved.',
});

// =====================
// KOREAN
// =====================
T.ko = makeLang({
  'back': '← 홈으로 돌아가기',
  'pp.title': '개인정보 보호정책',
  'pp.updated': '최종 업데이트: 2026년 2월 16일',
  'pp.summary': '<strong>요약:</strong> BreakMate는 어떤 개인 데이터도 수집, 저장 또는 전송하지 않습니다. 이 애플리케이션은 완전히 오프라인으로 작동하며 계정, 인터넷 연결 또는 기본 데스크톱 액세스 이외의 권한이 필요하지 않습니다.',
  'pp.s1.title': '1. 개요',
  'pp.s1.text': 'BreakMate는 건강 알림(눈 휴식, 수분 섭취, 자세, 운동 및 스트레칭)을 제공하는 Windows용 데스크톱 애플리케이션입니다. 이 개인정보 보호정책은 BreakMate가 귀하의 데이터를 어떻게 처리하는지 설명합니다.',
  'pp.s2.title': '2. 데이터 수집',
  'pp.s2.text': 'BreakMate는 어떤 개인 데이터도 수집하지 <strong>않습니다</strong>. 구체적으로:',
  'pp.s2.l1': '개인 정보(이름, 이메일, 전화번호 등)가 수집되지 않습니다',
  'pp.s2.l2': '사용 분석 또는 텔레메트리가 수집되지 않습니다',
  'pp.s2.l3': '브라우징 데이터 또는 활동이 추적되지 않습니다',
  'pp.s2.l4': '위치 데이터에 액세스하지 않습니다',
  'pp.s2.l5': '기기 식별자가 수집되지 않습니다',
  'pp.s2.l6': '충돌 보고서가 전송되지 않습니다',
  'pp.s3.title': '3. 네트워크 활동',
  'pp.s3.text': 'BreakMate는 <strong>100% 오프라인</strong>으로 작동합니다. 애플리케이션은 네트워크 요청을 하지 않습니다. 서버, API 또는 클라우드 서비스에 연결하지 않습니다. BreakMate 사용에 인터넷 연결이 필요하지 않습니다.',
  'pp.s4.title': '4. 로컬 데이터 저장',
  'pp.s4.text': 'BreakMate는 설정을 기억하기 위해 기기에 소량의 데이터를 로컬로 저장합니다:',
  'pp.s4.l1': '<strong>설정:</strong> 알림 간격, 언어 설정 및 표시 옵션',
  'pp.s4.l2': '<strong>통계:</strong> 일일 알림 횟수 및 물 섭취량 추적',
  'pp.s4.l3': '<strong>레지스트리:</strong> 설치 경로 및 자동 시작 설정',
  'pp.s4.text2': '모든 데이터는 다음 위치에 저장됩니다:',
  'pp.s5.title': '5. 제3자 서비스',
  'pp.s5.text': 'BreakMate는 어떤 제3자 서비스, SDK 또는 분석 플랫폼과도 통합하지 않습니다. 애플리케이션에는 어떤 광고 프레임워크도 포함되어 있지 않습니다.',
  'pp.s6.title': '6. 쿠키',
  'pp.s6.text': 'BreakMate는 쿠키를 사용하지 않습니다. 애플리케이션은 브라우저 컨텍스트에서 실행되지 않으며 브라우저 쿠키를 저장하거나 액세스하지 않습니다.',
  'pp.s7.title': '7. 계정 및 인증',
  'pp.s7.text': 'BreakMate는 계정 생성, 로그인 또는 인증이 필요하지 않습니다. 사용자 등록 과정이 없습니다.',
  'pp.s8.title': '8. 아동 개인정보',
  'pp.s8.text': 'BreakMate는 아동을 포함한 누구의 개인 데이터도 수집하지 않습니다. 애플리케이션은 모든 연령의 사용자에게 안전합니다.',
  'pp.s9.title': '9. 데이터 삭제',
  'pp.s9.text': '모든 데이터가 기기에 로컬로 저장되므로 완전한 제어권을 가집니다:',
  'pp.s9.l1': '<strong>애플리케이션을 제거</strong>하여 기기에서 모든 BreakMate 데이터를 삭제하세요',
  'pp.s9.l3': '제거 프로그램이 모든 애플리케이션 파일과 레지스트리 항목을 삭제합니다',
  'pp.s10.title': '10. 정책 변경',
  'pp.s10.text': '이 개인정보 보호정책을 변경하면 상단의 "최종 업데이트" 날짜를 업데이트합니다. BreakMate는 데이터를 수집하지 않으므로 이 정책의 중대한 변경은 가능성이 낮습니다.',
  'pp.s11.title': '11. 연락처',
  'pp.s11.text': '이 개인정보 보호정책이나 BreakMate의 데이터 처리에 대해 질문이 있으시면 <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">GitHub 페이지</a>에서 이슈를 열어주세요.',
  'pp.commitment': '<strong>우리의 약속:</strong> BreakMate는 개인정보 보호를 핵심 원칙으로 구축되었습니다. 귀하의 건강 데이터와 개인 정보는 귀하에게만 속한다고 믿습니다. 그래서 BreakMate를 완전히 오프라인으로 작동하며 데이터 수집 제로로 설계했습니다.',
  'pp.footer': '© 2025–2026 BreakMate. All rights reserved.',
});

// =====================
// RUSSIAN
// =====================
T.ru = makeLang({
  'back': '← Вернуться на главную',
  'pp.title': 'Политика конфиденциальности',
  'pp.updated': 'Последнее обновление: 16 февраля 2026 г.',
  'pp.summary': '<strong>Кратко:</strong> BreakMate не собирает, не хранит и не передаёт никаких персональных данных. Приложение работает полностью офлайн и не требует учётных записей, подключения к интернету или разрешений помимо базового доступа к рабочему столу.',
  'pp.s1.title': '1. Обзор',
  'pp.s1.text': 'BreakMate — это настольное приложение для Windows, которое предоставляет напоминания о здоровье (отдых для глаз, гидратация, осанка, движение и растяжка). Данная политика конфиденциальности объясняет, как BreakMate обрабатывает ваши данные.',
  'pp.s2.title': '2. Сбор данных',
  'pp.s2.text': 'BreakMate <strong>не</strong> собирает никаких персональных данных. В частности:',
  'pp.s2.l1': 'Личная информация не собирается (имя, email, телефон и т.д.)',
  'pp.s2.l2': 'Аналитика использования и телеметрия не собираются',
  'pp.s2.l3': 'Данные просмотра и активность не отслеживаются',
  'pp.s2.l4': 'Данные о местоположении не используются',
  'pp.s2.l5': 'Идентификаторы устройств не собираются',
  'pp.s2.l6': 'Отчёты о сбоях не отправляются',
  'pp.s3.title': '3. Сетевая активность',
  'pp.s3.text': 'BreakMate работает <strong>100% офлайн</strong>. Приложение не выполняет сетевых запросов. Оно не подключается к серверам, API или облачным сервисам. Для использования BreakMate не требуется подключение к интернету.',
  'pp.s4.title': '4. Локальное хранение данных',
  'pp.s4.text': 'BreakMate хранит небольшое количество данных локально на вашем устройстве для запоминания ваших настроек:',
  'pp.s4.l1': '<strong>Настройки:</strong> Интервалы напоминаний, языковые предпочтения и параметры отображения',
  'pp.s4.l2': '<strong>Статистика:</strong> Ежедневные счётчики напоминаний и отслеживание потребления воды',
  'pp.s4.l3': '<strong>Реестр:</strong> Путь установки и настройка автозапуска',
  'pp.s4.text2': 'Все данные хранятся в следующих местах:',
  'pp.s5.title': '5. Сторонние сервисы',
  'pp.s5.text': 'BreakMate не интегрируется с какими-либо сторонними сервисами, SDK или аналитическими платформами. Приложение не содержит рекламных фреймворков.',
  'pp.s6.title': '6. Файлы cookie',
  'pp.s6.text': 'BreakMate не использует файлы cookie. Приложение не работает в контексте браузера и не сохраняет и не обращается к файлам cookie браузера.',
  'pp.s7.title': '7. Учётные записи и аутентификация',
  'pp.s7.text': 'BreakMate не требует создания учётной записи, входа в систему или аутентификации. Процесс регистрации пользователя отсутствует.',
  'pp.s8.title': '8. Конфиденциальность детей',
  'pp.s8.text': 'BreakMate не собирает персональные данные ни от кого, включая детей. Приложение безопасно для пользователей всех возрастов.',
  'pp.s9.title': '9. Удаление данных',
  'pp.s9.text': 'Поскольку все данные хранятся локально на вашем устройстве, вы полностью их контролируете:',
  'pp.s9.l1': '<strong>Удалите приложение</strong>, чтобы удалить все данные BreakMate с вашего устройства',
  'pp.s9.l3': 'Программа удаления удаляет все файлы приложения и записи реестра',
  'pp.s10.title': '10. Изменения в этой политике',
  'pp.s10.text': 'Если мы внесём изменения в эту политику конфиденциальности, мы обновим дату «Последнее обновление» вверху. Поскольку BreakMate не собирает никаких данных, существенные изменения этой политики маловероятны.',
  'pp.s11.title': '11. Контакты',
  'pp.s11.text': 'Если у вас есть вопросы об этой политике конфиденциальности или практиках обработки данных BreakMate, вы можете создать issue на нашей <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">странице GitHub</a>.',
  'pp.commitment': '<strong>Наше обязательство:</strong> BreakMate был создан с конфиденциальностью как основным принципом. Мы считаем, что ваши данные о здоровье и личная информация принадлежат только вам. Именно поэтому мы разработали BreakMate для полностью офлайн работы с нулевым сбором данных.',
  'pp.footer': '© 2025–2026 BreakMate. Все права защищены.',
});

// =====================
// HINDI
// =====================
T.hi = makeLang({
  'back': '← होम पर वापस जाएं',
  'pp.title': 'गोपनीयता नीति',
  'pp.updated': 'अंतिम अपडेट: 16 फरवरी, 2026',
  'pp.summary': '<strong>संक्षेप में:</strong> BreakMate कोई भी व्यक्तिगत डेटा एकत्र, संग्रहीत या प्रसारित नहीं करता है। एप्लिकेशन पूरी तरह से ऑफ़लाइन काम करता है और इसके लिए किसी खाते, इंटरनेट कनेक्शन या बुनियादी डेस्कटॉप एक्सेस से परे किसी अनुमति की आवश्यकता नहीं है।',
  'pp.s1.title': '1. अवलोकन',
  'pp.s1.text': 'BreakMate विंडोज़ के लिए एक डेस्कटॉप एप्लिकेशन है जो स्वास्थ्य अनुस्मारक प्रदान करता है (आंखों का आराम, जलयोजन, मुद्रा, गति और स्ट्रेचिंग)। यह गोपनीयता नीति बताती है कि BreakMate आपके डेटा को कैसे संभालता है।',
  'pp.s2.title': '2. डेटा संग्रहण',
  'pp.s2.text': 'BreakMate कोई भी व्यक्तिगत डेटा एकत्र <strong>नहीं</strong> करता है। विशेष रूप से:',
  'pp.s2.l1': 'कोई व्यक्तिगत जानकारी एकत्र नहीं की जाती (नाम, ईमेल, फ़ोन आदि)',
  'pp.s2.l2': 'कोई उपयोग विश्लेषण या टेलीमेट्री एकत्र नहीं की जाती',
  'pp.s2.l3': 'कोई ब्राउज़िंग डेटा या गतिविधि ट्रैक नहीं की जाती',
  'pp.s2.l4': 'कोई स्थान डेटा एक्सेस नहीं किया जाता',
  'pp.s2.l5': 'कोई डिवाइस पहचानकर्ता एकत्र नहीं किए जाते',
  'pp.s2.l6': 'कोई क्रैश रिपोर्ट नहीं भेजी जाती',
  'pp.s3.title': '3. नेटवर्क गतिविधि',
  'pp.s3.text': 'BreakMate <strong>100% ऑफ़लाइन</strong> काम करता है। एप्लिकेशन कोई नेटवर्क अनुरोध नहीं करता। यह किसी सर्वर, API या क्लाउड सेवा से कनेक्ट नहीं होता। BreakMate का उपयोग करने के लिए इंटरनेट कनेक्शन की आवश्यकता नहीं है।',
  'pp.s4.title': '4. स्थानीय डेटा भंडारण',
  'pp.s4.text': 'BreakMate आपकी प्राथमिकताओं को याद रखने के लिए आपके डिवाइस पर स्थानीय रूप से थोड़ी मात्रा में डेटा संग्रहीत करता है:',
  'pp.s4.l1': '<strong>सेटिंग्स:</strong> अनुस्मारक अंतराल, भाषा वरीयता और प्रदर्शन विकल्प',
  'pp.s4.l2': '<strong>आंकड़े:</strong> दैनिक अनुस्मारक गणना और पानी सेवन ट्रैकिंग',
  'pp.s4.l3': '<strong>रजिस्ट्री:</strong> इंस्टॉलेशन पथ और ऑटोस्टार्ट प्राथमिकता',
  'pp.s4.text2': 'सभी डेटा निम्नलिखित स्थानों पर संग्रहीत है:',
  'pp.s5.title': '5. तृतीय-पक्ष सेवाएं',
  'pp.s5.text': 'BreakMate किसी भी तृतीय-पक्ष सेवा, SDK या एनालिटिक्स प्लेटफ़ॉर्म के साथ एकीकृत नहीं होता। एप्लिकेशन में कोई विज्ञापन फ्रेमवर्क शामिल नहीं है।',
  'pp.s6.title': '6. कुकीज़',
  'pp.s6.text': 'BreakMate कुकीज़ का उपयोग नहीं करता। एप्लिकेशन ब्राउज़र संदर्भ में नहीं चलता और ब्राउज़र कुकीज़ को संग्रहीत या एक्सेस नहीं करता।',
  'pp.s7.title': '7. खाते और प्रमाणीकरण',
  'pp.s7.text': 'BreakMate को किसी खाते के निर्माण, लॉगिन या प्रमाणीकरण की आवश्यकता नहीं है। कोई उपयोगकर्ता पंजीकरण प्रक्रिया नहीं है।',
  'pp.s8.title': '8. बच्चों की गोपनीयता',
  'pp.s8.text': 'BreakMate बच्चों सहित किसी से भी कोई व्यक्तिगत डेटा एकत्र नहीं करता। एप्लिकेशन सभी उम्र के उपयोगकर्ताओं के लिए सुरक्षित है।',
  'pp.s9.title': '9. डेटा हटाना',
  'pp.s9.text': 'चूंकि सभी डेटा आपके डिवाइस पर स्थानीय रूप से संग्रहीत है, आपका इस पर पूर्ण नियंत्रण है:',
  'pp.s9.l1': '<strong>एप्लिकेशन को अनइंस्टॉल करें</strong> अपने डिवाइस से सभी BreakMate डेटा हटाने के लिए',
  'pp.s9.l3': 'अनइंस्टॉलर सभी एप्लिकेशन फ़ाइलें और रजिस्ट्री प्रविष्टियाँ हटा देता है',
  'pp.s10.title': '10. इस नीति में परिवर्तन',
  'pp.s10.text': 'यदि हम इस गोपनीयता नीति में परिवर्तन करते हैं, तो हम शीर्ष पर "अंतिम अपडेट" तिथि अपडेट करेंगे। चूंकि BreakMate कोई डेटा एकत्र नहीं करता, इस नीति में महत्वपूर्ण परिवर्तन संभव नहीं हैं।',
  'pp.s11.title': '11. संपर्क',
  'pp.s11.text': 'यदि आपके पास इस गोपनीयता नीति या BreakMate के डेटा प्रथाओं के बारे में कोई प्रश्न हैं, तो आप हमारे <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">GitHub पेज</a> पर एक issue खोल सकते हैं।',
  'pp.commitment': '<strong>हमारी प्रतिबद्धता:</strong> BreakMate को गोपनीयता को मूल सिद्धांत मानकर बनाया गया था। हम मानते हैं कि आपका स्वास्थ्य डेटा और व्यक्तिगत जानकारी केवल आपकी है। इसलिए हमने BreakMate को पूरी तरह से ऑफ़लाइन काम करने के लिए डिज़ाइन किया है, शून्य डेटा संग्रहण के साथ।',
  'pp.footer': '© 2025–2026 BreakMate. सर्वाधिकार सुरक्षित।',
});

// =====================
// ARABIC
// =====================
T.ar = makeLang({
  'back': '→ العودة إلى الرئيسية',
  'pp.title': 'سياسة الخصوصية',
  'pp.updated': 'آخر تحديث: 16 فبراير 2026',
  'pp.summary': '<strong>باختصار:</strong> لا يقوم BreakMate بجمع أو تخزين أو نقل أي بيانات شخصية. يعمل التطبيق بالكامل بدون اتصال بالإنترنت ولا يتطلب حسابات أو اتصال بالإنترنت أو أذونات تتجاوز الوصول الأساسي لسطح المكتب.',
  'pp.s1.title': '1. نظرة عامة',
  'pp.s1.text': 'BreakMate هو تطبيق سطح مكتب لنظام Windows يوفر تذكيرات صحية (راحة العين، الترطيب، وضعية الجسم، الحركة والتمدد). توضح سياسة الخصوصية هذه كيفية تعامل BreakMate مع بياناتك.',
  'pp.s2.title': '2. جمع البيانات',
  'pp.s2.text': '<strong>لا</strong> يقوم BreakMate بجمع أي بيانات شخصية. تحديداً:',
  'pp.s2.l1': 'لا يتم جمع أي معلومات شخصية (الاسم، البريد الإلكتروني، الهاتف، إلخ)',
  'pp.s2.l2': 'لا يتم جمع تحليلات الاستخدام أو القياس عن بعد',
  'pp.s2.l3': 'لا يتم تتبع بيانات التصفح أو النشاط',
  'pp.s2.l4': 'لا يتم الوصول إلى بيانات الموقع',
  'pp.s2.l5': 'لا يتم جمع معرفات الأجهزة',
  'pp.s2.l6': 'لا يتم إرسال تقارير الأعطال',
  'pp.s3.title': '3. نشاط الشبكة',
  'pp.s3.text': 'يعمل BreakMate <strong>بنسبة 100% بدون اتصال</strong>. لا يقوم التطبيق بأي طلبات شبكة. لا يتصل بأي خوادم أو واجهات برمجة تطبيقات أو خدمات سحابية. لا يلزم اتصال بالإنترنت لاستخدام BreakMate.',
  'pp.s4.title': '4. تخزين البيانات المحلي',
  'pp.s4.text': 'يخزن BreakMate كمية صغيرة من البيانات محلياً على جهازك لتذكر تفضيلاتك:',
  'pp.s4.l1': '<strong>الإعدادات:</strong> فترات التذكير وتفضيل اللغة وخيارات العرض',
  'pp.s4.l2': '<strong>الإحصائيات:</strong> عدد التذكيرات اليومية وتتبع استهلاك الماء',
  'pp.s4.l3': '<strong>السجل:</strong> مسار التثبيت وتفضيل التشغيل التلقائي',
  'pp.s4.text2': 'يتم تخزين جميع البيانات في المواقع التالية:',
  'pp.s5.title': '5. خدمات الطرف الثالث',
  'pp.s5.text': 'لا يتكامل BreakMate مع أي خدمات طرف ثالث أو حزم تطوير أو منصات تحليلات. لا يتضمن التطبيق أي أطر عمل إعلانية.',
  'pp.s6.title': '6. ملفات تعريف الارتباط',
  'pp.s6.text': 'لا يستخدم BreakMate ملفات تعريف الارتباط. لا يعمل التطبيق في سياق المتصفح ولا يخزن أو يصل إلى ملفات تعريف ارتباط المتصفح.',
  'pp.s7.title': '7. الحسابات والمصادقة',
  'pp.s7.text': 'لا يتطلب BreakMate إنشاء حساب أو تسجيل دخول أو مصادقة. لا توجد عملية تسجيل مستخدم.',
  'pp.s8.title': '8. خصوصية الأطفال',
  'pp.s8.text': 'لا يجمع BreakMate أي بيانات شخصية من أي شخص، بما في ذلك الأطفال. التطبيق آمن لمستخدمي جميع الأعمار.',
  'pp.s9.title': '9. حذف البيانات',
  'pp.s9.text': 'نظراً لأن جميع البيانات مخزنة محلياً على جهازك، لديك السيطرة الكاملة عليها:',
  'pp.s9.l1': '<strong>قم بإلغاء تثبيت التطبيق</strong> لإزالة جميع بيانات BreakMate من جهازك',
  'pp.s9.l3': 'يقوم برنامج إلغاء التثبيت بإزالة جميع ملفات التطبيق وإدخالات السجل',
  'pp.s10.title': '10. التغييرات في هذه السياسة',
  'pp.s10.text': 'إذا أجرينا تغييرات على سياسة الخصوصية هذه، فسنقوم بتحديث تاريخ "آخر تحديث" في الأعلى. نظراً لأن BreakMate لا يجمع أي بيانات، فإن التغييرات الجوهرية في هذه السياسة غير محتملة.',
  'pp.s11.title': '11. الاتصال',
  'pp.s11.text': 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات بيانات BreakMate، يمكنك فتح issue على <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">صفحتنا على GitHub</a>.',
  'pp.commitment': '<strong>التزامنا:</strong> تم بناء BreakMate مع الخصوصية كمبدأ أساسي. نحن نؤمن بأن بياناتك الصحية ومعلوماتك الشخصية ملك لك وحدك. لهذا السبب صممنا BreakMate للعمل بالكامل بدون اتصال، مع صفر جمع بيانات.',
  'pp.footer': '© 2025–2026 BreakMate. جميع الحقوق محفوظة.',
});

// =====================
// BENGALI
// =====================
T.bn = makeLang({
  'back': '← হোমে ফিরে যান',
  'pp.title': 'গোপনীয়তা নীতি',
  'pp.updated': 'সর্বশেষ আপডেট: ১৬ ফেব্রুয়ারি, ২০২৬',
  'pp.summary': '<strong>সংক্ষেপে:</strong> BreakMate কোনো ব্যক্তিগত ডেটা সংগ্রহ, সঞ্চয় বা প্রেরণ করে না। অ্যাপ্লিকেশনটি সম্পূর্ণ অফলাইনে কাজ করে এবং কোনো অ্যাকাউন্ট, ইন্টারনেট সংযোগ বা মৌলিক ডেস্কটপ অ্যাক্সেসের বাইরে কোনো অনুমতির প্রয়োজন নেই।',
  'pp.s1.title': '১. সংক্ষিপ্ত বিবরণ',
  'pp.s1.text': 'BreakMate হলো Windows-এর জন্য একটি ডেস্কটপ অ্যাপ্লিকেশন যা স্বাস্থ্য রিমাইন্ডার প্রদান করে (চোখের বিশ্রাম, হাইড্রেশন, ভঙ্গি, নড়াচড়া এবং স্ট্রেচিং)। এই গোপনীয়তা নীতি ব্যাখ্যা করে কিভাবে BreakMate আপনার ডেটা পরিচালনা করে।',
  'pp.s2.title': '২. ডেটা সংগ্রহ',
  'pp.s2.text': 'BreakMate কোনো ব্যক্তিগত ডেটা সংগ্রহ করে <strong>না</strong>। বিশেষত:',
  'pp.s2.l1': 'কোনো ব্যক্তিগত তথ্য সংগ্রহ করা হয় না (নাম, ইমেইল, ফোন ইত্যাদি)',
  'pp.s2.l2': 'কোনো ব্যবহার বিশ্লেষণ বা টেলিমেট্রি সংগ্রহ করা হয় না',
  'pp.s2.l3': 'কোনো ব্রাউজিং ডেটা বা কার্যকলাপ ট্র্যাক করা হয় না',
  'pp.s2.l4': 'কোনো অবস্থান ডেটা অ্যাক্সেস করা হয় না',
  'pp.s2.l5': 'কোনো ডিভাইস শনাক্তকারী সংগ্রহ করা হয় না',
  'pp.s2.l6': 'কোনো ক্র্যাশ রিপোর্ট পাঠানো হয় না',
  'pp.s3.title': '৩. নেটওয়ার্ক কার্যকলাপ',
  'pp.s3.text': 'BreakMate <strong>১০০% অফলাইনে</strong> কাজ করে। অ্যাপ্লিকেশনটি কোনো নেটওয়ার্ক অনুরোধ করে না। এটি কোনো সার্ভার, API বা ক্লাউড সেবার সাথে সংযোগ করে না। BreakMate ব্যবহার করতে ইন্টারনেট সংযোগের প্রয়োজন নেই।',
  'pp.s4.title': '৪. স্থানীয় ডেটা সঞ্চয়',
  'pp.s4.text': 'BreakMate আপনার পছন্দগুলি মনে রাখতে আপনার ডিভাইসে স্থানীয়ভাবে অল্প পরিমাণ ডেটা সঞ্চয় করে:',
  'pp.s4.l1': '<strong>সেটিংস:</strong> রিমাইন্ডার ব্যবধান, ভাষা পছন্দ এবং প্রদর্শন বিকল্প',
  'pp.s4.l2': '<strong>পরিসংখ্যান:</strong> দৈনিক রিমাইন্ডার গণনা এবং জল গ্রহণ ট্র্যাকিং',
  'pp.s4.l3': '<strong>রেজিস্ট্রি:</strong> ইনস্টলেশন পথ এবং অটোস্টার্ট পছন্দ',
  'pp.s4.text2': 'সমস্ত ডেটা নিম্নলিখিত স্থানগুলিতে সঞ্চিত:',
  'pp.s5.title': '৫. তৃতীয়-পক্ষ সেবা',
  'pp.s5.text': 'BreakMate কোনো তৃতীয়-পক্ষ সেবা, SDK বা বিশ্লেষণ প্ল্যাটফর্মের সাথে একীভূত হয় না। অ্যাপ্লিকেশনটিতে কোনো বিজ্ঞাপন ফ্রেমওয়ার্ক অন্তর্ভুক্ত নেই।',
  'pp.s6.title': '৬. কুকিজ',
  'pp.s6.text': 'BreakMate কুকিজ ব্যবহার করে না। অ্যাপ্লিকেশনটি ব্রাউজার প্রসঙ্গে চলে না এবং ব্রাউজার কুকিজ সঞ্চয় বা অ্যাক্সেস করে না।',
  'pp.s7.title': '৭. অ্যাকাউন্ট ও প্রমাণীকরণ',
  'pp.s7.text': 'BreakMate-এর কোনো অ্যাকাউন্ট তৈরি, লগইন বা প্রমাণীকরণের প্রয়োজন নেই। কোনো ব্যবহারকারী নিবন্ধন প্রক্রিয়া নেই।',
  'pp.s8.title': '৮. শিশুদের গোপনীয়তা',
  'pp.s8.text': 'BreakMate শিশু সহ কারো কাছ থেকে কোনো ব্যক্তিগত ডেটা সংগ্রহ করে না। অ্যাপ্লিকেশনটি সব বয়সের ব্যবহারকারীদের জন্য নিরাপদ।',
  'pp.s9.title': '৯. ডেটা মুছে ফেলা',
  'pp.s9.text': 'যেহেতু সমস্ত ডেটা আপনার ডিভাইসে স্থানীয়ভাবে সঞ্চিত, আপনার এর উপর সম্পূর্ণ নিয়ন্ত্রণ রয়েছে:',
  'pp.s9.l1': '<strong>অ্যাপ্লিকেশনটি আনইনস্টল করুন</strong> আপনার ডিভাইস থেকে সমস্ত BreakMate ডেটা সরাতে',
  'pp.s9.l3': 'আনইনস্টলার সমস্ত অ্যাপ্লিকেশন ফাইল এবং রেজিস্ট্রি এন্ট্রি সরিয়ে দেয়',
  'pp.s10.title': '১০. এই নীতির পরিবর্তন',
  'pp.s10.text': 'আমরা যদি এই গোপনীয়তা নীতিতে পরিবর্তন করি, তাহলে শীর্ষে "সর্বশেষ আপডেট" তারিখ আপডেট করব। যেহেতু BreakMate কোনো ডেটা সংগ্রহ করে না, এই নীতিতে উল্লেখযোগ্য পরিবর্তন সম্ভাবনা কম।',
  'pp.s11.title': '১১. যোগাযোগ',
  'pp.s11.text': 'এই গোপনীয়তা নীতি বা BreakMate-এর ডেটা অনুশীলন সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, আপনি আমাদের <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">GitHub পেজে</a> একটি issue খুলতে পারেন।',
  'pp.commitment': '<strong>আমাদের প্রতিশ্রুতি:</strong> BreakMate গোপনীয়তাকে মূল নীতি হিসেবে তৈরি করা হয়েছে। আমরা বিশ্বাস করি আপনার স্বাস্থ্য ডেটা এবং ব্যক্তিগত তথ্য শুধুমাত্র আপনার। এই কারণেই আমরা BreakMate-কে সম্পূর্ণ অফলাইনে কাজ করার জন্য ডিজাইন করেছি, শূন্য ডেটা সংগ্রহ সহ।',
  'pp.footer': '© 2025–2026 BreakMate. সর্বস্বত্ব সংরক্ষিত।',
});

// =====================
// DUTCH
// =====================
T.nl = makeLang({
  'back': '← Terug naar Home',
  'pp.title': 'Privacybeleid',
  'pp.updated': 'Laatst bijgewerkt: 16 februari 2026',
  'pp.summary': '<strong>Kort gezegd:</strong> BreakMate verzamelt, bewaart of verzendt geen persoonlijke gegevens. De applicatie werkt volledig offline en vereist geen accounts, geen internetverbinding en geen toestemmingen buiten basale desktoptoegang.',
  'pp.s1.title': '1. Overzicht',
  'pp.s1.text': 'BreakMate is een desktopapplicatie voor Windows die gezondheidsherinneringen biedt (oogrust, hydratatie, houding, beweging en stretching). Dit privacybeleid legt uit hoe BreakMate met uw gegevens omgaat.',
  'pp.s2.title': '2. Gegevensverzameling',
  'pp.s2.text': 'BreakMate verzamelt <strong>geen</strong> persoonlijke gegevens. Specifiek:',
  'pp.s2.l1': 'Er worden geen persoonlijke gegevens verzameld (naam, e-mail, telefoon, enz.)',
  'pp.s2.l2': 'Er worden geen gebruiksanalyses of telemetrie verzameld',
  'pp.s2.l3': 'Er worden geen browsegegevens of activiteiten bijgehouden',
  'pp.s2.l4': 'Er worden geen locatiegegevens gebruikt',
  'pp.s2.l5': 'Er worden geen apparaat-ID\'s verzameld',
  'pp.s2.l6': 'Er worden geen crashrapporten verzonden',
  'pp.s3.title': '3. Netwerkactiviteit',
  'pp.s3.text': 'BreakMate werkt <strong>100% offline</strong>. De applicatie doet geen netwerkverzoeken. Het maakt geen verbinding met servers, API\'s of clouddiensten. Er is geen internetverbinding nodig om BreakMate te gebruiken.',
  'pp.s4.title': '4. Lokale Gegevensopslag',
  'pp.s4.text': 'BreakMate slaat een kleine hoeveelheid gegevens lokaal op uw apparaat op om uw voorkeuren te onthouden:',
  'pp.s4.l1': '<strong>Instellingen:</strong> Herinneringsintervallen, taalvoorkeur en weergaveopties',
  'pp.s4.l2': '<strong>Statistieken:</strong> Dagelijkse herinneringstellers en waterinname-tracking',
  'pp.s4.l3': '<strong>Register:</strong> Installatiepad en autostartvoorkeur',
  'pp.s4.text2': 'Alle gegevens worden op de volgende locaties opgeslagen:',
  'pp.s5.title': '5. Diensten van Derden',
  'pp.s5.text': 'BreakMate integreert niet met diensten van derden, SDK\'s of analyseplatforms. De applicatie bevat geen advertentieframeworks.',
  'pp.s6.title': '6. Cookies',
  'pp.s6.text': 'BreakMate gebruikt geen cookies. De applicatie draait niet in een browsercontext en slaat geen browsercookies op of heeft er geen toegang toe.',
  'pp.s7.title': '7. Accounts & Authenticatie',
  'pp.s7.text': 'BreakMate vereist geen accountaanmaak, inloggen of authenticatie. Er is geen gebruikersregistratieproces.',
  'pp.s8.title': '8. Privacy van Kinderen',
  'pp.s8.text': 'BreakMate verzamelt geen persoonlijke gegevens van wie dan ook, inclusief kinderen. De applicatie is veilig voor gebruikers van alle leeftijden.',
  'pp.s9.title': '9. Gegevens Verwijderen',
  'pp.s9.text': 'Aangezien alle gegevens lokaal op uw apparaat zijn opgeslagen, heeft u er volledige controle over:',
  'pp.s9.l1': '<strong>Verwijder de applicatie</strong> om alle BreakMate-gegevens van uw apparaat te verwijderen',
  'pp.s9.l3': 'Het verwijderprogramma verwijdert alle applicatiebestanden en registervermeldingen',
  'pp.s10.title': '10. Wijzigingen in dit Beleid',
  'pp.s10.text': 'Als we wijzigingen aanbrengen in dit privacybeleid, updaten we de datum "Laatst bijgewerkt" bovenaan. Aangezien BreakMate geen gegevens verzamelt, zijn aanzienlijke wijzigingen in dit beleid onwaarschijnlijk.',
  'pp.s11.title': '11. Contact',
  'pp.s11.text': 'Als u vragen heeft over dit privacybeleid of de gegevenspraktijken van BreakMate, kunt u een issue openen op onze <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">GitHub-pagina</a>.',
  'pp.commitment': '<strong>Ons commitment:</strong> BreakMate is gebouwd met privacy als kernprincipe. Wij geloven dat uw gezondheidsgegevens en persoonlijke informatie alleen van u zijn. Daarom hebben we BreakMate ontworpen om volledig offline te werken, met nul gegevensverzameling.',
  'pp.footer': '© 2025–2026 BreakMate. Alle rechten voorbehouden.',
});

// =====================
// TURKISH
// =====================
T.tr = makeLang({
  'back': '← Ana Sayfaya Dön',
  'pp.title': 'Gizlilik Politikası',
  'pp.updated': 'Son güncelleme: 16 Şubat 2026',
  'pp.summary': '<strong>Kısaca:</strong> BreakMate hiçbir kişisel veri toplamaz, saklamaz veya iletmez. Uygulama tamamen çevrimdışı çalışır ve hesap, internet bağlantısı veya temel masaüstü erişiminin ötesinde herhangi bir izin gerektirmez.',
  'pp.s1.title': '1. Genel Bakış',
  'pp.s1.text': 'BreakMate, sağlık hatırlatmaları sağlayan (göz dinlenmesi, su içme, duruş, hareket ve esneme) Windows için bir masaüstü uygulamasıdır. Bu gizlilik politikası, BreakMate\'in verilerinizi nasıl işlediğini açıklar.',
  'pp.s2.title': '2. Veri Toplama',
  'pp.s2.text': 'BreakMate hiçbir kişisel veri <strong>toplamaz</strong>. Özellikle:',
  'pp.s2.l1': 'Hiçbir kişisel bilgi toplanmaz (isim, e-posta, telefon vb.)',
  'pp.s2.l2': 'Hiçbir kullanım analizi veya telemetri toplanmaz',
  'pp.s2.l3': 'Hiçbir tarama verisi veya etkinlik izlenmez',
  'pp.s2.l4': 'Hiçbir konum verisine erişilmez',
  'pp.s2.l5': 'Hiçbir cihaz tanımlayıcısı toplanmaz',
  'pp.s2.l6': 'Hiçbir çökme raporu gönderilmez',
  'pp.s3.title': '3. Ağ Etkinliği',
  'pp.s3.text': 'BreakMate <strong>%100 çevrimdışı</strong> çalışır. Uygulama hiçbir ağ isteği yapmaz. Hiçbir sunucuya, API\'ye veya bulut hizmetine bağlanmaz. BreakMate\'i kullanmak için internet bağlantısı gerekmez.',
  'pp.s4.title': '4. Yerel Veri Depolama',
  'pp.s4.text': 'BreakMate, tercihlerinizi hatırlamak için cihazınızda yerel olarak az miktarda veri depolar:',
  'pp.s4.l1': '<strong>Ayarlar:</strong> Hatırlatma aralıkları, dil tercihi ve görüntüleme seçenekleri',
  'pp.s4.l2': '<strong>İstatistikler:</strong> Günlük hatırlatma sayıları ve su tüketimi takibi',
  'pp.s4.l3': '<strong>Kayıt Defteri:</strong> Kurulum yolu ve otomatik başlatma tercihi',
  'pp.s4.text2': 'Tüm veriler aşağıdaki konumlarda depolanır:',
  'pp.s5.title': '5. Üçüncü Taraf Hizmetler',
  'pp.s5.text': 'BreakMate hiçbir üçüncü taraf hizmet, SDK veya analiz platformuyla entegre olmaz. Uygulama hiçbir reklam çerçevesi içermez.',
  'pp.s6.title': '6. Çerezler',
  'pp.s6.text': 'BreakMate çerez kullanmaz. Uygulama tarayıcı bağlamında çalışmaz ve tarayıcı çerezlerini depolamaz veya erişmez.',
  'pp.s7.title': '7. Hesaplar ve Kimlik Doğrulama',
  'pp.s7.text': 'BreakMate hesap oluşturma, giriş yapma veya kimlik doğrulama gerektirmez. Kullanıcı kayıt süreci yoktur.',
  'pp.s8.title': '8. Çocukların Gizliliği',
  'pp.s8.text': 'BreakMate, çocuklar dahil hiç kimseden kişisel veri toplamaz. Uygulama tüm yaş gruplarındaki kullanıcılar için güvenlidir.',
  'pp.s9.title': '9. Veri Silme',
  'pp.s9.text': 'Tüm veriler cihazınızda yerel olarak depolandığından, üzerlerinde tam kontrol sizde:',
  'pp.s9.l1': '<strong>Uygulamayı kaldırın</strong> cihazınızdan tüm BreakMate verilerini silmek için',
  'pp.s9.l3': 'Kaldırma programı tüm uygulama dosyalarını ve kayıt defteri girdilerini siler',
  'pp.s10.title': '10. Bu Politikadaki Değişiklikler',
  'pp.s10.text': 'Bu gizlilik politikasında değişiklik yaparsak, üstteki "Son güncelleme" tarihini güncelleriz. BreakMate hiçbir veri toplamadığından, bu politikada önemli değişiklikler olası değildir.',
  'pp.s11.title': '11. İletişim',
  'pp.s11.text': 'Bu gizlilik politikası veya BreakMate\'in veri uygulamaları hakkında sorularınız varsa, <a href="https://github.com/aleapc/breakmate/issues" target="_blank" rel="noopener" style="color:#4A90D9;">GitHub sayfamızda</a> bir issue açabilirsiniz.',
  'pp.commitment': '<strong>Taahhüdümüz:</strong> BreakMate, gizliliği temel ilke olarak inşa edilmiştir. Sağlık verilerinizin ve kişisel bilgilerinizin yalnızca size ait olduğuna inanıyoruz. Bu nedenle BreakMate\'i tamamen çevrimdışı çalışacak ve sıfır veri toplayacak şekilde tasarladık.',
  'pp.footer': '© 2025–2026 BreakMate. Tüm hakları saklıdır.',
});

// === I18N ENGINE ===
let currentLang = 'en';

function setLanguage(lang) {
  const translations = T[lang] || T.en;
  currentLang = lang;

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) el.textContent = translations[key];
  });

  // Update HTML content (for elements with emojis, links, <strong>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[key]) el.innerHTML = translations[key];
  });

  // Update HTML dir attribute for RTL
  const langInfo = LANGUAGES.find(l => l.code === lang);
  document.documentElement.dir = langInfo && langInfo.dir === 'rtl' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Update lang selector button
  if (langInfo) {
    document.getElementById('lang-flag').textContent = langInfo.flag;
    document.getElementById('lang-code').textContent = langInfo.label;
  }

  // Update active state in dropdown
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Save preference
  try { localStorage.setItem('breakmate-lang', lang); } catch(e) {}
}

function initI18n() {
  // Build dropdown
  const dropdown = document.getElementById('lang-dropdown');
  LANGUAGES.forEach(l => {
    const btn = document.createElement('button');
    btn.className = 'lang-option' + (l.code === 'en' ? ' active' : '');
    btn.dataset.lang = l.code;
    btn.innerHTML = l.flag + ' ' + l.name;
    btn.addEventListener('click', () => {
      setLanguage(l.code);
      dropdown.classList.remove('open');
    });
    dropdown.appendChild(btn);
  });

  // Toggle dropdown
  document.getElementById('lang-toggle').addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => dropdown.classList.remove('open'));

  // Detect language: saved → browser → default
  let lang = 'en';
  try {
    const saved = localStorage.getItem('breakmate-lang');
    if (saved && T[saved]) {
      lang = saved;
    } else {
      const browserLang = navigator.language || '';
      const match = LANGUAGES.find(l => browserLang.startsWith(l.code.split('-')[0]));
      if (match && T[match.code]) lang = match.code;
    }
  } catch(e) {}

  setLanguage(lang);
}

initI18n();
