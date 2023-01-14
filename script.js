const servicesBase = [
    // класс не выбран
    [
        {
            id: 1,
            ServiceTitle: 'Полировка автомобиля',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {
                    id: 1, ServiceTitle: 'Легкая полировка кузова автомобиля', price: "от 10000",
                    ServicesDescription: 'Легкая полировка кузова предает блеск и насыщенность цветом и убирает самые маленькие царапины на кузове'
                },
                {
                    id: 2, ServiceTitle: 'Средняя полировка кузова автомобиля', price: "от 14000",
                    ServicesDescription: "Средняя полировка предает кузову насыщенность и скрывает царапины средних размероа. Самый популярный вариант"
                },
                {
                    id: 3, ServiceTitle: 'Глубокая полировка кузова автомобиля', price: "от 18000",
                    ServicesDescription: 'Глупокая полировка возвращает кузову автомобиля заводской внешний вид, появляется зеркальный эффект'
                },
                {
                    id: 4, ServiceTitle: 'Полировка фар и остальных осветительных приборов', price: "от 3000",
                    ServicesDescription: 'Убирает заматованность и увеличивает яркость фар и остальных осветительных приборов'
                },
                {
                    id: 5, ServiceTitle: 'Полировка элементов интерьера автомобиля', price: "от 6000",
                    ServicesDescription: 'Полировка элементов помогает избавиться от царапин и затертостей'
                },
                {
                    id: 6, ServiceTitle: 'Локальная полировка', price: "от 1500",
                    ServicesDescription: 'Локальная полировка скроет все возможнын дефекты на элементе автомобиля, например, после ДТП'
                },
            ]
        },
        {
            id: 2,
            ServiceTitle: 'Мойка кузова и салона атомобиля',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {
                    id: 7, ServiceTitle: 'Мойка кузова Select', price: "от 500",
                    ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова и мойку ковров'
                },
                {
                    id: 8, ServiceTitle: 'Мойка кузова Premium', price: "от 800",
                    ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова, мойку ковров и влажную уборку салона'
                },
                {
                    id: 9, ServiceTitle: 'Детейлинг мойка Premium+', price: "от 1400",
                    ServicesDescription: 'Включает в себя 3х-фазную мойку кузова автомобиля, обработку средствами от металлических вкраплений, битума и органических веществ, сушку кузова, полную уборку всего салона'
                },
                {
                    id: 10, ServiceTitle: 'Мойка моторного отсека', price: "от 2000",
                    ServicesDescription: 'Мойка моторного отсека выполняется специализированными диэлектричискими моющими средствами под малым водяным напором вручную'
                },
            ]
        },
        {
            id: 3,
            ServiceTitle: "Защитные покрытия кузова",
            ServiceDescription: 'Описание',
            ServiceElements: [
                {
                    id: 11, ServiceTitle: 'Жидкое стекло', price: 'от 10000',
                    ServicesDescription: 'Жидкое стекло образует на кузове гидрофобное покрытие и держится на кузове до полугода'
                },
                {
                    id: 12, ServiceTitle: 'Керамическое покрытие TopCoat', price: 'от 15000',
                    ServicesDescription: "Керамическое покрытие TopCoat является однокомпонентным самостоятельным покрытием, которое защищает кузов от образования водного камня и иных химических воздействий"
                },
                {
                    id: 13, ServiceTitle: 'Керамическое покрытие 9H', price: 'от 22000',
                    ServicesDescription: 'Покрытие 9H является надежным защитником кузова Вашего автомобиля от всех химических воздействий, а так же от легких царапин, которые появляются в период эксплуатации автомобиля'
                }
            ]
        },
        {
            id: 4,
            ServiceTitle: 'Оклейка виниловой и полеуретановой пленкой',
            ServiceDescription: 'Описаниее',
            ServiceElements: [
                {
                    id: 14, ServiceTitle: 'Оклейка кузова виниловой пленкой Aracal', price: 'от 45000',
                    ServicesDescription: 'Виниловая пленка скрывает косметические дефекты кузова и преображает его до неузноваимости. Большой выбор цветов позволяет добавить уникальности автомобилю'
                },
                {
                    id: 15, ServiceTitle: 'Оклейка кузова виниловой пленкой Hexis', price: 'от 57000',
                    ServicesDescription: 'Виниловая пленка Hexis имеет иную структуру и поэтому совершенно иначе ложится на элемент кузова автомобиля, а так же имеются уникальные цвета, которых нет у других производителей'
                },
                {
                    id: 16, ServiceTitle: 'Оклейка гибридной черной пленкой', price: 'от 95000',
                    ServicesDescription: 'Гибридная пленка помимо визуального изменения еще и защищает автомобиль от механических поздействий, а так же поддается легкой полировке, которая будет освежать ее блеск'
                },
                {
                    id: 17, ServiceTitle: 'Оклейка полеуретановой прозрачной пленкой', price: 'от 170000',
                    ServicesDescription: 'Самое совершенное средство защиты кузова автомобиля. Спасает от сильных механических воздействий. Имеется матовая и глянцевая пленка.'
                },
                {
                    id: 18, ServiceTitle: 'Комплекс "Антихром"', price: 'от 25000',
                    ServicesDescription: 'В комплекс вкзодит оклейка крыши в гибридную черную глянцевую пленку, а зеркала, молдинги, накладки и иные хромированные элементы в черный винил'
                },
                {
                    id: 19, ServiceTitle: 'Комплекс "Ударная зона"', price: 'от 45000',
                    ServicesDescription: 'В комплекс вкзодит оклейка капота, передней части крыши, стоек лобового стекла, бампера, зеркал и зоной под ручками в глянцевую полеуретановую пленку'
                },
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
                {
                    id: 1, ServiceTitle: 'Легкая полировка кузова автомобиля', price: 10000,
                    ServicesDescription: 'Легкая полировка кузова предает блеск и насыщенность цветом и убирает самые маленькие царапины на кузове'
                },
                {
                    id: 2, ServiceTitle: 'Средняя полировка кузова автомобиля', price: 14000,
                    ServicesDescription: "Средняя полировка предает кузову насыщенность и скрывает царапины средних размероа. Самый популярный вариант"
                },
                {
                    id: 3, ServiceTitle: 'Глубокая полировка кузова автомобиля', price: 18000,
                    ServicesDescription: 'Глупокая полировка возвращает кузову автомобиля заводской внешний вид, появляется зеркальный эффект'
                },
                {
                    id: 4, ServiceTitle: 'Полировка фар и остальных осветительных приборов', price: 3000,
                    ServicesDescription: 'Убирает заматованность и увеличивает яркость фар и остальных осветительных приборов'
                },
                {
                    id: 5, ServiceTitle: 'Полировка элементов интерьера автомобиля', price: 6000,
                    ServicesDescription: 'Полировка элементов помогает избавиться от царапин и затертостей'
                },
                {
                    id: 6, ServiceTitle: 'Локальная полировка', price: 1500,
                    ServicesDescription: 'Локальная полировка скроет все возможнын дефекты на элементе автомобиля, например, после ДТП'
                },
            ]
        },
        {
            id: 2,
            ServiceTitle: 'Мойка кузова и салона атомобиля (I класс)',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {
                    id: 7, ServiceTitle: 'Мойка кузова Select', price: 500,
                    ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова и мойку ковров'
                },
                {
                    id: 8, ServiceTitle: 'Мойка кузова Premium', price: 800,
                    ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова, мойку ковров и влажную уборку салона'
                },
                {
                    id: 9, ServiceTitle: 'Детейлинг мойка Premium+', price: 1400,
                    ServicesDescription: 'Включает в себя 3х-фазную мойку кузова автомобиля, обработку средствами от металлических вкраплений, битума и органических веществ, сушку кузова, полную уборку всего салона'
                },
                {
                    id: 10, ServiceTitle: 'Мойка моторного отсека', price: 2000,
                    ServicesDescription: 'Мойка моторного отсека выполняется специализированными диэлектричискими моющими средствами под малым водяным напором вручную'
                },
            ]
        },
        {
            id: 3,
            ServiceTitle: "Защитные покрытия кузова (I класс)",
            ServiceDescription: 'Описание',
            ServiceElements: [
                {
                    id: 11, ServiceTitle: 'Жидкое стекло', price: 10000,
                    ServicesDescription: 'Жидкое стекло образует на кузове гидрофобное покрытие и держится на кузове до полугода'
                },
                {
                    id: 12, ServiceTitle: 'Керамическое покрытие TopCoat', price: 15000,
                    ServicesDescription: "Керамическое покрытие TopCoat является однокомпонентным самостоятельным покрытием, которое защищает кузов от образования водного камня и иных химических воздействий"
                },
                {
                    id: 13, ServiceTitle: 'Керамическое покрытие 9H', price: 22000,
                    ServicesDescription: 'Покрытие 9H является надежным защитником кузова Вашего автомобиля от всех химических воздействий, а так же от легких царапин, которые появляются в период эксплуатации автомобиля'
                }
            ]
        },
        {
            id: 4,
            ServiceTitle: 'Оклейка виниловой и полеуретановой пленкой (I класс)',
            ServiceDescription: 'Описаниее',
            ServiceElements: [
                {
                    id: 14, ServiceTitle: 'Оклейка кузова виниловой пленкой Aracal', price: 45000,
                    ServicesDescription: 'Виниловая пленка скрывает косметические дефекты кузова и преображает его до неузноваимости. Большой выбор цветов позволяет добавить уникальности автомобилю'
                },
                {
                    id: 15, ServiceTitle: 'Оклейка кузова виниловой пленкой Hexis', price: 57000,
                    ServicesDescription: 'Виниловая пленка Hexis имеет иную структуру и поэтому совершенно иначе ложится на элемент кузова автомобиля, а так же имеются уникальные цвета, которых нет у других производителей'
                },
                {
                    id: 16, ServiceTitle: 'Оклейка гибридной черной пленкой', price: 95000,
                    ServicesDescription: 'Гибридная пленка помимо визуального изменения еще и защищает автомобиль от механических поздействий, а так же поддается легкой полировке, которая будет освежать ее блеск'
                },
                {
                    id: 17, ServiceTitle: 'Оклейка полеуретановой прозрачной пленкой', price: 170000,
                    ServicesDescription: 'Самое совершенное средство защиты кузова автомобиля. Спасает от сильных механических воздействий. Имеется матовая и глянцевая пленка.'
                },
                {
                    id: 18, ServiceTitle: 'Комплекс "Антихром"', price: 25000,
                    ServicesDescription: 'В комплекс вкзодит оклейка крыши в гибридную черную глянцевую пленку, а зеркала, молдинги, накладки и иные хромированные элементы в черный винил'
                },
                {
                    id: 19, ServiceTitle: 'Комплекс "Ударная зона"', price: 45000,
                    ServicesDescription: 'В комплекс вкзодит оклейка капота, передней части крыши, стоек лобового стекла, бампера, зеркал и зоной под ручками в глянцевую полеуретановую пленку'
                },
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
                {
                    id: 1, ServiceTitle: 'Легкая полировка кузова автомобиля', price: 13000,
                    ServicesDescription: 'Легкая полировка кузова предает блеск и насыщенность цветом и убирает самые маленькие царапины на кузове'
                },
                {
                    id: 2, ServiceTitle: 'Средняя полировка кузова автомобиля', price: 19000,
                    ServicesDescription: "Средняя полировка предает кузову насыщенность и скрывает царапины средних размероа. Самый популярный вариант"
                },
                {
                    id: 3, ServiceTitle: 'Глубокая полировка кузова автомобиля', price: 23000,
                    ServicesDescription: 'Глупокая полировка возвращает кузову автомобиля заводской внешний вид, появляется зеркальный эффект'
                },
                {
                    id: 4, ServiceTitle: 'Полировка фар и остальных осветительных приборов', price: 4000,
                    ServicesDescription: 'Убирает заматованность и увеличивает яркость фар и остальных осветительных приборов'
                },
                {
                    id: 5, ServiceTitle: 'Полировка элементов интерьера автомобиля', price: 8000,
                    ServicesDescription: 'Полировка элементов помогает избавиться от царапин и затертостей'
                },
                {
                    id: 6, ServiceTitle: 'Локальная полировка', price: 2000,
                    ServicesDescription: 'Локальная полировка скроет все возможнын дефекты на элементе автомобиля, например, после ДТП'
                },
            ]
        },
        {
            id: 2,
            ServiceTitle: 'Мойка кузова и салона атомобиля (II класс)',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {
                    id: 7, ServiceTitle: 'Мойка кузова Select', price: 700,
                    ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова и мойку ковров'
                },
                {
                    id: 8, ServiceTitle: 'Мойка кузова Premium', price: 1000,
                    ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова, мойку ковров и влажную уборку салона'
                },
                {
                    id: 9, ServiceTitle: 'Детейлинг мойка Premium+', price: 1900,
                    ServicesDescription: 'Включает в себя 3х-фазную мойку кузова автомобиля, обработку средствами от металлических вкраплений, битума и органических веществ, сушку кузова, полную уборку всего салона'
                },
                {
                    id: 10, ServiceTitle: 'Мойка моторного отсека', price: 3000,
                    ServicesDescription: 'Мойка моторного отсека выполняется специализированными диэлектричискими моющими средствами под малым водяным напором вручную'
                },
            ]
        },
        {
            id: 3,
            ServiceTitle: "Защитные покрытия кузова (II класс)",
            ServiceDescription: 'Описание',
            ServiceElements: [
                {
                    id: 11, ServiceTitle: 'Жидкое стекло', price: 14000,
                    ServicesDescription: 'Жидкое стекло образует на кузове гидрофобное покрытие и держится на кузове до полугода'
                },
                {
                    id: 12, ServiceTitle: 'Керамическое покрытие TopCoat', price: 21000,
                    ServicesDescription: "Керамическое покрытие TopCoat является однокомпонентным самостоятельным покрытием, которое защищает кузов от образования водного камня и иных химических воздействий"
                },
                {
                    id: 13, ServiceTitle: 'Керамическое покрытие 9H', price: 27000,
                    ServicesDescription: 'Покрытие 9H является надежным защитником кузова Вашего автомобиля от всех химических воздействий, а так же от легких царапин, которые появляются в период эксплуатации автомобиля'
                }
            ]
        },
        {
            id: 4,
            ServiceTitle: 'Оклейка виниловой и полеуретановой пленкой (II класс)',
            ServiceDescription: 'Описаниее',
            ServiceElements: [
                {
                    id: 14, ServiceTitle: 'Оклейка кузова виниловой пленкой Aracal', price: 65000,
                    ServicesDescription: 'Виниловая пленка скрывает косметические дефекты кузова и преображает его до неузноваимости. Большой выбор цветов позволяет добавить уникальности автомобилю'
                },
                {
                    id: 15, ServiceTitle: 'Оклейка кузова виниловой пленкой Hexis', price: 80000,
                    ServicesDescription: 'Виниловая пленка Hexis имеет иную структуру и поэтому совершенно иначе ложится на элемент кузова автомобиля, а так же имеются уникальные цвета, которых нет у других производителей'
                },
                {
                    id: 16, ServiceTitle: 'Оклейка гибридной черной пленкой', price: 115000,
                    ServicesDescription: 'Гибридная пленка помимо визуального изменения еще и защищает автомобиль от механических поздействий, а так же поддается легкой полировке, которая будет освежать ее блеск'
                },
                {
                    id: 17, ServiceTitle: 'Оклейка полеуретановой прозрачной пленкой', price: 210000,
                    ServicesDescription: 'Самое совершенное средство защиты кузова автомобиля. Спасает от сильных механических воздействий. Имеется матовая и глянцевая пленка.'
                },
                {
                    id: 18, ServiceTitle: 'Комплекс "Антихром"', price: 35000,
                    ServicesDescription: 'В комплекс вкзодит оклейка крыши в гибридную черную глянцевую пленку, а зеркала, молдинги, накладки и иные хромированные элементы в черный винил'
                },
                {
                    id: 19, ServiceTitle: 'Комплекс "Ударная зона"', price: 65000,
                    ServicesDescription: 'В комплекс вкзодит оклейка капота, передней части крыши, стоек лобового стекла, бампера, зеркал и зоной под ручками в глянцевую полеуретановую пленку'
                },
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
                {
                    id: 1, ServiceTitle: 'Легкая полировка кузова автомобиля', price: 16500,
                    ServicesDescription: 'Легкая полировка кузова предает блеск и насыщенность цветом и убирает самые маленькие царапины на кузове'
                },
                {
                    id: 2, ServiceTitle: 'Средняя полировка кузова автомобиля', price: 21000,
                    ServicesDescription: "Средняя полировка предает кузову насыщенность и скрывает царапины средних размероа. Самый популярный вариант"
                },
                {
                    id: 3, ServiceTitle: 'Глубокая полировка кузова автомобиля', price: 27000,
                    ServicesDescription: 'Глупокая полировка возвращает кузову автомобиля заводской внешний вид, появляется зеркальный эффект'
                },
                {
                    id: 4, ServiceTitle: 'Полировка фар и остальных осветительных приборов', price: 5000,
                    ServicesDescription: 'Убирает заматованность и увеличивает яркость фар и остальных осветительных приборов'
                },
                {
                    id: 5, ServiceTitle: 'Полировка элементов интерьера автомобиля', price: 9500,
                    ServicesDescription: 'Полировка элементов помогает избавиться от царапин и затертостей'
                },
                {
                    id: 6, ServiceTitle: 'Локальная полировка', price: 3000,
                    ServicesDescription: 'Локальная полировка скроет все возможнын дефекты на элементе автомобиля, например, после ДТП'
                },
            ]
        },
        {
            id: 2,
            ServiceTitle: 'Мойка (III класс)',
            ServiceDescription: "Описание полировки",
            ServiceElements: [
                {
                    id: 7, ServiceTitle: 'Мойка кузова Select', price: 850,
                    ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова и мойку ковров'
                },
                {
                    id: 8, ServiceTitle: 'Мойка кузова Premium', price: 1300,
                    ServicesDescription: 'Включает в себя 2х-фазную мойку кузова автомобиля, сушку кузова, мойку ковров и влажную уборку салона'
                },
                {
                    id: 9, ServiceTitle: 'Детейлинг мойка Premium+', price: 2500,
                    ServicesDescription: 'Включает в себя 3х-фазную мойку кузова автомобиля, обработку средствами от металлических вкраплений, битума и органических веществ, сушку кузова, полную уборку всего салона'
                },
                {
                    id: 10, ServiceTitle: 'Мойка моторного отсека', price: 4000,
                    ServicesDescription: 'Мойка моторного отсека выполняется специализированными диэлектричискими моющими средствами под малым водяным напором вручную'
                },
            ]
        },
        {
            id: 3,
            ServiceTitle: "Защитные покрытия кузова (III класс)",
            ServiceDescription: 'Описание',
            ServiceElements: [
                {
                    id: 11, ServiceTitle: 'Жидкое стекло', price: 21000,
                    ServicesDescription: 'Жидкое стекло образует на кузове гидрофобное покрытие и держится на кузове до полугода'
                },
                {
                    id: 12, ServiceTitle: 'Керамическое покрытие TopCoat', price: 26500,
                    ServicesDescription: "Керамическое покрытие TopCoat является однокомпонентным самостоятельным покрытием, которое защищает кузов от образования водного камня и иных химических воздействий"
                },
                {
                    id: 13, ServiceTitle: 'Керамическое покрытие 9H', price: 33000,
                    ServicesDescription: 'Покрытие 9H является надежным защитником кузова Вашего автомобиля от всех химических воздействий, а так же от легких царапин, которые появляются в период эксплуатации автомобиля'
                }
            ]
        },
        {
            id: 4,
            ServiceTitle: 'Оклейка виниловой и полеуретановой пленкой (III класс)',
            ServiceDescription: 'Описаниее',
            ServiceElements: [
                {
                    id: 14, ServiceTitle: 'Оклейка кузова виниловой пленкой Aracal', price: 85000,
                    ServicesDescription: 'Виниловая пленка скрывает косметические дефекты кузова и преображает его до неузноваимости. Большой выбор цветов позволяет добавить уникальности автомобилю'
                },
                {
                    id: 15, ServiceTitle: 'Оклейка кузова виниловой пленкой Hexis', price: 110000,
                    ServicesDescription: 'Виниловая пленка Hexis имеет иную структуру и поэтому совершенно иначе ложится на элемент кузова автомобиля, а так же имеются уникальные цвета, которых нет у других производителей'
                },
                {
                    id: 16, ServiceTitle: 'Оклейка гибридной черной пленкой', price: 135000,
                    ServicesDescription: 'Гибридная пленка помимо визуального изменения еще и защищает автомобиль от механических поздействий, а так же поддается легкой полировке, которая будет освежать ее блеск'
                },
                {
                    id: 17, ServiceTitle: 'Оклейка полеуретановой прозрачной пленкой', price: 250000,
                    ServicesDescription: 'Самое совершенное средство защиты кузова автомобиля. Спасает от сильных механических воздействий. Имеется матовая и глянцевая пленка.'
                },
                {
                    id: 18, ServiceTitle: 'Комплекс "Антихром"', price: 40000,
                    ServicesDescription: 'В комплекс вкзодит оклейка крыши в гибридную черную глянцевую пленку, а зеркала, молдинги, накладки и иные хромированные элементы в черный винил'
                },
                {
                    id: 19, ServiceTitle: 'Комплекс "Ударная зона"', price: 70000,
                    ServicesDescription: 'В комплекс вкзодит оклейка капота, передней части крыши, стоек лобового стекла, бампера, зеркал и зоной под ручками в глянцевую полеуретановую пленку'
                },
            ]
        }
    ]
]

