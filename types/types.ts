export interface Item {
  title: string
  variant_title?: string
  description_short?: string
  quantity: number
  product_id: string
  type?: string
  taxable?: boolean
  variant_id?: string
  requires_shipping?: boolean
}

export interface BundleComponent extends Item {
  image: string
  usages?: number
  image_abo: string
  subscriptionDiscountedPrice: number
  subscriptionOriginalPrice?: number
  starterSetOriginalPrice?: number // only used as reference to have unified source of data
  description?: string
  variant_ids?: VariantIds
  product_type: ProductType
  default_interval?: number
  order_interval_unit?: string
  fulfillment_service?: string
  charge_interval_frequency?: number
  order_interval_frequency?: number
  short_description_first_deliver?: string
}

type VariantIds = {
  hard: string
  medium?: string
  soft?: string
}

export type ProductType =
  | 'cleaning_tabs'
  | 'stain_powder'
  | 'dishwasher_tabs'
  | 'laundry_detergent'
  | 'toilet_tabs'
  | 'toilet_cleaner'
  | 'accessories'

export type Stepper =
  | 'init'
  | 'details'
  | 'overview'
  | 'waterhardness'
  | 'edit'
  | 'checkout'

export type WaterHardness = keyof VariantIds
export type Bundle = BundleComponent[]
