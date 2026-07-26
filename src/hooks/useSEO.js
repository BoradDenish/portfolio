import { useEffect } from 'react'

export default function useSEO({ title, description, keywords, url, ogTitle, ogDescription }) {
  useEffect(() => {
    const siteName = 'Denish Borad | Python Backend Developer'
    document.title = title ? `${title} | ${siteName}` : siteName

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (el) {
        el.setAttribute('content', content)
      } else {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        el.setAttribute('content', content)
        document.head.appendChild(el)
      }
    }

    if (description) {
      setMeta('description', description)
      setMeta('og:description', ogDescription || description, 'property')
    }
    if (ogTitle) setMeta('og:title', ogTitle, 'property')
    if (url) setMeta('og:url', url, 'property')
    if (keywords) setMeta('keywords', keywords)

    return () => {
      document.title = siteName
    }
  }, [title, description, keywords, url, ogTitle, ogDescription])
}
