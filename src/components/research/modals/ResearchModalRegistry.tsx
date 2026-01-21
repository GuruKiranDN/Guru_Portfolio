import SmartDeviceCognitionModal from './SmartDeviceCognitionModal';
import AILearningImpactModal from './AILearningImpactModal';
import CulturalDarkPatternsModal from './CulturalDarkPatternsModal';

// Registry mapping modal types to their React components
const researchModalRegistry = {
  'smart-device-cognition': SmartDeviceCognitionModal,
  'ai-learning-impact': AILearningImpactModal,
  'cultural-dark-patterns': CulturalDarkPatternsModal,
};

// Helper function to get the right modal component
export const getResearchModalComponent = (modalType: string) => {
  const ModalComponent = researchModalRegistry[modalType as keyof typeof researchModalRegistry];
  
  if (!ModalComponent) {
    throw new Error(`No research modal found for type: ${modalType}`);
  }
  
  return ModalComponent;
};

export default researchModalRegistry;

