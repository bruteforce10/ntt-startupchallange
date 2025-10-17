const TOP_STARTUPS = [
  {
      name: "Ackcio",
      slug: "ackcio",
      description: "Industrial monitoring via long‑range mesh networks connecting instrumentation sensors. Real‑time geotechnical and structural monitoring improves safety and uptime in construction, mining and rail.",
      url: "https://www.ackcio.com/"
  },
  {
      name: "AI Seer",
      slug: "ai-seer",
      description: "Offers Facticity.AI, a platform that verifies the authenticity of text, audio and video, helping organizations counter misinformation and maintain brand safety in the gen‑AI era.",
      url: "https://aiseer.co/"
  },
  {
      name: "Ailytics",
      slug: "ailtytics",
      description: "Computer vision for construction and manufacturing sites detecting unsafe acts and near‑misses. Dashboards drive corrective actions and safety KPI gains.",
      url: "https://ailytics.ai/"
  },
  {
      name: "Aktivo Labs",
      slug: "aktivolabs",
      description: "Aktivo Labs is a Singapore-founded HealthTech company that creates predictive and preventive health journeys by applying proprietary AI models to behavioral and biometric data. Our solutions help leading insurers, healthcare providers, and fintech companies to lower health-related costs, attract and retain customers, and increase value per relationship, while improving wellbeing and enabling sustainable growth",
      url: "www.aktivolabs.com"
  },
  {
      name: "Alterno",
      slug: "alterno",
      description: "Provides industrial energy-efficiency and renewable optimization solutions through sand-based thermal energy storage. Demand forecasting and control enable peak shaving, cost savings, and improved ESG performance.",
      url: "https://alterno.net/"
  },
  {
      name: "Assemblr",
      slug: "assemblr",
      description: "Browser‑based 3D/AR creation platform. No‑code authoring and distribution for education and marketing accelerate on‑site training and immersive campaigns.",
      url: "https://edu.assemblrworld.com/"
  },
  {
      name: "BarkingDog Technology Inc. (AI Amaze)",
      slug: "ai-amaze",
      description: "BarkingDog Technology Inc. is dedicated to the development of AI+XR technologies, offering cross-platform AI agent solutions under its flagship product, AI AMAZE. This service empowers businesses to rapidly and seamlessly establish accurate, controllable generative AI applications featuring realistic virtual agents. By delivering innovative, knowledge-driven digital experiences (Bridge to Services), BarkingDog Technology enhances operational efficiency and reduces costs for businesses internally, while externally revolutionizing customer engagement. Its services span various industries and scenarios, including tourism and guided tours, food and retail, smart factories, and intelligent healthcare.",
      url: "https://www.barkingdog.ai/"
  },
  {
      name: "Betterdata",
      slug: "betterdata",
      description: "Synthetic data platform that preserves statistical properties while mitigating re‑identification risk, enabling safe development, testing and data sharing in regulated industries.",
      url: "www.betterdata.ai"
  },
  {
      name: "bootloader",
      slug: "bootloader",
      description: "Open‑source lightweight bootloader supporting multiple architectures, reducing bring‑up time for embedded development with robustness and a small footprint.",
      url: "https://bootloader.studio/"
  },
  {
      name: "butler",
      slug: "butler",
      description: "Automates property and office operations—cleaning, inspections and work orders—enhancing tenant experience while optimizing operating costs.",
      url: "https://www.butlerasia.com"
  },
  {
      name: "Cakap",
      slug: "cakap",
      description: "Indonesia‑based edtech offering language and vocational courses via mobile. Live classes and tutor matching improve learner outcomes.",
      url: "https://cakap.com"
  },
  {
      name: "CarnotFleet",
      slug: "carnofleet",
      description: "CarnotFleet provides plug & play cold chain solutions that can convert existing non refrigerated vehicles or assets into temperature controlled units, without requiring major modifications.",
      url: "https://carnotfleet.com"
  },
  {
      name: "CitySage",
      slug: "citysage",
      description: "Climate‑tech startup supporting urban planning and smart infrastructure by using climate data and AI to visualize risks and propose adaptation strategies.",
      url: "https://www.citysage.my"
  },
  {
      name: "Cleantech & Beyond",
      slug: "cleantech-&-beyond",
      description: "A deep-tech spin-off developing advanced materials and smart sensing technologies, delivering innovative solutions for preventive maintenance, smart packaging, and sustainable industries.",
      url: "https://www.cleantech-beyond.com/"
  },
  {
      name: "CredShields",
      slug: "cred-shields",
      description: "CredShields (https://credshields.com) is a leading blockchain security company disrupting the industry with AI-powered protection for smart contracts, decentralized applications, and Web3 infrastructure. Trusted by global platforms and enterprises, CredShields has completed over 4 million scans on its flagship platform SolidityScan.com, with 200,000+ monthly scans, and integrates with 70+ developer tools like the Ethereum Foundation's Remix, BlockScout, and EtherScan. As the leader of the OWASP Smart Contract Security Standards Project (https://scs.owasp.org), CredShields is setting the world’s first global benchmark for Web3 security, empowering innovators across DeFi, NFTs, and enterprise blockchain adoption to launch and scale with confidence while driving digital trust in the decentralized era.",
      url: "https://solidityscan.com/"
  },
  {
      name: "Expedock",
      slug: "expedock",
      description: "Automates freight forwarding and customs paperwork with AI. Digitizes and reconciles B/Ls and invoices to cut manual work and errors, surfacing logistics KPIs.",
      url: "https://expedock.com"
  },
  {
      name: "Fair Mart",
      slug: "fair-mart",
      description: "Fairmart is a Unified Commerce Platform that empowers modern retailers to grow their business.",
      url: "https://fairmart.app/"
  },
  {
      name: "FathomX",
      slug: "fathomx",
      description: "NUS/NUHS spin‑off for breast‑cancer AI. Assists mammography reading to reduce false positives and turnaround time, boosting screening throughput.",
      url: "https://www.fathomx.co/"
  },
  {
      name: "Float16",
      slug: "float16",
      description: "Develops software and semiconductor technology to optimize AI inference and numerical computing, using low‑precision math to boost efficiency and next‑gen AI performance.",
      url: "https://float16.cloud/"
  },
  {
      name: "Funding Societies",
      slug: "funding-societies",
      description: "Operates the largest digital financing platform for SMEs in Southeast Asia, offering working capital, invoice and trade financing with data‑driven underwriting and collections to expand credit access.",
      url: "www.fundingsocieties.com"
  },
  {
      name: "Groundup AI",
      slug: "groundup-ai",
      description: "Applies ML to sound and vibration to predict equipment failures. Cuts downtime and maintenance costs in manufacturing and heavy industry, codifying field expertise.",
      url: "https://groundup.ai/"
  },
  {
      name: "HeyMax",
      slug: "heymax",
      description: "Rewards platform that lets users earn miles and points simultaneously on everyday spending. Card linking and optimization algorithms maximize travel perks and improve user LTV.",
      url: "https://heymax.ai"
  },
  {
      name: "Hydgen",
      slug: "hydgen",
      description: "Develops modular, on-site green hydrogen electrolyzers that enable industries to produce high-purity hydrogen on demand, cutting costs and eliminating the need for centralized transport or storage",
      url: ""
  },
  {
      name: "Hydroleap",
      slug: "hydroleap",
      description: "Electrochemical wastewater treatment platform that reduces chemical usage. Automation and energy efficiency lower OPEX and improve ESG outcomes for factories and data centers.",
      url: "https://www.hydroleap.com/"
  },
  {
      name: "Klimatech",
      slug: "klimatech",
      description: "Provides emissions visibility, reduction planning and credit connectivity. Supports Scope accounting across supply chains for reporting and abatement.",
      url: "https://klimatech.ph/"
  },
  {
      name: "Klleon",
      slug: "klleon",
      description: "Klleon turns screens into multilingual, conversational concierges via an on-device digital-human SDK—real-time, privacy-safe dialogue, OEM-integrated(Samsung/LG and so on), and built to scale.",
      url: "https://www.klleon.io/about"
  },
  {
      name: "Midwest Composites",
      slug: "midwest-composites",
      description: "Company developing and manufacturing advanced composites, supplying lightweight, high-strength materials for aerospace and automotive to boost performance and energy efficiency — while championing sustainability with renewable, plant-based sources.",
      url: "https://midwestcomposites.com.my/"
  },
  {
      name: "Mighty Jaxx",
      slug: "mighty-jaxx",
      description: "The Mighty Jaxx Group is a global network of brands and creators dedicated to bringing the future of pop culture into homes across the world. Mighty Jaxx partners with the world’s most iconic entertainment companies to craft experiences and cross-platform storytelling that resonate across both physical and digital worlds.",
      url: "https://mightyjaxx.com"
  },
  {
      name: "nanoSkunkWorkX",
      slug: "nanoskunkworkx",
      description: "Pursues next‑gen nanomaterials and MEMS/semiconductor device R&D, bridging materials design to prototyping to accelerate industrial applications.",
      url: "https://nanoskunkworkx.com/"
  },
  {
      name: "NewID",
      slug: "newid",
      description: "Runs FAST/AVOD platforms focused on Korean content, with strong global traction across TV, mobility, and ads. Profitable in 2025 (~$7M rev), planning Series B. Backed by NEW, leveraging AI monetization.",
      url: "http://www.its-newid.com"
  },
  {
      name: "OneInbox",
      slug: "oneinbox",
      description: "Unified inbox for email, social and messaging. Shared views, templates and SLA tracking bring consistency and speed to customer communications.",
      url: "https://oneinbox.ai/"
  },
  {
      name: "pQCee",
      slug: "pqcee",
      description: "Cybersecurity startup developing post‑quantum cryptography technologies, ensuring secure communication and data protection in line with emerging standards.",
      url: "https://www.pqcee.com"
  },
  {
      name: "Protos Labs",
      slug: "protos-labs",
      description: "Protos Labs builds AI agents that turn complex cyber threat data into actionable intelligence that help organizations stay head of cyber attacks.  ",
      url: "https://protoslabs.io"
  },
  {
      name: "Qritive",
      slug: "qritive",
      description: "Builds AI for digital pathology to assist cancer detection and workflow, helping hospitals reduce turnaround time and improve diagnostic accuracy.",
      url: "https://www.qritive.com"
  },
  {
      name: "Quantified Energy",
      slug: "quantified-energy",
      description: "Quantified Energy is a solar deep-tech company from Singapore leveraging the patented autonomous drone electroluminescence (EL) mapping technology and AI-driven data analytics to inspect and assess the health of solar PV power plants, facilitating optimized operations and proactive maintenance.",
      url: "https://quantified-energy.com/"
  },
  {
      name: "QuikBot Technologies",
      slug: "quikbot-technologies",
      description: "Builds autonomous delivery robots and an AFMD (Autonomous Final-Mile Delivery) PaaS, enabling floor-to-floor deliveries in commercial sites while cutting delivery times and emissions.",
      url: "https://www.quikbot.ai"
  },
  {
      name: "Rekosistem",
      slug: "rekosistem",
      description: "Waste and circularity data platform. Tracks collection, sorting and recycling to provide traceability, enabling enterprises and cities to cut emissions and manage circular economy KPIs.",
      url: "https://rekosistem.com/"
  },
  {
      name: "Scantist AI",
      slug: "scantist-ai",
      description: "Founded in 2016 as a spin-off from NTU’s Cyber Security Lab, Scantist is a Singapore-based cybersecurity company specializing in application and AI supply chain security. Recognized by IMDA, CSA, and GovTech, Scantist provides AI-driven agent based DevSecOps solutions that help organizations secure modern applications, manage vulnerabilities, and ensure regulatory compliance across the software development lifecycle.",
      url: "https://scantist.com/"
  },
  {
      name: "Seedflex",
      slug: "seedflex",
      description: "Provides flexible revolving working‑capital lines for SMEs. Data‑driven underwriting on sales and cash‑flow signals enables rapid access to funds and smoother cash management.",
      url: "https://www.seedflex.com/"
  },
  {
      name: "Shieldbase",
      slug: "shieldbase",
      description: "The AI Operating System that unifies tools, governs access, and safely embeds intelligence into enterprise workflows.",
      url: "https://shieldbase.ai"
  },
  {
      name: "SoBanHang",
      slug: "sobanhang",
      description: "Vietnam‑focused MSME retail app combining POS, inventory, and online sales. Digitizes cash‑based trade by streamlining ordering, payments and procurement in a single app.",
      url: "https://sobanhang.com"
  },
  {
      name: "Speedoc",
      slug: "speedoc",
      description: "Virtual clinic and home‑care platform offering telemedicine, house‑call doctors and nurses, medication delivery, and virtual wards, enabling comprehensive at‑home acute and chronic care.",
      url: "https://sg.speedoc.com/"
  },
  {
      name: "Surplus Indonesia",
      slug: "surplus-indonesia",
      description: "AI-powered circular recommerce platform\nthat saves surplus, close-to-expiry and imperfect goods  from food to fashion, FMCG, electronic and furnitures by redistributing them through our mobile app and offline channels at discounted prices. We cut waste, empower SMEs, and promote sustainable & affordable consumption",
      url: "https://surplus.id/"
  },
  {
      name: "TaggIoT",
      slug: "taggiot",
      description: "Unified IoT device management providing data collection, visualization and alerts, optimizing operations across industrial and smart‑facility deployments.",
      url: "https://taggiot.com"
  },
  {
      name: "Ternakin",
      slug: "ternakin",
      description: "Aquaculture company building a scalable aquaculture ecosystem through co-ownership farms, value-added fish processing, and a transparent supply chain for sustainable food systems.",
      url: "https://ternakin.co/en/"
  },
  {
      name: "Tictag",
      slug: "tictag",
      description: "Crowdsourcing platform providing AI data annotation. Enables easy mobile participation, improving speed and accuracy of AI model development.",
      url: "https://tictag.io"
  },
  {
      name: "uHoo",
      slug: "uhoo",
      description: "Offers IoT sensors and dashboards tracking 9+ indoor air quality metrics, improving health, energy savings and ESG outcomes for buildings.",
      url: "https://getuhoo.com"
  },
  {
      name: "UIB",
      slug: "uib",
      description: "Platform that unifies messaging channels with generative AI. Products like Unification Engine and Unified AI standardize conversational UX, modernizing enterprise customer engagement.",
      url: "https://uib.ai"
  },
  {
      name: "Viact",
      slug: "viact",
      description: "AI powered safety monitoring for high-risk industries, detecting PPE gaps, fall and ergonomic risks with real-time alerts and reports to prevent incidents.",
      url: "https://www.viact.ai/"
  },
  {
      name: "Yuno",
      slug: "yuno",
      description: "Provides payment orchestration, unifying hundreds of payment methods and fraud tools. Smart routing boosts approval rates and lowers costs, enabling cross‑border payments for enterprises.",
      url: "https://y.uno/"
  }
  ];

  const TOP_STARTUPS_20 = [
    {
      "name": "AI Seer",
      "slug": "ai-seer",
      "description": "Offers Facticity.AI, a platform that verifies the authenticity of text, audio and video, helping organizations counter misinformation and maintain brand safety in the gen‑AI era.",
      "url": "https://aiseer.co/"
    },
    {
      "name": "Aktivo Labs",
      "slug": "aktivolabs",
      "description": "Aktivo Labs is a Singapore-founded HealthTech company that creates predictive and preventive health journeys by applying proprietary AI models to behavioral and biometric data. Our solutions help leading insurers, healthcare providers, and fintech companies to lower health-related costs, attract and retain customers, and increase value per relationship, while improving wellbeing and enabling sustainable growth",
      "url": "www.aktivolabs.com"
    },
    {
      "name": "Alterno",
      "slug": "alterno",
      "description": "Provides industrial energy-efficiency and renewable optimization solutions through sand-based thermal energy storage. Demand forecasting and control enable peak shaving, cost savings, and improved ESG performance.",
      "url": "https://alterno.net/"
    },
    {
      "name": "BarkingDog Technology Inc. (AI Amaze)",
      "slug": "ai-amaze",
      "description": "BarkingDog Technology Inc. is dedicated to the development of AI+XR technologies, offering cross-platform AI agent solutions under its flagship product, AI AMAZE. This service empowers businesses to rapidly and seamlessly establish accurate, controllable generative AI applications featuring realistic virtual agents. By delivering innovative, knowledge-driven digital experiences (Bridge to Services), BarkingDog Technology enhances operational efficiency and reduces costs for businesses internally, while externally revolutionizing customer engagement. Its services span various industries and scenarios, including tourism and guided tours, food and retail, smart factories, and intelligent healthcare.",
      "url": "https://www.barkingdog.ai/"
    },
    {
      "name": "Betterdata",
      "slug": "betterdata",
      "description": "Synthetic data platform that preserves statistical properties while mitigating re‑identification risk, enabling safe development, testing and data sharing in regulated industries.",
      "url": "www.betterdata.ai"
    },
    {
        "name": "QuikBot Technologies",
        "slug": "quikbot-technologies",
        "description": "Builds autonomous delivery robots and an AFMD (Autonomous Final-Mile Delivery) PaaS, enabling floor-to-floor deliveries in commercial sites while cutting delivery times and emissions.",
        "url": "https://www.quikbot.ai"
    },
    {
      "name": "Funding Societies",
      "slug": "funding-societies",
      "description": "Operates the largest digital financing platform for SMEs in Southeast Asia, offering working capital, invoice and trade financing with data‑driven underwriting and collections to expand credit access.",
      "url": "www.fundingsocieties.com"
    },
    {
      "name": "HeyMax",
      "slug": "heymax",
      "description": "Rewards platform that lets users earn miles and points simultaneously on everyday spending. Card linking and optimization algorithms maximize travel perks and improve user LTV.",
      "url": "https://heymax.ai"
    },
    {
      "name": "Hydroleap",
      "slug": "hydroleap",
      "description": "Electrochemical wastewater treatment platform that reduces chemical usage. Automation and energy efficiency lower OPEX and improve ESG outcomes for factories and data centers.",
      "url": "https://www.hydroleap.com/"
    },
    {
      "name": "Klleon",
      "slug": "klleon",
      "description": "Klleon turns screens into multilingual, conversational concierges via an on-device digital-human SDK—real-time, privacy-safe dialogue, OEM-integrated(Samsung/LG and so on), and built to scale.",
      "url": "https://www.klleon.io/about"
    },
    {
      "name": "Midwest Composites",
      "slug": "midwest-composites",
      "description": "Company developing and manufacturing advanced composites, supplying lightweight, high-strength materials for aerospace and automotive to boost performance and energy efficiency — while championing sustainability with renewable, plant-based sources.",
      "url": "https://midwestcomposites.com.my/"
    },
    {
      "name": "Mighty Jaxx",
      "slug": "mighty-jaxx",
      "description": "The Mighty Jaxx Group is a global network of brands and creators dedicated to bringing the future of pop culture into homes across the world. Mighty Jaxx partners with the world’s most iconic entertainment companies to craft experiences and cross-platform storytelling that resonate across both physical and digital worlds.",
      "url": "https://mightyjaxx.com"
    },
    {
      "name": "NewID",
      "slug": "newid",
      "description": "Runs FAST/AVOD platforms focused on Korean content, with strong global traction across TV, mobility, and ads. Profitable in 2025 (~$7M rev), planning Series B. Backed by NEW, leveraging AI monetization.",
      "url": "http://www.its-newid.com"
    },
    {
      "name": "Quantified Energy",
      "slug": "quantified-energy",
      "description": "Quantified Energy is a solar deep-tech company from Singapore leveraging the patented autonomous drone electroluminescence (EL) mapping technology and AI-driven data analytics to inspect and assess the health of solar PV power plants, facilitating optimized operations and proactive maintenance.",
      "url": "https://quantified-energy.com/"
    },
    {
      "name": "Rekosistem",
      "slug": "rekosistem",
      "description": "Waste and circularity data platform. Tracks collection, sorting and recycling to provide traceability, enabling enterprises and cities to cut emissions and manage circular economy KPIs.",
      "url": "https://rekosistem.com/"
    },
    {
      "name": "Seedflex",
      "slug": "seedflex",
      "description": "Provides flexible revolving working‑capital lines for SMEs. Data‑driven underwriting on sales and cash‑flow signals enables rapid access to funds and smoother cash management.",
      "url": "https://www.seedflex.com/"
    },
    {
      "name": "SoBanHang",
      "slug": "sobanhang",
      "description": "Vietnam‑focused MSME retail app combining POS, inventory, and online sales. Digitizes cash‑based trade by streamlining ordering, payments and procurement in a single app.",
      "url": "https://sobanhang.com"
    },
    {
      "name": "Speedoc",
      "slug": "speedoc",
      "description": "Virtual clinic and home‑care platform offering telemedicine, house‑call doctors and nurses, medication delivery, and virtual wards, enabling comprehensive at‑home acute and chronic care.",
      "url": "https://sg.speedoc.com/"
    },
    {
      "name": "Ternakin",
      "slug": "ternakin",
      "description": "Aquaculture company building a scalable aquaculture ecosystem through co-ownership farms, value-added fish processing, and a transparent supply chain for sustainable food systems.",
      "url": "https://ternakin.co/en/"
    },
    {
      "name": "Viact",
      "slug": "viact",
      "description": "AI powered safety monitoring for high-risk industries, detecting PPE gaps, fall and ergonomic risks with real-time alerts and reports to prevent incidents.",
      "url": "https://www.viact.ai/"
    }
  ]
  
  export { TOP_STARTUPS, TOP_STARTUPS_20 };