import { WebDevProject } from '../types/webdev';

export const webDevProjects: WebDevProject[] = [
  {
    id: 'webdev-1',
    title: 'Unicorn Mark Internship: Cross-Industry Web Development & Design',
    description: 'Creating purpose-driven digital experiences across diverse industry verticals, from e-commerce platforms to investor-facing landing pages and healthcare applications.',
    previewImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766940934/Unicornmark_Cover_k1tgjh.png',
    modalType: 'unicorn-mark',
    category: 'Software Engineering',
    coverImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766940934/Unicornmark_Cover_k1tgjh.png',
    images: [
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766660880/Bullstock_Img-1_pqq5ju.png',
        legend: 'Figure 1: Artshala'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766660881/MyCareerShapers_Img_glbrqv.png',
        legend: 'Figure 2: MyCareerShapers'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766660881/Imdipasta_Img_hck872.png',
        legend: 'Figure 3: IndiPasta'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766660880/Abhiyastha_Img_dlsnzx.png',
        legend: 'Figure 4: Abhiyastha'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766660881/Recur_Img_ynvyxu.png',
        legend: 'Figure 5: Recur'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766660881/Bullstock_Img_aiodlt.png',
        legend: 'Figure 6: BullStockIndia'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766660880/Deltic_Img_d4eeoh.png',
        legend: 'Figure 7: Deltic'
      }
    ],
    theme: 'My work at Unicorn Mark centered on creating purpose-driven digital experiences across diverse industry verticals, each demanding a distinct approach to user engagement and trust-building. From e-commerce platforms like Artshala (musical instruments) and MyCareerShapers (educational services) to investor-facing landing pages for IndiPasta (restaurant franchise) and Recur (fintech), the unifying thread was translating business objectives into intuitive interfaces. The healthcare sector brought its own constraints with Abhiyastha (multispecialty hospital), where accessibility and patient journey mapping took precedence, while BullStockIndia (asset management) required visual credibility signals appropriate for financial services. The bottom-up culture at the company meant I had significant ownership over design decisions, allowing me to adapt my approach based on each client\'s unique positioning and audience expectations.',
    researchQuestion: 'How can interface design and technical implementation be tailored to serve vastly different user mental models—from musicians browsing instruments to investors evaluating franchise opportunities to patients seeking hospital services—while maintaining performance standards and conversion effectiveness? A secondary consideration emerged around balancing aesthetic ambition with load time optimization, particularly evident in the MyCareerShapers migration where we achieved a 1.2-second improvement, and in the fintech and financial services projects where perceived speed directly correlates with user trust.',
    methods: 'Each project began with stakeholder interviews to understand business goals, followed by competitive analysis within the respective industry to establish baseline expectations and identify differentiation opportunities. For Artshala and MyCareerShapers, I mapped user flows to optimize product discovery and service navigation, while IndiPasta and Recur required more focused conversion funnel analysis given their investor-facing objectives. Abhiyastha involved card sorting exercises to establish intuitive categorization of medical departments, and heuristic evaluations guided the MyCareerShapers CMS migration by identifying existing usability bottlenecks. The IndiPasta project extended beyond web design into pitch deck development, requiring me to maintain visual consistency across digital and presentation formats while addressing the distinct information needs of venture investors.',
    mediumsMaterials: [
      'Adobe XD served as the prototyping environment for Artshala, producing annotated wireframes and clickable prototypes that guided development',
      'Figma was used for Abhiyastha\'s comprehensive design system that remains in active use by the hospital',
      'Documentation varied by project scope—migration planning documents and performance benchmarks for MyCareerShapers',
      'Style guides and component specifications for the fintech and financial services landing pages',
      'The IndiPasta deliverables uniquely included investor pitch deck materials alongside the web interface, demonstrating how brand assets could be adapted across touchpoints while serving different communication purposes'
    ],
    techniquesTechnologies: 'The technical stack consistently relied on Next.js and React, with implementation choices varying based on project requirements—server-side rendering for Artshala\'s SEO-critical product listings, dynamic routing for MyCareerShapers\' content-heavy educational platform, and performance-optimized component architecture for the landing pages where first impressions determined conversion success. Atomic design principles informed the Abhiyastha wireframe system, creating scalable components from foundational elements through complex page templates with WCAG accessibility baked into specifications. Across projects, I balanced visual ambition with loading performance, recognizing that subtle scroll-triggered animations and micro-interactions contribute to perceived quality without compromising the speed metrics that affect both user experience and search rankings.',
    audienceImpact: 'The audience spectrum ranged from niche consumer segments (musicians, students, patients with varying digital literacy) to sophisticated stakeholders (franchise investors, venture capital evaluators, asset management clients). IndiPasta demonstrated the most direct measurable impact, generating 24 investor conversions from a baseline of zero through strategic landing page design and supporting pitch materials. MyCareerShapers\' migration delivered quantifiable performance improvements that correlated with reduced bounce rates, while Abhiyastha\'s design system continues providing operational value as the hospital iterates on their patient-facing digital experience. The financial services projects for Recur and BullStockIndia serve ongoing business development efforts, with the former supporting active fundraising and the latter establishing credibility essential for client trust in asset management contexts.'
  },
  {
    id: 'webdev-2',
    title: 'Artemis: EdTech Marketplace Platform',
    description: 'A curated aggregator platform that cuts through the noise of countless courses, certifications, and learning resources scattered across disparate providers.',
    previewImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766941085/Artemis_Cover_vi52lr.png',
    modalType: 'artemis',
    category: 'Software Engineering',
    coverImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766941085/Artemis_Cover_vi52lr.png',
    images: [
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766662959/Artemis_1_gaa7m0.png',
        legend: 'Figure 1: Artemis home page for educational products'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766662959/Artemis_2_np9fgx.png',
        legend: 'Figure 2: Artemis product comparison of courses'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766662959/Artemis_3_cvchrq.png',
        legend: 'Figure 3: Artemis individual product(s) page'
      }
    ],
    theme: 'Artemis addresses a fundamental friction point in the online education landscape—the overwhelming cognitive burden learners face when navigating fragmented educational offerings across the internet. The platform positions itself as a curated aggregator that cuts through the noise of countless courses, certifications, and learning resources scattered across disparate providers. The visual language deliberately employs clean, minimal aesthetics to reinforce the core value proposition of simplicity amidst chaos, signaling to users that their search for the right educational fit ends here. The messaging hierarchy moves from attention-grabbing ("The only App you\'ll ever need") to trust-building ("Know what you Buy"), reflecting a user journey from discovery through to informed decision-making.',
    researchQuestion: 'How might we reduce decision fatigue and information asymmetry for learners navigating the crowded online education market, where product transparency is often lacking and users frequently abandon their search due to overwhelming choice? A secondary inquiry explored what trust signals and content presentation strategies resonate with users who have likely been burned by opaque course descriptions and misleading marketing from individual education providers.',
    methods: 'The design process began with understanding the pain points learners encounter when shopping for online education—distraction, lack of transparency, and difficulty comparing offerings across platforms. Content strategy focused on three key differentiators that emerged from this analysis: ease of use (reducing friction), fit (personalized discovery), and transparency (detailed product information). The landing page structure follows a progressive disclosure pattern, introducing the brand promise above the fold before systematically addressing user concerns through feature sections that anticipate and counter objections in sequence.',
    mediumsMaterials: 'The project was executed as a responsive landing page with mobile-first considerations, given that educational content discovery increasingly happens on handheld devices. Visual assets include custom illustrations and device mockups (iPhone and desktop frames) that contextualize the product in familiar usage scenarios while lending credibility to what is essentially a marketplace concept. The newsletter signup integration suggests an ongoing content strategy beyond the initial landing experience, positioning the platform for sustained engagement through updates, discounts, and educational freebies.',
    techniquesTechnologies: 'Built on Webflow, the implementation leverages the platform\'s visual development capabilities for rapid prototyping and iteration without sacrificing design fidelity. The single-page architecture with anchor navigation keeps users in a controlled flow rather than fragmenting attention across multiple pages—a deliberate choice that mirrors the product\'s promise of reducing distraction. Interaction patterns remain subtle, prioritizing content clarity over animation complexity, while the form integration demonstrates functional lead capture essential for marketplace validation and early user acquisition.',
    audienceImpact: 'The primary audience comprises self-directed learners—students, professionals seeking upskilling, and career-changers—who are motivated but overwhelmed by the paradox of choice in online education. Secondary consideration extends to education providers who would eventually list on the marketplace, though the current landing page focuses on demand-side user acquisition. The platform\'s impact potential lies in democratizing access to quality education by reducing the time and effort required to find appropriate learning resources, effectively serving as a trust layer between learners and the fragmented edtech ecosystem.'
  },
  {
    id: 'webdev-3',
    title: '3DGS Explained: Comparative Analysis of 3D Reconstruction Techniques',
    description: 'An educational resource demystifying the rapidly evolving landscape of 3D reconstruction from 2D imagery, positioning three distinct methodological approaches within a coherent comparative framework.',
    previewImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766940955/3DGS_Guide_lobsb4.png',
    modalType: '3dgs-explained',
    category: 'Software Engineering',
    coverImage: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766940955/3DGS_Guide_lobsb4.png',
    images: [
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766937874/Group_10_udpmnx.png',
        legend: 'Figure 1: Individual camera positions'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766937874/Group_11_avkjwk.png',
        legend: 'Figure 2: 3D point cloud from 2D images'
      },
      {
        url: 'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1766937874/Group_13_gzbgtu.png',
        legend: 'Figure 3: Individual rendered Gaussians using the 3D point cloud'
      }
    ],
    theme: 'This educational resource demystifies the rapidly evolving landscape of 3D reconstruction from 2D imagery, positioning three distinct methodological approaches—photogrammetry, Neural Radiance Fields (NeRFs), and 3D Gaussian Splatting (3DGS)—within a coherent comparative framework accessible to both practitioners and curious learners. The content architecture moves from foundational understanding (what each technique does and how) through comparative analysis (trade-offs across performance, quality, and use cases) to hands-on application (creating your own 3DGS models). Rather than treating these as competing technologies, the resource acknowledges their complementary strengths: photogrammetry\'s industry-standard workflows, NeRF\'s photorealistic quality, and 3DGS\'s real-time rendering capabilities introduced in 2023. The inclusion of failure cases—reflective surfaces like Chicago\'s Cloud Gate, insufficient geometric constraints—demonstrates intellectual honesty about technological limitations, building credibility with technically sophisticated audiences.',
    researchQuestion: 'How can complex volumetric rendering concepts be communicated to audiences with varying technical backgrounds, enabling them to make informed decisions about which 3D reconstruction approach suits their specific use case—whether game development, architectural visualization, or VR applications? A secondary pedagogical inquiry explored how interactive demonstrations at varying iteration counts (2,000, 6,000, and 30,000) could make abstract concepts like quality-performance trade-offs tangible and experiential rather than purely theoretical.',
    methods: 'The explanatory structure employs progressive complexity, beginning with the most familiar technique (photogrammetry, established since the early 2000s) before introducing neural approaches (NeRF) and culminating with the newest method (3DGS). Each technique receives parallel treatment—process explanation, visual workflow diagrams, and carousel examples—enabling users to build mental models through consistent information architecture. The comparative table synthesizes multidimensional trade-offs across hardware requirements, rendering speed, training time, visual quality, and application domains, addressing the decision-making needs of practitioners evaluating these technologies. Custom scene reconstruction using the Jarvis Student Center computer lab provides authentic learning through controlled experimentation, demonstrating how input variables (32 photographs yielding 180-degree coverage versus 162 photographs achieving 360-degree reconstruction) directly affect output quality.',
    mediumsMaterials: 'The resource integrates multiple content formats to accommodate different learning modalities: written explanations for conceptual grounding, process diagrams illustrating algorithmic workflows (SfM, ray tracing, Gaussian splatting), interactive 3D model viewers embedded via Splat rendering, and structured comparison tables for quick reference. The banana and truck datasets serve as controlled examples where iteration count is the sole variable, isolating quality improvements for clear demonstration. Documentation of the OpenSplat workflow—from repository cloning through COLMAP processing to final .ply output—transforms the resource from passive explanation to actionable tutorial, lowering barriers to experimentation for technically inclined users.',
    techniquesTechnologies: 'The site itself is deployed on Netlify, leveraging static hosting for fast global delivery of what is essentially an educational document with embedded interactive elements. The 3DGS demonstrations utilize .ply files and cameras.json outputs from OpenSplat, rendered through browser-compatible viewers like Splatter.app that handle the computationally intensive splatting process client-side. The technical content covers the full pipeline: Structure from Motion (SfM) via COLMAP for sparse point cloud generation, Gaussian population across iteration cycles, and alpha compositing for final render output. Hardware considerations span NVIDIA CUDA, Apple Metal (M1/M2/M3), and AMD ROCm ecosystems, acknowledging the cross-platform realities of modern GPU computing while noting that training times range from minutes (3DGS) to days (NeRF) depending on approach and hardware.',
    audienceImpact: 'The primary audience includes computer graphics students, XR developers evaluating rendering pipelines, architectural visualization professionals, and game developers exploring emerging asset creation workflows. Secondary audiences extend to researchers seeking accessible introductions to volumetric rendering and educators who might adopt the resource for coursework. The impact operates on multiple levels: conceptual (understanding how these techniques differ fundamentally), practical (following the OpenSplat tutorial to create personal 3DGS models), and strategic (using the comparison framework to select appropriate techniques for specific projects). By documenting both successes and failures—the Bean\'s reflective surface defeating reconstruction, flat "cardboard cutout" artifacts from insufficient viewpoints—the resource equips users with realistic expectations and diagnostic frameworks for troubleshooting their own reconstruction attempts.'
  }
];

export const getWebDevProjectById = (id: string): WebDevProject | undefined => {
  return webDevProjects.find(project => project.id === id);
};

export const getRelatedWebDevProjects = (webDevId: string, count: number = 2): WebDevProject[] => {
  const currentProject = getWebDevProjectById(webDevId);
  if (!currentProject) return [];
  
  return webDevProjects
    .filter(project => project.id !== webDevId && project.category === currentProject.category)
    .slice(0, count);
};

