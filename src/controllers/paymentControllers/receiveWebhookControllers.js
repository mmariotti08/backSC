const mercadopago = require("mercadopago");
const {createOrderHandlers}=require('../../handlers/orderHandlers/createOrderHandlers')

const receiveWebHookControllers = async (req, res) => {
    try {
      const payment = req.query;

      if (payment.type === 'payment') {
        const data = await mercadopago.payment.findById(payment['data.id'])

        const cleanData={
            userId: data.body.external_reference,
            payment_method: data.body.payment_type_id,
            total_amount: data.body.transaction_details.total_paid_amount,
            status: data.body.status_detail,
            description: 'ShopConnect the best shoes, Buenos Aires-Argentina 🌎👟',
            delivery_date: data.body.date_approved,
            products: data.response.additional_info.items.map(element => ({
                productId: element.id,
                size: element.category_id,
                quantity: element.quantity
            }))
        }

        const {userId,payment_method,total_amount,description,products,delivery_date,status}=cleanData

      
        const order= await createOrderHandlers({userId,payment_method,total_amount,description,products,delivery_date,status})
        if (order.error) {
          return res.status(400).send(order.error);
        }
        return res.status(200).json(order);
    
      }
      //res.sendStatus(204);
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
} 
module.exports = { receiveWebHookControllers }

// [0]   body: {
//   [0]     accounts_info: null,
//   [0]     acquirer_reconciliation: [],
//   [0]     additional_info: {
//   [0]       authentication_code: null,
//   [0]       available_balance: null,
//   [0]       ip_address: '170.51.102.247',
//   [0]       items: [Array],
//   [0]       nsu_processadora: null
//   [0]     },
//   [0]     authorization_code: null,
//   [0]     binary_mode: false,
//   [0]     brand_id: null,
//   [0]     build_version: '3.8.1',
//   [0]     call_for_authorize_id: null,
//   [0]     captured: true,
//   [0]     card: {},
//   [0]     charges_details: [],
//   [0]     collector_id: 1429884628,
//   [0]     corporation_id: null,
//   [0]     counter_currency: null,
//   [0]     coupon_amount: 0,
//   [0]     currency_id: 'ARS',
//   [0]     date_approved: '2023-07-21T11:34:11.956-04:00',
//   [0]     date_created: '2023-07-21T11:34:11.910-04:00',
//   [0]     date_last_updated: '2023-07-21T11:34:11.956-04:00',
//   [0]     date_of_expiration: null,
//   [0]     deduction_schema: null,
//   [0]     description: "Air Jordan 1 Retro High OG 'Shadow' 2018",
//   [0]     differential_pricing_id: null,
//   [0]     external_reference: '10d73d05-7cc8-483b-8adf-4cdb4bbf02ff',
//   [0]     fee_details: [ [Object] ],
//   [0]     financing_group: null,
//   [0]     id: 1313981770,
//   [0]     installments: 1,
//   [0]     integrator_id: null,
//   [0]     issuer_id: '2005',
//   [0]     live_mode: false,
//   [0]     marketplace_owner: null,
//   [0]     merchant_account_id: null,
//   [0]     merchant_number: null,
//   [0]     metadata: {},
//   [0]     money_release_date: '2023-08-08T11:34:11.956-04:00',
//   [0]     money_release_schema: null,
//   [0]     money_release_status: null,
//   [0]     notification_url: 'https://1ec5-2803-9800-9001-c29f-1d7b-f98f-9dd5-3320.ngrok-free.app/payment/webhook', 
//   [0]     operation_type: 'regular_payment',
//   [0]     order: { id: '10577459781', type: 'mercadopago' },
//   [0]     payer: {
//   [0]       first_name: null,
//   [0]       last_name: null,
//   [0]       email: 'test_user_80507629@testuser.com',
//   [0]       identification: [Object],
//   [0]       phone: [Object],
//   [0]       type: null,
//   [0]       entity_type: null,
//   [0]       id: '1429882258'
//   [0]     },
//   [0]     payment_method: { id: 'account_money', issuer_id: '2005', type: 'account_money' },
//   [0]     payment_method_id: 'account_money',
//   [0]     payment_type_id: 'account_money',
//   [0]     platform_id: null,
//   [0]     point_of_interaction: {
//   [0]       business_info: [Object],
//   [0]       transaction_data: [Object],
//   [0]       type: 'CHECKOUT'
//   [0]     },
//   [0]     pos_id: null,
//   [0]     processing_mode: 'aggregator',
//   [0]     refunds: [],
//   [0]     shipping_amount: 0,
//   [0]     sponsor_id: null,
//   [0]     statement_descriptor: null,
//   [0]     status: 'approved',
//   [0]     status_detail: 'accredited',
//   [0]     store_id: null,
//   [0]     tags: null,
//   [0]     taxes_amount: 0,
//   [0]     transaction_amount: 380,
//   [0]     transaction_amount_refunded: 0,
//   [0]     transaction_details: {
//   [0]       acquirer_reference: null,
//   [0]       external_resource_url: null,
//   [0]       financial_institution: null,
//   [0]       installment_amount: 0,
//   [0]       net_received_amount: 364.42,
//   [0]       overpaid_amount: 0,
//   [0]       payable_deferral_period: null,
//   [0]       payment_method_reference_id: null,
//   [0]       total_paid_amount: 380
//   [0]     }
//   [0]   },
//   [0]   response: {
//   [0]     accounts_info: null,
//   [0]     acquirer_reconciliation: [],
//   [0]     additional_info: {
//   [0]       authentication_code: null,
//   [0]       available_balance: null,
//   [0]       ip_address: '170.51.102.247',
//   [0]       items: [Array],
//   [0]       nsu_processadora: null
//   [0]     },
//   [0]     authorization_code: null,
//   [0]     binary_mode: false,
//   [0]     brand_id: null,
//   [0]     build_version: '3.8.1',
//   [0]     call_for_authorize_id: null,
//   [0]     captured: true,
//   [0]     card: {},
//   [0]     charges_details: [],
//   [0]     collector_id: 1429884628,
//   [0]     corporation_id: null,
//   [0]     counter_currency: null,
//   [0]     coupon_amount: 0,
//   [0]     currency_id: 'ARS',
//   [0]     date_approved: '2023-07-21T11:34:11.956-04:00',
//   [0]     date_created: '2023-07-21T11:34:11.910-04:00',
//   [0]     date_last_updated: '2023-07-21T11:34:11.956-04:00',
//   [0]     date_of_expiration: null,
//   [0]     deduction_schema: null,
//   [0]     description: "Air Jordan 1 Retro High OG 'Shadow' 2018",
//   [0]     differential_pricing_id: null,
//   [0]     external_reference: '10d73d05-7cc8-483b-8adf-4cdb4bbf02ff',
//   [0]     fee_details: [ [Object] ],
//   [0]     financing_group: null,
//   [0]     id: 1313981770,
//   [0]     installments: 1,
//   [0]     integrator_id: null,
//   [0]     issuer_id: '2005',
//   [0]     live_mode: false,
//   [0]     marketplace_owner: null,
//   [0]     merchant_account_id: null,
//   [0]     merchant_number: null,
//   [0]     metadata: {},
//   [0]     money_release_date: '2023-08-08T11:34:11.956-04:00',
//   [0]     money_release_schema: null,
//   [0]     money_release_status: null,
//   [0]     notification_url: 'https://1ec5-2803-9800-9001-c29f-1d7b-f98f-9dd5-3320.ngrok-free.app/payment/webhook', 
//   [0]     operation_type: 'regular_payment',
//   [0]     order: { id: '10577459781', type: 'mercadopago' },
//   [0]     payer: {
//   [0]       first_name: null,
//   [0]       last_name: null,
//   [0]       email: 'test_user_80507629@testuser.com',
//   [0]       identification: [Object],
//   [0]       phone: [Object],
//   [0]       type: null,
//   [0]       entity_type: null,
//   [0]       id: '1429882258'
//   [0]     },
//   [0]     payment_method: { id: 'account_money', issuer_id: '2005', type: 'account_money' },
//   [0]     payment_method_id: 'account_money',
//   [0]     payment_type_id: 'account_money',
//   [0]     platform_id: null,
//   [0]     point_of_interaction: {
//   [0]       business_info: [Object],
//   [0]       transaction_data: [Object],
//   [0]       type: 'CHECKOUT'
//   [0]     },
//   [0]     pos_id: null,
//   [0]     processing_mode: 'aggregator',
//   [0]     refunds: [],
//   [0]     shipping_amount: 0,
//   [0]     sponsor_id: null,
//   [0]     statement_descriptor: null,
//   [0]     status: 'approved',
//   [0]     status_detail: 'accredited',
//   [0]     store_id: null,
//   [0]     tags: null,
//   [0]     taxes_amount: 0,
//   [0]     transaction_amount: 380,
//   [0]     transaction_amount_refunded: 0,
//   [0]     transaction_details: {
//   [0]       acquirer_reference: null,
//   [0]       external_resource_url: null,
//   [0]       financial_institution: null,
//   [0]       installment_amount: 0,
//   [0]       net_received_amount: 364.42,
//   [0]       overpaid_amount: 0,
//   [0]       payable_deferral_period: null,
//   [0]       payment_method_reference_id: null,
//   [0]       total_paid_amount: 380
//   [0]     }
//   [0]   },
//   [0]   status: 200,
//   [0]   idempotency: undefined,
//   [0]   pagination: undefined
//   [0] }