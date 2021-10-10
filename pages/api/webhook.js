import Stripe from "stripe";
import { buffer } from "micro";
import dbConnect from "../../helper/db";
import Order from '../../models/Order'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_SIGNING_SECRET;

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req, res) => {
    if (req.method === "POST") {
        // Code here
        const buf = await buffer(req);
        const sig = req.headers["stripe-signature"];

        let event;

        try {
            event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret.toString());
        } catch (err) {
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            // Handle successful charge
            dbConnect();
            Order.create({
                amount: session.amount_total / 100,
                images: JSON.parse(session.metadata.images),
                email: session.metadata.email
            })
        } else {
            console.warn(`Unhandled event type: ${event.type}`);
        }

        res.json({ received: true });
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};

export default handler;













// import { buffer } from "micro";
// import dbConnect from "../../helper/db";

// import Order from '../../models/Order'

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

// const fulfillOrder = async(session) =>{

//     return Order.create({
//         amount : session.amount_total/100,
//         images : JSON.parse(session.metadata.images),
//         email : session.metadata.email
//     })
// }

// export default async (req, res) => {
//     if (req.method === 'POST') {
//         dbConnect();
//         const requestBuffer = await buffer(req);
//         const payload = requestBuffer.toString();
//         const signature = req.headers["stripe-signature"];

//         let event;

//         // verifying event is genuine and came from Stripe
//         try {
//             event = stripe.webhooks.constructEvent(payload, signature, endpointSecret)
//         } catch (error) {
//             console.log("ERRRORRR",error.message)
//             return res.status(400).send(`WbhkError : ${error.message}`)
//         }

//         if (event.type === "checkout.session.completed") {
//             const session = event.data.object;

//             return fulfillOrder(session).then(()=>res.status(200)).catch((err)=>{res.status(400).send(err.message)})
//         }
//     }
// }

// export const config = {
//     api: {
//         bodyParser: false,
//         externalResolver: true
//     }
// }