import {SiOpenaigym} from 'react-icons/si'


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]


export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "We provide the best customized classes",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "We have personalized training for each goal",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "You can have a personal trainer at your service available 24/7",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "The facilities and online material are at your disposal",
        path: "/programs/444"
    }
]


export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Do not use the material beyond the stipulated time"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Respect any name of our company and gym"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Respect the monitors and ask them for support without hesitation"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Create a good atmosphere within the facilities without disrespect"
    }
]


export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Only for preventive health reasons is it advisable to do between 30 and 60 minutes of moderate exercise 3 to 5 times a week, or alternatively, reduce the time and frequency but increase the intensity load."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "There is no specific time of day that is better for physical exercise in order to lose weight: 'Exercising on an empty stomach neither helps nor hinders weight loss. What helps with weight loss is exercising regularly, eating healthy, and getting rest. There are no miracles,' as stated by experts."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "The recommended healthy level of physical activity is 30 minutes of moderate exercise at least five days a week. Moderate refers to being enough to stimulate the heart and lungs to make them stronger."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "The warm-up of the muscles is essential before starting our training, as it helps to increase our endurance and the range of motion of the joints. But fundamentally, it prevents us from the possibility of suffering injuries when performing physical activity. Generally, the suggested warm-up time is 15 minutes."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Most athletes should do a combination of strength and cardio training. The ideal combination of both depends on each athlete's goals: muscle mass or endurance."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes. If you focus on proper technique and form, you can train with weights regardless of your body fat percentage. Along with appropriate changes in nutrition, weightlifting for beginners can help accelerate weight loss if that is your goal."
    }
]


export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Very good customer service, you can tell that they are all professionals in the sports world. I highly recommend this gym.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Thanks to the trainers on this site, I have been able to improve my physical fitness and my self-esteem. The coaches are very pleasant and attentive. 10/10!!!",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Couldn't be better. I didn't know about the existence of this gym, but since I signed up, I've created an unbeatable routine, many thanks to all the trainers.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "100% recommendable for anyone who wants to improve their health, both physically and emotionally, they are amazing!",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Let's not talk about the monitors, because they are very good at what they do. In my opinion, what stands out about this place is the equipment it offers, very good and comfortable machines that are also functional. It's a pleasure to train here.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]


export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]


const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]