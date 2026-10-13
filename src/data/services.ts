import { company } from './content';

export type ServiceFAQ = { question: string; answer: string };
export type ServiceSection = { heading?: string; paragraphs: string[] };
export type ServiceHighlight = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  intro: string;
  heroImage: string;
  cardImage: string;
  icon: string;
  sections: ServiceSection[];
  highlights: ServiceHighlight[];
  ctaHeading: string;
  ctaSubheading: string;
  faqs: ServiceFAQ[];
  testimonials: { text: string }[];
  subServices?: { title: string; description: string; slug: string }[];
};

export const servicesDetailed: ServiceDetail[] = [
  {
    slug: 'buy-and-sale',
    title: 'Real Estate in UAE',
    shortTitle: 'Buy and Sale',
    tagline:
      'We assist with property selection, calculating ROI, and searching for profitable investment opportunities.',
    intro:
      'Are you considering relocation, passive income, or winter getaway apartments but finding it challenging to navigate the UAE real estate market? First Select is here to help you unravel these mysteries in just three minutes.',
    heroImage:
      'https://images.pexels.com/photos/1415794/pexels-photo-1415794.jpeg?auto=compress&cs=tinysrgb&w=2400',
    cardImage:
      'https://images.pexels.com/photos/1415794/pexels-photo-1415794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'building',
    sections: [
      {
        heading: 'How to Make a Profitable Real Estate Investment in the UAE?',
        paragraphs: [
          "We offer comprehensive services for buying, selling, and renting properties in the United Arab Emirates. Our team comprises commercial and residential real estate specialists across all price ranges and classes. Whether you're looking to buy an apartment in Dubai, find an office for your company, purchase a home for your parents, or sell a studio as you plan to move, we've got you covered.",
          'We are well-versed in the UAE real estate market, constantly monitoring price dynamics in real-time and regularly updating our extensive database. Your manager will oversee your project from start to finish, offering the best solutions, and the leaders of First Select personally supervise the process, ready to provide expert answers and address any issues that may arise. With us, buying property in the UAE is a straightforward process.',
        ],
      },
      {
        heading: 'Most Popular Dubai Districts by Property Sales Volume',
        paragraphs: [
          'Here are the average apartment prices as of August 2023. Property prices in Dubai and the UAE are highly dynamic. We provide our clients with up-to-date prices, enabling property evaluation and comparisons with other options.',
          'Buying property with First Select guarantees maximum benefits and minimum stress.',
        ],
      },
      {
        heading: 'Make the Right Decision!',
        paragraphs: [
          'Investing in UAE real estate guarantees high returns and confidence in your future. First Select will find the best option for you. Contact us today for your first consultation.',
        ],
      },
    ],
    highlights: [
      {
        title: 'Full-Service Company',
        description:
          'We assist with property selection, renovating, finding tenants, and taking complete management under our wing.',
      },
      {
        title: 'Honest Consultations',
        description:
          "We provide a realistic assessment of opportunities and risks. We won't sell you something we wouldn't buy ourselves.",
      },
      {
        title: 'High Engagement',
        description:
          "Our company's management and managers are involved in all relocation stages and are always in touch with clients.",
      },
      {
        title: 'Experienced Team',
        description:
          'Our team includes professional brokers with over ten years of experience in the market.',
      },
      {
        title: 'Service',
        description:
          'We resolve all issues quickly and clearly, maintaining a high level of service, which is rare in the local market.',
      },
      {
        title: 'Safety',
        description:
          'We provide support in obtaining all necessary documents, and all services are strictly in compliance with UAE legislation.',
      },
    ],
    ctaHeading: 'Do you need help selecting real estate?',
    ctaSubheading: 'Get expert advice now!',
    faqs: [
      {
        question: 'What is a "Freehold Area"?',
        answer:
          "It's an area of the city where foreigners can purchase property outright (not just lease). For example, there are approximately 60 such areas in Dubai, varying numbers in other cities.",
      },
      {
        question: 'Is buying property in Dubai very expensive?',
        answer:
          'Dubai, like the UAE in general, is a costly location. The average price per square meter approaches USD 3,000 for high-quality real estate, which will increase over time. However, there are many options, and First Select will find the right one for you.',
      },
      {
        question: 'Are there high property taxes in the UAE?',
        answer:
          'There is no property tax in the UAE. However, property owners are not entirely exempt from fees; there are fees for building and infrastructure maintenance. The amount varies for each property and is calculated individually.',
      },
      {
        question: 'What is "Off-Plan"?',
        answer:
          "It refers to property in the city's architectural plans but has yet to be constructed. Buying it is advantageous, as developers usually require around 5% to 10% upfront. Immediately after making the deposit, you become the official owner. The remaining 95% to 90% can be paid during construction or after the building is completed.",
      },
      {
        question: 'Can I get a residency visa when buying a property?',
        answer:
          "Yes, it's possible. The property's value should be AED 2,000,000. You can obtain a residency visa for purchasing property worth AED 750,000.",
      },
    ],
    testimonials: [
      {
        text: 'My husband and I purchased an off-plan studio, and this year, we received the keys. We are delighted; everything matches the visualization. It even seems better than we initially imagined! Thanks for your work!',
      },
      {
        text: 'I am grateful to First Select for assistance with our relocation. They found an office within a concise timeframe, and it\'s genuinely an excellent property at a reasonable price. Keep up the good work, guys, you\'re great!',
      },
    ],
  },
  {
    slug: 'rent',
    title: 'Real Estate Rental in UAE',
    shortTitle: 'Rent',
    tagline:
      "First Select – An Agency with Its Own Database. We'll Find a Tenant According to Your Requirements.",
    intro:
      'Renting residential or commercial real estate in the UAE is a profitable decision. Even from a small studio, you can earn a minimum of $1,000 monthly. But you need to understand the market nuances to strike a good deal. Dedicate five minutes of your time, and First Select agency will guide you through the most significant aspects.',
    heroImage:
      'https://images.pexels.com/photos/31692133/pexels-photo-31692133.jpeg?auto=compress&cs=tinysrgb&w=2400',
    cardImage:
      'https://images.pexels.com/photos/31692133/pexels-photo-31692133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'key',
    sections: [
      {
        heading: 'Renting Real Estate in the Emirates: What You Should Know',
        paragraphs: [
          'The UAE is becoming increasingly popular for immigration, business relocation, and winter getaways. The demand for studio apartments or houses is rising, making it harder to find responsible tenants.',
          'As a landlord, you have a multitude of responsibilities:',
          'You can simplify matters by entrusting your property management to First Select. Our agency\'s objective is long-term, mutually beneficial cooperation.',
        ],
      },
      {
        heading: 'We Take Care of All Aspects of Renting Out Your Property',
        paragraphs: [
          'First Select will find a responsible and financially capable tenant, boosting your capital.',
        ],
      },
      {
        heading: 'Residential and Commercial Property Rental',
        paragraphs: [
          'We know the UAE real estate market is more complex than its European counterpart. Hence, we consistently keep our finger on the pulse and are ready to step in at any moment to address emerging issues. Another challenge is the level of service, which is significantly lower in the Emirates compared to CIS and European countries. The mission of the First Select team is to solve these problems: You receive top-notch European service in the Emirates.',
          "Furthermore, to maximize our client's comfort, we offer two weeks of free stay in any properties we rent at our expense. This way, you can maintain your rental income while enjoying the convenience of living in the UAE.",
        ],
      },
      {
        heading: 'We Know How to Rent Real Estate Profitably!',
        paragraphs: [
          'How Much Can You Earn from Renting Property in Dubai? Here are some popular investment options in residential real estate in the UAE that yield stable profits.',
          'Average Horizon: 3 - 6 months. Risk Level: Moderate. Suitable for Sub-Landlords and Those Who Already Own Apartments and Want to Increase Rental Income. You can invest at the initial construction stage and profit in two steps: first, from the property\'s value increase and then from rentals.',
          'Average Horizon: 6 - 12 months. Risk Level: Low. Suitable for Those Who Want to Preserve Capital and Shield It from Inflation. Cons: The property\'s value increase in such options is more prolonged.',
        ],
      },
    ],
    highlights: [
      {
        title: 'Full-Service Company',
        description:
          'We assist with property selection, renovating, finding tenants, and taking complete management under our wing.',
      },
      {
        title: 'Honest Consultations',
        description:
          "We provide a realistic assessment of opportunities and risks. We won't sell you something we wouldn't buy ourselves.",
      },
      {
        title: 'High Engagement',
        description:
          "Our company's management and managers are involved in all relocation stages and are always in touch with clients.",
      },
      {
        title: 'Experienced Team',
        description:
          'Our team includes professional brokers with over ten years of experience in the market.',
      },
      {
        title: 'Service',
        description:
          'We resolve all issues quickly and clearly, maintaining a high level of service, which is rare in the local market.',
      },
      {
        title: 'Safety',
        description:
          'We provide support in obtaining all necessary documents, and all services are strictly in compliance with UAE legislation.',
      },
    ],
    ctaHeading: 'We know how to rent real estate profitably!',
    ctaSubheading: 'Contact us for a consultation today.',
    faqs: [
      {
        question: 'What are the responsibilities of a tenant in the UAE?',
        answer:
          'The rights and responsibilities of parties involved in a lease are regulated by UAE legislation. Law No. 26 of 2007 and Law No. 33 of 2008 state that a tenant must pay rent within the specified period and, upon the contract\'s expiry, return the property to the landlord in the same condition it was when the tenant moved in. If the tenant has made any improvements at their own expense, they must leave them for the landlord without demanding compensation.',
      },
      {
        question: 'I want to rent out my property. What will be the tax?',
        answer:
          'This type of tax in the UAE is called Rental Income Tax, which amounts to 5% of your annual income.',
      },
      {
        question: 'Who will pay for utility bills and maintenance fees?',
        answer:
          'The tenant pays for gas, air conditioning, water, and electricity in a standard contract. On the other hand, the owner covers the expenses for property security, maintenance, landscaping, and more. However, everything is negotiable, and if you wish to avoid these payments altogether, we can find a tenant who agrees to cover them.',
      },
      {
        question: 'I need a residency visa. Does this mean I can\'t rent out property in the Emirates?',
        answer:
          'Not at all. Residency or citizenship is optional for landlords in the UAE.',
      },
      {
        question: 'Renting out commercial or residential property is new to me. What should I do?',
        answer:
          'When collaborating with First Select, you must do very little: sign a contract, inform us of your requirements, and await our candidate profiles. We\'ll schedule a convenient viewing time if you\'re in the UAE. If you\'re not in the UAE, you can trust us to select a tenant for you, or you can come for a viewing. In this case, we offer you a unique proposition: a two-week free stay in any of our properties. This way, you\'ll preserve your rental income without sacrificing comfort in the UAE.',
      },
    ],
    testimonials: [
      {
        text: 'We used First Select to find a long-term tenant for our Dubai apartment. Six months have passed since the beginning of the lease, and we haven\'t regretted it for a day. The tenant is very responsible, and the rental income is good. We recently checked the apartment, and it\'s in decent condition. Thanks for the assistance.',
      },
      {
        text: "We're pleased with the cooperation. We quickly found tenants for our office, completed the paperwork in a couple of weeks, and the tenant moved in right on the day of our departure. Thanks for the speedy work!",
      },
    ],
  },
  {
    slug: 'interior-design',
    title: 'Construction, Design and Finishing',
    shortTitle: 'Interior Design',
    tagline:
      'Our company provides a full range of services for the construction, design and finishing of real estate.',
    intro:
      'Our company provides a full range of services for the construction, design and finishing of real estate. From project planning to the final touches, our engineers and designers create spaces that meet all your requirements.',
    heroImage:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=2400',
    cardImage:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'paint',
    sections: [
      {
        heading: 'Our Construction and Design Services',
        paragraphs: [
          'We offer a comprehensive approach to construction, design, and finishing. Our team handles everything from initial project planning to final interior design, ensuring quality at every stage.',
        ],
      },
      {
        heading: 'Project Planning and General Construction',
        paragraphs: [
          'Our engineers will create a project that meets all your requirements. We handle every aspect of construction, from foundation to finishing, ensuring structural integrity and compliance with UAE building codes.',
        ],
      },
      {
        heading: 'Supervision',
        paragraphs: [
          'Our experts will supervise construction work from start to finish. We ensure that every stage of the process adheres to the approved project specifications and quality standards.',
        ],
      },
      {
        heading: 'Documentation Approval Support',
        paragraphs: [
          'Our staff will help resolve issues with documents for real estate in the UAE. We navigate the bureaucratic processes to ensure your project has all necessary permits and approvals.',
        ],
      },
      {
        heading: 'Fit-Out',
        paragraphs: [
          'Create comfort, warmth, and beauty. Our fit-out services transform spaces into ready-to-use properties with attention to every detail.',
        ],
      },
      {
        heading: 'Interior Design',
        paragraphs: [
          'The perfect design you have been dreaming of. Our designers create interiors that reflect your vision while maintaining functionality and elegance.',
        ],
      },
    ],
    highlights: [
      {
        title: 'Full-Service Company',
        description:
          'We assist with property selection, renovating, finding tenants, and taking complete management under our wing.',
      },
      {
        title: 'Honest Consultations',
        description:
          "We provide a realistic assessment of opportunities and risks. We won't sell you something we wouldn't buy ourselves.",
      },
      {
        title: 'High Engagement',
        description:
          "Our company's management and managers are involved in all relocation stages and are always in touch with clients.",
      },
      {
        title: 'Experienced Team',
        description:
          'Our team includes professional brokers with over ten years of experience in the market.',
      },
      {
        title: 'Service',
        description:
          'We resolve all issues quickly and clearly, maintaining a high level of service, which is rare in the local market.',
      },
      {
        title: 'Safety',
        description:
          'We provide support in obtaining all necessary documents, and all services are strictly in compliance with UAE legislation.',
      },
    ],
    ctaHeading: 'Ready to transform your property?',
    ctaSubheading: 'Get expert advice now!',
    faqs: [],
    subServices: [
      {
        title: 'Project Planning and General Construction',
        description: 'Our engineers will create a project that meets all your requirements.',
        slug: 'project-planning-and-general-construction',
      },
      {
        title: 'Supervision',
        description: 'Our experts will supervise construction work from start to finish.',
        slug: 'supervision',
      },
      {
        title: 'Documentation Approval Support',
        description: 'Our staff will help resolve issues with documents for real estate in the UAE.',
        slug: 'documentation-approval',
      },
      {
        title: 'Fit-Out',
        description: 'Create comfort, warmth, and beauty.',
        slug: 'fit-out',
      },
      {
        title: 'Interior Design',
        description: 'The perfect design you have been dreaming of.',
        slug: 'interior-design',
      },
    ],
    testimonials: [
      {
        text: 'Thanks to First Select for a great job. We ordered an apartment renovation as a gift for our parents, so there were a lot of difficulties. The builders did an excellent job. I was pleased not only with the good repairs, but also with the respectful attitude towards older people. I wholeheartedly recommend the team.',
      },
      {
        text: 'Thanks to First Select for the project for our family villa. It turned out what my wife and I wanted, even somewhere better. Now we want to order them an apartment design.',
      },
      {
        text: 'DEWA just issued confirmation! After ten unsuccessful attempts, I contacted First Select and received the paper the first time! Thank you!',
      },
      {
        text: 'Thank you First Select for your professionalism! We immediately put together an excellent project, a couple of details needed to be finalized - everything was done without any questions and in the best possible way. But the most important thing for me is that they themselves are involved in approving the project. We were looking for just such a company and did not regret it.',
      },
      {
        text: 'We ordered construction supervision for an office and were very pleased with the result. There are no violations, everything is exactly according to the project. For us, the first priority was to comply with the technical aspects so that the inspection would take place without problems. But appearance is also important, of course. In the end, everything turned out great. Thanks to First Select for a job well done.',
      },
    ],
  },
  {
    slug: 'consulting',
    title: 'Legal Support and Relocation Services',
    shortTitle: 'Consulting',
    tagline:
      "Moving with First Select - It's Minimal Hassle. We're Always Here to Help Solve Your Questions.",
    intro:
      'First Select agency offers a complete range of consulting services for relocation to the UAE. We collaborate with individuals and legal entities, guiding buying, selling, and renting (both long-term and short-term) of all real estate types. To learn more, please reach out to us via email or phone.',
    heroImage:
      'https://images.pexels.com/photos/8112169/pexels-photo-8112169.jpeg?auto=compress&cs=tinysrgb&w=2400',
    cardImage:
      'https://images.pexels.com/photos/8112169/pexels-photo-8112169.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'license',
    sections: [
      {
        heading: 'Legal Support by First Select: Range of Services',
        paragraphs: [
          "Completing transactions in the UAE for citizens of CIS countries is an exceptionally complex task. You need to be knowledgeable about the legislation, understand the structure of the state system, grasp the mentality, and ideally, even be proficient in Arabic. With this information, you may avoid making a mistake or, at the very least, spend excessive time on problem-solving. To avoid wasting your efforts in vain and missing out on profitable opportunities, we advise you to seek consultation from a specialist.",
          'First Select agency assists in addressing crucial issues during relocation:',
        ],
      },
      {
        heading: 'Assistance in Obtaining Residency Permits and Relocating Businesses',
        paragraphs: [
          'We provide assistance in obtaining residency permits and relocating businesses with real-life examples, not just words.',
          'We have thoroughly studied the legislation of the UAE and continuously track current changes. Therefore, we can find answers to any questions and even resolve complex issues.',
        ],
      },
      {
        heading: 'Your Success with First Select',
        paragraphs: [
          'Our team has real estate specialists who have worked in the UAE for many years. We solve over a hundred tasks of varying complexity yearly and will assist you, too. To get real estate consultations, please contact us via email or phone.',
        ],
      },
    ],
    highlights: [
      {
        title: 'Full-Service Company',
        description:
          'We assist with property selection, renovating, finding tenants, and taking complete management under our wing.',
      },
      {
        title: 'Honest Consultations',
        description:
          "We provide a realistic assessment of opportunities and risks. We won't sell you something we wouldn't buy ourselves.",
      },
      {
        title: 'High Engagement',
        description:
          "Our company's management and managers are involved in all relocation stages and are always in touch with clients.",
      },
      {
        title: 'Experienced Team',
        description:
          'Our team includes professional brokers with over ten years of experience in the market.',
      },
      {
        title: 'Service',
        description:
          'We resolve all issues quickly and clearly, maintaining a high level of service, which is rare in the local market.',
      },
      {
        title: 'Safety',
        description:
          'We provide support in obtaining all necessary documents, and all services are strictly in compliance with UAE legislation.',
      },
    ],
    ctaHeading: 'Need help relocating to Dubai?',
    ctaSubheading: 'Get expert advice now!',
    faqs: [
      {
        question: 'What questions do consultants address?',
        answer:
          'We are ready to answer any questions related to residential and commercial real estate in any city in the UAE.',
      },
      {
        question: 'Do you only provide consulting assistance?',
        answer:
          'We operate in two directions. In the first case, we can offer a one-time consultation, clarify complex issues, formulate a strategy, and more. In the second case, we fully take on legal support, starting with developing an action plan and ending with signing a mutually beneficial contract. Additionally, we offer related services. For example, after consulting, you may decide that renovating the design is necessary for a successful apartment rental. Our specialists are ready to help: they will design and bring the project to life.',
      },
      {
        question: 'How long does it take to open a bank account to obtain an ID, residence permit, and other documents?',
        answer:
          "Starting a business in the UAE, it's essential to understand that speed in resolving issues is not a priority here. Therefore, opening an account or getting a residence permit within a few days or weeks is impossible. On average, it takes a month to resolve these matters, but the process can be extended. First Select knows how to reduce waiting times, but again, obtaining the necessary documents in a case of days is legally impossible.",
      },
      {
        question: 'What is licensing?',
        answer:
          "To conduct business, you need a license, and for each type of activity, there is a different one. For example, simultaneously opening a café and obtaining a construction license is impossible, as this is prohibited in the UAE. Therefore, it's crucial to decide what you precisely plan to do. Another vital point is that there are both simple and complex licenses. Regulators issue the former, while the latter (including permits for activities in finance, medicine, and law) can only be obtained after approval from regulators.",
      },
      {
        question: 'What is the average cost per square meter for office space rental?',
        answer:
          'The price per square meter varies from $270 to $300. However, there is a pleasant nuance in the UAE. There are special programs for registering legal entities where the rental amount is already included so that you can rent an office at a more advantageous price.',
      },
    ],
    testimonials: [
      {
        text: 'Thanks for the great work! I am writing this from a taxi just after our family received residence permits. The kids are the happiest! Thanks from the whole family!',
      },
      {
        text: 'Excellent company, highly recommended to all expatriates. They quickly resolved the residence permit and bank account issues. Thanks for the advice regarding the office!',
      },
    ],
  },
  {
    slug: 'project-planning-and-general-construction',
    title: 'Project Planning and General Construction',
    shortTitle: 'Project Planning',
    tagline:
      'Our engineers will create a project that meets all your requirements.',
    intro:
      'Project planning and construction are two interdependent processes; one cannot exist without the other. Building a house without a project is impossible, and even if it happens, you may not like the result. We at First Select know how important it is to complete all tasks consistently, so first, we create a project and discuss it with you, then we get approval from the Municipality, and then we start construction. This allows us to build houses that meet the current requirements of the UAE and make you happy every day.',
    heroImage:
      'https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?auto=compress&cs=tinysrgb&w=2400',
    cardImage:
      'https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'paint',
    sections: [
      {
        heading: 'Why Do You Need Project Planning and General Construction?',
        paragraphs: [
          'Project Planning is the second stage of construction. In the first stage, you tell the First Select manager what kind of house you need (and the more detailed the story, the better) — Afterward, First Select engineers \'translate\' your descriptions into drawings and calculations. Thus, three problems are solved.',
          '1. You get a visualization of the future home. With the help of the project, you can see how the building will look and calculate the costs. Some details may need to be changed. It\'s all right. The First Select engineers suggest you take your time and study the project in particular because everything must remain the same after receiving approval from the Municipality and the start of construction.',
          '2. The municipality will study the construction project in detail. After that, you either get a building permit or have to improve the plan. Therefore, the project must be accurate, logical, and understandable; all costs are calculated, and any risks are considered. Only a team of experienced, qualified engineers can do this.',
          '3. Builders receive clear instructions. Everything is described in the project: when and where to start work, what materials should be used, what tasks each group of builders solves, and how the processes are interconnected. This allows the supervisor to coordinate work and avoid mistakes.',
          'The First Select engineers will create such a project for you. Then, the Municipality will approve the plan, and everything will go smoothly.',
        ],
      },
      {
        heading: 'Get Your Dream Project Now',
        paragraphs: [
          'First Select performs work of any complexity. We will create for you for both commercial and residential projects. To have a project, call us at +971 58 697 3477. You can discuss the details with First Select by phone and via instant messengers: Telegram and WhatsApp.',
        ],
      },
      {
        heading: "Here's How We Work",
        paragraphs: [
          'To get the perfect project, we divide the work into four stages.',
          '01. Discussion — We discuss your requirements and wishes in detail.',
          '02. Project planning — Our engineers create the project with drawings and calculations.',
          '03. Your comments — We review the project with you and make any needed adjustments.',
          '04. Approval — We submit the project to the Municipality and obtain the building permit.',
        ],
      },
    ],
    highlights: [
      {
        title: 'Individual Approach',
        description: 'We take into account all your requirements and wishes.',
      },
      {
        title: 'From A to Z',
        description: 'We draw up a project and bring it to life.',
      },
      {
        title: 'Triple Control',
        description:
          'An engineer, technical supervisor, and chief engineer of First Select check the project.',
      },
      {
        title: 'Efficiency',
        description:
          'We work quickly and deliver the project on time. It does not harm the quality.',
      },
      {
        title: 'Building Permits',
        description: 'We send the project to the Municipality and get approval.',
      },
      {
        title: 'Competence',
        description:
          'Our engineers have a work permit in the UAE, have received specialized education, and improve their skills daily.',
      },
    ],
    ctaHeading: 'Get your dream project now',
    ctaSubheading: 'First Select performs work of any complexity.',
    faqs: [],
    testimonials: [
      {
        text: "Thanks, First Select, for the help! We did an excellent project, and it was necessary to finalize just a few details. They did it in the best possible way. But the most important thing for me is their involvement in the approval process. We were looking for just such a company and First Select is good at this.",
      },
    ],
  },
  {
    slug: 'supervision',
    title: 'Supervision',
    shortTitle: 'Supervision',
    tagline:
      'Our experts will supervise construction work from start to finish. You can be sure everything will be done perfectly.',
    intro:
      'Do you want your home to match the project? Do you need exactly the materials that are described in the plan? Are you sure that builders should stay within the estimate? If you prefer to avoid mistakes and want to see the perfect result, then you need supervision.',
    heroImage:
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=2400',
    cardImage:
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'paint',
    sections: [
      {
        heading: 'What Is Supervision?',
        paragraphs: [
          "Even the most responsible team can accidentally make a mistake, but errors cannot be avoided if inexperienced builders work. Sometimes, this happens due to an unfortunate set of circumstances, and sometimes, it is not the builders' fault at all (for example, there was no material or decor in the store). But whatever the reason, these errors should be fixed. Moreover, a highly qualified supervisor must observe the work because he (or she) sees the most minor nuances.",
          'The First Select employees are educated and have extensive experience in the construction industry. By ordering supervision from us, you can be sure that everything will be done perfectly.',
          'In addition, you do not have to waste your time and check the work constantly. Forget about problems and enjoy the anticipation of an excellent fit-out, and our supervisors will control everything to the smallest detail.',
        ],
      },
      {
        heading: 'Call Now',
        paragraphs: [
          "The work is underway, and you need a look from the outside. Or are you just planning a fit-out and want to take care of everything in advance? You may need a project, a team of builders, and supervision. First Select will meet any challenge. Call +971 58 697 3477, or write to Telegram and WhatsApp. Let's discuss your request and find the best solution!",
        ],
      },
      {
        heading: 'Stages of Supervision',
        paragraphs: [
          'Supervision is a long-term process. The supervisor must check daily and control every action for everything to be perfect. Here\'s how it goes.',
          '01. Project reading — The supervisor studies the project thoroughly before work begins.',
          '02. Inspection of completed work — Daily on-site inspection of all completed work.',
          '03. Creating a report — A detailed report is created documenting findings and any issues.',
          '04. Sending the report to you — You receive regular reports so you always know the status.',
        ],
      },
    ],
    highlights: [
      {
        title: 'Knowledge',
        description:
          'Our team members are qualified professionals who know what supervision is.',
      },
      {
        title: 'Experience',
        description:
          'We have been working with decor and fit-out for many years, so we understand what the process looks like "from the inside."',
      },
      {
        title: 'Attentiveness',
        description:
          'The superpower of the First Select team members is attention to the most minor details.',
      },
      {
        title: 'The Ability to Notice the Important Things',
        description:
          'Our supervisors pay attention to what eludes others.',
      },
      {
        title: 'Organizational Skills',
        description: 'We not only find the error, but we also know how to fix it.',
      },
      {
        title: 'Impartiality',
        description:
          'We study the work of builders impartially and never mislead you.',
      },
    ],
    ctaHeading: 'Need professional supervision?',
    ctaSubheading: 'Call us at +971 58 697 3477 or write to Telegram and WhatsApp.',
    faqs: [],
    testimonials: [
      {
        text: 'We ordered supervision for the office and were delighted with the result. No errors; everything is precisely according to the project. The primary task for us was to comply with the technical points. But design is also essential, of course. All in all, excellent. Thanks, First Select, for a job well done.',
      },
    ],
  },
  {
    slug: 'documentation-approval',
    title: 'Documentation Approval Support',
    shortTitle: 'Documentation Approval',
    tagline:
      'Our staff will help resolve issues with documents for real estate in the UAE.',
    intro:
      'Navigating the bureaucratic processes in the UAE can be challenging. Our staff will help resolve issues with documents for real estate in the UAE, ensuring your project has all necessary permits and approvals.',
    heroImage:
      'https://images.pexels.com/photos/8470057/pexels-photo-8470057.jpeg?auto=compress&cs=tinysrgb&w=2400',
    cardImage:
      'https://images.pexels.com/photos/8470057/pexels-photo-8470057.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'license',
    sections: [
      {
        heading: 'Documentation Support for Real Estate in the UAE',
        paragraphs: [
          'Our staff will help resolve issues with documents for real estate in the UAE. We navigate the bureaucratic processes to ensure your project has all necessary permits and approvals.',
          'Whether you need help with building permits, DEWA connections, municipal approvals, or any other documentation, our team has the experience to get it done efficiently and correctly the first time.',
        ],
      },
    ],
    highlights: [
      {
        title: 'Full-Service Company',
        description:
          'We assist with property selection, renovating, finding tenants, and taking complete management under our wing.',
      },
      {
        title: 'Honest Consultations',
        description:
          "We provide a realistic assessment of opportunities and risks. We won't sell you something we wouldn't buy ourselves.",
      },
      {
        title: 'High Engagement',
        description:
          "Our company's management and managers are involved in all relocation stages and are always in touch with clients.",
      },
      {
        title: 'Experienced Team',
        description:
          'Our team includes professional brokers with over ten years of experience in the market.',
      },
      {
        title: 'Service',
        description:
          'We resolve all issues quickly and clearly, maintaining a high level of service, which is rare in the local market.',
      },
      {
        title: 'Safety',
        description:
          'We provide support in obtaining all necessary documents, and all services are strictly in compliance with UAE legislation.',
      },
    ],
    ctaHeading: 'Need help with documentation?',
    ctaSubheading: 'Get expert advice now!',
    faqs: [],
    testimonials: [
      {
        text: 'DEWA just issued confirmation! After ten unsuccessful attempts, I contacted First Select and received the paper the first time! Thank you!',
      },
      {
        text: 'Thank you First Select for your professionalism! We immediately put together an excellent project, a couple of details needed to be finalized - everything was done without any questions and in the best possible way. But the most important thing for me is that they themselves are involved in approving the project. We were looking for just such a company and did not regret it.',
      },
    ],
  },
  {
    slug: 'fit-out',
    title: 'Fit-Out',
    shortTitle: 'Fit-Out',
    tagline:
      'Fit out without problems and worries. First Select solves the most difficult questions.',
    intro:
      'Want to change your life for the better? Then, change the space around you. A new style, layout, lighting scenarios, and exciting colors will inspire you. What concerns commercial space is that a modern fit-out will improve your reputation and attract new customers.',
    heroImage:
      'https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&w=2400',
    cardImage:
      'https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'paint',
    sections: [
      {
        heading: 'Fit Out by First Select',
        paragraphs: [
          "Even if you like to plan work, and purchasing is your passion, it's still uncomfortable to fit out. You want to finish it and look at the result as soon as possible, but you can't rush. First Select knows this, so our team takes on the toughest challenges. We work with:",
          '1. Small studios and spacious penthouses',
          '2. City apartments and country houses',
          '3. Commercials and residences',
          'We know each room has its own technical and aesthetic nuances, which we consider in our work. At the same time, we focus on your vision of fit-out and your ideas about beauty and comfort. The First Select team will handle everything; you just need to tell us what you want.',
        ],
      },
      {
        heading: 'Book Now',
        paragraphs: [
          'The First Select team will complete the task as quickly as possible. We work precisely according to the plan and complete the fit-out by the deadline. Want to learn more or order a repair? Call +971 58 697 3477 or write in Telegram and WhatsApp.',
        ],
      },
      {
        heading: 'How Do We Work?',
        paragraphs: [
          'In fit-out, every minute counts. And we prefer not to waste it. To optimize processes, we divided the work into four stages.',
          '01. Studying or making a plan — We study the existing plan or create one if needed.',
          '02. Getting permission — We handle all necessary permits for the fit-out work.',
          '03. Project approval — The project is finalized and approved before work begins.',
          '04. Repair work — The fit-out is completed according to the approved plan and on schedule.',
        ],
      },
    ],
    highlights: [
      {
        title: 'Responsibility',
        description:
          'It is crucial for us that you are satisfied with the result, so we pay attention to all details.',
      },
      {
        title: 'Design Project',
        description:
          'It is only possible to make a fit-out with a plan. And, First Select engineers will design a project for you.',
      },
      {
        title: 'Documental Approval',
        description:
          'The most challenging stage in the fit-out. And we are ready to take on all the difficulties.',
      },
      {
        title: 'Attention to Details',
        description:
          'Every detail is important because a small failure spoils the whole impression. We know this, and we are working very carefully.',
      },
      {
        title: 'Purchase',
        description: 'Do you want to save time searching for materials? We will do it for you.',
      },
      {
        title: 'Compliance with Deadlines',
        description:
          'We act according to the plan and check the deadlines at each stage of work. You will receive your home on time.',
      },
    ],
    ctaHeading: 'Ready for a perfect fit-out?',
    ctaSubheading: 'Call us at +971 58 697 3477 or write in Telegram and WhatsApp.',
    faqs: [],
    testimonials: [
      {
        text: 'Thanks, First Select, for a great job. We ordered a fit-out as a gift for my parents, so there were a lot of difficulties. The builders did a great job. I was pleased not only with a good fit-out but also with respect for older people. I heartily recommend the team.',
      },
    ],
  },
];

