import './casesTagsList.css';
import { useState, useEffect } from 'react'
import Select from 'react-select'
import CasesTag from '../casesTag/CasesTag';

import { newApi } from '../../utils/Api';

const CasesTagsList = () => {
  const options = [
    { value: 'classic', label: '4 min' },
    { value: 'express', label: '1 min' },
  ]; // стейт со значениями опций тега селект 
  const [chosenDuration, setChosenDuration] = useState('classic'); // стейт изначального значения тега селект

  const [tagActiveText, setTagActiveText] = useState(""); // стейт тега
  const [tagList, setTagList] = useState([])

  useEffect(() => { // получаем tags
    newApi.getTags()
      .then((res) => {
        setTagList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Функционал подтягивания значения инпута из тега селект с установкой его первичного состояния
  const getValue = () => {
    return chosenDuration ? options.find(c => c.value === chosenDuration) : ''
  };

  const onChange = (newValue) => {
    setChosenDuration(newValue.value);
  }

  const onClick = (e) => {
    if(e.target.innerText !== "") {
      setTagActiveText(e.target.innerText);
      const intermediateList = tagList;
      const index = intermediateList.findIndex(item => item.name === e.target.innerText);
      const firstTag = intermediateList.splice(index, 1)
      intermediateList.unshift(firstTag[0]);
    }
    else {
      setTagActiveText("");
    }
  }

  return(
    <div className='casestags'>
        <Select 
          className="casestags-select__container"
          classNamePrefix='casestags-select'
          onChange={onChange} 
          value={getValue()} 
          options={options} 
        />
        {tagList.map(item => <CasesTag key={item.id} title={item.name} status={tagActiveText} clickTag={onClick}/>)}
    </div>
  )
}

export default CasesTagsList;