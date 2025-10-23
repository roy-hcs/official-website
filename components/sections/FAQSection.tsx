import { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Button } from '../ui/button';

const ContactUs = () => {
  return (
    <div
      className="rounded-xl md:p-8 p-4 flex flex-col justify-center items-center"
      style={{
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), #F5F5F5',
      }}
    >
      <h3 className="mb-2 text-[#0a0a0a] md:text-2xl text-xl font-bold">
        Still have questions
      </h3>
      <div className="mb-6 md:text-base text-sm text-center text-[#737373]">
        Have questions or need assistance? Our team is here to help!{' '}
      </div>
      <Button className="md:text-sm text-xs">Contact us</Button>
    </div>
  );
};
export const FAQSection = ({
  title,
  description,
  questions,
}: {
  title?: string;
  description?: ReactNode;
  questions: { question: string; answer: string }[];
}) => {
  return (
    <div>
      <div className="w-full md:w-[672px] mx-auto p-6">
        <h2 className="md:text-4xl text-3xl mb-5 text-[#0a0a0a] font-bold text-center">
          {title ? title : 'Frequently asked questions'}
        </h2>
        {description ? (
          description
        ) : (
          <div className="text-sm md:text-base text-[#737373] md:mb-12 mb-6 text-center">
            <span>
              We&apos;ve compiled the most important information to help you get
              the most out of your experience. Can&apos;t find what you&apos;re
              looking for?
            </span>
            <span className="text-[#171717] underline cursor-pointer">
              {' '}
              Contact us.
            </span>
          </div>
        )}
        <Accordion type="single" collapsible className="md:mb-12 mb-6">
          {questions.map((qa, index) => {
            return (
              <AccordionItem value={`item-${index}`} key={qa.question + index}>
                <AccordionTrigger className="md:text-base text-sm text-[#0a0a0a]">
                  {qa.question}
                </AccordionTrigger>
                <AccordionContent className="md:text-sm text-xs text-[#737373]">
                  {qa.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <ContactUs />
      </div>
    </div>
  );
};