//  заданные переменные для обращения к HTML 
let Auto = document.querySelector('.Automakers');
let autoModels = document.querySelector(".Automodels");
let autoList = document.querySelector('.auto-selections');
let BlockServicesList = document.querySelector('.BlockServicesList');
let sliderline = document.querySelector('.photo-slider-2');
let overlayBasket = document.querySelector('.overlayBasket')
let busket = document.querySelector('.busket')

let busketList = document.querySelector('.busketList')
let orderSumResult = document.querySelector('.orderSumResult')
let getUserData = document.querySelector('.getUserData')

let choiseAuto = document.createElement('option');
let ServiceCatalogElem = document.createElement('div')

let selectedСlass = 0 //значение класса по умолчанию
let base // переменная для хранения базы автопроизводителей
let popularAutoList // хранение базы популярных автопроизводителей
let user = {} // марка и модель авто пользователя, его имя и телефон
let orders = [] // все выбранные услуги пользователем
let finalOrder = [] // объединение автомобиля пользователя, его данных и выбранных услуг
let dataBase = []  // хранение всех заявок

let orderSum = 0 // сумма всех выбранных услуг (только визуальная часть)
selectedСlass = 0 // изначально заданный класс 
let photoSize = 0; // для слайдера

// запуск функций после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
    viewAutomaker()
    viewServices(servicesBase[selectedСlass])
}, false)

