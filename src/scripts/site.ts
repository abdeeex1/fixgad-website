const translations = {
  en: () => import('../i18n/en'),
  fr: () => import('../i18n/fr'),
  ar: () => import('../i18n/ar'),
};

function getValue(source: any, path: string) {
  return path.split('.').reduce((value, key) => value?.[key], source);
}

async function setLanguage(lang: 'en'|'fr'|'ar') {
  const module = await translations[lang]();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const value = getValue(module.default, element.dataset.i18n || '');
    if (value) element.textContent = value;
  });
  document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  localStorage.setItem('fixgad-language', lang);
}

document.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang as 'en'|'fr'|'ar'));
});
const savedLanguage = localStorage.getItem('fixgad-language');
if (savedLanguage === 'fr' || savedLanguage === 'ar') setLanguage(savedLanguage);

const menuButton = document.querySelector<HTMLButtonElement>('.menu-button');
const mainNav = document.querySelector<HTMLElement>('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mainNav?.classList.toggle('open', !open);
});
mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  mainNav.classList.remove('open');
}));

const appCategoryButtons = document.querySelectorAll<HTMLButtonElement>('.app-categories button');
appCategoryButtons.forEach((button) => button.addEventListener('click', () => {
  appCategoryButtons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
}));

const form = document.querySelector<HTMLFormElement>('#early-access-form');
const categoryField = document.querySelector<HTMLElement>('#category-field');
document.querySelectorAll<HTMLInputElement>('input[name="type"]').forEach((input) => input.addEventListener('change', () => {
  if (categoryField) categoryField.hidden = input.value !== 'hrayfi' || !input.checked;
}));
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector<HTMLElement>('#form-status');
  if (!form.checkValidity()) {
    if (status) { status.textContent = 'Please complete the required fields and consent.'; status.className = 'form-status error'; }
    form.reportValidity();
    return;
  }
  if (status) { status.textContent = 'Thank you. This demo is not connected to a backend yet; your details were not stored.'; status.className = 'form-status success'; }
  form.reset();
  if (categoryField) categoryField.hidden = true;
});
