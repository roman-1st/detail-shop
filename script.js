const servicesBase = [
    // класс не выбран
    [
        {
            id: 1,
            ServiceTitle: 'Полировка автомобиля',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {id:1, ServiceTitle: 'Легкая полировка кузова автомобиля',price: "от 10000", 
                ServicesDescription: 'Легкая полировка кузова предает блеск и насыщенность цветом и убирает самые маленькие царапины на кузове'},
                {id:2, ServiceTitle: 'Средняя полировка кузова автомобиля',price: "от 14000", 
                ServicesDescription: "Средняя полировка предает кузову насыщенность и скрывает царапины средних размероа. Самый популярный вариант"},
                {id:3, ServiceTitle: 'Глубокая полировка кузова автомобиля',price: "от 18000", 
                ServicesDescription: 'Глупокая полировка возвращает кузову автомобиля заводской внешний вид, появляется зеркальный эффект'},
                {id:4, ServiceTitle: 'Полировка фар и остальных осветительных приборов',price: "от 3000", 
                ServicesDescription: 'Убирает заматованность и увеличивает яркость фар и остальных осветительных приборов'},
                {id:5, ServiceTitle: 'Полировка элементов интерьера автомобиля',price: "от 6000", 
                ServicesDescription: 'Полировка элементов помогает избавиться от царапин и затертостей'},
                {id:6, ServiceTitle: 'Локальная полировка',price: "от 1500", 
                ServicesDescription: 'Локальная полировка скроет все возможнын дефекты на элементе автомобиля, например, после ДТП'},
            ]},
        {
            id: 2,
            ServiceTitle: 'Мойка кузова и салона атомобиля',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {id:7, ServiceTitle: 'Мойка кузова Select',price: "от 500", 
                ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова и мойку ковров'},
                {id:8, ServiceTitle: 'Мойка кузова Premium',price: "от 800", 
                ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова, мойку ковров и влажную уборку салона'},
                {id:9, ServiceTitle: 'Детейлинг мойка Premium+', price: "от 1400", 
                ServicesDescription: 'Включает в себя 3х-фазную мойку кузова автомобиля, обработку средствами от металлических вкраплений, битума и органических веществ, сушку кузова, полную уборку всего салона'},
                {id:10, ServiceTitle: 'Мойка моторного отсека', price: "от 2000", 
                ServicesDescription: 'Мойка моторного отсека выполняется специализированными диэлектричискими моющими средствами под малым водяным напором вручную'},
            ]},
        {
            id: 3,
            ServiceTitle: "Защитные покрытия кузова",
            ServiceDescription: 'Описание',
            ServiceElements: [
                {id: 11, ServiceTitle: 'Жидкое стекло', price: 'от 10000', 
                ServicesDescription: 'Жидкое стекло образует на кузове гидрофобное покрытие и держится на кузове до полугода'},
                {id: 12, ServiceTitle: 'Керамическое покрытие TopCoat', price: 'от 15000',
                ServicesDescription: "Керамическое покрытие TopCoat является однокомпонентным самостоятельным покрытием, которое защищает кузов от образования водного камня и иных химических воздействий" },
                {id: 13, ServiceTitle: 'Керамическое покрытие 9H', price: 'от 22000', 
                ServicesDescription: 'Покрытие 9H является надежным защитником кузова Вашего автомобиля от всех химических воздействий, а так же от легких царапин, которые появляются в период эксплуатации автомобиля'}
            ]},
        {
            id: 4,
            ServiceTitle: 'Оклейка виниловой и полеуретановой пленкой',
            ServiceDescription: 'Описаниее',
            ServiceElements: [
                {id: 14, ServiceTitle: 'Оклейка кузова виниловой пленкой Aracal', price: 'от 45000', 
                ServicesDescription: 'Виниловая пленка скрывает косметические дефекты кузова и преображает его до неузноваимости. Большой выбор цветов позволяет добавить уникальности автомобилю'},
                {id: 15, ServiceTitle: 'Оклейка кузова виниловой пленкой Hexis', price: 'от 57000', 
                ServicesDescription: 'Виниловая пленка Hexis имеет иную структуру и поэтому совершенно иначе ложится на элемент кузова автомобиля, а так же имеются уникальные цвета, которых нет у других производителей'},
                {id: 16, ServiceTitle: 'Оклейка гибридной черной пленкой', price: 'от 95000', 
                ServicesDescription: 'Гибридная пленка помимо визуального изменения еще и защищает автомобиль от механических поздействий, а так же поддается легкой полировке, которая будет освежать ее блеск'},
                {id: 17, ServiceTitle: 'Оклейка полеуретановой прозрачной пленкой', price: 'от 170000', 
                ServicesDescription: 'Самое совершенное средство защиты кузова автомобиля. Спасает от сильных механических воздействий. Имеется матовая и глянцевая пленка.'},
                {id: 18, ServiceTitle: 'Комплекс "Антихром"', price: 'от 25000', 
                ServicesDescription: 'В комплекс вкзодит оклейка крыши в гибридную черную глянцевую пленку, а зеркала, молдинги, накладки и иные хромированные элементы в черный винил'},
                {id: 18, ServiceTitle: 'Комплекс "Ударная зона"', price: 'от 45000', 
                ServicesDescription: 'В комплекс вкзодит оклейка капота, передней части крыши, стоек лобового стекла, бампера, зеркал и зоной под ручками в глянцевую полеуретановую пленку'},
            ]
        }
    ],    
    // первый класс 
    [
        {
            id: 1,
            ServiceTitle: 'Полировка автомобиля (I класс)',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {id:1, ServiceTitle: 'Легкая полировка кузова автомобиля',price: 10000, 
                ServicesDescription: 'Легкая полировка кузова предает блеск и насыщенность цветом и убирает самые маленькие царапины на кузове'},
                {id:2, ServiceTitle: 'Средняя полировка кузова автомобиля',price: 14000, 
                ServicesDescription: "Средняя полировка предает кузову насыщенность и скрывает царапины средних размероа. Самый популярный вариант"},
                {id:3, ServiceTitle: 'Глубокая полировка кузова автомобиля',price: 18000, 
                ServicesDescription: 'Глупокая полировка возвращает кузову автомобиля заводской внешний вид, появляется зеркальный эффект'},
                {id:4, ServiceTitle: 'Полировка фар и остальных осветительных приборов',price: 3000, 
                ServicesDescription: 'Убирает заматованность и увеличивает яркость фар и остальных осветительных приборов'},
                {id:5, ServiceTitle: 'Полировка элементов интерьера автомобиля',price: 6000, 
                ServicesDescription: 'Полировка элементов помогает избавиться от царапин и затертостей'},
                {id:6, ServiceTitle: 'Локальная полировка',price: 1500, 
                ServicesDescription: 'Локальная полировка скроет все возможнын дефекты на элементе автомобиля, например, после ДТП'},
            ]},
        {
            id: 2,
            ServiceTitle: 'Мойка кузова и салона атомобиля (I класс)',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {id:7, ServiceTitle: 'Мойка кузова Select',price: 500, 
                ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова и мойку ковров'},
                {id:8, ServiceTitle: 'Мойка кузова Premium',price: 800, 
                ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова, мойку ковров и влажную уборку салона'},
                {id:9, ServiceTitle: 'Детейлинг мойка Premium+', price: 1400, 
                ServicesDescription: 'Включает в себя 3х-фазную мойку кузова автомобиля, обработку средствами от металлических вкраплений, битума и органических веществ, сушку кузова, полную уборку всего салона'},
                {id:10, ServiceTitle: 'Мойка моторного отсека', price: 2000, 
                ServicesDescription: 'Мойка моторного отсека выполняется специализированными диэлектричискими моющими средствами под малым водяным напором вручную'},
            ]},
        {
            id: 3,
            ServiceTitle: "Защитные покрытия кузова (I класс)",
            ServiceDescription: 'Описание',
            ServiceElements: [
                {id: 11, ServiceTitle: 'Жидкое стекло', price: 10000, 
                ServicesDescription: 'Жидкое стекло образует на кузове гидрофобное покрытие и держится на кузове до полугода'},
                {id: 12, ServiceTitle: 'Керамическое покрытие TopCoat', price: 15000,
                ServicesDescription: "Керамическое покрытие TopCoat является однокомпонентным самостоятельным покрытием, которое защищает кузов от образования водного камня и иных химических воздействий" },
                {id: 13, ServiceTitle: 'Керамическое покрытие 9H', price: 22000, 
                ServicesDescription: 'Покрытие 9H является надежным защитником кузова Вашего автомобиля от всех химических воздействий, а так же от легких царапин, которые появляются в период эксплуатации автомобиля'}
            ]},
        {
            id: 4,
            ServiceTitle: 'Оклейка виниловой и полеуретановой пленкой (I класс)',
            ServiceDescription: 'Описаниее',
            ServiceElements: [
                {id: 14, ServiceTitle: 'Оклейка кузова виниловой пленкой Aracal', price: 45000, 
                ServicesDescription: 'Виниловая пленка скрывает косметические дефекты кузова и преображает его до неузноваимости. Большой выбор цветов позволяет добавить уникальности автомобилю'},
                {id: 15, ServiceTitle: 'Оклейка кузова виниловой пленкой Hexis', price: 57000, 
                ServicesDescription: 'Виниловая пленка Hexis имеет иную структуру и поэтому совершенно иначе ложится на элемент кузова автомобиля, а так же имеются уникальные цвета, которых нет у других производителей'},
                {id: 16, ServiceTitle: 'Оклейка гибридной черной пленкой', price: 95000, 
                ServicesDescription: 'Гибридная пленка помимо визуального изменения еще и защищает автомобиль от механических поздействий, а так же поддается легкой полировке, которая будет освежать ее блеск'},
                {id: 17, ServiceTitle: 'Оклейка полеуретановой прозрачной пленкой', price: 170000, 
                ServicesDescription: 'Самое совершенное средство защиты кузова автомобиля. Спасает от сильных механических воздействий. Имеется матовая и глянцевая пленка.'},
                {id: 18, ServiceTitle: 'Комплекс "Антихром"', price: 25000, 
                ServicesDescription: 'В комплекс вкзодит оклейка крыши в гибридную черную глянцевую пленку, а зеркала, молдинги, накладки и иные хромированные элементы в черный винил'},
                {id: 19, ServiceTitle: 'Комплекс "Ударная зона"', price: 45000, 
                ServicesDescription: 'В комплекс вкзодит оклейка капота, передней части крыши, стоек лобового стекла, бампера, зеркал и зоной под ручками в глянцевую полеуретановую пленку'},
            ]
        }
    ],    
    // второй класс
    [
        {
            id: 1,
            ServiceTitle: 'Полировка автомобиля (II класс)',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {id:1, ServiceTitle: 'Легкая полировка кузова автомобиля',price: 13000, 
                ServicesDescription: 'Легкая полировка кузова предает блеск и насыщенность цветом и убирает самые маленькие царапины на кузове'},
                {id:2, ServiceTitle: 'Средняя полировка кузова автомобиля',price: 19000, 
                ServicesDescription: "Средняя полировка предает кузову насыщенность и скрывает царапины средних размероа. Самый популярный вариант"},
                {id:3, ServiceTitle: 'Глубокая полировка кузова автомобиля',price: 23000, 
                ServicesDescription: 'Глупокая полировка возвращает кузову автомобиля заводской внешний вид, появляется зеркальный эффект'},
                {id:4, ServiceTitle: 'Полировка фар и остальных осветительных приборов',price: 4000, 
                ServicesDescription: 'Убирает заматованность и увеличивает яркость фар и остальных осветительных приборов'},
                {id:5, ServiceTitle: 'Полировка элементов интерьера автомобиля',price: 8000, 
                ServicesDescription: 'Полировка элементов помогает избавиться от царапин и затертостей'},
                {id:6, ServiceTitle: 'Локальная полировка',price: 2000, 
                ServicesDescription: 'Локальная полировка скроет все возможнын дефекты на элементе автомобиля, например, после ДТП'},
            ]},
        {
            id: 2,
            ServiceTitle: 'Мойка кузова и салона атомобиля (II класс)',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {id:7, ServiceTitle: 'Мойка кузова Select',price: 700, 
                ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова и мойку ковров'},
                {id:8, ServiceTitle: 'Мойка кузова Premium',price: 1000, 
                ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова, мойку ковров и влажную уборку салона'},
                {id:9, ServiceTitle: 'Детейлинг мойка Premium+', price: 1900, 
                ServicesDescription: 'Включает в себя 3х-фазную мойку кузова автомобиля, обработку средствами от металлических вкраплений, битума и органических веществ, сушку кузова, полную уборку всего салона'},
                {id:10, ServiceTitle: 'Мойка моторного отсека', price: 3000, 
                ServicesDescription: 'Мойка моторного отсека выполняется специализированными диэлектричискими моющими средствами под малым водяным напором вручную'},
            ]},
            {
                id: 3,
                ServiceTitle: "Защитные покрытия кузова (II класс)",
                ServiceDescription: 'Описание',
                ServiceElements: [
                    {id: 11, ServiceTitle: 'Жидкое стекло', price: 14000, 
                    ServicesDescription: 'Жидкое стекло образует на кузове гидрофобное покрытие и держится на кузове до полугода'},
                    {id: 12, ServiceTitle: 'Керамическое покрытие TopCoat', price: 21000,
                    ServicesDescription: "Керамическое покрытие TopCoat является однокомпонентным самостоятельным покрытием, которое защищает кузов от образования водного камня и иных химических воздействий" },
                    {id: 13, ServiceTitle: 'Керамическое покрытие 9H', price: 27000, 
                    ServicesDescription: 'Покрытие 9H является надежным защитником кузова Вашего автомобиля от всех химических воздействий, а так же от легких царапин, которые появляются в период эксплуатации автомобиля'}
                ]},
            {
                id: 4,
                ServiceTitle: 'Оклейка виниловой и полеуретановой пленкой (II класс)',
                ServiceDescription: 'Описаниее',
                ServiceElements: [
                    {id: 14, ServiceTitle: 'Оклейка кузова виниловой пленкой Aracal', price: 65000, 
                    ServicesDescription: 'Виниловая пленка скрывает косметические дефекты кузова и преображает его до неузноваимости. Большой выбор цветов позволяет добавить уникальности автомобилю'},
                    {id: 15, ServiceTitle: 'Оклейка кузова виниловой пленкой Hexis', price: 80000, 
                    ServicesDescription: 'Виниловая пленка Hexis имеет иную структуру и поэтому совершенно иначе ложится на элемент кузова автомобиля, а так же имеются уникальные цвета, которых нет у других производителей'},
                    {id: 16, ServiceTitle: 'Оклейка гибридной черной пленкой', price: 115000, 
                    ServicesDescription: 'Гибридная пленка помимо визуального изменения еще и защищает автомобиль от механических поздействий, а так же поддается легкой полировке, которая будет освежать ее блеск'},
                    {id: 17, ServiceTitle: 'Оклейка полеуретановой прозрачной пленкой', price: 210000, 
                    ServicesDescription: 'Самое совершенное средство защиты кузова автомобиля. Спасает от сильных механических воздействий. Имеется матовая и глянцевая пленка.'},
                    {id: 18, ServiceTitle: 'Комплекс "Антихром"', price: 35000, 
                    ServicesDescription: 'В комплекс вкзодит оклейка крыши в гибридную черную глянцевую пленку, а зеркала, молдинги, накладки и иные хромированные элементы в черный винил'},
                    {id: 19, ServiceTitle: 'Комплекс "Ударная зона"', price: 65000, 
                    ServicesDescription: 'В комплекс вкзодит оклейка капота, передней части крыши, стоек лобового стекла, бампера, зеркал и зоной под ручками в глянцевую полеуретановую пленку'},
                ]
            }
    ],    
    // третий класс
    [
        {
            id: 1,
            ServiceTitle: 'Полировка автомобиля (III класс)',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {id:1, ServiceTitle: 'Легкая полировка кузова автомобиля',price: 16500, 
                ServicesDescription: 'Легкая полировка кузова предает блеск и насыщенность цветом и убирает самые маленькие царапины на кузове'},
                {id:2, ServiceTitle: 'Средняя полировка кузова автомобиля',price: 21000, 
                ServicesDescription: "Средняя полировка предает кузову насыщенность и скрывает царапины средних размероа. Самый популярный вариант"},
                {id:3, ServiceTitle: 'Глубокая полировка кузова автомобиля',price: 27000, 
                ServicesDescription: 'Глупокая полировка возвращает кузову автомобиля заводской внешний вид, появляется зеркальный эффект'},
                {id:4, ServiceTitle: 'Полировка фар и остальных осветительных приборов',price: 5000, 
                ServicesDescription: 'Убирает заматованность и увеличивает яркость фар и остальных осветительных приборов'},
                {id:5, ServiceTitle: 'Полировка элементов интерьера автомобиля',price: 9500, 
                ServicesDescription: 'Полировка элементов помогает избавиться от царапин и затертостей'},
                {id:6, ServiceTitle: 'Локальная полировка',price: 3000, 
                ServicesDescription: 'Локальная полировка скроет все возможнын дефекты на элементе автомобиля, например, после ДТП'},
            ]},
        {
            id: 2,
            ServiceTitle: 'Мойка (III класс)',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {id:7, ServiceTitle: 'Мойка кузова Select',price: 850, 
                ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова и мойку ковров'},
                {id:8, ServiceTitle: 'Мойка кузова Premium',price: 1300, 
                ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова, мойку ковров и влажную уборку салона'},
                {id:9, ServiceTitle: 'Детейлинг мойка Premium+', price: 2500, 
                ServicesDescription: 'Включает в себя 3х-фазную мойку кузова автомобиля, обработку средствами от металлических вкраплений, битума и органических веществ, сушку кузова, полную уборку всего салона'},
                {id:10, ServiceTitle: 'Мойка моторного отсека', price: 4000, 
                ServicesDescription: 'Мойка моторного отсека выполняется специализированными диэлектричискими моющими средствами под малым водяным напором вручную'},
            ]},
            {
                id: 3,
                ServiceTitle: "Защитные покрытия кузова (III класс)",
                ServiceDescription: 'Описание',
                ServiceElements: [
                    {id: 11, ServiceTitle: 'Жидкое стекло', price: 21000, 
                    ServicesDescription: 'Жидкое стекло образует на кузове гидрофобное покрытие и держится на кузове до полугода'},
                    {id: 12, ServiceTitle: 'Керамическое покрытие TopCoat', price: 26500,
                    ServicesDescription: "Керамическое покрытие TopCoat является однокомпонентным самостоятельным покрытием, которое защищает кузов от образования водного камня и иных химических воздействий" },
                    {id: 13, ServiceTitle: 'Керамическое покрытие 9H', price: 33000, 
                    ServicesDescription: 'Покрытие 9H является надежным защитником кузова Вашего автомобиля от всех химических воздействий, а так же от легких царапин, которые появляются в период эксплуатации автомобиля'}
                ]},
            {
                id: 4,
                ServiceTitle: 'Оклейка виниловой и полеуретановой пленкой (III класс)',
                ServiceDescription: 'Описаниее',
                ServiceElements: [
                    {id: 14, ServiceTitle: 'Оклейка кузова виниловой пленкой Aracal', price: 85000, 
                    ServicesDescription: 'Виниловая пленка скрывает косметические дефекты кузова и преображает его до неузноваимости. Большой выбор цветов позволяет добавить уникальности автомобилю'},
                    {id: 15, ServiceTitle: 'Оклейка кузова виниловой пленкой Hexis', price: 110000, 
                    ServicesDescription: 'Виниловая пленка Hexis имеет иную структуру и поэтому совершенно иначе ложится на элемент кузова автомобиля, а так же имеются уникальные цвета, которых нет у других производителей'},
                    {id: 16, ServiceTitle: 'Оклейка гибридной черной пленкой', price: 135000, 
                    ServicesDescription: 'Гибридная пленка помимо визуального изменения еще и защищает автомобиль от механических поздействий, а так же поддается легкой полировке, которая будет освежать ее блеск'},
                    {id: 17, ServiceTitle: 'Оклейка полеуретановой прозрачной пленкой', price: 250000, 
                    ServicesDescription: 'Самое совершенное средство защиты кузова автомобиля. Спасает от сильных механических воздействий. Имеется матовая и глянцевая пленка.'},
                    {id: 18, ServiceTitle: 'Комплекс "Антихром"', price: 40000, 
                    ServicesDescription: 'В комплекс вкзодит оклейка крыши в гибридную черную глянцевую пленку, а зеркала, молдинги, накладки и иные хромированные элементы в черный винил'},
                    {id: 19, ServiceTitle: 'Комплекс "Ударная зона"', price: 70000, 
                    ServicesDescription: 'В комплекс вкзодит оклейка капота, передней части крыши, стоек лобового стекла, бампера, зеркал и зоной под ручками в глянцевую полеуретановую пленку'},
                ]
            }
    ]
]

