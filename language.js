(function () {
  'use strict';

  var translations = {
    'Skip to Main Content': ['मुख्य सामग्री पर जाएँ', 'मुख्य मजकुराकडे जा'],
    Language: ['भाषा', 'भाषा'],
    'Choose language': ['भाषा चुनें', 'भाषा निवडा'],
    Menu: ['मेन्यू', 'मेनू'],
    'Open navigation menu': ['नेविगेशन मेन्यू खोलें', 'नेव्हिगेशन मेनू उघडा'],
    'Close navigation menu': ['नेविगेशन मेन्यू बंद करें', 'नेव्हिगेशन मेनू बंद करा'],
    'Accessibility tools': ['सुगम्यता उपकरण', 'सुलभता साधने'],
    'Decrease text size': ['अक्षरों का आकार घटाएँ', 'अक्षरांचा आकार कमी करा'],
    'Reset text size': ['अक्षरों का आकार सामान्य करें', 'अक्षरांचा आकार पूर्ववत करा'],
    'Increase text size': ['अक्षरों का आकार बढ़ाएँ', 'अक्षरांचा आकार वाढवा'],
    'High contrast': ['उच्च कंट्रास्ट', 'उच्च कॉन्ट्रास्ट'],
    'Standard contrast': ['सामान्य कंट्रास्ट', 'सामान्य कॉन्ट्रास्ट'],
    'SECURE CANDIDATE ACCESS': ['सुरक्षित उम्मीदवार प्रवेश', 'सुरक्षित उमेदवार प्रवेश'],
    Accessibility: ['सुगम्यता', 'सुलभता'],
    'Skills • Learning • Opportunity': ['कौशल • सीखना • अवसर', 'कौशल्य • शिक्षण • संधी'],
    Home: ['होम', 'मुख्यपृष्ठ'],
    Discover: ['जानें', 'शोधा'],
    Opportunities: ['अवसर', 'संधी'],
    'Skills Available': ['उपलब्ध कौशल', 'उपलब्ध कौशल्ये'],
    Ecosystem: ['पारिस्थितिकी तंत्र', 'परिसंस्था'],
    Support: ['सहायता', 'मदत'],
    'My Journey': ['मेरी यात्रा', 'माझा प्रवास'],
    Admin: ['व्यवस्थापक', 'प्रशासक'],
    'New learning pathways are now available': ['सीखने के नए मार्ग अब उपलब्ध हैं', 'शिकण्याचे नवीन मार्ग आता उपलब्ध आहेत'],
    'Explore courses designed around your interests': ['अपनी रुचियों के अनुसार बनाए गए पाठ्यक्रम देखें', 'तुमच्या आवडीनुसार तयार केलेले अभ्यासक्रम पाहा'],
    'Build skills. Earn certificates. Discover opportunities': ['कौशल विकसित करें। प्रमाणपत्र प्राप्त करें। अवसर खोजें।', 'कौशल्ये विकसित करा. प्रमाणपत्रे मिळवा. संधी शोधा.'],
    'New workshops and learning activities are being added regularly': ['नई कार्यशालाएँ और सीखने की गतिविधियाँ नियमित रूप से जोड़ी जा रही हैं', 'नवीन कार्यशाळा आणि शिक्षण उपक्रम नियमितपणे जोडले जात आहेत'],
    'Explore apprenticeships and career pathways': ['प्रशिक्षुता और करियर के मार्ग देखें', 'शिकाऊ उमेदवारी आणि करिअरचे मार्ग पाहा'],
    'Your learning journey starts here': ['आपकी सीखने की यात्रा यहाँ से शुरू होती है', 'तुमचा शिक्षण प्रवास इथून सुरू होतो'],
    'Learn at your pace. Build at your future': ['अपनी गति से सीखें। अपना भविष्य बनाएँ।', 'तुमच्या गतीने शिका. तुमचे भविष्य घडवा.'],
    'A Child-Centred Skills & Opportunity Initiative': ['बच्चों-केंद्रित कौशल और अवसर पहल', 'बाल-केंद्रित कौशल्य आणि संधी उपक्रम'],
    'Discover Your Skills': ['अपने कौशल पहचानें', 'तुमची कौशल्ये ओळखा'],
    'Build Your Future': ['अपना भविष्य बनाएँ', 'तुमचे भविष्य घडवा'],
    'PHOENIX is a learning and opportunity platform where you can discover your interests, build practical skills, earn recognised certificates and explore future career pathways. Learn • Build • Connect • Grow': ['PHOENIX सीखने और अवसरों का एक मंच है, जहाँ आप अपनी रुचियाँ पहचान सकते हैं, व्यावहारिक कौशल विकसित कर सकते हैं, मान्य प्रमाणपत्र प्राप्त कर सकते हैं और भविष्य के करियर विकल्प देख सकते हैं। सीखें • विकसित करें • जुड़ें • आगे बढ़ें', 'PHOENIX हे शिक्षण आणि संधींचे व्यासपीठ आहे. येथे तुम्ही तुमच्या आवडी ओळखू शकता, व्यावहारिक कौशल्ये विकसित करू शकता, मान्यताप्राप्त प्रमाणपत्रे मिळवू शकता आणि भविष्यातील करिअरचे मार्ग पाहू शकता. शिका • घडवा • जोडा • प्रगती करा'],
    'Explore Skills': ['कौशल देखें', 'कौशल्ये पाहा'],
    'Discover Your Path': ['अपना मार्ग खोजें', 'तुमचा मार्ग शोधा'],
    'Welcome Back': ['वापसी पर स्वागत है', 'पुन्हा स्वागत आहे'],
    'Continue your learning journey': ['अपनी सीखने की यात्रा जारी रखें', 'तुमचा शिक्षण प्रवास सुरू ठेवा'],
    'Username/ Learner ID': ['उपयोगकर्ता नाम / शिक्षार्थी आईडी', 'वापरकर्ता नाव / विद्यार्थी आयडी'],
    Password: ['पासवर्ड', 'पासवर्ड'],
    Captcha: ['कैप्चा', 'कॅप्चा'],
    Login: ['लॉग इन करें', 'लॉग इन करा'],
    'Forgot Password?': ['पासवर्ड भूल गए?', 'पासवर्ड विसरलात?'],
    'Help / Guidelines': ['सहायता / दिशानिर्देश', 'मदत / मार्गदर्शक सूचना'],
    'For the demonstration, use the credentials supplied with the prototype.': ['प्रदर्शन के लिए, प्रोटोटाइप के साथ दिए गए लॉगिन विवरण का उपयोग करें।', 'प्रात्यक्षिकासाठी, नमुन्यासोबत दिलेली लॉगिन माहिती वापरा.'],
    'ONLINE SERVICES': ['ऑनलाइन सेवाएँ', 'ऑनलाइन सेवा'],
    'Access Portal Services': ['पोर्टल सेवाओं का उपयोग करें', 'पोर्टल सेवांचा वापर करा'],
    'Candidate Profile': ['उम्मीदवार प्रोफ़ाइल', 'उमेदवार प्रोफाइल'],
    'View skills, qualifications, certificates and employability status.': ['कौशल, योग्यताएँ, प्रमाणपत्र और रोजगार-योग्यता की स्थिति देखें।', 'कौशल्ये, पात्रता, प्रमाणपत्रे आणि रोजगारक्षमतेची स्थिती पाहा.'],
    'Open Participant Portal →': ['प्रतिभागी पोर्टल खोलें →', 'सहभागी पोर्टल उघडा →'],
    'Skill Development': ['कौशल विकास', 'कौशल्य विकास'],
    'Explore vocational courses and monitor training progress.': ['व्यावसायिक पाठ्यक्रम देखें और प्रशिक्षण की प्रगति पर नज़र रखें।', 'व्यावसायिक अभ्यासक्रम पाहा आणि प्रशिक्षणाच्या प्रगतीचा मागोवा घ्या.'],
    'Explore Courses →': ['पाठ्यक्रम देखें →', 'अभ्यासक्रम पाहा →'],
    'Stakeholder Portal': ['हितधारक पोर्टल', 'हितधारक पोर्टल'],
    'Authorized stakeholders can access sector and placement information.': ['अधिकृत हितधारक क्षेत्र और प्लेसमेंट की जानकारी देख सकते हैं।', 'अधिकृत हितधारक क्षेत्र आणि नियुक्तीची माहिती पाहू शकतात.'],
    'Stakeholder Login →': ['हितधारक लॉग इन →', 'हितधारक लॉग इन →'],
    'ABOUT PHOENIX': ['PHOENIX के बारे में', 'PHOENIX बद्दल'],
    'A Platform for Learning, Growth & Opportunity': ['सीखने, विकास और अवसरों का मंच', 'शिक्षण, विकास आणि संधींचे व्यासपीठ'],
    'is a platform designed to help young learners discover their interests, develop practical skills, earn recognised certifications and explore meaningful opportunities for their future.': ['युवा शिक्षार्थियों को अपनी रुचियाँ पहचानने, व्यावहारिक कौशल विकसित करने, मान्य प्रमाणपत्र प्राप्त करने और अपने भविष्य के लिए उपयोगी अवसर खोजने में मदद करने के लिए बनाया गया एक मंच है।', 'तरुण विद्यार्थ्यांना त्यांच्या आवडी ओळखण्यास, व्यावहारिक कौशल्ये विकसित करण्यास, मान्यताप्राप्त प्रमाणपत्रे मिळवण्यास आणि भविष्यासाठी उपयुक्त संधी शोधण्यास मदत करणारे व्यासपीठ आहे.'],
    'We believe that every young person has the potential to learn, grow and build a meaningful future when provided with the right opportunities, guidance and support. PHOENIX brings these elements together through a structured journey that connects learning with skills, skills with opportunities, and opportunities with sustainable growth.': ['हम मानते हैं कि सही अवसर, मार्गदर्शन और सहायता मिलने पर हर युवा सीख सकता है, आगे बढ़ सकता है और एक सार्थक भविष्य बना सकता है। PHOENIX इन तत्वों को एक व्यवस्थित यात्रा में जोड़ता है—सीखने को कौशल से, कौशल को अवसरों से और अवसरों को सतत विकास से।', 'योग्य संधी, मार्गदर्शन आणि मदत मिळाल्यास प्रत्येक तरुण शिकू शकतो, प्रगती करू शकतो आणि अर्थपूर्ण भविष्य घडवू शकतो, असा आमचा विश्वास आहे. PHOENIX या घटकांना एका संरचित प्रवासात जोडते—शिक्षणाला कौशल्यांशी, कौशल्यांना संधींशी आणि संधींना शाश्वत विकासाशी.'],
    'Child-Centred Legal Support': ['बाल-केंद्रित कानूनी सहायता', 'बाल-केंद्रित कायदेशीर मदत'],
    'Individual Employability Profile': ['व्यक्तिगत रोजगार-योग्यता प्रोफ़ाइल', 'वैयक्तिक रोजगारक्षमता प्रोफाइल'],
    'Skill Development & Certification': ['कौशल विकास और प्रमाणन', 'कौशल्य विकास आणि प्रमाणन'],
    'Responsible Employment Linkage': ['जिम्मेदार रोजगार संपर्क', 'जबाबदार रोजगार जोडणी'],
    'YOUR JOURNEY. YOUR SKILLS. YOUR FUTURE.': ['आपकी यात्रा। आपके कौशल। आपका भविष्य।', 'तुमचा प्रवास. तुमची कौशल्ये. तुमचे भविष्य.'],
    Discover: ['जानें', 'शोधा'],
    'Discover your strengths. Find your direction.': ['अपनी क्षमताएँ पहचानें। अपनी दिशा खोजें।', 'तुमची ताकद ओळखा. तुमची दिशा शोधा.'],
    'Explore your interests, abilities and areas of potential through guided assessments and personalised learning pathways.': ['मार्गदर्शित आकलन और व्यक्तिगत सीखने के रास्तों से अपनी रुचियों, क्षमताओं और संभावनाओं को जानें।', 'मार्गदर्शित मूल्यमापन आणि वैयक्तिक शिक्षण मार्गांद्वारे तुमच्या आवडी, क्षमता आणि शक्यता जाणून घ्या.'],
    Build: ['विकसित करें', 'घडवा'],
    'Learn. Practise. Grow.': ['सीखें। अभ्यास करें। आगे बढ़ें।', 'शिका. सराव करा. प्रगती करा.'],
    'Develop practical and future-ready skills through courses, workshops and learning programmes designed around your interests and aspirations. Build knowledge, confidence and recognised skills through certification opportunities.': ['अपनी रुचियों और आकांक्षाओं के अनुरूप पाठ्यक्रमों, कार्यशालाओं और सीखने के कार्यक्रमों से व्यावहारिक और भविष्य-उपयोगी कौशल विकसित करें। प्रमाणन के अवसरों से ज्ञान, आत्मविश्वास और मान्य कौशल बढ़ाएँ।', 'तुमच्या आवडी आणि आकांक्षांनुसार तयार केलेले अभ्यासक्रम, कार्यशाळा आणि शिक्षण कार्यक्रम यांद्वारे व्यावहारिक व भविष्यासाठी उपयुक्त कौशल्ये विकसित करा. प्रमाणनाच्या संधींमधून ज्ञान, आत्मविश्वास आणि मान्यताप्राप्त कौशल्ये मिळवा.'],
    Connect: ['जुड़ें', 'जोडा'],
    'Turn your skills into opportunities.': ['अपने कौशल को अवसरों में बदलें।', 'तुमच्या कौशल्यांचे संधींमध्ये रूपांतर करा.'],
    'Explore pathways that connect your skills, interests and certifications with relevant training providers, institutions, mentors and career opportunities.': ['ऐसे रास्ते खोजें जो आपके कौशल, रुचियों और प्रमाणपत्रों को उपयुक्त प्रशिक्षण प्रदाताओं, संस्थानों, मार्गदर्शकों और करियर अवसरों से जोड़ें।', 'तुमची कौशल्ये, आवडी आणि प्रमाणपत्रे यांना योग्य प्रशिक्षण संस्था, मार्गदर्शक आणि करिअरच्या संधींशी जोडणारे मार्ग शोधा.'],
    Sustain: ['निरंतर आगे बढ़ें', 'सातत्य ठेवा'],
    'Keep learning. Keep growing.': ['सीखते रहें। आगे बढ़ते रहें।', 'शिकत राहा. प्रगती करत राहा.'],
    'Continue your journey with access to guidance, support and opportunities that help transform learning and skills into sustainable personal and professional growth.': ['मार्गदर्शन, सहायता और अवसरों के साथ अपनी यात्रा जारी रखें, जो सीखने और कौशल को निरंतर व्यक्तिगत और व्यावसायिक विकास में बदलने में मदद करें।', 'मार्गदर्शन, मदत आणि संधींच्या साथीने प्रवास सुरू ठेवा. यामुळे शिक्षण आणि कौशल्यांचे शाश्वत वैयक्तिक व व्यावसायिक विकासात रूपांतर होण्यास मदत होईल.'],
    'Institutional Framework': ['संस्थागत ढाँचा', 'संस्थात्मक चौकट'],
    'Child-friendly legal services, legal aid, counselling, representation and coordination through State/District Legal Services Institutions.': ['राज्य/जिला विधिक सेवा संस्थानों के माध्यम से बच्चों के अनुकूल कानूनी सेवाएँ, कानूनी सहायता, परामर्श, प्रतिनिधित्व और समन्वय।', 'राज्य/जिल्हा विधी सेवा संस्थांमार्फत बालस्नेही कायदेशीर सेवा, कायदेशीर मदत, समुपदेशन, प्रतिनिधित्व आणि समन्वय.'],
    'Protection and promotion of child rights, monitoring of child-rights safeguards and matters concerning children in conflict with law.': ['बाल अधिकारों का संरक्षण और संवर्धन, बाल-अधिकार सुरक्षा उपायों की निगरानी और कानून से संघर्षरत बच्चों से जुड़े विषय।', 'बालहक्कांचे संरक्षण व संवर्धन, बालहक्कविषयक सुरक्षा उपायांचे निरीक्षण आणि कायद्याशी संघर्ष झालेल्या मुलांशी संबंधित बाबी.'],
    'This prototype is a proposed coordination model; it does not represent an existing government portal or imply that NALSA and NCPCR jointly administer this software.': ['यह प्रोटोटाइप एक प्रस्तावित समन्वय मॉडल है। यह किसी मौजूदा सरकारी पोर्टल का प्रतिनिधित्व नहीं करता और न ही यह दर्शाता है कि NALSA और NCPCR संयुक्त रूप से इस सॉफ़्टवेयर का संचालन करते हैं।', 'हा नमुना एक प्रस्तावित समन्वय आराखडा आहे. तो कोणत्याही विद्यमान सरकारी पोर्टलचे प्रतिनिधित्व करत नाही किंवा NALSA आणि NCPCR हे सॉफ्टवेअर संयुक्तपणे चालवतात असा अर्थ होत नाही.'],
    'NALSA Official Website ↗': ['NALSA की आधिकारिक वेबसाइट ↗', 'NALSA ची अधिकृत वेबसाइट ↗'],
    'NCPCR Official Website ↗': ['NCPCR की आधिकारिक वेबसाइट ↗', 'NCPCR ची अधिकृत वेबसाइट ↗'],
    'SKILLS AVAILABLE': ['उपलब्ध कौशल', 'उपलब्ध कौशल्ये'],
    'Explore job-ready skill pathways': ['रोजगार के लिए तैयार कौशल मार्ग देखें', 'रोजगारासाठी उपयुक्त कौशल्य मार्ग पाहा'],
    'Hover or focus on a card to view the certificate options and potential livelihood pathway. Courses should be selected only after individual assessment, age-suitability review and safeguarding checks.': ['प्रमाणपत्र विकल्प और आजीविका के संभावित मार्ग देखने के लिए कार्ड पर माउस ले जाएँ या उसे फ़ोकस करें। पाठ्यक्रम का चयन व्यक्तिगत आकलन, आयु-उपयुक्तता की समीक्षा और सुरक्षा जाँच के बाद ही किया जाना चाहिए।', 'प्रमाणपत्राचे पर्याय आणि संभाव्य उपजीविकेचे मार्ग पाहण्यासाठी कार्डवर माउस न्या किंवा फोकस करा. वैयक्तिक मूल्यमापन, वयानुसार योग्यतेचा आढावा आणि संरक्षणविषयक तपासणीनंतरच अभ्यासक्रम निवडावेत.'],
    'HOVER FOR DETAILS →': ['विवरण के लिए देखें →', 'तपशील पाहण्यासाठी येथे जा →'],
    'Certificate courses:': ['प्रमाणपत्र पाठ्यक्रम:', 'प्रमाणपत्र अभ्यासक्रम:'],
    'Possible courses:': ['संभावित पाठ्यक्रम:', 'संभाव्य अभ्यासक्रम:'],
    'Possible certificates:': ['संभावित प्रमाणपत्र:', 'संभाव्य प्रमाणपत्रे:'],
    'Possible training:': ['संभावित प्रशिक्षण:', 'संभाव्य प्रशिक्षण:'],
    'Placement safeguard:': ['प्लेसमेंट सुरक्षा:', 'नियुक्तीविषयक सुरक्षा:'],
    'specific roles, working conditions and work placement must be screened for age, safety, rehabilitation needs and applicable law before referral. This portal presents potential pathways, not automatic eligibility.': ['रेफ़रल से पहले विशिष्ट भूमिकाओं, कार्य स्थितियों और प्लेसमेंट की आयु, सुरक्षा, पुनर्वास आवश्यकताओं और लागू कानून के अनुसार जाँच आवश्यक है। यह पोर्टल संभावित मार्ग दिखाता है, स्वतः पात्रता नहीं।', 'शिफारस करण्यापूर्वी विशिष्ट भूमिका, कामाच्या अटी आणि नियुक्ती यांची वय, सुरक्षितता, पुनर्वसनाच्या गरजा व लागू कायद्यानुसार तपासणी आवश्यक आहे. हे पोर्टल संभाव्य मार्ग दाखवते; आपोआप पात्रता देत नाही.'],
    'STAKEHOLDER ECOSYSTEM': ['हितधारक परिसंस्था', 'हितधारक परिसंस्था'],
    'Hypothetical Skills & Employment Ecosystem': ['कौशल और रोजगार की काल्पनिक परिसंस्था', 'कौशल्य आणि रोजगाराची काल्पनिक परिसंस्था'],
    'These are fictional companies created only for the PHOENIX demonstration. They are not real organisations and do not represent existing partnerships or recruitment arrangements.': ['ये कंपनियाँ केवल PHOENIX प्रदर्शन के लिए बनाई गई काल्पनिक संस्थाएँ हैं। ये वास्तविक संगठन नहीं हैं और किसी मौजूदा साझेदारी या भर्ती व्यवस्था का प्रतिनिधित्व नहीं करतीं।', 'या कंपन्या केवळ PHOENIX प्रात्यक्षिकासाठी तयार केलेल्या काल्पनिक संस्था आहेत. त्या वास्तविक संस्था नाहीत आणि कोणतीही विद्यमान भागीदारी किंवा भरती व्यवस्था दर्शवत नाहीत.'],
    'Customer service, CRM and business-process support pathways.': ['ग्राहक सेवा, CRM और व्यावसायिक प्रक्रिया सहायता के मार्ग।', 'ग्राहक सेवा, CRM आणि व्यवसाय प्रक्रिया सहाय्याचे मार्ग.'],
    'Data handling, IT helpdesk and digital-operations pathways.': ['डेटा प्रबंधन, IT हेल्पडेस्क और डिजिटल संचालन के मार्ग।', 'डेटा हाताळणी, IT हेल्पडेस्क आणि डिजिटल कामकाजाचे मार्ग.'],
    'Customer onboarding, KYC documentation and financial-operations support.': ['ग्राहक ऑनबोर्डिंग, KYC दस्तावेज़ीकरण और वित्तीय संचालन सहायता।', 'ग्राहक नोंदणी, KYC कागदपत्रे आणि आर्थिक कामकाजासाठी सहाय्य.'],
    'Billing, bookkeeping, GST and accounts-support pathways.': ['बिलिंग, बहीखाता, GST और लेखा सहायता के मार्ग।', 'बिलिंग, लेखा नोंदी, GST आणि खाते सहाय्याचे मार्ग.'],
    'Retail, e-commerce, sales-support and customer-service pathways.': ['खुदरा, ई-कॉमर्स, बिक्री सहायता और ग्राहक सेवा के मार्ग।', 'किरकोळ विक्री, ई-कॉमर्स, विक्री सहाय्य आणि ग्राहक सेवेचे मार्ग.'],
    'Reception, records, documentation and administrative-support pathways.': ['रिसेप्शन, अभिलेख, दस्तावेज़ीकरण और प्रशासनिक सहायता के मार्ग।', 'स्वागतकक्ष, नोंदी, कागदपत्रे आणि प्रशासकीय सहाय्याचे मार्ग.'],
    'Voice, non-voice, email and chat-based customer-support pathways.': ['वॉइस, नॉन-वॉइस, ईमेल और चैट-आधारित ग्राहक सहायता के मार्ग।', 'व्हॉइस, नॉन-व्हॉइस, ईमेल आणि चॅटद्वारे ग्राहक सहाय्याचे मार्ग.'],
    'Order processing, inventory, catalogue and e-commerce operations.': ['ऑर्डर प्रोसेसिंग, इन्वेंटरी, कैटलॉग और ई-कॉमर्स संचालन।', 'ऑर्डर प्रक्रिया, साठा, सूची आणि ई-कॉमर्स कामकाज.'],
    'Data management, MIS, reporting and back-office operations.': ['डेटा प्रबंधन, MIS, रिपोर्टिंग और बैक-ऑफिस संचालन।', 'डेटा व्यवस्थापन, MIS, अहवाल आणि बॅक-ऑफिस कामकाज.'],
    'Office administration, helpdesk and service-coordination pathways.': ['कार्यालय प्रशासन, हेल्पडेस्क और सेवा समन्वय के मार्ग।', 'कार्यालयीन प्रशासन, हेल्पडेस्क आणि सेवा समन्वयाचे मार्ग.'],
    'Responsible referral protocol:': ['जिम्मेदार रेफ़रल प्रक्रिया:', 'जबाबदार शिफारस प्रक्रिया:'],
    'NALSA, NCPCR and the relevant DLSA / institutional authority would remain central to lawful, child-sensitive assessment and support. No candidate information should be shared with an employer without authority, consent where appropriate, screening and a documented referral process.': ['NALSA, NCPCR और संबंधित DLSA/संस्थागत प्राधिकरण कानूनसम्मत, बाल-संवेदनशील आकलन और सहायता में केंद्रीय भूमिका निभाएँगे। प्राधिकरण, जहाँ आवश्यक हो सहमति, जाँच और दस्तावेज़ीकृत रेफ़रल प्रक्रिया के बिना उम्मीदवार की जानकारी किसी नियोक्ता के साथ साझा नहीं की जानी चाहिए।', 'NALSA, NCPCR आणि संबंधित DLSA/संस्थात्मक प्राधिकरण कायदेशीर, बाल-संवेदनशील मूल्यमापन व सहाय्यामध्ये महत्त्वाची भूमिका बजावतील. प्राधिकरण, आवश्यकतेनुसार संमती, तपासणी आणि दस्तऐवजीकृत शिफारस प्रक्रियेशिवाय उमेदवाराची माहिती नियोक्त्याशी शेअर करू नये.'],
    'Juvenile Skill & Employment Linkage Portal': ['किशोर कौशल एवं रोजगार संपर्क पोर्टल', 'किशोर कौशल्य व रोजगार जोडणी पोर्टल'],
    'Demonstration interface for a lawful, child-centred rehabilitation and employability pathway': ['कानूनी, बाल-केंद्रित पुनर्वास और रोजगार-योग्यता मार्ग का प्रदर्शन इंटरफ़ेस', 'कायदेशीर, बाल-केंद्रित पुनर्वसन आणि रोजगारक्षमता मार्गाचे प्रात्यक्षिक इंटरफेस'],
    '• Demonstration interface for a lawful, child-centred rehabilitation and employability pathway • NALSA · NCPCR · DLSA': ['• कानूनी, बाल-केंद्रित पुनर्वास और रोजगार-योग्यता मार्ग का प्रदर्शन इंटरफ़ेस • NALSA · NCPCR · DLSA', '• कायदेशीर, बाल-केंद्रित पुनर्वसन आणि रोजगारक्षमता मार्गाचे प्रात्यक्षिक इंटरफेस • NALSA · NCPCR · DLSA'],
    'Candidate referrals remain subject to individual assessment, age and legal eligibility, safeguarding, role suitability, institutional approval and a documented referral process. The hypothetical organisations shown here are illustrative only.': ['उम्मीदवारों का रेफ़रल व्यक्तिगत आकलन, आयु और कानूनी पात्रता, सुरक्षा, भूमिका की उपयुक्तता, संस्थागत अनुमोदन और दस्तावेज़ीकृत रेफ़रल प्रक्रिया के अधीन है। यहाँ दिखाई गई काल्पनिक संस्थाएँ केवल उदाहरण हैं।', 'उमेदवारांच्या शिफारसी वैयक्तिक मूल्यमापन, वय व कायदेशीर पात्रता, संरक्षण, भूमिकेची योग्यता, संस्थात्मक मान्यता आणि दस्तऐवजीकृत शिफारस प्रक्रियेच्या अधीन आहेत. येथील काल्पनिक संस्था केवळ उदाहरणार्थ आहेत.'],
    'CONTACT': ['संपर्क', 'संपर्क'],
    'Connect With the Portal': ['पोर्टल से जुड़ें', 'पोर्टलशी संपर्क साधा'],
    'Support Desk': ['सहायता केंद्र', 'मदत केंद्र'],
    'Reach out for candidate support, training coordination, or institutional queries.': ['उम्मीदवार सहायता, प्रशिक्षण समन्वय या संस्थागत प्रश्नों के लिए संपर्क करें।', 'उमेदवार सहाय्य, प्रशिक्षण समन्वय किंवा संस्थात्मक प्रश्नांसाठी संपर्क साधा.'],
    'Email: support@juvenileskillportal.in': ['ईमेल: support@juvenileskillportal.in', 'ईमेल: support@juvenileskillportal.in'],
    'Office: District Rehabilitation Support Unit': ['कार्यालय: जिला पुनर्वास सहायता इकाई', 'कार्यालय: जिल्हा पुनर्वसन सहाय्य कक्ष'],
    'Hours: Mon - Sat, 9:00 AM - 6:00 PM': ['समय: सोम–शनि, सुबह 9:00 – शाम 6:00 बजे', 'वेळ: सोम–शनि, सकाळी 9:00 – संध्याकाळी 6:00'],
    'Send a Message': ['संदेश भेजें', 'संदेश पाठवा'],
    'Full Name': ['पूरा नाम', 'पूर्ण नाव'],
    Email: ['ईमेल', 'ईमेल'],
    Phone: ['फ़ोन', 'फोन'],
    Message: ['संदेश', 'संदेश'],
    'Send Enquiry': ['पूछताछ भेजें', 'चौकशी पाठवा'],
    About: ['परिचय', 'माहिती'],
    Courses: ['पाठ्यक्रम', 'अभ्यासक्रम'],
    Career: ['करियर', 'करिअर'],
    'Open Participant Portal →': ['प्रतिभागी पोर्टल खोलें →', 'सहभागी पोर्टल उघडा →'],
    'Quick Links': ['त्वरित लिंक', 'जलद दुवे'],
    Stakeholders: ['हितधारक', 'हितधारक'],
    Contact: ['संपर्क', 'संपर्क'],
    '© 2026 Juvenile Skill & Employment Linkage Portal': ['© 2026 किशोर कौशल एवं रोजगार संपर्क पोर्टल', '© 2026 किशोर कौशल्य व रोजगार जोडणी पोर्टल'],
    'Designed for rehabilitation, legal support and vocational development': ['पुनर्वास, कानूनी सहायता और व्यावसायिक विकास के लिए निर्मित', 'पुनर्वसन, कायदेशीर मदत आणि व्यावसायिक विकासासाठी तयार'],
    'Enter username': ['उपयोगकर्ता नाम दर्ज करें', 'वापरकर्ता नाव टाका'],
    'Enter email': ['ईमेल दर्ज करें', 'ईमेल टाका'],
    'Enter phone number': ['फ़ोन नंबर दर्ज करें', 'फोन क्रमांक टाका'],
    'How can we help?': ['हम आपकी कैसे सहायता कर सकते हैं?', 'आम्ही तुम्हाला कशी मदत करू शकतो?'],
    'Enter captcha': ['कैप्चा दर्ज करें', 'कॅप्चा टाका'],
    'Captcha does not match. Please try again.': ['कैप्चा मेल नहीं खाता। कृपया फिर से प्रयास करें।', 'कॅप्चा जुळत नाही. कृपया पुन्हा प्रयत्न करा.'],
    'Invalid participant credentials.': ['प्रतिभागी लॉगिन विवरण अमान्य हैं।', 'सहभागी लॉगिन माहिती अवैध आहे.'],
    'Enquiry sent! You will receive a call from our support team soon. This is a demonstration form; no enquiry was actually transmitted.': ['पूछताछ भेज दी गई! हमारी सहायता टीम जल्द ही आपको कॉल करेगी। यह एक प्रदर्शन फ़ॉर्म है; आपकी पूछताछ वास्तव में भेजी नहीं गई है।', 'चौकशी पाठवली! आमची मदत टीम लवकरच तुम्हाला फोन करेल. हा प्रात्यक्षिक फॉर्म आहे; तुमची चौकशी प्रत्यक्षात पाठवली गेलेली नाही.'],
    'IT & Digital Services': ['आईटी और डिजिटल सेवाएँ', 'आयटी आणि डिजिटल सेवा'],
    'Digital foundations for service-sector employment.': ['सेवा क्षेत्र में रोजगार के लिए डिजिटल बुनियादी कौशल।', 'सेवा क्षेत्रातील रोजगारासाठी डिजिटल मूलभूत कौशल्ये.'],
    'Retail Services': ['खुदरा सेवाएँ', 'किरकोळ सेवा'],
    'Customer-facing operations for organised retail and MSMEs.': ['संगठित खुदरा और MSME के लिए ग्राहक-संबंधी कार्य।', 'संघटित किरकोळ विक्री आणि MSME साठी ग्राहकाभिमुख कामकाज.'],
    'Hospitality & Tourism': ['आतिथ्य और पर्यटन', 'आतिथ्य आणि पर्यटन'],
    'Guest services and front-office readiness.': ['अतिथि सेवा और फ्रंट-ऑफिस की तैयारी।', 'अतिथी सेवा आणि फ्रंट-ऑफिसची तयारी.'],
    'Beauty & Wellness': ['सौंदर्य और स्वास्थ्य', 'सौंदर्य आणि आरोग्य'],
    'Employability and self-employment focused personal-care skills.': ['रोजगार और स्वरोजगार पर केंद्रित व्यक्तिगत देखभाल कौशल।', 'रोजगार आणि स्वयंरोजगारासाठी वैयक्तिक निगा कौशल्ये.'],
    'Office & Administrative Services': ['कार्यालय और प्रशासनिक सेवाएँ', 'कार्यालयीन आणि प्रशासकीय सेवा'],
    'Practical pathways into organised office support roles.': ['संगठित कार्यालय सहायता भूमिकाओं के व्यावहारिक मार्ग।', 'संघटित कार्यालयीन सहाय्यक भूमिकांचे व्यावहारिक मार्ग.'],
    'Repair & Maintenance Services': ['मरम्मत और रखरखाव सेवाएँ', 'दुरुस्ती आणि देखभाल सेवा'],
    'Entry-level technical skills with safety screening.': ['सुरक्षा जाँच के साथ शुरुआती तकनीकी कौशल।', 'सुरक्षा तपासणीसह प्राथमिक तांत्रिक कौशल्ये.'],
    'Logistics & Delivery Support': ['लॉजिस्टिक्स और डिलीवरी सहायता', 'लॉजिस्टिक्स आणि वितरण सहाय्य'],
    'Inventory, warehouse and e-commerce support pathways.': ['इन्वेंटरी, गोदाम और ई-कॉमर्स सहायता के मार्ग।', 'साठा, गोदाम आणि ई-कॉमर्स सहाय्याचे मार्ग.'],
    'Customer Service & BPO Operations': ['ग्राहक सेवा और BPO संचालन', 'ग्राहक सेवा आणि BPO कामकाज'],
    'Job-ready communication and customer-support skills for formal service roles.': ['औपचारिक सेवा भूमिकाओं के लिए रोजगार-उपयोगी संवाद और ग्राहक सहायता कौशल।', 'औपचारिक सेवा भूमिकांसाठी रोजगाराभिमुख संवाद आणि ग्राहक सहाय्य कौशल्ये.'],
    'Banking & Financial Services Operations': ['बैंकिंग और वित्तीय सेवा संचालन', 'बँकिंग आणि आर्थिक सेवा कामकाज'],
    'Foundational banking and financial-operations skills for entry-level support roles.': ['शुरुआती सहायता भूमिकाओं के लिए बैंकिंग और वित्तीय संचालन के बुनियादी कौशल।', 'प्रवेशस्तरीय सहाय्यक भूमिकांसाठी बँकिंग आणि आर्थिक कामकाजाची मूलभूत कौशल्ये.'],
    'Accounts, Billing & GST': ['लेखा, बिलिंग और GST', 'लेखा, बिलिंग आणि GST'],
    'Practical finance and documentation skills for office employment.': ['कार्यालयीन रोजगार के लिए व्यावहारिक वित्त और दस्तावेज़ीकरण कौशल।', 'कार्यालयीन रोजगारासाठी व्यावहारिक वित्त आणि कागदपत्र कौशल्ये.'],
    'E-commerce & Back-office Operations': ['ई-कॉमर्स और बैक-ऑफिस संचालन', 'ई-कॉमर्स आणि बॅक-ऑफिस कामकाज'],
    'Digital operations, order processing and business-support skills.': ['डिजिटल संचालन, ऑर्डर प्रक्रिया और व्यावसायिक सहायता कौशल।', 'डिजिटल कामकाज, ऑर्डर प्रक्रिया आणि व्यवसाय सहाय्य कौशल्ये.'],
    'Healthcare & Patient Support': ['स्वास्थ्य सेवा और रोगी सहायता', 'आरोग्यसेवा आणि रुग्ण सहाय्य'],
    'Entry-level, supervised support skills for health-service settings.': ['स्वास्थ्य सेवा क्षेत्रों के लिए शुरुआती और पर्यवेक्षित सहायता कौशल।', 'आरोग्यसेवा क्षेत्रासाठी प्राथमिक आणि पर्यवेक्षित सहाय्य कौशल्ये.'],
    'Education & Learning Support': ['शिक्षा और सीखने में सहायता', 'शिक्षण आणि अध्ययन सहाय्य'],
    'Communication and digital skills for education-support environments.': ['शिक्षा सहायता के लिए संवाद और डिजिटल कौशल।', 'शिक्षण सहाय्य क्षेत्रासाठी संवाद आणि डिजिटल कौशल्ये.'],
    'Creative & Graphic Design': ['रचनात्मक और ग्राफ़िक डिज़ाइन', 'सर्जनशील आणि ग्राफिक डिझाइन'],
    'Visual communication and entry-level creative digital skills.': ['दृश्य संचार और शुरुआती रचनात्मक डिजिटल कौशल।', 'दृश्य संवाद आणि प्राथमिक सर्जनशील डिजिटल कौशल्ये.'],
    'Digital Marketing & Content': ['डिजिटल मार्केटिंग और सामग्री', 'डिजिटल मार्केटिंग आणि मजकूर'],
    'Digital communication, content planning and online promotion basics.': ['डिजिटल संवाद, सामग्री योजना और ऑनलाइन प्रचार की बुनियादी बातें।', 'डिजिटल संवाद, मजकूर नियोजन आणि ऑनलाइन प्रचाराची मूलतत्त्वे.'],
    'Communication & Workplace Readiness': ['संवाद और कार्यस्थल तैयारी', 'संवाद आणि कामाच्या ठिकाणची तयारी'],
    'Foundational communication and professional readiness for multiple sectors.': ['कई क्षेत्रों के लिए बुनियादी संवाद और पेशेवर तैयारी।', 'विविध क्षेत्रांसाठी मूलभूत संवाद आणि व्यावसायिक तयारी.'],
    'Safety, Security & Facility Operations': ['सुरक्षा और सुविधा संचालन', 'सुरक्षा आणि सुविधा कामकाज'],
    'Safety awareness and supervised facility-support fundamentals.': ['सुरक्षा जागरूकता और पर्यवेक्षित सुविधा सहायता की बुनियादी बातें।', 'सुरक्षा जागरूकता आणि पर्यवेक्षित सुविधा सहाय्याची मूलतत्त्वे.'],
    'Entrepreneurship & Self-employment': ['उद्यमिता और स्वरोजगार', 'उद्योजकता आणि स्वयंरोजगार'],
    'Practical foundations for planning a small service or micro-enterprise.': ['छोटी सेवा या सूक्ष्म उद्यम की योजना के व्यावहारिक आधार।', 'लहान सेवा किंवा सूक्ष्म उद्योगाच्या नियोजनासाठी व्यावहारिक पाया.'],
    'Potential livelihood: computer assistant, data-entry / office work, IT support, accounts assistant, digital-service roles.': ['संभावित आजीविका: कंप्यूटर सहायक, डेटा एंट्री/कार्यालय कार्य, IT सहायता, लेखा सहायक और डिजिटल सेवा भूमिकाएँ।', 'संभाव्य उपजीविका: संगणक सहाय्यक, डेटा एंट्री/कार्यालयीन काम, IT सहाय्य, लेखा सहाय्यक आणि डिजिटल सेवा भूमिका.'],
    'Potential employers: retail stores, supermarkets, shopping centres, e-commerce support operations and MSMEs.': ['संभावित नियोक्ता: खुदरा दुकानें, सुपरमार्केट, शॉपिंग सेंटर, ई-कॉमर्स सहायता संचालन और MSME।', 'संभाव्य नियोक्ते: किरकोळ दुकाने, सुपरमार्केट, शॉपिंग सेंटर, ई-कॉमर्स सहाय्य कामकाज आणि MSME.'],
    'Potential livelihood: hotel services, front-office and hospitality-support roles.': ['संभावित आजीविका: होटल सेवा, फ्रंट-ऑफिस और आतिथ्य सहायता भूमिकाएँ।', 'संभाव्य उपजीविका: हॉटेल सेवा, फ्रंट-ऑफिस आणि आतिथ्य सहाय्यक भूमिका.'],
    'Potential livelihood: salon employment, wellness support or supervised self-employment.': ['संभावित आजीविका: सैलून में काम, वेलनेस सहायता या पर्यवेक्षित स्वरोजगार।', 'संभाव्य उपजीविका: सलूनमधील काम, वेलनेस सहाय्य किंवा पर्यवेक्षित स्वयंरोजगार.'],
    'Potential livelihood: office assistant, reception support, documentation and accounts-assistant roles.': ['संभावित आजीविका: कार्यालय सहायक, रिसेप्शन सहायता, दस्तावेज़ीकरण और लेखा सहायक भूमिकाएँ।', 'संभाव्य उपजीविका: कार्यालय सहाय्यक, स्वागतकक्ष सहाय्य, कागदपत्रे आणि लेखा सहाय्यक भूमिका.'],
    'Potential livelihood: stock, warehousing, packaging and logistics-support work.': ['संभावित आजीविका: स्टॉक, गोदाम, पैकेजिंग और लॉजिस्टिक्स सहायता का काम।', 'संभाव्य उपजीविका: साठा, गोदाम, पॅकेजिंग आणि लॉजिस्टिक्स सहाय्याचे काम.'],
    'Potential livelihood: a foundation for entry-level roles across retail, office, service and support sectors.': ['संभावित आजीविका: खुदरा, कार्यालय, सेवा और सहायता क्षेत्रों में शुरुआती भूमिकाओं का आधार।', 'संभाव्य उपजीविका: किरकोळ विक्री, कार्यालय, सेवा आणि सहाय्य क्षेत्रातील प्रवेशस्तरीय भूमिकांचा पाया.'],
    'Potential livelihood: eligible facility-support and safety-assistance roles with appropriate supervision.': ['संभावित आजीविका: उचित पर्यवेक्षण के साथ पात्र सुविधा सहायता और सुरक्षा सहायक भूमिकाएँ।', 'संभाव्य उपजीविका: योग्य पर्यवेक्षणासह पात्र सुविधा सहाय्य आणि सुरक्षा सहाय्यक भूमिका.'],
    'Potential livelihood: supported micro-enterprise or self-employment planning where suitable.': ['संभावित आजीविका: उपयुक्त होने पर सहायता-प्राप्त सूक्ष्म उद्यम या स्वरोजगार योजना।', 'संभाव्य उपजीविका: योग्य असल्यास सहाय्यित सूक्ष्म उद्योग किंवा स्वयंरोजगार नियोजन.'],
    'Potential livelihood: supervised repair, maintenance and workshop-support roles. Age and safety suitability must be checked.': ['संभावित आजीविका: पर्यवेक्षित मरम्मत, रखरखाव और कार्यशाला सहायता भूमिकाएँ। आयु और सुरक्षा उपयुक्तता की जाँच आवश्यक है।', 'संभाव्य उपजीविका: पर्यवेक्षित दुरुस्ती, देखभाल आणि कार्यशाळा सहाय्यक भूमिका. वय आणि सुरक्षिततेची योग्यता तपासणे आवश्यक आहे.'],
    'Potential livelihood: customer-care executive, contact-centre support, helpdesk and back-office customer-service roles, subject to eligibility and safeguarding.': ['संभावित आजीविका: पात्रता और सुरक्षा शर्तों के अधीन ग्राहक सेवा प्रतिनिधि, संपर्क केंद्र सहायता, हेल्पडेस्क और बैक-ऑफिस ग्राहक सेवा भूमिकाएँ।', 'संभाव्य उपजीविका: पात्रता आणि संरक्षणाच्या अटींनुसार ग्राहक सेवा प्रतिनिधी, संपर्क केंद्र सहाय्य, हेल्पडेस्क आणि बॅक-ऑफिस ग्राहक सेवा भूमिका.'],
    'Potential livelihood: banking operations and customer-support roles through eligible entry-level pathways.': ['संभावित आजीविका: पात्र शुरुआती मार्गों के माध्यम से बैंकिंग संचालन और ग्राहक सहायता भूमिकाएँ।', 'संभाव्य उपजीविका: पात्र प्रवेशस्तरीय मार्गांद्वारे बँकिंग कामकाज आणि ग्राहक सहाय्यक भूमिका.'],
    'Potential livelihood: billing assistant, accounts assistant, documentation and finance-support roles.': ['संभावित आजीविका: बिलिंग सहायक, लेखा सहायक, दस्तावेज़ीकरण और वित्तीय सहायता भूमिकाएँ।', 'संभाव्य उपजीविका: बिलिंग सहाय्यक, लेखा सहाय्यक, कागदपत्रे आणि आर्थिक सहाय्यक भूमिका.'],
    'Potential livelihood: e-commerce operations, back-office support, order processing, catalogue and data-support roles.': ['संभावित आजीविका: ई-कॉमर्स संचालन, बैक-ऑफिस सहायता, ऑर्डर प्रक्रिया, कैटलॉग और डेटा सहायता भूमिकाएँ।', 'संभाव्य उपजीविका: ई-कॉमर्स कामकाज, बॅक-ऑफिस सहाय्य, ऑर्डर प्रक्रिया, सूची आणि डेटा सहाय्यक भूमिका.'],
    'Potential livelihood: supervised hospital reception, patient-support and health-facility administrative roles, subject to age and eligibility.': ['संभावित आजीविका: आयु और पात्रता के अधीन पर्यवेक्षित अस्पताल रिसेप्शन, रोगी सहायता और स्वास्थ्य-सुविधा प्रशासनिक भूमिकाएँ।', 'संभाव्य उपजीविका: वय आणि पात्रतेनुसार पर्यवेक्षित रुग्णालय स्वागतकक्ष, रुग्ण सहाय्य आणि आरोग्य सुविधा प्रशासकीय भूमिका.'],
    'Potential livelihood: supervised learning-centre, library and education-administration support roles.': ['संभावित आजीविका: पर्यवेक्षित शिक्षण केंद्र, पुस्तकालय और शिक्षा प्रशासन सहायता भूमिकाएँ।', 'संभाव्य उपजीविका: पर्यवेक्षित अध्ययन केंद्र, ग्रंथालय आणि शिक्षण प्रशासन सहाय्यक भूमिका.'],
    'Potential livelihood: junior design assistance, digital content support and supervised freelance projects.': ['संभावित आजीविका: कनिष्ठ डिज़ाइन सहायता, डिजिटल सामग्री सहायता और पर्यवेक्षित स्वतंत्र परियोजनाएँ।', 'संभाव्य उपजीविका: कनिष्ठ डिझाइन सहाय्य, डिजिटल मजकूर सहाय्य आणि पर्यवेक्षित स्वतंत्र प्रकल्प.'],
    'Potential livelihood: digital marketing assistant, content support and social-media operations roles.': ['संभावित आजीविका: डिजिटल मार्केटिंग सहायक, सामग्री सहायता और सोशल मीडिया संचालन भूमिकाएँ।', 'संभाव्य उपजीविका: डिजिटल मार्केटिंग सहाय्यक, मजकूर सहाय्य आणि सोशल मीडिया कामकाजातील भूमिका.'],
    'Potential livelihood: eligible facility-support and safety-assistance roles with appropriate supervision.': ['संभावित आजीविका: उचित पर्यवेक्षण के साथ पात्र सुविधा सहायता और सुरक्षा सहायक भूमिकाएँ।', 'संभाव्य उपजीविका: योग्य पर्यवेक्षणासह पात्र सुविधा सहाय्य आणि सुरक्षा सहाय्यक भूमिका.'],
    'Computer Fundamentals, Data Entry Operator, Domestic Data Entry Operator, IT Helpdesk Assistant, Digital Marketing, Graphic Design, Web Development, DTP, Video Editing, Tally / Accounting, Office Administration and Digital Literacy.': ['कंप्यूटर की मूल बातें, डेटा एंट्री ऑपरेटर, घरेलू डेटा एंट्री ऑपरेटर, IT हेल्पडेस्क सहायक, डिजिटल मार्केटिंग, ग्राफ़िक डिज़ाइन, वेब विकास, DTP, वीडियो संपादन, टैली/लेखांकन, कार्यालय प्रशासन और डिजिटल साक्षरता।', 'संगणकाची मूलतत्त्वे, डेटा एंट्री ऑपरेटर, घरगुती डेटा एंट्री ऑपरेटर, IT हेल्पडेस्क सहाय्यक, डिजिटल मार्केटिंग, ग्राफिक डिझाइन, वेब विकास, DTP, व्हिडिओ संपादन, टॅली/लेखांकन, कार्यालयीन प्रशासन आणि डिजिटल साक्षरता.'],
    'Retail Trainee Associate, Customer Service Associate, Sales Associate, Store Operations, Inventory / Stock Assistant, Cashier / Billing and Customer Relationship Executive.': ['खुदरा प्रशिक्षु सहयोगी, ग्राहक सेवा सहयोगी, बिक्री सहयोगी, स्टोर संचालन, इन्वेंटरी/स्टॉक सहायक, कैशियर/बिलिंग और ग्राहक संबंध प्रतिनिधि।', 'किरकोळ विक्री प्रशिक्षणार्थी, ग्राहक सेवा सहाय्यक, विक्री सहाय्यक, स्टोअर कामकाज, साठा सहाय्यक, कॅशियर/बिलिंग आणि ग्राहक संबंध प्रतिनिधी.'],
    'Front-office Operations, Guest Services, Food & Beverage Service and Hospitality Services.': ['फ्रंट-ऑफिस संचालन, अतिथि सेवाएँ, खाद्य एवं पेय सेवा और आतिथ्य सेवाएँ।', 'फ्रंट-ऑफिस कामकाज, अतिथी सेवा, खाद्य व पेय सेवा आणि आतिथ्य सेवा.'],
    'Assistant Beauty Therapist, Beauty & Wellness Assistant, Hairdresser / Stylist, Nail-care Services, Makeup Services and Spa / Wellness Assistant.': ['सहायक ब्यूटी थेरेपिस्ट, सौंदर्य एवं स्वास्थ्य सहायक, हेयरड्रेसर/स्टाइलिस्ट, नाखून देखभाल, मेकअप सेवाएँ और स्पा/वेलनेस सहायक।', 'सहाय्यक सौंदर्य चिकित्सक, सौंदर्य व आरोग्य सहाय्यक, केशभूषाकार/स्टायलिस्ट, नखांची निगा, मेकअप सेवा आणि स्पा/वेलनेस सहाय्यक.'],
    'Office Administration, Document Preparation, Filing & Records, Reception Support, Tally / Accounting, Digital Literacy and Workplace Communication.': ['कार्यालय प्रशासन, दस्तावेज़ तैयार करना, फाइलिंग और रिकॉर्ड, रिसेप्शन सहायता, टैली/लेखांकन, डिजिटल साक्षरता और कार्यस्थल संवाद।', 'कार्यालयीन प्रशासन, कागदपत्र तयारी, फाइलिंग व नोंदी, स्वागतकक्ष सहाय्य, टॅली/लेखांकन, डिजिटल साक्षरता आणि कार्यस्थळ संवाद.'],
    'Basic Electrical Work, Electronics Repair, Mobile Phone Repair, CCTV Installation, Solar-panel Installation / Maintenance and Automobile Service Assistance.': ['बुनियादी विद्युत कार्य, इलेक्ट्रॉनिक्स मरम्मत, मोबाइल फ़ोन मरम्मत, CCTV स्थापना, सौर पैनल स्थापना/रखरखाव और ऑटोमोबाइल सेवा सहायता।', 'मूलभूत विद्युत काम, इलेक्ट्रॉनिक्स दुरुस्ती, मोबाइल फोन दुरुस्ती, CCTV बसवणे, सौर पॅनेल बसवणे/देखभाल आणि वाहन सेवा सहाय्य.'],
    'Inventory Clerk, Warehouse Associate, Logistics Associate, Supply-chain Assistant, Packaging Assistant and E-commerce Logistics.': ['इन्वेंटरी क्लर्क, गोदाम सहयोगी, लॉजिस्टिक्स सहयोगी, आपूर्ति-श्रृंखला सहायक, पैकेजिंग सहायक और ई-कॉमर्स लॉजिस्टिक्स।', 'साठा लिपिक, गोदाम सहाय्यक, लॉजिस्टिक्स सहाय्यक, पुरवठा साखळी सहाय्यक, पॅकेजिंग सहाय्यक आणि ई-कॉमर्स लॉजिस्टिक्स.'],
    'Customer Care Executive, Call Centre Operations, CRM Basics, Voice / Non-Voice Support, Email / Chat Support, Complaint Handling and Workplace Communication.': ['ग्राहक सेवा प्रतिनिधि, कॉल सेंटर संचालन, CRM की मूल बातें, वॉइस/नॉन-वॉइस सहायता, ईमेल/चैट सहायता, शिकायत प्रबंधन और कार्यस्थल संवाद।', 'ग्राहक सेवा प्रतिनिधी, कॉल सेंटर कामकाज, CRM मूलतत्त्वे, व्हॉइस/नॉन-व्हॉइस सहाय्य, ईमेल/चॅट सहाय्य, तक्रार हाताळणी आणि कार्यस्थळ संवाद.'],
    'Banking Operations Basics, Customer Onboarding, KYC Documentation, Digital Payments, Financial Literacy, Customer Relationship Support and Branch Operations.': ['बैंकिंग संचालन की मूल बातें, ग्राहक ऑनबोर्डिंग, KYC दस्तावेज़ीकरण, डिजिटल भुगतान, वित्तीय साक्षरता, ग्राहक संबंध सहायता और शाखा संचालन।', 'बँकिंग कामकाजाची मूलतत्त्वे, ग्राहक नोंदणी, KYC कागदपत्रे, डिजिटल पेमेंट, आर्थिक साक्षरता, ग्राहक संबंध सहाय्य आणि शाखा कामकाज.'],
    'Tally / Accounting Software, Bookkeeping Basics, GST & Invoice Basics, Billing Operations, MS Excel, Accounts Documentation and Financial Record Management.': ['टैली/लेखांकन सॉफ़्टवेयर, बहीखाते की मूल बातें, GST और इनवॉइस की मूल बातें, बिलिंग संचालन, MS Excel, लेखा दस्तावेज़ीकरण और वित्तीय रिकॉर्ड प्रबंधन।', 'टॅली/लेखांकन सॉफ्टवेअर, खातेवहीची मूलतत्त्वे, GST व इनव्हॉइसची मूलतत्त्वे, बिलिंग कामकाज, MS Excel, लेखा कागदपत्रे आणि आर्थिक नोंद व्यवस्थापन.'],
    'E-commerce Operations Associate, Order Processing, Product Catalogue Management, CRM, MIS / Reporting, Data Handling, Document Processing and Digital Customer Support.': ['ई-कॉमर्स संचालन सहयोगी, ऑर्डर प्रक्रिया, उत्पाद कैटलॉग प्रबंधन, CRM, MIS/रिपोर्टिंग, डेटा प्रबंधन, दस्तावेज़ प्रक्रिया और डिजिटल ग्राहक सहायता।', 'ई-कॉमर्स कामकाज सहाय्यक, ऑर्डर प्रक्रिया, उत्पादन सूची व्यवस्थापन, CRM, MIS/अहवाल, डेटा हाताळणी, कागदपत्र प्रक्रिया आणि डिजिटल ग्राहक सहाय्य.'],
    'Patient Care Assistant, Hospital Front Desk, Medical Records Basics, Appointment Scheduling, Patient Communication and Health-facility Support.': ['रोगी देखभाल सहायक, अस्पताल फ्रंट डेस्क, मेडिकल रिकॉर्ड की मूल बातें, अपॉइंटमेंट शेड्यूलिंग, रोगी संवाद और स्वास्थ्य-सुविधा सहायता।', 'रुग्ण सेवा सहाय्यक, रुग्णालय फ्रंट डेस्क, वैद्यकीय नोंदींची मूलतत्त्वे, भेटींचे नियोजन, रुग्ण संवाद आणि आरोग्य सुविधा सहाय्य.'],
    'Library Assistant Basics, Learning Centre Support, Digital Learning Assistance, Records Management and Communication Skills.': ['पुस्तकालय सहायक की मूल बातें, शिक्षण केंद्र सहायता, डिजिटल शिक्षण सहायता, रिकॉर्ड प्रबंधन और संवाद कौशल।', 'ग्रंथालय सहाय्यकाची मूलतत्त्वे, अध्ययन केंद्र सहाय्य, डिजिटल शिक्षण सहाय्य, नोंद व्यवस्थापन आणि संवाद कौशल्ये.'],
    'Design Fundamentals, Image Editing, Social Media Creatives, Presentation Design, Layout and Portfolio Development.': ['डिज़ाइन की मूल बातें, छवि संपादन, सोशल मीडिया क्रिएटिव, प्रस्तुति डिज़ाइन, लेआउट और पोर्टफोलियो विकास।', 'डिझाइनची मूलतत्त्वे, प्रतिमा संपादन, सोशल मीडिया क्रिएटिव्ह, सादरीकरण डिझाइन, मांडणी आणि पोर्टफोलिओ विकास.'],
    'Social Media Basics, Content Writing, Digital Campaign Support, Search Basics, Analytics Fundamentals and Online Safety.': ['सोशल मीडिया की मूल बातें, सामग्री लेखन, डिजिटल अभियान सहायता, खोज की मूल बातें, एनालिटिक्स की मूल बातें और ऑनलाइन सुरक्षा।', 'सोशल मीडियाची मूलतत्त्वे, मजकूर लेखन, डिजिटल मोहिम सहाय्य, शोधाची मूलतत्त्वे, विश्लेषणाची मूलतत्त्वे आणि ऑनलाइन सुरक्षितता.'],
    'Spoken English, Workplace Communication, Interview Preparation, Teamwork, Problem-solving, Time Management and Digital Etiquette.': ['बोली जाने वाली अंग्रेज़ी, कार्यस्थल संवाद, साक्षात्कार तैयारी, टीमवर्क, समस्या समाधान, समय प्रबंधन और डिजिटल शिष्टाचार।', 'बोलण्याचे इंग्रजी, कार्यस्थळ संवाद, मुलाखत तयारी, सांघिक कार्य, समस्या सोडवणे, वेळ व्यवस्थापन आणि डिजिटल शिष्टाचार.'],
    'Workplace Safety, Emergency Awareness, Facility Operations Basics, Visitor Management and Occupational Safety. Any regulated security role requires age and legal eligibility checks.': ['कार्यस्थल सुरक्षा, आपातकालीन जागरूकता, सुविधा संचालन की मूल बातें, आगंतुक प्रबंधन और व्यावसायिक सुरक्षा। विनियमित सुरक्षा भूमिकाओं के लिए आयु और कानूनी पात्रता की जाँच आवश्यक है।', 'कार्यस्थळ सुरक्षितता, आपत्कालीन जागरूकता, सुविधा कामकाजाची मूलतत्त्वे, अभ्यागत व्यवस्थापन आणि व्यावसायिक सुरक्षितता. नियमनाधीन सुरक्षा भूमिकांसाठी वय व कायदेशीर पात्रता तपासणे आवश्यक आहे.'],
    'Business Planning, Customer Discovery, Costing, Basic Bookkeeping, Digital Payments, Marketing and Government Support Awareness.': ['व्यवसाय योजना, ग्राहक पहचान, लागत निर्धारण, बुनियादी बहीखाता, डिजिटल भुगतान, मार्केटिंग और सरकारी सहायता की जानकारी।', 'व्यवसाय नियोजन, ग्राहक शोध, खर्च मोजणी, मूलभूत खातेवही, डिजिटल पेमेंट, विपणन आणि सरकारी सहाय्याची माहिती.']
  };

  var originalText = new WeakMap();
  var originalAttributes = new WeakMap();
  var originalFontSizes = new WeakMap();
  var currentLanguage = 'en';
  var textLookup = Object.create(null);
  var currentFontScale = '1';

  Object.keys(translations).forEach(function (english) {
    textLookup[english.replace(/\s+/g, ' ').trim()] = translations[english];
  });

  function translatedValue(english, language) {
    if (language === 'en') return english;
    var pair = textLookup[english.replace(/\s+/g, ' ').trim()];
    if (!pair) return english;
    return language === 'hi' ? pair[0] : pair[1];
  }

  function updateText(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;

    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) {
        originalText.set(node, node.nodeValue);
      }

      var source = originalText.get(node);
      var trimmed = source.replace(/\s+/g, ' ').trim();
      if (!trimmed) continue;

      var translated = translatedValue(trimmed, currentLanguage);
      var leading = source.match(/^\s*/)[0];
      var trailing = source.match(/\s*$/)[0];
      var value = leading + translated + trailing;
      if (node.nodeValue !== value) node.nodeValue = value;
    }
  }

  function updateAttributes(root) {
    var elements = root.querySelectorAll('[placeholder], [aria-label], [title], img[alt]');
    elements.forEach(function (element) {
      ['placeholder', 'aria-label', 'title', 'alt'].forEach(function (attribute) {
        if (!element.hasAttribute(attribute)) return;
        var saved = originalAttributes.get(element) || {};
        if (!Object.prototype.hasOwnProperty.call(saved, attribute)) {
          saved[attribute] = element.getAttribute(attribute);
          originalAttributes.set(element, saved);
        }
        var original = saved[attribute];
        element.setAttribute(attribute, translatedValue(original, currentLanguage));
      });
    });
  }

  function applyLanguage(language, persist) {
    currentLanguage = language;
    var locale = language === 'hi' ? 'hi-IN' : language === 'mr' ? 'mr-IN' : 'en-IN';
    document.documentElement.lang = locale;
    updateText(document.body);
    updateAttributes(document.body);

    document.querySelectorAll('.language-button').forEach(function (button) {
      var selected = button.dataset.language === language;
      button.setAttribute('aria-pressed', String(selected));
    });

    updateMobileMenuLabel();

    if (persist) {
      localStorage.setItem('phoenixLanguage', language);
    }
  }

  document.querySelectorAll('.language-button').forEach(function (button) {
    button.addEventListener('click', function () {
      applyLanguage(button.dataset.language, true);
    });
  });

  var mobileMenuToggle = document.getElementById('mobileMenuToggle');
  var primaryNavigation = document.getElementById('primaryNavigation');

  function updateMobileMenuLabel() {
    if (!mobileMenuToggle) return;
    var label = mobileMenuToggle.getAttribute('aria-expanded') === 'true'
      ? 'Close navigation menu'
      : 'Open navigation menu';
    mobileMenuToggle.setAttribute('aria-label', translatedValue(label, currentLanguage));
  }

  function closeMobileMenu(returnFocus) {
    if (!mobileMenuToggle || !primaryNavigation) return;
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    primaryNavigation.classList.remove('is-open');
    updateMobileMenuLabel();
    if (returnFocus) mobileMenuToggle.focus();
  }

  if (mobileMenuToggle && primaryNavigation) {
    mobileMenuToggle.addEventListener('click', function () {
      var expanded = mobileMenuToggle.getAttribute('aria-expanded') !== 'true';
      mobileMenuToggle.setAttribute('aria-expanded', String(expanded));
      primaryNavigation.classList.toggle('is-open', expanded);
      updateMobileMenuLabel();
    });

    primaryNavigation.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (link && window.matchMedia('(max-width: 750px)').matches) {
        closeMobileMenu(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (
        event.key === 'Escape' &&
        mobileMenuToggle.getAttribute('aria-expanded') === 'true'
      ) {
        closeMobileMenu(true);
      }
    });

    window.addEventListener('resize', function () {
      if (!window.matchMedia('(max-width: 750px)').matches) {
        closeMobileMenu(false);
      }
    });
  }

  var accessibilityToggle = document.getElementById('accessibilityToggle');
  var accessibilityTools = document.getElementById('accessibilityTools');

  if (accessibilityToggle && accessibilityTools) {
    accessibilityToggle.addEventListener('click', function () {
      var expanded = accessibilityToggle.getAttribute('aria-expanded') !== 'true';
      accessibilityToggle.setAttribute('aria-expanded', String(expanded));
      accessibilityTools.classList.toggle('is-hidden', !expanded);
      if (expanded) accessibilityTools.querySelector('button').focus();
    });
  }

  var fontSizeButtons = document.querySelectorAll('[data-font-size]');
  var fontScales = ['0.9', '1', '1.1', '1.2'];

  function applyTextScale(scale) {
    currentFontScale = scale;
    var elements = document.querySelectorAll(
      'body h1, body h2, body h3, body h4, body p, body a, body button, body input, body textarea, body label, body span, body strong, body small, body li'
    );

    elements.forEach(function (element) {
      var original = originalFontSizes.get(element);
      if (!original) {
        original = {
          computedSize: parseFloat(window.getComputedStyle(element).fontSize),
          inlineSize: element.style.fontSize
        };
        originalFontSizes.set(element, original);
      }

      element.style.fontSize = scale === '1'
        ? original.inlineSize
        : (original.computedSize * Number(scale)) + 'px';
    });
  }

  function setFontScale(scale, persist) {
    applyTextScale(scale);
    if (persist) localStorage.setItem('phoenixFontScale', scale);
  }

  fontSizeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var currentIndex = fontScales.indexOf(currentFontScale);
      if (currentIndex < 0) currentIndex = 1;

      if (button.dataset.fontSize === 'reset') {
        currentIndex = 1;
      } else if (button.dataset.fontSize === 'increase') {
        currentIndex = Math.min(currentIndex + 1, fontScales.length - 1);
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }

      setFontScale(fontScales[currentIndex], true);
    });
  });

  var contrastToggle = document.getElementById('contrastToggle');
  if (contrastToggle) {
    function setHighContrast(enabled, persist) {
      document.documentElement.classList.toggle('accessibility-high-contrast', enabled);
      contrastToggle.setAttribute('aria-pressed', String(enabled));
      contrastToggle.textContent = translatedValue(
        enabled ? 'Standard contrast' : 'High contrast',
        currentLanguage
      );
      if (persist) localStorage.setItem('phoenixHighContrast', String(enabled));
    }

    contrastToggle.addEventListener('click', function () {
      setHighContrast(contrastToggle.getAttribute('aria-pressed') !== 'true', true);
    });

    setHighContrast(localStorage.getItem('phoenixHighContrast') === 'true', false);
  }

  var savedFontScale = localStorage.getItem('phoenixFontScale');
  if (fontScales.indexOf(savedFontScale) !== -1) {
    setFontScale(savedFontScale, false);
  }

  var savedLanguage = localStorage.getItem('phoenixLanguage');
  applyLanguage(savedLanguage === 'hi' || savedLanguage === 'mr' ? savedLanguage : 'en', false);

  var contentObserver = new MutationObserver(function (records) {
    if (currentLanguage === 'en') return;
    records.forEach(function (record) {
      record.addedNodes.forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          updateText(node.parentElement || document.body);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          updateText(node);
          updateAttributes(node);
        }
      });
    });
  });

  contentObserver.observe(document.getElementById('main-content'), {
    childList: true,
    subtree: true
  });
}());
