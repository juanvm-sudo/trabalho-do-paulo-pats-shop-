let currentScaleIndex = 0;
const scales = ['text-scale-1', 'text-scale-2', 'text-scale-3'];

// Função para entrada no site
function enterSite(mode) {
    const welcomeModal = document.getElementById('welcomeScreen');
    if (welcomeModal) {
        welcomeModal.classList.add('hidden');
    }
    if (mode === 'calm') {
        toggleCalmMode();
    }
}

// Navegação por Abas
function switchTab(tabId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Remove destaque de todos os botões da barra
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('bg-emerald-100', 'text-emerald-800', 'font-bold');
        btn.classList.add('hover:bg-slate-100');
    });

    // Mostra a seção ativa
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }

    // Destaca o botão selecionado
    const activeBtn = document.getElementById(`tab-${tabId}`);
    if (activeBtn) {
        activeBtn.classList.add('bg-emerald-100', 'text-emerald-800', 'font-bold');
        activeBtn.classList.remove('hover:bg-slate-100');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeFontSize(direction) {
    const body = document.body;
    body.classList.remove(...scales);
    
    if (direction === 1 && currentScaleIndex < scales.length - 1) {
        currentScaleIndex++;
    } else if (direction === -1 && currentScaleIndex > 0) {
        currentScaleIndex--;
    }
    
    body.classList.add(scales[currentScaleIndex]);
}

function resetFontSize() {
    const body = document.body;
    body.classList.remove(...scales);
    currentScaleIndex = 0;
    body.classList.add(scales[0]);
}

function toggleHighContrast() {
    const body = document.body;
    const btn = document.getElementById('contrastBtn');
    
    body.classList.toggle('high-contrast');
    const isHighContrast = body.classList.contains('high-contrast');
    
    if (btn) {
        btn.setAttribute('aria-pressed', isHighContrast ? 'true' : 'false');
    }

    if (isHighContrast && body.classList.contains('calm-mode')) {
        toggleCalmMode();
    }
}

function toggleCalmMode() {
    const body = document.body;
    const btn = document.getElementById('calmBtn');
    
    body.classList.toggle('calm-mode');
    const isCalmMode = body.classList.contains('calm-mode');
    
    if (btn) {
        btn.setAttribute('aria-pressed', isCalmMode ? 'true' : 'false');
    }
    if (isCalmMode && body.classList.contains('high-contrast')) {
        toggleHighContrast();
    }
}

function openLibrasModal() {
    const modal = document.getElementById('librasModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeLibrasModal() {
    const modal = document.getElementById('librasModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function filterPets(category, element) {
    const cards = document.querySelectorAll('.pet-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('bg-emerald-600', 'text-white', 'active');
        btn.classList.add('bg-white', 'text-slate-700');
        btn.setAttribute('aria-pressed', 'false');
    });

    if (element) {
        element.classList.remove('bg-white', 'text-slate-700');
        element.classList.add('bg-emerald-600', 'text-white', 'active');
        element.setAttribute('aria-pressed', 'true');
    }
    cards.forEach(card => {
        const cardCategories = card.getAttribute('data-category');
        if (category === 'all' || cardCategories.includes(category)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function selectPetForAdoption(petName) {
    const petSelect = document.getElementById('selectedPetInput');
    switchTab('adotar-form');

    if (petSelect) {
        petSelect.value = petName;
    }
}

function handleAdoptionSubmit(event) {
    event.preventDefault();
    const alert = document.getElementById('form-success-alert');
    const form = document.getElementById('adoptionForm');

    if (alert) {
        alert.classList.remove('hidden');
        alert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (form) {
        form.reset();
    }
}

function handleContactSubmit(event) {
    event.preventDefault();
    const alert = document.getElementById('contact-success-alert');
    const form = document.getElementById('contactForm');

    if (alert) {
        alert.classList.remove('hidden');
    }

    if (form) {
        form.reset();
    }
}