let selectedModel = 0 //значение класса по умолчанию 

let autoList = document.querySelector('.auto-selections');
let choiseAuto = document.createElement('option');

let ServiceCatalogElem = document.createElement('div')

let BlockServicesList = document.querySelector('.BlockServicesList');
let Auto = document.querySelector('.Automakers');
let autoModels = document.querySelector(".Automodels");
let busket = document.querySelector('.busketList')
let orderSumResult = document.querySelector('.orderSumResult')

let orders = []
let orderSum = 0


document.addEventListener("DOMContentLoaded", function () {
    viewAutomaker()
    viewServices (servicesBase[selectedModel])
})


// отображение оказываемых услуг для выбранного класса авто
function viewServices (a) {
    
    BlockServicesList.innerHTML =''
    a.forEach(b=> {
        
        BlockServicesList.innerHTML += 
        `<div class='serviceType' id="serviceType${b.id}"> 
            <h2>${b.ServiceTitle} </h2>
            <p style="cursor: default" class=viewServicesList id=viewServicesList-${b.id} onclick=viewServicesLists(${b.id})> 
                Показать список услуг 
            </p>
        </div>`

    
        let ServicesBlock = document.getElementById(`serviceType${b.id}`)
    
        let ServicesTypeList = document.createElement(`div`)
        ServicesTypeList.classList.add('ServicesTypeList')
        ServicesTypeList.setAttribute('id', `ServicesTypeList-${b.id}`)
        
        ServicesBlock.append(ServicesTypeList)
        
        for(let key in b.ServiceElements){
            if(Number(b.ServiceElements[key].price)){

                ServicesTypeList.innerHTML += 
                `<div  class="ServiceBlock" id=ServiceBlock-${b.ServiceElements[key].id}> 
                   <h3> ${b.ServiceElements[key].ServiceTitle}</h3> 
                   <h3> стоимость: ${b.ServiceElements[key].price} ₽ </h3>
                    <p style="cursor: default" class="viewDescription${b.ServiceElements[key].id}" onclick="moreOf(${b.ServiceElements[key].id})"> 
                        Нажмите сюда, чтобы почитать описание услуги
                    </p>
                    <p style="display: none" class="moreOfTheServices${b.ServiceElements[key].id}"> 
                        ${b.ServiceElements[key].ServicesDescription} 
                    </p>
                    <button class="btnAddDlt" id="add-${b.ServiceElements[key].id}" onclick="addToOrder(${b.ServiceElements[key].id}, ${b.id})"> 
                        Добавить
                    </button>   
                </div>` 
            } else {
                
                ServicesTypeList.innerHTML += 
                    `<div class="ServiceBlock" id="ServiceBlock-${b.ServiceElements[key].id}"> 
                       <h3> ${b.ServiceElements[key].ServiceTitle}</h3> 
                       <h3> ${b.ServiceElements[key].price} ₽ </h3>
                        <p style="cursor: default" class="viewDescription${b.ServiceElements[key].id}" onclick="moreOf(${b.ServiceElements[key].id})"> 
                            Нажмите сюда, чтобы почитать описание услуги 
                        </p>
                        <p style="display: none" class="moreOfTheServices${b.ServiceElements[key].id}"> 
                            ${b.ServiceElements[key].ServicesDescription} 
                        </p> 
                    </div>`
            } 
        }
    })
}

