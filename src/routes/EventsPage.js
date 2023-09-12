import { Link } from "react-router-dom";

const DUMMYEVENTS = [
    {id:'e1', event:'esimene'},
    {id:'e2', event:'teine'},
    {id:'e3', event:'kolmas'},
];


function EventsPage(){

    const events = DUMMYEVENTS.map((e)=>(
        <li key={e.id}><Link to={`/events/${e.id}`}>{e.event}</Link></li>
    ))

    return (
        <>
            <h1>EventsPage</h1>
            <ul>{events}</ul>
        </>
    )
}

export default EventsPage;