'use strict';

exports.hotelHandler = async (event) => {
	console.log('Book a Hotel');
	error();
	return true;
};

exports.flightHandler = async (event) => {
	console.log('Book a Flight');
	error();
	return true;
};

exports.carHandler = async (event) => {
	console.log('Book a Car');
	error();
	return true;
};

function error() {
	if (Math.random() > 0.8) {
		console.log('error is going to be thrown');
		throw new Error('Random Error');
	}
	return true;
}
