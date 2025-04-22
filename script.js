import apis from './apis.js';

// DOM 요소 가져오기 - 메인 검색 페이지
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const categoryFilter = document.getElementById('category-filter');
const providerFilter = document.getElementById('provider-filter');
const pricingFilter = document.getElementById('pricing-filter');

// DOM 요소 가져오기 - 결과 페이지
const resultsPage = document.getElementById('results-page');
const searchHero = document.getElementById('search-hero');
const headerSearchInput = document.getElementById('header-search-input');
const headerSearchButton = document.getElementById('header-search-button');
const headerCategoryFilter = document.getElementById('header-category-filter');
const headerProviderFilter = document.getElementById('header-provider-filter');
const headerPricingFilter = document.getElementById('header-pricing-filter');
const resultsContainer = document.getElementById('results-container');
const resultCount = document.getElementById('result-count');
const apiCardTemplate = document.getElementById('api-card-template');

// 그리드/리스트 뷰 전환 버튼
const gridViewBtn = document.getElementById('grid-view-btn');
const listViewBtn = document.getElementById('list-view-btn');

// 검색어 디바운스를 위한 타이머
let searchDebounceTimer;

// 필터에 옵션 채우기
function populateFilterOptions() {
    // 카테고리 옵션 추출 및 정렬
    const categories = [...new Set(apis.map(api => api.category))].sort();
    
    // 메인 페이지 카테고리 옵션 채우기
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
    
    // 결과 페이지 카테고리 옵션 채우기
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        headerCategoryFilter.appendChild(option);
    });

    // 모든 제공자 옵션 추출 및 정렬
    const allProviders = [...new Set(apis.map(api => api.provider))].sort();
    
    // 메인 페이지 제공자 옵션 채우기
    populateProviderOptions(providerFilter, allProviders);
    
    // 결과 페이지 제공자 옵션 채우기
    populateProviderOptions(headerProviderFilter, allProviders);

    // 모든 가격 정책 옵션 추출 및 정렬
    const allPricingOptions = [...new Set(apis.map(api => api.pricing))].sort();
    
    // 기본 가격 정책 옵션 (수동으로 정의된 항목)
    const defaultPricingOptions = [
        { value: '무료', label: '무료' },
        { value: '무료 티어', label: '무료 티어 있음' },
        { value: '유료', label: '유료' },
        { value: '사용량 기반', label: '사용량 기반' },
        { value: '트랜잭션 기반', label: '트랜잭션 기반' }
    ];

    // 중복 제거를 위해 Set 사용
    const uniquePricingSet = new Set();
    
    // 기본 옵션을 Set에 추가
    defaultPricingOptions.forEach(option => {
        uniquePricingSet.add(JSON.stringify(option));
    });
    
    // API에서 발견된 가격 정책을 Set에 추가
    allPricingOptions.forEach(pricing => {
        // 기존 옵션에 없는 가격 정책만 추가
        const existingOption = defaultPricingOptions.find(opt => pricing.includes(opt.value));
        if (!existingOption) {
            uniquePricingSet.add(JSON.stringify({ value: pricing, label: pricing }));
        }
    });
    
    // Set을 배열로 변환하고 정렬
    const uniquePricingOptions = Array.from(uniquePricingSet)
        .map(item => JSON.parse(item))
        .sort((a, b) => a.label.localeCompare(b.label));
    
    // 메인 페이지 가격 정책 옵션 채우기
    populatePricingOptions(pricingFilter, uniquePricingOptions);
    
    // 결과 페이지 가격 정책 옵션 채우기
    populatePricingOptions(headerPricingFilter, uniquePricingOptions);
}

// 제공자 드롭다운 채우기 함수
function populateProviderOptions(selectElement, providers) {
    // 기존 옵션 제거 (첫번째 '전체' 옵션 유지)
    while (selectElement.options.length > 1) {
        selectElement.remove(1);
    }
    
    // 새 옵션 추가
    providers.forEach(provider => {
        const option = document.createElement('option');
        option.value = provider;
        option.textContent = provider;
        selectElement.appendChild(option);
    });
}

