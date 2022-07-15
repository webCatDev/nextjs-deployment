import Head from "next/head";
import connectMongo from "../utils/connectMongo";
import Meetup from "../models/Meetup";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";



function HomePage(props) {
  return (
      <Fragment>
          <Head>
              <meta name="description" content="Browse fun react meetups" />
              <title>Fun Meetups</title>
          </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export function getServerSideProps(context) {

//     const request = context.req
//     const response = context.res

//     return {
//         props: {
//             meetups: dummy_meetups
//         }
//     }
// }

export async function getStaticProps() {
   
    await connectMongo()
    const data = await Meetup.find()

    return {
        props: {
            meetups: data.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
            revalidate: 10
        }
    }
}

export default HomePage;
