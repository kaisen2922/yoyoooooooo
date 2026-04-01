/**
 * Visual Arena - script.js
 */

const codeArenaImages = [
    {name: "Whisk_00f031380e59d11bed347a606a201df7dr.png", sizeBytes: 2273998},
    {name: "Whisk_0ef69615c9a39df99684d5d2f9ccd550dr.jpeg", sizeBytes: 341683},
    {name: "Whisk_0f388bb5b80d9fca4b142bc9980030e7dr.png", sizeBytes: 2313253},
    {name: "Whisk_117291510574fb9b950402f113069eb0dr.jpeg", sizeBytes: 385852},
    {name: "Whisk_12e0a2232f9059aae004ea002c471fe3dr.jpeg", sizeBytes: 344791},
    {name: "Whisk_183cd98dde5b5e9894440416b26262d2dr.jpeg", sizeBytes: 394648},
    {name: "Whisk_1e79d00e236a4f8b1774dac3e4ce93b0dr.jpeg", sizeBytes: 334398},
    {name: "Whisk_30e070a6a4cbac7bab548d2eaae1ed63dr.png", sizeBytes: 1837790},
    {name: "Whisk_3591f0e61bed0ac95bd4ad21a7b5fe42dr.jpeg", sizeBytes: 278560},
    {name: "Whisk_3f592dd6b7e72388169400d2921f5028dr.png", sizeBytes: 2255333},
    {name: "Whisk_41da6d6190eeafd986e48cee4a9e905ddr.jpeg", sizeBytes: 297824},
    {name: "Whisk_429f984e0b00442835345afdee5e11b4dr.png", sizeBytes: 2142365},
    {name: "Whisk_465b8a6810cedb7bf954d8e2a61c727edr.jpeg", sizeBytes: 328709},
    {name: "Whisk_484f2299c2a71a7a44d4f44e23e12833dr.png", sizeBytes: 2389809},
    {name: "Whisk_5f546dbb98452fdadc641ce2ceeec744dr.jpeg", sizeBytes: 366316},
    {name: "Whisk_61fd5683996228b8cda45523475bbdefdr.png", sizeBytes: 2423345},
    {name: "Whisk_87511fed33ff76091a2498419174ed41dr.jpeg", sizeBytes: 558065},
    {name: "Whisk_892f63740e9f8f39a4744f4351f75c28dr.jpeg", sizeBytes: 723048},
    {name: "Whisk_902156578987bc688344de9a7ab20903dr.jpeg", sizeBytes: 351459},
    {name: "Whisk_975da798f108adf8d624c29951fdc856dr.jpeg", sizeBytes: 312058},
    {name: "Whisk_abf415809c0a414be4341f6d07dd3f20dr.png", sizeBytes: 2083792},
    {name: "Whisk_b518c8783effd439ecb42d1a5eadc1f4dr.png", sizeBytes: 2113994},
    {name: "Whisk_b53e3f70b8e1b5c8fec4d0d63581ac3ddr.jpeg", sizeBytes: 377326},
    {name: "Whisk_b91e6eb13190beeab324b4d3ca4fc82edr.jpeg", sizeBytes: 334206},
    {name: "Whisk_c241f5f17fc0834a97248e2bb8287e7adr.jpeg", sizeBytes: 338097},
    {name: "Whisk_c7a926c84c9314db53447cb82ae980c9dr.jpeg", sizeBytes: 355837},
    {name: "Whisk_cef5065156b56ccbe5d4d89b72a576cedr.jpeg", sizeBytes: 292855},
    {name: "Whisk_d2f8d02039d17bf9dfb48ff3a3deb25fdr.png", sizeBytes: 2485147},
    {name: "Whisk_db2bbe72b8fbb16a54f4031b3db697ffdr.png", sizeBytes: 2274471},
    {name: "Whisk_ddd76fc481008418992469ab8db5b2eadr.png", sizeBytes: 2545030},
    {name: "Whisk_de8bd4473ca6cf3ae3e4ccc3d562bf9adr.png", sizeBytes: 2102331},
    {name: "Whisk_e6241eeae97adf0a92c43b9756c4d323dr.jpeg", sizeBytes: 366648},
    {name: "Whisk_eb13f8b7dd12315b60d4c85ced781666dr.png", sizeBytes: 2399709},
    {name: "Whisk_ecb5def1bd852cdad3043030ac21e002dr.jpeg", sizeBytes: 395520},
    {name: "Whisk_ef053ee2b5af316b56f4fe74b14b92eadr.jpeg", sizeBytes: 319494},
    {name: "Whisk_f2fdaff96711ddab19f4c8bb8b2d9b83dr.png", sizeBytes: 2341407}
];

