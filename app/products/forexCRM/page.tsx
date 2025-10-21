'use client';

import { CRMIconOne } from '@/components/icons/CRMIconOne';
import { CRMIconThree } from '@/components/icons/CRMIconThree';
import { CRMIconTwo } from '@/components/icons/CRMIconTwo';
import { FAQSection } from '@/components/sections/FAQSection';
import { USPItem, USPSection } from '@/components/sections/USPSection';

export default function RrhForexCrmPage() {
  const USPs: USPItem[] = [
    {
      title: 'Self-define Marketing',
      description:
        'We aim to provide a self-defined, flexible and streamlined rebate system for brokerages.',
      Icon: <CRMIconOne />,
    },
    {
      title: 'Manage Customers',
      description:
        'Tools or modules to manage customers and their operations promptly and efficiently.',
      Icon: <CRMIconTwo />,
    },
    {
      title: 'Control Workflows',
      description:
        'Internal control modules to help you strengthen business stability and profitability.',
      Icon: <CRMIconThree />,
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
      <div>RrhForexCrmPage</div>
      <USPSection USPs={USPs} />
      <FAQSection questions={questions} />
    </div>
  );
}
