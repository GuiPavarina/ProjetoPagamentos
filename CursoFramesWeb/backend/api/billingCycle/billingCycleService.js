const BillingCycle = require('./billingCycle')

//Cria os métodos identificados no array
BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new : true, runValidators: true})

module.exports = BillingCycle