import UnicornMarkModal from './UnicornMarkModal';
import ArtemisModal from './ArtemisModal';
import ThreeDGSModal from './ThreeDGSModal';

// Registry mapping modal types to their React components
const webDevModalRegistry = {
  'unicorn-mark': UnicornMarkModal,
  'artemis': ArtemisModal,
  '3dgs-explained': ThreeDGSModal,
};

// Helper function to get the right modal component
export const getWebDevModalComponent = (modalType: string) => {
  const ModalComponent = webDevModalRegistry[modalType as keyof typeof webDevModalRegistry];
  
  if (!ModalComponent) {
    throw new Error(`No web dev modal found for type: ${modalType}`);
  }
  
  return ModalComponent;
};

export default webDevModalRegistry;