function addToOrder (a,b) {
    servicesBase[selectedModel].forEach(c => {
        if(c.id == b){
            for(let key in c.ServiceElements){
                if(c.ServiceElements[key].id == a){
                    
                    document.getElementById(`ServiceBlock-${a}`).innerHTML = 
                        `<h3> ${c.ServiceElements[key].ServiceTitle} </h3> 
                        <h3> стоимость: ${c.ServiceElements[key].price} ₽ </h3>
                        
                        <p class="viewDescription${c.ServiceElements[key].id}" onclick="moreOf(${c.ServiceElements[key].id})"> 
                            Нажмите сюда, чтобы почитать описание услуги 
                        </p>
                        <p style="display: none" class="moreOfTheServices${c.ServiceElements[key].id}"> 
                            ${c.ServiceElements[key].ServicesDescription} 
                        </p> 
                        <button class="btnAddDlt" onclick="deleteFromOrder(${c.ServiceElements[key].id}, ${c.id})"> 
                            Удалить 
                        </button> `

                    orders.push(c.ServiceElements[key])
                    orders = Array.from(new Set(orders));
                    
                    orderSum = orderSum + c.ServiceElements[key].price

                    let busketPosition = document.createElement('div')
                    busketPosition.classList.add('busketPosition');
                    busketPosition.setAttribute('id', `busketPosition-${c.ServiceElements[key].id}` )
                    busket.append(busketPosition)
                    busketPosition.innerHTML = 
                        `<div class="busketElement"> 
                        <p class="BusketlementText"> ${c.ServiceElements[key].ServiceTitle} </p> 
                        <p class='deleteFromBusket' onclick="deleteFromOrder(${c.ServiceElements[key].id}, ${c.id})"></p> 
                        </div>`
                    orderSumResult.innerHTML = `Итого: ${orderSum} ₽`
                    document.querySelector('.servicesBasket').innerHTML = `Корзина (${orders.length})`
                }
            }
        }
    })
}

