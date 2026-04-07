const yearElement = document.getElementById("year");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const formSubmitButton = contactForm?.querySelector('button[type="submit"]') || null;
const translatableNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const languageButtons = document.querySelectorAll("[data-lang-toggle]");
const metaDescription = document.getElementById("meta-description");
const ogTitle = document.getElementById("og-title");
const ogDescription = document.getElementById("og-description");
const twitterTitle = document.getElementById("twitter-title");
const twitterDescription = document.getElementById("twitter-description");
const selectedLanguageField = document.getElementById("selected-language");
const sourcePageField = document.getElementById("source-page");
const FORM_ENDPOINT_PLACEHOLDER = "YOUR_FORMSPREE_FORM_ID";

const translations = {
  en: {
    meta_title: "Awebzz | Modern websites for modern businesses",
    meta_description:
      "Awebzz creates modern, professional websites for businesses that want a stronger online presence. We build new websites, redesign outdated ones, and offer ongoing updates and support.",
    og_description:
      "Clean, professional websites for businesses that want to stand out online.",
    nav_services: "Services",
    nav_process: "How It Works",
    nav_portfolio: "Portfolio",
    nav_about: "About",
    nav_contact: "Contact",
    nav_start_project: "Start a Project",
    nav_why: "Why Awebzz",
    hero_eyebrow: "Modern web design for growing businesses",
    hero_title: "Modern websites for modern businesses.",
    hero_text:
      "Awebzz helps businesses get modern, clean, and professional websites that build trust and attract customers. Whether you need a brand-new site or want to upgrade an old one, we create websites that look better, work better, and are easier to manage.",
    hero_cta_primary: "Get Your Website",
    hero_cta_secondary: "See How It Works",
    hero_point_1: "Built for small businesses and local brands",
    hero_point_2: "Professional design with fast turnaround",
    hero_point_3: "Monthly updates and support available",
    preview_metric_title: "5 sec",
    preview_metric_text: "Clear first impression",
    preview_sidebar_home: "Home",
    preview_sidebar_services: "Services",
    preview_sidebar_contact: "Contact",
    preview_badge: "Premium homepage",
    preview_feature_label: "Service website",
    preview_feature_title: "Northline Roofing",
    preview_feature_text:
      "Cleaner design, stronger trust, and faster contact for local customers looking for reliable service.",
    preview_card_redesign_title: "Redesign",
    preview_card_redesign_text:
      "Upgrade an outdated site into something modern and credible.",
    preview_card_leads_title: "Lead flow",
    preview_card_leads_text:
      "Clear calls to action that make it easier to get new enquiries.",
    preview_card_mobile_title: "Mobile",
    preview_card_mobile_text:
      "Built to look sharp and work smoothly across every screen size.",
    preview_card_support_title: "Support",
    preview_card_support_text:
      "Monthly updates available to keep the website current and polished.",
    preview_support_title: "Mobile-first",
    preview_support_text: "Responsive on every screen",
    proof_design: "Modern design",
    proof_delivery: "Fast delivery",
    proof_communication: "Easy communication",
    proof_support: "Ongoing support",
    services_eyebrow: "Services",
    services_title: "Everything you need to look stronger online",
    services_text:
      "Awebzz keeps the process simple so your website feels modern, trustworthy, and ready to help your business grow.",
    services_card_1_title: "New Business Websites",
    services_card_1_text:
      "A clean, professional website built from the ground up for a strong first impression.",
    services_card_2_title: "Website Redesigns",
    services_card_2_text:
      "Replace an outdated site with a cleaner design that looks more credible and works better on mobile.",
    services_card_3_title: "Monthly Updates & Support",
    services_card_3_text:
      "Keep your website fresh with regular content changes, improvements, and support after launch.",
    why_eyebrow: "Why Choose Awebzz",
    why_title: "Simple, modern, and built to create trust",
    why_card_1_title: "Modern design",
    why_card_1_text:
      "Your site feels current, polished, and made for today’s customers.",
    why_card_2_title: "Fast delivery",
    why_card_2_text:
      "Get online faster without the long delays of traditional agencies.",
    why_card_3_title: "Easy communication",
    why_card_3_text:
      "Clear updates, simple feedback, and no confusing technical language.",
    why_card_4_title: "Mobile-friendly",
    why_card_4_text:
      "Your website is designed to look strong and work well on every screen.",
    why_card_5_title: "Affordable value",
    why_card_5_text:
      "Premium-looking results without the heavy agency pricing.",
    why_card_6_title: "Support available",
    why_card_6_text:
      "Stay updated after launch with monthly care and improvement options.",
    process_eyebrow: "How It Works",
    process_title: "A smooth process from first message to launch",
    process_step_1_title: "Tell us about your business",
    process_step_1_text:
      "Share your goals, your services, and what kind of website you need.",
    process_step_2_title: "We design and build",
    process_step_2_text:
      "We create a modern website shaped around your business and audience.",
    process_step_3_title: "You review and approve",
    process_step_3_text:
      "We adjust the details based on your feedback until everything feels right.",
    process_step_4_title: "We launch it online",
    process_step_4_text:
      "Your website goes live looking clean, professional, and ready to work.",
    portfolio_eyebrow: "Portfolio",
    portfolio_title: "Website styles built for modern businesses",
    portfolio_text:
      "Awebzz creates clean, conversion-focused website styles for local businesses, new launches, and brands that need a stronger online presence.",
    portfolio_shot_1_name: "Northline Roofing",
    portfolio_shot_1_title:
      "Reliable roofing for homes and local businesses",
    portfolio_shot_1_pill_1: "Repairs",
    portfolio_shot_1_pill_2: "New roofs",
    portfolio_shot_1_pill_3: "Free quote",
    portfolio_card_1_label: "Local service business",
    portfolio_card_1_title: "Modern redesign with a clearer first impression",
    portfolio_card_1_text:
      "Cleaner structure, stronger visuals, and better mobile experience.",
    portfolio_shot_2_name: "Haven Dental Studio",
    portfolio_shot_2_card_1_title: "Online booking",
    portfolio_shot_2_card_1_text: "Clear appointment flow",
    portfolio_shot_2_card_2_title: "Mobile ready",
    portfolio_shot_2_card_2_text: "Fast pages for new patients",
    portfolio_shot_2_banner: "New patient offer live",
    portfolio_card_2_label: "New business launch",
    portfolio_card_2_title: "Professional homepage built from scratch",
    portfolio_card_2_text:
      "Simple messaging, clean sections, and conversion-focused calls to action.",
    portfolio_shot_3_title: "Care Plan Dashboard",
    portfolio_shot_3_subtitle: "Monthly website support",
    portfolio_shot_3_item_1: "Homepage refresh completed",
    portfolio_shot_3_item_2: "Service page updated this week",
    portfolio_shot_3_item_3: "New testimonial section added",
    portfolio_card_3_label: "Website support",
    portfolio_card_3_title: "Ongoing updates to keep the site sharp",
    portfolio_card_3_text:
      "Content changes, refreshes, and support after launch.",
    about_eyebrow: "About Awebzz",
    about_title: "Better online presence without the usual mess",
    about_text:
      "Awebzz creates modern, professional websites for businesses that want a stronger online presence. We build new websites, redesign outdated ones, and offer ongoing updates and support.",
    about_item_1_title: "Clean",
    about_item_1_text: "Minimal design that feels modern and easy to trust",
    about_item_2_title: "Practical",
    about_item_2_text:
      "Simple for normal business owners to understand and manage",
    about_item_3_title: "Reliable",
    about_item_3_text:
      "Support available after launch when your website needs updates",
    contact_eyebrow: "Contact",
    contact_title: "Let's build your website.",
    contact_text:
      "If your current website feels outdated or you need a new one from scratch, Awebzz can help you create something cleaner, sharper, and more professional.",
    contact_highlight_1_title: "Best for",
    contact_highlight_1_text:
      "Small businesses, local brands, and redesign projects",
    contact_highlight_2_title: "Includes",
    contact_highlight_2_text:
      "Design, build, launch, and optional monthly support",
    contact_email_title: "Email",
    contact_email_text:
      "Prefer email? Reach out directly and we'll get back to you.",
    form_name_label: "Name",
    form_name_placeholder: "Your name",
    form_business_label: "Business name",
    form_business_placeholder: "Your business name",
    form_email_label: "Email",
    form_email_placeholder: "you@example.com",
    form_message_label: "Message",
    form_message_placeholder: "Tell us what kind of website you need",
    form_submit: "Send Your Request",
    form_note:
      "Your message is sent securely and goes straight to our business inbox.",
    form_status_sending: "Sending your request...",
    form_status_success:
      "Thanks. Your message was sent successfully and we'll get back to you soon.",
    form_status_rate_limit:
      "You've reached the send limit for the moment. Please wait a minute and try again, or email y.awebzz@gmail.com.",
    form_status_error:
      "Something went wrong while sending your message. Please try again or email y.awebzz@gmail.com.",
    form_status_config:
      "The contact form still needs its final Formspree ID before launch. Replace YOUR_FORMSPREE_FORM_ID or email y.awebzz@gmail.com.",
    footer_text:
      "Awebzz creates modern, professional websites for businesses that want a stronger online presence.",
    footer_copy_prefix: "©",
    footer_copy_suffix: "Awebzz. Modern websites, built to convert.",
  },
  sv: {
    meta_title: "Awebzz | Moderna hemsidor för moderna företag",
    meta_description:
      "Awebzz skapar moderna, professionella webbplatser för företag som vill ha en starkare närvaro online. Vi bygger nya hemsidor, gör om gamla och erbjuder löpande uppdateringar och support.",
    og_description:
      "Rena, professionella hemsidor för företag som vill sticka ut online.",
    nav_services: "Tjänster",
    nav_process: "Så funkar det",
    nav_portfolio: "Portfolio",
    nav_about: "Om oss",
    nav_contact: "Kontakt",
    nav_start_project: "Starta ett projekt",
    nav_why: "Varför Awebzz",
    hero_eyebrow: "Modern webbdesign för växande företag",
    hero_title: "Moderna hemsidor för moderna företag.",
    hero_text:
      "Awebzz hjälper företag att få moderna, rena och professionella hemsidor som bygger förtroende och lockar kunder. Oavsett om du behöver en helt ny sida eller vill uppgradera en gammal, skapar vi hemsidor som ser bättre ut, fungerar bättre och är enklare att hantera.",
    hero_cta_primary: "Skaffa din hemsida",
    hero_cta_secondary: "Se hur det funkar",
    hero_point_1: "Byggt för småföretag och lokala varumärken",
    hero_point_2: "Professionell design med snabb leverans",
    hero_point_3: "Månatliga uppdateringar och support finns",
    preview_metric_title: "5 sek",
    preview_metric_text: "Tydligt första intryck",
    preview_sidebar_home: "Hem",
    preview_sidebar_services: "Tjänster",
    preview_sidebar_contact: "Kontakt",
    preview_badge: "Premium startsida",
    preview_feature_label: "Servicehemsida",
    preview_feature_title: "Northline Roofing",
    preview_feature_text:
      "Renare design, starkare förtroende och snabbare kontakt för lokala kunder som söker pålitlig service.",
    preview_card_redesign_title: "Omdesign",
    preview_card_redesign_text:
      "Förvandla en gammal sida till något modernt och mer trovärdigt.",
    preview_card_leads_title: "Kontaktflöde",
    preview_card_leads_text:
      "Tydliga knappar som gör det enklare att få fler förfrågningar.",
    preview_card_mobile_title: "Mobil",
    preview_card_mobile_text:
      "Byggd för att se bra ut och fungera smidigt på alla skärmar.",
    preview_card_support_title: "Support",
    preview_card_support_text:
      "Månatliga uppdateringar som håller webbplatsen aktuell och snygg.",
    preview_support_title: "Mobilanpassad",
    preview_support_text: "Responsiv på alla skärmar",
    proof_design: "Modern design",
    proof_delivery: "Snabb leverans",
    proof_communication: "Enkel kommunikation",
    proof_support: "Löpande support",
    services_eyebrow: "Tjänster",
    services_title: "Allt du behöver för att se starkare ut online",
    services_text:
      "Awebzz håller processen enkel så att din hemsida känns modern, trovärdig och redo att hjälpa ditt företag växa.",
    services_card_1_title: "Nya företagshemsidor",
    services_card_1_text:
      "En ren och professionell hemsida byggd från grunden för ett starkt första intryck.",
    services_card_2_title: "Omdesign av hemsidor",
    services_card_2_text:
      "Byt ut en gammal sida mot en renare design som känns mer trovärdig och fungerar bättre i mobilen.",
    services_card_3_title: "Månatliga uppdateringar och support",
    services_card_3_text:
      "Håll hemsidan fräsch med regelbundna ändringar, förbättringar och support efter lansering.",
    why_eyebrow: "Varför välja Awebzz",
    why_title: "Enkelt, modernt och byggt för att skapa förtroende",
    why_card_1_title: "Modern design",
    why_card_1_text:
      "Din sida känns aktuell, genomarbetad och gjord för dagens kunder.",
    why_card_2_title: "Snabb leverans",
    why_card_2_text:
      "Kom online snabbare utan de långa väntetiderna hos traditionella byråer.",
    why_card_3_title: "Enkel kommunikation",
    why_card_3_text:
      "Tydliga uppdateringar, enkel feedback och inget onödigt tekniskt språk.",
    why_card_4_title: "Mobilvänlig",
    why_card_4_text:
      "Din hemsida designas för att se stark ut och fungera bra på alla skärmar.",
    why_card_5_title: "Prisvärd kvalitet",
    why_card_5_text: "Premiumkänsla utan de tunga byråpriserna.",
    why_card_6_title: "Support finns",
    why_card_6_text:
      "Fortsätt hålla sidan uppdaterad med månatlig hjälp och förbättringar.",
    process_eyebrow: "Så funkar det",
    process_title: "En smidig process från första meddelandet till lansering",
    process_step_1_title: "Berätta om ditt företag",
    process_step_1_text:
      "Dela dina mål, dina tjänster och vilken typ av hemsida du behöver.",
    process_step_2_title: "Vi designar och bygger",
    process_step_2_text:
      "Vi skapar en modern hemsida anpassad efter ditt företag och din målgrupp.",
    process_step_3_title: "Du granskar och godkänner",
    process_step_3_text:
      "Vi justerar detaljerna efter din feedback tills allt känns rätt.",
    process_step_4_title: "Vi lanserar sidan online",
    process_step_4_text:
      "Din hemsida går live och ser ren, professionell och redo ut att börja jobba.",
    portfolio_eyebrow: "Portfolio",
    portfolio_title: "Hemsidestilar byggda för moderna företag",
    portfolio_text:
      "Awebzz skapar rena och konverteringsfokuserade hemsidestilar för lokala företag, nystarter och varumärken som behöver en starkare närvaro online.",
    portfolio_shot_1_name: "Northline Roofing",
    portfolio_shot_1_title:
      "Pålitliga taklösningar för hem och lokala företag",
    portfolio_shot_1_pill_1: "Reparationer",
    portfolio_shot_1_pill_2: "Nya tak",
    portfolio_shot_1_pill_3: "Fri offert",
    portfolio_card_1_label: "Lokalt serviceföretag",
    portfolio_card_1_title: "Modern omdesign med tydligare första intryck",
    portfolio_card_1_text:
      "Renare struktur, starkare uttryck och bättre mobilupplevelse.",
    portfolio_shot_2_name: "Haven Dental Studio",
    portfolio_shot_2_card_1_title: "Onlinebokning",
    portfolio_shot_2_card_1_text: "Tydligt flöde för bokningar",
    portfolio_shot_2_card_2_title: "Mobilklar",
    portfolio_shot_2_card_2_text: "Snabba sidor för nya patienter",
    portfolio_shot_2_banner: "Nytt erbjudande live",
    portfolio_card_2_label: "Nystartat företag",
    portfolio_card_2_title: "Professionell startsida byggd från grunden",
    portfolio_card_2_text:
      "Enkelt budskap, rena sektioner och konverteringsfokuserade knappar.",
    portfolio_shot_3_title: "Care plan-översikt",
    portfolio_shot_3_subtitle: "Månatlig hemsidesupport",
    portfolio_shot_3_item_1: "Uppdatering av startsidan klar",
    portfolio_shot_3_item_2: "Tjänstesida uppdaterad denna vecka",
    portfolio_shot_3_item_3: "Ny sektion med kundomdömen tillagd",
    portfolio_card_3_label: "Hemsidesupport",
    portfolio_card_3_title: "Löpande uppdateringar som håller sidan vass",
    portfolio_card_3_text:
      "Innehållsändringar, uppfräschningar och support efter lansering.",
    about_eyebrow: "Om Awebzz",
    about_title: "Bättre online-närvaro utan allt krångel",
    about_text:
      "Awebzz skapar moderna, professionella hemsidor för företag som vill ha en starkare närvaro online. Vi bygger nya hemsidor, gör om gamla och erbjuder löpande uppdateringar och support.",
    about_item_1_title: "Rent",
    about_item_1_text: "Minimal design som känns modern och lätt att lita på",
    about_item_2_title: "Praktiskt",
    about_item_2_text:
      "Enkelt för vanliga företagare att förstå och hantera",
    about_item_3_title: "Pålitligt",
    about_item_3_text:
      "Support finns efter lansering när din hemsida behöver uppdateras",
    contact_eyebrow: "Kontakt",
    contact_title: "Låt oss bygga din hemsida.",
    contact_text:
      "Om din nuvarande hemsida känns gammal eller om du behöver en ny från grunden kan Awebzz hjälpa dig skapa något renare, skarpare och mer professionellt.",
    contact_highlight_1_title: "Passar bäst för",
    contact_highlight_1_text:
      "Småföretag, lokala varumärken och redesignprojekt",
    contact_highlight_2_title: "Ingår",
    contact_highlight_2_text:
      "Design, bygg, lansering och valfri månatlig support",
    contact_email_title: "E-post",
    contact_email_text:
      "Föredrar du e-post? Hör av dig direkt så återkommer vi.",
    form_name_label: "Namn",
    form_name_placeholder: "Ditt namn",
    form_business_label: "Företagsnamn",
    form_business_placeholder: "Ditt företagsnamn",
    form_email_label: "E-post",
    form_email_placeholder: "du@exempel.se",
    form_message_label: "Meddelande",
    form_message_placeholder: "Berätta vilken typ av hemsida du behöver",
    form_submit: "Skicka din förfrågan",
    form_note:
      "Ditt meddelande skickas säkert och går direkt till vår företagsinkorg.",
    form_status_sending: "Skickar din förfrågan...",
    form_status_success:
      "Tack. Ditt meddelande skickades och vi återkommer så snart vi kan.",
    form_status_rate_limit:
      "Du har nått gränsen för hur många meddelanden som kan skickas just nu. Vänta en minut och försök igen, eller mejla y.awebzz@gmail.com.",
    form_status_error:
      "Något gick fel när ditt meddelande skulle skickas. Försök igen eller mejla y.awebzz@gmail.com.",
    form_status_config:
      "Kontaktformuläret behöver fortfarande sitt slutliga Formspree-ID före lansering. Byt ut YOUR_FORMSPREE_FORM_ID eller mejla y.awebzz@gmail.com.",
    footer_text:
      "Awebzz skapar moderna, professionella hemsidor för företag som vill ha en starkare närvaro online.",
    footer_copy_prefix: "©",
    footer_copy_suffix: "Awebzz. Moderna hemsidor som konverterar.",
  },
};

