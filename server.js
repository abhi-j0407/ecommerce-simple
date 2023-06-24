// sk_test_51NMPPdSG3f8lK6xzRieC8QC0jkFikayQ0iQRSTvjFcYgd96xtyfQuTV8EqoFHVgWBH2FHf8fFst8d6NmsR43H3lh00VQZYxi9t
// Coffee: price_1NMPSXSG3f8lK6xzKe4EdSXi
// Sunglasses: price_1NMPTPSG3f8lK6xzWjevPg1B
// Camera: price_1NMPUeSG3f8lK6xz6D0QHrpn
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51NMPPdSG3f8lK6xzRieC8QC0jkFikayQ0iQRSTvjFcYgd96xtyfQuTV8EqoFHVgWBH2FHf8fFst8d6NmsR43H3lh00VQZYxi9t');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));