const TOP_STARTUPS = [
  {
    name: "Ackcio",
    slug: "ackcio",
    description:
      "Industrial monitoring via long‑range mesh networks connecting instrumentation sensors. Real‑time geotechnical and structural monitoring improves safety and uptime in construction, mining and rail.",
    url: "https://www.ackcio.com/",
  },
  {
    name: "AI Seer",
    slug: "ai-seer",
    description:
      "Offers Facticity.AI, a platform that verifies the authenticity of text, audio and video, helping organizations counter misinformation and maintain brand safety in the gen‑AI era.",
    url: "https://aiseer.co/",
  },
  {
    name: "Ailytics",
    slug: "ailtytics",
    description:
      "Computer vision for construction and manufacturing sites detecting unsafe acts and near‑misses. Dashboards drive corrective actions and safety KPI gains.",
    url: "https://ailytics.ai/",
  },
  {
    name: "Aktivo Labs",
    slug: "aktivolabs",
    description:
      "Aktivo Labs is a Singapore-founded HealthTech company that creates predictive and preventive health journeys by applying proprietary AI models to behavioral and biometric data. Our solutions help leading insurers, healthcare providers, and fintech companies to lower health-related costs, attract and retain customers, and increase value per relationship, while improving wellbeing and enabling sustainable growth",
    url: "www.aktivolabs.com",
  },
  {
    name: "Alterno",
    slug: "alterno",
    description:
      "Provides industrial energy-efficiency and renewable optimization solutions through sand-based thermal energy storage. Demand forecasting and control enable peak shaving, cost savings, and improved ESG performance.",
    url: "https://alterno.net/",
  },
  {
    name: "Assemblr",
    slug: "assemblr",
    description:
      "Browser‑based 3D/AR creation platform. No‑code authoring and distribution for education and marketing accelerate on‑site training and immersive campaigns.",
    url: "https://edu.assemblrworld.com/",
  },
  {
    name: "BarkingDog Technology Inc. (AI Amaze)",
    slug: "ai-amaze",
    description:
      "BarkingDog Technology Inc. is dedicated to the development of AI+XR technologies, offering cross-platform AI agent solutions under its flagship product, AI AMAZE. This service empowers businesses to rapidly and seamlessly establish accurate, controllable generative AI applications featuring realistic virtual agents. By delivering innovative, knowledge-driven digital experiences (Bridge to Services), BarkingDog Technology enhances operational efficiency and reduces costs for businesses internally, while externally revolutionizing customer engagement. Its services span various industries and scenarios, including tourism and guided tours, food and retail, smart factories, and intelligent healthcare.",
    url: "https://www.barkingdog.ai/",
  },
  {
    name: "Betterdata",
    slug: "betterdata",
    description:
      "Synthetic data platform that preserves statistical properties while mitigating re‑identification risk, enabling safe development, testing and data sharing in regulated industries.",
    url: "www.betterdata.ai",
  },
  {
    name: "bootloader",
    slug: "bootloader",
    description:
      "Open‑source lightweight bootloader supporting multiple architectures, reducing bring‑up time for embedded development with robustness and a small footprint.",
    url: "https://bootloader.studio/",
  },
  {
    name: "butler",
    slug: "butler",
    description:
      "Automates property and office operations—cleaning, inspections and work orders—enhancing tenant experience while optimizing operating costs.",
    url: "https://www.butlerasia.com",
  },
  {
    name: "Cakap",
    slug: "cakap",
    description:
      "Indonesia‑based edtech offering language and vocational courses via mobile. Live classes and tutor matching improve learner outcomes.",
    url: "https://cakap.com",
  },
  {
    name: "CarnotFleet",
    slug: "carnofleet",
    description:
      "CarnotFleet provides plug & play cold chain solutions that can convert existing non refrigerated vehicles or assets into temperature controlled units, without requiring major modifications.",
    url: "https://carnotfleet.com",
  },
  {
    name: "CitySage",
    slug: "citysage",
    description:
      "Climate‑tech startup supporting urban planning and smart infrastructure by using climate data and AI to visualize risks and propose adaptation strategies.",
    url: "https://www.citysage.my",
  },
  {
    name: "Cleantech & Beyond",
    slug: "cleantech-&-beyond",
    description:
      "A deep-tech spin-off developing advanced materials and smart sensing technologies, delivering innovative solutions for preventive maintenance, smart packaging, and sustainable industries.",
    url: "https://www.cleantech-beyond.com/",
  },
  {
    name: "CredShields",
    slug: "cred-shields",
    description:
      "CredShields (https://credshields.com) is a leading blockchain security company disrupting the industry with AI-powered protection for smart contracts, decentralized applications, and Web3 infrastructure. Trusted by global platforms and enterprises, CredShields has completed over 4 million scans on its flagship platform SolidityScan.com, with 200,000+ monthly scans, and integrates with 70+ developer tools like the Ethereum Foundation's Remix, BlockScout, and EtherScan. As the leader of the OWASP Smart Contract Security Standards Project (https://scs.owasp.org), CredShields is setting the world’s first global benchmark for Web3 security, empowering innovators across DeFi, NFTs, and enterprise blockchain adoption to launch and scale with confidence while driving digital trust in the decentralized era.",
    url: "https://solidityscan.com/",
  },
  {
    name: "Expedock",
    slug: "expedock",
    description:
      "Automates freight forwarding and customs paperwork with AI. Digitizes and reconciles B/Ls and invoices to cut manual work and errors, surfacing logistics KPIs.",
    url: "https://expedock.com",
  },
  {
    name: "Fair Mart",
    slug: "fair-mart",
    description:
      "Fairmart is a Unified Commerce Platform that empowers modern retailers to grow their business.",
    url: "https://fairmart.app/",
  },
  {
    name: "FathomX",
    slug: "fathomx",
    description:
      "NUS/NUHS spin‑off for breast‑cancer AI. Assists mammography reading to reduce false positives and turnaround time, boosting screening throughput.",
    url: "https://www.fathomx.co/",
  },
  {
    name: "Float16",
    slug: "float16",
    description:
      "Develops software and semiconductor technology to optimize AI inference and numerical computing, using low‑precision math to boost efficiency and next‑gen AI performance.",
    url: "https://float16.cloud/",
  },
  {
    name: "Funding Societies",
    slug: "funding-societies",
    description:
      "Operates the largest digital financing platform for SMEs in Southeast Asia, offering working capital, invoice and trade financing with data‑driven underwriting and collections to expand credit access.",
    url: "www.fundingsocieties.com",
  },
  {
    name: "Groundup AI",
    slug: "groundup-ai",
    description:
      "Applies ML to sound and vibration to predict equipment failures. Cuts downtime and maintenance costs in manufacturing and heavy industry, codifying field expertise.",
    url: "https://groundup.ai/",
  },
  {
    name: "HeyMax",
    slug: "heymax",
    description:
      "Rewards platform that lets users earn miles and points simultaneously on everyday spending. Card linking and optimization algorithms maximize travel perks and improve user LTV.",
    url: "https://heymax.ai",
  },
  {
    name: "Hydgen",
    slug: "hydgen",
    description:
      "Develops modular, on-site green hydrogen electrolyzers that enable industries to produce high-purity hydrogen on demand, cutting costs and eliminating the need for centralized transport or storage",
    url: "",
  },
  {
    name: "Hydroleap",
    slug: "hydroleap",
    description:
      "Electrochemical wastewater treatment platform that reduces chemical usage. Automation and energy efficiency lower OPEX and improve ESG outcomes for factories and data centers.",
    url: "https://www.hydroleap.com/",
  },
  {
    name: "Klimatech",
    slug: "klimatech",
    description:
      "Provides emissions visibility, reduction planning and credit connectivity. Supports Scope accounting across supply chains for reporting and abatement.",
    url: "https://klimatech.ph/",
  },
  {
    name: "Klleon",
    slug: "klleon",
    description:
      "Klleon turns screens into multilingual, conversational concierges via an on-device digital-human SDK—real-time, privacy-safe dialogue, OEM-integrated(Samsung/LG and so on), and built to scale.",
    url: "https://www.klleon.io/about",
  },
  {
    name: "Midwest Composites",
    slug: "midwest-composites",
    description:
      "Company developing and manufacturing advanced composites, supplying lightweight, high-strength materials for aerospace and automotive to boost performance and energy efficiency — while championing sustainability with renewable, plant-based sources.",
    url: "https://midwestcomposites.com.my/",
  },
  {
    name: "Mighty Jaxx",
    slug: "mighty-jaxx",
    description:
      "The Mighty Jaxx Group is a global network of brands and creators dedicated to bringing the future of pop culture into homes across the world. Mighty Jaxx partners with the world’s most iconic entertainment companies to craft experiences and cross-platform storytelling that resonate across both physical and digital worlds.",
    url: "https://mightyjaxx.com",
  },
  {
    name: "nanoSkunkWorkX",
    slug: "nanoskunkworkx",
    description:
      "Pursues next‑gen nanomaterials and MEMS/semiconductor device R&D, bridging materials design to prototyping to accelerate industrial applications.",
    url: "https://nanoskunkworkx.com/",
  },
  {
    name: "NewID",
    slug: "newid",
    description:
      "Runs FAST/AVOD platforms focused on Korean content, with strong global traction across TV, mobility, and ads. Profitable in 2025 (~$7M rev), planning Series B. Backed by NEW, leveraging AI monetization.",
    url: "http://www.its-newid.com",
  },
  {
    name: "OneInbox",
    slug: "oneInbox",
    description:
      "Unified inbox for email, social and messaging. Shared views, templates and SLA tracking bring consistency and speed to customer communications.",
    url: "https://oneinbox.ai/",
  },
  {
    name: "pQCee",
    slug: "pqcee",
    description:
      "Cybersecurity startup developing post‑quantum cryptography technologies, ensuring secure communication and data protection in line with emerging standards.",
    url: "https://www.pqcee.com",
  },
  {
    name: "Protos Labs",
    slug: "protos-labs",
    description:
      "Protos Labs builds AI agents that turn complex cyber threat data into actionable intelligence that help organizations stay head of cyber attacks.  ",
    url: "https://protoslabs.io",
  },
  {
    name: "Qritive",
    slug: "qritive",
    description:
      "Builds AI for digital pathology to assist cancer detection and workflow, helping hospitals reduce turnaround time and improve diagnostic accuracy.",
    url: "https://www.qritive.com",
  },
  {
    name: "Quantified Energy",
    slug: "quantified-energy",
    description:
      "Quantified Energy is a solar deep-tech company from Singapore leveraging the patented autonomous drone electroluminescence (EL) mapping technology and AI-driven data analytics to inspect and assess the health of solar PV power plants, facilitating optimized operations and proactive maintenance.",
    url: "https://quantified-energy.com/",
  },
  {
    name: "QuikBot Technologies",
    slug: "quikbot-technologies",
    description:
      "Builds autonomous delivery robots and an AFMD (Autonomous Final-Mile Delivery) PaaS, enabling floor-to-floor deliveries in commercial sites while cutting delivery times and emissions.",
    url: "https://www.quikbot.ai",
  },
  {
    name: "Rekosistem",
    slug: "rekosistem",
    description:
      "Waste and circularity data platform. Tracks collection, sorting and recycling to provide traceability, enabling enterprises and cities to cut emissions and manage circular economy KPIs.",
    url: "https://rekosistem.com/",
  },
  {
    name: "Scantist AI",
    slug: "scantist-ai",
    description:
      "Founded in 2016 as a spin-off from NTU’s Cyber Security Lab, Scantist is a Singapore-based cybersecurity company specializing in application and AI supply chain security. Recognized by IMDA, CSA, and GovTech, Scantist provides AI-driven agent based DevSecOps solutions that help organizations secure modern applications, manage vulnerabilities, and ensure regulatory compliance across the software development lifecycle.",
    url: "https://scantist.com/",
  },
  {
    name: "Seedflex",
    slug: "seedflex",
    description:
      "Provides flexible revolving working‑capital lines for SMEs. Data‑driven underwriting on sales and cash‑flow signals enables rapid access to funds and smoother cash management.",
    url: "https://www.seedflex.com/",
  },
  {
    name: "Shieldbase",
    slug: "shieldbase",
    description:
      "The AI Operating System that unifies tools, governs access, and safely embeds intelligence into enterprise workflows.",
    url: "https://shieldbase.ai",
  },
  {
    name: "SoBanHang",
    slug: "sobanhang",
    description:
      "Vietnam‑focused MSME retail app combining POS, inventory, and online sales. Digitizes cash‑based trade by streamlining ordering, payments and procurement in a single app.",
    url: "https://sobanhang.com",
  },
  {
    name: "Speedoc",
    slug: "speedoc",
    description:
      "Virtual clinic and home‑care platform offering telemedicine, house‑call doctors and nurses, medication delivery, and virtual wards, enabling comprehensive at‑home acute and chronic care.",
    url: "https://sg.speedoc.com/",
  },
  {
    name: "Surplus Indonesia",
    slug: "surplus-indonesia",
    description:
      "AI-powered circular recommerce platform\nthat saves surplus, close-to-expiry and imperfect goods  from food to fashion, FMCG, electronic and furnitures by redistributing them through our mobile app and offline channels at discounted prices. We cut waste, empower SMEs, and promote sustainable & affordable consumption",
    url: "https://surplus.id/",
  },
  {
    name: "TaggIoT",
    slug: "taggiot",
    description:
      "Unified IoT device management providing data collection, visualization and alerts, optimizing operations across industrial and smart‑facility deployments.",
    url: "https://taggiot.com",
  },
  {
    name: "Ternakin",
    slug: "ternakin",
    description:
      "Aquaculture company building a scalable aquaculture ecosystem through co-ownership farms, value-added fish processing, and a transparent supply chain for sustainable food systems.",
    url: "https://ternakin.co/en/",
  },
  {
    name: "Tictag",
    slug: "tictag",
    description:
      "Crowdsourcing platform providing AI data annotation. Enables easy mobile participation, improving speed and accuracy of AI model development.",
    url: "https://tictag.io",
  },
  {
    name: "uHoo",
    slug: "uhoo",
    description:
      "Offers IoT sensors and dashboards tracking 9+ indoor air quality metrics, improving health, energy savings and ESG outcomes for buildings.",
    url: "https://getuhoo.com",
  },
  {
    name: "UIB",
    slug: "uib",
    description:
      "Platform that unifies messaging channels with generative AI. Products like Unification Engine and Unified AI standardize conversational UX, modernizing enterprise customer engagement.",
    url: "https://uib.ai",
  },
  {
    name: "Viact",
    slug: "viact",
    description:
      "AI powered safety monitoring for high-risk industries, detecting PPE gaps, fall and ergonomic risks with real-time alerts and reports to prevent incidents.",
    url: "https://www.viact.ai/",
  },
  {
    name: "Yuno",
    slug: "yuno",
    description:
      "Provides payment orchestration, unifying hundreds of payment methods and fraud tools. Smart routing boosts approval rates and lowers costs, enabling cross‑border payments for enterprises.",
    url: "https://y.uno/",
  },
];