function getStoredLanguage() {
  try {
    return window.localStorage.getItem("awebzz-language");
  } catch {
    return null;
  }
}

function setStoredLanguage(language) {
  try {
    window.localStorage.setItem("awebzz-language", language);
  } catch {
    // Ignore storage failures.
  }
}

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  const dictionary = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.title = dictionary.meta_title;

  if (metaDescription) {
    metaDescription.content = dictionary.meta_description;
  }

  if (ogTitle) {
    ogTitle.content = dictionary.meta_title;
  }

  if (ogDescription) {
    ogDescription.content = dictionary.og_description;
  }

  if (twitterTitle) {
    twitterTitle.content = dictionary.meta_title;
  }

  if (twitterDescription) {
    twitterDescription.content = dictionary.og_description;
  }

  if (selectedLanguageField) {
    selectedLanguageField.value = selectedLanguage === "sv" ? "Swedish" : "English";
  }

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key] !== undefined) {
      node.textContent = dictionary[key];
    }
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dictionary[key] !== undefined) {
      node.setAttribute("placeholder", dictionary[key]);
    }
  });

  if (formStatus) {
    const state = formStatus.dataset.state;

    if (state === "success") {
      formStatus.textContent = dictionary.form_status_success;
    } else if (state === "error") {
      formStatus.textContent = dictionary.form_status_error;
    } else if (state === "pending") {
      formStatus.textContent = dictionary.form_status_sending;
    } else if (state === "config") {
      formStatus.textContent = dictionary.form_status_config;
    } else {
      formStatus.textContent = "";
    }
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langToggle === selectedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  setStoredLanguage(selectedLanguage);
}

