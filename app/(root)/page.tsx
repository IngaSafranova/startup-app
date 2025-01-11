import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Inga' },
      _id: 1,
      description: "This is a description",
      image:
        "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      category: 'IT',
      title: 'We work'
    },
  ];



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
          posts.map((post: StartupCardType, index: number) => (
            <StartupCard key={post?._id} post={ post} />
          ))
        ) : (
          <p className="no-results" >No startups found</p>
        )}

        </ul>
      </section>
    </>
  );
}