const TOP_STARTUPS_2026 = [
  {
    ranking: 1,
    name: "Seoul Dynamics",
    slug: "Seoul Dynamics",
    description:
      "• Founded in July 2022, a South Korean developer of autonomous mobile robots and forklifts capable of transporting heavy loads\n• Automates indoor and outdoor material transport and reduces labor requirements in logistics warehouses, shipyards, and construction and manufacturing sites\n• 16-person team, 50% of whom hold PhDs; more than 10 patents; 260% revenue CAGR; deployments include a major Japanese logistics company",
    url: "https://www.seouldynamics.com/",
  },
  {
    ranking: 2,
    name: "Vayana",
    slug: "Vayana",
    description:
      "• Founded in 2009, an India-based trade credit platform connecting B2B commerce and finance\n• Electronic invoicing, credit assessment, domestic and cross-border supply chain finance, collections and payments, and receivables tokenization\n• Backed by Trifecta Capital, SMBC Asia Rising Fund, Jungle Ventures, IFC, and others",
    url: "vayana.com",
  },
  {
    ranking: 3,
    name: "Morse Micro Pty. Ltd.",
    slug: "Morse Micro",
    description:
      "• Founded in 2016, an Australian semiconductor company developing Wi-Fi HaLow technology for long-range, low-power communications\n• Wide-area wireless connectivity for IoT devices, surveillance cameras, smart homes, and industrial equipment\n• Backed by MegaChips, Blackbird Ventures, and others, with mass-production capabilities spanning chips through development platforms",
    url: "morsemicro.com",
  },
  {
    ranking: 4,
    name: "Krosslinker",
    slug: "Krosslinker",
    description:
      "• Founded in 2019, a Singapore-based advanced materials company producing scalable silica aerogel using patented technology\n• Thermal insulation and passive cooling for buildings, data centers, energy facilities, and cold chains\n• Backed by 500 Global, SEEDS Capital, Apsara Capital, and others, with patent-protected manufacturing technology",
    url: "https://krosslinker.com/",
  },
  {
    ranking: 5,
    name: "SatSure Analytics India Pvt. Ltd.",
    slug: "SatSure Analytics India",
    description:
      "• Year founded undisclosed, an Indian Earth intelligence company that uses AI to integrate satellite, radar, IoT, and ground data\n• Risk assessment, monitoring, and decision support for agriculture, finance, insurance, and infrastructure\n• More than 50 customers; 9x revenue growth; FY26 revenue of US$11 million; US$30 million in orders; US$20 million raised to date",
    url: "https://www.satsure.co/",
  },
  {
    ranking: 6,
    name: "Whale Tech Pte. Ltd.",
    slug: "Whale Tech Pte. Ltd",
    description:
      "• Year founded undisclosed, a Singapore-based enterprise AI company that manages physical spaces and operations through cloud and edge AI\n• Store and facility operations, voice analytics, content governance, agent workflows, and IoT device management\n• Large-scale operating track record across 45 countries, with more than 1,500 customers and over 530,000 connected devices",
    url: "https://www.whale.sg/",
  },
  {
    ranking: 7,
    name: "TALOS Corp.",
    slug: "TALOS Corp",
    description:
      "• Founded in 2021, a Seoul National University spinout using AI to estimate cerebral aneurysm risk from health screening data\n• Early screening for cerebral aneurysms and referral recommendations using routine health checkups\n• Validated on a national cohort of approximately 420,000 people; contracts with more than 50 Korean institutions; enterprise deployment track record",
    url: "https://taloscorp.io/en/",
  },
  {
    ranking: 8,
    name: "ProtoPie",
    slug: "ProtoPie",
    description:
      "• Founded in 2014, a South Korea-based global SaaS company enabling high-fidelity interactive prototypes without coding\n• UI/UX prototyping and user testing for automobiles, home appliances, apps, and embedded devices\n• 68 patents; 93 employees; major corporate customers; strong revenue contribution from the Japanese market",
    url: "http://protopie.io",
  },
  {
    ranking: 9,
    name: "Extraterrestrial Power Ltd.",
    slug: "Extraterrestrial Power Ltd",
    description:
      "• Founded in 2019, an Australian company developing radiation-resistant, self-healing silicon solar cells for space\n• Power generation for satellites, spacecraft, and future large-scale space infrastructure\n• Patent-protected technology, a low-cost and short-lead-time mass-production design, and backing from Flying Fox Ventures and others",
    url: "https://www.extraterrestrialpower.com/",
  },
  {
    ranking: 10,
    name: "5N Networks",
    slug: "5N Networks",
    description:
      "• Founded in Hong Kong in 2026, a browser-based mesh streaming company that relays encrypted video between viewer devices\n• Reduces bandwidth use for live video streaming in aviation, maritime, telecommunications, and smart venues\n• Local relay architecture requiring no additional hardware and capable of operating over constrained networks",
    url: "http://5nnetworks.com/",
  },
  {
    ranking: 11,
    name: "DoctorTool",
    slug: "DoctorTool",
    description:
      "• Founded in 2015, an Indonesian digital health company integrating healthcare information systems, patient apps, and IoMT devices\n• Electronic medical records, patient management, telemedicine, and medical-device data integration for clinics and hospitals\n• Deployed at more than 2,500 healthcare facilities, with over 15 million patient records across 325 cities and 37 provinces",
    url: "doctortool.id",
  },
  {
    ranking: 12,
    name: "MediSun Energy",
    slug: "MediSun Energy",
    description:
      "• Year founded undisclosed, a Singapore company providing decentralized modular water-treatment systems\n• Desalination, near-zero-discharge brine recovery, AI-based water management, and energy and mineral recovery from brine\n• US$22.5 million in contracts; FY26 year-to-date revenue of US$16 million; gross margin of 26–30%",
    url: "http://www.medisun.energy",
  },
  {
    ranking: 13,
    name: "Quanfluence Pvt. Ltd.",
    slug: "Quanfluence Pvt. Ltd",
    description:
      "• Founded in October 2021, an Indian quantum computing company developing photonic quantum technology and the OPTIQON optimization platform\n• Combinatorial optimization for logistics, finance, manufacturing, and other sectors, with a path toward general-purpose photonic quantum computing\n• US$450,000 in product revenue; more than US$1 million in government grants; nine patent applications; US$12 million raised to date",
    url: "quanfluence.com",
  },
  {
    ranking: 14,
    name: "Anervoir Power",
    slug: "Anervoir Power",
    description:
      "• Founded in 2025, a Singapore company developing nonflammable nickel-zinc backup power systems with no thermal runaway risk\n• Mission-critical power protection for data centers and submarine cable infrastructure\n• Secured a 5 MW order and completed Singapore’s first NiZn deployment at a data center",
    url: "http://anervoir.com",
  },
  {
    ranking: 15,
    name: "WAYCEN Inc.",
    slug: "WAYCEN Inc",
    description:
      "• Founded in 2019, a South Korean medical AI company supporting cancer prevention, diagnosis, and treatment\n• Lesion detection, diagnostic support, and enhanced clinical workflows for endoscopy and other procedures\n• Commercial deployments in hospitals in South Korea and Vietnam, regulatory approvals, numerous patents, and backing from SparkLabs and others",
    url: "waycen.com",
  },
  {
    ranking: 16,
    name: "Xtractify",
    slug: "Xtractify (ENNO)",
    description:
      "• Founded in 2023, a Malaysian enterprise AI company building ENNO (Enterprise Neural Network Orchestration)\n• AI gateway that connects, governs and scales AI across existing enterprise systems, starting with high-volume finance operations\n• Proven with large enterprises and listed companies, delivering measurable cost and workload reductions; backed by Jati Growth",
    url: "https://www.xtractify.ai/",
  },
  {
    ranking: 17,
    name: "Portrai.io",
    slug: "Portrai",
    description:
      "• Founded in 2021, a South Korea-based spatial biology and drug discovery company using human tissue data and AI\n• Decision support for drug targets, indications, therapeutic modalities, and patient selection\n• More than 3,000 tissue maps and 100 million cells; contracts worth up to US$88 million plus royalties; backed by leading VCs",
    url: "http://www.portai.io/",
  },
  {
    ranking: 18,
    name: "Forest Jalan Co., Ltd.",
    slug: "Forest Jalan Co., Ltd",
    description:
      "• Founded in June 2024, a South Korea-based fintech company using merchant data and AI to support private credit in emerging markets\n• Credit for small merchants, repayment at the point of payment, and funding through tokenized real-world assets (RWAs)\n• More than US$1 million in cumulative RWA funding; KRW 5 billion raised to date; backed by Grab, Hashed, and others",
    url: "forjl.com",
  },
  {
    ranking: 19,
    name: "Staple AI Pte. Ltd.",
    slug: "Staple AI Pte. Ltd",
    description:
      "• Year founded undisclosed, a Singapore company providing a document AI platform with audit trails and controls for regulated industries\n• Automation of document processing, confidential computing, policy enforcement, and tamper-resistant audits\n• Contracts with Fortune 50 and Global 1000 companies; MRR above US$290,000; presence in more than 60 countries; 134% NDR",
    url: "staple.ai",
  },
  {
    ranking: 20,
    name: "Terminal 3",
    slug: "Terminal 3",
    description:
      "• Founded in 2023, a Hong Kong deep-tech enterprise AI agent security company; combines confidential computing with decentralized technology so enterprises can verify, govern and audit the actions of AI agents\n• Secure execution of protected workflows through a confidential computing network, with identity verification, verifiable credentials, and audit trails for agents\n• US$8 million seed round co-led by Illuminate Financial and CMCC Titan Fund; paid pilots in Japan; over 10 million profiles secured with Terminal 3",
    url: "http://terminal3.io",
  },
  {
    ranking: 21,
    name: "Allegro Energy",
    slug: "Allegro Energy",
    description:
      "• Founded in 2021, an Australian university spinout developing a patented aqueous flow battery for long-duration energy storage\n• 4–24-hour storage for data centers, power grids, manufacturing, and renewable energy\n• First commercial demonstration in 2025; more than US$14 million in equity and grant funding; backed by the Grantham Foundation and others",
    url: "https://allegro.energy/",
  },
  {
    ranking: 22,
    name: "KUBOCARE",
    slug: "KUBOCARE",
    description:
      "• Founded in 2023, a company providing camera-free patient monitoring using millimeter-wave radar and on-device AI\n• Early detection of falls, bed exits, and respiratory and posture risks in hospitals and care facilities\n• Paid deployments in India, Japan, and the United States; response time under one minute; MoUs covering more than 5,300 units; backed by Antler and others",
    url: "https://kubocare.ai/",
  },
  {
    ranking: 23,
    name: "Credolab",
    slug: "Credolab",
    description:
      "• Founded in 2016, a Singapore company assessing credit and fraud risk using device and behavioral data\n• Credit underwriting, fraud detection, income prediction, and customer-intent analysis for financial institutions\n• Presence in more than 50 countries; over 200 million people assessed; more than 325 customers; profitable since 2024; US$9 million raised to date",
    url: "http://www.credolab.com",
  },
  {
    ranking: 24,
    name: "KewMann",
    slug: "KewMann",
    description:
      "• Founded in 2014, a Malaysia-Singapore company providing human-centered AI for regulated industries in Southeast Asia\n• Fraud and AML detection, credit risk, collections, revenue optimization, and agent operations\n• More than 40 customers; FY2025 group revenue of over US$2 million; with a US$95 million qualified sales pipeline",
    url: "https://www.kewmann.com",
  },
  {
    ranking: 25,
    name: "Polymerize",
    slug: "Polymerize",
    description:
      "• Founded in 2020, a Singapore company providing an AI-native integrated platform for materials and chemical research\n• Experimental data management, materials property prediction, formulation optimization, and shorter R&D cycles\n• Contracted ARR of US$2 million; 27 paying customers; 32 PoCs; materials development track record with NTT-AS; backed by leading VCs",
    url: "http://polymerize.io",
  },
  {
    ranking: 26,
    name: "WeavAir",
    slug: "WeavAir",
    description:
      "• Year founded undisclosed, a Canadian climate intelligence company integrating satellites, drones, IoT, and edge AI\n• Emissions verification, asset risk monitoring, digital twins, and sustainability reporting\n• 10 customers across 16 countries; 96% logo retention; 128% NRR; 147% year-over-year growth; supported by Techstars and others",
    url: "weavair.com",
  },
  {
    ranking: 27,
    name: "Logisly",
    slug: "Logisly",
    description:
      "• Founded in 2018, an Indonesian technology-enabled 3PL integrating road, sea, and rail logistics operations\n• Automated dispatching, AI-powered order intake, transportation management, driver management, and logistics finance\n• Backed by Monk’s Hill Ventures, Jungle Ventures, Genesia Ventures, AC Ventures, and others",
    url: "logisly.com",
  },
  {
    ranking: 28,
    name: "DetectifAI",
    slug: "DetectifAI",
    description:
      "• Year founded undisclosed, an India-based AI company developing a language-agnostic voice authenticity model\n• Synthetic voice and deepfake detection, speaker verification, and protection for voice AI services\n• 95.4% accuracy and 0.99 ROC-AUC on public benchmarks; deployable in the cloud, on premises, and on devices",
    url: "https://detectif.ai",
  },
  {
    ranking: 29,
    name: "Numbers Protocol",
    slug: "Numbers Protocol",
    description:
      "• Founded in Taipei in 2019, a Taiwanese company providing provenance and trust infrastructure for digital assets and AI\n• Authenticity verification, rights management, and audit trails for images, video, and generative AI content\n• More than 86 million registered assets; over 400,000 daily API calls; 1.5 million downloads; adopted by Reuters; US$6 million seed round",
    url: "http://numbersprotocol.io/",
  },
  {
    ranking: 30,
    name: "PriyoShop",
    slug: "PriyoShop",
    description:
      "• Founded in 2020, PriyoShop is a Bangladeshi retail infrastructure company digitizing informal commerce for MSMEs.\n• Combines AI-powered procurement, last-mile logistics, data-powered embedded finance, retail DOOH media and demand intelligence.\n• Powers 220,000+ retailers and 296 brands, achieving positive operating profit and is backed by leading global investors.",
    url: "http://priyoshop.com",
  },
  {
    ranking: 31,
    name: "Eieling Technology Limited",
    slug: "Eieling Technology Limited",
    description:
      "• Founded in 2018, a Hong Kong Polytechnic University spinout developing an AI-guided portable liver diagnostic device\n• Testing and ongoing monitoring of liver fibrosis and fatty liver disease at healthcare facilities and community sites\n• Liverscan and FattaLab product lines; supported by the university, HKSTP, and ultrasound industry companies",
    url: "http://eieling.com/",
  },
  {
    ranking: 32,
    name: "Wavelet AI",
    slug: "WaveEco (Wavelet AI Pte. Ltd.)",
    description:
      "• Year founded undisclosed, a Singapore company providing thermal digital twins and approval-based AI controls\n• Cooling optimization and energy savings for data centers, industrial facilities, and battery energy storage facilities\n• Six commercial deployments; energy savings of 10.8–53.2%; 27 patents, including 13 granted; eight copyrights",
    url: "http://wavelet-ai.com/",
  },
  {
    ranking: 33,
    name: "Hyperbots Inc.",
    slug: "Hyperbots Inc",
    description:
      "• Founded in 2023, a U.S.-Indian company developing specialized agentic AI for finance and accounting operations\n• Automation and ERP integration for procure-to-pay, order-to-cash, accruals, and financial close\n• US$8.5 million raised; more than 150 employees; over 50 patents and papers; eight production agents; backed by leading VCs",
    url: "http://hyperbots.com/",
  },
  {
    ranking: 34,
    name: "Intello Labs",
    slug: "Intello Labs",
    description:
      "• Founded in 2016, an Indian physical AI company automating quality assessment and sorting of fresh produce\n• Labor-saving automation for visual inspection, grading, sorting, and packing of agricultural products\n• More than 50 machines in operation; four major customers; project pipeline above US$5 million; commercial deployments across multiple regions",
    url: "http://intellolabs.com/",
  },
  {
    ranking: 35,
    name: "Peris.ai",
    slug: "Peris.ai (Perisai Cybersecurity Defense Pte. Ltd.)",
    description:
      "• Founded in 2022, a Singaporean-Indonesian company providing an autonomous cyber defense platform powered by agentic AI\n• Automation of threat detection, investigation, and response, as well as compliance and attack-surface management\n• 2025 ARR of US$1.34 million; TRL 7–8; more than 1,200 ethical hackers; backed by East Ventures and others",
    url: "http://peris.ai",
  },
  {
    ranking: 36,
    name: "Paraverse Technology",
    slug: "Paraverse Technology (ImmerShare)",
    description:
      "• Founded in 2016, a Hong Kong-China 3D/XR software distribution infrastructure enabling native immersive content to be shared instantly via a link.\n• Engine-agnostic, device-independent streaming optimized for digital twins, simulations, 3D visualization, spatial commerce, and enterprise XR.\n• More than 1,000 enterprise customers and 20,000 developers; over 52 million minutes streamed; 44 proprietary IP assets including 4 patents.",
    url: "http://paraverse.cc",
  },
  {
    ranking: 37,
    name: "PT SENTRA SOLUSI AUTOMA",
    slug: "AUTOMA",
    description:
      "• Founded in May 2018, an Indonesian IoT and carbon platform integrating logistics operations and emissions\n• Visibility and management of vehicles, warehouses, energy, costs, risks, and Scope 1–3 emissions\n• 23 B2B customers; 2025 revenue above IDR 5 billion; deployed by MitraTel; strategic investment from Telkom Group",
    url: "http://automa.id/",
  },
  {
    ranking: 38,
    name: "OneNDF",
    slug: "OneNDF",
    description:
      "• Founded in 2021, OneNDF is an Indian lending platform connecting secured-loan decision-making and execution\n• Borrower assessment, financial institution matching, and secured-loan origination and execution management\n• More than 120 lenders; INR 3.17 billion across 117 loans disbursed in FY2025–26; supported by multiple investors",
    url: "https://onendf.com/",
  },
  {
    ranking: 39,
    name: "TartanHQ Solutions Private Limited",
    slug: "TartanHQ",
    description:
      "• Founded in 2021, an Indian integration platform connecting AI agents with enterprise systems\n• Data integration and workflow orchestration across HR, payroll, ERP, CRM, and banking systems\n• More than 220 connectors; in production at major financial institutions; deployed to over 40,000 users; approximately US$4.5–8.39 million raised to date",
    url: "http://tartanhq.com",
  },
  {
    ranking: 40,
    name: "FinHero",
    slug: "FinHero",
    description:
      "• Founded in 2019, a Malaysian company providing an AI-powered credit and lending ecosystem for SMEs\n• Document analysis, loan matching, credit risk prediction, collections, and embedded leasing\n• NTT DATA holds an 18.5% stake and jointly offers services; ISO 27001 certified; hosted on domestic cloud infrastructure",
    url: "http://finhero.asia/",
  },
  {
    ranking: 41,
    name: "Neurocle Inc.",
    slug: "Neurocle Inc",
    description:
      "• Founded in 2019, a South Korean company providing AI visual inspection software that can be trained and operated on site\n• Defect detection on manufacturing lines, automated creation of quality inspection models, and real-time decisions\n• Achieved 20x revenue growth without external funding; hundreds of manufacturing customers; recurring licenses and deployments across diverse equipment",
    url: "http://neuro-cle.com/",
  },
  {
    ranking: 42,
    name: "Invigilo",
    slug: "Invigilo",
    description:
      "• Founded in 2020, a Singapore company providing computer-vision-based workplace safety management\n• Real-time detection of safety violations and hazardous behavior in construction, manufacturing, and critical infrastructure\n• US$2.85 million revenue; 87% gross margin; 133% NRR; profitable since 2023; more than 200 customer sites",
    url: "http://invigilo.ai",
  },
  {
    ranking: 43,
    name: "IPIN LABS Co., Ltd.",
    slug: "IPIN LABS Co., Ltd",
    description:
      "• Founded in 2022, a South Korean company providing deep-learning-based indoor positioning using existing wireless infrastructure\n• Location tracking and movement management for assets and personnel in factories, hospitals, airports, and buildings\n• Manages more than 6,000 high-value assets; paid Japanese validation at Shimizu Corporation’s NOVARE; backed by Bluepoint and others",
    url: "http://home.ipinlabs.com",
  },
  {
    ranking: 44,
    name: "Oxylus Energy",
    slug: "Oxylus Energy",
    description:
      "• Founded in 2023, a U.S. climate tech company directly producing green methanol from captured CO₂\n• Decarbonization of maritime fuel, chemical feedstocks, and fuels derived from renewable energy\n• 4,500 hours of continuous operation; 95% selectivity; paid pilots; 1.3 million tonnes per year of committed demand; backed by Toyota Ventures and others",
    url: "http://oxylusenergy.com/",
  },
  {
    ranking: 45,
    name: "APETECHS Joint Stock Company",
    slug: "APETECHS Joint Stock Company",
    description:
      "• Founded in 2020, a Vietnamese company operating enterprise digital transformation and AI-powered procurement platforms\n• E-procurement, invoice and transaction data management, and unsecured SME working-capital loans through partner financial institutions\n• Approximately US$800,000 in annual revenue; more than 15 enterprise customers and 30 deployments; profitable and fully bootstrapped; ISO certified",
    url: "http://apetechs.com",
  },
  {
    ranking: 46,
    name: "Otonoco AI",
    slug: "Otonoco AI",
    description:
      "• Founded in 2024, a Malaysian company building Nakhoda AI, the Compliance Brain for regulated institutions and multinationals operating across Asia\n• Case advisory, gap analysis and cross-jurisdiction comparisons across overlapping regulations and internal policies, with an auditable record of every step\n• Sits on top of existing GRC systems without an IT overhaul; deployed as an isolated, client-keyed instance; backed by Antler, with support from Cradle, PayNet, Google for Startups and Microsoft for Startups",
    url: "http://otonocoai.com/",
  },
  {
    ranking: 47,
    name: "Cakap",
    slug: "Cakap",
    description:
      "• Founded in 2013, an Indonesian EdTech company providing live language and vocational education\n• Language learning for individuals, corporate training, vocational skills development, and support for accredited qualifications\n• More than 7 million registered learners; 284,000 monthly learners; over 1,000 corporate customers; backed by MDI Ventures and others",
    url: "http://cakap.com/",
  },
  {
    ranking: 48,
    name: "Uravu Labs",
    slug: "Uravu Labs",
    description:
      "• Founded in 2017, an Indian climate tech company that generates water from air while providing cooling\n• Energy-efficient cooling, water generation, and waste-heat utilization for data centers and industrial facilities\n• Proprietary liquid desiccant technology; multiple commercial demonstrations; backed by Enrission India Capital and others",
    url: "https://www.uravulabs.com/",
  },
  {
    ranking: 49,
    name: "SGService",
    slug: "Scientific Gear Service Co., Ltd. (SGService)",
    description:
      "• Founded in Zhunan, Taiwan, in 2021, a semiconductor inspection company developing advanced X-ray 3D inspection systems\n• Submicron internal defect inspection and quality assurance for semiconductors and large panels\n• Delivered Asia’s first 150 nm nano-CT system; 14 engineers; systems priced at US$2–5 million; recurring maintenance model",
    url: "http://sgservice.com.tw/",
  },
  {
    ranking: 50,
    name: "Rain Biotech Solutions",
    slug: "Rain Biotech Solutions",
    description:
      "• Year founded undisclosed, a Hong Kong microfluidics company integrating live-cell processing with AI analysis\n• Cell therapy, synthetic biology production, cell sorting and encapsulation, and biodigital twins\n• Product portfolio priced at US$110,000–210,000; equipment sales underway; kidney stem-cell validation; MoU and JV discussions; plans to raise US$5 million",
    url: "http://rainbiosolutions.com/",
  },
];