// 가격 정책 드롭다운 채우기 함수
function populatePricingOptions(selectElement, pricingOptions) {
    // 기존 옵션 제거 (첫번째 '전체' 옵션 유지)
    while (selectElement.options.length > 1) {
        selectElement.remove(1);
    }
    
    // 새 옵션 추가
    pricingOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        selectElement.appendChild(optionElement);
    });
}

// 카테고리에 따라 제공자 및 가격 정책 필터 업데이트
function updateFiltersBasedOnCategory(categoryValue, isHeader = false) {
    // 선택된 카테고리에 속하는 API 목록
    const filteredApis = categoryValue
        ? apis.filter(api => api.category === categoryValue)
        : apis;
    
    // 해당 카테고리에 속하는 제공자 목록 추출
    const categoryProviders = [...new Set(filteredApis.map(api => api.provider))].sort();
    
    // 해당 카테고리에 속하는 가격 정책 목록 추출
    const categoryPricingOptions = [...new Set(filteredApis.map(api => api.pricing))];

    // 기본 가격 정책 옵션 중 해당 카테고리에 존재하는 것만 필터링
    const defaultPricingOptions = [
        { value: '무료', label: '무료' },
        { value: '무료 티어', label: '무료 티어 있음' },
        { value: '유료', label: '유료' },
        { value: '사용량 기반', label: '사용량 기반' },
        { value: '트랜잭션 기반', label: '트랜잭션 기반' }
    ];

    const uniquePricingSet = new Set();
    
    // 카테고리에 맞는 기본 옵션을 Set에 추가
    defaultPricingOptions.forEach(option => {
        // 해당 옵션이 categoryPricingOptions 중 하나라도 포함되어 있으면 추가
        if (categoryPricingOptions.some(price => price.includes(option.value))) {
            uniquePricingSet.add(JSON.stringify(option));
        }
    });
    
    // 카테고리 API에서 발견된 가격 정책을 Set에 추가
    categoryPricingOptions.forEach(pricing => {
        // 기존 옵션에 없는 가격 정책만 추가
        const existingOption = defaultPricingOptions.find(opt => pricing.includes(opt.value));
        if (!existingOption) {
            uniquePricingSet.add(JSON.stringify({ value: pricing, label: pricing }));
        }
    });
    
    // Set을 배열로 변환하고 정렬
    const finalPricingOptions = Array.from(uniquePricingSet)
        .map(item => JSON.parse(item))
        .sort((a, b) => a.label.localeCompare(b.label));
    
    // 적절한 선택기 요소 가져오기
    const providerSelect = isHeader ? headerProviderFilter : providerFilter;
    const pricingSelect = isHeader ? headerPricingFilter : pricingFilter;
    
    // 현재 선택된 값 저장
    const currentProviderValue = providerSelect.value;
    const currentPricingValue = pricingSelect.value;
    
    // 드롭다운 업데이트
    populateProviderOptions(providerSelect, categoryProviders);
    populatePricingOptions(pricingSelect, finalPricingOptions);
    
    // 업데이트된 드롭다운에서 이전 값 복원 (가능한 경우)
    if (currentProviderValue && categoryProviders.includes(currentProviderValue)) {
        providerSelect.value = currentProviderValue;
    } else {
        providerSelect.value = '';
    }
    
    if (currentPricingValue && finalPricingOptions.some(option => option.value === currentPricingValue)) {
        pricingSelect.value = currentPricingValue;
    } else {
        pricingSelect.value = '';
    }
}

// API 카드 생성 함수
function createApiCard(api) {
    const cardClone = apiCardTemplate.content.cloneNode(true);
    
    // 카드 내용 채우기
    cardClone.querySelector('.api-name').textContent = api.name;
    cardClone.querySelector('.api-provider').textContent = api.provider;
    cardClone.querySelector('.api-description').textContent = api.description;
    cardClone.querySelector('.api-category').textContent = api.category;
    cardClone.querySelector('.api-pricing').textContent = api.pricing;
    cardClone.querySelector('.api-auth').textContent = api.auth;
    
    // 문서 링크 설정
    const docLink = cardClone.querySelector('.api-doc-link');
    docLink.href = api.documentation;
    
    return cardClone;
}

