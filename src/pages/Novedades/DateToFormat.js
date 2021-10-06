import dayjs from 'dayjs';
import localizedFormat  from 'dayjs/plugin/localizedFormat';
import es from 'dayjs/locale/es'

dayjs.locale(es);

dayjs.extend(localizedFormat);

const DateToFormat = ({date}) => {
    const dateToFormat = dayjs(date).format('LL').split(' ')
    const dateMes = dateToFormat[2]
    const dateAño = dateToFormat[4]
    return(
        <p className="absolute uppercase font-bold md:font-normal text-base text-secundario-1 md:text-white top-2 md:top-5 right-2 md:right-5">
            {dateMes} | {dateAño}
        </p>
    )
}

export default DateToFormat;