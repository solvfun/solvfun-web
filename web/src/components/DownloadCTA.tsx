import DownloadButtons from "./DownloadButtons";

export default function DownloadCTA() {
  return (
    <section id="download" className="px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-xl mb-4 text-5xl sm:text-6xl md:text-7xl">
          Swap Fast.
          <br />
          Stay Free.
        </h2>
        <p className="mb-12 text-lg text-text-secondary sm:text-xl">
          Buy and sell meme coins like lightning.
        </p>
        <DownloadButtons />
      </div>
    </section>
  );
}