const designArenaImages = [
    {name: "Whisk_056b3aa1f6212e18e4246cb3a86dd1dcdr.jpeg", sizeBytes: 372089},
    {name: "Whisk_082aefcf88ca432a62b43b9363dd5958dr.jpeg", sizeBytes: 399557},
    {name: "Whisk_0f773e1343f4d319a3e4d297b3eeb844dr.jpeg", sizeBytes: 423960},
    {name: "Whisk_15f8d4bd4ea8ae1a6e54913e2a233f82dr.jpeg", sizeBytes: 396401},
    {name: "Whisk_16f47d9cdf4941295df42228d33ccba9dr.jpeg", sizeBytes: 308452},
    {name: "Whisk_18624b16cb2dd95a5524a05cb44cd0aadr.jpeg", sizeBytes: 395532},
    {name: "Whisk_1d9c3f8dce5890d8d4b438b846d366ecdr.jpeg", sizeBytes: 420569},
    {name: "Whisk_30f41aff6aa29ec87fb48682ae464741dr.jpeg", sizeBytes: 326685},
    {name: "Whisk_41527d2b1cd6f598ac44584447b99383dr.jpeg", sizeBytes: 347630},
    {name: "Whisk_4352d4b084ff602bd1f4d1ed15bbb78edr.jpeg", sizeBytes: 362766},
    {name: "Whisk_4592e668b91bc51979d44803a99dfecddr.jpeg", sizeBytes: 321287},
    {name: "Whisk_71bc468febef2b9ad6c4c469fd3608c7dr.jpeg", sizeBytes: 376897},
    {name: "Whisk_85aa48ff267bfcfa1e54a29f0e9a2d9edr.jpeg", sizeBytes: 371164},
    {name: "Whisk_89ddcb9fcf02f61bd0b4fe99a0c6adf8dr.jpeg", sizeBytes: 356925},
    {name: "Whisk_8dfc7a712e0dee38d4a48e07b1982e62dr.jpeg", sizeBytes: 402083},
    {name: "Whisk_92f1ea78a28ef0c8c294dcbe3893bbdbdr.jpeg", sizeBytes: 388436},
    {name: "Whisk_9b99e4455a096c0b42a414d1df6ce53cdr.jpeg", sizeBytes: 396288},
    {name: "Whisk_a709129068d22478fab48ddb8ff39c28dr.jpeg", sizeBytes: 345304},
    {name: "Whisk_a7792a98091f9c99a244d02fb3ae62a0dr.jpeg", sizeBytes: 458672},
    {name: "Whisk_abe279251cf2c44a81f454d5c38d7224dr.jpeg", sizeBytes: 442308},
    {name: "Whisk_c8f3e02e6b21bb784f846e49b48fdb33dr.jpeg", sizeBytes: 341560},
    {name: "Whisk_d0cab4bb6ddcc23a3f54eb9505349c84dr.jpeg", sizeBytes: 355022},
    {name: "Whisk_de9315a5ed3859887cc416961920fc1edr.jpeg", sizeBytes: 373695},
    {name: "Whisk_ed8736499c03f3e9b514b8ae17c5152adr.jpeg", sizeBytes: 427330},
    {name: "Whisk_f905220f37468ebb99c4d6514393b9e9dr.jpeg", sizeBytes: 326276}
];

// Utility functions
const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const formatFileName = (name) => {
    // Make nice readable titles if needed, but returning full for now
    return name;
};

// Application State
const state = {
    theme: localStorage.getItem('theme') || 'dark',
    currentTab: 'code-arena'
};

