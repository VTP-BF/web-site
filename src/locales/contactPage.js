export function getContactContent(locale) {
  const en = locale === "en";
  return {
    bannerTitle: en ? "Contact" : "Contact",
    infoImageAlt: en
      ? "Contact — Visionary Tech Partners"
      : "Contact — Visionary Tech Partners",
    infoSub: en ? "Get in touch" : "Nous contacter",
    infoTitle: en
      ? "Ready to work together? Contact VTP"
      : "Prêts à travailler ensemble ? Contactez VTP",
    addressHeading: en ? "Addresses" : "Adresses",
    addressLines: en
      ? ["Ouagadougou, Burkina Faso", "Washington, D.C., United States"]
      : ["Ouagadougou, Burkina Faso", "Washington, D.C., États-Unis"],
    emailLabel: en ? "Email" : "E-mail",
    formTitle: en ? "Have a question? Write to us" : "Une question ? Écrivez-nous",
    optionalMark: en ? "optional" : "facultatif",
    formIntro: en
      ? "Do you have an IT project, a question about our services, or want to discuss your digital transformation? Fill in the form or reach us directly by email."
      : "Vous avez un projet IT, une question sur nos services ou souhaitez échanger sur votre transformation digitale ? Remplissez le formulaire ou contactez-nous directement par e-mail.",
    formHeading: en ? "Send us a message" : "Envoyez-nous un message",
    labelName: en ? "Full name" : "Nom complet",
    placeholderName: en ? "Full name" : "Nom complet",
    labelEmail: en ? "Email address" : "Adresse e-mail",
    placeholderEmail: en ? "Email address" : "Adresse e-mail",
    labelPhone: en ? "Phone" : "Téléphone",
    placeholderPhone: en ? "Phone" : "Téléphone",
    labelSubject: en ? "Subject" : "Sujet",
    subjectPlaceholder: en ? "Choose a topic" : "Choisir un sujet",
    subjectInfo: en ? "Information request" : "Demande d'information",
    subjectProject: en ? "Project proposal" : "Proposition de projet",
    labelMessage: en ? "Message" : "Message",
    placeholderMessage: en ? "Your message" : "Votre message",
    consent: en
      ? "I agree that my data may be collected and processed."
      : "J'accepte que mes données soient collectées et traitées.",
    submit: en ? "Send message" : "Envoyer le message",
    submitSending: en ? "Sending..." : "Envoi en cours...",
    successMessage: en
      ? "Thank you! Your message has been sent successfully."
      : "Merci ! Votre message a été envoyé avec succès.",
    errorDefault: en
      ? "Failed to send message. Please try again."
      : "Impossible d'envoyer le message. Veuillez réessayer.",
    errorGeneral: en
      ? "An error occurred while sending your message. Please try again."
      : "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
  };
}
