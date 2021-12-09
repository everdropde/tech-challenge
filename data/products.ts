import { Bundle, BundleComponent } from 'types/types'

type Product = Omit<
  BundleComponent,
  | 'variant_id'
  | 'charge_interval_frequency'
  | 'order_interval_frequency'
  | 'order_interval_unit'
  | 'fulfillment_service'
  | 'requires_shipping'
  | 'taxable'
>

export const PRODUCTS: Product[] = [
  {
    title: 'Full/Color Detergent Starter Set',
    variant_title: 'Subscription: 24,89 € (per subsequent delivery)',
    description:
      'Full/color detergent for 19 wash loads each and two high-quality storage boxes',
    description_short: '76 wash loads',
    image: '/color-and-full-detergent-starter.jpg',
    image_abo: '/color-and-full-detergent-starter.jpg',
    product_id: '6995844595905',
    variant_ids: {
      hard: '40951821107393',
      medium: '40951821140161',
      soft: '40951821172929',
    },
    subscriptionDiscountedPrice: 24.89,
    subscriptionOriginalPrice: 29.99,
    starterSetOriginalPrice: 39.99,
    default_interval: 44,
    usages: 72,
    quantity: 1,
    product_type: 'laundry_detergent',
  },
  {
    title: 'Dishwasher tabs Starter Set',
    variant_title: 'Subscription: 20,74 € (per subsequent delivery)',
    description:
      'Dishwasher tabs starter set 40 classic dishwasher tabs and a high quality storage box',
    description_short: '80 rinse cycles',
    image: '/dishwasher-tabs-starter.jpg',
    image_abo: '/spuelmaschinentabs-abo.jpg',
    product_id: '6996553498817',
    variant_ids: {
      hard: '40955002650817',
    },
    subscriptionDiscountedPrice: 20.74,
    subscriptionOriginalPrice: 24.99,
    starterSetOriginalPrice: 27.54,
    default_interval: 80,
    usages: 80,
    quantity: 1,
    product_type: 'dishwasher_tabs',
  },
  {
    title: 'Cleaning Tabs Starter Set',
    variant_title: 'Subscription: 8,99 € (per subsequent delivery)',
    description: 'with 3 bottles and 3 tabs',
    description_short: '3x tabs each',
    image: '/putzmittel-starter.jpg',
    image_abo: '/putzmittel-abo.jpg',
    product_id: '6995836600513',
    variant_ids: {
      hard: '40951774576833',
    },
    subscriptionDiscountedPrice: 8.99,
    subscriptionOriginalPrice: 14.99,
    starterSetOriginalPrice: 34.99,
    default_interval: 30,
    usages: 25,
    quantity: 1,
    product_type: 'cleaning_tabs',
  },
  {
    title: 'WC Cleaner Starter Set',
    variant_title: 'Subscription: 8,29 € (per subsequent delivery)',
    description:
      'WC cleaner powder for 2× 500 ml WC gel & reusable rHDPE bottle',
    description_short: '3x 500 ml WC-Gel',
    image: '/wc-cleaner-starter.jpg',
    image_abo: '/wc-cleaner-abo.jpg',
    product_id: '6996581875905',
    variant_ids: {
      hard: '40955293892801',
    },
    subscriptionDiscountedPrice: 8.29,
    subscriptionOriginalPrice: 9.99,
    starterSetOriginalPrice: 17.99,
    default_interval: 60,
    usages: 10,
    quantity: 1,
    product_type: 'toilet_cleaner',
  },
  {
    title: 'WC Active Tabs Starter Set',
    variant_title: 'Subscription: 11,61 € (per subsequent delivery)',
    description: '2× 20 WC Aktiv Tabs & everdrop glass jar',
    description_short: '2x 20 Active Tabs',
    image: '/wc-aktiv-starter.jpg',
    image_abo: '/wc-aktiv-abo.jpg',
    product_id: '6996585840833',
    variant_ids: {
      hard: '40955335049409',
    },
    subscriptionDiscountedPrice: 11.61,
    subscriptionOriginalPrice: 13.99,
    starterSetOriginalPrice: 24.99,
    default_interval: 60,
    usages: 10,
    quantity: 1,
    product_type: 'toilet_tabs',
  },
  {
    title: 'Stain Powder Starter Set',
    variant_title: 'Subscription: 3,73 € (per subsequent delivery)',
    description: '450g stain powder',
    description_short: '1x 450g',
    image: '/fleckenpulver.jpg',
    image_abo: '/fleckenpulver.jpg',
    product_id: '6996588691649',
    variant_ids: {
      hard: '40955356807361',
    },
    subscriptionDiscountedPrice: 3.73,
    subscriptionOriginalPrice: 4.49,
    starterSetOriginalPrice: 4.49,
    default_interval: 52,
    usages: 45,
    quantity: 1,
    product_type: 'stain_powder',
  },
]

export const subscriptionProducts: Bundle = PRODUCTS.map((item) => {
  return {
    ...item,

    variant_id: item.variant_ids?.hard,

    charge_interval_frequency: item.default_interval,
    order_interval_frequency: item.default_interval,
    order_interval_unit: 'day',
    fulfillment_service: 'manual',
    requires_shipping: true,
    taxable: true,
  }
})
