import EventForm from "../components/EventForm";

function NewEventPage(){

    const submitHandler = (e) => {
        e.preventDefault();
    }
    
    return (
        <EventForm/>
    )
}

export default NewEventPage;