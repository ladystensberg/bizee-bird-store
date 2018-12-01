import axios from 'axios';
const stripe = window.Stripe('pk_test_t2AOo3hDvdSwLzFABM1PuVpP');

function createPaymentToken() {
	return stripe.createToken('card', {
		number: '4242424242424242',
		exp_month: 12,
		exp_year: 2019,
		cvc: 123
	}).then(function(token) {
		console.log(token);
		axios.post('http://localhost:3001/api/payments', {token})
			.then(response => console.log(response))
			.catch(err => console.log(err));
	});
}


export default { 
	createPaymentToken 
};