// получение с JSON файла всех автопроизводителей, фильтрация по популярности
let viewAutomaker = function () {
    let requestBaseURL = "https://raw.githubusercontent.com/roman-1st/detail-shop/main/base_auto.json"
    let requestBase = new XMLHttpRequest();
    requestBase.open ('GET', requestBaseURL )
    requestBase.responseType = 'json'
    requestBase.send()
    requestBase.onload = function () {
        base = requestBase.response
        popularAutoList = base.filter(item => item.popular == true)
        let popularAuto = popularAutoList.map(item => item.name)

        for (let i = 0; i < popularAuto.length; i++) {
            Auto.innerHTML += `<option style="color: #CCCCCC;" class="elementPopularAuto"> ${popularAuto[i]} </option>`
        };

};
}

// отображение автопроизводителей
// let viewAutomaker = function () {
//     fetch("https://drive.google.com/file/d/1FmwXGvtn4qBDtcLC0gWd9bx_pEPHBln7/view?usp=share_link.json")
    
//         .then(function (a) { return a.json() })
//         .then(function (a) {
//             popularAutoList = a.filter(item => item.popular == true)

//             let popularAuto = popularAutoList.map(item => item.name)

//             for (let i = 0; i < popularAuto.length; i++) {
//                 Auto.innerHTML += `<option style="color: #CCCCCC;" class="elementPopularAuto"> ${popularAuto[i]} </option>`
//             };
//         });
// }

