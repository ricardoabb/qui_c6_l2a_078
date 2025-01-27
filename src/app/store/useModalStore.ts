import { create } from 'zustand';
import { SoftColors } from '../utils/info';

interface ModalState {
  isOpen: boolean;
  title: string;
  subtitle?: string;
  cardSubtitle?: string;
  content: string;  
  image1?: string;
  image2?: string;
  video?: string;
  tapeColor?: string;
  bgColor?: string;

  openModal: (params: {
      title: string;
      subtitle?: string;
      cardSubtitle?: string;
      content: string;      
      image1?: string;
      image2?: string;
      video?: string;
      tapeColor?: string;
      bgColor?: string;
  }) => void;
  closeModal: () => void;
  
}



export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  subtitle: '',
  cardSubtitle: '',
  content: '',
  imageThumb: '',
  image1: undefined,
  image2: undefined,
  video: undefined,
  tapeColor: undefined,
  bgColor: '',
  openModal: ({
      title,
      subtitle,
      cardSubtitle,
      content,      
      image1,
      image2,
      video,
      tapeColor,
      bgColor
  }) => set({
      isOpen: true,
      title,
      subtitle,
      cardSubtitle,
      content,      
      image1,
      image2,
      video,
      tapeColor,
      bgColor
  }),
  closeModal: () => set({
      isOpen: false,
      title: '',
      subtitle: '',
      cardSubtitle: '',
      content: '',      
      image1: undefined,
      image2: undefined,
      video: undefined,
      tapeColor: undefined,
      bgColor: ''
  }),
}));