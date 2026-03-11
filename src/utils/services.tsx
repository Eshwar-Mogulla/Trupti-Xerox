import { JSX } from 'react'
import {
  FiCopy,
  FiPrinter,
  FiCreditCard,
  FiUser,
  FiClipboard,
  FiCamera,
  FiHome,
  FiSend,
  FiFileText,
  FiUserCheck,
  FiHeart,
} from 'react-icons/fi'

export interface Service {
  id: string
  title: string
  shortDesc: string
  fullDesc: string
  icon: JSX.Element
  image?: string
  processingTime: string
  charges?: string[]
  documents: string[]
  faq: Array<{
    question: string
    answer: string
  }>
}

export const services: Service[] = [
  {
    id: 'xerox',
    title: 'Xerox Services',
    shortDesc: 'High-quality document copying and printing',
    fullDesc:
      'Professional xeroxing services with high-quality output. We offer both black & white and color copying with competitive rates and quick turnaround times.',
    icon: <FiCopy />,
    image: '/xerox.webp',
    processingTime: '5-10 minutes',
    charges: ['₹1-2 per B&W page', '₹5-10 per color page'],
    documents: ['Original document to be photocopied'],
    faq: [
      {
        question: 'What sizes of copies do you support?',
        answer: 'We support all standard sizes: A4, A3, B4, and more.',
      },
      {
        question: 'Is color copying available?',
        answer: 'Yes, we offer both B&W and color copying at competitive rates.',
      },
    ],
  },
  {
    id: 'color-print',
    title: 'Colour Print',
    shortDesc: 'Professional color printing services',
    fullDesc:
      'High-resolution color printing perfect for brochures, flyers, posters, and promotional materials. We use premium quality paper and inks.',
    icon: <FiPrinter />,
    image: '/color-Xerox.webp',
    processingTime: '2-3 business days',
    charges: ['₹5-15 per print depending on size'],
    documents: ['Digital file (PDF, JPG, PNG)', 'Specifications and quantity needed'],
    faq: [
      {
        question: 'What file formats are accepted?',
        answer: 'We accept PDF, JPG, PNG, and other common formats. Files should be high-resolution (300 DPI or higher).',
      },
      {
        question: 'Can you design my promotional material?',
        answer: 'Yes, we offer basic design services. Please contact us for custom requirements.',
      },
    ],
  },
  {
    id: 'pan-card',
    title: 'PAN Card',
    shortDesc: 'Pan card application and assistance',
    fullDesc:
      'Complete assistance with PAN card application including form filling, verification, and submission to Income Tax Department.',
    icon: <FiCreditCard />,
    image: '/pan-card.webp',
    processingTime: '7-10 business days',
    charges: ['₹100-150 service fee'],
    documents: ['Aadhar card', 'Passport/Voter ID/Driving License', 'Address Proof', 'Photograph'],
    faq: [
      {
        question: 'How long does PAN card take to arrive?',
        answer: 'Usually 7-10 business days after approval from Income Tax Department.',
      },
      {
        question: 'Do I need to be physically present?',
        answer: 'Yes, you need to be present for verification and signature.',
      },
    ],
  },
  {
    id: 'aadhar-update',
    title: 'Aadhar Update',
    shortDesc: 'Aadhar card address and data updates',
    fullDesc:
      'We assist with updating your Aadhar card information including address changes, demographic data updates, and corrections.',
    icon: <FiUser />,
    image: '/Aadhar.png',
    processingTime: '5-7 business days',
    charges: ['₹50-100 service fee'],
    documents: ['Current Aadhar card', 'New address proof', 'Identification document'],
    faq: [
      {
        question: 'Can I update my address online?',
        answer: 'Yes, but we can guide you through the process or do it for you.',
      },
      {
        question: 'What if I need to update my name?',
        answer: 'Name changes require additional documents like a marriage certificate or gazette notification.',
      },
    ],
  },
  {
    id: 'lamination',
    title: 'Lamination',
    shortDesc: 'Document and photo lamination services',
    fullDesc:
      'Professional lamination service to protect your important documents. We offer various thicknesses and finishes - matte, glossy, and semi-gloss.',
    icon: <FiClipboard />,
    image: '/lamination.jpg',
    processingTime: '15-30 minutes',
    charges: ['₹5-20 per document depending on size'],
    documents: ['Document or photo to be laminated'],
    faq: [
      {
        question: 'What is the thickest lamination available?',
        answer: 'We offer lamination from 100 micron (thin) up to 250 micron (heavy-duty).',
      },
      {
        question: 'Can certificates be laminated?',
        answer: 'Yes, we regularly laminate certificates and important documents.',
      },
    ],
  },
  {
    id: 'passport-photo',
    title: 'Passport Photo',
    shortDesc: 'Professional passport-sized photographs',
    fullDesc:
      'Studio-quality passport photographs meeting international standards. We ensure proper size, background, and formatting per government requirements.',
    icon: <FiCamera />,
    image: '/passport.jpg',
    processingTime: '10-15 minutes',
    charges: ['₹50-100 for 12 copies'],
    documents: ['Your presence for photo'],
    faq: [
      {
        question: 'What are the passport photo specifications?',
        answer: '4x6 cm, white/off-white background, full face visible, neutral expression, recent photo.',
      },
      {
        question: 'Can I edit the photos?',
        answer: 'We provide minimal professional touch-ups ensuring compliance with passport standards.',
      },
    ],
  },
  {
    id: 'banking-services',
    title: 'Banking Services',
    shortDesc: 'Assistance with banking operations',
    fullDesc:
      'We help you with various banking services including account opening, document verification, and forms submission.',
    icon: <FiHome />,
    image: '/Bank-services.jpg',
    processingTime: 'Varies',
    charges: ['₹50-200 depending on service'],
    documents: ['Identification and address proof', 'Bank-specific documents as required'],
    faq: [
      {
        question: 'Which banks do you assist with?',
        answer: 'We assist with all major banks in India including SBI, ICICI, HDFC, and others.',
      },
      {
        question: 'Do you help with account opening?',
        answer: 'Yes, we assist with form filling and documentation for account opening.',
      },
    ],
  },
  {
    id: 'money-transfer',
    title: 'Money Transfer',
    shortDesc: 'Domestic and international money transfer',
    fullDesc:
      'Fast and secure money transfer services for domestic and international transactions. Competitive rates with minimal processing time.',
    icon: <FiSend />,
    image: '/money-tranfer.webp',
    processingTime: 'Real-time to 2 business days',
    charges: ['Varies by amount and destination'],
    documents: ['Sender ID proof', 'Recipient details', 'Purpose of transfer'],
    faq: [
      {
        question: 'What is the maximum amount I can transfer?',
        answer: 'Limits vary based on compliance requirements and partner networks.',
      },
      {
        question: 'Are international transfers available?',
        answer: 'Yes, we offer international money transfer via partner networks.',
      },
    ],
  },
  {
    id: 'rent-agreement',
    title: 'Rent Agreement',
    shortDesc: 'Professional rent deed preparation and registration',
    fullDesc:
      'Complete assistance in drafting, notarization, and registration of rent agreements. Ensures legal compliance and protection for both parties.',
    icon: <FiFileText />,
    image: '/rent-agreement.webp',
    processingTime: '3-5 business days',
    charges: ['₹500-1500 depending on complexity'],
    documents: ['Landlord and tenant ID proofs', 'Property documents', 'Address proof'],
    faq: [
      {
        question: 'Is registration mandatory?',
        answer: 'Registration is recommended for legal protection and tax compliance purposes.',
      },
      {
        question: 'How long is a rent agreement valid?',
        answer: 'Standard rent agreements are valid for 11 months, as per Indian law.',
      },
    ],
  },
  {
    id: 'e-shram',
    title: 'E-Shram Card',
    shortDesc: 'E-Shram card registration and assistance',
    fullDesc:
      'Assistance with E-Shram card registration for unorganized workers. Provides social security benefits and accident insurance.',
    icon: <FiUserCheck />,
    image: 'E-shram-Card.webp',
    processingTime: '2-3 days',
    charges: ['₹50-100 service fee'],
    documents: ['Aadhar card', 'Bank account details', 'Mobile number'],
    faq: [
      {
        question: 'Who is eligible for E-Shram card?',
        answer: 'Unorganized workers with annual income less than ₹2 lakh are eligible.',
      },
      {
        question: 'What benefits does E-Shram provide?',
        answer: 'E-Shram provides accident insurance cover of ₹2 lakh and access to government schemes.',
      },
    ],
  },
  {
    id: 'ayushman-card',
    title: 'Ayushman Card',
    shortDesc: 'Ayushman Bharat health insurance registration',
    fullDesc:
      'Complete assistance with Ayushman Bharat - PM-JAY scheme registration. Provides free health insurance coverage up to ₹5 lakh.',
    icon: <FiHeart />,
    image: 'ayushman-card.jpg',
    processingTime: '3-5 business days',
    charges: ['₹50-100 service fee'],
    documents: ['Aadhar card', 'Ration card or address proof', 'Family income certificate'],
    faq: [
      {
        question: 'How much health coverage does Ayushman provide?',
        answer: 'Up to ₹5 lakh per family per year for hospitalization and treatment.',
      },
      {
        question: 'Which hospitals accept Ayushman card?',
        answer: 'All empaneled hospitals in the PMJAY network accept the card.',
      },
    ],
  },
]