function deleteFromOrder(a,b) {
    servicesBase[selectedModel].forEach(d => {
        if(d.id == b){
            for(let key in orders){
                if(orders[key].id == a){
                    document.getElementById(`ServiceBlock-${a}`).innerHTML = 
                    `<h3> ${orders[key].ServiceTitle} </h3>
                     <h3> стоимость: ${orders[key].price} ₽ </h3>
                    <p class="viewDescription${orders[key].id}" onclick="moreOf(${orders[key].id})"> 
                        Нажмите сюда, чтобы почитать описание услуги 
                    </p>
                    <p style="display: none"class="moreOfTheServices${orders[key].id}"> 
                        ${orders[key].ServicesDescription} 
                    </p> 
                    <button class="btnAddDlt" onclick="addToOrder(${a}, ${b})"> 
                        Добавить 
                    </button> `
                    let orderIndex = orders.indexOf(orders[key])
                    
                    orderSum = orderSum - orders[orderIndex].price
                    orderSumResult.innerHTML = `Итого: ${orderSum} ₽`
                    document.getElementById(`busketPosition-${a}`).remove()

                    orders.splice(orderIndex, 1)
                    document.querySelector('.servicesBasket').innerHTML = `Корзина (${orders.length})`
                    console.log(orderIndex);
                
                    console.log(orders);
                    console.log(orderSum);
                }
            }
        }
    })
}