// отображение моделей выбранной марки автомобиля
let viewhModels = function () {
    viewSearchModelsBlock()
    autoModels.innerHTML = `<option> Выберите модель </option>`

    let pickAutomaker = document.querySelector(".Automakers").value
    user.automaker = pickAutomaker

    pickModels = popularAutoList.filter(item => item.name == pickAutomaker)

    model = pickModels[0].models
    console.log(model);

    for (i = 0; i < model.length; i++) {
        autoModels.innerHTML += `<option style="color: #CCCCCC;" id="${[i]}" class="${model[i].name}-${model[i].class}"> ${model[i].name} </option>`
    };
}

// распределение классов автопроизводителей на 3 класса по градации ценообразования
let searchClass = function () {
    for (i = 0; i < model.length; i++) {
        selectedСlass = document.querySelector(".Automodels").value
        user.automodel = selectedСlass

        if (model[i].name == selectedСlass) {
            selectedСlass = model[i].class
            console.log(selectedСlass);

            if (selectedСlass === 'A' || selectedСlass === 'B' || selectedСlass === 'C') {
                selectedСlass = 1
                return selectedСlass
            }
            else if (selectedСlass === 'D' || selectedСlass === 'E' || selectedСlass === 'S') {
                selectedСlass = 2
                return selectedСlass
            }
            else if (selectedСlass === 'M' || selectedСlass === 'F' || selectedСlass === 'J') {
                selectedСlass = 3
                return selectedСlass
            } else {
                selectedСlass = prompt('Укажите предполагаемый класс модели: 1, 2, 3', "Введите класс")
                return selectedСlass
            }
        }
    }
}



