import { useEffect, useState } from 'react'

function GeoIP() {
  const [locationText, setLocationText] = useState('地址: 正在加载...') // Initial state

  useEffect(() => {
    // Define the async function to fetch IP data
    const fetchGeoIP = async () => {
      try {
        const res = await fetch('https://api.ip.sb/geoip')
        if (res.ok) {
          const data = await res.json()
          setLocationText(`地址: ${data.country}`)
        } else {
          setLocationText('地址: 未知位置 (API error)')
        }
      } catch (error) {
        console.error('Failed to fetch GeoIP:', error)
        setLocationText('地址: 未知位置 (Network error)')
      }
    }

    fetchGeoIP() // Call the async function
  }, []) // The empty dependency array ensures this effect runs only once on mount

  return <p className="text-gray-600 text-sm dark:text-gray-400">{locationText}</p>
}

export default GeoIP