let moreOf = function (a) {
    if(document.querySelector(`.moreOfTheServices${a}`).style.display != 'block'){
        document.querySelector(`.moreOfTheServices${a}`).style.display = 'block'
        document.querySelector(`.viewDescription${a}`).innerHTML = "Нажмите сюда, чтобы скрыть описание услуги"
    } else if (document.querySelector(`.moreOfTheServices${a}`).style.display != 'none'){
        document.querySelector(`.moreOfTheServices${a}`).style.display = 'none';
        document.querySelector(`.viewDescription${a}`).innerHTML = "Нажмите сюда, чтобы почитать описание услуги"
    }
}

function viewServicesLists (a) {
    if(document.getElementById(`ServicesTypeList-${a}`).style.display != 'flex'){
        document.getElementById(`ServicesTypeList-${a}`).style.display = 'flex'
        document.getElementById(`viewServicesList-${a}`).innerHTML = "Скрыть список услуг"
    } else if (document.getElementById(`ServicesTypeList-${a}`).style.display != 'none'){
        document.getElementById(`ServicesTypeList-${a}`).style.display = 'none';
        document.getElementById(`viewServicesList-${a}`).innerHTML = "Показать список услуг"
    }
}

function viewServicesBusket() {
    if(document.querySelector(`.busket`).style.display != 'block'){
        document.querySelector(`.busket`).style.display = 'block'
    } else if (document.querySelector(`.busket`).style.display != 'none'){
        document.querySelector(`.busket`).style.display = 'none';
    }
}

