
export const CalendarEvent = ({ event }) => {
    const {user, title, notes, bgColor } = event;


  return (
    <>
      <strong>{ title }</strong>
      <strong> - { user.name } </strong>
    </>
  )
}
