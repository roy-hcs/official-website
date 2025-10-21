'use client';

import { FAQSection } from '@/components/sections/FAQSection';

export default function RrhCopyTradingPage() {
  const questions = [
    {
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
    },
    {
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
    },
    {
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
    },
    {
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
    },
    {
      question: 'How does PAMM fundamentally operate?',
      answer:
        'By adding your manager account to the CRM, you grant read and write permissions, enabling the CRM to dynamically sync trading accounts and tickets from the trading platform, and subsequently construct multi-dimensional models and create a systematic and visual management module.',
    },
  ];
  return (
    <div className="w-full h-full overflow-y-auto">
      <div>RrhCopyTradingPage</div>
      <FAQSection questions={questions} />
    </div>
  );
}
