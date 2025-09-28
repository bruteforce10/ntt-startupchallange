const TOP_STARTUPS = [
    {
      name: "Ackcio",
      slug: "ackcio",
      description: "Industrial monitoring via long-range mesh networks connecting instrumentation sensors. Real-time geotechnical and structural monitoring improves safety and uptime in construction, mining and rail.",
      url: "https://www.ackcio.com/"
    },
    {
      name: "AI Seer",
      slug: "ai-seer",
      description: "Offers Facticity.AI, a platform that verifies the authenticity of text, audio and video, helping organizations counter misinformation and maintain brand safety in the gen-AI era.",
      url: "https://aiseer.co/"
    },
    {
      name: "Ailytics",
      slug: "ailtytics",
      description: "Computer vision for construction and manufacturing sites detecting unsafe acts and near-misses. Dashboards drive corrective actions and safety KPI gains.",
      url: "https://ailytics.ai/"
    },
    {
      name: "Aktivo Labs",
      slug: "aktivolabs",
      description: "Aktivo Labs is a Singapore-founded HealthTech company that creates predictive and preventive health journeys by applying proprietary AI models to behavioral and biometric data.",
      url: "www.aktivolabs.com"
    },
    {
      name: "Alterno",
      slug: "alterno",
      description: "Provides industrial energy-efficiency and renewable optimization solutions through sand-based thermal energy storage.",
      url: "https://alterno.net/"
    },
    {
      name: "Assemblr",
      slug: "assemblr",
      description: "Browser-based 3D/AR creation platform. No-code authoring and distribution for education and marketing.",
      url: "https://edu.assemblrworld.com/"
    },
    {
      name: "BarkingDog Technology Inc. (AI Amaze)",
      slug: "ai-amaze",
      description: "AI+XR technologies offering cross-platform AI agent solutions. Powers realistic virtual agents for tourism, retail, factories, and healthcare.",
      url: "https://www.barkingdog.ai/"
    },
    {
      name: "Betterdata",
      slug: "betterdata",
      description: "Synthetic data platform that preserves statistical properties while mitigating re-identification risk.",
      url: "www.betterdata.ai"
    },
    {
      name: "bootloader",
      slug: "bootloader",
      description: "Open-source lightweight bootloader supporting multiple architectures.",
      url: "https://bootloader.studio/"
    },
    {
      name: "butler",
      slug: "butler",
      description: "Automates property and office operations—cleaning, inspections and work orders.",
      url: "https://www.butlerasia.com"
    },
    {
      name: "Cakap",
      slug: "cakap",
      description: "Indonesia-based edtech offering language and vocational courses via mobile.",
      url: "https://cakap.com"
    },
    {
      name: "CarnoFleet",
      slug: "carnofleet",
      description: "Plug & play cold chain solutions converting vehicles into temperature controlled units.",
      url: "https://carnotfleet.com"
    },
    {
      name: "CitySage",
      slug: "citysage",
      description: "Climate-tech startup using climate data and AI to visualize risks and adaptation strategies.",
      url: "https://www.citysage.my"
    },
    {
      name: "Cleantech & Beyond",
      slug: "cleantech-&-beyond",
      description: "Deep-tech spin-off developing advanced materials and smart sensing technologies.",
      url: "https://www.cleantech-beyond.com/"
    },
    {
      name: "Cred Shields",
      slug: "cred-shields",
      description: "Provides vulnerability visibility and protection for web apps and APIs.",
      url: "https://solidityscan.com/"
    },
    {
      name: "Expedock",
      slug: "expedock",
      description: "Automates freight forwarding and customs paperwork with AI.",
      url: "https://expedock.com"
    },
    {
      name: "Fair Mart",
      slug: "fair-mart",
      description: "Unified Commerce Platform empowering modern retailers to grow their business.",
      url: "https://fairmart.app/"
    },
    {
      name: "FathomX",
      slug: "fathomx",
      description: "Spin-off for breast-cancer AI, assists mammography reading to reduce false positives.",
      url: "https://www.fathomx.co/"
    },
    {
      name: "Float16",
      slug: "float16",
      description: "Software and semiconductor technology to optimize AI inference and numerical computing.",
      url: "https://float16.cloud/"
    },
    {
      name: "Funding Societies",
      slug: "funding-societies",
      description: "Largest digital financing platform for SMEs in Southeast Asia.",
      url: "www.fundingsocieties.com"
    },
    {
      name: "Groundup AI",
      slug: "groundup-ai",
      description: "Applies ML to sound and vibration to predict equipment failures.",
      url: "https://groundup.ai/"
    },
    {
      name: "HeyMax",
      slug: "heymax",
      description: "Rewards platform letting users earn miles and points simultaneously on spending.",
      url: "https://heymax.ai"
    },
    {
      name: "Hydgen",
      slug: "hydgen",
      description: "Modular, on-site green hydrogen electrolyzers for high-purity hydrogen production.",
      url: ""
    },
    {
      name: "Hydroleap",
      slug: "hydroleap",
      description: "Electrochemical wastewater treatment reducing chemical usage.",
      url: "https://www.hydroleap.com/"
    },
    {
      name: "Klimatech",
      slug: "klimatech",
      description: "Provides emissions visibility, reduction planning and credit connectivity.",
      url: "https://klimatech.ph/"
    },
    {
      name: "Klleon",
      slug: "klleon",
      description: "Turns screens into multilingual, conversational concierges via digital-human SDK.",
      url: "https://www.klleon.io/about"
    },
    {
      name: "Midwest Composites",
      slug: "midwest-composites",
      description: "Develops and manufactures advanced composites for aerospace and automotive.",
      url: "https://midwestcomposites.com.my/"
    },
    {
      name: "Mighty Jaxx",
      slug: "mighty-jaxx",
      description: "Global network of brands and creators bringing pop culture into homes worldwide.",
      url: "https://mightyjaxx.com"
    },
    {
      name: "nanoSkunkWorkX",
      slug: "nanoskunkworkx",
      description: "R&D in nanomaterials and semiconductor devices bridging design to prototyping.",
      url: "https://nanoskunkworkx.com/"
    },
    {
      name: "NewID",
      slug: "newid",
      description: "Runs FAST/AVOD platforms focused on Korean content with global traction.",
      url: "http://www.its-newid.com"
    },
    {
      name: "OneInbox",
      slug: "oneinbox",
      description: "Unified inbox for email, social and messaging with shared views and SLA tracking.",
      url: "https://oneinbox.ai/"
    },
    {
      name: "pQCee",
      slug: "pqcee",
      description: "Cybersecurity startup developing post-quantum cryptography technologies.",
      url: "https://www.pqcee.com"
    },
    {
      name: "Protos Labs",
      slug: "protos-labs",
      description: "Builds AI agents that turn cyber threat data into actionable intelligence.",
      url: "https://protoslabs.io"
    },
    {
      name: "Qritive",
      slug: "qritive",
      description: "AI for digital pathology to assist cancer detection and improve diagnostic accuracy.",
      url: "https://www.qritive.com"
    },
    {
      name: "Quantified Energy",
      slug: "quantified-energy",
      description: "Uses infrared, drones and analytics to detect PV module anomalies.",
      url: "https://quantified-energy.com/"
    },
    {
      name: "QuikBot Technologies",
      slug: "quikbot-technologies",
      description: "Chatbot automating e-commerce support, reducing CS costs and improving retention.",
      url: "https://www.quikbot.ai"
    },
    {
      name: "Rekosistem",
      slug: "rekosistem",
      description: "Waste and circularity data platform tracking collection, sorting and recycling.",
      url: "https://rekosistem.com/"
    },
    {
      name: "Scantist AI",
      slug: "scantist-ai",
      description: "Spin-off offering SCA and application security analysis, automates SBOM generation.",
      url: "https://scantist.com/"
    },
    {
      name: "Seedflex",
      slug: "seedflex",
      description: "Flexible revolving working-capital lines for SMEs with data-driven underwriting.",
      url: "https://www.seedflex.com/"
    },
    {
      name: "Shieldbase",
      slug: "shieldbase",
      description: "The AI Operating System that unifies tools, governs access, and embeds intelligence.",
      url: "https://shieldbase.ai"
    },
    {
      name: "SoBanHang",
      slug: "sobanhang",
      description: "Vietnam-focused MSME retail app combining POS, inventory, and online sales.",
      url: "https://sobanhang.com"
    },
    {
      name: "Speedoc",
      slug: "speedoc",
      description: "Virtual clinic and home-care platform offering telemedicine, house calls, and delivery.",
      url: "https://sg.speedoc.com/"
    },
    {
      name: "Surplus Indonesia",
      slug: "surplus-indonesia",
      description: "AI-powered circular recommerce platform redistributing surplus goods at discounts.",
      url: "https://surplus.id/"
    },
    {
      name: "TaggIoT",
      slug: "taggiot",
      description: "Unified IoT device management for data collection, visualization and alerts.",
      url: "https://taggiot.com"
    },
    {
      name: "Ternakin",
      slug: "ternakin",
      description: "Aquaculture company building scalable ecosystems through co-ownership farms.",
      url: "https://ternakin.co/en/"
    },
    {
      name: "Tictag",
      slug: "tictag",
      description: "Crowdsourcing platform providing AI data annotation via mobile participation.",
      url: "https://tictag.io"
    },
    {
      name: "uHoo",
      slug: "uhoo",
      description: "IoT sensors and dashboards tracking 9+ indoor air quality metrics.",
      url: "https://getuhoo.com"
    },
    {
      name: "UIB",
      slug: "uib",
      description: "Platform unifying messaging channels with generative AI for enterprise engagement.",
      url: "https://uib.ai"
    },
    {
      name: "Viact",
      slug: "viact",
      description: "AI powered safety monitoring for high-risk industries with real-time alerts.",
      url: "https://www.viact.ai/"
    },
    {
      name: "Yuno",
      slug: "yuno",
      description: "Payment orchestration platform unifying methods and fraud tools for enterprises.",
      url: "https://y.uno/"
    }
  ];
  
  export default TOP_STARTUPS;
  