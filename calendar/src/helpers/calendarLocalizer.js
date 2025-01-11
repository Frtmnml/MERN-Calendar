import { dateFnsLocalizer } from 'react-big-calendar'
import esEs from 'date-fns/locale/es'
import {format, parse, startOfWeek, getDay} from 'date-fns'


const locales = {
    'es': esEs,
  }
  

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })