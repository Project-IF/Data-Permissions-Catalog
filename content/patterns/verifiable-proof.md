---
type: pattern

title: Verifiable proof

category: Control access

images:
  - url: /images/verifiable-proof-1.svg
  - url: /images/verifiable-proof-2.svg
  - url: /images/verifiable-proof-3.svg

alt: A person generates a code on their device for another person to scan. 

cover_image:
  - url: /images/verifiable-proof-2.svg

advantages:
 - Doesn’t rely on external infrastructure that could be malicious

limitations:
 - Some people won’t understand what is being checked
 - The underlying maths can later be found to be insecure

examples:
 - title: WhatsApp verify security code
   url: https://faq.whatsapp.com/en/general/28030015
 - title: Signal Safety numbers
   url: https://signal.org/blog/safety-number-updates/

open-source:
 - title: Open Whisper Systems
   url: https://github.com/whispersystems/

---

Sharing data in a form that is hard to forge. It can be checked using mathematical formulas, for example to verify that messages are end-to-end encrypted.
