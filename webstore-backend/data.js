import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Michael',
            email: 'test@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Jimmy',
            email: 'test2@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],

    products: [
        {
            name: 'Nike everyday sneakers',
            category: 'Shoes',
            image: '/images/shoes/shoes1.jpeg',
            price: 80,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Vans casual',
            category: 'Shoes',
            image: '/images/shoes/shoes2.jpeg',
            price: 100,
            countInStock: 15,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Lacoste textile shoes',
            category: 'Shoes',
            image: '/images/shoes/shoes3.jpg',
            price: 50,
            countInStock: 6,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 16,
            description: 'high quality product',
        },
        {
            name: 'Gardion suit shoes',
            category: 'Shoes',
            image: '/images/shoes/shoes4.jpeg',
            price: 135,
            countInStock: 0,
            brand: 'Gardion',
            rating: 4.2,
            numReviews: 13,
            description: 'high quality product',
        },
        {
            name: 'Nike OG shoes',
            category: 'Shoes',
            image: '/images/shoes/shoes5.jpeg',
            price: 110,
            countInStock: 30,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 18,
            description: 'high quality product',
        },
        {
            name: 'Guantimo summer shoes',
            category: 'Shoes',
            image: '/images/shoes/shoes6.jpeg',
            price: 142,
            countInStock: 27,
            brand: 'Guantimo',
            rating: 4.7,
            numReviews: 22,
            description: 'high quality product',
        },
    ],
}

export default data
