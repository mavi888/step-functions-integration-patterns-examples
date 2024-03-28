'use strict';

exports.hotelHandler = async (event) => {
	console.log('Cancel a Hotel');
	return true;
};

exports.flightHandler = async (event) => {
	console.log('Cancel a Flight');
	return true;
};

exports.carHandler = async (event) => {
	console.log('Cancel a Car');
	return true;
};
