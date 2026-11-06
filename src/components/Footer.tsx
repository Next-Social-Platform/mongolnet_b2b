export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__wrap">
        <div className="site-footer__top">
          <ul className="site-footer__contacts">
            <li>
              <a href="tel:+97695951370" className="site-footer__link">
                <svg className="site-footer__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +976 9595 1370
              </a>
            </li>
            <li>
              <a href="mailto:contact@nextsocial.mn" className="site-footer__link">
                <span className="site-footer__icon site-footer__icon--mask" style={{ "--icon": "url(/assets/img/3add6072857d.svg)" } as React.CSSProperties} aria-hidden="true" />
                contact@nextsocial.mn
              </a>
            </li>
            <li>
              <ul className="site-footer__socials">
                <li>
                  <a href="#" aria-label="Facebook" className="site-footer__social">
                    <svg className="site-footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram" className="site-footer__social">
                    <svg className="site-footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <path d="M17.5 6.5h.01" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="YouTube" className="site-footer__social">
                    <svg className="site-footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn" className="site-footer__social">
                    <svg className="site-footer__social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="site-footer__bottom">
          <a href="#top" aria-label="Дээш буцах" className="site-footer__up lenis-scroll-to">
            <svg className="site-footer__icon site-footer__icon--lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </a>
          <p className="site-footer__copy">
            © Mongol.net – Гишүүнчлэлийн нэгдсэн платформ
          </p>
        </div>
      </div>
    </footer>
  );
}
