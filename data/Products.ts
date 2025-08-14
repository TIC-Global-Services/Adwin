
// data/Products.ts
import { Icon1, ProductHero } from "@/components/Reusable/icons";


export const ProductsData = [
  // Solar Power Systems -1
  {
    id: 1,
    title: "Renewable Energy",
    product: {
      mainImage: ProductHero,
      image: Icon1,
      name: "Solar Power Systems",
      Heroimage: Icon1,
      desc: "Harness the power of the sun with Adwin’s comprehensive solar portfolio, from high-efficiency panels to advanced inverters and batteries. Designed for reliability and maximum energy yield, our solutions enable homes and businesses to embrace clean, sustainable energy while reducing carbon footprint",
      descImage: ProductHero,
      featureImage: ProductHero,
      features: [
        { image: Icon1, name: "Optimized for Indian Solar" },
        { image: Icon1, name: "Seamless Inverter Compatibility" },
        { image: Icon1, name: "Ideal for Remote Areas" },
        { image: Icon1, name: "Reduces Carbon Footprint" },
      ],
      details: [
        {
          id: 1,
          name: "Solar Power Systems",
          desc: "Adwin offers an integrated solar power ecosystem including premium solar panels, energy storage batteries, and smart inverters. Each component is engineered for durability, efficiency, and seamless compatibility to ensure optimal performance in diverse environments.",
          benefits: [
            "Maximize energy generation with high-efficiency solar panels",
            "Reliable power backup with robust batteries",
            "Advanced inverters for efficient energy conversion and grid compatibility",
            "Scalable solutions tailored to residential, commercial, and industrial needs",
          ],
          Image: ProductHero,
        },
        {
          id: 2,
          name: "Solar Panels",
          desc: "Our solar panels feature cutting-edge technology, including anti-PID cells, high durability under extreme weather, and superior efficiency ratings up to 23.08%. Available in multiple wattages and configurations to suit every energy requirement",
          benefits: [
            "High power output even under low-light conditions",
            "Long-lasting performance with minimal degradation",
            "Resistant to wind and snow loads for enhanced reliability",
            "Easy installation and low maintenance",
          ],
          Image: ProductHero,
        },
        {
          id: 3,
          name: "Solar Battery and Inverters",
          desc: "Adwin’s solar batteries and inverters work in tandem to provide seamless energy storage and power conversion. We offer both lead acid and lithium variants, optimized for solar applications, ensuring efficient energy use and extended backup times.",
          benefits: [
            "Reliable energy storage to maximize solar usage",
            "Efficient inverters with PWM and MPPT technology for better energy harvesting",
            "Extended battery life with smart charge control",
            "Flexible options for varying power needs and budgets",
          ],
          Image: ProductHero,
        },
        {
          id: 4,
          name: "Inbuilt Lithium Solar ESS",
          desc: "Our inbuilt Lithium Solar Energy Storage Systems (ESS) integrate advanced lithium battery technology with smart inverters in a compact form factor. Perfect for modern homes and businesses seeking clean, silent, and efficient power backup.",
          benefits: [
            "Compact design with integrated system components",
            "High energy density with safe LiFePO4 chemistry",
            "Longer lifecycle and faster charge/discharge rates",
            "Intelligent energy management for optimal usage",
          ],
          Image: ProductHero,
        },
      ],
    },
  },
  //   Auto Mobile Batteries
  {
    id: 2,
    title: "Automobile Batteries",
    product: {
      mainImage: ProductHero,
      name: "Automobile Batteries ",
      Heroimage: Icon1,
      desc: "Adwin automotive batteries provide powerful, reliable starting and performance capabilities for a wide range of vehicles. Engineered for durability and resistance to vibration and corrosion, these batteries ensure your vehicle operates smoothly in diverse conditions. Maintenance-free designs add convenience and long service life.",
      descImage: ProductHero,
      featureImage: ProductHero,
      features: [
        { image: Icon1, name: "High cranking power for extreme climates" },
        { image: Icon1, name: "Advanced graphene and calcium alloy tech" },
        { image: Icon1, name: "Certified quality with long life cycles" },
        { image: Icon1, name: "Trusted by major OEMs across India" },
      ],
      details: [
        {
          id: 1,
          name: "Boost (Cars)",
          desc: "Boost automotive batteries are crafted specifically for passenger vehicles, delivering dependable starting power and durability. Their high cold cranking amps and vibration-resistant design enable smooth performance in all weather conditions. Designed for easy installation and long-term reliability, Boost is the trusted choice for everyday driving.",
          benefits: [
            "High cold cranking amps for quick, reliable starts",
            "Reliable power backup with robust batteries",
            "Advanced inverters for efficient energy conversion and grid compatibility",
            "Scalable solutions tailored to residential, commercial, and industrial needs",
          ],
           Image: ProductHero,
        },
        {
          id: 2,
          name: "Harit + (Tractors)",
          desc: "Harit + batteries are specially engineered for agricultural machinery like tractors, built to endure tough, rugged environments and long operational hours. These heavy-duty batteries offer high capacity and consistent power output, ensuring farm equipment stays running efficiently during demanding workdays.",
          benefits: [
            "Durable design suited for harsh agricultural use",
            "High capacity to support long hours of operation",
            "Shock and vibration resistant for tough terrains",
            "Engineered specifically for tractor power needs",
          ],
           Image: ProductHero,
        },
      ],
    },
  },
  // E-Mobility Solutions
  {
    id: 3,
    title: "E-Mobility Solutions",
    products: [
      {
        
        mainImage: ProductHero,
        name: "E-Rickshaws",
        Heroimage: Icon1,
        desc: "Adwin provides specialized battery and charger solutions for E-Rickshaws, supporting the growing demand for green urban mobility. Our products deliver reliable, long-lasting power that keeps commercial vehicles on the road longer, with safety and efficiency built into every system.",
        descImage: ProductHero,
        featureImage: ProductHero,
        features: [
          { image: Icon1, name: "Durable batteries for daily heavy use" },
          { image: Icon1, name: "Fast recharge and deep discharge tolerance" },
          { image: Icon1, name: "Low maintenance, high reliability" },
          { image: Icon1, name: "Supports eco-friendly urban transport" },
        ],
        details: [
          {
            id: 1,
            name: "Lithium",
            desc: "Adwin lithium batteries for E-Rickshaws offer superior energy density in a lightweight package, enabling longer driving ranges and reducing maintenance needs. Featuring safe LiFePO4 chemistry, these batteries provide stable, reliable power for urban transport.",
            benefits: [
              "Lightweight design improves vehicle efficiency",
              "Longer lifecycle and operational range",
              "High charge/discharge efficiency",
              "Safe, stable lithium battery chemistry",
            ],
          },
          {
            id: 2,
            name: "Lead Acid – Maharathi",
            desc: "Maharathi lead acid batteries provide a trusted, cost-effective solution for E-Rickshaws. Known for their durability and ease of maintenance, these batteries benefit from extensive service networks and proven technology, making them ideal for daily commercial operations.",
            benefits: [
              "Durable and low-maintenance design",
              "Cost-effective with widespread availability",
              "Proven reliability for commercial use",
              "Supported by extensive after-sales service",
            ],
          },
          {
            id: 3,
            name: "Chargers",
            desc: "Adwin chargers ensure safe, fast, and efficient battery charging for both lithium and lead acid E-Rickshaw batteries. Equipped with protective features like overcharge and short circuit prevention, these chargers optimize battery life and uptime.",
            benefits: [
              "Overcharge, short circuit, and thermal protection",
              "Compatible with multiple battery chemistries",
              "Energy-efficient operation with low heat generation",
              "Durable construction for frequent commercial use",
            ],
             Image: ProductHero,
          },
        ],
      },
      {
        mainImage: ProductHero,
        name: "E-Bikes",
        Heroimage: Icon1,
        desc: "Adwin’s e-bike batteries are engineered to deliver lightweight, high-capacity power for longer rides and quicker charging. Designed with safety and durability in mind, these batteries provide reliable performance for daily commuting and recreational use.",
        descImage: ProductHero,
        featureImage: ProductHero,
        features: [
          { image: Icon1, name: "Cost-Effective Transport" },
          { image: Icon1, name: "Zero Emissions" },
          { image: Icon1, name: "Extended Battery Range" },
          { image: Icon1, name: "Ideal for Urban & Rural Roads" },
        ],
        details: [
          {
            id: 1,
            name: "Lithium",
            desc: "Our lithium batteries for E-Bikes deliver superior energy density and extended ride times, designed for compactness and fast recharging. These batteries feature robust safety profiles and stable performance for urban commuting and recreational use.",
            benefits: [
              "Extended range and reliable power output",
              "Lightweight and space-efficient design",
              "Fast recharge capabilities",
              "Safe and stable LiFePO4 chemistry",
            ],
             Image: ProductHero,
          },
          {
            id: 2,
            name: "Lead Acid (Sealed VRLA)",
            desc: "Sealed VRLA lead acid batteries offer a maintenance-free, spill-proof power source for urban E-Bikes. These batteries provide consistent energy delivery and are ideal for daily commuting, balancing cost and performance.",
            benefits: [
              "Maintenance-free and leak-proof design",
              "Reliable and consistent power output",
              "Economical solution for daily use",
              "Durable and safe for urban environments",
            ],
             Image: ProductHero,
          },
          {
            id: 3,
            name: "Chargers",
            desc: "Adwin E-Bike chargers are engineered to provide safe, efficient charging for both lithium and lead acid batteries. Featuring protective circuitry, they extend battery life while minimizing energy loss during charging.",
            benefits: [
              "Overcharge and short circuit protection",
              "Compatible with lithium and lead acid chemistries",
              "Compact, portable design",
              "Energy-efficient charging cycles",
            ],
             Image: ProductHero,
          },
        ],
      },
    ],
  },
  // Energy storage Solutions
  {
    id: 4,
    title: "Energy storage Solutions",
    products: [
      {
        mainImage: ProductHero,
        name: "Lithium Inverters and Batteries",
        Heroimage: Icon1,
        desc: "Adwin’s lithium energy storage combines advanced battery chemistry with smart inverters, offering scalable, efficient backup power solutions for homes and businesses. These systems support modular expansion and provide reliable, clean energy.",
        descImage: ProductHero,
        featureImage: ProductHero,
        features: [
          { image: Icon1, name: "Up to 10,000+ charge cycles" },
          { image: Icon1, name: "90%+ depth of discharge for maximum use" },
          { image: Icon1, name: "Lightweight & compact design" },
          { image: Icon1, name: "Fast charge & discharge capabilities" },
        ],
        details: [
          {
            id: 1,
            name: "Lithium Batteries",
            desc: "Our lithium batteries use LiFePO4 chemistry to deliver high energy density, safety, and long-lasting performance. Designed for diverse applications, these batteries perform reliably across temperature ranges with stable discharge profiles.",
            benefits: [
              "Lightweight, compact, and high capacity",
              "Long cycle life with stable output",
              "Wide temperature tolerance for varied environments",
              "Safe and non-toxic chemistry",
            ],
             Image: ProductHero,
          },
          {
            id: 2,
            name: "Lithium Inverters",
            desc: "Adwin lithium inverters are optimized for lithium battery systems, delivering clean, efficient power conversion with intelligent energy management features. Designed for reliability, these inverters support solar integration and backup applications.",
            benefits: [
              "High conversion efficiency and stable output",
              "Integrated MPPT solar charging capability",
              "Compact, quiet, and easy to install",
              "Compatible with multiple battery voltages",
            ],
             Image: ProductHero,
          },
          {
            id: 3,
            name: "Inbuilt ESS",
            desc: "Integrated Energy Storage Systems combine lithium batteries and inverters into a compact, easy-to-install unit. Designed for quick deployment, these systems include intelligent controls to maximize energy efficiency and ensure safety.",
            benefits: [
              "Space-saving plug-and-play design",
              "Smart energy management for optimized usage",
              "Integrated safety and monitoring features",
              "Suitable for residential and commercial use",
            ],
             Image: ProductHero,
          },
        ],
      },
      {
        mainImage: ProductHero,
        name: "E-Solar PCU, Inverter and Charger",
        Heroimage: Icon1,
        desc: "Adwin’s Solar PCUs, inverters, and chargers use advanced MPPT technology to optimize solar energy harvest and battery charging. Manufactured under strict ISO standards, they ensure safe, reliable, and efficient power management. These units protect batteries and electrical systems with smart safety features.",
        descImage: ProductHero,
        featureImage: ProductHero,
        features: [
          { image: Icon1, name: "High conversion efficiency up to 98%" },
          { image: Icon1, name: "MPPT technology for optimized solar harvesting" },
          { image: Icon1, name: "Wide voltage input range for flexibility" },
          { image: Icon1, name: "Integrated inverter and charger in one unit" },
        ],
        details: [
          {
            id: 1,
            name: "Solar Inverters",
            desc: "Our solar inverters efficiently convert DC power from solar panels into usable AC power with minimal loss. Equipped with MPPT trackers, they maximize power output even in low light. Built for durability, they perform reliably in harsh conditions.",
            benefits: [
              "Advanced MPPT maximizes solar yield",
              "Stable and clean AC power output",
              "Durable for all weather conditions",
              "Integrated safety features",
            ],
             Image: ProductHero,
          },
          {
            id: 2,
            name: "Solar Batteries",
            desc: "Adwin solar batteries feature deep-cycle technology and special additives for improved life and quick recovery after deep discharge. They have robust tubular plates and eco-friendly vents for low maintenance and safety. Certified for performance under Indian climates.",
            benefits: [
              "Long-lasting deep-cycle performance",
"Quick recharge and discharge recovery",
              "Low maintenance and eco-friendly design",
              "Reliable under varied climate conditions",
            ],
             Image: ProductHero,
          },
          {
            id: 3,
            name: "Inbuilt ESS (Solar)",
            desc: "Our inbuilt Lithium Solar ESS combines LiFePO4 batteries with smart inverters into a compact, all-in-one system. It provides high energy density, safe operation, and fast charge/discharge cycles. Ideal for homes needing silent and efficient backup power.",
            benefits: [
              "Compact and integrated design",
              "Safe, long-life lithium chemistry",
              "Fast charging and discharging",
              "Intelligent energy management",
            ],
             Image: ProductHero,
          },
        ],
      },
        {
          mainImage: ProductHero,
        name: "Lead Acid Inverters and Batteries ",
        Heroimage: Icon1,
        desc: "Adwin’s Lead Acid inverters and batteries deliver reliable, cost-effective power backup for homes, industries, and agricultural use. Designed with advanced tubular plate technology, these solutions ensure longer life, faster recharge, and robust performance even under challenging conditions.",
        descImage: ProductHero,
        featureImage: ProductHero,
        features: [
          { image: Icon1, name: "48-60 months warranty on select models" },
          { image: Icon1, name: "Low self-discharge rate for extended standby" },
          { image: Icon1, name: "Robust performance in high temperature environments" },
          { image: Icon1, name: "Eco-friendly with recyclable components" },
        ],
        details: [
          {
            id: 1,
            name: "Lead Acid Inverters",
            desc: "Adwin lead acid inverters are designed for seamless integration with lead acid batteries, offering stable and reliable backup power. Easy to install with minimal maintenance, they include built-in safety features for user protection.",
            benefits: [
              "Optimized for lead acid battery systems",
              "Stable power output and low maintenance",
              "User-friendly with built-in safety",
              "Suitable for home and small business",
            ],
             Image: ProductHero,
          },
          {
            id: 2,
            name: "Lead Acid Batteries",
            desc: "Our lead acid batteries utilize tubular plate technology with advanced additives for long life and superior charge acceptance. Eco-friendly and low maintenance, they provide reliable power for various applications from inverters to automotive use.",
            benefits: [
              "Wide capacity range available",
"Long cycle life with deep discharge",
              "Low maintenance and eco-safe",
              "Excellent charge acceptance",
            ],
             Image: ProductHero,
          },
        ],
      },
    ],
  },
  // Agricultural Solutions
   {
    id: 5,
    title: "Agricultural Solutions",
    product: {
      mainImage: ProductHero,
      name: "",
      Heroimage: Icon1,
      desc: "Adwin offers essential agricultural tools designed to boost farm productivity and protect crops. The spray pump is a lightweight, backpack-style sprayer used by farmers for pesticides and nutrients. Our fencing solutions use electric current powered by durable batteries to keep pests and rodents away effectively.",
      descImage: ProductHero,
      featureImage: ProductHero,
      features: [
        { image: Icon1, name: "Lightweight, efficient spray pumps" },
        { image: Icon1, name: "Electric fencing with durable batteries" },
        { image: Icon1, name: "Long battery life" },
        { image: Icon1, name: "Zero maintenance for hassle-free use" },
      ],
      details: [
        {
          id: 1,
          name: "Spray Pump",
          desc: "Designed for efficient field spraying, this backpack-style pump is ideal for a wide range of agricultural applications. Its lightweight build ensures comfort during long hours of use, while fast-charging batteries deliver extended spray cycles for greater productivity. Built for durability and zero maintenance, it offers farmers a reliable, hassle-free solution season after season.",
          benefits: [
            "Lightweight and easy to carry",
            "Fast charging capability",
            "More sprays per charge",
            "Long-lasting with zero maintenance",
          ],
           Image: ProductHero,
        },
        {
          id: 2,
          name: "Fencing",
          desc: "Our solar panels feature cutting-edge technology, including anti-PID cells, high durability under extreme weather, and superior efficiency ratings up to 23.08%. Available in multiple wattages and configurations to suit every energy requirement",
          benefits: [
            "Quick charging batteries",
            "Extended battery life",
            "Zero maintenance required",
            "Effective pest and rodent control",
          ],
           Image: ProductHero,
        },
        
      
      ],
    },
  },
  // Smart Lighting and Electrical Solutions
   {
    id: 6,
    title: "Smart Lighting and Electrical Solutions",
    product: {
      mainImage: ProductHero,
      name: "Ozoro LED Lighting",
      Heroimage: Icon1,
      desc: "High-efficiency industrial and residential lighting that saves energy and lasts longer. Smart designs for warehouses, homes, offices, and urban spaces with solar-ready options.",
      descImage: ProductHero,
      featureImage: ProductHero,
      features: [
        { image: Icon1, name: "Saves up to 80% energy" },
        { image: Icon1, name: "20,000+ hours of lifespan" },
        { image: Icon1, name: "Flicker-free and glare-free" },
        { image: Icon1, name: "Solar-compatible and eco-conscious design" },
      ],
      details: [
        {
          id: 1,
          name: "Industrial Lighting",
          desc: "High-performance lighting for factories, warehouses, retail outlets, gyms, and stadiums.",
          benefits: [
            "Lightweight and easy to carry",
            "Fast charging capability",
            "More sprays per charge",
            "Long-lasting with zero maintenance",
          ],
           Image: ProductHero,
        },
        {
          id: 2,
          name: "Residential Lighting",
          desc: "Smart, stylish, and efficient lighting for homes, offices, and public areas.",
          benefits: [
            "Quick charging batteries",
            "Extended battery life",
            "Zero maintenance required",
            "Effective pest and rodent control",
          ],
           Image: ProductHero,
        },
        
      
      ],
    },
  },
];
