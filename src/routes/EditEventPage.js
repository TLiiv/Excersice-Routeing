import EventForm from '../components/EventForm';

import { useRouteLoaderData } from 'react-router-dom';

function EditEventPage () {
    const data = useRouteLoaderData('event-detail'); //useRouteLoader,sest lähim path pole õige sellepärast on pathile id õige routeigad annab event-i
    const event = data.event;
    
    return (
        <EventForm event={event}/>
    )
}

export default EditEventPage;