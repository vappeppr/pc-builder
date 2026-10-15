const CATEGORIES = [
  { id: 'cpu', name: 'Процессор', icon: 'fa-microchip', required: true },
  { id: 'motherboard', name: 'Материнская плата', icon: 'fa-server', required: true },
  { id: 'gpu', name: 'Видеокарта', icon: 'fa-display', required: false },
  { id: 'ram', name: 'Оперативная память', icon: 'fa-memory', required: true },
  { id: 'storage', name: 'Накопители', icon: 'fa-hard-drive', required: true, multi: true },
  { id: 'psu', name: 'Блок питания', icon: 'fa-plug', required: true },
  { id: 'case', name: 'Корпус', icon: 'fa-box', required: true },
  { id: 'cooling', name: 'Охлаждение', icon: 'fa-fan', required: false },
];

const COMPONENTS = {
  cpu: [
    { id: 'cpu1', name: 'AMD Ryzen 5 7600', price: 18990, socket: 'AM5', tdp: 65, cores: 6, threads: 12, brand: 'AMD', img: 'https://placehold.co/200x200/1e293b/22d3ee?text=Ryzen+5+7600' },
    { id: 'cpu2', name: 'AMD Ryzen 7 7800X3D', price: 42990, socket: 'AM5', tdp: 120, cores: 8, threads: 16, brand: 'AMD', img: 'https://placehold.co/200x200/1e293b/22d3ee?text=7800X3D' },
    { id: 'cpu3', name: 'Intel Core i5-14600K', price: 24990, socket: 'LGA1700', tdp: 125, cores: 14, threads: 20, brand: 'Intel', img: 'https://placehold.co/200x200/1e293b/22d3ee?text=i5-14600K' },
    { id: 'cpu4', name: 'Intel Core i7-14700K', price: 38990, socket: 'LGA1700', tdp: 125, cores: 20, threads: 28, brand: 'Intel', img: 'https://placehold.co/200x200/1e293b/22d3ee?text=i7-14700K' },
    { id: 'cpu5', name: 'AMD Ryzen 9 7950X', price: 54990, socket: 'AM5', tdp: 170, cores: 16, threads: 32, brand: 'AMD', img: 'https://placehold.co/200x200/1e293b/22d3ee?text=7950X' },
    { id: 'cpu6', name: 'AMD Ryzen 5 5600', price: 9990, socket: 'AM4', tdp: 65, cores: 6, threads: 12, brand: 'AMD', img: 'https://placehold.co/200x200/1e293b/22d3ee?text=Ryzen+5+5600' },
  ],
  motherboard: [
    { id: 'mb1', name: 'ASUS TUF Gaming B650-Plus', price: 15990, socket: 'AM5', form: 'ATX', ramType: 'DDR5', slots: 4, brand: 'ASUS', img: 'https://placehold.co/200x200/1e293b/a78bfa?text=B650' },
    { id: 'mb2', name: 'MSI MAG B760 Tomahawk', price: 14990, socket: 'LGA1700', form: 'ATX', ramType: 'DDR5', slots: 4, brand: 'MSI', img: 'https://placehold.co/200x200/1e293b/a78bfa?text=B760' },
    { id: 'mb3', name: 'Gigabyte B650 Aorus Elite', price: 16990, socket: 'AM5', form: 'ATX', ramType: 'DDR5', slots: 4, brand: 'Gigabyte', img: 'https://placehold.co/200x200/1e293b/a78bfa?text=B650' },
    { id: 'mb4', name: 'ASRock Z790 Steel Legend', price: 21990, socket: 'LGA1700', form: 'ATX', ramType: 'DDR5', slots: 4, brand: 'ASRock', img: 'https://placehold.co/200x200/1e293b/a78bfa?text=Z790' },
    { id: 'mb5', name: 'MSI B650M Mortar', price: 12990, socket: 'AM5', form: 'mATX', ramType: 'DDR5', slots: 4, brand: 'MSI', img: 'https://placehold.co/200x200/1e293b/a78bfa?text=B650M' },
    { id: 'mb6', name: 'ASUS PRIME B550M-A', price: 8990, socket: 'AM4', form: 'mATX', ramType: 'DDR4', slots: 4, brand: 'ASUS', img: 'https://placehold.co/200x200/1e293b/a78bfa?text=B550' },
  ],
  gpu: [
    { id: 'gpu1', name: 'NVIDIA GeForce RTX 4060', price: 34990, power: 115, length: 240, brand: 'NVIDIA', vram: '8 GB', img: 'https://placehold.co/200x200/1e293b/22c55e?text=RTX+4060' },
    { id: 'gpu2', name: 'NVIDIA GeForce RTX 4070 Super', price: 64990, power: 220, length: 300, brand: 'NVIDIA', vram: '12 GB', img: 'https://placehold.co/200x200/1e293b/22c55e?text=RTX+4070S' },
    { id: 'gpu3', name: 'AMD Radeon RX 7800 XT', price: 52990, power: 263, length: 287, brand: 'AMD', vram: '16 GB', img: 'https://placehold.co/200x200/1e293b/22c55e?text=RX+7800XT' },
    { id: 'gpu4', name: 'NVIDIA GeForce RTX 4080 Super', price: 99990, power: 320, length: 304, brand: 'NVIDIA', vram: '16 GB', img: 'https://placehold.co/200x200/1e293b/22c55e?text=RTX+4080S' },
    { id: 'gpu5', name: 'AMD Radeon RX 7600', price: 27990, power: 165, length: 204, brand: 'AMD', vram: '8 GB', img: 'https://placehold.co/200x200/1e293b/22c55e?text=RX+7600' },
    { id: 'gpu6', name: 'NVIDIA GeForce RTX 4060 Ti', price: 44990, power: 160, length: 244, brand: 'NVIDIA', vram: '8 GB', img: 'https://placehold.co/200x200/1e293b/22c55e?text=RTX+4060+Ti' },
  ],
  ram: [
    { id: 'ram1', name: 'Kingston Fury Beast 32GB (2x16) DDR5-6000', price: 8990, type: 'DDR5', capacity: 32, speed: 6000, brand: 'Kingston', img: 'https://placehold.co/200x200/1e293b/f59e0b?text=32GB+DDR5' },
    { id: 'ram2', name: 'Corsair Vengeance 32GB (2x16) DDR5-6000', price: 9490, type: 'DDR5', capacity: 32, speed: 6000, brand: 'Corsair', img: 'https://placehold.co/200x200/1e293b/f59e0b?text=32GB+DDR5' },
    { id: 'ram3', name: 'G.Skill Trident Z5 64GB (2x32) DDR5-6000', price: 16990, type: 'DDR5', capacity: 64, speed: 6000, brand: 'G.Skill', img: 'https://placehold.co/200x200/1e293b/f59e0b?text=64GB+DDR5' },
    { id: 'ram4', name: 'Kingston Fury 16GB (2x8) DDR5-5600', price: 4990, type: 'DDR5', capacity: 16, speed: 5600, brand: 'Kingston', img: 'https://placehold.co/200x200/1e293b/f59e0b?text=16GB+DDR5' },
    { id: 'ram5', name: 'Corsair Vengeance 16GB (2x8) DDR4-3200', price: 3990, type: 'DDR4', capacity: 16, speed: 3200, brand: 'Corsair', img: 'https://placehold.co/200x200/1e293b/f59e0b?text=16GB+DDR4' },
  ],
  storage: [
    { id: 'ssd1', name: 'Samsung 990 Pro 1TB NVMe', price: 8990, type: 'NVMe', capacity: '1 TB', interface: 'PCIe 4.0', brand: 'Samsung', img: 'https://placehold.co/200x200/1e293b/ec4899?text=990+Pro+1TB' },
    { id: 'ssd2', name: 'WD Black SN850X 2TB NVMe', price: 14990, type: 'NVMe', capacity: '2 TB', interface: 'PCIe 4.0', brand: 'WD', img: 'https://placehold.co/200x200/1e293b/ec4899?text=SN850X+2TB' },
    { id: 'ssd3', name: 'Kingston NV2 1TB NVMe', price: 5490, type: 'NVMe', capacity: '1 TB', interface: 'PCIe 4.0', brand: 'Kingston', img: 'https://placehold.co/200x200/1e293b/ec4899?text=NV2+1TB' },
    { id: 'hdd1', name: 'Seagate Barracuda 2TB HDD', price: 4990, type: 'HDD', capacity: '2 TB', interface: 'SATA', brand: 'Seagate', img: 'https://placehold.co/200x200/1e293b/ec4899?text=HDD+2TB' },
    { id: 'ssd4', name: 'Samsung 870 EVO 1TB SATA', price: 7990, type: 'SATA', capacity: '1 TB', interface: 'SATA', brand: 'Samsung', img: 'https://placehold.co/200x200/1e293b/ec4899?text=870+EVO' },
  ],
  psu: [
    { id: 'psu1', name: 'be quiet! Pure Power 12M 750W', price: 8990, wattage: 750, efficiency: '80+ Gold', modular: true, brand: 'be quiet!', img: 'https://placehold.co/200x200/1e293b/ef4444?text=750W+Gold' },
    { id: 'psu2', name: 'Corsair RM850x 850W', price: 12990, wattage: 850, efficiency: '80+ Gold', modular: true, brand: 'Corsair', img: 'https://placehold.co/200x200/1e293b/ef4444?text=850W+Gold' },
    { id: 'psu3', name: 'Seasonic Focus GX-650', price: 7990, wattage: 650, efficiency: '80+ Gold', modular: true, brand: 'Seasonic', img: 'https://placehold.co/200x200/1e293b/ef4444?text=650W+Gold' },
    { id: 'psu4', name: 'be quiet! Dark Power 13 1000W', price: 19990, wattage: 1000, efficiency: '80+ Titanium', modular: true, brand: 'be quiet!', img: 'https://placehold.co/200x200/1e293b/ef4444?text=1000W' },
    { id: 'psu5', name: 'Deepcool PK650D 650W', price: 5990, wattage: 650, efficiency: '80+ Bronze', modular: false, brand: 'Deepcool', img: 'https://placehold.co/200x200/1e293b/ef4444?text=650W' },
  ],
  case: [
    { id: 'case1', name: 'NZXT H5 Flow', price: 7990, form: 'ATX', maxGpu: 365, fans: 2, brand: 'NZXT', img: 'https://placehold.co/200x200/1e293b/94a3b8?text=H5+Flow' },
    { id: 'case2', name: 'Lian Li Lancool 216', price: 8990, form: 'ATX', maxGpu: 392, fans: 3, brand: 'Lian Li', img: 'https://placehold.co/200x200/1e293b/94a3b8?text=Lancool+216' },
    { id: 'case3', name: 'Fractal Design Pop Air', price: 6990, form: 'ATX', maxGpu: 355, fans: 2, brand: 'Fractal', img: 'https://placehold.co/200x200/1e293b/94a3b8?text=Pop+Air' },
    { id: 'case4', name: 'Cooler Master TD500 Mesh', price: 7490, form: 'ATX', maxGpu: 410, fans: 3, brand: 'Cooler Master', img: 'https://placehold.co/200x200/1e293b/94a3b8?text=TD500' },
    { id: 'case5', name: 'Deepcool CC560', price: 4990, form: 'ATX', maxGpu: 370, fans: 2, brand: 'Deepcool', img: 'https://placehold.co/200x200/1e293b/94a3b8?text=CC560' },
  ],
  cooling: [
    { id: 'cool1', name: 'Deepcool AK620', price: 4990, type: 'Air', tdp: 260, brand: 'Deepcool', img: 'https://placehold.co/200x200/1e293b/38bdf8?text=AK620' },
    { id: 'cool2', name: 'Noctua NH-D15', price: 8990, type: 'Air', tdp: 250, brand: 'Noctua', img: 'https://placehold.co/200x200/1e293b/38bdf8?text=NH-D15' },
    { id: 'cool3', name: 'Arctic Liquid Freezer II 360', price: 9990, type: 'AIO 360', tdp: 300, brand: 'Arctic', img: 'https://placehold.co/200x200/1e293b/38bdf8?text=LF+II+360' },
    { id: 'cool4', name: 'be quiet! Dark Rock Pro 5', price: 7990, type: 'Air', tdp: 270, brand: 'be quiet!', img: 'https://placehold.co/200x200/1e293b/38bdf8?text=DR+Pro+5' },
    { id: 'cool5', name: 'ID-Cooling SE-214-XT', price: 1990, type: 'Air', tdp: 180, brand: 'ID-Cooling', img: 'https://placehold.co/200x200/1e293b/38bdf8?text=SE-214' },
  ],
};

