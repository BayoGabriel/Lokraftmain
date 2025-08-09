"use client";
import { Fragment } from "react";
import Job_Detail from "../artisan_view_component/Job_Detail";
import Quote_Form from "./send_quote_view_components/Quote_Form";
import Image from "next/image";
import { BigBed } from "@/public";

const staticJob = {
  id: 1,
  title: "Bed Frame Repair",
  location: "Alaba, Lagos",
  postedTime: "5mins ago",
  price: 50000,
  image: "/bedframe.jpg",
  description: "We are seeking a skilled designer to craft...",
  timeline: "April 29 - April 30, 2025",
  projectType: "One-time",
  client: {
    rating: 5.0,
    reviewsCount: 5,
    totalReviews: 3,
    location: "Yaba, Lagos",
    jobsPosted: 15,
    memberSince: "Jan, 2025"
  }
};

const Bid_View = () => {
  return (
    <Fragment>
      <div className="w-full my-4">
        <Image src={BigBed} alt="bigbed" />
      </div>
      <div className="flex gap-4 my-4 max-md:flex-col">
        <div className="w-[50%] max-md:w-full">
          <Job_Detail job={staticJob} showSendQuote={false} />
        </div>
        <div className="w-[50%] max-md:w-full">
          <Quote_Form/>
        </div>
      </div>
    </Fragment>
  );
};

export default Bid_View;
