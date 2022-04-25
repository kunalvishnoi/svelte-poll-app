<script>
import {onMount} from 'svelte';

const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
     document.body.appendChild(script);
   });
};

onMount(()=> {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
})

const handleClick = () => {

    const options = {
    key: "rzp_test_q8Lg3c7KvHlrl4",
    currency: "INR",
    // amount: 70000,
    name: "Exploring Checkout",
    description: "Testing Checkout",
    redirect: true,
    // image: "",
    theme: {
        color: '#f05181',
        hide_topbar: true,
    },
    modal: {
        confirm_close: true
    },
    // order_id:"order_JLhHQuRmGgRucD",
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Kunal Vishnoi",
      contact: "9999999999",
      email: 'v@gmail.com',
      amount: '60000'
    },
    config: {
    display: {
      blocks: {
        banks: {
          name: 'Pay using HDFC banks',
          instruments: [
            {
              method: 'netbanking',
              banks: ['HDFC'],
            },
            {
              method: 'card',
              issuers: ['HDFC'],
 
            },
            {
                method: 'wallet',
                wallets:['payzapp']
            }

          ],
        },
      },
      sequence: ['block.banks'],
      preferences: {
        show_default_blocks: false,
      },
    },
},

  };
    const paymentObject = new window.Razorpay(options);
paymentObject.open();
}

</script>
<footer>
    <!-- <span class="copyright">Copyright 2022 Poll Ninjaaaa</span> -->
    <button on:click={handleClick}>Pay Now</button>
   
</footer>

<style>
footer {
    padding: 40px;
    text-align: center;
}
.copyright {
    color: #aaa;
    padding: 20px;
    border-top: 1px solid #ddd;
    font-size: 24px;

}
</style>