// отображение марки и модели автомобиля клиента

let viewAutomaker = function () {
    fetch("/Json/cars_base_demo/base_auto.json")
        .then(function (a) { return a.json() })
        .then(function (a) {
            popularAutoList = a.filter(item => item.popular == true)

            let popularAuto = popularAutoList.map(item => item.name)
           
            for (let i = 0; i < popularAuto.length; i++) {
                Auto.innerHTML += `<option class="elementPopularAuto"> ${popularAuto[i]} </option>`
            };
        });
}

let viewSearchModelsBlock = () => autoModels.style.display = 'block'

let searchModels = function () {
    viewSearchModelsBlock()
    autoModels.innerHTML = `<option> Выберите модель </option>`

    let pickAutomaker = document.querySelector(".Automakers").value
    pickModels = popularAutoList.filter(item => item.name == pickAutomaker)

    model = pickModels[0].models
    console.log(model);

    for (i = 0; i < model.length; i++) {
        autoModels.innerHTML += `<option id="${[i]}" class="${model[i].name}-${model[i].class}"> ${model[i].name} </option>`
    };
}

let searchClass = function () {
    
    for (i = 0; i < model.length; i++) {
        selectedModel = document.querySelector(".Automodels").value
        if (model[i].name == selectedModel) {
            selectedModel = model[i].class
            console.log(selectedModel);

            if(selectedModel === 'A' || selectedModel === 'B' || selectedModel === 'C') {
                selectedModel = 1
                return selectedModel
            }
            else if(selectedModel === 'D' || selectedModel === 'E' || selectedModel === 'S') {
                selectedModel = 2
                return selectedModel
            }
            else if(selectedModel === 'M' || selectedModel === 'F' || selectedModel === 'J') {
                selectedModel = 3
                return selectedModel
            } else alert('Класс автомобиля определить не удалось, оставьте заявку')
        }
    }
}

