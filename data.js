var data = [{
    title: "",
    content: ""
},{
    title: "Амплітудна модуляція",
    content: "При амплітудної модуляції для логічної одиниці вибирається один рівень амплітуди синусоїди несучої частоти, а для логічного нуля – інший. Цей спосіб рідко використовується через низьку завадостійкості, але часто застосовується в поєднанні з фазовою модуляцією."
}, {
    title: "Частотна модуляція",
    content: "При частотної модуляції значення 0 та 1 вихідних даних передаються синусоїдами з різною частотою – f0 та f1. Цей спосіб модуляції досить простий і зазвичай застосовується в модемах, що працюють на швидкостях 300 або 1200 біт/с."
}, {
    title: "Фазова модуляція",
    content: "При фазової модуляції значенням даних 0 та 1 відповідають сигнали однакової частоти, але різної фази, наприклад 0 та 180 або 0 та 90 градусів."
}, {
    title: "Потенційний код без повернення до нуля",
    content: "Потенційний код без повернення до нуля (Non return to Zero, NRZ) – метод потенційного кодування, у якого при передачі послідовності одиниць сигнал не повертається до нуля під час такту. Метод NRZ простий в реалізації, дає можливості розпізнавання помилок, але не володіє властивістю самосинхронізації. При високих швидкостях обміну даними і довгих послідовностях одиниць або нулів невелике розузгодження тактових частот може привести до помилки в цілий такт і, відповідно, читання некоректного значення біта. У чистому вигляді код NRZ в мережах не використовується."
},{
    title: "Потенційний код з інверсією при одиниці",
    content: "Потенційний код з інверсією при одиниці (Non return to Zero with ones Inverted, NRZI) – метод потенційного кодування схожий на AMI, але лише з двома рівнями сигналу. При передачі нуля він передає потенціал, який був встановлений в попередньому такті (тобто не міняє його), а при передачі одиниці потенціал інвертується на протилежний. Зручний в тих випадках, коли наявність третього рівня сигналу вельми небажане, наприклад в оптичних кабелях, де стійко розізнаються два стани сигналу – світло та темнота."
}, {
    title: "Метод біполярного кодування з альтернативною інверсією",
    content: "Метод біполярного кодування з альтернативною інверсією (Bipolar Alternate Mark Inversion, AMI) – є однією з модифікацій методу NRZ у якому використовуються три рівні потенціалу – негативний, нульовий і позитивний. Для кодування логічного нуля використовується нульовий потенціал, а логічна одиниця кодується або позитивним потенціалом, або негативним, при цьому потенціал кожної нової одиниці протилежний до потенціалу попередньої. В цілому, використання коди AMI приводить до вужчого спектру сигналу, чим для коди NRZ, і, таким чином, до вищої пропускної спроможності лінії."
},  {
    title: "Біполярний імпульсний код",
    content: "Біполярний імпульсний код – метод імпульсного кодування в якому одиниця представлена імпульсом однієї полярності, а нуль – іншої. Кожен імпульс триває половину такту. Такий код володіє відмінними самосинхронізуючими властивостями, але з-за широкого спектру використовується рідко."
}, {
    title: "Потенційний код 2B1Q",
    content: "Потенційний код 2B1Q – метод потенційного кодування з чотирма рівнями сигналу для кодування даних. Назва відображає його суть метода. Кожні два біта (2B) передаються за один такт сигналом, що має чотири стани (1Q). Парі біт 00 відповідає потенціал - 2,5 В; парі біт 01 - потенціал – 0,833 В; парі 11 - потенціал +0,833; парі 10 - потенціал +2,5 В. Для методу потрібні додаткові заходи по боротьбі з довгими послідовностями однакових пар бітів. При випадковому чергуванні бітів спектр сигналів в два рази вужчий, ніж в коди NRZ, тому як при тій же бітовій швидкості, тривалість такту збільшується в два рази. За допомогою коду 2B1Q можна по одній і тій же лінії передавати дані в два рази швидше, ніж за допомогою коду AMI або NRZI. Проте реалізація цього методу вимагає більш потужного передавача і складнішого приймача, який повинен розрізняти чотири рівні сигналу."
}, {
    title: "Манчестерський код",
    content: "Манчестерський код – метод імпульсного кодування у якому для кодування нулів і одиниць використовується перепад потенціалу, тобто фронт імпульсу. Одиниця кодується перепадом від низького рівня сигналу до високого, а нуль – зворотним перепадом. На початку кожного такту може відбуватися службовий перепад сигналу, якщо потрібно представити декілька одиниць або нулів підряд. До недавнього часу був найпоширенішим методом кодування в технологіях Ethernet і Token Ring. Ширина полоси пропускання метода в півтора рази вужча, ніж в біполярного імпульсному коді. Для передачі даних використовується два рівні сигналу."
}, ]
