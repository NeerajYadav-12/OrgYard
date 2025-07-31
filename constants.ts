
import type { NavItem, Product, Service, ServiceHighlight, WhyChooseUsPoint } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'gardens', label: 'Gardens' },
  { id: 'necessaries', label: 'Necessaries' },
  { id: 'about', label: 'About Us' },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Plants', price: '₹1299', imageUrl: 'https://picsum.photos/seed/monstera/400/400', description: 'A popular and easy-to-care-for houseplant with iconic split leaves.' },
  { id: 2, name: 'Snake Plant', category: 'Plants', price: '₹799', imageUrl: 'https://picsum.photos/seed/snakeplant/400/400', description: 'Extremely hardy and known for its air-purifying qualities.' },
  { id: 3, name: 'Fiddle Leaf Fig', category: 'Plants', price: '₹2499', imageUrl: 'https://picsum.photos/seed/fiddleleaf/400/400', description: 'A trendy statement plant with large, violin-shaped leaves.' },
  { id: 4, name: 'Ergonomic Trowel', category: 'Tools', price: '₹499', imageUrl: 'https://picsum.photos/seed/trowel/400/400', description: 'A durable, comfortable trowel for all your potting needs.' },
  { id: 5, name: 'Organic Potting Mix', category: 'Organic', price: '₹349', imageUrl: 'https://picsum.photos/seed/soil/400/400', description: 'A nutrient-rich, 100% organic mix for healthy plant growth.' },
  { id: 6, name: 'Ceramic Planter Set', category: 'Decor', price: '₹1999', imageUrl: 'https://picsum.photos/seed/planter/400/400', description: 'A set of three elegant ceramic pots in calming earth tones.' },
  { id: 7, name: 'Neem Oil Spray', category: 'Organic', price: '₹299', imageUrl: 'https://picsum.photos/seed/neem/400/400', description: 'An organic solution for pest control and fungal issues.' },
  { id: 8, name: 'Watering Can', category: 'Tools', price: '₹899', imageUrl: 'https://picsum.photos/seed/wateringcan/400/400', description: 'A stylish and functional metal watering can with a long spout.' },
];