// 검색 및 필터링 기능
function searchApis(fromHeader = false) {
    // 적절한 입력 필드 및 필터를 선택
    const searchTermInput = fromHeader ? headerSearchInput : searchInput;
    const categoryFilterSelect = fromHeader ? headerCategoryFilter : categoryFilter;
    const providerFilterSelect = fromHeader ? headerProviderFilter : providerFilter;
    const pricingFilterSelect = fromHeader ? headerPricingFilter : pricingFilter;
    
    const searchTerm = searchTermInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilterSelect.value;
    const selectedProvider = providerFilterSelect.value;
    const selectedPricing = pricingFilterSelect.value;
    
    // 검색어가 비어있고, 모든 필터가 전체(빈 값)이면 메인 페이지로 돌아가기 (헤더에서 검색 시)
    if (fromHeader && !searchTerm && !selectedCategory && !selectedProvider && !selectedPricing) {
        showMainPage();
        return;
    }
    
    // 화면 모드 전환
    showResultsPage();
    
    // 헤더 검색창에 메인 검색창의 검색어 동기화 또는 그 반대
    if (!fromHeader) {
        // 메인에서 검색 시 헤더 필터 값 동기화
        headerSearchInput.value = searchTerm;
        headerCategoryFilter.value = selectedCategory;
        // 카테고리에 맞게 제공자와 가격 정책 필터 업데이트
        updateFiltersBasedOnCategory(selectedCategory, true);
        // 제공자와 가격 정책 값 설정
        headerProviderFilter.value = selectedProvider;
        headerPricingFilter.value = selectedPricing;
    } else {
        // 헤더에서 검색 시 메인 필터 값 동기화
        searchInput.value = searchTerm;
        categoryFilter.value = selectedCategory;
        // 카테고리에 맞게 제공자와 가격 정책 필터 업데이트
        updateFiltersBasedOnCategory(selectedCategory, false);
        // 제공자와 가격 정책 값 설정
        providerFilter.value = selectedProvider;
        pricingFilter.value = selectedPricing;
    }
    
    // 검색 중 표시
    displaySearchingState();
    
    // 검색 처리를 약간 지연시켜 애니메이션 효과가 보이도록 함
    setTimeout(() => {
        // 필터링 적용
        const filteredApis = apis.filter(api => {
            // 검색어 필터링
            const matchesSearch = !searchTerm || 
                api.name.toLowerCase().includes(searchTerm) ||
                api.description.toLowerCase().includes(searchTerm) ||
                api.category.toLowerCase().includes(searchTerm) ||
                api.provider.toLowerCase().includes(searchTerm);
            
            // 카테고리 필터링
            const matchesCategory = selectedCategory === '' || api.category === selectedCategory;
            
            // 제공자 필터링
            const matchesProvider = selectedProvider === '' || api.provider === selectedProvider;
            
            // 가격 정책 필터링
            const matchesPricing = selectedPricing === '' || api.pricing.includes(selectedPricing);
            
            return matchesSearch && matchesCategory && matchesProvider && matchesPricing;
        });
        
        displayResults(filteredApis);
        
        // 검색이 완료되면 페이지 제목 업데이트
        updatePageTitle(searchTerm, filteredApis.length);
    }, 300);
}

// 검색 중 상태 표시
function displaySearchingState() {
    resultsContainer.innerHTML = `
        <div class="no-results" style="text-align: center;">
            <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 15px;"></i>
            <p>검색 중...</p>
        </div>
    `;
    resultCount.textContent = '';
}

// 페이지 제목 업데이트
function updatePageTitle(searchTerm, resultCount) {
    if (searchTerm) {
        document.title = `${searchTerm} - API 검색 결과 | API Hub`;
    } else {
        document.title = `API Hub - API 검색 포털`;
    }
}

