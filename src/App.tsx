import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Bullet } from '@consta/charts/Bullet';

// Типы массивов
type Item = {
  id: number
  dateFrom: string
  dateTo: string
  background: string
}
// Описал тип объекта внутри нового массива
type ItemChart = {
  title: string
  ranges: number[]
  measures: number[]
  target : number 
}

// Исходные данные
const data: Item[] = [
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
//Задание
//На основании этих данных необходимо построить гистрограмму, где каждая строка цвета background попадает в общий период по всем объектам. 
//Период начинается с самой ранней даты dateFrom объекта массива, а заканчивается самой поздней dateTo.

const App = () => {
  let arr = [];// Создаю пустой массив, в который буду класть преобразованные данные из исходных
  let arrObj = {};
  for (let i = 0;  i<data.length;i++){
      let dFrom= new Date (data[i].dateFrom);
      let dTo = new Date (data[i].dateTo);
      const dataRange = [140]; // Длина периода (в днях) Для каждого объекта одинакова
      let arrDFrom : number = Math.ceil(Math.abs(dFrom.getTime() / (1000 * 3600 * 24 *365 )));
      let arrDTo : number = Math.ceil(Math.abs(dTo.getTime() / (1000 * 3600 * 24 * 365 )));
      let start: number = 0; // Начальная точка  для графика

      const dataMesures = [start, arrDFrom, arrDTo ];  //Массив с данными для стартовых точек графика
      const dataString: string = dFrom + '' + dTo; //Информационная переменная "с какой даты по какую"
      
      // Кладу все в объект
      let arrObj: ItemChart = {
        title: dataString,
        ranges: dataRange,
        measures: dataMesures,
        target : dataRange[0],
      };
      //Добавляю объекты в новый массив, на основе которого строится гистограмма
      arr.push(arrObj);
  }
  
  return (
  <div className='container'>
    <Theme preset={presetGpnDefault}>
      <Bullet
      data={arr}
      measureField="measures"
      rangeField="ranges"
      targetField="target"
      xField="title"
      label={{
        measure: {
          position: 'middle',
          style: {
            fill: '#fff',
            
          },
        },
      }}
    />

    </Theme>
  </div>
    )
  
}

export default App;
