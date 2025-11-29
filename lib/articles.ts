export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  author: {
    name: string
    avatar: string
    role: string
  }
  readTime: string
  date: string
  tags: string[]
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "gpt-5-announcement",
    title: "OpenAI Unveils GPT-5: The Architecture That Changes Everything",
    excerpt:
      "A deep dive into the revolutionary multimodal reasoning capabilities and what it means for the future of AI development.",
    content: `The artificial intelligence landscape has been forever altered with OpenAI's announcement of GPT-5, a model that doesn't just iterate on its predecessors but fundamentally reimagines what large language models can achieve.

At the heart of GPT-5 lies a revolutionary architecture that the team calls "Contextual Reasoning Mesh" (CRM). Unlike previous transformer-based models that process information in a relatively linear fashion, CRM enables the model to maintain and manipulate multiple reasoning pathways simultaneously.

## Key Improvements

**Multimodal Native Processing**
GPT-5 was trained from the ground up on text, images, audio, and video simultaneously. This isn't bolted-on multimodality—it's fundamental to how the model understands the world.

**Dynamic Context Windows**
The model can now adaptively expand its context window from 128K to 2M tokens based on task complexity, managing computational resources more efficiently than ever before.

**Reduced Hallucinations**
Through a novel "verification loop" architecture, GPT-5 achieves a 94% reduction in factual hallucinations compared to GPT-4, making it significantly more reliable for production applications.

## Performance Benchmarks

In standardized testing, GPT-5 achieved remarkable results:
- **MMLU**: 92.4% (vs GPT-4's 86.4%)
- **HumanEval**: 95.1% (vs 67.0%)
- **MATH**: 89.7% (vs 42.5%)

The implications for software development, scientific research, and creative industries are profound. Early access partners report productivity gains of 40-60% across various knowledge work tasks.

## What's Next

OpenAI has indicated that GPT-5 will be available to ChatGPT Plus subscribers within the next month, with API access following shortly after. Enterprise customers will receive priority access through the existing partnership program.

The race for AGI continues, but with GPT-5, OpenAI has demonstrated that each step forward can be more than incremental—it can be transformational.`,
    category: "AI",
    image: "/futuristic-ai-neural-network-visualization-dark-cy.jpg",
    author: {
      name: "Sarah Chen",
      avatar: "/female-tech-journalist-avatar.jpg",
      role: "AI Editor",
    },
    readTime: "8 min",
    date: "Nov 26, 2025",
    tags: ["OpenAI", "GPT-5", "Large Language Models", "Artificial Intelligence"],
  },
  {
    id: "2",
    slug: "quantum-computing-google",
    title: "Quantum Computing Breakthrough: Google's New 1000-Qubit Processor",
    excerpt:
      "Google's latest quantum chip achieves unprecedented error correction rates, bringing practical quantum computing closer to reality.",
    content: `Google's quantum computing division has unveiled Willow Pro, a 1000-qubit quantum processor that represents a significant leap toward practical quantum computing applications.

## The Breakthrough

The Willow Pro achieves what many thought was years away: stable quantum operations with error rates below the fault-tolerant threshold. This means quantum calculations can now be performed reliably enough for real-world applications.

**Key Specifications:**
- 1,024 physical qubits
- 72 logical qubits (error-corrected)
- Coherence time: 1.2 milliseconds
- Two-qubit gate fidelity: 99.7%

## Real-World Impact

This breakthrough opens doors for:
- Drug discovery and molecular simulation
- Financial modeling and optimization
- Cryptographic applications
- Climate modeling

Google has announced partnerships with pharmaceutical giants and financial institutions to begin testing practical applications within the next 18 months.`,
    category: "Quantum",
    image: "/quantum-computer-chip-blue-glow-dark.jpg",
    author: {
      name: "Marcus Webb",
      avatar: "/male-tech-journalist-avatar.jpg",
      role: "Science Editor",
    },
    readTime: "6 min",
    date: "Nov 26, 2025",
    tags: ["Google", "Quantum Computing", "Technology", "Science"],
  },
  {
    id: "3",
    slug: "local-ai-smartphones",
    title: "The Rise of Local AI: Running LLMs on Your Smartphone",
    excerpt:
      "New compression techniques enable powerful language models to run entirely on mobile devices without cloud connectivity.",
    content: `The future of AI isn't just in the cloud—it's in your pocket. New advances in model compression and mobile chip architecture are making it possible to run sophisticated language models entirely on smartphones.

## The Technology

Researchers at MIT and Qualcomm have developed a new quantization technique called "Adaptive Sparse Quantization" (ASQ) that reduces model sizes by 95% while retaining 92% of the original model's capabilities.

**What This Means:**
- 7B parameter models running on flagship phones
- Sub-100ms inference times
- Complete privacy—data never leaves your device
- Works without internet connectivity

## Available Now

Several apps are already leveraging this technology:
- **LocalChat**: A fully offline AI assistant
- **PrivateTranslate**: Real-time translation without cloud services
- **SecureWrite**: AI writing assistance that keeps your data local

The implications for privacy-conscious users and regions with limited connectivity are enormous.`,
    category: "AI",
    image: "/smartphone-ai-processor-neural-network-dark.jpg",
    author: {
      name: "Alex Rivera",
      avatar: "/tech-writer-avatar.png",
      role: "Mobile Tech Writer",
    },
    readTime: "4 min",
    date: "Nov 26, 2025",
    tags: ["Mobile AI", "Smartphones", "Privacy", "Edge Computing"],
  },
  {
    id: "4",
    slug: "amd-zen-6-architecture",
    title: "AMD Zen 6 Architecture Deep Dive",
    excerpt:
      "Exclusive look at AMD's next-generation CPU architecture promising 40% IPC improvements and revolutionary power efficiency.",
    content: `AMD is preparing to shake up the processor market once again with Zen 6, an architecture that promises not just incremental improvements but a fundamental rethinking of how CPUs should be designed.

## Architecture Overview

Zen 6 moves to a 3nm process node manufactured by TSMC, but the improvements go far beyond simple transistor shrinkage.

**Key Features:**
- New "Infinity Fabric 4.0" interconnect
- Integrated NPU for AI acceleration
- 40% IPC improvement over Zen 5
- 30% better performance per watt

## Desktop Lineup

The consumer lineup will include:
- Ryzen 9 9950X: 24 cores / 48 threads
- Ryzen 7 9800X: 16 cores / 32 threads
- Ryzen 5 9600X: 8 cores / 16 threads

Expected pricing starts at $299 for the Ryzen 5, with the flagship Ryzen 9 targeting the $649 price point.

## Release Timeline

AMD has confirmed a Q2 2026 launch for desktop parts, with mobile variants following in Q3.`,
    category: "Hardware",
    image: "/amd-cpu-processor-red-accents-dark.jpg",
    author: {
      name: "James Liu",
      avatar: "/hardware-reviewer-avatar.jpg",
      role: "Hardware Editor",
    },
    readTime: "8 min",
    date: "Nov 25, 2025",
    tags: ["AMD", "Zen 6", "CPU", "Hardware"],
  },
  {
    id: "5",
    slug: "starlink-v3",
    title: "Starlink v3: Satellite Internet Gets a Major Upgrade",
    excerpt: "SpaceX's new satellite constellation promises gigabit speeds and sub-10ms latency for global coverage.",
    content: `SpaceX has begun deploying its third-generation Starlink satellites, and the improvements are substantial enough to challenge traditional fiber internet in many scenarios.

## What's New

**Speed Improvements:**
- Download: Up to 1 Gbps (vs 250 Mbps on v2)
- Upload: Up to 200 Mbps (vs 40 Mbps on v2)
- Latency: 8-12ms (vs 20-40ms on v2)

**Coverage Expansion:**
- Full global coverage including polar regions
- Better performance in dense urban areas
- Maritime and aviation services enhanced

## Pricing

Starlink v3 service will be offered at:
- Residential: $120/month
- Business: $250/month
- Maritime: $5,000/month

Hardware costs remain at $499 for the standard kit.`,
    category: "Tech",
    image: "/satellite-earth-orbit-space-dark.jpg",
    author: {
      name: "Emily Foster",
      avatar: "/tech-correspondent-avatar.jpg",
      role: "Tech Correspondent",
    },
    readTime: "5 min",
    date: "Nov 25, 2025",
    tags: ["SpaceX", "Starlink", "Satellite Internet", "Telecommunications"],
  },
  {
    id: "6",
    slug: "best-mechanical-keyboards-2025",
    title: "The Best Mechanical Keyboards of 2025",
    excerpt: "Our comprehensive guide to the top mechanical keyboards for gaming, typing, and everything in between.",
    content: `After testing over 50 mechanical keyboards this year, we've compiled our definitive guide to the best options across every category.

## Best Overall: Keychron Q Pro 2

The Keychron Q Pro 2 strikes the perfect balance between build quality, customization, and value. Its gasket-mounted design provides excellent acoustics, and the QMK/VIA support means endless customization.

**Price:** $189 | **Switch Options:** Pre-built with various switches

## Best for Gaming: Wooting 80HE

The Wooting 80HE's analog switches provide an unfair advantage in competitive gaming. The adjustable actuation points (0.1mm-4mm) and rapid trigger technology make it our top gaming pick.

**Price:** $199 | **Switch Options:** Lekker switches (analog)

## Best Budget: Epomaker TH80 Pro

You don't have to spend a fortune for a great typing experience. The TH80 Pro offers hot-swappable switches, wireless connectivity, and excellent build quality at an unbeatable price.

**Price:** $79 | **Switch Options:** Various Gateron switches

## Best Premium: Mode Sonnet

For those who want the absolute best, the Mode Sonnet's machined aluminum case, custom tuned switches, and impeccable build quality justify its premium price tag.

**Price:** $399+ | **Switch Options:** Fully customizable`,
    category: "Guides",
    image: "/mechanical-keyboard-rgb-dark-background.jpg",
    author: {
      name: "Chris Martinez",
      avatar: "/tech-reviewer-avatar.png",
      role: "Peripherals Editor",
    },
    readTime: "10 min",
    date: "Nov 24, 2025",
    tags: ["Keyboards", "Mechanical Keyboards", "Buying Guide", "Peripherals"],
  },
  {
    id: "7",
    slug: "tesla-bot-gen-3",
    title: "Tesla Bot Gen 3: Humanoid Robots Enter the Workplace",
    excerpt: "Tesla's latest Optimus robot can now perform complex assembly tasks with human-like dexterity.",
    content: `Tesla's Optimus program has reached a significant milestone with the Gen 3 robot, which is now being deployed in limited numbers across Tesla's manufacturing facilities.

## Capabilities

The Gen 3 Optimus can:
- Walk at 5 mph on varied terrain
- Lift up to 45 pounds
- Manipulate small objects with 0.5mm precision
- Operate continuously for 8 hours

## Workplace Integration

Tesla reports that Optimus Gen 3 units are now handling:
- Parts sorting and organization
- Light assembly tasks
- Quality inspection
- Inventory management

## Availability

Tesla plans to make Optimus available to other manufacturers by 2027, with an estimated price of $25,000-30,000 per unit. Lease options will also be available.`,
    category: "Robotics",
    image: "/humanoid-robot-futuristic-dark-factory.jpg",
    author: {
      name: "Nina Patel",
      avatar: "/robotics-journalist-avatar.jpg",
      role: "Robotics Editor",
    },
    readTime: "7 min",
    date: "Nov 24, 2025",
    tags: ["Tesla", "Robotics", "Optimus", "Automation"],
  },
  {
    id: "8",
    slug: "m4-macbook-pro",
    title: "M4 MacBook Pro First Look: Apple's Most Powerful Laptop Yet",
    excerpt: "Apple's M4 chip brings unprecedented performance to the MacBook Pro lineup with incredible efficiency.",
    content: `Apple has unveiled the M4 MacBook Pro, and it's a beast. The new M4 chip, built on TSMC's 3nm process, delivers performance that rivals desktop workstations while sipping power.

## M4 Chip Specifications

- **CPU:** 12 performance cores + 4 efficiency cores
- **GPU:** 40-core (M4 Max)
- **Neural Engine:** 18-core, 38 TOPS
- **Unified Memory:** Up to 192GB

## Benchmark Results

In our testing:
- **Geekbench 6 Single-Core:** 3,847
- **Geekbench 6 Multi-Core:** 26,429
- **Cinebench R24:** 2,156

These numbers put the M4 Max ahead of many desktop CPUs while consuming a fraction of the power.

## Battery Life

Despite the performance gains, battery life remains exceptional:
- Video playback: 24 hours
- Web browsing: 18 hours
- Development workloads: 12 hours

## Pricing

- M4 MacBook Pro 14": Starting at $1,999
- M4 Pro MacBook Pro 14": Starting at $2,499
- M4 Max MacBook Pro 16": Starting at $3,499`,
    category: "Hardware",
    image: "/macbook-pro-m4-laptop-dark-minimal.jpg",
    author: {
      name: "David Kim",
      avatar: "/apple-reviewer-avatar.jpg",
      role: "Apple Editor",
    },
    readTime: "9 min",
    date: "Nov 23, 2025",
    tags: ["Apple", "MacBook Pro", "M4", "Laptop"],
  },
  {
    id: "9",
    slug: "sony-a1-ii",
    title: "Sony A1 II Review: The Flagship Redefined",
    excerpt: "Sony's second-generation A1 sets a new benchmark for professional mirrorless cameras.",
    content: `The original Sony A1 was already an exceptional camera. The A1 II takes everything great about it and adds meaningful improvements that professional photographers will appreciate.

## Key Improvements

**Autofocus:**
- New AI-powered subject recognition
- 759 phase-detection points
- Real-time Eye AF for humans, animals, birds, and vehicles

**Image Quality:**
- 50.1MP full-frame sensor (improved BSI design)
- ISO 100-32000 (expandable to 50-102400)
- 15+ stops of dynamic range

**Video:**
- 8K60p internal recording
- 4K120p with full pixel readout
- ProRes and BRAW support

## Handling

The ergonomics have been refined with:
- Deeper grip
- Improved button placement
- New articulating screen mechanism

## Our Verdict

**Score: 9.4/10**

The Sony A1 II is the most capable all-around camera we've ever tested. It excels at sports, wildlife, portraits, and video—there's simply nothing it can't do well.

**Price:** $6,499 body only`,
    category: "Reviews",
    image: "/sony-a1-ii-mirrorless-camera-dark-studio.jpg",
    author: {
      name: "Rachel Wong",
      avatar: "/camera-reviewer-avatar.jpg",
      role: "Camera Editor",
    },
    readTime: "12 min",
    date: "Nov 22, 2025",
    tags: ["Sony", "Camera", "Mirrorless", "Photography"],
  },
  {
    id: "10",
    slug: "rtx-5090-review",
    title: "NVIDIA RTX 5090 Review: The New Performance King",
    excerpt: "NVIDIA's flagship graphics card delivers unprecedented performance for 4K and 8K gaming.",
    content: `The RTX 5090 is here, and it's everything we hoped it would be. NVIDIA's new flagship GPU is a monster that redefines what's possible in real-time rendering.

## Specifications

- **Architecture:** Blackwell
- **CUDA Cores:** 21,760
- **VRAM:** 32GB GDDR7
- **Memory Bus:** 512-bit
- **TDP:** 450W

## Gaming Performance

At 4K with ray tracing and DLSS 4:
- Cyberpunk 2077: 142 fps
- Alan Wake 2: 128 fps
- Black Myth: Wukong: 156 fps

At 8K with DLSS:
- Most games run at 60+ fps
- First truly playable 8K gaming GPU

## Content Creation

The 32GB of VRAM makes this card a beast for:
- 3D rendering
- AI image generation
- Video editing
- Scientific computing

## Power and Cooling

The 450W TDP requires a robust PSU (850W minimum) and good case airflow. The Founders Edition cooling solution is impressive but loud under load.

## Value Proposition

At $1,999, the RTX 5090 is expensive but delivers performance that was impossible at any price just a year ago.

**Our Score: 9.2/10**`,
    category: "Reviews",
    image: "/nvidia-rtx-5090-graphics-card-dark-background.jpg",
    author: {
      name: "James Liu",
      avatar: "/hardware-reviewer-avatar.jpg",
      role: "Hardware Editor",
    },
    readTime: "11 min",
    date: "Nov 21, 2025",
    tags: ["NVIDIA", "RTX 5090", "GPU", "Graphics Card", "Gaming"],
  },
]