// 결과 표시 함수
function displayResults(results) {
    // 결과 컨테이너 비우기
    resultsContainer.innerHTML = '';
    
    // 결과 수 업데이트
    resultCount.textContent = `(${results.length})`;
    
    if (results.length === 0) {
        // 결과가 없는 경우 메시지 표시
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <i class="fas fa-search" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 15px;"></i>
            <p>검색 결과가 없습니다. 다른 검색어나 필터를 시도해보세요.</p>
        `;
        resultsContainer.appendChild(noResults);
    } else {
        // 결과가 있는 경우 각 API에 대한 카드 생성
        results.forEach(api => {
            const card = createApiCard(api);
            resultsContainer.appendChild(card);
        });
    }
}

// 뷰 모드 전환 함수
function switchViewMode(mode) {
    if (mode === 'grid') {
        resultsContainer.classList.add('grid-view');
        resultsContainer.classList.remove('list-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        localStorage.setItem('preferredViewMode', 'grid');
    } else if (mode === 'list') {
        resultsContainer.classList.add('list-view');
        resultsContainer.classList.remove('grid-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        localStorage.setItem('preferredViewMode', 'list');
    }
}

// 초기 뷰 모드 설정
function setInitialViewMode() {
    const savedMode = localStorage.getItem('preferredViewMode') || 'grid';
    switchViewMode(savedMode);
}

// 메인 검색 페이지 표시
function showMainPage() {
    searchHero.style.display = 'flex';
    resultsPage.style.display = 'none';
    document.title = 'API Hub - API 검색 포털';
}

// 결과 페이지 표시
function showResultsPage() {
    searchHero.style.display = 'none';
    resultsPage.style.display = 'block';
    setInitialViewMode();
}

// 로고 클릭 이벤트 처리 (메인 페이지로 돌아가기)
function handleLogoClick() {
    // 모든 검색어와 필터 초기화
    searchInput.value = '';
    headerSearchInput.value = '';
    categoryFilter.value = '';
    headerCategoryFilter.value = '';
    providerFilter.value = '';
    headerProviderFilter.value = '';
    pricingFilter.value = '';
    headerPricingFilter.value = '';
    
    showMainPage();
}

// 이벤트 리스너 등록
function setupEventListeners() {
    // 메인 검색 페이지 이벤트
    searchButton.addEventListener('click', () => searchApis(false));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchApis(false);
        }
    });
    
    // 필터 변경 이벤트 (메인 페이지)
    categoryFilter.addEventListener('change', (e) => {
        updateFiltersBasedOnCategory(e.target.value, false);
        // 필터 변경 시 자동 검색 실행
        searchApis(false);
    });
    providerFilter.addEventListener('change', () => {
        // 필터 변경 시 자동 검색 실행
        searchApis(false);
    });
    pricingFilter.addEventListener('change', () => {
        // 필터 변경 시 자동 검색 실행
        searchApis(false);
    });
    
    // 결과 페이지 헤더 이벤트
    headerSearchButton.addEventListener('click', () => searchApis(true));
    headerSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchApis(true);
        }
    });
    
    // 필터 변경 이벤트 (결과 페이지)
    headerCategoryFilter.addEventListener('change', (e) => {
        updateFiltersBasedOnCategory(e.target.value, true);
        // 필터 변경 시 자동 검색 실행
        searchApis(true);
    });
    headerProviderFilter.addEventListener('change', () => {
        // 필터 변경 시 자동 검색 실행
        searchApis(true);
    });
    headerPricingFilter.addEventListener('change', () => {
        // 필터 변경 시 자동 검색 실행
        searchApis(true);
    });
    
    // 뷰 모드 전환 버튼
    gridViewBtn.addEventListener('click', () => switchViewMode('grid'));
    listViewBtn.addEventListener('click', () => switchViewMode('list'));
    
    // 로고 클릭 이벤트 (메인 페이지로 돌아가기)
    document.querySelector('.header-content h1').addEventListener('click', handleLogoClick);
}

// 초기화 함수
function init() {
    populateFilterOptions();
    setupEventListeners();
    showMainPage(); // 초기에는 메인 페이지 표시
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init); 