let currentCategory = 'cpu';
let build = {};
let compareList = [];

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  updateBrandFilter();
  renderComponents();
  updateUI();
});

function renderCategories() {
  const nav = document.getElementById('categories-nav');
  nav.innerHTML = CATEGORIES.map(cat => `
    <button onclick="selectCategory('${cat.id}')" 
            data-cat="${cat.id}"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition hover:bg-slate-800 ${currentCategory === cat.id ? 'bg-slate-800 text-white' : 'text-slate-400'}">
      <i class="fa-solid ${cat.icon} w-5 text-center"></i>
      <span class="flex-1 text-sm">${cat.name}</span>
      <span class="w-2 h-2 rounded-full ${build[cat.id] ? 'bg-accent' : 'bg-slate-600'}"></span>
    </button>
  `).join('');
}

function selectCategory(id) {
  currentCategory = id;
  document.querySelectorAll('#categories-nav button').forEach(btn => {
    btn.classList.toggle('bg-slate-800', btn.dataset.cat === id);
    btn.classList.toggle('text-white', btn.dataset.cat === id);
    btn.classList.toggle('text-slate-400', btn.dataset.cat !== id);
  });
  const cat = CATEGORIES.find(c => c.id === id);
  document.getElementById('current-category-title').textContent = cat.name;
  updateBrandFilter();
  renderComponents();
}

