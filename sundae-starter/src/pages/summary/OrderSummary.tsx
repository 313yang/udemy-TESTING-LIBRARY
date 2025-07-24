import SummaryForm from "./SummaryForm";

const OrderSummary = () => {
  return (
    <div>
      <h2>Order Summary</h2>
      <div>
        <h4>Scoops: ${0}</h4>
        <ul>
          <li>Chocolate: 2</li>
          <li>Vanilla: 1</li>
        </ul>
      </div>
      <div>
        <h4>Topping: ${0}</h4>
        <ul>
          <li>Chocolate: 2</li>
          <li>Vanilla: 1</li>
        </ul>
      </div>
      <h3>Total: ${0}</h3>
      <SummaryForm />
    </div>
  );
};

export default OrderSummary;