export interface Deal {
  id: string
  slug: string
  title: string
  description: string
  image: string
  originalPrice: number
  salePrice: number
  discount: number
  store: string
  link: string
  category: string
  endDate: string
}

export const deals: Deal[] = [
  {
    id: "1",
    slug: "rtx-5090",
    title: "NVIDIA RTX 5090 Founders Edition",
    description: "The most powerful consumer GPU ever made. Limited stock available at this price.",
    image: "/nvidia-rtx-5090-graphics-card-dark-background.jpg",
    originalPrice: 1999,
    salePrice: 1649,
    discount: 18,
    store: "Best Buy",
    link: "#",
    category: "GPUs",
    endDate: "Nov 30, 2025",
  },
  {
    id: "2",
    slug: "m4-macbook-pro-16",
    title: 'M4 MacBook Pro 16" (M4 Pro, 36GB)',
    description: "Apple's professional laptop with M4 Pro chip and 36GB unified memory.",
    image: "/macbook-pro-m4-laptop-dark-minimal.jpg",
    originalPrice: 2999,
    salePrice: 2699,
    discount: 10,
    store: "Amazon",
    link: "#",
    category: "Laptops",
    endDate: "Dec 2, 2025",
  },
  {
    id: "3",
    slug: "sony-a1-ii-bundle",
    title: "Sony A1 II + 24-70mm f/2.8 GM II Bundle",
    description: "Professional camera body with Sony's premium standard zoom lens.",
    image: "/sony-a1-ii-mirrorless-camera-dark-studio.jpg",
    originalPrice: 8998,
    salePrice: 7999,
    discount: 11,
    store: "B&H Photo",
    link: "#",
    category: "Cameras",
    endDate: "Nov 28, 2025",
  },
  {
    id: "4",
    slug: "keychron-q-pro-2",
    title: "Keychron Q Pro 2 Mechanical Keyboard",
    description: "Premium gasket-mounted mechanical keyboard with QMK/VIA support.",
    image: "/mechanical-keyboard-rgb-dark-background.jpg",
    originalPrice: 189,
    salePrice: 149,
    discount: 21,
    store: "Keychron",
    link: "#",
    category: "Peripherals",
    endDate: "Dec 1, 2025",
  },
  {
    id: "5",
    slug: "lg-oled-c4-65",
    title: 'LG OLED C4 65" 4K Smart TV',
    description: "Premium OLED TV with Dolby Vision, 120Hz, and HDMI 2.1 for gaming.",
    image: "/lg-oled-tv-dark-background.jpg",
    originalPrice: 2499,
    salePrice: 1799,
    discount: 28,
    store: "Best Buy",
    link: "#",
    category: "TVs",
    endDate: "Nov 29, 2025",
  },
  {
    id: "6",
    slug: "amd-ryzen-9-9950x",
    title: "AMD Ryzen 9 9950X Processor",
    description: "24-core, 48-thread desktop processor with Zen 5 architecture.",
    image: "/amd-cpu-processor-red-accents-dark.jpg",
    originalPrice: 649,
    salePrice: 549,
    discount: 15,
    store: "Newegg",
    link: "#",
    category: "CPUs",
    endDate: "Dec 5, 2025",
  },
]

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getDealBySlug(slug: string): Deal | undefined {
  return deals.find((deal) => deal.slug === slug)
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return articles
    .filter(
      (a) =>
        a.id !== article.id && (a.category === article.category || a.tags.some((tag) => article.tags.includes(tag))),
    )
    .slice(0, limit)
}
