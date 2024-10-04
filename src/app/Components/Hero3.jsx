// pages/index.js

import Image from "next/image";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FDE2C2" }}>
      {/* Container */}
      <div className="max-w-screen-lg mx-auto p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          The Drip Sale!
        </h1>

        {/* Shoes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Shoe Item 1 */}
          <div className="bg-white p-4 rounded-lg text-center shadow-md">
            <img src="/shoe1.png" alt="Shoe 1" className="mx-auto mb-6 object-contain h-48" />
            <p className="text-lg font-bold" style={{ color: '#824b1a' }}>Rs 2499</p>
            <p className="text-sm line-through text-gray-500">Rs 6499</p>
          </div>

          {/* Shoe Item 2 */}
          <div className="bg-white p-4 rounded-lg text-center shadow-md">
            <img src="/shoe2.png" alt="Shoe 2" className="mx-auto mb-6 object-contain h-48" />
            <p className="text-lg font-bold" style={{ color: '#824b1a' }}>Rs 6999</p>
            <p className="text-sm line-through text-gray-500">Rs 9999</p>
          </div>

          {/* Shoe Item 3 */}
          <div className="bg-white p-4 rounded-lg text-center shadow-md">
            <img src="/shoe3.png" alt="Shoe 3" className="mx-auto mb-6 object-contain h-48" />
            <p className="text-lg font-bold" style={{ color: '#824b1a' }}>Rs 13999</p>
            <p className="text-sm line-through text-gray-500">Rs 15999</p>
          </div>

          {/* Shoe Item 4 */}
          <div className="bg-white p-4 rounded-lg text-center shadow-md">
            <img src="/shoe4.png" alt="Shoe 4" className="mx-auto mb-6 object-contain h-48" />
            <p className="text-lg font-bold" style={{ color: '#824b1a' }}>Rs 9999</p>
            <p className="text-sm line-through text-gray-500">Rs 12999</p>
          </div>

          {/* Shoe Item 5 */}
          <div className="bg-white p-4 rounded-lg text-center shadow-md">
            <img src="/shoe5.png" alt="Shoe 5" className="mx-auto mb-6 object-contain h-48" />
            <p className="text-lg font-bold" style={{ color: '#824b1a' }}>Rs 7999</p>
            <p className="text-sm line-through text-gray-500">Rs 9999</p>
          </div>

          {/* Shoe Item 6 */}
          <div className="bg-white p-4 rounded-lg text-center shadow-md">
            <img src="/shoe6.png" alt="Shoe 6" className="mx-auto mb-6 object-contain h-48" />
            <p className="text-lg font-bold" style={{ color: '#824b1a' }}>Rs 9999</p>
            <p className="text-sm line-through text-gray-500">Rs 11999</p>
          </div>

          {/* Shoe Item 7 */}
          <div className="bg-white p-4 rounded-lg text-center shadow-md">
            <img src="/shoe7.png" alt="Shoe 7" className="mx-auto mb-6 object-contain h-48" />
            <p className="text-lg font-bold" style={{ color: '#824b1a' }}>Rs 7999</p>
            <p className="text-sm line-through text-gray-500">Rs 9999</p>
          </div>

          {/* Shoe Item 8 */}
          <div className="bg-white p-4 rounded-lg text-center shadow-md">
            <img src="/shoe8.png" alt="Shoe 8" className="mx-auto mb-6 object-contain h-48" />
            <p className="text-lg font-bold" style={{ color: '#824b1a' }}>Rs 5999</p>
            <p className="text-sm line-through text-gray-500">Rs 8999</p>
          </div>
        </div>


        {/* View More Button */}
        <div className="text-center mt-8">
        <button className="bg-black rounded hover:bg-orange-300 text-white px-6 py-3 transition-all duration-300 ease-in-out">
  View More →
</button>
        </div>
      </div>
    </div>
  );
}