function viewPrices () {
    viewServices (servicesBase[selectedModel])
}

// слайдер примера работ

let offset = 0;
const sliderline = document.querySelector('.photo-slider-2');
document.querySelector('.btn-slider-next').addEventListener('click', function() {
    offset += 250
    if (offset > 750) {
        offset = 0
    }
    sliderline.style.left = -offset + 'px'
});
document.querySelector('.btn-slider-back').addEventListener('click', function() {
    offset -= 250
    if (offset < 0) {
        offset = 750
    }
    sliderline.style.left = -offset + 'px'
});




// let ServiceCatalog= [
//     // Starting-Classes
//    { id: 1, ServiceTitle: 'Комплекс по полировке автомобиля', price: "от 15 000",
//    ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля" },
//    { id: 2, ServiceTitle: 'Полная химчистка автомобиля', price: "от 8 000",
//    ServiceDescription: "При полной химчистке специалисты детейлинг центра в ручную совершают глуюокую чистку напольного покрытия, сидений, потолка, дверных карт, торпедо и всех сопутствующих элементов, из которых состояит интерьер автомобиля. При этом, после химчистки следует консервация специализированными средствами"},
//    { id: 3, ServiceTitle: 'Защита ударной зоны полеуретановой пленкой', price: "от 15 000",
//    ServiceDescription: "Ударная зона включает в себя передний бампер, капот, зеркала, стойки лобового стекла и переднюю часть крышы автомобиля" },
// ]

// function showServiceCatalog(a, c) {
//     Catalog.innerHTML = ''
    
//     a.forEach(b => {
//         c = document.createElement('div');
//         c.id = b.id
        
//         if(String(b.price)) {
            
