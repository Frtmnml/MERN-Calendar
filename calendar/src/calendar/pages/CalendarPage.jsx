import { Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {addHours} from 'date-fns'
import { CalendarEvent, NavBar } from "../"
import { localizer, getMessagesEs } from '../../helpers'
import { useState } from 'react'





const events = [{
  title: 'Birthday',
  notes: 'Hay que comprar el arroz con pollo',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    id: '123',
    name: 'Joshua',
  }
}]





export const CalendarPage = () => {

  const [lastView, setLastView] =  useState(localStorage.getItem('lastView') || 'Week');

  const eventStyleGetter = (event, start, end, bgColor, isSelected) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }




const onDoubleClick = (event) => {
  console.log("event🔥", event)
}

const onSelect = (event) => {
  console.log("Click", event)
}

const onViewChange = (event) => {
  localStorage.setItem('lastView', event);
  setLastView(event);
}



  return (
    <>
    <NavBar />

  <div>
    <Calendar
      defaultView= { lastView }
      culture='es'
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px )' }}
      messages={ getMessagesEs() }
      eventPropGetter={ eventStyleGetter }
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={ onDoubleClick }
      onSelectEvent={ onSelect }
      onView={ onViewChange }
    />
  </div>

    </>
  )
}