// DOM Elements
const elements = {
    themeToggle: document.getElementById('theme-toggle'),
    htmlDoc: document.documentElement,
    tabs: document.querySelectorAll('.tab-btn'),
    indicator: document.querySelector('.tab-indicator'),
    galleries: document.querySelectorAll('.gallery-grid'),
    codeCount: document.getElementById('code-count'),
    designCount: document.getElementById('design-count'),
    
    // Lightbox
    lightbox: document.getElementById('lightbox'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxClose: document.querySelector('.lightbox-close'),
    lightboxTitle: document.getElementById('lightbox-title'),
    lightboxSize: document.getElementById('lightbox-size'),
    lightboxDownload: document.getElementById('lightbox-download'),
    lightboxOverlay: document.querySelector('.lightbox-overlay')
};

// Theme Controller
const initTheme = () => {
    elements.htmlDoc.setAttribute('data-theme', state.theme);
    updateThemeIcon();
    
    elements.themeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        elements.htmlDoc.setAttribute('data-theme', state.theme);
        localStorage.setItem('theme', state.theme);
        updateThemeIcon();
    });
};

const updateThemeIcon = () => {
    const icon = elements.themeToggle.querySelector('i');
    icon.className = state.theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
};

// Tabs Controller
const initTabs = () => {
    elements.codeCount.textContent = codeArenaImages.length;
    elements.designCount.textContent = designArenaImages.length;
    
    requestAnimationFrame(updateTabIndicator);

    elements.tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const targetId = e.currentTarget.dataset.target;
            if (state.currentTab === targetId) return;
            
            state.currentTab = targetId;
            
            // UI updates
            elements.tabs.forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Tab content updates
            elements.galleries.forEach(g => {
                g.classList.remove('active');
                if(g.id === targetId) g.classList.add('active');
            });
            
            updateTabIndicator();
        });
    });
};

const updateTabIndicator = () => {
    const activeTab = document.querySelector('.tab-btn.active');
    if (!activeTab || !elements.indicator) return;
    
    // In mobile view indicator might be hidden via CSS
    if (window.innerWidth <= 768) {
        elements.indicator.style.display = 'none';
        return;
    } else {
        elements.indicator.style.display = 'block';
    }
    
    elements.indicator.style.width = `${activeTab.offsetWidth}px`;
    elements.indicator.style.transform = `translateX(${activeTab.offsetLeft - 8}px)`; // offset for parent padding
};

window.addEventListener('resize', () => {
    requestAnimationFrame(updateTabIndicator);
});

// Gallery Renderer
const renderGallery = (containerId, images, folderName) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    // Progressive rendering with delay for fancy staggered effect
    images.forEach((imgData, index) => {
        const fullPath = `${folderName}/${imgData.name}`;
        
        const el = document.createElement('div');
        el.className = 'gallery-item loading-skeleton';
        el.style.animationDelay = `${index * 0.05}s`;
        
        const img = new Image();
        img.className = 'gallery-img';
        
        img.onload = () => {
            el.classList.remove('loading-skeleton');
            // reset animation for standard appearance
            el.style.animation = 'none';
        };
        img.src = fullPath;
        img.alt = imgData.name;
        
        const info = document.createElement('div');
        info.className = 'gallery-item-info';
        info.innerHTML = `
            <div class="gallery-item-title">${formatFileName(imgData.name)}</div>
            <div class="gallery-item-size">${formatBytes(imgData.sizeBytes)}</div>
        `;
        
        el.appendChild(img);
        el.appendChild(info);
        
        el.addEventListener('click', () => openLightbox(imgData, fullPath));
        
        container.appendChild(el);
    });
};

// Lightbox Controller
const openLightbox = (imgData, src) => {
    elements.lightboxImg.src = src;
    elements.lightboxTitle.textContent = formatFileName(imgData.name);
    elements.lightboxSize.textContent = formatBytes(imgData.sizeBytes);
    elements.lightboxDownload.href = src;
    
    elements.lightbox.classList.add('active');
    elements.lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent scrolling
};

const closeLightbox = () => {
    elements.lightbox.classList.remove('active');
    elements.lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // restore scrolling
    
    // Clear after animation
    setTimeout(() => {
        elements.lightboxImg.src = '';
    }, 300);
};

const initLightbox = () => {
    elements.lightboxClose.addEventListener('click', closeLightbox);
    elements.lightboxOverlay.addEventListener('click', closeLightbox);
    
    // Esc to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
};

// Boot application
const init = () => {
    initTheme();
    initTabs();
    initLightbox();
    
    // Render galleries
    renderGallery('code-arena', codeArenaImages, 'code arena');
    renderGallery('design-arena', designArenaImages, 'design srena');
};

document.addEventListener('DOMContentLoaded', init);