// отображение оказываемых услуг для выбранного класса авто
function viewServices(a) {

    BlockServicesList.innerHTML = ''
    a.forEach(b => {

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

        for (let key in b.ServiceElements) {
            if (Number(b.ServiceElements[key].price)) {

                ServicesTypeList.innerHTML +=
                    `<div  class="ServiceBlock" id=ServiceBlock-${b.ServiceElements[key].id}> 
                   <h3> ${b.ServiceElements[key].ServiceTitle}</h3> 
                   <h2> стоимость: ${b.ServiceElements[key].price} ₽ </h2>
                    <p style="cursor: default" class="viewDescription${b.ServiceElements[key].id}" onclick="moreOf(${b.ServiceElements[key].id})"> 
                        Нажмите сюда, чтобы почитать описание услуги
                    </p>
                    <h4 style="display: none" class="moreOfTheServices${b.ServiceElements[key].id}"> 
                        ${b.ServiceElements[key].ServicesDescription} 
                    </h4>
                    <button class="btnAddDlt" id="add-${b.ServiceElements[key].id}" onclick="addToOrder(${b.ServiceElements[key].id}, ${b.id})"> 
                        Добавить
                    </button>   
                </div>`
            } else {

                ServicesTypeList.innerHTML +=
                    `<div class="ServiceBlock" id="ServiceBlock-${b.ServiceElements[key].id}"> 
                       <h3> ${b.ServiceElements[key].ServiceTitle}</h3> 
                       <h2> ${b.ServiceElements[key].price} ₽ </h2>
                        <p style="cursor: default" class="viewDescription${b.ServiceElements[key].id}" onclick="moreOf(${b.ServiceElements[key].id})"> 
                            Нажмите сюда, чтобы почитать описание услуги 
                        </p>
                        <h4 style="display: none" class="moreOfTheServices${b.ServiceElements[key].id}"> 
                            ${b.ServiceElements[key].ServicesDescription} 
                        </h4> 
                    </div>`
            }
        }
    })
}