//             c.innerHTML = 
//             `<div class="services-block">
//                 <h2> ${b.ServiceTitle} </h2>
//                 <p> ${b.price} рублей </p>
//                 <p class="viewButton${b.id}" onclick="moreOf(${b.id})" href="1"> Нажмите, чтобы почитать описание <p>
//                 <p class="moreOfTheServices${b.id}"> ${b.ServiceDescription} </p>
//                 <button class="addToRequest" id="add-${b.id}"> Добавить </button>
//              </div>`
//         } else {
            
//             c.innerHTML = 
//             `<div class="services-block"> 
//                 <h2> ${b.ServiceTitle} </h2>
//                 <p> ${b.price} рублей </p> 
//                 <p class="viewButton${b.id}" onclick="moreOf(${b.id})" href="#${c.id}"> Нажмите сюда, чтобы почитать описание услуги</p>
//                 <p class="moreOfTheServices${b.id}"> ${b.ServiceDescription} </p>  
//                 <button class="addToRequest" id="add-${b.id}"> Добавить </button>
//             </div>`
            
//         }
//         Catalog.append(c)
//         document.querySelector(`.moreOfTheServices${b.id}`).style.display = 'none'

//         document.getElementById(`add-${b.id}`).addEventListener('click', () => {
//             let orderElem = pricesClasse[selectedModel].find(test2 => test2.id === b.id)
//             order.push(orderElem)
//             order = Array.from(new Set(order));
//             console.log(order);
//         })
//     });
 
// }

// let pricesClasse = [
//     // Classe-One 
//     [
//         {id:1, ServiceTitle: "Комплекс по полировке автомобиля", price: 15000, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//         {id:2, ServiceTitle: "Полная химчистка автомобиля", price: 8000, 
//         ServiceDescription: "При полной химчистке специалисты детейлинг центра в ручную совершают глуюокую чистку напольного покрытия, сидений, потолка, дверных карт, торпедо и всех сопутствующих элементов, из которых состояит интерьер автомобиля. При этом, после химчистки следует консервация специализированными средствами"},
//         {id:3, ServiceTitle: "Защита ударной зоны полеуретановой пленкой", price: 17000, 
//         ServiceDescription: "Ударная зона включает в себя передний бампер, капот, зеркала, стойки лобового стекла и переднюю часть крышы автомобиля"},
//         {id:4, ServiceTitle: "Комплекс ", price: 1, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//         {id:5, ServiceTitle: "полировке", price: 1, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//         {id:6, ServiceTitle: "автомобиля", price: 1, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//     ],
//     // Classe-Two 
//     [
//         {id:1, ServiceTitle: "Комплекс по полировке автомобиля", price: 22000, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля" },
//         {id:2, ServiceTitle: "Полная химчистка автомобиля", price: 11000, 
//         ServiceDescription: "При полной химчистке специалисты детейлинг центра в ручную совершают глуюокую чистку напольного покрытия, сидений, потолка, дверных карт, торпедо и всех сопутствующих элементов, из которых состояит интерьер автомобиля. При этом, после химчистки следует консервация специализированными средствами" },
//         {id:3, ServiceTitle: "Защита ударной зоны полеуретановой пленкой", price: 25000, 
//         ServiceDescription: "Ударная зона включает в себя передний бампер, капот, зеркала, стойки лобового стекла и переднюю часть крышы автомобиля"},
//         {id:4, ServiceTitle: "Комплекс ", price: 2, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//         {id:5, ServiceTitle: "полировке", price: 2, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//         {id:6, ServiceTitle: "автомобиля", price: 2, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//     ],
//     // Classe-Three
//    [
//         {id:1, ServiceTitle: "Комплекс по полировке автомобиля", price: 29000, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля" },
//         {id:2, ServiceTitle: "Полная химчистка автомобиля", price: 16000, 
//         ServiceDescription: "При полной химчистке специалисты детейлинг центра в ручную совершают глуюокую чистку напольного покрытия, сидений, потолка, дверных карт, торпедо и всех сопутствующих элементов, из которых состояит интерьер автомобиля. При этом, после химчистки следует консервация специализированными средствами"},
//         {id:3, ServiceTitle: "Защита ударной зоны полеуретановой пленкой", price: 34000, 
//         ServiceDescription: "Ударная зона включает в себя передний бампер, капот, зеркала, стойки лобового стекла и переднюю часть крышы автомобиля"},
//         {id:4, ServiceTitle: "Комплекс", price: 3, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//         {id:5, ServiceTitle: "полировке", price: 3, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//         {id:6, ServiceTitle: "автомобиля", price: 3, 
//         ServiceDescription: "Комплексная полировка включает в себя обязательную детейлинг мойку кузова автомобиля с применением специализированной химии, глубокую полировку всех внешних элементов кузова и полировку всех внешних осветительных приборов автомобиля"},
//     ]
// ]