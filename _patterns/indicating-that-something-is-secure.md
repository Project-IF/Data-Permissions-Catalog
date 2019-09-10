---
layout: pattern

title: Indicating that something is secure

category: Control access

images:
- url: /images/access-through-letter.svg

alt: A person's hand hovers their mobile phone over a bar code in an energy bill.

advantages:
 - Users don’t have to understand any of the underlying technology to be reassured by the icon.

limitations:
 - Overstates how secure the connection between the browser and server is
 - Users don’t notice the icons or don’t fully understand what they mean. Browsers like Chrome are phasing out these kinds of positive security indicators because they don’t work.
 - Safety should be the norm. If something is normal you don’t need a label telling you this.
 - Positive indicators can be easily faked by malicious actors. If users see lock icons anywhere on screen they think websites can be trusted.
 - Visual indicators won’t work for IoT devices and voice interfaces.
 - Certificate Authorities that issue certificates have been hacked in the past. This meant legitimate certificates were issued for untrustworthy websites.

examples:
  - title: Chrome, Firefox and Safari web browsers.
    url: https://support.mozilla.org/en-US/kb/how-do-i-tell-if-my-connection-is-secure

---

A lock icon, or another kind of kite mark, in the search bar is a visual cue that suggests to the user that data shared between the server and the browser is secure and encrypted.
If that communication is broken, messages can be intercepted and read by anyone, in phishing attacks or other hacks.

If a website has a valid certificate, issued by certificate authorities, most web browsers (Chrome, Firefox, Safari or Microsoft Edge), will show the user a padlock next to the URL.