import SearchForm from "../components/SearchForm";


export default function Home() {
  return (
    <>
      {/* created your own utility classes in globals.css */}
      <section className="pink_container">
        <h1 className="heading">Pitch your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl" >
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm/>
      </section>
    </>
  );
}