// отображение услуг с учетом выбранной модели автомобиля
function viewPrices() {
    viewServices(servicesBase[selectedСlass])
}


// добавление услгу в корзину
function addToOrder(a, b) {
    servicesBase[selectedСlass].forEach(c => {
        if (c.id == b) {
            for (let key in c.ServiceElements) {
                if (c.ServiceElements[key].id == a) {

                    document.getElementById(`ServiceBlock-${a}`).innerHTML =
                        `<h3> ${c.ServiceElements[key].ServiceTitle} </h3> 
                        <h3> стоимость: ${c.ServiceElements[key].price} ₽ </h3>
                        
                        <h4 class="viewDescription${c.ServiceElements[key].id}" onclick="moreOf(${c.ServiceElements[key].id})"> 
                            Нажмите сюда, чтобы почитать описание услуги 
                        </h4>
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
                    busketPosition.setAttribute('id', `busketPosition-${c.ServiceElements[key].id}`)
                    busketList.append(busketPosition)
                   
                    document.querySelector('.basketh3').innerHTML = `Позиций в корзине: ${orders.length}`
                  
                    busketPosition.innerHTML =
                        `<p class="BusketlementText"> ${c.ServiceElements[key].ServiceTitle} </p> 
                        <p class='deleteFromBusket' onclick="deleteFromOrder(${c.ServiceElements[key].id}, ${c.id})"></p> 
                        </div>`
                    orderSumResult.innerHTML =
                        `<p> Итого: ${orderSum} ₽ </p> `
                    document.querySelector('.servicesBasket').innerHTML = `Корзина (${orders.length})`
                }
            }
        }
    })
}

// удаление услуг из корзины
function deleteFromOrder(a, b) {
    servicesBase[selectedСlass].forEach(d => {
        if (d.id == b) {
            for (let key in orders) {
                if (orders[key].id == a) {
                    document.getElementById(`ServiceBlock-${a}`).innerHTML =
                        `<h3> ${orders[key].ServiceTitle} </h3>
                     <h3> стоимость: ${orders[key].price} ₽ </h3>
                    <h4 class="viewDescription${orders[key].id}" onclick="moreOf(${orders[key].id})"> 
                        Нажмите сюда, чтобы почитать описание услуги 
                    </h4>
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
                    if (orders.length == 0) {
                        document.querySelector('.basketh3').innerHTML = `Ни одной услуги не выбрано`
                    } else  document.querySelector('.basketh3').innerHTML = `Позиций в корзине: ${orders.length}`
                }
            }
        }
    })
}

