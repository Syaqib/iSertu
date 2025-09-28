export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to providing innovative clay-based solutions for personal care and halal hygiene
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Vision</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center italic">
              "To be a trusted provider of clay-based personal care and halal hygiene solutions, 
              delivering purity, safety, and convenience for families and industries worldwide."
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Mission</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To innovate products based on natural kaolin clay for skin, home, and industrial use.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To simplify and modernize the practice of sertu through science and compliance.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To ensure every VLS product is safe, effective, and accessible to consumers.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To champion halal, sustainable, and family-friendly solutions from Malaysia to the world.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Values */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to excellence in every product we create, ensuring that our clay-based solutions 
            meet the highest standards of quality, safety, and effectiveness. Our dedication to innovation 
            and customer satisfaction drives us to continuously improve and expand our product range.
          </p>
        </div>
      </div>
    </div>
  );
}

