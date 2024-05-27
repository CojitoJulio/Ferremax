const {WebpayPlus, IntegrationApiKeys, IntegrationCommerceCodes, Options} = require('transbank-sdk')

const webpayPlus = new WebpayPlus.Transaction(
    new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, 'https://webpay3gint.transbank.cl')
);

module.exports = webpayPlus;