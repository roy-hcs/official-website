'use client';

import { PAMMIconConnector } from '@/components/icons/PAMMIconConnector';
import { PAMMIconFour } from '@/components/icons/PAMMIconFour';
import { PAMMIconOne } from '@/components/icons/PAMMIconOne';
import { PAMMIconThree } from '@/components/icons/PAMMIconThree';
import { PAMMIconTwo } from '@/components/icons/PAMMIconTwo';
import { FAQSection } from '@/components/sections/FAQSection';
import { USPItem, USPSection } from '@/components/sections/USPSection';

export default function RrhPammPage() {
  const USPs: USPItem[] = [
    {
      title: 'Investor deposits funds and selects investment manager',
      Icon: <PAMMIconOne />,
    },
    {
      title: 'Funds pooled into shared account',
      Icon: <PAMMIconTwo />,
    },
    {
      title: 'Investment manager executes trades',
      Icon: <PAMMIconThree />,
    },
    {
      title:
        'Profits and losses automatically allocated according to investment ratio',
      Icon: <PAMMIconFour />,
    },
  ];
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
      <div>RrhPammPage</div>
      <USPSection USPs={USPs} connector={<PAMMIconConnector />} />
      <FAQSection questions={questions} />
    </div>
  );
}