// оформление заявки на указанные в корзине услуги
function orderDesign() {
    user.name = document.querySelector('.userName').value
    user.phone = Number(document.querySelector('.userPhone').value)
    if (orders.length == 0) {
        alert('Вы не выбрали ни одной услуги')
    } else if (user.name === '') {
        alert('Укажите ваше имя')
        return
    } else if (!Number(user.phone) && String(user.phone).length > 10) {
        alert('Некорректно указан номер телефона!')
        console.log(Number(user.phone));
        console.log(String(user.phone).length);
        return
    } else {
        alert('Заявка на обратный звонок отправлена! Мы вам перезвоним в ближайшее время!')
        finalOrder.push(user, orders)
        dataBase.push(finalOrder)
        

        console.log(dataBase);

        clearOrder()
    }
}

// отчистка корзины и возвращение в исходное состояние при завершении оформления
function clearOrder() {
    orders = []
    finalOrder = []
    user = {}
    console.log(finalOrder);
    viewServices(servicesBase[selectedСlass])
    document.querySelector('.userName').value = ''
    document.querySelector('.userPhone').value = ''
    document.querySelector(".basketh3").innerHTML = "Ни одной услуги не выбрано"
    busketList.innerHTML = ''
    orderSum = 0
    orderSumResult.innerHTML = `Итого: ${orderSum}`
    document.querySelector('.servicesBasket').innerHTML = `Корзина (${orders.length})`
    return orders, finalOrder, orderSum
}


