export type ServiceCategory = "Technology" | "Engineering support" | "Ecommerce & marketplaces" | "Creative";
export type IconName = "arrow" | "code" | "layers" | "sparkles" | "mobile" | "cloud" | "users" | "bag" | "globe" | "box" | "video" | "pen" | "check" | "plus" | "minus" | "menu" | "close" | "mail" | "infinity";
export type Offering = { title: string; description: string };
export type FAQ = { question: string; answer: string };
export type Service = {
  slug: string; title: string; shortTitle: string; category: ServiceCategory; icon: IconName;
  description: string; headline: string; intro: string; overview: string;
  offerings: Offering[]; deliverables: string[]; faqs: FAQ[];
};

export const categories: ServiceCategory[] = ["Technology", "Engineering support", "Ecommerce & marketplaces", "Creative"];

export const services: Service[] = [
  {
    slug: "web-development", title: "Web Development", shortTitle: "Web development", category: "Technology", icon: "code",
    description: "Websites, portals, and custom applications built around your customers and the way your business works.",
    headline: "Your next big idea. Built for the web.",
    intro: "Turn your website into a useful part of your business. We develop responsive web experiences that help customers take action and teams work effectively.",
    overview: "A good web experience starts with understanding who will use it and what they need to do. We help define your content, user journeys, and operational requirements before shaping the application and its integrations.",
    offerings: [
      { title: "Business websites", description: "Clear, responsive websites with structured content, accessible navigation, enquiry journeys, and essential technical SEO." },
      { title: "Ecommerce websites", description: "Product discovery, shopping carts, checkout, payment integration, and order workflows tailored to your selling process." },
      { title: "Web portals", description: "Customer, employee, and partner spaces with appropriate permissions, information access, request submission, and activity tracking." },
      { title: "Custom web applications", description: "Browser-based dashboards, platforms, and operational tools built around specific business requirements." },
    ],
    deliverables: ["Agreed page structure and user journeys", "Responsive interface and application features", "Integrations and permissions defined in scope", "Launch checks, access, and handover documentation"],
    faqs: [
      { question: "Can you improve an existing website?", answer: "Yes. Share the current website, its technology, and the problems you want to address. We assess the setup before recommending updates or a rebuild." },
      { question: "Will my website work on mobile?", answer: "Responsive layouts are part of our website planning. We agree on the devices, browsers, accessibility needs, and testing scope for your project." },
      { question: "Can you connect payments or other business tools?", answer: "We can discuss integrations with payment providers, CRM systems, and other services. Availability depends on their APIs, access requirements, and the agreed scope." },
    ],
  },
  {
    slug: "custom-software", title: "Custom Software Development", shortTitle: "Custom software", category: "Technology", icon: "layers",
    description: "Business software that connects your data, people, and workflows. Designed for how you operate.",
    headline: "Software that works the way you do.",
    intro: "Bring important processes into one purpose-built system. We help shape software around the information, permissions, and workflows your people need.",
    overview: "When spreadsheets and disconnected tools get in the way, custom software can bring structure to daily operations. We map the current process, identify what matters most, and define a practical first version with room for future development.",
    offerings: [
      { title: "ERP solutions", description: "Connect selected operational functions such as inventory, purchasing, sales, and reporting in a system with clearly defined responsibilities." },
      { title: "CRM solutions", description: "Organize customer records, leads, sales activity, and follow-up workflows so teams can access relevant information." },
      { title: "CMS solutions", description: "Structured tools for creating, managing, reviewing, and publishing content with permissions appropriate to your team." },
      { title: "HRM solutions", description: "Manage employee information, attendance, leave, onboarding, and other agreed people-related workflows." },
    ],
    deliverables: ["Process mapping and prioritized requirements", "Defined data model and access permissions", "Agreed business modules and integrations", "Documentation, training scope, and handover plan"],
    faqs: [
      { question: "Do we need to build everything at once?", answer: "No. We can prioritize a first release around your most important workflows, then plan additional modules based on feedback and business needs." },
      { question: "Can existing data be migrated?", answer: "Data migration can be included after assessing source formats, quality, volumes, and permissions. Validation and responsibility for source data are agreed before migration." },
      { question: "Who owns the delivered software?", answer: "Ownership, source-code access, third-party licenses, and handover arrangements are set out in the project agreement before work begins." },
    ],
  },
  {
    slug: "artificial-intelligence", title: "Artificial Intelligence", shortTitle: "Artificial intelligence", category: "Technology", icon: "sparkles",
    description: "Practical AI tools and agents for content, information, and defined business workflows.",
    headline: "Give your business a practical AI advantage.",
    intro: "Start with a real task, suitable data, and a clear review process. We explore AI solutions that support the way your business works.",
    overview: "AI is most useful when its role is specific and its output can be evaluated. We help identify appropriate use cases, define data access and review requirements, and assess the approach against your expected workflow.",
    offerings: [
      { title: "Generative AI", description: "Tools for drafting, summarizing, retrieving information, and assisting with business content, with review steps appropriate to the output." },
      { title: "Natural language processing", description: "Classify text, extract relevant information, and organize language-based data into useful inputs for your team." },
      { title: "AI agent development", description: "Agents that complete defined workflow steps through approved tools, with permissions and human approval points suited to the task." },
      { title: "AI workflow integration", description: "Connect AI assistance to existing systems with clearly defined inputs, outputs, evaluation criteria, and fallback behavior." },
    ],
    deliverables: ["Use-case assessment and success criteria", "Defined data access and approval boundaries", "AI implementation and agreed evaluation", "Operational guidance and review procedures"],
    faqs: [
      { question: "Can AI work with our company information?", answer: "Potentially. We first assess the data, access permissions, privacy needs, and suitability of the chosen tools. Confidential information should not be shared through the initial enquiry form." },
      { question: "Can an agent take actions automatically?", answer: "An agent can be designed for specific approved actions. Permissions, human approvals, logging, and failure handling need to match the consequences of those actions." },
      { question: "Will AI outputs always be correct?", answer: "No. AI can produce incorrect or incomplete outputs. We plan evaluation and human review around the task instead of treating generated output as automatically reliable." },
    ],
  },
  {
    slug: "mobile-app-development", title: "Mobile App Development", shortTitle: "Mobile apps", category: "Technology", icon: "mobile",
    description: "iOS, Android, and cross-platform experiences that keep customers and teams connected.",
    headline: "Put your next idea in their hands.",
    intro: "Build a mobile experience around your users. Choose an iOS, Android, or cross-platform approach based on the features and maintenance your app needs.",
    overview: "A mobile app should have a clear purpose beyond being available on a phone. We work through the user journeys, platform needs, backend connections, and release requirements to plan an app that supports your business.",
    offerings: [
      { title: "iOS applications", description: "Mobile experiences for Apple devices, with platform-specific features and release requirements considered during planning." },
      { title: "Android applications", description: "Apps shaped around Android users, supported device requirements, and the workflows your customers or employees need." },
      { title: "Cross-platform development", description: "An approach for sharing application development across platforms where it suits the required features and long-term maintenance." },
      { title: "Connected app experiences", description: "Backend integrations, account journeys, notifications, and data workflows defined around your product's requirements." },
    ],
    deliverables: ["User journeys and platform recommendation", "Agreed app screens and functionality", "Backend and third-party integrations in scope", "Release preparation and maintenance handover"],
    faqs: [
      { question: "Should we choose native or cross-platform development?", answer: "The right choice depends on your users, features, device integrations, budget, and maintenance needs. We compare those factors before recommending an approach." },
      { question: "Do you help with app-store submission?", answer: "Release preparation can be part of the scope. Developer accounts, required information, and submission responsibilities are agreed with you; store approval remains the platform's decision." },
      { question: "Can you work on an existing app?", answer: "Share the current codebase, platform, and requested changes. We review the setup and access requirements before defining the work." },
    ],
  },
  {
    slug: "cloud-services", title: "Cloud Services", shortTitle: "Cloud services", category: "Technology", icon: "cloud",
    description: "Cloud application development, migration, and operational support shaped around your setup.",
    headline: "A clearer path to the cloud.",
    intro: "Support your digital operations with a cloud approach that fits your applications, access requirements, and ongoing needs.",
    overview: "Cloud work starts with understanding the existing application, its dependencies, and the people who operate it. We assess the requirements before defining a migration, development, or maintenance plan with clear responsibilities.",
    offerings: [
      { title: "Cloud application development", description: "Develop or adapt application services with hosting, configuration, deployment, and operational requirements considered together." },
      { title: "Cloud migration", description: "Assess dependencies and plan the movement of agreed applications or data with validation, rollback considerations, and a defined transition." },
      { title: "Cloud support and maintenance", description: "Plan agreed monitoring, updates, troubleshooting, and access management around the application and support arrangement." },
      { title: "Deployment and operations planning", description: "Define environment configuration, deployment workflows, backup needs, and the responsibilities for running your system." },
    ],
    deliverables: ["Application and dependency assessment", "Defined hosting or migration approach", "Agreed configuration and deployment workflows", "Operations documentation and support boundaries"],
    faqs: [
      { question: "Which cloud provider should we use?", answer: "We assess your current setup, application requirements, supported services, and operating costs before discussing suitable options. Specific provider support is confirmed during scoping." },
      { question: "Will a migration involve downtime?", answer: "It may. The transition plan should identify downtime expectations, validation steps, and rollback options. These depend on your application's architecture and dependencies." },
      { question: "Is ongoing support included?", answer: "Maintenance scope, availability, response arrangements, and provider responsibilities are defined separately in the engagement. Uninterrupted service is not guaranteed." },
    ],
  },
  {
    slug: "engineering-outsourcing", title: "Engineering Outsourcing", shortTitle: "Engineering outsourcing", category: "Engineering support", icon: "users",
    description: "Additional engineering capacity that works alongside your team, priorities, and delivery process.",
    headline: "Extend your team. Keep your direction.",
    intro: "Bring additional software engineering support into your business without losing sight of your product goals and existing workflow.",
    overview: "We work with your team to define the skills required, responsibilities, priorities, and communication arrangements. An engagement can support a new product, an existing application, or business systems that need continued development.",
    offerings: [
      { title: "Team extension", description: "Discuss engineering capacity that can contribute to your team's established development workflow and agreed priorities." },
      { title: "Project delivery", description: "Bring a defined requirement or early idea and agree on a practical scope, deliverables, ownership, and review milestones." },
      { title: "Ongoing collaboration", description: "Plan continued development and technical support around an evolving product roadmap and changing business needs." },
      { title: "Existing product support", description: "Review an existing application, identify the requested improvements, and define responsibilities for continued development." },
    ],
    deliverables: ["Skills and availability confirmed before engagement", "Defined responsibilities and working arrangements", "Agreed priorities, reviews, and communication", "Code, access, and handover arrangements"],
    faqs: [
      { question: "Can you work with our existing development team?", answer: "Yes. We discuss your technologies, processes, and capacity needs, then confirm the engineering fit and working arrangement before committing." },
      { question: "Can you overlap with our working hours?", answer: "Time-zone overlap, meeting availability, and communication expectations are agreed for each engagement. Share your preferred working hours when contacting us." },
      { question: "Can we begin with a smaller scope?", answer: "A bounded initial engagement can help define the collaboration. Availability, duration, and deliverables are discussed based on your requirements." },
    ],
  },
  {
    slug: "shopify", title: "Shopify Services", shortTitle: "Shopify", category: "Ecommerce & marketplaces", icon: "bag",
    description: "Store setup, customization, product organization, and integrations for your selling process.",
    headline: "Your products. A store that fits.",
    intro: "Build a Shopify storefront with clear navigation, organized products, and a shopping journey shaped around your customers.",
    overview: "Your storefront and operations need to work together. We help define your catalog, content, required integrations, and order workflows before setting up or customizing the store.",
    offerings: [
      { title: "Store setup", description: "Configure the agreed storefront structure, essential pages, settings, and shopping experience for your business." },
      { title: "Theme customization", description: "Adapt layouts, visual styling, navigation, and content presentation to your brand within the selected theme's capabilities." },
      { title: "Product organization", description: "Structure product information, collections, variants, and navigation to make your catalog easier to browse." },
      { title: "Apps and integrations", description: "Discuss suitable tools for the selling process and integrate the services agreed in the project scope." },
    ],
    deliverables: ["Agreed store structure and theme customization", "Organized product catalog and navigation", "Selected integrations and order settings", "Store handover and launch review"],
    faqs: [
      { question: "Can you update our current Shopify store?", answer: "Yes. Share your store, theme, and required changes so we can assess the scope and access needed." },
      { question: "Are platform and app fees included?", answer: "Subscriptions, themes, and third-party app fees are identified during planning. They are not automatically included in development fees." },
      { question: "Do you guarantee sales?", answer: "No. We provide the agreed store development and support. Sales depend on factors including product demand, pricing, marketing, and fulfillment." },
    ],
  },
  {
    slug: "wordpress", title: "WordPress Services", shortTitle: "WordPress", category: "Ecommerce & marketplaces", icon: "globe",
    description: "Business websites, manageable content, and ecommerce functionality where your business needs it.",
    headline: "A website your team can make their own.",
    intro: "Create a WordPress website that communicates clearly and gives your team a practical way to manage its content.",
    overview: "We plan the page structure, editing experience, and features around your business. Where ecommerce is needed, an appropriate store setup can connect your website with product, payment, and order workflows.",
    offerings: [
      { title: "Business websites", description: "Responsive pages, clear navigation, and content layouts that support your services and customer enquiries." },
      { title: "Content management", description: "Configure editing tools and content structures so the people responsible for your website can update it." },
      { title: "Ecommerce setup", description: "Add an appropriate store solution with agreed catalog, checkout, payment, and order-management requirements." },
      { title: "Website updates", description: "Assess existing themes, plugins, and requested improvements before agreeing on changes and maintenance responsibilities." },
    ],
    deliverables: ["Defined pages and editing structure", "Brand-aligned responsive layouts", "Agreed forms or ecommerce integrations", "Access, documentation, and maintenance scope"],
    faqs: [
      { question: "Can our team update the content?", answer: "We can configure the editing experience around the content your team needs to manage. Training and documentation are agreed as part of the handover." },
      { question: "Can you add a store to WordPress?", answer: "Yes, subject to assessing the current website and business requirements. The store solution, payment availability, and integrations are defined before development." },
      { question: "Do you maintain plugins and themes?", answer: "Updates, backups, and ongoing support can be discussed as a separate maintenance arrangement with a defined scope." },
    ],
  },
  {
    slug: "amazon", title: "Amazon Marketplace Support", shortTitle: "Amazon", category: "Ecommerce & marketplaces", icon: "box",
    description: "Support for seller workflows, product listings, catalog organization, and store content.",
    headline: "Bring structure to your Amazon presence.",
    intro: "Organize your product information and seller workflows with marketplace support tailored to your business and the platform's requirements.",
    overview: "We help define the marketplace activities you need assistance with, the information your team will provide, and the access required. The scope is shaped around your catalog and existing seller setup.",
    offerings: [
      { title: "Product listing support", description: "Prepare and organize product information, imagery requirements, and listing content within applicable marketplace rules." },
      { title: "Catalog organization", description: "Support the structure and consistency of product records, variations, and other catalog details appropriate to your setup." },
      { title: "Store content", description: "Prepare agreed brand and product content for marketplace presentation, subject to eligibility and available account features." },
      { title: "Seller workflow support", description: "Assist with defined catalog and operational tasks while keeping account responsibilities and access permissions clear." },
    ],
    deliverables: ["Agreed marketplace tasks and responsibilities", "Organized product data and listing content", "Creative assets within the approved scope", "Workflow documentation and handover"],
    faqs: [
      { question: "Can you guarantee account approval or rankings?", answer: "No. Account decisions, eligibility, and search placement are controlled by the marketplace. We support agreed work within its applicable requirements." },
      { question: "What do you need from our team?", answer: "Typically product information, approved brand assets, the existing setup, and appropriately permissioned access. Exact requirements are confirmed during scoping." },
      { question: "Do you handle every seller activity?", answer: "Only the activities included in the agreement. Inventory, fulfillment, advertising, and other responsibilities need to be discussed explicitly." },
    ],
  },
  {
    slug: "ebay", title: "eBay Marketplace Support", shortTitle: "eBay", category: "Ecommerce & marketplaces", icon: "bag",
    description: "Store setup, listing structure, product information, and defined marketplace operations.",
    headline: "Make your eBay catalog easier to manage.",
    intro: "Present your products clearly and bring consistency to your eBay store with support shaped around your catalog and operations.",
    overview: "Clear product information and organized listings make daily marketplace work more manageable. We assess your current setup and define the store, content, and operational tasks to be delivered.",
    offerings: [
      { title: "Store setup support", description: "Plan and configure agreed store presentation and navigation within the features available to your account." },
      { title: "Listing structure", description: "Organize listing titles, descriptions, attributes, and product imagery requirements within marketplace rules." },
      { title: "Product information", description: "Help structure the catalog details your customers need while keeping product claims grounded in information you provide." },
      { title: "Marketplace operations", description: "Support agreed listing and catalog workflows with clear access, responsibilities, and handover arrangements." },
    ],
    deliverables: ["Defined store and listing scope", "Structured product information", "Agreed store content and visual assets", "Operational workflow handover"],
    faqs: [
      { question: "Can you support an existing eBay store?", answer: "Yes. Share the store setup, catalog size, and tasks you need help with so we can assess the fit." },
      { question: "Who manages shipping and returns?", answer: "Responsibilities for fulfillment, shipping policies, and returns are agreed explicitly. They are not automatically part of listing support." },
      { question: "Can you guarantee marketplace performance?", answer: "No. We deliver the agreed support; sales and placement depend on your products, operations, competition, and platform decisions." },
    ],
  },
  {
    slug: "etsy", title: "Etsy Marketplace Support", shortTitle: "Etsy", category: "Ecommerce & marketplaces", icon: "pen",
    description: "Shop presentation, product listings, and content for businesses with eligible products.",
    headline: "Give your craft a clear digital home.",
    intro: "Shape your Etsy shop around your products and brand with thoughtful presentation, organized listings, and clear product content.",
    overview: "We support businesses whose products meet the platform's eligibility requirements. Together, we define the content, assets, and listing work needed for a consistent shop experience.",
    offerings: [
      { title: "Shop presentation", description: "Develop agreed shop graphics, brand messaging, and presentation elements appropriate to your existing account." },
      { title: "Listing content", description: "Organize product descriptions and listing information using accurate details supplied by your business." },
      { title: "Product visuals", description: "Prepare agreed product-content and graphic assets that help communicate your products clearly." },
      { title: "Catalog consistency", description: "Bring structure to product information and listing workflows so the shop is easier to maintain." },
    ],
    deliverables: ["Agreed shop presentation and content direction", "Organized product listing information", "Defined graphic and product-content assets", "Catalog and editing handover"],
    faqs: [
      { question: "Can any business sell on Etsy?", answer: "Your products must meet Etsy's applicable eligibility and marketplace requirements. Your business is responsible for confirming that its products are suitable." },
      { question: "Do you create product photographs?", answer: "The creative scope is agreed before work begins. Provide existing photography or discuss the specific visual assets needed; photography is not assumed to be included." },
      { question: "Will you guarantee sales or shop approval?", answer: "No. Marketplace eligibility and decisions remain with the platform, and sales depend on factors beyond shop content." },
    ],
  },
  {
    slug: "dropshipping", title: "Dropshipping Support", shortTitle: "Dropshipping", category: "Ecommerce & marketplaces", icon: "box",
    description: "Storefront setup, organized catalogs, supplier connections, and defined order workflows.",
    headline: "Connect your storefront and selling process.",
    intro: "Plan the technical setup behind your dropshipping business with clear supplier connections and operational responsibilities.",
    overview: "A storefront is only one part of a dropshipping operation. We help define product data, supplier integrations, order flows, and the tasks your business will own before launching the technical setup.",
    offerings: [
      { title: "Storefront setup", description: "Build the agreed store structure, product browsing, checkout, and customer-facing content." },
      { title: "Product catalog organization", description: "Structure product data, categories, variants, and presentation based on the catalog selected by your business." },
      { title: "Supplier connections", description: "Assess available supplier tools and configure the connections included in your agreed platform setup." },
      { title: "Order workflows", description: "Define the movement of orders and information, including the points where your team must review or act." },
    ],
    deliverables: ["Technical scope and responsibility map", "Storefront and organized product catalog", "Agreed supplier and order integrations", "Workflow checks and operational handover"],
    faqs: [
      { question: "Do you choose products or guarantee profits?", answer: "Product selection, demand, pricing, and profitability are business decisions. Our support covers the technical setup and tasks explicitly agreed in scope." },
      { question: "Who is responsible for suppliers and fulfillment?", answer: "Supplier selection, product quality, shipping, returns, and customer obligations need clearly assigned owners. We define technical responsibilities before launch." },
      { question: "Can orders be automated?", answer: "Some workflows can be integrated where your platform and supplier tools support them. Exceptions, approvals, and failure handling should be considered in the setup." },
    ],
  },
  {
    slug: "video-editing", title: "Video Editing", shortTitle: "Video editing", category: "Creative", icon: "video",
    description: "Purposeful videos for your website, social channels, products, and business communication.",
    headline: "Raw footage. A clearer story.",
    intro: "Turn your footage into videos that communicate your message. We shape the edit around the audience, channel, and purpose of the content.",
    overview: "A useful video begins with a clear brief. We agree on the source footage, story, duration, formats, and visual direction before editing, with review points and revision arrangements defined in advance.",
    offerings: [
      { title: "Business and website videos", description: "Sequence footage into clear company, service, product, or explanatory content for your website and communication." },
      { title: "Social content", description: "Prepare edits in the agreed formats and durations for the channels where your audience will see them." },
      { title: "Captions and titles", description: "Add captions, text, and approved visual elements to help viewers follow the message." },
      { title: "Audio and finishing", description: "Perform agreed audio cleanup, visual adjustments, and export preparation using supplied or appropriately licensed assets." },
    ],
    deliverables: ["Defined creative brief and edit direction", "Edited video in agreed durations and formats", "Captions and visual elements included in scope", "Final exports and agreed source-file handover"],
    faqs: [
      { question: "What should we provide?", answer: "Share the footage, intended audience, key message, brand assets, and reference direction. We confirm technical requirements and the brief before editing." },
      { question: "How many revisions are included?", answer: "Revision rounds, feedback timing, and what counts as a new scope are agreed before work begins." },
      { question: "Can you prepare multiple social formats?", answer: "Yes, when included in the brief. We agree on aspect ratios, durations, captions, and the number of exports needed." },
    ],
  },
  {
    slug: "graphic-design", title: "Graphic Design", shortTitle: "Graphic design", category: "Creative", icon: "pen",
    description: "Brand graphics, social content, marketing materials, and ecommerce visuals that communicate clearly.",
    headline: "Make your message look like you.",
    intro: "Build a consistent visual presence with design aligned to your identity, audience, and the places your business shows up.",
    overview: "We start with your brand direction and the purpose of each asset. From digital campaigns to product visuals, the work is scoped around the formats, content, and review process your team needs.",
    offerings: [
      { title: "Brand graphics", description: "Develop agreed visual assets that work with your existing identity or a brand direction established during the brief." },
      { title: "Social media designs", description: "Create content graphics and reusable visual layouts in the formats required for your selected channels." },
      { title: "Marketing and presentations", description: "Design marketing materials and presentation assets that make your information easier to understand." },
      { title: "Ecommerce visuals", description: "Prepare store banners, product-content graphics, and marketplace assets based on approved information and platform needs." },
    ],
    deliverables: ["Agreed creative brief and visual direction", "Design assets in specified sizes and formats", "Defined review and revision rounds", "Final exports and agreed editable files"],
    faqs: [
      { question: "Can you work with our current brand identity?", answer: "Yes. Provide your logo, colors, fonts, guidelines, and examples so the work can follow your existing direction." },
      { question: "Are editable source files included?", answer: "Source-file delivery, font and asset licensing, and export formats are confirmed in the project agreement." },
      { question: "Can you support recurring design work?", answer: "Ongoing creative production can be planned around your required formats, expected volume, feedback process, and agreed availability." },
    ],
  },
];

export function getService(slug: string) { return services.find((service) => service.slug === slug); }