const TOP_STARTUPS_10 = [
  { id: "alterno", url: "https://alterno.net/" },
  { id: "betterdata", url: "https://betterdata.ai/" },
  { id: "heymax", url: "https://heymax.ai" },
  { id: "hydroleap", url: "https://www.hydroleap.com/" },
  { id: "klleon", url: "https://www.klleon.io/about" },
  { id: "newid", url: "http://www.its-newid.com" },
  { id: "quikbot-technologies", url: "https://www.quikbot.ai" },
  { id: "rekosistem", url: "https://rekosistem.com/" },
  { id: "sobanhang", url: "https://sobanhang.com" },
  { id: "ternakin", url: "https://ternakin.co/en/" },
];

const TOP_STARTUPS_20 = [
  {
    name: "AI Seer",
    slug: "ai-seer",
    description:
      "Offers Facticity.AI, a platform that verifies the authenticity of text, audio and video, helping organizations counter misinformation and maintain brand safety in the gen‑AI era.",
    url: "https://aiseer.co/",
  },
  {
    name: "Aktivo Labs",
    slug: "aktivolabs",
    description:
      "Aktivo Labs is a Singapore-founded HealthTech company that creates predictive and preventive health journeys by applying proprietary AI models to behavioral and biometric data. Our solutions help leading insurers, healthcare providers, and fintech companies to lower health-related costs, attract and retain customers, and increase value per relationship, while improving wellbeing and enabling sustainable growth",
    url: "www.aktivolabs.com",
  },
  {
    name: "Alterno",
    slug: "alterno",
    description:
      "Provides industrial energy-efficiency and renewable optimization solutions through sand-based thermal energy storage. Demand forecasting and control enable peak shaving, cost savings, and improved ESG performance.",
    url: "https://alterno.net/",
  },
  {
    name: "BarkingDog Technology Inc. (AI Amaze)",
    slug: "ai-amaze",
    description:
      "BarkingDog Technology Inc. is dedicated to the development of AI+XR technologies, offering cross-platform AI agent solutions under its flagship product, AI AMAZE. This service empowers businesses to rapidly and seamlessly establish accurate, controllable generative AI applications featuring realistic virtual agents. By delivering innovative, knowledge-driven digital experiences (Bridge to Services), BarkingDog Technology enhances operational efficiency and reduces costs for businesses internally, while externally revolutionizing customer engagement. Its services span various industries and scenarios, including tourism and guided tours, food and retail, smart factories, and intelligent healthcare.",
    url: "https://www.barkingdog.ai/",
  },
  {
    name: "Betterdata",
    slug: "betterdata",
    description:
      "Synthetic data platform that preserves statistical properties while mitigating re‑identification risk, enabling safe development, testing and data sharing in regulated industries.",
    url: "www.betterdata.ai",
  },
  {
    name: "QuikBot Technologies",
    slug: "quikbot-technologies",
    description:
      "Builds autonomous delivery robots and an AFMD (Autonomous Final-Mile Delivery) PaaS, enabling floor-to-floor deliveries in commercial sites while cutting delivery times and emissions.",
    url: "https://www.quikbot.ai",
  },
  {
    name: "Funding Societies",
    slug: "funding-societies",
    description:
      "Operates the largest digital financing platform for SMEs in Southeast Asia, offering working capital, invoice and trade financing with data‑driven underwriting and collections to expand credit access.",
    url: "www.fundingsocieties.com",
  },
  {
    name: "HeyMax",
    slug: "heymax",
    description:
      "Rewards platform that lets users earn miles and points simultaneously on everyday spending. Card linking and optimization algorithms maximize travel perks and improve user LTV.",
    url: "https://heymax.ai",
  },
  {
    name: "Hydroleap",
    slug: "hydroleap",
    description:
      "Electrochemical wastewater treatment platform that reduces chemical usage. Automation and energy efficiency lower OPEX and improve ESG outcomes for factories and data centers.",
    url: "https://www.hydroleap.com/",
  },
  {
    name: "Klleon",
    slug: "klleon",
    description:
      "Klleon turns screens into multilingual, conversational concierges via an on-device digital-human SDK—real-time, privacy-safe dialogue, OEM-integrated(Samsung/LG and so on), and built to scale.",
    url: "https://www.klleon.io/about",
  },
  {
    name: "Midwest Composites",
    slug: "midwest-composites",
    description:
      "Company developing and manufacturing advanced composites, supplying lightweight, high-strength materials for aerospace and automotive to boost performance and energy efficiency — while championing sustainability with renewable, plant-based sources.",
    url: "https://midwestcomposites.com.my/",
  },
  {
    name: "Mighty Jaxx",
    slug: "mighty-jaxx",
    description:
      "The Mighty Jaxx Group is a global network of brands and creators dedicated to bringing the future of pop culture into homes across the world. Mighty Jaxx partners with the world’s most iconic entertainment companies to craft experiences and cross-platform storytelling that resonate across both physical and digital worlds.",
    url: "https://mightyjaxx.com",
  },
  {
    name: "NewID",
    slug: "newid",
    description:
      "Runs FAST/AVOD platforms focused on Korean content, with strong global traction across TV, mobility, and ads. Profitable in 2025 (~$7M rev), planning Series B. Backed by NEW, leveraging AI monetization.",
    url: "http://www.its-newid.com",
  },
  {
    name: "Quantified Energy",
    slug: "quantified-energy",
    description:
      "Quantified Energy is a solar deep-tech company from Singapore leveraging the patented autonomous drone electroluminescence (EL) mapping technology and AI-driven data analytics to inspect and assess the health of solar PV power plants, facilitating optimized operations and proactive maintenance.",
    url: "https://quantified-energy.com/",
  },
  {
    name: "Rekosistem",
    slug: "rekosistem",
    description:
      "Waste and circularity data platform. Tracks collection, sorting and recycling to provide traceability, enabling enterprises and cities to cut emissions and manage circular economy KPIs.",
    url: "https://rekosistem.com/",
  },
  {
    name: "Seedflex",
    slug: "seedflex",
    description:
      "Provides flexible revolving working‑capital lines for SMEs. Data‑driven underwriting on sales and cash‑flow signals enables rapid access to funds and smoother cash management.",
    url: "https://www.seedflex.com/",
  },
  {
    name: "SoBanHang",
    slug: "sobanhang",
    description:
      "Vietnam‑focused MSME retail app combining POS, inventory, and online sales. Digitizes cash‑based trade by streamlining ordering, payments and procurement in a single app.",
    url: "https://sobanhang.com",
  },
  {
    name: "Speedoc",
    slug: "speedoc",
    description:
      "Virtual clinic and home‑care platform offering telemedicine, house‑call doctors and nurses, medication delivery, and virtual wards, enabling comprehensive at‑home acute and chronic care.",
    url: "https://sg.speedoc.com/",
  },
  {
    name: "Ternakin",
    slug: "ternakin",
    description:
      "Aquaculture company building a scalable aquaculture ecosystem through co-ownership farms, value-added fish processing, and a transparent supply chain for sustainable food systems.",
    url: "https://ternakin.co/en/",
  },
  {
    name: "Viact",
    slug: "viact",
    description:
      "AI powered safety monitoring for high-risk industries, detecting PPE gaps, fall and ergonomic risks with real-time alerts and reports to prevent incidents.",
    url: "https://www.viact.ai/",
  },
];

