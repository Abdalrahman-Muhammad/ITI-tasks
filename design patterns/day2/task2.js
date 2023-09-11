// ShipmentService.js
class ShipmentService {
  constructor() {
    this.shipments = [];
  }

  createShipment(shipmentData, shippingMethod) {
    const shipment = new Shipment(shipmentData);
    shipment.setShippingMethod(shippingMethod);
    this.shipments.push(shipment);
    return shipment;
  }

  getShipmentById(shipmentId) {
    return (
      this.shipments.find((shipment) => shipment.id === shipmentId) || null
    );
  }
}

// ShippingMethod.js
class AirShippingMethod {
  calculateCost(shipment) {
    if (shipment.shippingMethod instanceof AirShippingMethod) {
      return 1000;
    } else {
      return 2000;
    }
  }
}

// OverseasRequirements.js
class OverseasRequirements {
  addRequirements(shipment, requirements) {
    shipment.addRequirements(requirements);
  }
}

// Shipment.js
class Shipment {
  constructor(shipmentData) {
    this.id = generateUniqueId(); // Generate a unique ID for the shipment
    this.pickupDate = shipmentData.pickupDate;
    this.deliveryDate = shipmentData.deliveryDate;
    this.commodities = shipmentData.commodities;
    this.shipFrom = shipmentData.shipFrom;
    this.shipTo = shipmentData.shipTo;
    this.requirements = [];
    this.shippingMethod = null;
  }

  addRequirements(requirements) {
    this.requirements.push(requirements);
  }

  setShippingMethod(shippingMethod) {
    this.shippingMethod = shippingMethod;
  }

  calculateShippingCost() {
    if (this.shippingMethod) {
      return this.shippingMethod.calculateCost(this);
    }
    throw new Error("Shipping method not set for the shipment.");
  }
}

// Utility function to generate a unique ID
let id = 1;
function generateUniqueId() {
  id++;
  return id;
}

const shipmentService = new ShipmentService();
const shippingMethod = new AirShippingMethod(); // Example of a new shipping method

const shipmentData = {
  pickupDate: new Date(),
  deliveryDate: new Date(),
  commodities: ["Item 1", "Item 2"],
  shipFrom: "Location A",
  shipTo: "Location B",
};

const shipment = shipmentService.createShipment(shipmentData, shippingMethod);
console.log(shipment);

const retrievedShipment = shipmentService.getShipmentById(shipment.id);
console.log(retrievedShipment);

const shippingCost = shipment.calculateShippingCost();
console.log(shippingCost);
