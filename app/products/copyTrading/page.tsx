'use client';

import { FAQSection } from '@/components/sections/FAQSection';

export default function RrhCopyTradingPage() {
  const questions = [
    {
      question: 'What is copy trading? How does it work?',
      answer:
        "Copy trading allows customers to automatically replicate the operations of experienced traders in real time. Customers select a trader and set the investment amount, and the system synchronizes the trades in their account, enhancing the activity and trading volume of the broker's platform.",
    },
    {
      question: 'How can customers choose suitable copy trading providers?',
      answer:
        "We provide a signal provider ranking list, displaying data such as the trader's win rate, maximum drawdown, and historical returns. Customers can find traders that match their risk preferences based on the trading performance of the traders.",
    },
    {
      question: 'Is there any risk in copy trading?',
      answer:
        'Copy trading carries market risks. Customers can reduce risks by setting custom stop-losses, adjusting copy trading ratios, or diversifying investments among multiple traders, thereby reducing complaints against the broker.',
    },
    {
      question: 'Which platforms support copy trading?',
      answer:
        'Our copy trading is compatible with MT4, MT5, and our proprietary platform, ensuring ultra-low latency (<1 second) execution and seamless integration with the existing account system, providing customers with an excellent experience.',
    },
    {
      question: 'What payment methods are available for copy traders?',
      answer:
        'Copy trading supports a variety of flexible revenue models, including subscription fees (fixed periodic charges), platform management fees (charged based on the proportion of managed funds), and signal provider performance fees (split based on actual profits). All fee structures are fully transparent and disclosed to customers before they start copying, ensuring the establishment of long-term trust and promoting continuous customer participation in trading.',
    },
    {
      question: 'Do customers need to switch platforms for copy trading?',
      answer:
        'Not at all. Customers can complete all copy trading operations directly through the CRM user interface, including selecting traders, adjusting copy trading parameters, and setting risk preferences. The process is simple and smooth, eliminating the need to switch between multiple platforms, saving time and enhancing user experience, making copy trading more efficient and convenient.',
    },
    {
      question: 'What types of copy trading are supported?',
      answer:
        'It supports various copy trading methods, including copying by multiple factors, copying by fixed lots, and copying by net value ratio, meeting the investment needs of different customers, enhancing flexibility and user satisfaction.',
    },
  ];
  return (
    <div className="w-full h-full overflow-y-auto">
      <div>RrhCopyTradingPage</div>
      <FAQSection questions={questions} />
    </div>
  );
}
