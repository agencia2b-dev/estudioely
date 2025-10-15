import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Estúdio Ely - Color Grading Profissional',
    short_name: 'Estúdio Ely',
    description: 'Estúdio especializado em color grading e correção de cores para produções audiovisuais',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ff0000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
