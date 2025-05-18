import project1 from "../Assets/blueprint/project_1.png";
import blueprint1 from "../Assets/blueprint/blueprint_1.png";
import project2 from "../Assets/blueprint/project_2.png";
import blueprint2 from "../Assets/blueprint/blueprint_2.png";
import project3 from "../Assets/blueprint/project_3.png";
import blueprint3 from "../Assets/blueprint/blueprint_3.png";
import project4 from "../Assets/blueprint/project_4.png";

// Import additional images for gallery
import villa1 from "../Assets/villa1.jpg";
import villa2 from "../Assets/villa2.jpg";
import villa3 from "../Assets/villa3.jpeg";
import apartment1 from "../Assets/apartemn1.jpg";
import apartment2 from "../Assets/apartemn2.jpg";

export const projectDetailsData = [
  {
    id: 1,
    title: "Midtown Villa",
    slug: "midtown-villa",
    description: "A luxurious residential complex featuring modern villas with premium amenities and sustainable design.",
    fullDescription: "Midtown Villa is our flagship residential project offering the perfect blend of luxury and comfort. Located in a prime area with excellent connectivity, these villas are designed for families looking for a premium living experience. Each villa features spacious rooms, modern architecture, and energy-efficient systems.",
    location: "New Cairo, Egypt",
    completionDate: "December 2023",
    status: "Completed",
    category: "Residential",
    mainImage: project1,
    blueprintImage: blueprint1,
    mapLocation: "30.0444,31.2357", // Cairo coordinates
    gallery: [
      { id: 1, image: villa1, caption: "Front View" },
      { id: 2, image: villa2, caption: "Garden Area" },
      { id: 3, image: villa3, caption: "Swimming Pool" },
    ],
    features: [
      "24/7 Security",
      "Swimming Pool",
      "Fitness Center",
      "Landscaped Gardens",
      "Smart Home Technology",
      "Sustainable Design",
      "Private Parking"
    ],
    flats: [
      {
        type: "3 Bedroom Villa",
        size: "250 sq.m",
        price: "$450,000",
        bedrooms: 3,
        bathrooms: 3,
        features: "Private garden, master suite, smart home system"
      },
      {
        type: "4 Bedroom Villa",
        size: "320 sq.m",
        price: "$580,000",
        bedrooms: 4,
        bathrooms: 4,
        features: "Private pool, garden, home office, smart home system"
      },
      {
        type: "5 Bedroom Villa",
        size: "400 sq.m",
        price: "$750,000",
        bedrooms: 5,
        bathrooms: 5,
        features: "Private pool, garden, home theater, smart home system"
      }
    ],
    agent: {
      name: "Sarah Ahmed",
      phone: "+20 123 456 7890",
      email: "sarah@nkconstruction.com",
      photo: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 2,
    title: "Skyline Towers",
    slug: "skyline-towers",
    description: "Modern apartment complex with panoramic city views and state-of-the-art amenities.",
    fullDescription: "Skyline Towers offers contemporary living spaces with breathtaking views of the city. This residential complex features modern apartments with premium finishes, smart home technology, and community amenities designed for comfort and convenience. Located in a vibrant neighborhood with easy access to shopping, dining, and entertainment.",
    location: "Downtown Cairo, Egypt",
    completionDate: "June 2024",
    status: "Under Construction",
    category: "Residential",
    mainImage: project2,
    blueprintImage: blueprint2,
    mapLocation: "30.0566,31.2262",
    gallery: [
      { id: 1, image: apartment1, caption: "Living Room" },
      { id: 2, image: apartment2, caption: "Bedroom" }
    ],
    features: [
      "24/7 Security",
      "Rooftop Pool",
      "Fitness Center",
      "Concierge Service",
      "Underground Parking",
      "Children's Play Area",
      "Business Center"
    ],
    flats: [
      {
        type: "1 Bedroom Apartment",
        size: "75 sq.m",
        price: "$120,000",
        bedrooms: 1,
        bathrooms: 1,
        features: "Balcony, modern kitchen, city view"
      },
      {
        type: "2 Bedroom Apartment",
        size: "110 sq.m",
        price: "$180,000",
        bedrooms: 2,
        bathrooms: 2,
        features: "Balcony, modern kitchen, city view, master suite"
      },
      {
        type: "3 Bedroom Apartment",
        size: "150 sq.m",
        price: "$250,000",
        bedrooms: 3,
        bathrooms: 2,
        features: "Large balcony, modern kitchen, panoramic view, master suite"
      }
    ],
    agent: {
      name: "Mohamed Hassan",
      phone: "+20 123 456 7891",
      email: "mohamed@nkconstruction.com",
      photo: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: 3,
    title: "Green Valley Residences",
    slug: "green-valley-residences",
    description: "Eco-friendly residential community with sustainable features and green spaces.",
    fullDescription: "Green Valley Residences is an eco-conscious residential development that harmoniously blends modern living with nature. This sustainable community features energy-efficient homes, abundant green spaces, and environmentally friendly amenities. Designed for families who value both comfort and environmental responsibility.",
    location: "6th of October City, Egypt",
    completionDate: "March 2025",
    status: "Planning",
    category: "Residential",
    mainImage: project3,
    blueprintImage: blueprint3,
    mapLocation: "29.9285,30.9188",
    gallery: [
      { id: 1, image: villa1, caption: "Exterior View" },
      { id: 2, image: villa3, caption: "Garden" }
    ],
    features: [
      "Solar Power Systems",
      "Rainwater Harvesting",
      "Community Gardens",
      "Cycling Paths",
      "Electric Vehicle Charging",
      "Recycling Center",
      "Natural Ventilation"
    ],
    flats: [
      {
        type: "2 Bedroom Townhouse",
        size: "180 sq.m",
        price: "$220,000",
        bedrooms: 2,
        bathrooms: 2,
        features: "Garden, solar panels, energy-efficient appliances"
      },
      {
        type: "3 Bedroom Townhouse",
        size: "220 sq.m",
        price: "$280,000",
        bedrooms: 3,
        bathrooms: 2,
        features: "Garden, solar panels, energy-efficient appliances, home office"
      },
      {
        type: "4 Bedroom Villa",
        size: "300 sq.m",
        price: "$380,000",
        bedrooms: 4,
        bathrooms: 3,
        features: "Garden, solar panels, energy-efficient appliances, home office, smart home system"
      }
    ],
    agent: {
      name: "Laila Ibrahim",
      phone: "+20 123 456 7892",
      email: "laila@nkconstruction.com",
      photo: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  },
  {
    id: 4,
    title: "Business Hub",
    slug: "business-hub",
    description: "Modern commercial complex with office spaces, retail outlets, and business amenities.",
    fullDescription: "Business Hub is a state-of-the-art commercial development designed to meet the needs of modern businesses. This complex offers flexible office spaces, retail outlets, and comprehensive business amenities. Strategically located with excellent connectivity, it provides the perfect environment for businesses to thrive.",
    location: "Smart Village, Cairo",
    completionDate: "September 2024",
    status: "Under Construction",
    category: "Commercial",
    mainImage: project4,
    blueprintImage: blueprint1,
    mapLocation: "30.0721,31.0219",
    gallery: [
      { id: 1, image: apartment1, caption: "Office Space" },
      { id: 2, image: apartment2, caption: "Meeting Room" }
    ],
    features: [
      "24/7 Security",
      "High-speed Internet",
      "Conference Facilities",
      "Cafeteria",
      "Parking",
      "Backup Power",
      "Reception Services"
    ],
    flats: [
      {
        type: "Small Office",
        size: "50 sq.m",
        price: "$80,000",
        features: "Open plan, high-speed internet, modern fixtures"
      },
      {
        type: "Medium Office",
        size: "100 sq.m",
        price: "$150,000",
        features: "Meeting room, kitchenette, high-speed internet"
      },
      {
        type: "Large Office",
        size: "200 sq.m",
        price: "$280,000",
        features: "Multiple rooms, conference room, kitchenette, server room"
      },
      {
        type: "Retail Space",
        size: "75 sq.m",
        price: "$120,000",
        features: "Street frontage, storage room, high visibility"
      }
    ],
    agent: {
      name: "Ahmed Kamal",
      phone: "+20 123 456 7893",
      email: "ahmed@nkconstruction.com",
      photo: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  }
];