const burgerBtn = document.getElementById('burgerBtn');
const navigation = document.getElementById('navigation');

if (burgerBtn) {
    burgerBtn.onclick = function() {
        navigation.classList.toggle('open');
    };
}
document.addEventListener('click', function(event) {
    if (navigation && navigation.classList.contains('open')) {
        if (!navigation.contains(event.target) && event.target !== burgerBtn) {
            navigation.classList.remove('open');
        }
    }
});
let currentYear = new Date().getFullYear();
let footerText = document.querySelector('.footerContainer2 p');
if (footerText) {
    footerText.innerHTML = '© ' + currentYear + ' Gardener. Учебный проект, Алешин В.Е.';
}

let buyButtons = document.querySelectorAll('.inCartBtn');
let counterSpan = document.querySelector('.counter');
let counter = 0;

for (let i = 0; i < buyButtons.length; i++) {
     buyButtons[i].onclick = function() {
        let productName = this.getAttribute('data-name');
        alert('Товар ' + productName + ' добавлен в корзину');
        counter++;
        counterSpan.innerText = counter;
    };
}

let feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.onsubmit = function() {
        alert('Сообщение отправлено');
    };
}

const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

if (tabBtns.length > 0) {
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].onclick = function() {
            for (let j = 0; j < tabBtns.length; j++) {
                tabBtns[j].classList.remove('active');
            }
            for (let j = 0; j < tabPanes.length; j++) {
                tabPanes[j].classList.remove('active');
            }
            
            this.classList.add('active');
            
            const tabId = this.getAttribute('data-tab');
            const activePane = document.getElementById(tabId);
            if (activePane) {
                activePane.classList.add('active');
            }
        };
    }
}

const cropSelect = document.getElementById('cropSelect');
const resultBlock = document.getElementById('resultBlock');

const plantingData = {
    tomato: {
        month: 'Март - Апрель',
        tip: '🌡️ Высаживайте рассаду в теплицу или под плёнку. Любит тепло и солнечный свет.'
    },
    cucumber: {
        month: 'Апрель - Май',
        tip: '💧 Огурцы любят влажную почву. Сажайте семенами в прогретую землю.'
    },
    pepper: {
        month: 'Февраль - Март',
        tip: '☀️ Перец требует много света. Рассаду держите на самом солнечном окне.'
    },
    carrot: {
        month: 'Апрель - Май',
        tip: '🥕 Морковь сажайте сразу в открытый грунт. Почва должна быть рыхлой.'
    },
    potato: {
        month: 'Май',
        tip: '🥔 Сажайте, когда земля прогреется до +8°C. Картофель не любит заморозков.'
    },
    onion: {
        month: 'Апрель - Май',
        tip: '🧅 Лук-севок сажайте в конце апреля. Луковицы любят солнце и рыхлую почву.'
    },
    cabbage: {
        month: 'Март - Апрель',
        tip: '🥬 Капуста не боится холода. Рассаду можно высаживать в грунт в мае.'
    },
    strawberry: {
        month: 'Апрель - Май, Август - Сентябрь',
        tip: '🍓 Клубнику лучше сажать весной или в конце лета. Любит солнечные места.'
    },
    apple: {
        month: 'Апрель - Октябрь',
        tip: '🍎 Саженцы яблони сажайте весной до распускания почек или осенью.'
    },
    flowers: {
        month: 'Март - Май',
        tip: '🌼 Однолетники сажайте на рассаду в марте, в грунт - когда минуют заморозки.'
    }
};

function showPlantingInfo() {
    if (!cropSelect || !resultBlock) return;
    
    const selectedCrop = cropSelect.value;
    
    if (!selectedCrop) {
        resultBlock.innerHTML = `
            <div class="emptyResult">
                👆 Выберите культуру из списка выше
            </div>
        `;
        return;
    }
    
    const crop = plantingData[selectedCrop];
    
    if (crop) {
        resultBlock.innerHTML = `
            <div class="resultCard">
                <h3>📅 Время посадки</h3>
                <div class="plantingMonth">${crop.month}</div>
                <div class="plantingTip">
                    💡 <strong>Совет:</strong> ${crop.tip}
                </div>
            </div>
        `;
    } else {
        resultBlock.innerHTML = `
            <div class="emptyResult">
                ❓ Информация для этой культуры скоро появится
            </div>
        `;
    }
}

if (cropSelect) {
    cropSelect.onchange = showPlantingInfo;
}