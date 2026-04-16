import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useRouter } from "next/router";
import { getServicesFaq } from "../locales/servicesFaq";
import FintexAccordion from "./FintexAccordion";

const SimpleFaq = () => {
  const router = useRouter();
  const faqsData = getServicesFaq(router.locale);
  const [active, setActive] = useState(`event-0`);
  return (
    <Accordion defaultActiveKey={active} className="accordion">
      {faqsData.map((faq, i) => (
        <FintexAccordion
          key={i}
          active={active}
          onClick={() => setActive(`event-${i}`)}
          title={faq.title}
          body={faq.body}
          eventName={`event-${i}`}
        />
      ))}
    </Accordion>
  );
};
export default SimpleFaq;