export const investmentStatsByService: Record<string, { value: string; label: string }[]> = {
  'buy-and-sale': [
    { value: 'from 40%', label: 'Profitability from resale' },
    { value: 'from 14%', label: 'Prepaid expense' },
    { value: 'from 7-8%', label: 'Rental yield' },
    { value: '0%', label: 'Agency commission' },
  ],
  rent: [
    { value: 'from 40%', label: 'Profitability from resale' },
    { value: 'from 10%', label: 'An initial fee' },
    { value: 'from 7-8%', label: 'Rental yield' },
    { value: '0%', label: 'Agency commission' },
  ],
  'interior-design': [
    { value: 'from 40%', label: 'Profitability from resale' },
    { value: 'from 10%', label: 'An initial fee' },
    { value: 'from 7-8%', label: 'Rental yield' },
    { value: '0%', label: 'Agency commission' },
  ],
  consulting: [
    { value: 'from 40%', label: 'Profitability from resale' },
    { value: 'from 10%', label: 'An initial fee' },
    { value: 'from 7-8%', label: 'Rental yield' },
    { value: '0%', label: 'Agency commission' },
  ],
  'project-planning-and-general-construction': [
    { value: 'from 40%', label: 'Profitability from resale' },
    { value: 'from 10%', label: 'An initial fee' },
    { value: 'from 7-8%', label: 'Rental yield' },
    { value: '0%', label: 'Agency commission' },
  ],
  supervision: [
    { value: 'from 40%', label: 'Profitability from resale' },
    { value: 'from 10%', label: 'An initial fee' },
    { value: 'from 7-8%', label: 'Rental yield' },
    { value: '0%', label: 'Agency commission' },
  ],
  'documentation-approval': [
    { value: 'from 40%', label: 'Profitability from resale' },
    { value: 'from 10%', label: 'An initial fee' },
    { value: 'from 7-8%', label: 'Rental yield' },
    { value: '0%', label: 'Agency commission' },
  ],
  'fit-out': [
    { value: 'from 40%', label: 'Profitability from resale' },
    { value: 'from 10%', label: 'An initial fee' },
    { value: 'from 7-8%', label: 'Rental yield' },
    { value: '0%', label: 'Agency commission' },
  ],
};

export { company };
