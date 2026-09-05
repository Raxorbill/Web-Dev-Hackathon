import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, ArrowRight, Phone, Sparkles, RefreshCw } from 'lucide-react';

interface HeavenConciergeProps {
  onRequestConsultation: (space?: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'concierge' | 'user';
  text: string;
  quickActions?: string[];
  showConsultationCta?: boolean;
  ctaLabel?: string;
  ctaSpace?: string;
  timestamp?: string;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'msg-initial',
  sender: 'concierge',
  text: "Welcome to Heaven.\n\nI'm here to help you explore our furniture, bespoke designs, and consultation services.\n\nWhat are you looking for today?",
  quickActions: [
    'EXPLORE FURNITURE',
    'CUSTOM DESIGN',
    'VISIT SHOWROOM',
    'REQUEST CONSULTATION',
    'CONTACT US'
  ]
};

// Check if string contains Bengali script or common Banglish words
function isBanglaOrBanglish(text: string): boolean {
  const banglaRegex = /[\u0980-\u09FF]/;
  if (banglaRegex.test(text)) return true;

  const banglishKeywords = [
    'kemon', 'apnader', 'kothay', 'thikana', 'koto', 'dam', 'dami', 'banate',
    'chai', 'lagbe', 'valo', 'bhalo', 'khub', 'shoroom', 'beshi', 'kom'
  ];
  const lower = text.toLowerCase();
  return banglishKeywords.some((keyword) => lower.includes(keyword));
}

// Concierge response engine adhering strictly to Quiet Luxury rules
function generateConciergeResponse(userInput: string): {
  text: string;
  quickActions?: string[];
  showConsultationCta?: boolean;
  ctaLabel?: string;
  ctaSpace?: string;
} {
  const text = userInput.trim().toLowerCase();
  const isBn = isBanglaOrBanglish(userInput);

  // 1. GREETINGS
  if (
    /^(hi|hello|hey|good morning|good afternoon|good evening|salaam|assalamu alaikum|asalam|হ্যালো|হাই|সালাম|নমস্কার)/i.test(
      text
    )
  ) {
    if (isBn) {
      return {
        text: 'আসসালামু আলাইকুম। Heaven Furniture Mart-এ আপনাকে স্বাগতম।\n\nআপনি কি কোনো নির্দিষ্ট রুমের জন্য ফার্নিচার খুঁজছেন নাকি সম্পূর্ণ কাস্টমাইজড কোনো ডিজাইনের পরিকল্পনা করছেন?',
        quickActions: ['Living Room', 'Bedroom', 'Dining', 'Request Consultation']
      };
    }
    return {
      text: 'Hello. Welcome to Heaven Furniture Mart.\n\nWhether you are looking to furnish a specific room or exploring bespoke pieces crafted for your home, I am here to assist.\n\nWhat kind of space are you planning to furnish?',
      quickActions: ['Living Room', 'Bedroom', 'Dining', 'Custom Design']
    };
  }

  // 2. LIVING ROOM FLOW
  if (
    /living|sofa|couch|coffee table|tv unit|cabinet|sectional|সোফা|লিভিং/i.test(text)
  ) {
    if (isBn) {
      return {
        text: 'Heaven Furniture Mart-এ luxury sofa, sectional sofa set, architectural coffee table এবং tailored TV unit তৈরি করা হয়।\n\nআপনি কি কোনো ready furniture খুঁজছেন নাকি আপনার room-এর মাপ অনুযায়ী custom-designed কিছু চাচ্ছেন?',
        quickActions: ['Custom Living Design', 'Request Consultation', 'Visit Showroom'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →',
        ctaSpace: 'Living Room'
      };
    }
    return {
      text: 'Heaven Furniture Mart offers bespoke living room furniture, including luxury sofas, sectional sofa sets, architectural coffee tables, TV units, and storage cabinets.\n\nAre you looking for a ready furniture piece or something designed specifically for your space?',
      quickActions: ['Custom Living Design', 'Request Consultation', 'Visit Showroom'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →',
      ctaSpace: 'Living Room'
    };
  }

  // 3. BEDROOM FLOW
  if (/bedroom|bed|wardrobe|dressing table|bedside|বেডরুম|খাট|বেড/i.test(text)) {
    if (isBn) {
      return {
        text: 'Heaven Furniture Mart-এ bedroom-এর জন্য luxury bed, wardrobe, dressing table এবং bedside furniture তৈরি করা হয়।\n\nআপনি কি আপনার বেডরুমের জন্য একটি custom design দেখতে চান?',
        quickActions: ['Custom Bedroom Design', 'Request Consultation', 'Explore Spaces'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →',
        ctaSpace: 'Master Bedroom'
      };
    }
    return {
      text: 'Heaven Furniture Mart offers bedroom furniture such as luxury beds, wardrobes, dressing tables, and bedside furniture.\n\nWould you like to explore a custom design for your bedroom?',
      quickActions: ['Custom Bedroom Design', 'Request Consultation', 'Explore Spaces'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →',
      ctaSpace: 'Master Bedroom'
    };
  }

  // 4. DINING FLOW
  if (/dining|dining table|dining set|dining chair|ডাইনিং|চেয়ার|টেবিল/i.test(text)) {
    if (isBn) {
      return {
        text: 'আমাদের dining collection-এ রয়েছে bespoke dining table, dining set এবং ergonomic dining chair।\n\nআপনি কি নতুন কোনো dining space ডিজাইন করছেন নাকি বর্তমান space আপডেট করছেন?',
        quickActions: ['New Dining Space', 'Request Consultation', 'Visit Showroom'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →',
        ctaSpace: 'Dining Hall'
      };
    }
    return {
      text: 'Heaven Furniture Mart offers dining furniture including dining tables, dining sets, and dining chairs crafted for comfort and enduring gatherings.\n\nAre you designing a new dining space or updating an existing one?',
      quickActions: ['New Dining Space', 'Request Consultation', 'Visit Showroom'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →',
      ctaSpace: 'Dining Hall'
    };
  }

  // 5. OFFICE FLOW
  if (/office|workspace|study|desk|workstation|bookshelf|অফিস|ডেস্ক|ওয়ার্কস্পেস/i.test(text)) {
    if (isBn) {
      return {
        text: 'Heaven Furniture Mart-এ executive table, workstation, office desk এবং bookshelf প্রস্তুত করা হয়।\n\nএটি কি আপনার home workspace-এর জন্য নাকি professional corporate office-এর জন্য?',
        quickActions: ['Home Workspace', 'Corporate Office', 'Request Consultation'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →',
        ctaSpace: 'Executive Office'
      };
    }
    return {
      text: 'Our office and study collection features executive tables, workstations, office desks, and architectural bookshelves.\n\nIs this for a home workspace or a professional office?',
      quickActions: ['Home Workspace', 'Corporate Office', 'Request Consultation'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →',
      ctaSpace: 'Executive Office'
    };
  }

  // 6. BESPOKE / CUSTOM FURNITURE FLOW
  if (
    /custom|bespoke|made-to-measure|customize|customized|tailor|personalized|made to order|বানাতে চাই|কাস্টম/i.test(
      text
    )
  ) {
    if (isBn) {
      return {
        text: 'অবশ্যই। Heaven Furniture Mart-এ আপনার space, lifestyle, এবং personal taste অনুযায়ী bespoke furniture তৈরি করা যায়।\n\nআমাদের প্রক্রিয়া শুরু হয় আপনার প্রয়োজন ও স্পেস আলোচনা দিয়ে, এরপর design consultation, নিখুঁত crafting এবং সরাসরি delivery ও installation।\n\nআপনি কোন ধরনের space-এর জন্য furniture খুঁজছেন—living room, bedroom নাকি dining?',
        quickActions: ['Living Room', 'Bedroom', 'Dining', 'Request Consultation'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →'
      };
    }
    return {
      text: 'Yes — Heaven Furniture Mart specializes in bespoke furniture.\n\nYour furniture can be designed around your space, lifestyle, and personal taste.\n\nOur bespoke journey includes understanding your needs, in-depth design consultation, custom planning, artisanal crafting, and white-glove delivery and installation.\n\nWould you like to tell me what kind of space you are furnishing?',
      quickActions: ['Living Room', 'Bedroom', 'Dining', 'Request Consultation'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →'
    };
  }

  // 7. DESIGN CONSULTATION FLOW
  if (
    /consultation|free consultation|advice|help designing|free design|পরামর্শ|কনসালটেশন/i.test(
      text
    )
  ) {
    if (isBn) {
      return {
        text: 'Heaven Furniture Mart একটি ফ্রি ডিজাইন কনসালটেশন (Free Design Consultation) অফার করে।\n\nআপনি আপনার রুমের মাপ, পছন্দের স্টাইল এবং প্রয়োজন নিয়ে সরাসরি আমাদের ডিজাইন টিমের সাথে আলোচনা করতে পারেন।\n\nপ্রতিটি স্পেসের নিজস্ব বৈশিষ্ট্য রয়েছে। আপনার স্পেস সম্পর্কে জানালে আমাদের টিম উপযুক্ত ফার্নিচার নির্বাচনে সহায়তা করবে।',
        quickActions: ['Request Consultation', 'Visit Showroom', 'Call +880 1960-481983'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →'
      };
    }
    return {
      text: 'Heaven Furniture Mart offers a Free Design Consultation.\n\nYou can discuss your space, furniture requirements, preferred style, measurements, and personal preferences directly with our design specialists.\n\nEvery space has its own character. Tell us a little about yours, and our team can help you explore furniture designed around it.',
      quickActions: ['Request Consultation', 'Visit Showroom', 'Contact Concierge'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →'
    };
  }

  // 8. MATERIALS FLOW
  if (/material|wood|quality|premium material|what is .* made from|fabric|কাঠ|মেটেরিয়াল/i.test(text)) {
    if (isBn) {
      return {
        text: 'Heaven Furniture Mart প্রিমিয়াম মেটেরিয়াল, মান এবং নিপুণ কারুকার্যের উপর সর্বোচ্চ গুরুত্ব দেয়।\n\nনির্দিষ্ট ফার্নিচারের ডিজাইন ও রিকোয়ারমেন্টের উপর ভিত্তি করে মেটেরিয়াল নির্ধারণ করা হয়। আমাদের টিম কনসালটেশনের সময় এ বিষয়ে বিস্তারিত তথ্য প্রদান করবে।',
        quickActions: ['Request Consultation', 'Craftsmanship', 'Contact Us'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →'
      };
    }
    return {
      text: 'Heaven Furniture Mart focuses on premium materials, enduring quality, and skilled craftsmanship.\n\nThe materials can depend on the specific furniture design and requirements. Our team can provide more detailed information during your consultation.',
      quickActions: ['Request Consultation', 'Skilled Craftsmanship', 'Contact Us'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →'
    };
  }

  // 9. CRAFTSMANSHIP FLOW
  if (/craft|craftsmanship|handmade|how is furniture made|construction|বানানো/i.test(text)) {
    if (isBn) {
      return {
        text: 'Heaven Furniture Mart নিপুণ কারুশিল্প, উচ্চমান এবং সূক্ষ্ম ডিটেইলিং-এর সমন্বয়ে আসবাবপত্র তৈরি করে। প্রতিটি আসবাবপত্র গ্রাহকের ব্যক্তিগত পছন্দ ও প্রয়োজন অনুযায়ী যত্নের সাথে প্রস্তুত করা হয়।',
        quickActions: ['Request Consultation', 'Bespoke Experience', 'Visit Showroom'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →'
      };
    }
    return {
      text: 'Heaven Furniture Mart emphasizes skilled craftsmanship, furniture quality, and thoughtful attention to detail.\n\nEvery piece is crafted around individual requirements to ensure timeless design and lasting comfort.',
      quickActions: ['Request Consultation', 'Bespoke Experience', 'Visit Showroom'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →'
    };
  }

  // 10. SHOWROOM / LOCATION FLOW
  if (/showroom|visit|location|where are you|address|store|শোরুম|কোথায়|ঠিকানা/i.test(text)) {
    if (isBn) {
      return {
        text: 'আপনি Heaven Furniture Mart-এর শোরুম ভিজিট করতে পারেন:\n\nAgrabad Access Road,\nChattogram, Bangladesh.\n\nআসার পূর্বে কোনো দিকনির্দেশনা বা সর্বশেষ তথ্যের জন্য আমাদের টিমের সাথে যোগাযোগ করতে পারেন।',
        quickActions: ['Call +880 1960-481983', 'Request Consultation', 'Explore Furniture']
      };
    }
    return {
      text: 'You can visit Heaven Furniture Mart at Agrabad Access Road, Chattogram, Bangladesh.\n\nIf you would like directions or have questions prior to visiting, please feel free to contact our team for the latest details.',
      quickActions: ['Call +880 1960-481983', 'Request Consultation', 'Explore Furniture']
    };
  }

  // 11. CONTACT / PHONE / WHATSAPP FLOW
  if (/contact|phone|call|whatsapp|reach|talk to someone|যোগাযোগ|ফোন|নাম্বার/i.test(text)) {
    if (isBn) {
      return {
        text: 'আপনি সরাসরি Heaven Furniture Mart-এ যোগাযোগ করতে পারেন:\n\nফোন: +880 1960-481983\n\nআমাদের টিম যেকোনো তথ্য, ডিজাইন কনসালটেশন বা অ্যাপয়েন্টমেন্টে আপনাকে সহায়তা করতে আনন্দিত হবে।',
        quickActions: ['Request Consultation', 'Visit Showroom', 'Explore Furniture']
      };
    }
    return {
      text: 'You can contact Heaven Furniture Mart at:\n\nPhone: +880 1960-481983\n\nOur team is available to assist you with inquiries, bespoke orders, and showroom consultations.',
      quickActions: ['Request Consultation', 'Visit Showroom', 'Explore Furniture']
    };
  }

  // 12. DELIVERY & INSTALLATION FLOW
  if (/delivery|shipping|installation|setup|deliver|ডেলিভারি|ফিটিংস/i.test(text)) {
    if (isBn) {
      return {
        text: 'Heaven Furniture Mart গ্রাহকদের জন্য delivery এবং installation সহায়তা প্রদান করে থাকে।\n\nলোকেশনভেদে ডেলিভারির প্রাপ্যতা নির্ভর করতে পারে। আপনার নির্দিষ্ট এলাকার তথ্যের জন্য আমাদের টিমের সাথে যোগাযোগ করতে পারেন।',
        quickActions: ['Contact Us', 'Request Consultation', 'Visit Showroom']
      };
    }
    return {
      text: 'Heaven Furniture Mart provides delivery and installation support.\n\nDelivery availability can depend on the location. Please contact the team for the latest details regarding your area.',
      quickActions: ['Contact Us', 'Request Consultation', 'Visit Showroom']
    };
  }

  // 13. PAYMENT FLOW
  if (/payment|installment|pay later|payment options|pay|পেমেন্ট|কিস্তি/i.test(text)) {
    if (isBn) {
      return {
        text: 'সহজ পেমেন্ট সুবিধা (Easy payment options) রয়েছে।\n\nঅর্ডারের ধরনের উপর ভিত্তি করে পেমেন্ট অপশন প্রযোজ্য হয়। Heaven Furniture Mart-এর টিম আলোচনা বা কনসালটেশনের সময় বিস্তারিত তথ্য প্রদান করতে পারবে।',
        quickActions: ['Request Consultation', 'Contact Us'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →'
      };
    }
    return {
      text: 'Easy payment options are available.\n\nPayment options may depend on the order. The Heaven Furniture Mart team can provide the latest details during your design discussion.',
      quickActions: ['Request Consultation', 'Contact Us'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →'
    };
  }

  // 14. PRICING / COST / QUOTATION FLOW
  if (/price|cost|how much|budget|quotation|rate|দাম|খরচ|প্রাইস/i.test(text)) {
    if (isBn) {
      return {
        text: 'যেহেতু বেশিরভাগ আসবাবপত্র কাস্টমাইজ করা যায়, তাই ডিজাইন, ডাইমেনশন, মেটেরিয়াল এবং স্পেসিফিকেশনের উপর মূল্য নির্ভর করে।\n\nআপনার স্পেসের উপযোগী সঠিক কোটেশন পাওয়ার সবচেয়ে ভালো উপায় হলো একটি কনসালটেশন রিকোয়েস্ট করা অথবা আমাদের টিমের সাথে যোগাযোগ করা।',
        quickActions: ['Request Consultation', 'Call +880 1960-481983', 'Visit Showroom'],
        showConsultationCta: true,
        ctaLabel: 'REQUEST A CONSULTATION →'
      };
    }
    return {
      text: 'Because many pieces can be customized, pricing can depend on the design, dimensions, materials, and requirements.\n\nThe best next step is to request a consultation or contact the team for a quotation.',
      quickActions: ['Request Consultation', 'Call +880 1960-481983', 'Visit Showroom'],
      showConsultationCta: true,
      ctaLabel: 'REQUEST A CONSULTATION →'
    };
  }

  // 15. EXPLORE FURNITURE DIRECT ACTION
  if (/explore furniture|explore spaces|দেখতে চাই/i.test(text)) {
    if (isBn) {
      return {
        text: 'Heaven Furniture Mart লিভিং, বেডরুম, ডাইনিং এবং অফিস স্পেসের জন্য এক্সক্লুসিভ ফার্নিচার অফার করে। প্রতিটি ক্যাটাগরিই আপনার স্পেস অনুযায়ী কাস্টমাইজড হতে পারে।\n\nআপনি কোন স্পেসটি এক্সপ্লোর করতে চান?',
        quickActions: ['Living Room', 'Bedroom', 'Dining', 'Executive Office']
      };
    }
    return {
      text: 'Heaven Furniture Mart offers curated collections across Living Room, Bedroom, Dining, and Executive Office spaces. Every piece can be customized to your architectural layout.\n\nWhich space would you like to explore?',
      quickActions: ['Living Room', 'Bedroom', 'Dining', 'Executive Office']
    };
  }

  // 16. OUT-OF-SCOPE / REDIRECT
  if (isBn) {
    return {
      text: 'আমি Heaven Furniture Mart, আসবাবপত্র, bespoke ডিজাইন, শোরুমের তথ্য এবং কনসালটেশনের বিষয়ে সহায়তা করার জন্য প্রস্তুত। আপনার স্পেস বা ফার্নিচার সম্পর্কিত কীভাবে সহায়তা করতে পারি?',
      quickActions: ['EXPLORE FURNITURE', 'CUSTOM DESIGN', 'VISIT SHOWROOM', 'REQUEST CONSULTATION']
    };
  }
  return {
    text: "I'm designed to help with Heaven Furniture Mart, including furniture, bespoke designs, showroom information, and consultations. How can I help you with your space?",
    quickActions: ['EXPLORE FURNITURE', 'CUSTOM DESIGN', 'VISIT SHOWROOM', 'REQUEST CONSULTATION']
  };
}

export const HeavenConcierge: React.FC<HeavenConciergeProps> = ({ onRequestConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll inside chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate quiet luxury cadence (deliberate, calm response timing)
    setTimeout(() => {
      const response = generateConciergeResponse(query);
      const assistantMessage: ChatMessage = {
        id: `concierge-${Date.now()}`,
        sender: 'concierge',
        text: response.text,
        quickActions: response.quickActions,
        showConsultationCta: response.showConsultationCta,
        ctaLabel: response.ctaLabel,
        ctaSpace: response.ctaSpace
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleQuickAction = (action: string) => {
    if (action === 'REQUEST CONSULTATION' || action === 'Request Consultation') {
      onRequestConsultation('Bespoke Commission');
      return;
    }

    if (action === 'EXPLORE FURNITURE' || action === 'Explore Furniture') {
      const el = document.getElementById('spaces');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      handleSendMessage('I would like to explore your furniture collections');
      return;
    }

    if (action === 'CUSTOM DESIGN' || action === 'Custom Design') {
      handleSendMessage('Tell me about your custom and bespoke furniture process');
      return;
    }

    if (action === 'VISIT SHOWROOM' || action === 'Visit Showroom') {
      handleSendMessage('Where is your showroom located?');
      return;
    }

    if (action === 'CONTACT US' || action === 'Contact Concierge') {
      handleSendMessage('How can I contact Heaven Furniture Mart?');
      return;
    }

    // Default trigger user message
    handleSendMessage(action);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <div id="heaven-concierge-root" className="fixed z-50 bottom-6 right-6 pointer-events-auto">
      {/* Concierge Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="heaven-concierge-panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-[calc(100vw-2rem)] sm:w-[390px] h-[580px] max-h-[82vh] bg-[#102021] text-[#F4EFE6] border border-[#23393B] shadow-2xl flex flex-col overflow-hidden mb-3"
            style={{
              boxShadow: '0 24px 64px -12px rgba(0, 0, 0, 0.65), 0 0 1px 1px rgba(167, 131, 74, 0.2)'
            }}
          >
            {/* Header: Quiet Luxury Style */}
            <div className="relative px-5 py-4 bg-[#0B1617] border-b border-[#23393B] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none border border-[#A7834A]/50 bg-[#102021] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#A7834A]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-cinzel text-sm font-semibold tracking-[0.2em] text-[#F4EFE6]">
                      HEAVEN
                    </span>
                    <span className="font-cinzel text-xs font-light tracking-[0.25em] text-[#A7834A]">
                      CONCIERGE
                    </span>
                  </div>
                  <p className="text-[10px] text-[#F4EFE6]/60 font-sans-modern font-light tracking-wide">
                    Here to help you find your space.
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  aria-label="Restart chat"
                  className="p-1.5 text-[#F4EFE6]/50 hover:text-[#A7834A] transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close concierge"
                  aria-label="Close concierge window"
                  className="p-1.5 text-[#F4EFE6]/50 hover:text-[#F4EFE6] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A7834A] to-transparent" />
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#102021]/90">
              {messages.map((msg) => {
                const isAssistant = msg.sender === 'concierge';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
                  >
                    {/* Message Bubble */}
                    <div
                      className={`max-w-[88%] text-xs leading-relaxed font-sans-modern font-light ${
                        isAssistant
                          ? 'bg-[#14282A] text-[#F4EFE6] border border-[#23393B] p-3.5 rounded-none shadow-sm'
                          : 'bg-[#F4EFE6] text-[#102021] font-normal p-3 rounded-none shadow-sm'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>

                      {/* Optional Primary Lead Conversion Action */}
                      {msg.showConsultationCta && (
                        <div className="mt-3 pt-2.5 border-t border-[#23393B]">
                          <button
                            onClick={() => {
                              onRequestConsultation(msg.ctaSpace || 'Bespoke Commission');
                            }}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#A7834A] hover:bg-[#BFA06A] text-[#102021] text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer shadow"
                          >
                            <span>{msg.ctaLabel || 'REQUEST A CONSULTATION →'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Quick Action Pills Attached to Assistant Response */}
                    {isAssistant && msg.quickActions && msg.quickActions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                        {msg.quickActions.map((action) => (
                          <button
                            key={action}
                            onClick={() => handleQuickAction(action)}
                            className="text-[10px] uppercase tracking-wider font-sans-modern px-2.5 py-1 bg-[#14282A]/70 hover:bg-[#1C3437] text-[#E5DDCF]/80 hover:text-[#A7834A] border border-[#23393B] hover:border-[#A7834A]/60 transition-all cursor-pointer"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1.5 px-3 py-2 bg-[#14282A] border border-[#23393B] w-fit text-[11px] text-[#A7834A] font-sans-modern font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A7834A] animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A7834A] animate-pulse delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A7834A] animate-pulse delay-200" />
                  <span className="ml-1 text-[10px] uppercase tracking-widest text-[#F4EFE6]/50">
                    Consulting atelier...
                  </span>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Contact Bar */}
            <div className="px-4 py-2 bg-[#0B1617]/70 border-t border-[#23393B]/70 flex items-center justify-between text-[10px] text-[#F4EFE6]/60 font-sans-modern">
              <span className="font-light">Agrabad Access Rd, Chattogram</span>
              <a
                href="tel:+8801960481983"
                className="inline-flex items-center gap-1 text-[#A7834A] hover:underline"
              >
                <Phone className="w-2.5 h-2.5" />
                <span>+880 1960-481983</span>
              </a>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#0E1B1C] border-t border-[#23393B] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about custom furniture, showroom..."
                className="flex-1 bg-[#14282A] text-[#F4EFE6] placeholder-[#F4EFE6]/40 text-xs px-3 py-2.5 border border-[#23393B] focus:border-[#A7834A] focus:outline-none transition-colors font-sans-modern font-light"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                title="Send inquiry"
                aria-label="Send message to concierge"
                className="w-9 h-9 flex items-center justify-center bg-[#A7834A] hover:bg-[#BFA06A] disabled:opacity-40 disabled:hover:bg-[#A7834A] text-[#102021] transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Concierge Trigger Button */}
      {!isOpen && (
        <motion.button
          id="open-heaven-concierge-btn"
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          title="Open Heaven Concierge"
          aria-label="Open Heaven Concierge assistant"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#102021] hover:bg-[#14282A] text-[#F4EFE6] border border-[#A7834A]/80 shadow-2xl backdrop-blur-md transition-all cursor-pointer"
          style={{
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5), 0 0 15px 1px rgba(167, 131, 74, 0.25)'
          }}
        >
          {/* Subtle gold indicator beacon */}
          <div className="relative w-4 h-4 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-[#A7834A]" />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#A7834A] animate-ping" />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#A7834A]" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[11px] font-cinzel tracking-[0.18em] text-[#F4EFE6] font-medium leading-none">
              HEAVEN CONCIERGE
            </span>
            <span className="text-[9px] font-sans-modern tracking-wider text-[#A7834A] uppercase mt-0.5">
              Need guidance?
            </span>
          </div>
        </motion.button>
      )}
    </div>
  );
};
