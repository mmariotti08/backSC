const mercadopago = require("mercadopago");

const receiveWebHookControllers = async (req, res) => {
    try {
      const payment = req.query;
      if (payment.type === 'payment') {
        const data = await mercadopago.payment.findById(payment['data.id'])

        const cleanData={
            userId: data.body.external_reference,
            payment_method: data.body.payment_type_id,
            total_amount: data.body.transaction_details.total_paid_amount,
            description: 'product varios',
            products: data.response.additional_info.items.map(element => ({
                productId: element.id,
                size: element.category_id,
                quantity: 1
            }))
        }
        console.log(cleanData)
      }
      res.sendStatus(204);
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
} 
module.exports = { receiveWebHookControllers }
// let items=[
//     {
//      category_id: '7',
//      description: 'Air Jordan',
//      id: '1',
//      picture_url: 'https://http2.mlstatic.com/D_NQ_NP_978975-MLA70579171040_072023-F.jpg',
//      quantity: '1',
//      title: "Air Jordan 1 Retro High OG 'Shadow' 2018",
//      unit_price: '160'
//     },
//     {
//      category_id: '15',
//      description: 'Air Jordan',
//      id: '3',
//      picture_url: 'https://http2.mlstatic.com/D_NQ_NP_934147-MLA70614744569_072023-F.jpg',
//      quantity: '1',
//      title: "Air Jordan 11 Retro 'Space Jam' 2016",
//      unit_price: '220'
//     }
// ]

// let mercadopagoResponse={
//        body: {
//          accounts_info: null,
//          acquirer_reconciliation: [],
//          authorization_code: null,
//          brand_id: null,
//          build_version: '3.8.1',
//          call_for_authorize_id: null,
//          captured: true,
//          card: {},
//          charges_details: [],
//          collector_id: 1427193199,
//          corporation_id: null,
//          counter_currency: null,
//          coupon_amount: 0,
//          currency_id: 'ARS',
//          date_approved: '2023-07-20T22:46:22.012-04:00',
//          date_created: '2023-07-20T22:46:21.979-04:00',
//          date_last_updated: '2023-07-20T22:46:22.012-04:00',
//          date_of_expiration: null,
//          deduction_schema: null,
//          description: "Yeezy Boost 350 V2 'Clay'",
//          differential_pricing_id: null,
//          external_reference: 'a6251e1b-6806-43f6-a748-0b4e8f2280ce',
//          fee_details: [ [Object] ],
//          financing_group: null,
//          id: 1313976400,
//          installments: 1,
//          integrator_id: null,
//          issuer_id: '2005',
//          live_mode: false,
//          marketplace_owner: null,
//          merchant_account_id: null,
//          merchant_number: null,
//          metadata: {},
//          money_release_date: '2023-08-07T22:46:22.012-04:00',
//          money_release_schema: null,
//          money_release_status: null,
//          notification_url: 'https://1b49-2803-9800-9001-c29f-38e0-d923-61ec-174.ngrok-free.app/payment/webhook',  
//          operation_type: 'regular_payment',
//          order: { id: '10570350209', type: 'mercadopago' },
//          payer: {
//            first_name: null,
//            last_name: null,
//            email: 'test_user_80507629@testuser.com',
//            identification: [Object],
//            phone: [Object],
//            type: null,
//            entity_type: null,
//            id: '1427199257'
//          },
//          payment_method: { id: 'account_money', issuer_id: '2005', type: 'account_money' },
//          payment_method_id: 'account_money',
//          payment_type_id: 'account_money',
//          platform_id: null,
//          point_of_interaction: {
//            business_info: [Object],
//            transaction_data: [Object],
//            type: 'CHECKOUT'
//          },
//          pos_id: null,
//          processing_mode: 'aggregator',
//          refunds: [],
//          shipping_amount: 0,
//          sponsor_id: null,
//          statement_descriptor: null,
//          status: 'approved',
//          status_detail: 'accredited',
//          store_id: null,
//          tags: null,
//          taxes_amount: 0,
//          transaction_amount: 370,
//          transaction_amount_refunded: 0,
//          transaction_details: {
//            acquirer_reference: null,
//            external_resource_url: null,
//            financial_institution: null,
//            installment_amount: 0,
//            net_received_amount: 354.83,
//            overpaid_amount: 0,
//            payable_deferral_period: null,
//            payment_method_reference_id: null,
//            total_paid_amount: 370
//         }
//        },
//        response: {
//          accounts_info: null,
//          acquirer_reconciliation: [],
//          additional_info: {
//            authentication_code: null,
//            available_balance: null,
//            ip_address: '170.51.102.247',
//            items: [Array],
//            nsu_processadora: null
//          },
//          authorization_code: null,
//          binary_mode: false,
//          brand_id: null,
//          build_version: '3.8.1',
//          call_for_authorize_id: null,
//          captured: true,
//          card: {},
//          charges_details: [],
//          collector_id: 1427193199,
//          corporation_id: null,
//          counter_currency: null,
//          coupon_amount: 0,
//          currency_id: 'ARS',
//          date_approved: '2023-07-20T22:46:22.012-04:00',
//          date_created: '2023-07-20T22:46:21.979-04:00',
//          date_last_updated: '2023-07-20T22:46:22.012-04:00',
//          date_of_expiration: null,
//          deduction_schema: null,
//          description: "Yeezy Boost 350 V2 'Clay'",
//          differential_pricing_id: null,
//          external_reference: 'a6251e1b-6806-43f6-a748-0b4e8f2280ce',
//          fee_details: [ [Object] ],
//          financing_group: null,
//          id: 1313976400,
//          installments: 1,
//          integrator_id: null,
//          issuer_id: '2005',
//          live_mode: false,
//          marketplace_owner: null,
//          merchant_account_id: null,
//          merchant_number: null,
//          metadata: {},
//          money_release_date: '2023-08-07T22:46:22.012-04:00',
//          money_release_schema: null,
//          money_release_status: null,
//          notification_url: 'https://1b49-2803-9800-9001-c29f-38e0-d923-61ec-174.ngrok-free.app/payment/webhook',  
//          operation_type: 'regular_payment',
//          order: { id: '10570350209', type: 'mercadopago' },
//          payer: {
//            first_name: null,
//            last_name: null,
//            email: 'test_user_80507629@testuser.com',
//            identification: [Object],
//            phone: [Object],
//            type: null,
//            entity_type: null,
//            id: '1427199257'
//          },
//          payment_method: { id: 'account_money', issuer_id: '2005', type: 'account_money' },
//          payment_method_id: 'account_money',
//          payment_type_id: 'account_money',
//          platform_id: null,
//          point_of_interaction: {
//            business_info: [Object],
//            transaction_data: [Object],
//            type: 'CHECKOUT'
//          },
//          pos_id: null,
//          processing_mode: 'aggregator',
//          refunds: [],
//          shipping_amount: 0,
//          sponsor_id: null,
//          statement_descriptor: null,
//          status: 'approved',
//          status_detail: 'accredited',
//          store_id: null,
//          tags: null,
//          taxes_amount: 0,
//          transaction_amount: 370,
//          transaction_amount_refunded: 0,
//          transaction_details: {
//            acquirer_reference: null,
//            external_resource_url: null,
//            financial_institution: null,
//            installment_amount: 0,
//            net_received_amount: 354.83,
//            overpaid_amount: 0,
//            payable_deferral_period: null,
//            payment_method_reference_id: null,
//            total_paid_amount: 370 
//             }
//         }
//     }




// const mercadopago = require("mercadopago");

// const receiveWebHookControllers=async(req, res)=>{
//     try{
//         const payment=req.query;
//         if(payment.type ==='payment'){
//             const data= await mercadopago.payment.findById(payment['data.id'])
//             console.log('data++++++',data)

//             //aca se puede guardar en base de datos
//         }
//         res.send(204)

//     }catch(error){
//         console.log(error);
//         return res.send(500).json({error: error.message})

//     }    

//     res.send('webHook')

// }

// module.exports={receiveWebHookControllers}