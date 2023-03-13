import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import timeGridDay from '@fullcalendar/daygrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { useRef } from "react";

import styles from './styles.module.scss';

const Calendar = () => {
    const calendarRef = useRef(null);
    return (
        <div className={styles.calendar}>
            <FullCalendar
                ref={calendarRef}
                timeZone='UTC'
                themeSystem='bootstrap'
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                }}
                plugins={[timeGridPlugin,timeGridDay, interactionPlugin, dayGridPlugin, bootstrapPlugin]}
                initialView='dayGridMonth'
                handleWindowResize={true}
                contentHeight={500}
                height={'auto'}
                editable
                selectable
                events={
                    [
                    { title: 'event 1', date: '2022-10-30' },
                    { title: 'event 2', date: '2022-10-30' }
                    ]}
            />
        </div>
    );
};

export default Calendar;