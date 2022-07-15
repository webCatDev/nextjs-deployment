import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router'

function NewMeetupPage() {
    const router = useRouter()

  const handleAddMeetup = (meetupData) => {
    fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json()).then(() => router.push('/')
    ).catch(console.log)
    
    
  };

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}

export default NewMeetupPage;
