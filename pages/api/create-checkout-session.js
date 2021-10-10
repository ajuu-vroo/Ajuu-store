const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async(req,res) =>{
    const{items,email} = req.body;

    const transformedItems = items.map(item=>({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: "inr",
            unit_amount: item.price *100,
            product_data: {
                name: item.name,
                images: [item.image],
            },
        },
    }));
    
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection:{
            allowed_countries:["GB","US","CA","IN"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `https://ajuu-store-7e6isdyfg-ajuu-vroo.vercel.app/success`,
        cancel_url:`https://ajuu-store-7e6isdyfg-ajuu-vroo.vercel.app/shoppingCart`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item=> item.image)),
        },
    });

    res.status(200).json({id : session.id})
}