function updateBrandFilter() {
  const items = COMPONENTS[currentCategory] || [];
  const brands = [...new Set(items.map(i => i.brand))].sort();
  const select = document.getElementById('brand-filter');
  select.innerHTML = '<option value="">Все бренды</option>' + brands.map(b => `<option value="${b}">${b}</option>`).join('');
}

function renderComponents() {
  const grid = document.getElementById('components-grid');
  let items = [...(COMPONENTS[currentCategory] || [])];
  const brand = document.getElementById('brand-filter').value;
  const sort = document.getElementById('sort-filter').value;

  if (brand) items = items.filter(i => i.brand === brand);
  if (sort === 'price-asc') items.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') items.sort((a, b) => b.price - a.price);
  if (sort === 'name') items.sort((a, b) => a.name.localeCompare(b.name));

  document.getElementById('items-count').textContent = `${items.length} товаров`;

  grid.innerHTML = items.map(item => {
    const isSelected = isSelected(currentCategory, item.id);
    const inCompare = compareList.some(c => c.id === item.id);
    return `
      <div class="component-card bg-card rounded-2xl p-4 border border-slate-800 ${isSelected ? 'ring-2 ring-accent bg-accent/10' : ''}">
        <img src="${item.img}" alt="${item.name}" class="w-full h-36 object-cover rounded-xl mb-3 bg-slate-800">
        <h3 class="font-medium text-sm mb-1 line-clamp-2">${item.name}</h3>
        <div class="text-xs text-slate-400 mb-3 space-y-0.5">${getSpecs(currentCategory, item)}</div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-lg font-bold text-accent">${formatPrice(item.price)}</span>
          <div class="flex gap-1">
            <button onclick="toggleCompareItem('${currentCategory}', '${item.id}')" class="px-2 py-1.5 rounded-lg text-xs ${inCompare ? 'bg-amber-500 text-dark' : 'bg-slate-700'}">
              <i class="fa-solid fa-scale-balanced"></i>
            </button>
            <button onclick="toggleSelect('${currentCategory}', '${item.id}')" class="px-3 py-1.5 rounded-lg text-xs font-medium transition ${isSelected ? 'bg-accent text-dark' : 'bg-slate-700 hover:bg-slate-600'}">
              ${isSelected ? 'Выбрано' : 'Выбрать'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getSpecs(cat, item) {
  switch(cat) {
    case 'cpu': return `${item.cores} ядер / ${item.threads} потоков • ${item.socket} • ${item.tdp}W`;
    case 'motherboard': return `${item.socket} • ${item.form} • ${item.ramType}`;
    case 'gpu': return `${item.vram} • ${item.power}W • ${item.length} мм`;
    case 'ram': return `${item.capacity} ГБ • ${item.type}-${item.speed}`;
    case 'storage': return `${item.capacity} • ${item.type} • ${item.interface}`;
    case 'psu': return `${item.wattage}W • ${item.efficiency}${item.modular ? ' • Modular' : ''}`;
    case 'case': return `${item.form} • GPU до ${item.maxGpu} мм`;
    case 'cooling': return `${item.type} • до ${item.tdp}W`;
    default: return '';
  }
}

function isSelected(catId, itemId) {
  const selected = build[catId];
  if (!selected) return false;
  if (Array.isArray(selected)) return selected.some(i => i.id === itemId);
  return selected.id === itemId;
}

function toggleSelect(catId, itemId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  const item = COMPONENTS[catId].find(i => i.id === itemId);
  if (!item) return;

  if (cat.multi) {
    if (!build[catId]) build[catId] = [];
    const idx = build[catId].findIndex(i => i.id === itemId);
    if (idx >= 0) build[catId].splice(idx, 1);
    else build[catId].push(item);
    if (build[catId].length === 0) delete build[catId];
  } else {
    if (build[catId]?.id === itemId) delete build[catId];
    else build[catId] = item;
  }

  renderCategories();
  renderComponents();
  updateUI();
}

function toggleCompareItem(catId, itemId) {
  const item = COMPONENTS[catId].find(i => i.id === itemId);
  if (!item) return;
  const idx = compareList.findIndex(c => c.id === itemId);
  if (idx >= 0) compareList.splice(idx, 1);
  else if (compareList.length < 3) compareList.push({...item, category: catId});
  else alert('Максимум 3 товара для сравнения');
  document.getElementById('compare-count').textContent = compareList.length;
  renderComponents();
}

function toggleCompare() {
  if (compareList.length === 0) {
    alert('Выберите товары для сравнения');
    return;
  }
  const content = document.getElementById('compare-content');
  let html = '<table class="w-full text-sm"><thead><tr><th class="text-left p-2">Параметр</th>' + compareList.map(i => `<th class="p-2 text-left">${i.name}</th>`).join('') + '</tr></thead><tbody>';
  html += `<tr><td class="p-2 text-slate-400">Цена</td>${compareList.map(i => `<td class="p-2 font-medium">${formatPrice(i.price)}</td>`).join('')}</tr>`;
  html += `<tr><td class="p-2 text-slate-400">Бренд</td>${compareList.map(i => `<td class="p-2">${i.brand}</td>`).join('')}</tr>`;
  html += '</tbody></table>';
  content.innerHTML = html;
  openModal('compare-modal');
}

function updateUI() {
  updateSummary();
  updateProgress();
  checkCompatibility();
  const total = calculateTotal();
  document.getElementById('header-total').textContent = formatPrice(total);
  document.getElementById('summary-total').textContent = formatPrice(total);
  document.getElementById('compare-count').textContent = compareList.length;
}

function updateSummary() {
  const container = document.getElementById('build-summary');
  const entries = Object.entries(build);
  if (entries.length === 0) {
    container.innerHTML = '<p class="text-slate-500 text-center py-8">Выберите комплектующие</p>';
    return;
  }
  container.innerHTML = entries.map(([catId, item]) => {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (Array.isArray(item)) {
      return item.map(i => `
        <div class="flex justify-between items-start gap-2 py-1">
          <div>
            <div class="text-xs text-slate-500">${cat.name}</div>
            <div class="text-sm">${i.name}</div>
          </div>
          <div class="text-sm font-medium whitespace-nowrap">${formatPrice(i.price)}</div>
        </div>
      `).join('');
    }
    return `
      <div class="flex justify-between items-start gap-2 py-1">
        <div>
          <div class="text-xs text-slate-500">${cat.name}</div>
          <div class="text-sm">${item.name}</div>
        </div>
        <div class="text-sm font-medium whitespace-nowrap">${formatPrice(item.price)}</div>
      </div>
    `;
  }).join('');
}

function updateProgress() {
  const filled = CATEGORIES.filter(c => build[c.id]).length;
  const total = CATEGORIES.length;
  document.getElementById('progress-text').textContent = `${filled} / ${total}`;
  document.getElementById('progress-bar').style.width = `${(filled / total) * 100}%`;
}

function calculateTotal() {
  let total = 0;
  for (const item of Object.values(build)) {
    if (Array.isArray(item)) item.forEach(i => total += i.price);
    else total += item.price;
  }
  return total;
}

function checkCompatibility() {
  const warnings = [];
  const cpu = build.cpu;
  const mb = build.motherboard;
  const ram = build.ram;
  const gpu = build.gpu;
  const psu = build.psu;
  const pcCase = build.case;

  if (cpu && mb && cpu.socket !== mb.socket) {
    warnings.push(`Сокет процессора (${cpu.socket}) не совпадает с материнской платой (${mb.socket})`);
  }
  if (mb && ram && mb.ramType !== ram.type) {
    warnings.push(`Тип памяти (${ram.type}) не поддерживается материнской платой (${mb.ramType})`);
  }
  if (gpu && pcCase && gpu.length > pcCase.maxGpu) {
    warnings.push(`Видеокарта (${gpu.length} мм) может не поместиться в корпус (макс. ${pcCase.maxGpu} мм)`);
  }
  if (gpu && psu) {
    const estimated = (cpu?.tdp || 100) + gpu.power + 100;
    if (psu.wattage < estimated) {
      warnings.push(`Блок питания ${psu.wattage}W может быть недостаточен (рекомендуется от ${Math.ceil(estimated / 50) * 50}W)`);
    }
  }

  const el = document.getElementById('compatibility-warnings');
  if (warnings.length === 0) {
    el.innerHTML = '<div class="text-xs text-emerald-400 flex items-center gap-1"><i class="fa-solid fa-check"></i> Совместимость в порядке</div>';
  } else {
    el.innerHTML = warnings.map(w => `
      <div class="text-xs text-amber-400 bg-amber-400/10 rounded-lg p-2 flex gap-2">
        <i class="fa-solid fa-triangle-exclamation mt-0.5"></i>
        <span>${w}</span>
      </div>
    `).join('');
  }
}

function formatPrice(n) {
  return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
}

function resetBuild() {
  if (confirm('Сбросить всю сборку?')) {
    build = {};
    compareList = [];
    renderCategories();
    renderComponents();
    updateUI();
  }
}

function exportBuild() {
  const lines = ['=== Сборка ПК ===', ''];
  let total = 0;
  for (const [catId, item] of Object.entries(build)) {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (Array.isArray(item)) {
      item.forEach(i => {
        lines.push(`${cat.name}: ${i.name} — ${formatPrice(i.price)}`);
        total += i.price;
      });
    } else {
      lines.push(`${cat.name}: ${item.name} — ${formatPrice(item.price)}`);
      total += item.price;
    }
  }
  lines.push('', `Итого: ${formatPrice(total)}`);
  document.getElementById('export-content').textContent = lines.join('\n');
  openModal('export-modal');
}

function openOrder() {
  if (Object.keys(build).length === 0) {
    alert('Сначала выберите комплектующие');
    return;
  }
  document.getElementById('order-total').textContent = formatPrice(calculateTotal());
  openModal('order-modal');
}

function submitOrder() {
  const name = document.getElementById('order-name').value.trim();
  const phone = document.getElementById('order-phone').value.trim();
  if (!name || !phone) {
    alert('Заполните имя и телефон');
    return;
  }
  alert('Заказ отправлен! Мы свяжемся с вами.');
  closeModal('order-modal');
  document.getElementById('order-name').value = '';
  document.getElementById('order-phone').value = '';
  document.getElementById('order-address').value = '';
}

function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
  document.getElementById(id).classList.add('flex');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  document.getElementById(id).classList.remove('flex');
}

function copyExport() {
  const text = document.getElementById('export-content').textContent;
  navigator.clipboard.writeText(text).then(() => alert('Скопировано!'));
}