// отображение/скрытие блоков
let viewSearchModelsBlock = () => autoModels.style.display = 'block'
let moreOf = function (a) {
    if (document.querySelector(`.moreOfTheServices${a}`).style.display != 'block') {
        document.querySelector(`.moreOfTheServices${a}`).style.display = 'block'
        document.querySelector(`.viewDescription${a}`).innerHTML = "Нажмите сюда, чтобы скрыть описание услуги"
    } else if (document.querySelector(`.moreOfTheServices${a}`).style.display != 'none') {
        document.querySelector(`.moreOfTheServices${a}`).style.display = 'none';
        document.querySelector(`.viewDescription${a}`).innerHTML = "Нажмите сюда, чтобы почитать описание услуги"
    }
}
function viewServicesLists(a) {
    if (document.getElementById(`ServicesTypeList-${a}`).style.display != 'flex') {
        document.getElementById(`ServicesTypeList-${a}`).style.display = 'flex'
        document.getElementById(`viewServicesList-${a}`).innerHTML = "Скрыть список услуг"
    } else if (document.getElementById(`ServicesTypeList-${a}`).style.display != 'none') {
        document.getElementById(`ServicesTypeList-${a}`).style.display = 'none';
        document.getElementById(`viewServicesList-${a}`).innerHTML = "Показать список услуг"
    }
}
function viewServicesBusket() {
    if (overlayBasket.style.display != 'flex') {
        overlayBasket.style.display = 'flex'
    } else if (overlayBasket.style.display != 'none') {
        overlayBasket.style.display = 'none';
    }
}
document.addEventListener('click', (e) => {
    if (e.composedPath().includes(document.querySelector('.servicesBasket'))) return
    if (!e.composedPath().includes(busket) && overlayBasket.style.display == 'flex') {
        overlayBasket.style.display = 'none'
    }
})


// слайдер примера работ
document.querySelector('.btn-slider-next').addEventListener('click', function () {
    photoSize += 250
    if (photoSize > 750) {
        photoSize = 0
    }
    sliderline.style.left = -photoSize + 'px'
});
document.querySelector('.btn-slider-back').addEventListener('click', function () {
    photoSize -= 250
    if (photoSize < 0) {
        photoSize = 750
    }
    sliderline.style.left = -photoSize + 'px'
});

// действие с личным кабинетом

function openLC() {
    alert(`Личный кабинет находится в стадии разработки,
приносим свои извинения за доставленные неудобства`)
}