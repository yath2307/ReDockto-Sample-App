import { Component } from '@angular/core';

declare var RazorpayCheckout: any;

@Component({
  selector: 'app-razor',
  templateUrl: 'razor.page.html',
  styleUrls: ['razor.page.scss'],
})
export class RazorPage {
  paymentAmount: number = 100;
  currency: string = 'INR';
  currencyIcon: string = 'Rs';
  razor_key = 'rzp_test_nRhhFY7AYsUONY';
  cardDetails: any = {};

  constructor() {
  }

  payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency,
      key: this.razor_key,
      amount: this.paymentAmount,
      name: 'Yatharth Gupta',
      prefill: {
        email: 'yatharthgupta230799@gmail.com',
        contact: '8630019767',
        name: 'ReDockto'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function(success) {
alert('payment_id: ' + success.razorpay_payment_id)
var orderId = success.razorpay_order_id
var signature = success.razorpay_signature
}
var cancelCallback = function(error) {
alert(error.description + ' (Error '+error.code+')')
}
RazorpayCheckout.on('payment.success', successCallback)
RazorpayCheckout.on('payment.cancel', cancelCallback)
RazorpayCheckout.open(options)
  }

}
