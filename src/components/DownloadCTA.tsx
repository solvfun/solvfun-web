import DownloadButtons from "./DownloadButtons";

export default function DownloadCTA() {
  return (
    <section id="download" className="px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-xl mb-4 text-4xl sm:text-5xl md:text-6xl">
          Ready to Trade?
        </h2>
        <p className="mb-12 text-lg text-text-secondary sm:text-xl">
          Your keys, your coins, your speed.
        </p>
        <DownloadButtons />
      </div>
    </section>
  );
}
