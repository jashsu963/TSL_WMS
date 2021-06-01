const domain = `http://115.73.208.164:4600/ws/`;
export default {
  login: `${domain}auth/login?`,
  inboundLoads: `${domain}wm/inboundLoads`,
  inboundShipments: `${domain}wm/inboundShipments`,
  inboundShipmentLines: `${domain}wm/inboundShipmentLines`,
};
