export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  type: 'image' | 'video' | 'before-after';
  beforeSrc?: string;
}

export const galleryItems: GalleryItem[] = [
  // Before and After Images
  { src: "/beforeandafter-concrete.webp", alt: "Concrete cleaning before and after", title: "Concrete Transformation", type: "before-after" },
  { src: "/bricksiding-beforeandafter.webp", alt: "Brick siding cleaning before and after", title: "Brick Siding Renewal", type: "before-after" },
  { src: "/concrete-beforeandafter-2.webp", alt: "Concrete cleaning before and after 2", title: "Concrete Cleaning 2", type: "before-after" },
  { src: "/concrete-beforeandafter.webp", alt: "Concrete cleaning before and after", title: "Concrete Cleaning", type: "before-after" },
  { src: "/conrete-beforeandafter-3.webp", alt: "Concrete cleaning before and after 3", title: "Concrete Cleaning 3", type: "before-after" },
  { src: "/conrete-beforeandafter-4.webp", alt: "Concrete cleaning before and after 4", title: "Concrete Cleaning 4", type: "before-after" },
  { src: "/cslogobeforeandafter.webp", alt: "Clean Slate logo before and after", title: "Logo Cleaning", type: "before-after" },
  { src: "/diveway-beforeandafter.webp", alt: "Driveway cleaning before and after", title: "Driveway Transformation", type: "before-after" },
  { src: "/frontporch-beforeandafter.webp", alt: "Front porch cleaning before and after", title: "Front Porch Renewal", type: "before-after" },
  { src: "/frontporch2-beforeandafter.webp", alt: "Front porch cleaning before and after 2", title: "Front Porch Makeover", type: "before-after" },
  { src: "/gutterbeforeandafter.webp", alt: "Gutter cleaning before and after", title: "Gutter Cleaning", type: "before-after" },
  { src: "/oilstain-beforeandafter.webp", alt: "Oil stain removal before and after", title: "Oil Stain Removal", type: "before-after" },
  { src: "/oilstainbeforeandafter.webp", alt: "Oil stain removal before and after 2", title: "Oil Stain Transformation", type: "before-after" },
  { src: "/parking-lot-beforeandafter.webp", alt: "Parking lot cleaning before and after", title: "Parking Lot Cleaning", type: "before-after" },
  { src: "/patio-beforeandafter-2.webp", alt: "Patio cleaning before and after 2", title: "Patio Renewal 2", type: "before-after" },
  { src: "/patio-beforeandafter.webp", alt: "Patio cleaning before and after", title: "Patio Renewal", type: "before-after" },
  { src: "/pier-beforeandafter.webp", alt: "Pier cleaning before and after", title: "Pier Restoration", type: "before-after" },
  { src: "/porch-beforeandafter.webp", alt: "Porch cleaning before and after", title: "Porch Makeover", type: "before-after" },
  { src: "/roof-beforeandafter.webp", alt: "Roof cleaning before and after", title: "Roof Cleaning", type: "before-after" },
  { src: "/roof2-beforeandafter.webp", alt: "Roof cleaning before and after 2", title: "Roof Transformation 2", type: "before-after" },
  { src: "/roof3-beforeandafter.webp", alt: "Roof cleaning before and after 3", title: "Roof Restoration 3", type: "before-after" },
  { src: "/school-concrete-beforeandafter.webp", alt: "School concrete cleaning before and after", title: "School Concrete Cleaning", type: "before-after" },
  { src: "/sideofhouse-beforeandafter.webp", alt: "House siding cleaning before and after", title: "House Siding Renewal", type: "before-after" },
  { src: "/sidewalk-beforeandafter.webp", alt: "Sidewalk cleaning before and after", title: "Sidewalk Transformation", type: "before-after" },
  { src: "/siding-beforeandafter.webp", alt: "Siding cleaning before and after", title: "Siding Cleaning", type: "before-after" },
  { src: "/siding2-beforeandafter.webp", alt: "Siding cleaning before and after 2", title: "Siding Renewal 2", type: "before-after" },
  { src: "/sign-beforeandafter.webp", alt: "Sign cleaning before and after", title: "Sign Restoration", type: "before-after" },
  { src: "/walkway-beforeandafter.webp", alt: "Walkway cleaning before and after", title: "Walkway Transformation", type: "before-after" },

  // Before and After Pairs
  { src: "/driveway-after.webp", alt: "Clean driveway after pressure washing", title: "Driveway Cleaning", type: "before-after", beforeSrc: "/driveway-before.webp" },
  { src: "/fence-after.webp", alt: "Clean fence after pressure washing", title: "Fence Cleaning", type: "before-after", beforeSrc: "/fence-before.webp" },
  { src: "/frontporchandsidewalkafter.webp", alt: "Clean front porch and sidewalk after pressure washing", title: "Front Porch and Sidewalk Cleaning", type: "before-after", beforeSrc: "/frontporchandsidewalkbefore.webp" },
  { src: "/gaststationafter.webp", alt: "Clean gas station after pressure washing", title: "Gas Station Cleaning", type: "before-after", beforeSrc: "/gasstation-before.webp" },
  { src: "/gutter-after.webp", alt: "Clean gutter after pressure washing", title: "Gutter Cleaning", type: "before-after", beforeSrc: "/gutter-before.webp" },
  { src: "/parkinglot-after.webp", alt: "Clean parking lot after pressure washing", title: "Parking Lot Cleaning", type: "before-after", beforeSrc: "/parkinglot-before.webp" },
  { src: "/siding-after.webp", alt: "Clean siding after pressure washing", title: "Siding Cleaning", type: "before-after", beforeSrc: "/siding-before.webp" },
  { src: "/wall-after.webp", alt: "Clean wall after pressure washing", title: "Wall Cleaning", type: "before-after", beforeSrc: "/wall-before.webp" },

  // Single Images
  { src: "/cleanslatebanner.webp", alt: "Clean Slate Pressure Washing banner", title: "Company Banner", type: "image" },
  { src: "/cleanslatelogo.jpg", alt: "Clean Slate Pressure Washing logo", title: "Company Logo", type: "image" },
  { src: "/cleanslatelogo.webp", alt: "Clean Slate Pressure Washing logo", title: "Company Logo WebP", type: "image" },
  { src: "/commercial-building-2.webp", alt: "Commercial building pressure washing", title: "Commercial Cleaning 2", type: "image" },
  { src: "/commercial-building-3.webp", alt: "Commercial building pressure washing", title: "Commercial Cleaning 3", type: "image" },
  { src: "/commercial-building-4.webp", alt: "Commercial building pressure washing", title: "Commercial Cleaning 4", type: "image" },
  { src: "/commercial-building-5.webp", alt: "Commercial building pressure washing", title: "Commercial Cleaning 5", type: "image" },
  { src: "/commercial-building.webp", alt: "Commercial building pressure washing", title: "Commercial Cleaning", type: "image" },
  { src: "/driveway1.webp", alt: "Clean driveway example 1", title: "Driveway Cleaning 1", type: "image" },
  { src: "/driveway2.webp", alt: "Clean driveway example 2", title: "Driveway Cleaning 2", type: "image" },
  { src: "/house.webp", alt: "House pressure washing", title: "House Cleaning", type: "image" },
  { src: "/linesdriveway.webp", alt: "Driveway with clean lines", title: "Precision Driveway Cleaning", type: "image" },
  { src: "/oilstain.webp", alt: "Oil stain on concrete", title: "Oil Stain", type: "image" },
  { src: "/oxidation.webp", alt: "Oxidation on surface", title: "Oxidation Removal", type: "image" },
  { src: "/pooldeck.webp", alt: "Clean pool deck", title: "Pool Deck Cleaning", type: "image" },
  { src: "/rockwall.webp", alt: "Clean rock wall", title: "Rock Wall Cleaning", type: "image" },
  { src: "/walkway1.webp", alt: "Clean walkway example 1", title: "Walkway Cleaning 1", type: "image" },
  { src: "/walkway2.webp", alt: "Clean walkway example 2", title: "Walkway Cleaning 2", type: "image" },
  { src: "/whitecleanslatelogo.jpg", alt: "White Clean Slate Pressure Washing logo", title: "White Company Logo", type: "image" },
  { src: "/whitecleanslatelogo.webp", alt: "White Clean Slate Pressure Washing logo", title: "White Company Logo WebP", type: "image" },

  // Videos
  { src: "/Download (2).mp4", alt: "Pressure washing video", title: "Pressure Washing in Action", type: "video" },
  { src: "/Tiktokvid1.mp4", alt: "TikTok video 1", title: "TikTok Showcase 1", type: "video" },
  { src: "/Tiktokvid2.mp4", alt: "TikTok video 2", title: "TikTok Showcase 2", type: "video" },
  { src: "/washing.mp4", alt: "Pressure washing process", title: "Washing Process", type: "video" },
];