
const asset = (path) => new URL(`../assets/${path}`, import.meta.url).href

export const navItems = [
  'Cómo nos expresamos','Logotipos','Color','Tipografía','Retículas','Texturas','Imágenes','Motion','Aplicaciones'
]
export const colorBasics = [
  { name:'Negro', hex:'#000000', rgb:'0 0 0', cmyk:'100 100 100', dark:true },
  { name:'Blanco', hex:'#FFFFFF', rgb:'255 255 255', cmyk:'0 0 0', dark:false }
]
export const accentColors = [
  { name:'Cian', hex:'#77C9E5', rgb:'119 201 229', cmyk:'54 19 0' },
  { name:'Amarillo', hex:'#F8EC6B', rgb:'248 236 107', cmyk:'7 0 68 0' },
  { name:'Violeta', hex:'#BC8EBF', rgb:'188 142 191', cmyk:'30 51 1 0' },
  { name:'Rojo', hex:'#E42924', rgb:'228 41 36', cmyk:'1 93 89 0' }
]
export const imageCards = [
  {src:asset('contributors/artista-1.png'), label:'Piper Ferguson'},
  {src:asset('contributors/artista-2.png'), label:'Rafa Ariño'},
  {src:asset('contributors/artista-3.png'), label:'Adam Elmakias'},
  {src:asset('albums/jeff-parker-happy-today.png'), label:'Jeff Parker'},
]
export const appImages = [
  asset('albums/user-cover-01.jpg'),asset('albums/user-cover-02.png'),asset('albums/user-cover-03.jpg'),asset('albums/user-cover-04.png'),asset('albums/user-cover-05.png'),asset('albums/user-cover-06.png')
]
