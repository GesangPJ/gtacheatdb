"use client"

import { useEffect, useState } from 'react'

const GTA4 = () => {

  const [cheats, setCheats] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCheats() {
      const res = await fetch('/api/gta4')
      const data = await res.json()
      setCheats(data.data)
      setLoading(false)
    }

    fetchCheats()
  }, [])

  return <div>
    <div className="w-full px-4 sm:px-8 lg:px-16 min-h-[75vh] flex flex-col items-center mt-14">
      <div className="text-white">
        <h2 className="text-xl font-bold">
          GTA IV CHEATS
        </h2>
      </div>
      <div className="text-white w-full flex flex-col items-center mt-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="table-auto w-full max-w-4xl mx-auto text-left text-lg font-light text-surface mt-6 mb-14">
              <thead className="border-b border-neutral-200 font-medium border-white/10">
                <tr className="border-t border-white bg-blue-900">
                  <th className="w-12 sm:w-16 lg:w-24 border-r border-l border-white text-center text-xl">#</th>
                  <th className="w-48 sm:w-64 lg:w-80 border-r border-white text-center text-xl">Code</th>
                  <th className="w-96 sm:w-[32rem] lg:w-[36rem] border-r border-white text-center text-xl">Description</th>
                </tr>
              </thead>
              <tbody>
                {cheats.map((cheat, index) => (
                  <tr key={cheat._id} className="border-b border-neutral-200">
                    <td className="w-12 sm:w-16 lg:w-24 border-r border-l border-white text-center">{index + 1}</td>
                    <td className="w-48 sm:w-64 lg:w-80 border-r border-white px-2 sm:px-4 lg:px-6">{cheat.code}</td>
                    <td className="w-96 sm:w-[32rem] lg:w-[36rem] border-r border-white px-2 sm:px-4 lg:px-6">{cheat.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div class="disclaimer text-white text-sm mt-9 mb-9">
        <p>
          <strong>Disclaimer:</strong> This website provides information about available cheats in various Grand Theft Auto (GTA) games. 
          Grand Theft Auto is a trademark and copyright of Rockstar Games. 
          Please be aware that using cheats may disable or lock game achievements and affect your gaming experience.
        </p>
        <p>
          <strong>PlayStation</strong> and PlayStation-related trademarks are the property of Sony Interactive Entertainment Inc.
        </p>
        <p>
        <strong>Xbox</strong> and Xbox-related trademarks are the property of Microsoft Corporation.
        </p>
        <p>
          This website and website source code is not affiliated with, endorsed, sponsored, or specifically approved by Rockstar Games, Sony, or Microsoft.
        </p>
        <p>
        All trademarks and copyrights are the property of their respective owners.
        </p>
      </div>
    </div>
    </div>
}

export default GTA4