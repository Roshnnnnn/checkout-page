import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-2xl font-bold mb-4 text-gray-800">Checkout</div>
      <Link
        to="https://buy.stripe.com/test_5kAcOjdrC9f3beMbIJ"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Complete Purchase
      </Link>
    </div>
  );
};

export default Checkout;
