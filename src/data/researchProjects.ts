import { ResearchProject } from '../types/research';

export const researchProjects: ResearchProject[] = [
  {
    id: 'research-1',
    title: 'Learning the Mind: The Cognitive Impact of Smart Device Usage',
    description: 'A comprehensive literature review exploring how smartphones and smart devices affect human cognitive functions, specifically executive function, working memory, and human perception.',
    previewImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1765972578/Jarvis_2_qqgafv.png',
    modalType: 'smart-device-cognition',
    category: 'User Experience Research',
    images: [
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1765972578/Jarvis_2_qqgafv.png',
        legend: 'Figure 1: How human cognition shapes with smartphone usage.'
      }
    ],
    theme: 'The following literature review delves into the realms of human cognition studied in relation to human perception, working memory, and general cognition with smartphones and other smart devices. It explores every aspect of human cognition and how the study itself is carried out in relation to these subjects. Some studies reviewed have explicitly stated that the volume of research might look extensive on the pertaining subject, but the quality of them is questionable, as the research methods and data collection methods are sometimes tainted, which leads to false conclusions, and the subject matter studied, i.e., human cognition and working memory, is a little different for everyone, and this creates a lot more things to consider while engaging in such a study to accommodate each and every data point. In this review, it is explored how the above subjects are studied in humans, i.e., executive function, working memory, and human perception, an effective sample size for them, and how that sample size is conditioned. Lastly, there are a few things to consider for the future scope of this subject matter in the review.',
    researchQuestions: [
      {
        type: 'Primary',
        question: 'How do smartphones and smart devices affect human cognitive functions-specifically executive function, working memory, and human perception?'
      },
      {
        type: 'Secondary',
        question: 'What methodological limitations exist in current smartphone-cognition research, and what considerations should future studies address to produce more reliable findings?'
      },
      {
        type: 'Tertiary',
        question: 'How do individual differences (neurodivergence, health status, childhood experiences) create variations that current research fails to accommodate?'
      }
    ],
    methods: 'Systematic Literature Review: Comprehensive examination of 11 peer-reviewed sources spanning cognitive psychology, HCI, pediatric research, and neuroscience journals. Sources ranged from 1998 (foundational ACE score research by Felitti et al.) to 2023 (recent fNIRS neuroimaging studies by Guo et al.).\n\nCritical Methodological Analysis: Rather than accepting findings at face value, the review interrogates study designs themselves. This includes examining online survey biases (Andrade, 2020) that render data incomplete, sample conditioning issues where individual variations aren\'t accounted for, and the gap between research volume and research quality in this domain.\n\nComparative Synthesis: Juxtaposition of contradictory findings-for example, Guo et al. (2023) showing improved working memory in pathological phone users versus Wilmer et al. (2017) showing diminished long-term memory from heavy media usage-to reveal the complexity and context-dependency of cognitive effects.\n\nContextual Framework Analysis: Examination of the six-level contextual pyramid proposed by Pei et al. (2013) for studying human behavior through smartphone sensors, ranging from raw sensor data collection to human behavior modeling techniques.',
    mediumsMaterials: [
      {
        source: 'Wilmer, Sherman & Chein (2017)',
        domain: 'Cognition review',
        contribution: 'Links between mobile habits and cognitive functioning'
      },
      {
        source: 'Guo et al. (2023)',
        domain: 'Neuroimaging (fNIRS)',
        contribution: 'Working memory in pathological smartphone users'
      },
      {
        source: 'Toh et al. (2023)',
        domain: 'Executive function',
        contribution: 'Screen time vs. checking frequency differentiation'
      },
      {
        source: 'Warsaw et al. (2021)',
        domain: 'Systematic review',
        contribution: 'Mobile technology and executive functioning in healthy adults'
      },
      {
        source: 'Barr et al. (2015)',
        domain: 'Cognitive offloading',
        contribution: 'Smartphones as "extended mind" for analytical tasks'
      },
      {
        source: 'Kabali et al. (2015)',
        domain: 'Pediatric usage',
        contribution: 'Mobile device exposure in children ages 1-3'
      },
      {
        source: 'Pei et al. (2013)',
        domain: 'Sensor methodology',
        contribution: 'Contextual pyramid for behavior cognition'
      },
      {
        source: 'Lin et al. (2016)',
        domain: 'Social media',
        contribution: 'Association between usage and depression'
      },
      {
        source: 'Firth et al. (2019)',
        domain: '"Online brain"',
        contribution: 'Internet\'s effects on cognition'
      },
      {
        source: 'Felitti et al. (1998)',
        domain: 'ACE scores',
        contribution: 'Childhood adversity and adult health outcomes'
      },
      {
        source: 'Andrade (2020)',
        domain: 'Research methods',
        contribution: 'Limitations of online survey data'
      }
    ],
    techniquesTechnologies: 'Research Techniques:\n- Thematic coding of literature findings\n- Cross-study comparison for contradictory evidence identification\n- Meta-analytical thinking to assess study quality\n- Integration of neuroscience concepts (fNIRS neuroimaging, executive function models) with HCI frameworks\n\nConceptual Frameworks Referenced:\n- Contextual Pyramid Model (Pei et al.): Six-level framework from raw sensor data → human behavior modeling\n- Executive Function Components: Shifting-specific abilities, working memory-specific abilities, inhibition\n- Cognitive Offloading Theory: Smartphones as external cognitive resources that supplement analytical reasoning\n- ACE (Adverse Childhood Experiences) Framework: Proposal to incorporate trauma-informed variables into cognitive research\n\nAcademic Technologies:\n- Peer-reviewed database access (journals spanning psychology, HCI, pediatrics, neuroscience)\n- Citation management and synthesis\n- APA 7th edition formatting standards',
    audienceImpact: 'HCI Researchers & Academics:\n- Framework for understanding cognitive variables when designing user studies\n- Critical lens for evaluating existing smartphone-cognition literature\n- Methodological recommendations for more rigorous future studies\n\nUX/Product Designers:\n- Evidence-based understanding of attention and memory constraints\n- Insights for designing cognitively-aware, ethical interfaces\n- Understanding of how "cognitive offloading" changes user behavior patterns\n\nDigital Health & Wellness Practitioners:\n- Nuanced view beyond "smartphones are bad" narratives\n- Understanding that usage patterns (checking frequency) matter more than total screen time\n- Framework for individualized assessment rather than blanket recommendations\n\nPolicy Makers & Educators:\n- Data on early childhood device exposure (ages 1-3)\n- Evidence that caregivers use devices to soothe children during tasks\n- Complexity of effects that resist simple regulatory solutions'
  },
  {
    id: 'research-2',
    title: 'How LLMs are Changing the Way Humans Learn (AI Focus)',
    description: 'An investigation into how artificial intelligence has changed the way humans interact with academic content and learn new things, exploring both the benefits and psychological effects of AI usage.',
    previewImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1765972141/Data_1_semxhn.png',
    modalType: 'ai-learning-impact',
    category: 'User Experience Research',
    images: [
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1765972141/Data_1_semxhn.png',
        legend: 'Figure 1: Effects of AI usage on human cognition'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1765972141/Data_3_tzbbhi.png',
        legend: 'Figure 2: Comparing different types of support used for learning.'
      }
    ],
    theme: 'Artificial intelligence has changed the way humans interact with academic content and learn new things. While the studies discussed here point to the direction of AI aiding in task completion and efficiency, they also talk of how psychological effects like critical thinking, cognition, and behavioral outcomes are hampered with prolonged usage of AI for learning. It also hints at the need for balanced and responsible usage of AI that not only aids the users but also considers their psychological well-being.',
    researchQuestions: [
      {
        type: 'Research Question 1',
        question: 'Cognitive & Memory Processing: How does regular usage of AI affect cognitive and memory processing? This question explores whether outsourcing mental labor to AI diminishes the brain\'s own processing capabilities, examining both short-term task performance and long-term memory consolidation.'
      },
      {
        type: 'Research Question 2',
        question: 'Behavioral Changes: What are the behavior changes noticed in prolonged usage of AI? This investigates observable shifts in student behavior patterns, including procrastination tendencies, task engagement levels, and dependency formation.'
      },
      {
        type: 'Research Question 3',
        question: 'Learning Pattern Alterations: What are the changes in the learning patterns observed in AI usage? This examines how AI reshapes the fundamental process of learning itself-from goal-setting through execution to self-reflection.'
      }
    ],
    methods: 'Systematic Survey of Empirical Research: Comprehensive synthesis of five major peer-reviewed studies encompassing over 1,500 participants across diverse educational contexts and methodologies.\n\nMulti-Framework Analysis: Integration of multiple theoretical lenses to examine AI\'s psychological impact:\n- Self-Regulated Learning (SRL) Framework - Three-phase model (forethought → performance → self-reflection) used to analyze how AI disrupts natural learning cycles\n- Cognitive Offloading Theory - Framework for understanding the redistribution of mental tasks from human cognition to external AI systems\n- Metacognitive Assessment - Analysis of learners\' awareness and regulation of their own thinking processes\n\nComparative Group Analysis: Examination of differential outcomes across support conditions:\n- AI-assisted learners (linear exploration patterns, moderate motivation)\n- Human expert support groups (reflective, iterative processes)\n- Checklist support groups (balanced learning, highest competence/effort)\n- Control groups (multiple technique adoption, lowest enjoyment)\n\nCausal Pathway Mapping: Tracing the mechanisms through which AI usage leads to specific psychological outcomes-for example, how cognitive offloading → reduced processing → diminished long-term retention.',
    mediumsMaterials: 'Comprehensive synthesis of five major peer-reviewed studies encompassing over 1,500 participants across diverse educational contexts and methodologies.',
    techniquesTechnologies: 'Self-Regulated Learning (SRL) Framework, Cognitive Offloading Theory, Metacognitive Assessment, Comparative Group Analysis, Causal Pathway Mapping',
    audienceImpact: '1. Educational Researchers & Learning Scientists:\n- Evidence that AI support fundamentally alters learning processes, not just outcomes\n- Framework for understanding metacognitive disruption in AI-assisted learning\n- Research agenda for studying long-term cognitive effects\n\n2. Educators & Instructional Designers:\n- Understanding that AI tools require structured guidance to preserve learning benefits\n- Recognition that different support types (AI vs. human vs. checklist) produce different learning patterns\n- Practical implications for integrating AI into curricula without undermining cognitive development\n\n3. Students & Learners:\n- Awareness of potential psychological risks (procrastination, reduced independent study)\n- Framework for "integration without replacement" of human cognition\n- Need for structured guidance systems rather than unrestricted AI access\n\n4. EdTech Developers & AI Researchers:\n- Design implications for AI tools that support rather than supplant cognition\n- Understanding metacognitive demands that AI should preserve\n- Evidence for building "cognitive autonomy-preserving" AI features\n\n5. Parents & Guardians:\n- Understanding psychological risks of early/excessive AI usage for learning\n- Recognizing behavioral warning signs (procrastination, reduced independent study)'
  },
  {
    id: 'research-3',
    title: 'Cultural Models & Dark Patterns',
    description: 'An exploration of how cultural models influence users\' susceptibility to and interaction with dark patterns in web interfaces, using Hofstede\'s cultural dimensions and schema theory as theoretical frameworks.',
    previewImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766234556/Working_Frame_1_xuobs1.png',
    modalType: 'cultural-dark-patterns',
    category: 'Research',
    images: [
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1765978719/Data_5_bai19c.png',
        legend: 'Figure 1: Explanation of Hofstede\'s Cultural Model.'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1765978719/Data_4_vm0vaz.png',
        legend: 'Figure 2: Explanation of Schema Theory & Cultural Models'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1765978718/Data_6_aubbso.png',
        legend: 'Figure 3: Common dark patterns noticed'
      }
    ],
    theme: 'This paper explores how cultural models influence users\' susceptibility to and interaction with dark patterns in web interfaces. Using Hofstede\'s cultural dimensions and schema theory as theoretical frameworks, I have tried to analyze how designers exploit culturally-conditioned mental models to create deceptive interfaces. It talks of how cultural background significantly affects how users perceive, respond to, and are psychologically impacted by dark patterns.',
    researchQuestions: [
      {
        type: 'Primary',
        question: 'Cultural Susceptibility: How do cultural models influence users\' susceptibility to and interaction with dark patterns in web interfaces? This explores whether certain cultural backgrounds create predictable vulnerabilities that deceptive designers can exploit.'
      },
      {
        type: 'Secondary',
        question: 'Schema Exploitation: How do dark patterns exploit culturally-conditioned mental schemas to direct users toward unintended actions? This examines the cognitive mechanisms through which cultural expectations are weaponized.'
      },
      {
        type: 'Tertiary',
        question: 'Differential Psychological Impact: How does the psychological harm of encountering dark patterns vary across cultural groups? This investigates whether manipulation causes different emotional, behavioral, and trust-related consequences depending on cultural background.'
      },
      {
        type: 'Ethical',
        question: 'What responsibilities do designers have when their interfaces will be used across culturally diverse populations with varying vulnerabilities?'
      }
    ],
    methods: 'Theoretical Framework Synthesis: Integration of two major theoretical traditions to create a novel analytical lens:\n1. Hofstede\'s Cultural Dimensions Theory - Six-dimension framework for understanding cultural variation:\n   - Power distance (acceptance of hierarchical inequality)\n   - Individualism vs. collectivism (self-orientation vs. group-orientation)\n   - Uncertainty avoidance (tolerance for ambiguity)\n   - Masculinity vs. femininity (competition vs. cooperation values)\n   - Long-term vs. short-term orientation (future vs. present focus)\n   - Indulgence vs. restraint (gratification norms)\n2. Schema Theory - Cognitive framework explaining how humans interpret new information through existing mental models developed via cultural and personal experience\n\nCross-Domain Literature Analysis: Bridging research from traditionally separate fields:\n- Dark patterns research (HCI/design)\n- Online fraud victimization studies (criminology)\n- Cross-cultural psychology (behavioral science)\n- Cognitive bias research (decision science)\n\nComparative Cultural Analysis: Examination of differential responses between:\n- Collectivist vs. individualist cultures\n- High vs. low uncertainty avoidance societies\n- Short-term vs. long-term oriented populations\n- Asian vs. Western societies (fraud victimization patterns)\n\nFramework Development: Proposing a culturally-conscious extension of user-centered design principles (Norman; Shneiderman & Plaisant) specifically targeting dark pattern countermeasures.',
    mediumsMaterials: [
      {
        source: 'Hofstede (2001)',
        domain: 'Cross-cultural psychology',
        contribution: 'Six cultural dimensions framework for understanding behavioral variation across nations'
      },
      {
        source: 'D\'Andrade (2018)',
        domain: 'Cognitive anthropology',
        contribution: 'Schema theory and cultural models-how mental frameworks shape interpretation'
      },
      {
        source: 'Mathur, Kshirsagar & Mayer (2023)',
        domain: 'HCI/Dark patterns',
        contribution: 'Large-scale analysis of dark patterns across 11,000 shopping websites'
      },
      {
        source: 'Button et al. (2023)',
        domain: 'Criminology',
        contribution: 'Cultural differences in emotional/behavioral responses to online fraud victimization'
      },
      {
        source: 'Vishwanath & Bashir (2023)',
        domain: 'Cross-cultural security',
        contribution: 'Comparative study of credit card fraud victimization in Asian vs. Western societies'
      },
      {
        source: 'Tversky & Kahneman (1974)',
        domain: 'Behavioral economics',
        contribution: 'Judgment under uncertainty-heuristics and biases including temporal discounting'
      },
      {
        source: 'Norman (2013)',
        domain: 'Design theory',
        contribution: 'User-centered design principles ("The Design of Everyday Things")'
      },
      {
        source: 'Shneiderman & Plaisant (2010)',
        domain: 'HCI fundamentals',
        contribution: 'Strategies for effective human-computer interaction'
      },
      {
        source: 'Nisbett & Masuda (2021)',
        domain: 'Cultural cognition',
        contribution: 'Culture and point of view-how cultural background shapes perception'
      },
      {
        source: 'Johnson & Tversky (1983)',
        domain: 'Affect and cognition',
        contribution: 'How emotional states influence risk perception and generalization'
      }
    ],
    techniquesTechnologies: 'Analytical Techniques:\n- Cultural Dimension Mapping: Applying Hofstede\'s six dimensions to predict dark pattern vulnerability\n- Schema Exploitation Analysis: Tracing how dark patterns create interfaces that appear to function according to users\' culturally-conditioned expectations, subtly redirect toward unintended actions, and benefit corporations at user expense\n- Temporal Discounting Framework: Applying Tversky & Kahneman\'s research on how people undervalue future consequences-connecting to addiction mechanisms and dark pattern effectiveness\n- Cross-Cultural Fraud Response Comparison: Analyzing variations in emotional reactions to manipulation, reporting behaviors post-victimization, and long-term trust impacts on digital platform engagement\n\nConceptual Technologies:\n- Dark Pattern Taxonomy: Engagement with established dark pattern classifications from large-scale web crawl research (Mathur et al.\'s analysis of 11,000 shopping sites)\n- Cultural Models as Cognitive Infrastructure: Understanding culture not as surface-level preference but as deep mental architecture that shapes information interpretation, decision-making processes, emotional responses to deception, and recovery from manipulation\n- Shame Weaponization Model: Framework for understanding how collectivist cultural values (group harmony, face-saving) can be exploited through dark patterns that threaten social standing',
    audienceImpact: '1. UX/UI Designers & Design Ethicists:\n- Framework for understanding how design choices differentially impact culturally diverse users\n- Ethical imperative to consider cultural vulnerability in interface design\n- Recognition that "user-centered design" must become "culturally-conscious user-centered design"\n- Clear articulation that exploiting cultural psychology is "straight-up evil"\n\n2. HCI Researchers:\n- Identification of significant gap in dark patterns literature: cultural variables largely overlooked\n- Theoretical framework combining Hofstede + schema theory for future empirical research\n- Research agenda for validating cultural vulnerability hypotheses\n- Call for culturally-sensitive methodologies in deceptive design studies\n\n3. Policy Makers & Regulators:\n- Evidence that dark pattern regulations cannot be one-size-fits-all across cultures\n- Framework for developing culturally-responsive design ethics guidelines\n- Understanding that certain populations face heightened manipulation risk\n- Basis for international coordination on digital consumer protection\n\n4. International Product Teams:\n- Practical implications for designing interfaces for Eastern vs. Western markets\n- Understanding that localization goes beyond language-cognitive patterns differ\n- Responsibility framework for global platform deployment\n\n5. Digital Rights Advocates & Consumer Protection Organizations:\n- Ammunition for advocacy against culturally-targeted manipulation\n- Framework for educating diverse populations about their specific vulnerabilities\n- Evidence connecting dark patterns to broader online fraud ecosystem'
  }
];

export const getResearchProjectById = (id: string): ResearchProject | undefined => {
  return researchProjects.find(project => project.id === id);
};

export const getRelatedResearchProjects = (researchId: string, count: number = 2): ResearchProject[] => {
  const currentProject = getResearchProjectById(researchId);
  if (!currentProject) return [];
  
  return researchProjects
    .filter(project => project.id !== researchId && project.category === currentProject.category)
    .slice(0, count);
};

