import StartupCard ,{StartupTypeCard} from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {

// to make a search to work we need to extract search params
    const query = (await searchParams).query;
    const params = { search: query || null };
    // pass params to sanityFetch
  const {data: posts} = await sanityFetch({query:STARTUPS_QUERY, params});



  return (
    <>
      {/* created your own utility classes in globals.css */}
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container" >
        <p className="text-30-semibold" >
  {query ? `Search results for "${query}"`: "All Startups"}
        </p>
        <ul className="mt-7 card_grid" >
          {/* if we have startups we render them */}
          {posts?.length > 0 ? (
          posts.map((post: StartupTypeCard, index: number) => (
            <StartupCard key={post?._id} post={ post} />
          ))
        ) : (
          <p className="no-results" >No startups found</p>
        )}

        </ul>
      </section>
      <SanityLive/>
    </>
  );
}
