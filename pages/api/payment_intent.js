import Stripe from 'stripe'
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const handler = async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 10000,
        currency: "mxn",
        payment_method_types: ["card"]
    })
    res.status(200).send({ clientSecret: paymentIntent.client_secret })
}

export default handler