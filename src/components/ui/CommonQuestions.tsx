import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

interface CommonQuestionsInterface {
  title: string;
  text: string;
}

export const CommonQuestions = (props: CommonQuestionsInterface) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">{props.title}</AccordionTrigger>
        <AccordionContent className="text-graySecundary">{props.text}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
