const data = [
    {
        id: 1,
        dateFrom: 'Wed, 01 Oct 2019 07:59:00 GMT',
        dateTo: 'Wed, 01 Dec 2020 07:59:00 GMT',
        background: 'blue',
    },
    {
        id: 2,
        dateFrom: 'Wed, 01 May 2020 07:59:00 GMT',
        dateTo: 'Wed, 03 Jun 2021 07:59:00 GMT',
        background: 'green',
    },
    {
        id: 3,
        dateFrom: 'Wed, 01 Apr 2020 07:59:00 GMT',
        dateTo: 'Wed, 03 Dec 2022 07:59:00 GMT',
        background: 'red',
    },
    {
        id: 4,
        dateFrom: 'Wed, 21 Apr 2021 07:59:00 GMT',
        dateTo: 'Wed, 03 Dec 2021 07:59:00 GMT',
        background: 'brown',
    },
    {
        id: 5,
        dateFrom: 'Wed, 01 Feb 2021 07:59:00 GMT',
        dateTo: 'Wed, 03 Dec 2024 07:59:00 GMT',
        background: 'yellow',
    },
  ]; 
let arr = [];
let arrObj = {};
  for (let i = 0;  i<data.length;i++){
    let dFrom= new Date (data[i].dateFrom);
    let dTo = new Date (data[i].dateTo);
    const dataRange = Math.ceil(Math.abs(new Date(data[4].dateTo).getTime() ) / (1000 * 3600 *24 )); // Длина периода (в днях) Для каждого объекта одинакова
    let arrDFrom = Math.ceil(Math.abs(dFrom.getTime() / (1000 * 3600 * 24 )));
    let arrDTo = Math.ceil(Math.abs(dTo.getTime() / (1000 * 3600 * 24 )));
    let start = 0; // Начальная точка  для графика

    const dataMesures= [start, arrDFrom, arrDTo ];  //Массив с данными для стартовых точек графика
    const dataString= dFrom + ' - ' + dTo; //Информационная переменная "с какой даты по какую"
    
    // Кладу все в объект
    let arrObj = {
      title: dataString,
      ranges: dataRange,
      measures: dataMesures,
      target : arrDTo,
    };
    //Добавляю объекты в новый массив, на основе которого строится гистограмма
    arr.push(arrObj);
    
}

      console.log(arr);
