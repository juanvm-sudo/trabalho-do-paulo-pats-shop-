// VARIÁVEIS DE ESTADO
let currentScaleIndex = 0;
const scales = ['text-scale-1', 'text-scale-2', 'text-scale-3'];

// 1. GERENCIAMENTO DE TAMANHO DA FONTE
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

// 2. TOGGLE DE ALTO CONTRASTE
function toggleHighContrast() {
    const body = document.body;
    const btn = document.getElementById('contrastBtn');
    
    body.classList.toggle('high-contrast');
    const isHighContrast = body.classList.contains('high-contrast');
    
    if (btn) {
        btn.setAttribute('aria-pressed', isHighContrast ? 'true' : 'false');
    }

    // Desativa modo calmo se ativo para evitar conflitos visuais
    if (isHighContrast && body.classList.contains('calm-mode')) {
        toggleCalmMode();
    }
}

// 3. TOGGLE DE MODO CALMO (AUTISMO / NEURODIVERSIDADE)
function toggleCalmMode() {
    const body = document.body;
    const btn = document.getElementById('calmBtn');
    
    body.classList.toggle('calm-mode');
    const isCalmMode = body.classList.contains('calm-mode');
    
    if (btn) {
        btn.setAttribute('aria-pressed', isCalmMode ? 'true' : 'false');
    }

    // Desativa alto contraste se ativo
    if (isCalmMode && body.classList.contains('high-contrast')) {
        toggleHighContrast();
    }
}

// 4. MODAL LIBRAS
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

// 5. FILTRO DE PETS NA GALERIA
function filterPets(category, element) {
    const cards = document.querySelectorAll('.pet-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Atualiza o estado dos botões
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

    // Filtra os cards
    cards.forEach(card => {
        const cardCategories = card.getAttribute('data-category');
        if (category === 'all' || cardCategories.includes(category)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// 6. SELEÇÃO DIRETA DO PET PARA ADOÇÃO
function selectPetForAdoption(petName) {
    const petSelect = document.getElementById('selectedPetInput');
    const formSection = document.getElementById('adotar-form');

    if (petSelect) {
        petSelect.value = petName;
    }

    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 7. ENVIO DO FORMULÁRIO DE ADOÇÃO
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

// 8. ENVIO DO FORMULÁRIO DE CONTATO
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