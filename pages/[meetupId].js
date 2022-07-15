import Head from "next/head";
import React, { Fragment } from "react";
import Meetup from "../models/Meetup";
import connectMongo from "../utils/connectMongo";

function MeetupDetails(props) {
  return (
      <Fragment>
          <Head>
              <title>{props.meetup.title}</title>
              <meta name="description" content={props.meetup.description} />
          </Head>
      <img src={props.meetup.image} alt="some image" />
      <h1>{props.meetup.title}</h1>
      <address>{props.meetup.address}</address>
      <p>{props.meetup.description}</p>
    </Fragment>
  );
}

export async function getStaticPaths() {
  await connectMongo();
  const meetupIds = await Meetup.find().select({ _id: 1 });

  const paths = meetupIds.map((meetup) => ({
    params: { meetupId: meetup._id.toString()},
  }));

  return {
      paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  await connectMongo();
  const { _id, description, title, address, image } = await Meetup.findById(
    meetupId
  );
  const adjustedMeetup = {
    description,
    title,
    address,
    image,
    id: _id.toString(),
  };
  // fetch data from api
  return {
    props: {
      meetup: adjustedMeetup,
      revalidate: 10,
    },
  };
}

export default MeetupDetails;
