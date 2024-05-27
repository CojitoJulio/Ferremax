const express = require('express');
const routes = express.Router()
const webpayPlus = require('./transbank');

routes.post('/create', async (req, res) => {
    const {amount, sessionId, buyOrder, returnUrl} = req.body;
    try {
        const response = await webpayPlus.create(buyOrder, sessionId, amount, returnUrl);
        res.json(response)
    } catch (err){
        res.status(500).json({error: err.message})
        console.log(err.message)
    }
})

routes.post('/commit', async (req, res) => {
    const { token } = req.body;
    try {
        const response = await webpayPlus.commit(token);
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.log(err.message)
    }
});


module.exports = routes