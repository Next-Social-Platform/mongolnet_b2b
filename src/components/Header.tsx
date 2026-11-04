'use client';

import Link from 'next/link';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { scrollToElement, scrollToTop } from '@/lib/scroll';

const TOP_NAV_COOKIE = 'top-nav-default-hidden';

// Хаасан эсэхийг cookie-с уншина (30 хоног). Cookie зөвхөн энэ компонентоор өөрчлөгдөнө.
const subscribeNone = () => () => {};
const readHiddenCookie = () =>
  document.cookie.split('; ').some((c) => c === `${TOP_NAV_COOKIE}=true`);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastScroll, setPastScroll] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const cookieHidden = useSyncExternalStore(
    subscribeNone,
    readHiddenCookie,
    () => false,
  );

  const topNavHidden = cookieHidden || dismissed;
  // Анхны template: эхний scroll эсвэл top-nav-ийн төлөв өөрчлөгдсөний дараа transition асна.
  const animated = pastScroll || topNavHidden;

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 100;
      setScrolled(past);
      if (past) setPastScroll(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const hideTopNav = () => {
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `${TOP_NAV_COOKIE}=true;expires=${expires.toUTCString()};path=/`;
    setDismissed(true);
  };

  // Mobile цэс: эхлээд хаагаад, 350мс-ийн дараа гүйлгэнэ.
  const goTo = (target: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToElement(target), 350);
  };

  return (
    <>
      <header>
        <div
          className={`ai-voice-header lp:!max-w-[1290px] bg-secondary has-top-nav fixed top-15 left-1/2 z-50 mx-auto flex w-full max-w-[350px] -translate-x-1/2 items-center justify-between rounded-full px-2.5 py-1 opacity-0 backdrop-blur-[15px] max-[400px]:max-w-[350px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0 ${topNavHidden ? 'is-cookie-false' : 'is-cookie-true'}${scrolled ? ' scroll-ai-voice-header' : ''}`}
          style={animated ? { transition: 'all 0.5s ease-in-out' } : undefined}
          data-ns-animate=''
          data-direction='up'
          data-offset='100'
        >
          <div>
            <Link
              href='/'
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <span className='sr-only'>Home</span>
              <figure className='hidden lg:block lg:max-w-[198px]'>
                <img src='/images/shared/logo-light.svg' alt='' />
              </figure>
              <figure className='block max-w-none lg:hidden'>
                <img
                  src='/images/shared/favicon.svg'
                  alt=''
                  className='block w-full dark:hidden'
                />{' '}
                <img
                  src='/images/shared/logo-dark.svg'
                  alt=''
                  className='hidden w-full dark:block'
                />
              </figure>
            </Link>
          </div>
          <nav className='hidden items-center xl:flex'>
            <ul className='flex items-center'>
              <li className='nav-item relative cursor-pointer py-2.5'>
                <a
                  href='#features'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement('#features');
                  }}
                  className='lenis-scroll-to text-tagline-1 hover:bg-accent/5 text-white flex items-center gap-1 rounded-full px-4 py-2 font-normal transition-all duration-400 hover:text-white'
                >
                  <span>Боломжууд</span>
                </a>
              </li>
              <li className='nav-item relative cursor-pointer py-2.5'>
                <a
                  href='#how'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement('#how');
                  }}
                  className='lenis-scroll-to text-tagline-1 hover:bg-accent/5 text-white flex items-center gap-1 rounded-full px-4 py-2 font-normal transition-all duration-400 hover:text-white'
                >
                  <span>Хэрхэн ажилладаг вэ?</span>
                </a>
              </li>
              <li className='nav-item relative cursor-pointer py-2.5'>
                <a
                  href='#pricing'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement('#pricing');
                  }}
                  className='lenis-scroll-to text-tagline-1 hover:bg-accent/5 text-white flex items-center gap-1 rounded-full px-4 py-2 font-normal transition-all duration-400 hover:text-white'
                >
                  <span>Үнийн санал</span>
                </a>
              </li>
              <li
                className='nav-item relative hidden cursor-pointer py-2.5'
                data-menu='company-mega-menu'
              >
                <a
                  href='#'
                  className='text-tagline-1 hover:bg-accent/5 text-white flex items-center gap-1 rounded-full px-4 py-2 font-normal transition-all duration-400 hover:text-white'
                >
                  <span>Бидний тухай</span>{' '}
                  <span className='nav-arrow block origin-center translate-y-px transition-all duration-300'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='size-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m19.5 8.25-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  </span>
                </a>
                <div>
                  <div className='dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[692px] -translate-x-1/2 bg-transparent opacity-0' />
                  <div
                    id='company-mega-menu'
                    className='dropdown-menu dark:bg-background-6 border-stroke-1 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 opacity-0 transition-all duration-300 md:w-[692px] md:gap-x-8'
                  >
                    <ul className='w-full space-y-2 md:max-w-[284px]'>
                      <li>
                        <a
                          href='#'
                          className='group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300'
                        >
                          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 group-hover:bg-ns-ivory/70' />
                          <div className='relative z-10 mt-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                            >
                              <path
                                d='M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z'
                                className='stroke-secondary dark:stroke-accent'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M10 13.3333H10.0083'
                                className='stroke-secondary dark:stroke-accent'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M10 6.66669V10'
                                className='stroke-secondary dark:stroke-accent'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                          <div className='relative z-10 space-y-0.5'>
                            <p className='text-tagline-1 text-secondary dark:text-accent font-normal'>
                              Танилцуулга
                            </p>
                            <p className='text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal'>
                              Mongol.net платформын зорилго, үнэт зүйл, багийн
                              танилцуулга
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300'
                        >
                          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 group-hover:bg-ns-ivory/70' />
                          <div className='relative z-10 mt-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                            >
                              <path
                                d='M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z'
                                className='stroke-secondary dark:stroke-accent'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                              <path
                                d='M9.59975 3.4495L8.12557 2.34419C8.04647 2.28469 7.95437 2.24484 7.85685 2.22792C7.75933 2.211 7.65918 2.2175 7.56467 2.24688C7.1081 2.38985 6.66515 2.57312 6.24103 2.79452C6.15323 2.84057 6.07765 2.90685 6.02051 2.98787C5.96338 3.06889 5.92633 3.16233 5.91242 3.26049L5.65182 5.08478C5.55248 5.17284 5.45523 5.26442 5.36007 5.35953C5.26493 5.45467 5.17332 5.55195 5.08525 5.65136L5.08521 5.65139L3.26124 5.91223C3.16324 5.92608 3.06993 5.96303 2.98901 6.02002C2.90809 6.07702 2.84187 6.15242 2.79581 6.24003C2.57407 6.66397 2.39044 7.10678 2.2471 7.56323C2.21759 7.65787 2.211 7.75818 2.22789 7.85587C2.24478 7.95356 2.28466 8.04584 2.34423 8.12508L3.44993 9.59932C3.44195 9.73182 3.43794 9.86535 3.4379 9.9999C3.4379 10.1344 3.44191 10.268 3.44993 10.4006L3.44993 10.4006L2.34462 11.8748C2.28512 11.9539 2.24527 12.046 2.22835 12.1435C2.21143 12.241 2.21793 12.3412 2.2473 12.4357C2.39028 12.8923 2.57355 13.3352 2.79495 13.7593C2.841 13.8471 2.90727 13.9227 2.98829 13.9799C3.06931 14.037 3.16276 14.074 3.26092 14.088L5.08521 14.3486C5.17326 14.4479 5.26484 14.5451 5.35996 14.6403C5.45509 14.7354 5.55237 14.827 5.65179 14.9151L5.65182 14.9152L5.91265 16.7391C5.92651 16.8371 5.96345 16.9304 6.02045 17.0114C6.07744 17.0923 6.15285 17.1585 6.24046 17.2046C6.66439 17.4263 7.1072 17.6099 7.56365 17.7533C7.6583 17.7828 7.7586 17.7894 7.8563 17.7725C7.95399 17.7556 8.04626 17.7157 8.1255 17.6561L9.59974 16.5504C9.73225 16.5584 9.86577 16.5624 10.0003 16.5625C10.1349 16.5625 10.2684 16.5585 10.401 16.5504L10.4011 16.5504L11.8752 17.6558C11.9543 17.7153 12.0464 17.7551 12.144 17.772C12.2415 17.7889 12.3416 17.7824 12.4361 17.7531C12.8927 17.6101 13.3357 17.4268 13.7598 17.2054C13.8476 17.1594 13.9232 17.0931 13.9803 17.0121C14.0374 16.9311 14.0745 16.8376 14.0884 16.7395L14.349 14.9152C14.4483 14.8271 14.5456 14.7355 14.6407 14.6404C14.7359 14.5453 14.8275 14.448 14.9156 14.3486L14.9156 14.3486L16.7396 14.0877C16.8376 14.0739 16.9309 14.0369 17.0118 13.9799C17.0927 13.9229 17.1589 13.8475 17.205 13.7599C17.4267 13.336 17.6104 12.8932 17.7537 12.4367C17.7832 12.3421 17.7898 12.2418 17.7729 12.1441C17.756 12.0464 17.7161 11.9541 17.6566 11.8749L16.5509 10.4006C16.5589 10.2681 16.5629 10.1346 16.5629 10.0001C16.5629 9.86551 16.5589 9.73195 16.5509 9.59937L16.5509 9.59932L17.6562 8.12514C17.7157 8.04605 17.7555 7.95394 17.7725 7.85642C17.7894 7.7589 17.7829 7.65876 17.7535 7.56424C17.6105 7.10767 17.4273 6.66472 17.2059 6.2406C17.1598 6.15281 17.0935 6.07722 17.0125 6.02008C16.9315 5.96295 16.838 5.9259 16.7399 5.91199L14.9156 5.65139C14.8275 5.55206 14.736 5.45481 14.6408 5.35964C14.5457 5.2645 14.4484 5.1729 14.349 5.08482L14.349 5.08478L14.0881 3.26082C14.0743 3.16281 14.0373 3.06951 13.9804 2.98858C13.9234 2.90766 13.848 2.84144 13.7603 2.79539C13.3364 2.57364 12.8936 2.39002 12.4371 2.24668C12.3425 2.21716 12.2422 2.21057 12.1445 2.22746C12.0468 2.24435 11.9545 2.28423 11.8753 2.34381L10.4011 3.4495C10.2685 3.44152 10.135 3.43751 10.0005 3.43747C9.86593 3.43747 9.73237 3.44148 9.5998 3.4495L9.59975 3.4495Z'
                                className='stroke-secondary dark:stroke-accent'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                          <div className='relative z-10 space-y-0.5'>
                            <p className='text-tagline-1 text-secondary dark:text-accent font-normal'>
                              Холбоо барих
                            </p>
                            <p className='text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal'>
                              Асуулт, санал, демо хүсэлтээр бидэнтэй
                              холбогдоорой
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='group relative flex items-start gap-3 rounded-[10px] p-3 transition-all duration-300'
                        >
                          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400 group-hover:bg-ns-ivory/70' />
                          <div className='relative z-10 mt-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                            >
                              <path
                                d='M10.0003 1.66669L12.5753 6.88335L18.3337 7.72502L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72502L7.42533 6.88335L10.0003 1.66669Z'
                                className='stroke-secondary dark:stroke-accent'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                          <div className='relative z-10 space-y-0.5'>
                            <p className='text-tagline-1 text-secondary dark:text-accent font-normal'>
                              Боломжууд
                            </p>
                            <p className='text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal'>
                              Гишүүнчлэл, төлбөр, харилцаа, арга хэмжээний бүх
                              боломжууд
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <figure className='flex-1 space-y-3'>
                      <p className='text-tagline-2 text-secondary/60 dark:text-accent/60 font-medium'>
                        Сурталчилгаа
                      </p>
                      <a href='#' className='block'>
                        <figure className='group relative min-h-[272px] w-full max-w-full overflow-hidden rounded-[14px]'>
                          <img
                            src='/images/ns-img-419.jpg'
                            alt="What's New"
                            className='h-full w-full rounded-[14px] object-cover transition-all duration-500 ease-in-out group-hover:scale-105'
                          />
                        </figure>
                      </a>
                    </figure>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className='hidden items-center justify-center xl:flex'>
            <div className='group/btn-v2 mx-auto inline-block w-[85%] rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto'>
              <a
                href='#'
                className='btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 !border-0 mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium text-nowrap lowercase transition-all duration-500 ease-in-out md:mx-0 md:h-auto md:w-auto'
              >
                <span className='inline-block transition-transform duration-300 ease-in-out first-letter:uppercase'>
                  Демо үзэх
                </span>
                <div className='relative size-6 overflow-hidden'>
                  <span className='btn-v2-icon absolute inset-0 size-6 -translate-x-6 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-1'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                      <path d='M11 5H13V7H11V5Z' />
                      <path d='M5 5H7V7H5V5Z' />
                      <path d='M14 8H16V10H14V8Z' />
                      <path d='M8 8H10V10H8V8Z' />
                      <path d='M17 11H19V13H17V11Z' />
                      <path d='M11 11H13V13H11V11Z' />
                      <path d='M14 14H16V16H14V14Z' />
                      <path d='M8 14H10V16H8V14Z' />
                      <path d='M11 17H13V19H11V17Z' />
                      <path d='M5 17H7V19H5V17Z' />
                    </svg>
                  </span>
                  <span className='btn-v2-icon absolute size-6 -translate-x-2 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-6'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                      <path d='M11 5H13V7H11V5Z' />
                      <path d='M5 5H7V7H5V5Z' />
                      <path d='M14 8H16V10H14V8Z' />
                      <path d='M8 8H10V10H8V8Z' />
                      <path d='M17 11H19V13H17V11Z' />
                      <path d='M11 11H13V13H11V11Z' />
                      <path d='M14 14H16V16H14V14Z' />
                      <path d='M8 14H10V16H8V14Z' />
                      <path d='M11 17H13V19H11V17Z' />
                      <path d='M5 17H7V19H5V17Z' />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className='block xl:hidden'>
            <button
              type='button'
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className={`nav-hamburger ${menuOpen ? 'is-open ' : ''}flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full`}
            >
              <span className='sr-only'>Menu</span>{' '}
              <span className='block h-0.5 w-6 bg-white' />{' '}
              <span className='block h-0 w-6 bg-white' />{' '}
              <span className='block h-0.5 w-6 bg-white' />
            </button>
          </div>
          <aside
            className={`sidebar dark:bg-background-8 scroll-bar fixed top-0 right-0 z-[9999] h-screen w-full translate-x-full rounded-l-3xl bg-white transition-all duration-300 sm:w-1/2 xl:hidden${menuOpen ? ' show-sidebar' : ''}`}
          >
            <div className='space-y-4 p-5 sm:p-8 lg:p-9'>
              <div className='scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10'>
                <ul className='space-y-1'>
                  <li>
                    <a
                      href='#features'
                      onClick={(e) => {
                        e.preventDefault();
                        goTo('#features');
                      }}
                      className='lenis-scroll-to text-tagline-1 text-secondary dark:text-accent block py-2.5 text-left font-normal transition-all duration-200'
                    >
                      Боломжууд
                    </a>
                  </li>
                  <li>
                    <a
                      href='#how'
                      onClick={(e) => {
                        e.preventDefault();
                        goTo('#how');
                      }}
                      className='lenis-scroll-to text-tagline-1 text-secondary dark:text-accent block py-2.5 text-left font-normal transition-all duration-200'
                    >
                      Хэрхэн ажилладаг вэ?
                    </a>
                  </li>
                  <li>
                    <a
                      href='#pricing'
                      onClick={(e) => {
                        e.preventDefault();
                        goTo('#pricing');
                      }}
                      className='lenis-scroll-to text-tagline-1 text-secondary dark:text-accent block py-2.5 text-left font-normal transition-all duration-200'
                    >
                      Үнийн санал
                    </a>
                  </li>
                  <li className='hidden space-y-2'>
                    <button
                      className='mobile-menu-toggle flex w-full cursor-pointer items-center justify-between py-2.5'
                      data-menu='company'
                    >
                      <span className='text-secondary/60 dark:text-accent/60 text-tagline-1 block font-normal'>
                        Бидний тухай
                      </span>{' '}
                      <span className='menu-arrow rotate-90 transition-transform duration-300'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                        >
                          <path
                            d='M10 12L14 8L10 4'
                            className='stroke-secondary/60 dark:stroke-accent/60'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                    </button>
                    <ul className='mobile-submenu block' data-submenu='company'>
                      <li>
                        <a
                          href='#'
                          className='text-tagline-1 text-secondary dark:text-accent ml-4 block py-2.5 text-left font-normal transition-all duration-200'
                        >
                          Танилцуулга
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='text-tagline-1 text-secondary dark:text-accent ml-4 block py-2.5 text-left font-normal transition-all duration-200'
                        >
                          Холбоо барих
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='text-tagline-1 text-secondary dark:text-accent ml-4 block py-2.5 text-left font-normal transition-all duration-200'
                        >
                          Боломжууд
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </header>
    </>
  );
}
