export default function manifest() {
return{
    name:'Mi Aplicación PWA',
    short_name:'PWA App',
    descripcion:'Aplicación PWAW construida con Next.js',
    start_url:'/',
    display:'standalone',
    background_color: '#F03E7C',
    theme_color: '#F9FAFB',
    icons: [
        {
            src:'icon-512.jpg',
            sizes: '192x192',
            type: 'image/jpg',
        },
        {
            src: 'icon-512.jpg',
            sizes: '512x512',
            type: 'image/jpg',
        },

    ]

}

};