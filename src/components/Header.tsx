export default function Header({ isHome = false }: { isHome?: boolean }) {
  return (
    <header>
      <div className="header-one lp:!max-w-[1290px] bg-background-2 dark:border-stroke-6 dark:bg-background-9 fixed top-5 left-1/2 z-50 mx-auto flex w-full max-w-[350px] -translate-x-1/2 items-center justify-between rounded-full px-2.5 py-2.5 opacity-0 backdrop-blur-[15px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0 dark:border" data-ns-animate="" data-direction="up" data-offset="100">
        <div>
          <a href={isHome ? "#top" : "/"} className={(isHome ? "lenis-scroll-to " : "") + ""}>
            <span className="sr-only">
              Home
            </span>
            <figure className="hidden lg:block lg:max-w-[198px]">
              <img src="/img/logo.svg" alt="Business.mongol.net" className="logo-light h-8 w-auto" />
              <img src="/img/logo-dark.svg" alt="Business.mongol.net" className="logo-dark h-8 w-auto" />
            </figure>
            <figure className="block max-w-[44px] lg:hidden">
              <img src="/img/favicon.svg" alt="Nexsas" className="block w-full" />
            </figure>
          </a>
        </div>
        <nav className="hidden items-center xl:flex">
          <ul className="flex items-center">
            <li className="nav-item relative cursor-pointer py-2.5">
              <a href={isHome ? "#features" : "/#features"} className={(isHome ? "lenis-scroll-to " : "") + "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"}>
                <span>
                  Боломжууд
                </span>
              </a>
            </li>
            <li className="nav-item relative cursor-pointer py-2.5">
              <a href={isHome ? "#pricing" : "/#pricing"} className={(isHome ? "lenis-scroll-to " : "") + "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"}>
                <span>
                  Үнийн санал
                </span>
              </a>
            </li>
            <li className="nav-item relative cursor-pointer py-2.5">
              <a href={isHome ? "#projects" : "/#projects"} className={(isHome ? "lenis-scroll-to " : "") + "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"}>
                <span>
                  Төсөл
                </span>
              </a>
            </li>
            <li className="nav-item relative cursor-pointer py-2.5">
              <a href={isHome ? "#audience" : "/#audience"} className={(isHome ? "lenis-scroll-to " : "") + "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"}>
                <span>
                  Хэнд зориулсан бэ?
                </span>
              </a>
            </li>
            <li className="nav-item relative cursor-pointer py-2.5">
              <a href={isHome ? "#faq" : "/#faq"} className={(isHome ? "lenis-scroll-to " : "") + "hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"}>
                <span>
                  Асуулт хариулт
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden items-center justify-center gap-2 xl:flex">
          <button type="button" data-theme-toggle="" aria-label="Өдөр / шөнийн горим солих" title="Өдөр / шөнийн горим" className="theme-toggle">
  <svg className="theme-toggle__moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
  <svg className="theme-toggle__sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
</button>
          <a href="/contact" className="btn btn-md hover:btn-white dark:hover:btn-white-dark btn-white-dark dark:btn-white">
            <span>
              Холбоо барих
            </span>
          </a>
        </div>
        <div className="flex items-center gap-2 xl:hidden">
          <button type="button" data-theme-toggle="" aria-label="Өдөр / шөнийн горим солих" title="Өдөр / шөнийн горим" className="theme-toggle">
  <svg className="theme-toggle__moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
  <svg className="theme-toggle__sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
</button>
          <button className="nav-hamburger bg-background-4 dark:bg-background-6 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full">
            <span className="sr-only">
              Menu
            </span>
            {" "}
            <span className="bg-stroke-9 dark:bg-stroke-1 block h-0.5 w-6" />
            {" "}
            <span className="bg-stroke-9 dark:bg-stroke-1 block h-0.5 w-6" />
          </button>
        </div>
        <aside className="sidebar dark:bg-background-8 scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full translate-x-full rounded-l-3xl bg-white transition-all duration-300 sm:w-1/2 xl:hidden">
          <div className="space-y-4 p-5 sm:p-8 lg:p-9">
            <div className="flex items-center justify-between">
              <a href={isHome ? "#top" : "/"} className={(isHome ? "lenis-scroll-to " : "") + ""}>
                <span className="sr-only">
                  Home
                </span>
                <figure className="max-w-[44px]">
                  <img src="/img/favicon.svg" alt="Nexsas" className="block w-full" />
                </figure>
              </a>
              {" "}
              <button className="nav-hamburger-close bg-background-4 dark:bg-background-9 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full">
                <span className="sr-only">
                  Close Menu
                </span>
                {" "}
                <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 rotate-45" />
                {" "}
                <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 -rotate-45" />
              </button>
            </div>
            <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
              <p className="text-secondary dark:text-accent text-tagline-1 before:bg-stroke-4 dark:before:bg-stroke-6 relative mb-2 block font-normal before:absolute before:top-1/2 before:-right-16 before:h-px before:w-full before:-translate-y-1/2 before:content-['']">
                Menu
              </p>
              <ul className="space-y-2">
                <li>
                  <a href={isHome ? "#features" : "/#features"} className={(isHome ? "lenis-scroll-to " : "") + "text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent block py-2.5 font-normal transition-all duration-200"}>
                    Боломжууд
                  </a>
                </li>
                <li>
                  <a href={isHome ? "#pricing" : "/#pricing"} className={(isHome ? "lenis-scroll-to " : "") + "text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent block py-2.5 font-normal transition-all duration-200"}>
                    Үнийн санал
                  </a>
                </li>
                <li>
                  <a href={isHome ? "#projects" : "/#projects"} className={(isHome ? "lenis-scroll-to " : "") + "text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent block py-2.5 font-normal transition-all duration-200"}>
                    Төсөл
                  </a>
                </li>
                <li>
                  <a href={isHome ? "#audience" : "/#audience"} className={(isHome ? "lenis-scroll-to " : "") + "text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent block py-2.5 font-normal transition-all duration-200"}>
                    Хэнд зориулсан бэ?
                  </a>
                </li>
                <li>
                  <a href={isHome ? "#faq" : "/#faq"} className={(isHome ? "lenis-scroll-to " : "") + "text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent block py-2.5 font-normal transition-all duration-200"}>
                    Асуулт хариулт
                  </a>
                </li>
                <li className="pt-3 pb-1">
                  <a href="/contact" className="btn btn-md hover:btn-white btn-white-dark flex w-full justify-center">
                    <span>
                      Холбоо барих
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
