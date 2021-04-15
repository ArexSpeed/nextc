import styles from './CountriesTable.module.css';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import KeyboardArrowUpRounded from '@material-ui/icons/KeyboardArrowUpRounded';
import { useState } from 'react';
import Link from 'next/link';

const orderBy = (countries, value, direction) => {
  if(direction === 'asc') {
    return [...countries].sort((a,b) => (a[value] > b[value] ? 1 : -1));
  }
  if(direction === 'desc') {
    return [...countries].sort((a,b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries
};

const SortArrow = ({direction}) => {
  if(!direction) {
    return <></>
  }
  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  }
  if (direction === "asc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
}

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if(!direction){
      setDirection('desc')
    } else if (direction === 'desc'){
      setDirection('asc')
    }
    else {
      setDirection(null)
    }
  }

  const handleSetValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  }
  return( 
    <>
      <div className={styles.heading}>
        <button className={styles.heading_name} onClick={() => handleSetValueAndDirection('name')}>
          <div>Name</div>
          <SortArrow/>
        </button>
        <button className={styles.heading_pop} onClick={() => handleSetValueAndDirection('population')}>
          <div>Pop</div>
          <SortArrow direction={direction} />
        </button>
      </div>

      {orderedCountries.map((country) => (
        <Link href={`/country/${country.alpha3Code}`}>
          <div className={styles.row}>
            <div className={styles.name}>
              {country.name}
            </div>
            <div className={styles.pop}>
              {country.population}
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default CountriesTable;