function setFormStatus(state, message) {
  if (!formStatus) {
    return;
  }

  formStatus.dataset.state = state;
  formStatus.textContent = message;
  formStatus.classList.remove("is-success", "is-error", "is-pending");

  if (state === "success") {
    formStatus.classList.add("is-success");
  } else if (state === "error" || state === "config") {
    formStatus.classList.add("is-error");
  } else if (state === "pending") {
    formStatus.classList.add("is-pending");
  }
}

function syncSourceFields() {
  if (sourcePageField) {
    sourcePageField.value = window.location.href;
  }
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

syncSourceFields();

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const activeLanguage = document.documentElement.lang === "sv" ? "sv" : "en";
    const dictionary = translations[activeLanguage];
    const action = contactForm.getAttribute("action") || "";

    if (action.includes(FORM_ENDPOINT_PLACEHOLDER)) {
      setFormStatus("config", dictionary.form_status_config);
      return;
    }

    if (!contactForm.reportValidity()) {
      return;
    }

    if (formSubmitButton) {
      formSubmitButton.disabled = true;
      formSubmitButton.setAttribute("aria-busy", "true");
    }

    setFormStatus("pending", dictionary.form_status_sending);

    try {
      const response = await fetch(action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.status === 429) {
        throw new Error("rate-limit");
      }

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      contactForm.reset();
      syncSourceFields();
      setLanguage(activeLanguage);
      setFormStatus("success", translations[activeLanguage].form_status_success);
    } catch (error) {
      if (error instanceof Error && error.message === "rate-limit") {
        setFormStatus("error", dictionary.form_status_rate_limit);
      } else {
        setFormStatus("error", dictionary.form_status_error);
      }
    } finally {
      if (formSubmitButton) {
        formSubmitButton.disabled = false;
        formSubmitButton.removeAttribute("aria-busy");
      }
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langToggle);
  });
});

const savedLanguage = getStoredLanguage();
const browserLanguage =
  navigator.language && navigator.language.toLowerCase().startsWith("sv")
    ? "sv"
    : "en";

setLanguage(savedLanguage || browserLanguage);
