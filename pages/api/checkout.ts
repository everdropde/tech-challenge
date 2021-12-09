import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const parsed = JSON.parse(req.body)
  const payload = {
    line_items: parsed.line_items.map((line_item: any) => {
      delete line_item.price
      return line_item
    }),
    discount_code: 'FLATRATE100',
  }

  const rechargeResponse = await fetch(
    'https://api.rechargeapps.com/checkouts',
    {
      method: 'POST',
      headers: {
        'X-Recharge-Access-Token': process.env.RECHARGE_TOKEN!,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  )

  const data = await rechargeResponse.json()

  if (data.error) {
    console.log(JSON.stringify(data))
  }

  // TODO NEED ERROR CHECK HERE
  // if data.errors raise
  const {
    checkout: { token: checkoutToken },
  } = data

  res.setHeader('Access-Control-Allow-Origin', '*')

  if (checkoutToken) {
    res.json(
      JSON.stringify(
        `https://subscription-checkout.everdrop.de/r/checkout/${checkoutToken}?origin=subscription.everdrop`
      )
    )
  } else {
    res.json('/')
  }
}

export default handler
