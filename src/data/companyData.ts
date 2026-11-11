export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  image: string;
  typicalApplications: string[];
  equipmentDetails: string[];
  siteConsiderations: string[];
  quoteChecklist: string[];
  faqs: { question: string; answer: string }[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'mobile-cranes' | 'hydraulic' | 'machinery' | 'construction';
  categoryLabel: string;
  location: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  serviceUsed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'equipment' | 'booking' | 'site';
}

export const COMPANY_CONTACT = {
  name: "Sri Shakthi Cranes",
  tagline: "Reliable Crane Rental & Heavy Lifting Services in Bangalore",
  address: "C-129, DDUTTL, Yeshwanthpur Industrial Suburb, Bangalore 560022, Karnataka, India",
  primaryPhone: "+91 9343735607",
  primaryPhoneRaw: "+919343735607",
  alternatePhone: "+91 9900641292",
  alternatePhoneRaw: "+919900641292",
  additionalPhones: [
    { label: "Dispatch Desk 1", number: "+91 9845212622", raw: "+919845212622" },
    { label: "Technical Operations", number: "+91 9845499708", raw: "+919845499708" }
  ],
  email: "shakthicranes@gmail.com",
  whatsappNumber: "919343735607",
  whatsappUrl: "https://wa.me/919343735607?text=Hello%20Sri%20Shakthi%20Cranes,%20I%20would%20like%20to%20enquire%20about%20crane%20rental%20services%20in%20Bangalore.",
  workingHours: "Monday to Saturday: 8:00 AM – 8:00 PM",
  emergencyAvailability: "24/7 Project & Heavy Lifting Site Support on Prior Coordination",
  googleMapsUrl: "https://maps.google.com/?q=Yeshwanthpur+Industrial+Suburb+Bangalore+560022",
  serviceAreas: [
    "Yeshwanthpur", "Peenya Industrial Area", "Electronic City", "Whitefield",
    "Bommasandra", "Rajajinagar", "Hebbal", "Bidadi Industrial Area",
    "Nelamangala", "Dabaspet", "Outer Ring Road", "Kengeri", "Greater Bengaluru"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "crane-on-hire",
    title: "Crane on Hire",
    shortDesc: "Versatile crane hire solutions tailored for construction sites, commercial developments, and industrial infrastructure projects across Bangalore.",
    fullDesc: "Sri Shakthi Cranes provides dependable crane hire options designed to meet the dynamic needs of builders, civil engineering contractors, and industrial managers. Whether you require lifting support for a single day, a specialized shift, or prolonged site execution, our fleet is dispatched with trained operators and rigging coordination. We assist you in identifying the right capacity crane to safely carry out lifting operations without unnecessary rental overhead.",
    category: "General Crane Hire",
    image: "/src/assets/images/hero_crane_operation_1793276863600.jpg",
    typicalApplications: [
      "Structural steel erection and truss placement",
      "Precast concrete beam and slab positioning",
      "HVAC and rooftop chiller plant lifting",
      "Commercial building facade and material hoisting",
      "Site utility and pipeline trench installations"
    ],
    equipmentDetails: [
      "Telescopic boom mobile cranes",
      "Capacities suited for light to heavy construction",
      "Rigging gear including rated wire ropes, web slings, and shackles",
      "Skilled certified crane operators and signal banksmen"
    ],
    siteConsiderations: [
      "Adequate access roadway for heavy carrier entry",
      "Compacted ground or paved pad for stable outrigger placement",
      "Clear overhead clearance away from high-tension electrical cables",
      "Designated radius zone cordoned off during active lifting"
    ],
    quoteChecklist: [
      "Estimated weight of maximum individual load",
      "Required hook height and horizontal working radius",
      "Project site location and approach road conditions",
      "Expected shift timing and duration of hire"
    ],
    faqs: [
      {
        question: "What is the minimum hire period for a crane?",
        answer: "We accommodate both single-shift (half-day or standard 8-hour shift) requirements and long-term project hire across Bangalore. Reach out with your schedule to check slot availability."
      },
      {
        question: "Does the crane come with an operator and rigger?",
        answer: "Yes, all our crane hire operations include experienced, safety-briefed operators familiar with local Bangalore site regulations."
      }
    ]
  },
  {
    id: "crane-rental-services",
    title: "Crane Rental Services",
    shortDesc: "Flexible commercial crane rental packages for short-term and contract-based lifting needs with transparent operational terms.",
    fullDesc: "Our crane rental services are structured to provide contractors and manufacturing units with hassle-free access to heavy lifting machinery without capital investment. Sri Shakthi Cranes works closely with site supervisors to review project timelines, lifting schedules, and equipment allocation to ensure minimal idle time and maximum productivity on your worksite.",
    category: "Rental Solutions",
    image: "/src/assets/images/crane_fleet_yard_1793276864565.jpg",
    typicalApplications: [
      "Weekly and monthly construction project support",
      "Warehouse expansion and structural framework builds",
      "Industrial facility maintenance shutdowns",
      "Subway, flyover, and road infrastructure support",
      "Heavy container handling and transshipment"
    ],
    equipmentDetails: [
      "Fleet availability across diverse tonnage classes",
      "Regularly inspected and maintained mechanical components",
      "Flexible commercial terms (hourly, per-shift, weekly, monthly)",
      "Dedicated operational support coordinator"
    ],
    siteConsiderations: [
      "Site entry permits and municipal transit restrictions for Bangalore traffic zones",
      "Outrigger footing bearing capacity testing",
      "Clear swing radius for boom rotation",
      "Designated fuel and staging areas for multi-day rentals"
    ],
    quoteChecklist: [
      "Duration of rental contract (days/weeks/months)",
      "Daily working shift structure (day shift vs. night works)",
      "Exact location within Bangalore urban or rural district",
      "Type of loads expected across the rental cycle"
    ],
    faqs: [
      {
        question: "Can we extend our rental duration if project work takes longer?",
        answer: "Yes, rental duration extensions can be coordinated with our dispatch desk subject to existing fleet schedules."
      }
    ]
  },
  {
    id: "hydraulic-crane-hire",
    title: "Hydraulic Crane Hire and Rental",
    shortDesc: "Heavy-duty hydraulic telescopic cranes delivering smooth fluid control and high load stability for demanding industrial lifts.",
    fullDesc: "Hydraulic cranes offer the ideal combination of responsive hydraulic power, telescopic reach, and smooth load placement. Sri Shakthi Cranes supplies hydraulic cranes capable of handling substantial tonnage while maintaining precise control. This is critical when operating near existing plant equipment, structural columns, or fragile machinery where micro-adjustments are essential.",
    category: "Specialized Lifting",
    image: "/src/assets/images/hydraulic_crane_lifting_1793276864248.jpg",
    typicalApplications: [
      "Precision machinery placement onto factory foundations",
      "Heavy transformer and electrical substation installation",
      "Silo, boiler, and pressure vessel erection",
      "Bridge girder positioning and flyover segment lifting",
      "Chemical processing plant equipment overhauls"
    ],
    equipmentDetails: [
      "Multi-axle hydraulic all-terrain and truck-mounted carriers",
      "Multi-stage telescopic boom sections for variable reach",
      "Computerized load moment indicators (LMI) for safe radius monitoring",
      "Heavy hydraulic outriggers with steel spreader plates"
    ],
    siteConsiderations: [
      "Sufficient space for full extension of hydraulic outrigger beams",
      "Level ground surface to prevent tipping moments during swing",
      "Proximity to delicate structures or underground utilities",
      "Wind speed limitations for tall boom extensions"
    ],
    quoteChecklist: [
      "Exact dimensions (Length x Width x Height) and gross weight of load",
      "Distance between crane center of rotation and final placement spot",
      "Elevation or pit depth where the machine needs to be landed",
      "Site layout or photos showing approach clearances"
    ],
    faqs: [
      {
        question: "Why choose a hydraulic crane over conventional mechanical cranes?",
        answer: "Hydraulic cranes offer smooth stepless control, quick telescopic deployment, and superior stability for high-value loads in confined spaces."
      }
    ]
  },
  {
    id: "industrial-machine-lifting",
    title: "Industrial Machine Lifting",
    shortDesc: "Specialized rigging and crane lifting for CNC machinery, stamping presses, injection molding units, and plant equipment.",
    fullDesc: "Moving sensitive industrial machinery requires more than just raw horsepower; it demands technical rigging expertise, proper load slinging, and low-vibration handling. Based in the heart of Yeshwanthpur Industrial Suburb, Sri Shakthi Cranes has extensive experience maneuvering industrial machines inside workshops, lowering them into factory pits, or lifting them onto elevated mezzanines with absolute care.",
    category: "Machinery Services",
    image: "/src/assets/images/industrial_machinery_shifting_1793276863899.jpg",
    typicalApplications: [
      "CNC milling centers and lathe machine positioning",
      "Plastic injection molding machine unloading and placement",
      "Hydraulic power press installation in manufacturing bays",
      "Compressor, diesel generator (DG) set, and chiller plant lifting",
      "Textile, packaging, and printing press machinery moves"
    ],
    equipmentDetails: [
      "Precision slings, spreader bars, and nylon webbing to prevent frame damage",
      "Hydraulic jacks and machine moving roller skates for indoor transfer",
      "Compact boom reach suitable for low factory doorways and bay heights",
      "Experienced industrial riggers specialized in machine balance"
    ],
    siteConsiderations: [
      "Factory shutter height and doorway clearance width",
      "Overhead crane beam or gantry clearance inside the shed",
      "Floor load capacity (reinforced concrete vs. tiled surfaces)",
      "Foundation anchor bolt alignment tolerances"
    ],
    quoteChecklist: [
      "Machine model, weight rating, and center-of-gravity markers",
      "Indoor vs outdoor crane positioning",
      "Height of factory entrance doors and internal ceiling clear height",
      "Availability of power or anchor points if indoor winching is needed"
    ],
    faqs: [
      {
        question: "How do you protect fragile electronic cabinets on industrial machines during a lift?",
        answer: "We use non-marking certified synthetic web slings, spreader bars, and corner protectors to ensure no compression forces act on machine control panels or outer cowlings."
      }
    ]
  },
  {
    id: "heavy-machine-lifting",
    title: "Heavy Machine Lifting",
    shortDesc: "Engineered lifting solutions for ultra-heavy production units, turbines, rolling mills, and oversized manufacturing assets.",
    fullDesc: "When equipment exceeds standard lifting boundaries, meticulous lift planning becomes paramount. Sri Shakthi Cranes evaluates center of gravity, slinging geometry, ground bearing pressures, and crane load charts before commencing heavy machine lifts. Our team ensures that oversized assets are safely hoisted, rotated, and placed without risk to plant personnel or surrounding structures.",
    category: "Heavy Lifting",
    image: "/src/assets/images/industrial_machinery_shifting_1793276863899.jpg",
    typicalApplications: [
      "Metal forming presses and heavy forging dies",
      "Heavy industrial turbines, alternators, and motors",
      "Steel plant rolling equipment and furnaces",
      "Heavy chemical reactors, autoclaves, and tanks",
      "Foundry ladles and continuous casting machinery"
    ],
    equipmentDetails: [
      "High-tonnage mobile cranes with heavy counterweight packs",
      "Heavy-duty alloy chain slings and certified high-capacity bow shackles",
      "Custom spreader frames designed to balance asymmetric loads",
      "Multi-point lifting systems to prevent structural distortion"
    ],
    siteConsiderations: [
      "Geotechnical evaluation of ground bearing resistance",
      "Underground drainage pipes, basements, or cables beneath outriggers",
      "Clear tail-swing clearance behind the crane counterweight",
      "Coordination with plant safety officers for site lockdown during lift"
    ],
    quoteChecklist: [
      "Weight certificate or manufacturer blueprint of the heavy machine",
      "Lifting lugs or trunnion locations on the equipment body",
      "Site layout drawing showing crane positioning and landing spot",
      "Plant operating schedule and safety induction requirements"
    ],
    faqs: [
      {
        question: "Do you assist with pre-lift site inspections for heavy machine lifting?",
        answer: "Yes, for heavy machinery lifts, our team can coordinate a prior site inspection to verify approach roads, ground firmness, and lifting clearances."
      }
    ]
  },
  {
    id: "heavy-equipment-lifting",
    title: "Heavy Equipment Lifting",
    shortDesc: "Safe and efficient lifting assistance for construction equipment, earthmovers, gensets, cooling towers, and structural assemblies.",
    fullDesc: "Contractors frequently face scenarios where heavy construction plant or building service equipment needs to be lifted onto elevated bridge decks, building roofs, or deep basement shafts. Sri Shakthi Cranes delivers dependable equipment lifting services that keep your project schedule moving without unexpected site bottlenecks.",
    category: "Equipment Services",
    image: "/src/assets/images/hero_crane_operation_1793276863600.jpg",
    typicalApplications: [
      "Hoisting mini excavators and skid-steers into basement excavations",
      "Lifting diesel generators (DG sets) onto commercial tower roofs",
      "Cooling tower and heat exchanger positioning",
      "Bridge bearing and expansion joint replacement lifts",
      "Elevated pipeline and ductwork module hoisting"
    ],
    equipmentDetails: [
      "Telescopic boom cranes equipped with fly-jib extensions for high reach",
      "Rigging hardware certified for dynamic construction loads",
      "Heavy-duty cargo straps and load-rated wire rope bridles",
      "Anti-twisting hoisting blocks and wire lines"
    ],
    siteConsiderations: [
      "Building parapet heights and hook reach angles",
      "Permissible roof or basement slab point load ratings",
      "Traffic regulation permits when setting up on public roads in Bangalore",
      "Night illumination requirements for after-hours urban lifting"
    ],
    quoteChecklist: [
      "Equipment type, weight, and exterior footprint",
      "Final landing elevation (e.g., ground to 5th floor terrace)",
      "Radius distance from crane center to building edge",
      "Site clearance permits from local authorities if applicable"
    ],
    faqs: [
      {
        question: "Can cranes lift equipment onto rooftop terraces in congested Bangalore areas?",
        answer: "Yes, subject to adequate street width for outrigger deployment and confirmation of structural clearances and working radius."
      }
    ]
  },
  {
    id: "product-lifting-services",
    title: "Product Lifting Services",
    shortDesc: "Careful material handling and product hoisting for commercial deliveries, raw stock bundles, and prefabricated components.",
    fullDesc: "For commercial operations receiving heavy pallets, glass facades, structural steel rebar bundles, or bulky industrial components that cannot be handled by manual labor or standard forklifts, Sri Shakthi Cranes provides responsive product lifting services. We unload flatbeds quickly and hoist cargo directly to the required assembly tier.",
    category: "Material Handling",
    image: "/src/assets/images/hydraulic_crane_lifting_1793276864248.jpg",
    typicalApplications: [
      "Unloading heavy flatbed trailers and transport trucks",
      "Hoisting architectural glass crates and stone slabs",
      "Lifting bundles of structural steel rebar and channel iron",
      "Positioning packaged air handling units (AHUs)",
      "Bulk material transfer for storage yard stacking"
    ],
    equipmentDetails: [
      "Agile boom truck cranes and mobile yard cranes",
      "Soft web slings to eliminate surface scratching on finished goods",
      "Pallet lifting forks and spreader beams",
      "Fast cycle hoisting for high-volume offloading"
    ],
    siteConsiderations: [
      "Truck parking orientation alongside the crane",
      "Clear unloading landing pad free of personnel and debris",
      "Protection from rainfall during sensitive material offloading",
      "Turnaround time constraints for transport carriers"
    ],
    quoteChecklist: [
      "Number of trailers/trucks to unload and pallet count",
      "Weight of individual bundle or crate",
      "Unloading time window (e.g. morning commercial delivery)",
      "Site location address in Bangalore"
    ],
    faqs: [
      {
        question: "Can we book product lifting services on short notice for trailer unloading?",
        answer: "We recommend booking at least 24 hours in advance, but we also try our best to accommodate urgent same-day trailer offloading based on fleet availability."
      }
    ]
  },
  {
    id: "mobile-crane-rental",
    title: "Mobile Crane Rental",
    shortDesc: "Highly mobile truck-mounted and rough-terrain cranes ideal for projects requiring swift relocation between multiple lifting points.",
    fullDesc: "Mobile cranes are the backbone of urban construction and industrial maintenance. Sri Shakthi Cranes maintains a versatile fleet of mobile cranes that can travel smoothly across Bangalore's road network, set up outriggers rapidly, execute planned lifts, and move swiftly to the next working point on large job sites.",
    category: "Mobile Fleet",
    image: "/src/assets/images/crane_fleet_yard_1793276864565.jpg",
    typicalApplications: [
      "Metro rail construction and civil flyover works",
      "Roadway sign gantry and high-mast light pole installation",
      "Multi-building warehouse parks requiring multi-spot lifting",
      "Emergency recovery and heavy equipment righting",
      "Quick-turnaround commercial signages and billboards"
    ],
    equipmentDetails: [
      "Rubber-tired all-terrain and truck chassis cranes",
      "Telescopic main booms with high extension speeds",
      "Compact turning radius for city maneuvering",
      "Fully self-contained counterweight and outrigger assemblies"
    ],
    siteConsiderations: [
      "Entry gate width and turning clearance for long chassis vehicles",
      "Road gradient and surface traction",
      "Clear overhead tree branches and telecom wires",
      "City entry time regulations for commercial vehicles in Bangalore"
    ],
    quoteChecklist: [
      "Number of setup positions on site",
      "Max lift capacity needed at furthest radius",
      "Target project date and start hour",
      "Site contact person and exact GPS pin"
    ],
    faqs: [
      {
        question: "Do your mobile cranes have road permits to travel within Bangalore city?",
        answer: "Yes, our vehicles operate in compliance with regional transport regulations, and night movements are arranged for heavy restricted corridors."
      }
    ]
  },
  {
    id: "tower-crane-rental",
    title: "Tower Crane Rental",
    shortDesc: "High-rise construction tower crane rental arrangements and coordination for tall commercial and residential building projects.",
    fullDesc: "For vertical construction projects reaching multiple stories, tower cranes provide continuous material hoisting across the entire building footprint. Sri Shakthi Cranes coordinates tower crane rental arrangements, assisting project developers with capacity planning, foundation anchorage considerations, and operational availability for long-term project timelines.",
    category: "High-Rise Solutions",
    image: "/src/assets/images/hero_crane_operation_1793276863600.jpg",
    typicalApplications: [
      "Multi-story residential apartment towers",
      "Commercial IT office park construction",
      "Hospital and university campus vertical blocks",
      "Large-scale concrete pouring and rebar hoisting across floor slabs",
      "Continuous site material distribution"
    ],
    equipmentDetails: [
      "Top-slewing and luffing-jib tower crane configurations",
      "Anchorage frames and tie-in collars for structural bracing",
      "High-speed hoisting winches with precision variable frequency drives",
      "Anemometers for wind speed safety cut-off monitoring"
    ],
    siteConsiderations: [
      "Reinforced concrete foundation pad or fixing angle embedding",
      "Mobile crane assembly space required for tower crane erection",
      "Airspace clearance and proximity to adjacent buildings or cranes",
      "Dedicated high-voltage power supply for continuous operation"
    ],
    quoteChecklist: [
      "Final height of building and required hook height under hook",
      "Jib length needed to sweep full floor plate radius",
      "Maximum tip load requirement at furthest reach",
      "Project commencement date and planned erection timeline"
    ],
    faqs: [
      {
        question: "Is tower crane rental availability confirmed directly with the company?",
        answer: "Yes, because tower crane deployment involves site-specific engineering, foundation embedding, and erection logistics, all rental arrangements and equipment availability are confirmed directly through project consultation."
      }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "construction",
    title: "Residential & Commercial Construction",
    description: "Supporting builders and general contractors with structural steel lifting, precast element placement, glass facades, and concrete bucket hoisting.",
    highlights: ["Precast Slab Placement", "Structural Steel Framing", "Rooftop Utilities"],
    iconName: "Building2"
  },
  {
    id: "manufacturing",
    title: "Industrial Facilities & Manufacturing",
    description: "Reliable rigging and crane support for manufacturing plants in Peenya, Bommasandra, Bidadi, and surrounding industrial corridors.",
    highlights: ["CNC Machine Installation", "Transformer Placement", "Heavy Die Handling"],
    iconName: "Factory"
  },
  {
    id: "warehouses",
    title: "Factories & Warehouses",
    description: "Material handling solutions for logistics centers, pre-engineered building (PEB) construction, mezzanine floor builds, and heavy racking systems.",
    highlights: ["PEB Shed Erection", "Heavy Pallet Hoisting", "Overhead Crane Assembly"],
    iconName: "Warehouse"
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Civil Engineering",
    description: "Crane services for metro projects, highway flyovers, bridge girder positioning, and municipal drainage pipeline laying.",
    highlights: ["Bridge Girder Erection", "Culvert Placement", "High-Mast Tower Lifting"],
    iconName: "HardHat"
  },
  {
    id: "relocation",
    title: "Machinery Installation & Relocation",
    description: "End-to-end assistance when expanding workshops or shifting production lines from one industrial estate to another.",
    highlights: ["Plant Decommissioning", "Inter-Factory Shifting", "Precision Leveling Support"],
    iconName: "Truck"
  },
  {
    id: "material-handling",
    title: "Loading, Unloading & Material Handling",
    description: "Fast-turnaround flatbed unloading, steel coil handling, container devanning, and heavy product yard staging.",
    highlights: ["Trailer Offloading", "Steel Coil Stacking", "Safe Yard Logistics"],
    iconName: "PackageCheck"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Project-Specific Equipment Selection",
    description: "We evaluate your load weight, radius, and site access to recommend the most cost-effective, appropriate crane class without over-specifying.",
    icon: "Compass"
  },
  {
    title: "Multiple Lifting Service Categories",
    description: "From mobile and hydraulic crane rentals to precision machinery shifting and heavy component erection, we handle diverse lifting needs under one roof.",
    icon: "Layers"
  },
  {
    title: "Flexible Rental Discussions",
    description: "We offer transparent arrangements for single shifts, weekly maintenance turnarounds, or long-term multi-month construction contracts.",
    icon: "CalendarCheck"
  },
  {
    title: "Professional Coordination",
    description: "Direct coordination with certified crane operators and experienced riggers ensures smooth compliance with site safety requirements.",
    icon: "ShieldCheck"
  },
  {
    title: "Industrial & Construction Depth",
    description: "Deep practical experience serving industrial estates across Yeshwanthpur, Peenya, Bommasandra, Bidadi, and broader Karnataka.",
    icon: "Briefcase"
  },
  {
    title: "Direct Customer Communication",
    description: "Talk straight to our team via phone or WhatsApp for prompt feasibility assessments, equipment schedules, and quotations.",
    icon: "PhoneCall"
  }
];

export const WORK_STEPS = [
  {
    stepNumber: "01",
    title: "Share Your Requirements",
    description: "Provide the type of load, estimated weight, required lifting height, working radius, site location, and preferred date."
  },
  {
    stepNumber: "02",
    title: "Discuss Site Conditions",
    description: "We review ground firmness, access roads, overhead obstructions, working room, and municipal transit windows."
  },
  {
    stepNumber: "03",
    title: "Confirm Suitable Rental Option",
    description: "Our team confirms equipment suitability, availability, rental duration, operator allocation, and commercial terms."
  },
  {
    stepNumber: "04",
    title: "Coordinate the Service",
    description: "Once agreed, we schedule dispatch, mobilize the crane to your site on time, and carry out the lifting operation safely."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heavy Mobile Crane on Commercial Frame Erection",
    category: "mobile-cranes",
    categoryLabel: "Mobile Crane",
    location: "Bangalore Urban Site",
    description: "Precision lifting of structural steel truss modules for commercial building infrastructure.",
    image: "/src/assets/images/hero_crane_operation_1793276863600.jpg"
  },
  {
    id: "gal-2",
    title: "Hydraulic Crane Machinery Offloading",
    category: "hydraulic",
    categoryLabel: "Hydraulic Lifting",
    location: "Logistics Center, Yeshwanthpur",
    description: "Heavy precision industrial machine module lifted from transport flatbed onto loading dock.",
    image: "/src/assets/images/hydraulic_crane_lifting_1793276864248.jpg"
  },
  {
    id: "gal-3",
    title: "Factory Machine Rigging & Workshop Positioning",
    category: "machinery",
    categoryLabel: "Machinery Lifting",
    location: "Peenya Industrial Area",
    description: "Slinging and internal factory placement of multi-axis CNC milling center on reinforced foundation.",
    image: "/src/assets/images/industrial_machinery_shifting_1793276863899.jpg"
  },
  {
    id: "gal-4",
    title: "Commercial Crane Fleet & Boom Truck Yard",
    category: "mobile-cranes",
    categoryLabel: "Crane Fleet",
    location: "Bangalore Equipment Yard",
    description: "Modern commercial crane fleet ready for rapid mobilization to industrial worksites.",
    image: "/src/assets/images/crane_fleet_yard_1793276864565.jpg"
  },
  {
    id: "gal-5",
    title: "Telescopic Outrigger Setup on Concrete Slab",
    category: "construction",
    categoryLabel: "Construction Projects",
    location: "Commercial Complex, Outer Ring Road",
    description: "Rigid outrigger stabilization and load monitoring during structural beam hoisting.",
    image: "/src/assets/images/hero_crane_operation_1793276863600.jpg"
  },
  {
    id: "gal-6",
    title: "Factory Stamping Press Relocation",
    category: "machinery",
    categoryLabel: "Heavy Machinery",
    location: "Manufacturing Hub, Bidadi",
    description: "Synchronized hydraulic rigging and machine transfer during plant line expansion.",
    image: "/src/assets/images/industrial_machinery_shifting_1793276863899.jpg"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Sri Shakthi Cranes handled our heavy CNC machinery shifting in Peenya with exceptional care. Their operator and rigger team coordinated the doorway clearances smoothly and set the machine on foundation bolts perfectly.",
    author: "R. Venkatesh",
    role: "Plant Operations Manager",
    company: "Precision Tooling & Components Ltd",
    location: "Peenya Industrial Area, Bangalore",
    serviceUsed: "Industrial Machine Lifting"
  },
  {
    id: "test-2",
    quote: "We rented a mobile hydraulic crane for our commercial building steel truss erection. The crane arrived punctually, the outrigger setup was thoroughly secured, and all structural lifts were completed ahead of schedule.",
    author: "K. Murali",
    role: "Senior Project Engineer",
    company: "Urban Infra Structural Builders",
    location: "Yeshwanthpur, Bangalore",
    serviceUsed: "Crane on Hire"
  },
  {
    id: "test-3",
    quote: "Sri Shakthi Cranes has been our dependable partner for offloading heavy transformers and diesel generators. Direct phone communication and transparent terms make coordinating crane rental straightforward.",
    author: "Suresh Gowda",
    role: "Site Contractor",
    company: "Apex Electrical Infra Solutions",
    location: "Whitefield, Bangalore",
    serviceUsed: "Heavy Equipment Lifting"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What crane rental services does Sri Shakthi Cranes provide?",
    answer: "Sri Shakthi Cranes provides crane on hire, commercial crane rental, hydraulic crane rental, industrial machine lifting, heavy machine lifting, heavy equipment lifting, product lifting, and mobile crane rental for construction and industrial projects across Bangalore.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How can I enquire about crane hire in Bangalore?",
    answer: "You can enquire directly by calling our team at +91 9343735607 or +91 9900641292, sending a WhatsApp message, or completing our online crane quotation form with your load and site details.",
    category: "booking"
  },
  {
    id: "faq-3",
    question: "What information should I provide before requesting a crane?",
    answer: "Please share the type of load, estimated weight, required lifting height, horizontal working radius, exact site location in Bangalore, ground conditions, and preferred date and shift duration.",
    category: "booking"
  },
  {
    id: "faq-4",
    question: "Can I enquire about short-term crane rental?",
    answer: "Yes, we support single-day lifts, specific shifts (half-day or full 8-hour shift), weekend operations, as well as extended weekly or monthly project rentals.",
    category: "general"
  },
  {
    id: "faq-5",
    question: "Does the company provide hydraulic crane rental?",
    answer: "Yes, we supply heavy-duty hydraulic telescopic cranes suitable for precision industrial lifts, transformer installations, machinery placement, and structural erection.",
    category: "equipment"
  },
  {
    id: "faq-6",
    question: "Can I enquire about industrial machinery lifting?",
    answer: "Certainly. We specialize in industrial machine moving, positioning, and relocating for CNC units, injection molding machines, power presses, generators, and factory workshop assets.",
    category: "equipment"
  },
  {
    id: "faq-7",
    question: "What site details are required before a lifting operation?",
    answer: "Important site considerations include access road width, gate clearances, ground firmness for outrigger footing, overhead power lines or tree branches, and working swing radius.",
    category: "site"
  },
  {
    id: "faq-8",
    question: "How is the appropriate crane selected for a project?",
    answer: "Crane selection is determined by calculating the maximum load weight at the required working radius, boom angle, hook height, and ground bearing conditions. Our team helps you evaluate these factors to match the ideal machine.",
    category: "equipment"
  },
  {
    id: "faq-9",
    question: "How can I check equipment availability?",
    answer: "You can check immediate fleet availability by calling our dispatch desk directly at +91 9343735607 or messaging us on WhatsApp with your planned project dates.",
    category: "booking"
  },
  {
    id: "faq-10",
    question: "How do I request a crane rental quotation?",
    answer: "Simply submit our website quote request form with your project details or call us directly. We review the lifting parameters and provide a clear, competitive quotation based on your project requirements.",
    category: "booking"
  }
];
