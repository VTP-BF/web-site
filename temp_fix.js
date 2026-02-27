// Script temporaire pour corriger le texte CTA
const fs = require('fs');
const content = fs.readFileSync('pages/about.js', 'utf8');
const updated = content.replace(/Get Free Consultations! We're Ready to Work Together/g, 'Consultations Gratuites ! Nous Sommes Prêts à Travailler Ensemble');
fs.writeFileSync('pages/about.js', updated, 'utf8');
console.log('Texte CTA corrigé');
