const questions = [
    {
        question: "En quelle année le réseau Bitcoin a-t-il été mis en service ?",
        options: ["2005", "2009", "2013", "2017"],
        correct: [1],
        explanation: "C’est l’année du lancement officiel du réseau Bitcoin, avec le premier bloc (Genesis Block) miné par Satoshi Nakamoto."
    },
    {
        question: "Quel pseudonyme est associé à la création de Bitcoin ?",
        options: ["Vitalik Buterin", "Elon Musk", "Satoshi Nakamoto", "Charles Hoskinson"],
        correct: [2],
        explanation: "Il s'agit du pseudonyme utilisé par le ou les créateurs de Bitcoin. Son identité réelle est encore inconnue."
    },
    {
        question: "Parmi les choix suivants, que représente Bitcoin ?",
        options: ["Une entreprise cotée en bourse", "Une monnaie numérique décentralisée", "Une carte bancaire", "Un logiciel de paiement mobile"],
        correct: [1],
        explanation: "Bitcoin n'est ni une entreprise ni une carte bancaire. Il s'agit d’un protocole monétaire ouvert."
    },
    {
        question: "Combien de bitcoins pourront être créés au maximum ?",
        options: ["Un milliard", "100 millions", "21 millions", "Illimité"],
        correct: [2],
        explanation: "L'offre totale de bitcoins est limitée dès le départ à 21 millions, ce qui permet de contrôler l'inflation."
    },
    {
        question: "Quel outil est utilisé pour conserver ses bitcoins ?",
        options: ["Une carte SIM", "Un portefeuille numérique (wallet)", "Un compte bancaire", "Un mot de passe"],
        correct: [1],
        explanation: "Un wallet permet de gérer les clés privées et d’accéder à ses bitcoins. Ce n’est pas un compte bancaire."
    },
    {
        question: "Quelle caractéristique est vraie concernant les transactions Bitcoin ?",
        options: ["Elles sont réversibles en cas d’erreur", "Elles sont toujours anonymes", "Elles sont enregistrées publiquement sur la blockchain", "Elles nécessitent une validation par une banque"],
        correct: [2],
        explanation: "Toutes les transactions sont publiques et enregistrées dans la blockchain, mais sans les identités personnelles."
    },
    {
        question: "Quel élément est indispensable pour autoriser l’envoi de bitcoins ?",
        options: ["Un identifiant personnel", "Une carte d’identité", "Une clé privée", "Un numéro de compte"],
        correct: [2],
        explanation: "La clé privée permet de signer une transaction et prouver que vous êtes bien le détenteur des fonds."
    },
    {
        question: "Quelle technologie est au cœur du fonctionnement de Bitcoin ?",
        options: ["L’intelligence artificielle", "La blockchain", "Le cloud computing", "La biométrie"],
        correct: [1],
        explanation: "C’est un registre distribué dans lequel les transactions sont enregistrées de manière chronologique et sécurisée."
    },
    {
        question: "Quel était l’un des objectifs de Bitcoin à sa création ?",
        options: ["Financer les banques centrales", "Créer un réseau social sécurisé", "Permettre des paiements sans tiers de confiance", "Remplacer entièrement le système bancaire"],
        correct: [2],
        explanation: "Bitcoin a été conçu pour permettre des paiements entre pairs, sans avoir besoin d’un tiers de confiance."
    },
    {
        question: "Le réseau Bitcoin peut fonctionner sans…",
        options: ["Internet", "Ordinateurs", "Intermédiaire centralisé", "Logiciel open-source"],
        correct: [2],
        explanation: "Le réseau fonctionne de manière décentralisée, sans entité de contrôle unique."
    },
    {
        question: "Comment les transactions Bitcoin sont-elles validées ?",
        options: ["Par une banque centrale", "Par les utilisateurs votants", "Par les mineurs du réseau", "Par une autorité réglementaire"],
        correct: [2],
        explanation: "Ce sont les mineurs qui valident les transactions en les incluant dans des blocs."
    },
    {
        question: "Qu’est-ce qu’un portefeuille Bitcoin (wallet) ?",
        options: ["Une carte prépayée contenant des bitcoins", "Un compte bancaire associé à une crypto", "Un outil pour gérer ses clés cryptographiques", "Une plateforme d’échange réglementée"],
        correct: [2],
        explanation: "Un portefeuille sert à stocker les clés privées/publics, pas à conserver des “bitcoins physiques”."
    },
    {
        question: "Parmi les affirmations suivantes, lesquelles décrivent correctement la blockchain Bitcoin ?",
        options: ["Elle est centralisée", "Elle est consultable publiquement", "Elle ne peut être modifiée facilement", "Elle est hébergée par une seule entreprise"],
        correct: [1, 2],
        explanation: "La blockchain est publique et résistante aux modifications. Elle est décentralisée et distribuée sur des milliers de nœuds."
    },
    {
        question: "Quel est le rôle principal du minage dans Bitcoin ?",
        options: ["Créer de nouveaux tokens et les vendre", "Gérer les portefeuilles utilisateurs", "Valider et sécuriser les transactions", "Effacer les données obsolètes"],
        correct: [2],
        explanation: "Le minage permet de créer de nouveaux bitcoins tout en validant et sécurisant les transactions du réseau."
    },
    {
        question: "Pourquoi dit-on que Bitcoin est pseudonyme et non anonyme ?",
        options: ["Parce que toutes les adresses sont vérifiées par KYC", "Parce que chaque adresse est liée à un nom réel", "Parce que les identités ne sont pas directement visibles, mais les transactions sont publiques", "Parce que chaque utilisateur a un pseudonyme affiché dans la blockchain"],
        correct: [2],
        explanation: "Les adresses Bitcoin ne sont pas directement liées à une identité, mais les flux sont publics et traçables."
    },
    {
        question: "Quel est le rôle d’un “nœud” dans le réseau Bitcoin ?",
        options: ["C’est une unité de stockage pour les portefeuilles", "C’est un point du réseau qui valide et relaie les blocs et transactions", "C’est un utilisateur vérifié par une autorité centrale", "C’est un protocole d’échange de données"],
        correct: [1],
        explanation: "Un nœud conserve une copie de la blockchain, valide les blocs et relaye les transactions."
    },
    {
        question: "Pourquoi Bitcoin est-il parfois qualifié de “réserve de valeur” ?",
        options: ["Il est adossé à une réserve d’or", "Il est émis par une banque centrale", "Son offre est limitée et prévisible", "Il échappe à l’inflation monétaire classique"],
        correct: [2, 3],
        explanation: "L’offre fixe et la politique monétaire transparente rendent Bitcoin intéressant comme réserve de valeur."
    },
    {
        question: "Que désigne le terme “halving” dans Bitcoin ?",
        options: ["Une division du réseau en deux chaînes", "Une réduction périodique des récompenses de minage", "Une perte de valeur de moitié", "Un changement de gouvernance"],
        correct: [1],
        explanation: "Tous les 210 000 blocs, la récompense attribuée aux mineurs est divisée par deux."
    },
    {
        question: "Parmi les utilisations suivantes, lesquelles sont possibles avec Bitcoin ?",
        options: ["Payer un achat en ligne", "Accéder à des contenus privés", "Envoyer de la valeur à l’international", "Lancer des campagnes publicitaires ciblées"],
        correct: [0, 2],
        explanation: "Bitcoin permet d’effectuer des paiements et des transferts de valeur, mais pas de gérer des campagnes marketing."
    },
    {
        question: "Quels risques sont associés à l’utilisation de Bitcoin ?",
        options: ["Perte ou vol de la clé privée", "Volatilité importante du prix", "Contrôle possible par un État unique", "Censure de certaines transactions"],
        correct: [0, 1, 3],
        explanation: "Les risques incluent la perte de clés, la volatilité du marché, et une possible censure par des intermédiaires (plateformes)."
    },
    {
        question: "Quel est le rôle de la signature cryptographique dans le fonctionnement de Bitcoin ?",
        options: ["Elle permet de vérifier que la transaction vient bien du détenteur des fonds", "Elle permet de chiffrer le contenu des blocs pour garantir la confidentialité", "Elle rend chaque transaction unique et infalsifiable", "Elle permet de créer de nouveaux blocs sur la blockchain"],
        correct: [0, 2],
        explanation: "La signature prouve que vous êtes l’auteur légitime d’une transaction et la rend infalsifiable."
    },
    {
        question: "Pourquoi le protocole de Bitcoin ajuste-t-il automatiquement la difficulté de minage ?",
        options: ["Pour garantir un nombre fixe de transactions par jour", "Pour maintenir un temps moyen de 10 minutes entre chaque bloc, malgré les variations de puissance de calcul", "Pour adapter la taille des blocs à la demande du réseau", "Pour faire varier les frais de transaction en fonction du marché"],
        correct: [1],
        explanation: "La difficulté s’ajuste pour maintenir un rythme constant, peu importe la puissance de calcul disponible sur le réseau."
    },
    {
        question: "En quoi consiste une “attaque des 51 %” dans le contexte du réseau Bitcoin ?",
        options: ["Un acteur peut empêcher la validation de certaines transactions", "Elle permet de modifier le nombre total de bitcoins en circulation", "L’attaquant peut réorganiser la blockchain à son avantage sur une courte période", "Elle donne la possibilité d’usurper des clés privées"],
        correct: [0, 2],
        explanation: "Une attaque 51 % permettrait de censurer ou de réorganiser temporairement la chaîne de blocs."
    },
    {
        question: "Qu'appelle-t-on un “hard fork” dans l’univers Bitcoin ?",
        options: ["Une mise à jour automatique du logiciel Bitcoin Core", "Une scission du réseau lorsque des participants adoptent des règles incompatibles", "Un type de malware visant les portefeuilles crypto", "Une procédure destinée à effacer des blocs jugés invalides"],
        correct: [1],
        explanation: "Un hard fork crée deux blockchains distinctes avec des règles différentes, si les participants ne sont pas d’accord."
    },
    {
        question: "Quels sont les principaux défis liés à la scalabilité du réseau Bitcoin ?",
        options: ["La limitation du nombre de transactions traitables par seconde", "L’augmentation des frais en période de congestion du réseau", "La baisse du nombre de mineurs sur le réseau", "La capacité maximale imposée à la taille des blocs"],
        correct: [0, 1, 3],
        explanation: "Le réseau peut devenir lent et cher si trop de transactions sont en attente. Cela pose un défi pour l’évolutivité."
    },
    {
        question: "À propos du protocole Bitcoin, quelles affirmations sont exactes ?",
        options: ["Le code est open-source et accessible à tous", "Toute personne peut modifier les règles du protocole à sa guise", "Les évolutions du protocole nécessitent un consensus au sein du réseau", "Le protocole est géré par une entité centrale appelée “Bitcoin Foundation”"],
        correct: [0, 2],
        explanation: "Le code est libre, mais les changements ne sont adoptés que s’ils sont largement approuvés."
    },
    {
        question: "À quoi sert le Lightning Network dans l’écosystème Bitcoin ?",
        options: ["À réduire les frais et les délais lors de micro-paiements", "À améliorer la confidentialité des transactions sur la blockchain principale", "À créer des tokens compatibles avec Ethereum", "À permettre des échanges instantanés hors chaîne (off-chain)"],
        correct: [0, 3],
        explanation: "Le Lightning permet des paiements instantanés et peu coûteux sans encombrer la blockchain principale."
    },
    {
        question: "Que signifie le mécanisme de preuve de travail (Proof of Work) utilisé dans Bitcoin ?",
        options: ["Les mineurs résolvent un problème mathématique complexe pour valider les blocs", "Il permet à une autorité centrale de trier les transactions prioritaires", "Il nécessite une importante consommation d’énergie électrique", "Il repose sur la compétition entre les mineurs pour proposer le prochain bloc"],
        correct: [0, 2, 3],
        explanation: "La preuve de travail repose sur un calcul coûteux en énergie, avec mise en concurrence des mineurs."
    },
    {
        question: "Quels facteurs peuvent influencer le prix du bitcoin sur les marchés ?",
        options: ["L’offre et la demande sur les plateformes d’échange", "Les politiques monétaires des banques centrales", "L’actualité médiatique autour du bitcoin", "Le stock mondial d’or disponible"],
        correct: [0, 1, 2],
        explanation: "Le prix du bitcoin est sensible à l’offre/demande, aux annonces économiques et à l’actualité."
    },
    {
        question: "Quelles sont les critiques courantes formulées à l’égard de Bitcoin ?",
        options: ["Sa consommation énergétique élevée", "Sa lenteur pour effectuer des micropaiements", "Son extrême centralisation autour d’une poignée d’acteurs", "La forte volatilité de son prix"],
        correct: [0, 1, 3],
        explanation: "Le Bitcoin est souvent critiqué pour sa consommation énergétique, sa volatilité et ses limites techniques pour les petites transactions."
    }
];

const form = document.getElementById('qcm-form');
const progressBarInner = document.getElementById('progress-bar-inner');

questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    const answersDiv = document.createElement('div');
    answersDiv.className = 'answers';

    q.options.forEach((option, i) => {
        const inputType = q.correct.length > 1 ? '