const TOP_STARTUP_FINALISTS_BY_YEAR = {
  2025: {
    year: "2025",
    startups: TOP_STARTUPS,
    imageDirectory: "/top-50-startup",
    title: "Top 50 Startups of NTT Startup Challenge 2025",
    description:
      "We extend our heartfelt congratulations to the Top 50 startups of the NTT Startup Challenge 2025. Your innovation, passion, and determination have set you apart, and we deeply appreciate the hard work and creativity you have demonstrated. This achievement is a testament to your commitment to driving positive change and shaping the future of technology and business.",
  },
  2026: {
    year: "2026",
    startups: TOP_STARTUPS_2026,
    imageDirectory: "/top-50-startup-2026",
    title: "Top 50 Startups of NTT Startup Challenge 2026",
    description:
      "We extend our heartfelt congratulations to the Top 50 startups of the NTT Startup Challenge 2026. Your innovation, passion, and determination have set you apart, and we deeply appreciate the hard work and creativity you have demonstrated. This achievement is a testament to your commitment to driving positive change and shaping the future of technology and business.",
  },
};

export {
  TOP_STARTUPS,
  TOP_STARTUPS_2026,
  TOP_STARTUPS_20,
  TOP_STARTUPS_10,
  TOP_STARTUP_FINALISTS_BY_YEAR,
};
