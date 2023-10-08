import Image from 'next/image'

const Satellite = () => {
  const data = [
    {
      satelliteName: 'Hubble Space Telescope',
      owner: 'NASA (National Aeronautics and Space Administration)',
      country: 'USA',
      orbitalPlane: 'Low Earth Orbit (LEO)',
      height: '547 km',
      position: '39.5515° N, 105.1427° W',
      timestamp: '2023-10-08 10:00:00',
      incidentType: 'Observation Mission'
    },
    {
      satelliteName: 'ISS (International Space Station)',
      owner: 'Multiple international space agencies (e.g., NASA, Roscosmos, ESA)',
      country: 'International (collaboration of various countries)',
      orbitalPlane: 'Low Earth Orbit (LEO)',
      height: '400 km',
      position: '51.6741° N, 0.3700° W',
      timestamp: '2023-10-09 14:30:00',
      incidentType: 'Space Research'
    },
    {
      satelliteName: 'Landsat 8',
      owner: 'NASA (National Aeronautics and Space Administration)',
      country: 'USA',
      orbitalPlane: 'Polar Sun-Synchronous Orbit (SSO)',
      height: '705 km',
      position: '98.2° W',
      timestamp: '2023-10-10 08:15:00',
      incidentType: 'Earth Observation'
    },
    {
      satelliteName: 'Galileo Navigation System',
      owner: 'European Union and European Space Agency (ESA)',
      country: 'Multiple European countries',
      orbitalPlane: 'Medium Earth Orbit (MEO)',
      height: '23,222 km',
      position: 'Various positions in MEO',
      timestamp: '2023-10-11 16:45:00',
      incidentType: 'Navigation and Positioning'
    },
    // Add more data as needed
  ];

  // Rest of the code remains the same
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started in AuroTrigger;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/reconnection_0.jpg"
              alt="Magnetig reconnection image"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
{/*         <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Satellite Name</th>
                <th className="py-2 px-4 border-b">Owner</th>
                <th className="py-2 px-4 border-b">Country</th>
                <th className="py-2 px-4 border-b">Orbital Plane</th>
                <th className="py-2 px-4 border-b">Height</th>
                <th className="py-2 px-4 border-b">Position</th>
                <th className="py-2 px-4 border-b">Timestamp</th>
                <th className="py-2 px-4 border-b">Incident Type</th>
              </tr>
            </thead>
            <tbody>
              {Satellite.map((satellite, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{satellite.satelliteName}</td>
                  <td className="py-2 px-4 border-b">{satellite.owner}</td>
                  <td className="py-2 px-4 border-b">{satellite.country}</td>
                  <td className="py-2 px-4 border-b">{satellite.orbitalPlane}</td>
                  <td className="py-2 px-4 border-b">{satellite.height}</td>
                  <td className="py-2 px-4 border-b">{satellite.position}</td>
                  <td className="py-2 px-4 border-b">{satellite.timestamp}</td>
                  <td className="py-2 px-4 border-b">{satellite.incidentType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about AuroTrigger and APIs.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about the initiative and our Open Data philosophy!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Prediction model{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Sources and methos Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
