import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QURY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from 'next/server';

const View = async ({ id }: { id: string }) => {
  {
    /** this dinamic rendering in video */
  }
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QURY, { id });
{
  /** After function allows you to schedule work to be executed after a response (or prerender) is finished, which is useful for tasks that should not block the primary response, such as logging and analytics 3 . */
}
  after(async()=> await writeClient
    .patch(id)
    .set({ views: totalViews + 1 })
    .commit());
  
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};

export default View;
