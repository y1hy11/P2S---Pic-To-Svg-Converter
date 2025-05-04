import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        convert: 'Convert',
        contact: 'Contact',
        language: 'Language',
        dark_mode: 'Dark Mode',
        light_mode: 'Light Mode'
      },
      hero: {
        title: 'Transform Your Images to SVG',
        subtitle: 'Convert any image into scalable vector graphics with our easy-to-use tool'
      },
      convert: {
        title: 'Convert Image to SVG',
        dropzone: 'Click to Select or Drag and Drop your Image Here',
        processing: 'Processing...',
        download: 'Download SVG',
        newFile: 'Upload New File'
      },
      error: {
        title: '404 - Page Not Found',
        message: 'Sorry, the page you are looking for does not exist.',
        return: 'Return to Homepage'
      },
      tool: {
        title: 'Edit & Download SVG',
        fillColor: 'Fill Color:',
        filter: 'Filter:',
        details: 'Details:',
        strokeColor: 'Stroke Color:',
        blur: 'Blur:',
        reset: 'Reset Modifications',
        noContent: 'No SVG content available. Please convert an image first.',
        filterOptions: {
          none: 'None',
          internal: 'Internal',
          edge: 'Edge'
        },
        detailOptions: {
          strong: 'Strong',
          minimal: 'Minimal'
        }
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Have questions? We\'re here to help!',
        name: 'Full Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
        options: {
          general: 'General Inquiry',
          support: 'Technical Support',
          feedback: 'Feedback'
        },
        errors: {
          nameRequired: 'Name is required',
          nameLength: 'Name must be at least 2 characters',
          emailRequired: 'Email is required',
          emailInvalid: 'Please enter a valid email',
          messageRequired: 'Message is required',
          messageLength: 'Message must be at least 10 characters'
        }
      },
      privacy: {
        title: 'Privacy Policy',
        sections: {
          processing: {
            title: '1. Image Processing & Storage',
            content: 'P2S is committed to your privacy and data security',
            items: {
              localProcessing: 'All image-to-SVG conversions are performed locally in your browser',
              noUpload: 'Your images are never uploaded to any server',
              noStorage: 'No image data is stored or cached after conversion',
              privateSvg: 'The converted SVG files remain completely private'
            }
          },
          technical: {
            title: '2. Technical Implementation',
            content: 'Our conversion process uses client-side technologies',
            items: {
              potrace: 'Browser-based image processing using Potrace library',
              svgGeneration: 'SVG generation and modification in your browser',
              noApiCalls: 'No external API calls or data transmission'
            }
          },
          usage: {
            title: '3. Website Usage Data',
            content: 'We collect minimal data to improve user experience',
            items: {
              theme: 'Theme preference (light/dark mode)',
              language: 'Language selection',
              cookies: 'Essential cookies for site functionality',
              noTracking: 'No tracking or analytics cookies'
            }
          },
          thirdParty: {
            title: '4. Third-Party Libraries',
            content: 'We use the following open-source libraries:',
            items: {
              potrace: 'Potrace - for image tracing',
              react: 'React - for user interface',
              compression: 'Browser Image Compression - for image optimization',
              local: 'All libraries run locally in your browser'
            }
          },
          updates: {
            title: '5. Updates & Contact',
            content: 'Stay informed and reach out to us:',
            items: {
              periodic: 'This privacy policy may be updated periodically',
              lastUpdate: 'Last updated: April 2024',
              contact: 'For questions or concerns, please',
              contactLink: 'contact us'
            }
          }
        }
      },
      info: {
        title_1: 'Transform Your Images to SVG',
        title: 'What is SVG',
        originalLabel: 'Original PNG/JPG',
        convertedLabel: 'Converted SVG',
        description: 'Svg (Scalable Vector Graphics) is an XML-based vector image format for two-dimensional graphics. The advantage is that you can modify image size without losing quality and detail. This vector format describes images as shapes, paths, text, and filter effects. Scaling the vector image preserves the shapes. This can be rendered at any resolution. SVG permits interactivity and animation. SVG files can be used with CSS styling to create new presentation in your document. You can easily change the SVG stroke width, change the color, add outline , hover effect... Text editors can open, edit, create SVG files due to them being XML files.Its more common to use drawing software to generate this file type. All parts and sections of SVG files are capable of animation',
        subtitle: 'Why Convert to SVG',
        whyConvert: 'Converting images to SVG format has several benefits. SVG files are scalable and can be resized without losing quality. They are lightweight and load faster on websites. SVG images are also easy to animate and can be styled using CSS. By converting images to SVG, you can create vector graphics that look sharp on any screen size.',
        startNow: 'Start Now',
        betaDescription: 'The converting tools are still in beta version. We currently use pure JavaScript libraries, and in the upcoming future we will implement APIs to enhance the quality of converting pictures, GIFs, and other formats to SVG and its modifications.',
        startConverting: 'Start Converting',
        howToUse: 'How can I use it?',
        usesDescription: 'SVG images can be used in a variety of ways, including:',
        usesList: [
          'Website design',
          'Logo design',
          'Icon design',
          'Animation',
          'Infographics',
          'Print media'
        ],
        toolsTitle: 'Creation Tools',
        toolsList: [
          'Icomoon - Create custom font files (.ttf)',
          'SVG Edit - Online editor for SVG files',
          'Inkscape - Desktop vector graphics editor',
          'Adobe Illustrator - Professional vector editing'
        ],
        implementationTitle: 'Implementation Examples',
        implementationDescription: 'Add SVG to your web pages using HTML:',
        workflowsTitle: 'Common workflows:',
        workflowsList: [
          'Convert images to SVG for scalable web graphics',
          'Transform SVG to STL for 3D printing',
          'Use JavaScript libraries for SVG manipulation and animation'
        ],
        services: 'Our Services',
        features: {
          fast: 'Fast Conversion',
          fastDesc: 'Convert your images to SVG format in seconds',
          quality: 'High Quality',
          qualityDesc: 'Get clean, scalable vector graphics',
          easy: 'Easy to Use',
          easyDesc: 'Simple drag and drop interface'
        }
      },
      errors: {
        conversion: {
          invalidFormat: "Invalid image format. Please try another file.",
          tooComplex: "Image too complex. Please try a simpler image.",
          generic: "Error converting image. Please try again."
        }
      },
      features: {
        advanced: {
          title: "Advanced Features",
          powerfulTools: {
            title: "Powerful Conversion Tools",
            items: [
              "Unlimited conversions",
              "Batch processing",
              "No registration required",
              "Privacy focused",
              "Customizable output settings",
              "Support for multiple image formats"
            ]
          },
          advancedOptions: {
            title: "Advanced Options",
            items: [
              "Color reduction options",
              "Path simplification controls",
              "Preview before download",
              "Cross-platform compatibility"
            ]
          }
        }
      },
      footer: {
        description: 'P2S Converter is an Online Image, SVG Conversion Tool',
        help: 'Help & Support',
        help_contact: 'Contact Us',
        help_privacy: 'Privacy Policy',
        connect: 'Connect With US',
        copyright: '© 2024 | P2S | All Right Reserved'
      },
      services: {
        conversion: 'Image to SVG Conversion',
        editing: 'SVG Editing Tools',
        batchProcessing: 'Batch Processing'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        convert: 'Convertir',
        contact: 'Contact',
        language: 'Langue',
        dark_mode: 'Mode Sombre',
        light_mode: 'Mode Lumière'
      },
      hero: {
        title: 'Transformez Vos Images en SVG',
        subtitle: 'Convertissez n\'importe quelle image en graphiques vectoriels avec notre outil facile à utiliser'
      },
      convert: {
        title: 'Convertir une Image en SVG',
        dropzone: 'Cliquez pour Sélectionner ou Glissez-Déposez votre Image Ici',
        processing: 'Conversion en cours...',
        download: 'Télécharger SVG',
        newFile: 'Télécharger un Nouveau Fichier'
      },
      error: {
        title: '404 - Page Non Trouvée',
        message: 'Désolé, la page que vous recherchez n\'existe pas.',
        return: 'Retour à l\'Accueil'
      },
      tool: {
        title: 'Éditer & Télécharger SVG',
        fillColor: 'Couleur de Remplissage:',
        filter: 'Filtre:',
        details: 'Détails:',
        strokeColor: 'Couleur de Contour:',
        blur: 'Flou:',
        reset: 'Réinitialiser les Modifications',
        noContent: 'Aucun contenu SVG disponible. Veuillez d\'abord convertir une image.',
        filterOptions: {
          none: 'None',
          internal: 'Internal',
          edge: 'Edge'
        },
        detailOptions: {
          strong: 'Strong',
          minimal: 'Minimal'
        }
      },
      contact: {
        title: 'Contactez-nous',
        subtitle: 'Des questions? Nous sommes là pour vous aider!',
        name: 'Nom Complet',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le Message',
        success: 'Message envoyé avec succès!',
        error: 'Échec de l\'envoi du message. Veuillez réessayer.',
        options: {
          general: 'Demande Générale',
          support: 'Support Technique',
          feedback: 'Commentaires'
        },
        errors: {
          nameRequired: 'Nom requis',
          nameLength: 'Le nom doit comporter au moins 2 caractères',
          emailRequired: 'Email requis',
          emailInvalid: 'Veuillez entrer une adresse email valide',
          messageRequired: 'Message requis',
          messageLength: 'Le message doit comporter au moins 10 caractères'
        }
      },
      privacy: {
        title: 'Politique de Confidentialité',
        sections: {
          processing: {
            title: '1. Traitement et Stockage des Images',
            content: 'P2S s\'engage à protéger votre confidentialité et la sécurité de vos données',
            items: {
              localProcessing: 'Toutes les conversions image-to-SVG sont effectuées localement dans votre navigateur',
              noUpload: 'Vos images ne sont jamais transférées sur un serveur',
              noStorage: 'Aucune donnée d\'image n\'est stockée ou mise en cache après la conversion',
              privateSvg: 'Les fichiers SVG convertis restent complètement privés'
            }
          },
          technical: {
            title: '2. Implémentation Technique',
            content: 'Notre processus de conversion utilise des technologies côté client',
            items: {
              potrace: 'Traitement d\'image basé sur le navigateur utilisant la bibliothèque Potrace',
              svgGeneration: 'Génération et modification de SVG dans votre navigateur',
              noApiCalls: 'Aucun appel API externe ou transmission de données'
            }
          },
          usage: {
            title: '3. Données d\'Utilisation du Site',
            content: 'Nous collectons un minimum de données pour améliorer l\'expérience utilisateur',
            items: {
              theme: 'Préférence de thème (mode clair/sombre)',
              language: 'Sélection de langue',
              cookies: 'Cookies essentiels pour la fonctionnalité du site',
              noTracking: 'Aucun suivi ou cookies d\'analyse'
            }
          },
          thirdParty: {
            title: '4. Bibliothèques Tierces',
            content: 'Nous utilisons les bibliothèques open-source suivantes :',
            items: {
              potrace: 'Potrace - pour le traçage d\'images',
              react: 'React - pour l\'interface utilisateur',
              compression: 'Browser Image Compression - pour l\'optimisation des images',
              local: 'Toutes les bibliothèques s\'exécutent localement dans votre navigateur'
            }
          },
          updates: {
            title: '5. Mises à Jour & Contact',
            content: 'Restez informé et contactez-nous :',
            items: {
              periodic: 'Cette politique de confidentialité peut être mise à jour périodiquement',
              lastUpdate: 'Dernière mise à jour : Avril 2024',
              contact: 'Pour toute question ou préoccupation, veuillez nous contacter',
              contactLink: 'nous contacter'
            }
          }
        }
      },
      info: {
        title_1: 'Transformez Vos Images en SVG',
        title: 'Qu\'est-ce que le SVG',
        originalLabel: 'PNG/JPG original',
        convertedLabel: 'SVG converti',
        description: 'SVG (Scalable Vector Graphics) est un format d\'image vectoriel basé sur XML pour les graphiques en deux dimensions. L\'avantage est que vous pouvez modifier la taille de l\'image sans perdre en qualité et en détails. Ce format vectoriel décrit les images sous forme de formes, de chemins, de texte et d\'effets de filtre. La mise à l\'échelle de l\'image vectorielle préserve les formes. Cela peut être rendu à n\'importe quelle résolution. SVG permet l\'interactivité et l\'animation. Les fichiers SVG peuvent être utilisés avec des styles CSS pour créer une nouvelle présentation dans votre document. Vous pouvez facilement modifier la largeur du trait SVG, changer la couleur, ajouter un contour, un effet de survol... Les éditeurs de texte peuvent ouvrir, modifier, créer des fichiers SVG car ce sont des fichiers XML. Il est plus courant d\'utiliser un logiciel de dessin pour générer ce type de fichier. Toutes les parties et sections des fichiers SVG sont capables d\'animation.',
        subtitle: 'Pourquoi convertir en SVG',
        whyConvert: 'Convertir des images au format SVG présente plusieurs avantages. Les fichiers SVG sont évolutifs et peuvent être redimensionnés sans perte de qualité. Ils sont légers et se chargent plus rapidement sur les sites web. Les images SVG sont également faciles à animer et peuvent être stylisées en utilisant CSS. En convertissant des images en SVG, vous pouvez créer des graphiques vectoriels qui paraissent nets sur n\'importe quelle taille d\'écran.',
        startNow: 'Commencez maintenant',
        betaDescription: 'Les outils de conversion sont encore en version bêta. Nous utilisons actuellement des bibliothèques JavaScript pures, et dans un avenir proche, nous mettrons en œuvre des API pour améliorer la qualité de la conversion des images, GIF et autres formats en SVG et ses modifications.',
        startConverting: 'Commencer la conversion',
        howToUse: 'Comment puis-je l\'utiliser ?',
        usesDescription: 'Les images SVG peuvent être utilisées de diverses manières, notamment :',
        usesList: [
          'Conception de sites web',
          'Conception de logos',
          'Conception d\'icônes',
          'Animation',
          'Infographies',
          'Médias imprimés'
        ],
        toolsList: [
          'Icomoon - Créer des fichiers de police personnalisés (.ttf)',
          'SVG Edit - Éditeur en ligne pour fichiers SVG',
          'Inkscape - Éditeur de graphiques vectoriels de bureau',
          'Adobe Illustrator - Édition vectorielle professionnelle'
        ],
        workflowsList: [
          'Convertir des images en SVG pour des graphiques web évolutifs',
          'Transformer SVG en STL pour l\'impression 3D',
          'Utiliser des bibliothèques JavaScript pour la manipulation et l\'animation SVG'
        ],
        implementationDescription: 'Ajoutez SVG à vos pages web en utilisant HTML :',
        workflowsTitle: 'Flux de travail courants :',
        services: 'Nos Services',
        features: {
          fast: 'Conversion rapide',
          fastDesc: 'Convertissez vos images au format SVG en quelques secondes',
          quality: 'Haute qualité',
          qualityDesc: 'Obtenez des graphiques vectoriels propres et évolutifs',
          easy: 'Facile à utiliser',
          easyDesc: 'Interface simple de glisser-déposer'
        },
        toolsTitle: 'Outils de Création',
        implementationTitle: 'Exemples d\'Implémentation'
      },
      errors: {
        conversion: {
          invalidFormat: "Format d'image invalide. Veuillez essayer un autre fichier.",
          tooComplex: "Image trop complexe. Veuillez essayer une image plus simple.",
          generic: "Erreur lors de la conversion de l'image. Veuillez réessayer."
        }
      },
      features: {
        advanced: {
          title: "Fonctionnalités Avancées",
          powerfulTools: {
            title: "Outils de Conversion Puissants",
            items: [
              "Conversiones illimitées",
              "Traitement par lots",
              "Aucune inscription requise",
              "Respect de la vie privée",
              "Paramètres de sortie personnalisables",
              "Prise en charge de plusieurs formats d'image"
            ]
          },
          advancedOptions: {
            title: "Options Avancées",
            items: [
              "Options de réduction des couleurs",
              "Contrôles de simplification des chemins",
              "Aperçu avant téléchargement",
              "Compatibilité multiplateforme"
            ]
          }
        }
      },
      footer: {
        description: 'P2S Converter est un Outil de Conversion d\'Images en SVG en Ligne',
        help: 'Aide & Support',
        help_contact: 'Nous contacter',
        help_privacy: 'Politique de confidentialité',
        connect: 'Connectez-Vous',
        copyright: '© 2024 | P2S | Tous Droits Réservés'
      },
      services: {
        conversion: 'Conversion d\'Image en SVG',
        editing: 'Outils d\'Édition SVG',
        batchProcessing: 'Traitement par Lots'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        convert: 'تحويل',
        contact: 'اتصل بنا',
        language: 'اللغة',
        dark_mode: 'الوضع المظلم',
        light_mode: 'الوضع الفاتح'
      },
      hero: {
        title: ' حول صورك إلى SVG',
        subtitle: 'قم بتحويل أي صورة إلى رسومات متجهة باستخدام أداة سهلة الاستخدام'
      },
      convert: {
        title: 'SVG تحويل الصورة إلى ',
        dropzone: 'انقر لتحديد أو اسحب وأفلت صورتك هنا',
        processing: 'جارٍ المعالجة...',
        download: 'SVG تنزيل',
        newFile: 'تحميل ملف جديد'
      },
      error: {
        title: '404 - الصفحة غير موجودة',
        message: 'عذرًا، الصفحة التي تبحث عنها غير موجودة.',
        return: 'العودة إلى الصفحة الرئيسية'
      },
      tool: {
        title: 'SVG تحرير وتنزيل',
        fillColor: 'لون التعبئة:',
        filter: 'الفلتر:',
        details: 'التفاصيل:',
        strokeColor: 'لون الحد:',
        blur: 'الضبابية:',
        reset: 'إعادة التعيين',
        noContent: 'لا يوجد محتوى SVG متاح. يرجى تحويل صورة أولاً.',
        filterOptions: {
          none: 'بدون',
          internal: 'داخلي',
          edge: 'الحافة'
        },
        detailOptions: {
          strong: 'قوي',
          minimal: 'حد أدنى'
        }
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'هل لديك أسئلة؟ نحن هنا لمساعدتك!',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        success: 'تم إرسال الرسالة بنجاح!',
        error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
        options: {
          general: 'استفسار عام',
          support: 'الدعم الفني',
          feedback: 'ملاحظات'
        },
        errors: {
          nameRequired: 'الاسم مطلوب',
          nameLength: 'يجب أن يكون الاسم على الأقل حرفين',
          emailRequired: 'البريد الإلكتروني مطلوب',
          emailInvalid: 'يرجى إدخال بريد إلكتروني صالح',
          messageRequired: 'الرسالة مطلوبة',
          messageLength: 'يجب أن تكون الرسالة على الأقل 10 أحرف'
        }
      },
      privacy: {
        title: 'سياسة الخصوصية',
        sections: {
          processing: {
            title: '1. معالجة الصور وتخزينها',
            content: 'P2S ملتزم بخصوصيتك وأمان بياناتك',
            items: {
              localProcessing: 'يتم إجراء جميع عمليات التحويل من صورة إلى SVG محليًا في متصفحك',
              noUpload: 'لا يتم تحميل صورك إلى أي خادم',
              noStorage: 'لا يتم تخزين أو حفظ أي بيانات للصور بعد التحويل',
              privateSvg: 'تبقى ملفات SVG المحولة خاصة تمامًا'
            }
          },
          technical: {
            title: '2. التنفيذ الفني',
            content: 'تستخدم عملية التحويل لدينا تقنيات من جانب العميل',
            items: {
              potrace: 'معالجة الصور في المتصفح باستخدام مكتبة Potrace',
              svgGeneration: 'في متصفحك SVG إنشاء وتعديل',
              noApiCalls: 'لا توجد استدعاءات API خارجية أو إرسال بيانات'
            }
          },
          usage: {
            title: '3. بيانات استخدام الموقع',
            content: 'نحن نجمع الحد الأدنى من البيانات لتحسين تجربة المستخدم',
            items: {
              theme: 'تفضيلات السمة (الوضع الفاتح/الداكن)',
              language: 'اختيار اللغة',
              cookies: 'ملفات تعريف الارتباط الأساسية لوظائف الموقع',
              noTracking: 'لا توجد ملفات تعريف ارتباط للتتبع أو التحليلات'
            }
          },
          thirdParty: {
            title: '4. مكتبات الطرف الثالث',
            content: 'نستخدم المكتبات مفتوحة المصدر التالية:',
            items: {
              potrace: 'Potrace - لتتبع الصور',
              react: 'React - لواجهة المستخدم',
              compression: 'ضغط صور المتصفح - لتحسين الصور',
              local: 'تعمل جميع المكتبات محليًا في متصفحك'
            }
          },
          updates: {
            title: '5. التحديثات والاتصال',
            content: 'ابق على اطلاع واتصل بنا:',
            items: {
              periodic: 'قد يتم تحديث سياسة الخصوصية هذه بشكل دوري',
              lastUpdate: 'آخر تحديث: أبريل 2024',
              contact: 'لأي أسئلة أو استفسارات، يرجى',
              contactLink: 'الاتصال بنا'
            }
          }
        }
      },
      info: {
        title_1: ' حول صورك إلى SVG',
        title: 'ما هو SVG',
        originalLabel: 'PNG/JPG الأصلي',
        convertedLabel: 'SVG المحول',
        description: 'SVG (الرسومات المتجهة القابلة للتطوير) هو تنسيق صور متجهة يعتمد على XML للرسومات ثنائية الأبعاد. الميزة هي أنه يمكنك تعديل حجم الصورة دون فقدان الجودة والتفاصيل. يصف هذا التنسيق المتجه الصور كأشكال ومسارات ونصوص وتأثيرات فلتر. تحجيم الصورة المتجهة يحافظ على الأشكال. يمكن عرضها بأي دقة. يسمح SVG بالتفاعل والرسوم المتحركة. يمكن استخدام ملفات SVG مع أنماط CSS لإنشاء عرض جديد في مستندك. يمكنك بسهولة تعديل عرض حد SVG وتغيير اللون وإضافة مخطط وتأثير تحويم... يمكن لمحرري النصوص فتح وتعديل وإنشاء ملفات SVG لأنها ملفات XML. من الشائع استخدام برامج الرسم لإنشاء هذا النوع من الملفات. جميع أجزاء وأقسام ملفات SVG قادرة على الرسوم المتحركة.',
        subtitle: 'لماذا التحويل إلى SVG',
        whyConvert: 'تحويل الصور إلى تنسيق SVG له عدة فوائد. ملفات SVG قابلة للتطوير ويمكن تغيير حجمها دون فقدان الجودة. وهي خفيفة الوزن وتحميل أسرع على مواقع الويب. كما أن صور SVG سهلة التحريك ويمكن تنسيقها باستخدام CSS. بتحويل الصور إلى SVG، يمكنك إنشاء رسومات متجهة تبدو حادة على أي حجم شاشة.',
        startNow: 'ابدأ الآن',
        betaDescription: 'أدوات التحويل لا تزال في نسخة تجريبية. نحن حاليًا نستخدم مكتبات JavaScript خالصة، وفي المستقبل القريب سننفذ واجهات برمجة التطبيقات (APIs) لتحسين جودة تحويل الصور وGIF والتنسيقات الأخرى إلى SVG وتعديلاته.',
        startConverting: 'ابدأ التحويل',
        howToUse: 'كيف يمكنني استخدامه؟',
        usesDescription: 'يمكن استخدام صور SVG بطرق مختلفة، بما في ذلك:',
        usesList: [
          'تصميم المواقع',
          'تصميم الشعارات',
          'تصميم الأيقونات',
          'الرسوم المتحركة',
          'الرسوم البيانية',
          'وسائل الإعلام المطبوعة'
        ],
        toolsTitle: 'أدوات الإنشاء',
        toolsList: [
          'Icomoon - إنشاء ملفات خطوط مخصصة (.ttf)',
          'SVG Edit - محرر SVG عبر الإنترنت',
          'Inkscape - محرر رسومات متجهة سطح المكتب',
          'Adobe Illustrator - تحرير متجهات احترافي'
        ],
        workflowsList: [
          ' تحويل الصور إلى SVG للرسومات القابلة للتطوير على الويب',
          'تحويل SVG إلى STL للطباعة ثلاثية الأبعاد',
          'استخدام مكتبات JavaScript لمعالجة وتحريك SVG'
        ],
        implementationDescription: 'أضف SVG إلى صفحات الويب الخاصة بك باستخدام HTML:',
        workflowsTitle: 'سير العمل الشائعة:',
        services: 'خدماتنا',
        features: {
          fast: 'تحويل سريع',
          fastDesc: 'SVG قم بتحويل صورك إلى تنسيق  في ثوانٍ',
          quality: 'جودة عالية',
          qualityDesc: 'احصل على رسومات متجهة نظيفة وقابلة للتطوير',
          easy: 'سهل الاستخدام',
          easyDesc: 'واجهة بسيطة للسحب والإفلات'
        },
        implementationTitle: 'أمثلة التطبيق'
      },
      errors: {
        conversion: {
          invalidFormat: "تنسيق الصورة غير صالح. يرجى تجربة ملف آخر.",
          tooComplex: "الصورة معقدة للغاية. يرجى تجربة صورة أبسط.",
          generic: "حدث خطأ أثناء تحويل الصورة. يرجى المحاولة مرة أخرى."
        }
      },
      features: {
        advanced: {
          title: "الميزات المتقدمة",
          powerfulTools: {
            title: "أدوات تحويل قوية",
            items: [
              "تحويلات غير محدودة",
              "معالجة الدُفعات",
              "لا يلزم التسجيل",
              "مراعاة الخصوصية",
              "إعدادات مخرجات قابلة للتخصيص",
              "دعم تنسيقات صور متعددة"
            ]
          },
          advancedOptions: {
            title: "خيارات متقدمة",
            items: [
              "خيارات تقليل الألوان",
              "ضوابط تبسيط المسار",
              "معاينة قبل التنزيل",
              "التوافق عبر الأنظمة"
            ]
          }
        }
      },
      footer: {
        description: 'P2S Converter هو أداة تحويل صور إلى SVG عبر الإنترنت',
        help: 'المساعدة والدعم',
        help_contact: 'اتصل بنا',
        help_privacy: 'سياسة الخصوصية',
        connect: 'تواصل معنا',
        copyright: '© 2024 | P2S | جميع الحقوق محفوظة'
      },
      services: {
        conversion: 'تحويل الصور إلى SVG',
        editing: 'أدوات تحرير SVG',
        batchProcessing: 'معالجة الدُفعات'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        convert: 'Convertir',
        contact: 'Contacto',
        language: 'Idioma',
        dark_mode: 'Modo Oscuro',
        light_mode: 'Modo Claro'
      },
      hero: {
        title: 'Transforma Tus Imágenes a SVG',
        subtitle: 'Convierte cualquier imagen en gráficos vectoriales con nuestra herramienta fácil de usar'
      },
      convert: {
        title: 'Convertir Imagen a SVG',
        dropzone: 'Haz clic para Seleccionar o Arrastra y Suelta tu Imagen Aquí',
        processing: 'Procesando...',
        download: 'Descargar SVG',
        newFile: 'Subir Nuevo Archivo'
      },
      error: {
        title: '404 - Página No Encontrada',
        message: 'Lo sentimos, la página que buscas no existe.',
        return: 'Volver al Inicio'
      },
      tool: {
        title: 'Editar & Descargar SVG',
        fillColor: 'Color de Relleno:',
        filter: 'Filtro:',
        details: 'Detalles:',
        strokeColor: 'Color del Trazo:',
        blur: 'Desenfoque:',
        reset: 'Reiniciar Modificaciones',
        noContent: 'No hay contenido SVG disponible. Por favor, convierte una imagen primero.',
        filterOptions: {
          none: 'Ninguno',
          internal: 'Interno',
          edge: 'Borde'
        },
        detailOptions: {
          strong: 'Fuerte',
          minimal: 'Mínimo'
        }
      },
      contact: {
        title: 'Contáctanos',
        subtitle: 'Tienes preguntas? ¡Estamos aquí para ayudarte!',
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        success: 'Mensaje enviado con éxito!',
        error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
        options: {
          general: 'Consulta General',
          support: 'Soporte Técnico',
          feedback: 'Comentarios'
        },
        errors: {
          nameRequired: 'Nombre requerido',
          nameLength: 'El nombre debe tener al menos 2 caracteres',
          emailRequired: 'Correo electrónico requerido',
          emailInvalid: 'Por favor ingresa un correo electrónico válido',
          messageRequired: 'Mensaje requerido',
          messageLength: 'El mensaje debe tener al menos 10 caracteres'
        }
      },
      privacy: {
        title: 'Política de Privacidad',
        sections: {
          processing: {
            title: '1. Procesamiento y Almacenamiento de Imágenes',
            content: 'P2S está comprometido con tu privacidad y seguridad de datos',
            items: {
              localProcessing: 'Todas las conversiones de imagen a SVG se realizan localmente en tu navegador',
              noUpload: 'Tus imágenes nunca se suben a ningún servidor',
              noStorage: 'No se almacena ni se guarda en caché ningún dato de imagen después de la conversión',
              privateSvg: 'Los archivos SVG convertidos permanecen completamente privados'
            }
          },
          technical: {
            title: '2. Implementación Técnica',
            content: 'Nuestro proceso de conversión utiliza tecnologías del lado del cliente',
            items: {
              potrace: 'Procesamiento de imágenes en el navegador usando la biblioteca Potrace',
              svgGeneration: 'Generación y modificación de SVG en tu navegador',
              noApiCalls: 'No hay llamadas API externas o transmisión de datos'
            }
          },
          usage: {
            title: '3. Datos de Uso del Sitio',
            content: 'Recopilamos datos mínimos para mejorar la experiencia del usuario',
            items: {
              theme: 'Preferencia de tema (modo claro/oscuro)',
              language: 'Selección de idioma',
              cookies: 'Cookies esenciales para la funcionalidad del sitio',
              noTracking: 'No hay cookies de seguimiento o análisis'
            }
          },
          thirdParty: {
            title: '4. Bibliotecas de Terceros',
            content: 'Utilizamos las siguientes bibliotecas de código abierto:',
            items: {
              potrace: 'Potrace - para el trazado de imágenes',
              react: 'React - para la interfaz de usuario',
              compression: 'Compresión de Imágenes en el Navegador - para la optimización de imágenes',
              local: 'Todas las bibliotecas se ejecutan localmente en tu navegador'
            }
          },
          updates: {
            title: '5. Actualizaciones & Contacto',
            content: 'Mantente informado y contáctanos:',
            items: {
              periodic: 'Esta política de privacidad puede actualizarse periódicamente',
              lastUpdate: 'Última actualización: Abril 2024',
              contact: 'Para preguntas o inquietudes, por favor',
              contactLink: 'contáctanos'
            }
          }
        }
      },
      info: {
        title_1: 'Transforma Tus Imágenes a SVG',
        title: 'Qué es SVG?',
        originalLabel: 'PNG/JPG Original',
        convertedLabel: 'SVG Convertido',
        description: 'SVG (Gráficos Vectoriales Escalables) es un formato de imagen vectorial basado en XML para gráficos bidimensionales. La ventaja es que puedes modificar el tamaño de la imagen sin perder calidad y detalles. Este formato vectorial describe imágenes como formas, rutas, texto y efectos de filtro. Escalar la imagen vectorial preserva las formas. Esto se puede renderizar a cualquier resolución. SVG permite interactividad y animación. Los archivos SVG se pueden usar con estilos CSS para crear nuevas presentaciones en tu documento. Puedes cambiar fácilmente el ancho del trazo SVG, cambiar el color, agregar un contorno, efecto de hover... Los editores de texto pueden abrir, editar y crear archivos SVG porque son archivos XML. Es más común usar software de dibujo para generar este tipo de archivo. Todas las partes y secciones de los archivos SVG son capaces de animación.',
        subtitle: 'Por qué Convertir a SVG?',
        whyConvert: 'Convertir imágenes al formato SVG tiene varios beneficios. Los archivos SVG son escalables y se pueden redimensionar sin perder calidad. Son livianos y se cargan más rápido en los sitios web. Las imágenes SVG también son fáciles de animar y se pueden estilizar usando CSS. Al convertir imágenes a SVG, puedes crear gráficos vectoriales que se ven nítidos en cualquier tamaño de pantalla.',
        startNow: 'Comienza Ahora',
        betaDescription: 'Las herramientas de conversión aún están en versión beta. Actualmente usamos bibliotecas de JavaScript puras, y en el futuro cercano implementaremos APIs para mejorar la calidad de la conversión de imágenes, GIF y otros formatos a SVG y sus modificaciones.',
        startConverting: 'Comenzar Conversión',
        howToUse: 'Cómo puedo usarlo?',
        usesDescription: 'Las imágenes SVG se pueden usar de diversas maneras, incluyendo:',
        usesList: [
          'Diseño de sitios web',
          'Diseño de logotipos',
          'Diseño de iconos',
          'Animación',
          'Infografías',
          'Medios impresos'
        ],
        toolsList: [
          'Icomoon - Crear archivos de fuentes personalizadas (.ttf)',
          'SVG Edit - Editor en línea para archivos SVG',
          'Inkscape - Editor de gráficos vectoriales de escritorio',
          'Adobe Illustrator - Edición vectorial profesional'
        ],
        workflowsList: [
          'Convertir imágenes a SVG para gráficos web escalables',
          'Transformar SVG a STL para impresión 3D',
          'Usar bibliotecas de JavaScript para manipulación y animación SVG'
        ],
        implementationDescription: 'Agrega SVG a tus páginas web usando HTML:',
        workflowsTitle: 'Flujos de trabajo comunes:',
        services: 'Nuestros Servicios',
        features: {
          fast: 'Conversión Rápida',
          fastDesc: 'Convierte tus imágenes a formato SVG en segundos',
          quality: 'Alta Calidad',
          qualityDesc: 'Obtén gráficos vectoriales limpios y escalables',
          easy: 'Fácil de Usar',
          easyDesc: 'Interfaz simple de arrastrar y soltar'
        },
        toolsTitle: 'Herramientas de Creación',
        implementationTitle: 'Ejemplos de Implementación'
      },
      errors: {
        conversion: {
          invalidFormat: "Formato de imagen no válido. Por favor, intenta con otro archivo.",
          tooComplex: "Imagen demasiado compleja. Por favor, intenta con una imagen más simple.",
          generic: "Error al convertir la imagen. Por favor, inténtalo de nuevo."
        }
      },
      features: {
        advanced: {
          title: "Funcionalidades Avanzadas",
          powerfulTools: {
            title: "Herramientas de Conversión Potentes",
            items: [
              "Conversiones ilimitadas",
              "Procesamiento por lotes",
              "No se requiere registro",
              "Respeto a la privacidad",
              "Configuraciones de salida personalizables",
              "Soporte para múltiples formatos de imagen"
            ]
          },
          advancedOptions: {
            title: "Opciones Avanzadas",
            items: [
              "Opciones de reducción de colores",
              "Controles de simplificación de rutas",
              "Vista previa antes de descargar",
              "Compatibilidad multiplataforma"
            ]
          }
        }
      },
      footer: {
        description: 'P2S Converter es una Herramienta de Conversión de Imágenes a SVG en Línea',
        help: 'Ayuda & Soporte',
        help_contact: 'Contáctanos',
        help_privacy: 'Política de Privacidad',
        connect: 'Conéctate',
        copyright: '© 2024 | P2S | Todos los Derechos Reservados'
      },
      services: {
        conversion: 'Conversión de Imágenes a SVG',
        editing: 'Herramientas de Edición SVG',
        batchProcessing: 'Procesamiento por Lotes'
      }
    }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie']
    }
  });

export default i18n;