export const SERVICES: Service[] = [
    { 
        id: 1, 
        title: 'Rooftop Garden Design', 
        description: 'Transform your unused rooftop into a lush, productive green oasis.', 
        imageUrl: 'https://picsum.photos/seed/rooftop/600/400',
        longDescription: "Reclaim your rooftop and turn it into a breathtaking escape. We specialize in designing and implementing stunning rooftop gardens that are both beautiful and functional. Whether you envision a vibrant flower garden, a productive vegetable patch, or a serene green lounge, we handle everything from waterproofing and structural assessments to soil composition and plant selection, creating a sustainable ecosystem in the sky.",
        features: ["Customized design to match your aesthetic and space", "Advanced drainage and irrigation systems", "Selection of climate-appropriate plants", "Structural load assessment and waterproofing", "Optional features like seating, lighting, and pergolas"],
        process: [
            { step: "Consultation & Site Analysis", description: "We visit your space to understand your vision, assess sun exposure, wind, and access." },
            { step: "Concept Design & 3D Visualization", description: "Receive a detailed design plan with 3D models to see your future garden." },
            { step: "Installation & Setup", description: "Our professional team brings the design to life, handling all construction and planting." },
            { step: "Handover & Maintenance Guide", description: "We walk you through your new garden and provide a guide for its care." }
        ],
        gallery: [
            'https://picsum.photos/seed/rooftop-g1/600/400',
            'https://picsum.photos/seed/rooftop-g2/600/400',
            'https://picsum.photos/seed/rooftop-g3/600/400'
        ]
    },
    { 
        id: 2, 
        title: 'Balcony Makeover', 
        description: 'We design and install beautiful, space-efficient gardens for urban balconies.', 
        imageUrl: 'https://picsum.photos/seed/balcony/600/400',
        longDescription: "Even the smallest balcony has the potential to become a personal sanctuary. Our balcony makeover service focuses on maximizing space and impact with clever planting solutions like vertical gardens, hanging baskets, and custom-built planters. We'll help you select plants that thrive in your balcony's specific conditions, creating a private green nook for you to relax and unwind.",
        features: ["Space-efficient vertical gardening solutions", "Custom-built planters and railing boxes", "Lightweight soil mixes suitable for balconies", "Drip irrigation for easy watering", "Plant selection for privacy screening"],
        process: [
            { step: "Measure & Plan", description: "We meticulously measure your balcony and discuss your desired style and plant preferences." },
            { step: "Plant & Material Selection", description: "Together, we choose the perfect combination of plants, pots, and decor." },
            { step: "One-Day Installation", description: "Our team efficiently transforms your balcony, typically within a single day." },
            { step: "Care Instructions", description: "You receive simple, clear instructions to keep your balcony garden flourishing." }
        ],
        gallery: [
            'https://picsum.photos/seed/balcony-g1/600/400',
            'https://picsum.photos/seed/balcony-g2/600/400',
            'https://picsum.photos/seed/balcony-g3/600/400'
        ]
    },
    { 
        id: 3, 
        title: 'Organic Vegetable Patch', 
        description: 'Grow your own fresh, organic vegetables with our expert setup and guidance.', 
        imageUrl: 'https://picsum.photos/seed/veggie/600/400',
        longDescription: "Experience the unparalleled taste and satisfaction of harvesting your own food. We design and install productive organic vegetable patches tailored to your space, whether it's a terrace, backyard, or a set of sunny containers. We use heirloom seeds, create rich, living soil, and teach you the principles of organic pest management, setting you up for a successful and delicious harvest.",
        features: ["Raised beds or container garden setups", "100% organic soil, compost, and fertilizers", "Seasonal vegetable and herb selection", "Companion planting for natural pest control", "Ongoing support and troubleshooting"],
        process: [
            { step: "Sunlight & Space Assessment", description: "We identify the best location for your veggie patch to ensure it gets adequate sunlight." },
            { step: "Garden Setup & Soil Preparation", description: "We build the beds, fill them with our premium organic mix, and install irrigation." },
            { step: "Planting & Seeding", description: "We plant seasonal saplings and seeds according to a carefully planned layout." },
            { step: "Organic Gardening Workshop", description: "We provide a hands-on session on watering, feeding, and managing your new kitchen garden." }
        ],
        gallery: [
            'https://picsum.photos/seed/veggie-g1/600/400',
            'https://picsum.photos/seed/veggie-g2/600/400',
            'https://picsum.photos/seed/veggie-g3/600/400'
        ]
    },
    { 
        id: 4, 
        title: 'Corporate Green Spaces', 
        description: 'Enhance your office environment with our custom-designed indoor plantscapes.', 
        imageUrl: 'https://picsum.photos/seed/office/600/400',
        longDescription: "Boost productivity, creativity, and employee well-being by bringing nature into the workplace. We design, install, and maintain stunning indoor plantscapes for offices, lobbies, and commercial spaces. Our designs range from elegant potted plants in reception areas to impressive living green walls, all chosen for their beauty and air-purifying qualities. Full maintenance plans available.",
        features: ["Low-maintenance, office-appropriate plants", "Air-purifying plant selections", "Living green walls and large statement plants", "Stylish, contemporary planters", "Comprehensive maintenance plans (watering, feeding, pruning)"],
        process: [
            { step: "Workspace Consultation", description: "We assess your office layout, lighting conditions, and brand aesthetic." },
            { step: "Customized Proposal", description: "You receive a design proposal with plant and planter options that fit your budget." },
            { step: "Seamless Installation", description: "Our team installs the entire plantscape with minimal disruption to your workday." },
            { step: "Ongoing Professional Care", description: "We schedule regular visits to ensure every plant remains healthy and beautiful." }
        ],
        gallery: [
            'https://picsum.photos/seed/office-g1/600/400',
            'https://picsum.photos/seed/office-g2/600/400',
            'https://picsum.photos/seed/office-g3/600/400'
        ]
    },
];

export const HOME_SERVICES: ServiceHighlight[] = [
    { icon: 'sprout', title: 'Garden Setups', description: "Dreaming of a green escape? Whether it's a sun-drenched terrace or a cozy indoor corner, our experts design and install bespoke gardens that reflect your style." },
    { icon: 'recycle', title: 'Plant Rentals & Sales', description: 'Commitment-free greenery or a forever plant friend? We offer flexible options to rent or buy from our curated collection for homes and offices.' },
    { icon: 'star', title: 'Maintenance Support', description: 'We help your garden flourish. Our maintenance packages provide expert care to ensure your green investments stay happy and vibrant all year round.' },
    { icon: 'event', title: 'Event Setups', description: 'Elevate your special occasions with the living beauty of plants. We provide stunning green decor for weddings, corporate events, and parties.' },
];

export const WHY_CHOOSE_US_POINTS: WhyChooseUsPoint[] = [
    { icon: 'leaf', title: 'Expert Curation', description: 'Every plant and product is hand-picked by our specialists for quality and suitability.' },
    { icon: 'camera', title: 'AI-Powered Support', description: 'Our Plant Doctor offers instant, intelligent care advice for your green friends.' },
    { icon: 'star', title: 'Sustainable Practices', description: 'We prioritize organic solutions and eco-friendly materials in all our services.' },
    { icon: 'sprout', title: 'Community Focused', description: 'Join a growing movement of urban gardeners across India, supported by our platform.' },
];