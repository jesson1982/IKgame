// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a main link
document.querySelectorAll('.nav-menu > li > a').forEach(link => {
    link.addEventListener('click', (e) => {
        const parentLi = link.parentElement;
        // Only close if it's not a dropdown
        if (!parentLi.classList.contains('dropdown')) {
            navMenu.classList.remove('active');
        }
    });
});

// ===== Mobile Dropdown Toggle =====
const dropdownLinks = document.querySelectorAll('.dropdown > a');

dropdownLinks.forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (e) => {
        // Only prevent default on mobile
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parentDropdown = dropdownLink.parentElement;
            parentDropdown.classList.toggle('active');
        }
    });
});

// Close dropdown when clicking submenu item
document.querySelectorAll('.dropdown-menu a').forEach(subLink => {
    subLink.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Hero Filter Functionality =====
const filterButtons = document.querySelectorAll('.filter-btn');
const heroCards = document.querySelectorAll('.hero-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        heroCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-rarity') === filterValue) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== Building Tabs Functionality =====
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Show corresponding tab content - map data-tab to the new ID format
        const tabMap = {
            'military': 'military-buildings',
            'economic': 'economic-buildings',
            'defensive': 'defensive-buildings',
            'special': 'special-buildings'
        };
        const tabId = tabMap[button.getAttribute('data-tab')];
        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.classList.add('active');
        }
    });
});

// ===== FAQ Accordion =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// ===== Search Functionality =====
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    // Search in hero cards
    const matchingHeroes = Array.from(heroCards).filter(card => {
        const heroName = card.querySelector('h3').textContent.toLowerCase();
        const heroRole = card.querySelector('.hero-role').textContent.toLowerCase();
        return heroName.includes(searchTerm) || heroRole.includes(searchTerm);
    });

    if (matchingHeroes.length > 0) {
        // Scroll to heroes section
        document.getElementById('heroes').scrollIntoView({ behavior: 'smooth' });

        // Show only matching heroes
        heroCards.forEach(card => {
            card.style.display = 'none';
        });
        matchingHeroes.forEach(card => {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.6s ease-out';
        });

        // Reset filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterButtons[0].classList.add('active');

        alert(`Found ${matchingHeroes.length} hero(s) matching "${searchTerm}"`);
    } else {
        alert(`No results found for "${searchTerm}". Try searching for hero names or roles.`);
    }

    searchInput.value = '';
}

// ===== Back to Top Button =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Newsletter Form =====
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;

    if (email) {
        alert(`Thank you for subscribing! Updates will be sent to ${email}`);
        newsletterForm.reset();
    }
});

// ===== View Details Button =====
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

viewDetailsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const heroCard = e.target.closest('.hero-card');
        const heroName = heroCard.querySelector('h3').textContent;
        const heroRarity = heroCard.querySelector('.rarity').textContent;
        const heroRole = heroCard.querySelector('.hero-role').textContent;

        alert(`Detailed guide for ${heroName} (${heroRarity} ${heroRole}) coming soon!\n\nThis will include:\n- Best equipment builds\n- Skill priority\n- Team compositions\n- Battle strategies`);
    });
});

// ===== Read More Links =====
const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const strategyTitle = e.target.closest('.strategy-card').querySelector('h3').textContent;
        alert(`Full guide for "${strategyTitle}" is being prepared!\n\nCheck back soon for detailed strategies and tips.`);
    });
});

// ===== Smooth Scroll for All Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Add offset for fixed header
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Sub-navigation Active State =====
const subNavLinks = document.querySelectorAll('.sub-nav-link');

// Handle sub-nav click
subNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Remove active from all sub-nav links in the same section
        const section = link.closest('section');
        section.querySelectorAll('.sub-nav-link').forEach(l => l.classList.remove('active'));
        // Add active to clicked link
        link.classList.add('active');
        
        // If it's a building sub-nav, also activate the corresponding tab
        if (href === '#military-buildings' || href === '#economic-buildings' || 
            href === '#defensive-buildings' || href === '#special-buildings') {
            const tabMap = {
                '#military-buildings': 'military',
                '#economic-buildings': 'economic',
                '#defensive-buildings': 'defensive',
                '#special-buildings': 'special'
            };
            const tabName = tabMap[href];
            // Trigger click on corresponding tab button
            const tabButton = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
            if (tabButton) {
                tabButton.click();
            }
        }
    });
});

// Update sub-nav active state on scroll
window.addEventListener('scroll', () => {
    const categories = document.querySelectorAll('.hero-category, .alliance-category, .events-category, .faq-category');
    
    categories.forEach(category => {
        const rect = category.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            const id = category.id;
            const correspondingLink = document.querySelector(`.sub-nav-link[href="#${id}"]`);
            if (correspondingLink) {
                const section = category.closest('section');
                section.querySelectorAll('.sub-nav-link').forEach(l => l.classList.remove('active'));
                correspondingLink.classList.add('active');
            }
        }
    });
});

// ===== Animate Elements on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animateElements = document.querySelectorAll(
    '.stat-card, .hero-card, .strategy-card, .building-item, .tip-card, .event-card, .faq-item'
);

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===== Console Welcome Message =====
console.log('%cWelcome to Infinity Kingdom Guide!', 'color: #fdcb6e; font-size: 20px; font-weight: bold;');
console.log('%cYour ultimate resource for mastering the game.', 'color: #a29bfe; font-size: 14px;');
console.log('%cJoin our community: https://discord.gg/infinitykingdom', 'color: #6c5ce7; font-size: 12px;');
