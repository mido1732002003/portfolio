/**
 * Portfolio Main JavaScript
 * Handles all dynamic functionality: rendering, navigation, animations, and form validation
 */

document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    initializeNavigation();
    initializeMobileNav();
    initializeScrollAnimations();
    initializeContactForm();
    initializeProjectFilters();
    setCurrentYear();
});

/**
 * Render all dynamic content from portfolioData
 */
function initializePortfolio() {
    renderOwnerInfo();
    renderSkills();
    renderProjects();
    renderExperience();
    renderSocialLinks();
}

/**
 * Render owner information into the page
 */
function renderOwnerInfo() {
    const { owner, contact } = portfolioData;

    document.getElementById('heroName').textContent = owner.name;
    document.getElementById('heroRole').textContent = owner.role;
    document.getElementById('heroTagline').textContent = owner.tagline;
    document.getElementById('aboutSummary').textContent = owner.summary;

    const contactEmail = document.getElementById('contactEmail');
    contactEmail.href = `mailto:${contact.email}`;
    contactEmail.textContent = contact.email;
}

/**
 * Render skills grid from portfolioData.skills
 */
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');

    portfolioData.skills.forEach((skillGroup, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skills__card reveal-up';
        skillCard.style.transitionDelay = `${index * 0.1}s`;

        skillCard.innerHTML = `
      <h3 class="skills__category">${skillGroup.category}</h3>
      <div class="skills__items">
        ${skillGroup.items.map(skill => `<span class="skills__tag">${skill}</span>`).join('')}
      </div>
    `;

        skillsGrid.appendChild(skillCard);
    });
}

/**
 * Render projects grid from portfolioData.projects
 */
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card reveal-up';
        projectCard.setAttribute('data-category', project.category);
        projectCard.style.transitionDelay = `${index * 0.1}s`;

        projectCard.innerHTML = `
      <div class="project-card__header">
        <h3 class="project-card__title">${project.title}</h3>
        <span class="project-card__category">${project.category}</span>
      </div>
      <p class="project-card__description">${project.description}</p>
      <div class="project-card__tech">
        ${project.tech.map(tech => `<span class="project-card__tech-tag">${tech}</span>`).join('')}
      </div>
      <div class="project-card__links">
        ${project.links.live ? `
        <a href="${project.links.live}" class="project-card__link" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Live Demo
        </a>
        ` : ''}
        <a href="${project.links.source}" class="project-card__link" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          Source
        </a>
      </div>
    `;

        projectsGrid.appendChild(projectCard);
    });
}

/**
 * Render experience timeline from portfolioData.experience
 */
function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');

    portfolioData.experience.forEach((exp, index) => {
        const entry = document.createElement('div');
        entry.className = 'experience__entry reveal-up';
        entry.style.transitionDelay = `${index * 0.15}s`;

        const bulletPoints = Array.isArray(exp.description)
            ? exp.description.map(item => `<li>${item}</li>`).join('')
            : `<li>${exp.description}</li>`;

        entry.innerHTML = `
      <div class="experience__marker"></div>
      <div class="experience__content">
        <div class="experience__header">
          <h3 class="experience__role">${exp.role}</h3>
          <span class="experience__period">${exp.period}</span>
        </div>
        <div class="experience__company">
          <span>${exp.company}</span>
          ${exp.location ? `<span class="experience__location">${exp.location}</span>` : ''}
        </div>
        <ul class="experience__description">
          ${bulletPoints}
        </ul>
      </div>
    `;

        timeline.appendChild(entry);
    });
}

/**
 * Render social links in contact section and footer
 */
function renderSocialLinks() {
    const { socials } = portfolioData.contact;

    const socialHTML = socials.map(social => `
    <a href="${social.url}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${social.name}">
      ${getSocialIcon(social.iconKey)}
      <span class="social-link__text">${social.name}</span>
    </a>
  `).join('');

    const footerSocialHTML = socials.map(social => `
    <a href="${social.url}" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="${social.name}">
      ${getSocialIcon(social.iconKey)}
    </a>
  `).join('');

    document.getElementById('contactSocials').innerHTML = socialHTML;
    document.getElementById('footerSocials').innerHTML = footerSocialHTML;
}

/**
 * Get SVG icon for social platforms
 */
function getSocialIcon(iconKey) {
    const icons = {
        github: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        linkedin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
        twitter: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        codepen: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.144 13.067v-2.134L16.55 12zm1.715 1.135a.354.354 0 01-.152.272l-7.906 5.27a.35.35 0 01-.392 0l-7.906-5.27a.354.354 0 01-.152-.272v-4.404a.354.354 0 01.152-.272l7.906-5.27a.35.35 0 01.392 0l7.906 5.27a.354.354 0 01.152.272v4.404zm-8.606-9.073L5.397 9.213l2.602 1.735 3.254-2.168v-3.651zm1.494 0v3.651l3.254 2.168 2.602-1.735-5.856-4.084zM5.143 12l-1.594 1.067L5.143 14.133V12zm.254 2.869L11.253 18.953v-3.651l-3.254-2.168-2.602 1.735zm6.35 4.084l5.856-4.084-2.602-1.735-3.254 2.168v3.651zM12 13.067l-2.602 1.735L12 16.535l2.602-1.733L12 13.067zm6.857-1.067v2.133l1.594-1.066L18.857 12z"/></svg>`,
        facebook: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
        instagram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>`,
        whatsapp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
        telegram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`
    };

    return icons[iconKey] || '';
}

/**
 * Initialize smooth scrolling and active nav highlighting
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.getElementById('backToTop').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const observerOptions = {
        rootMargin: '-20% 0px -80% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

/**
 * Initialize mobile navigation toggle
 */
function initializeMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !navToggle.contains(e.target) && nav.classList.contains('active')) {
            navToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
}

/**
 * Initialize scroll-triggered reveal animations
 */
function initializeScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => revealObserver.observe(element));
}

/**
 * Initialize contact form validation
 */
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formSuccess = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        clearErrors();

        if (!nameInput.value.trim()) {
            showError('nameError', 'Please enter your name');
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            showError('emailError', 'Please enter your email');
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        if (!messageInput.value.trim()) {
            showError('messageError', 'Please enter your message');
            isValid = false;
        }

        if (isValid) {
            console.log('Form submitted:', {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            });

            formSuccess.classList.add('visible');
            form.reset();

            setTimeout(() => {
                formSuccess.classList.remove('visible');
            }, 5000);
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.classList.add('visible');
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.form__error');
        errorElements.forEach(el => {
            el.textContent = '';
            el.classList.remove('visible');
        });
        formSuccess.classList.remove('visible');
    }
}

/**
 * Initialize project filtering functionality
 */
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.projects__filter');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';

                    setTimeout(() => {
                        card.style.display = 'flex';
                        requestAnimationFrame(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        });
                    }, 150);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';

                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/**
 * Set the current year in footer copyright
 */
function setCurrentYear() {
    document.getElementById('footerYear').textContent = new Date().getFullYear();
}
