import dayjs from 'dayjs';
import localizedFormat  from 'dayjs/plugin/localizedFormat';
import es from 'dayjs/locale/es'

dayjs.locale(es);

dayjs.extend(localizedFormat);

export const DateToFormat = ({date}) => {
    const dateToFormat = dayjs(date).format('LL').split(' ')
    const dateMes = dateToFormat[2]
    const dateAño = dateToFormat[4]
    return(
        <p className="absolute uppercase font-bold md:font-normal text-base text-secundario-1 md:text-white top-2 md:top-5 right-2 md:right-5">
            {dateMes} | {dateAño}
        </p>
    )
}

export const DateToYear = ({date, color}) => {
    const dateToFormat = dayjs(date).format('LL').split(' ')
    const dateAño = dateToFormat[4]
    return(
        <p className={`text-base ${ color }`}>
            {dateAño}
        </p>
    )
}

export const DateToNew = ( novedades = [] ) => {
    const años = novedades.map( ({id, fields}) => {
        const dateToFormat = dayjs(fields.fecha).format('LL').split(' ')
        const dateAño = dateToFormat[4]
        return {dateAño, id};
    })

    const setObj = new Set();

    const unicos = años.reverse().reduce((acc, año) => {
      if (!setObj.has(año.dateAño)){
        setObj.add(año.dateAño, año)
        acc.push(año)
      }
      return acc;
    },[]);
    
    return unicos;
}


export const DateToYearFunction = ( date ) => {
    const dateToFormat = dayjs(date).format('LL').split(' ')
    const dateAño = dateToFormat[4]
    return dateAño;
}