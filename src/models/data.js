// assets
import assets from "../assets/index";

const DATA = {
    places: [
        {
            id: 1,
            name: 'Surabaya',
            imgSrc: 'https://images.unsplash.com/photo-1603136548580-097020e300d6',
            hotel: '20 Hotel',
            apartment: '20 Apartment'
        },
        {
            id: 2,
            name: 'Pasuruan',
            imgSrc: 'https://res.cloudinary.com/achowba/image/upload/v1672820525/Dev/keturon/pasuruan.png',
            hotel: '20 Hotel',
            apartment: '20 Apartment'
        },
        {
            id: 3,
            name: 'Malang',
            imgSrc: 'https://www.communitylegalsocal.org/wp-content/uploads/2021/05/Picture1-1024x491-1.png',
            hotel: '20 Hotel',
            apartment: '20 Apartment'
        }
    ],
    facilities: [
        {
            id: 1,
            name: 'Kitchen',
            imgSrc: 'https://images.pexels.com/photos/4682110/pexels-photo-4682110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            description: '1 Kitchen',
        },
        {
            id: 2,
            name: 'Bedroom',
            imgSrc: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            description: '2 bedroom in the home',
        },
        {
            id: 3,
            name: 'Bathroom',
            imgSrc: 'https://images.pexels.com/photos/6301176/pexels-photo-6301176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            description: '2 bathroom',
        },
        {
            id: 4,
            name: 'Dining Table',
            imgSrc: 'https://images.unsplash.com/photo-1549407704-ec62ce8c2827',
            description: '1 table',
        },
    ],
    testimonials: [
        {
            id: 1,
            rating: 4.7,
            name: 'Sarah Aprillia Putri',
            authorImg: 'https://images.pexels.com/photos/1904692/pexels-photo-1904692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            details: `
                Lorem ipsum dolor sit adipiscing elit. Dis mus tortor
                est, ullamcorper eu egestas condimentum. laculis
                lobortis maecenas id quam aliquam, ut. Diam nec
                viverra neque ultrices amet. Rhoncus condimentum
                ut tellus blandit. Pellentesque viverra mu vulputate
                sagittis.
            `,
        },
        {
            id: 2,
            rating: 4.7,
            name: 'Wildan Wari',
            authorImg: 'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            details: `
                Lorem ipsum dolor sit adipiscing elit. Dis mus tortor
                est, ullamcorper eu egestas condimentum. laculis
                lobortis maecenas id quam aliquam, ut. Diam nec
                viverra neque ultrices amet. Rhoncus condimentum
                ut tellus blandit. Pellentesque viverra mu vulputate
                sagittis.
            `,
        },
        {
            id: 3,
            rating: 4.7,
            name: 'Baron Zemo',
            authorImg: assets.images.baronZemo,
            details: `
                Lorem ipsum dolor sit adipiscing elit. Dis mus tortor
                est, ullamcorper eu egestas condimentum. laculis
                lobortis maecenas id quam aliquam, ut. Diam nec
                viverra neque ultrices amet. Rhoncus condimentum
                ut tellus blandit. Pellentesque viverra mu vulputate
                sagittis.
            `,
        },
        {
            id: 4,
            rating: 4.7,
            name: 'Lex Luthor',
            authorImg: 'https://thispersondoesnotexist.com/image',
            details: `
                Lorem ipsum dolor sit adipiscing elit. Dis mus tortor
                est, ullamcorper eu egestas condimentum. laculis
                lobortis maecenas id quam aliquam, ut. Diam nec
                viverra neque ultrices amet. Rhoncus condimentum
                ut tellus blandit. Pellentesque viverra mu vulputate
                sagittis.
            `,
        },
    ],
};

export default DATA;

