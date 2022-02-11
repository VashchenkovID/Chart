import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Bar } from '@consta/charts/Bar';

// Типы массивов
type Item = {
  id: number
  dateFrom: string
  dateTo: string
  background: string
}
// Описал тип объекта внутри нового массива
type ItemChart = {
  range: number
  length : number
  info: string
  id: number
  background: string
  value: number
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
  for (let i = 0;  i<data.length;i++){
      let dFrom= new Date (data[i].dateFrom);
      let dTo = new Date (data[i].dateTo);
      let idArr = data[i].id; //Идентификатор графика
      let backColor= data[i].background; // Цвет графика из исходных данных
      const dataRange = Math.ceil(Math.abs(new Date(data[4].dateTo).getTime() - new Date(data[0].dateFrom).getTime()) / (1000 * 3600 *24 * 365)); // Длина периода (в днях)
      const dataLength: number = Math.ceil(Math.abs(dTo.getTime() - dFrom.getTime()) / (1000 * 3600 * 24 )); //Длина периода (кол-во дней)
      const dataString: string = dFrom + ' - ' + dTo; //Информационная переменная "с какой даты по какую"
      
      // Кладу все в объект
      let arrObj: ItemChart = {
        range: dataRange,
        length: dataLength,
        info : dataString,
        id: idArr,
        background: backColor,
        value : dataLength,
      };
      //Добавляю объекты в новый массив, на основе которого строится гистограмма
      arr.push(arrObj);
      arr.sort((a, b) => a.length - b.length); // Отсортировал в порядке возрастания
  }
  return (
    <Theme preset={presetGpnDefault}>
      <Bar
        style={{ marginBottom: 'var(--space-m)' }}
          data={arr}
          xField="length"
          yField="range"
          isStack
          seriesField="info"
          isGroup
          label={{
            position: 'middle',
            layout: [
              { type: 'interval-adjust-position' },
              { type: 'interval-hide-overlap' },
              { type: 'adjust-color' },
            ],
          }}
      />
    </Theme>
    )
  
}

export default App;
