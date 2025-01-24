import bg from '../assets/bg/experience_bg.jpg'; // Background image

const BookACallSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between bg-cover bg-center py-16 px-5"
      style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}
    >
      {/* Left side with text and explanation */}
      <div className="lg:w-1/2 text-left text-white px-6 py-8 lg:py-16 max-w-lg mx-auto">
        <h2 className="text-4xl font-bold mb-6 leading-tight">Book a Call with Us</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Let’s schedule a quick meeting to discuss your website needs. Whether you are looking for website
          development, design consultation, or a full-scale web solution, we are here to help. Select a time
          that works for you, and we’ll set up a Google Meet to discuss the details.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          This is a no-obligation, free consultation call. We look forward to collaborating with you and bringing
          your ideas to life!
        </p>
      </div>

      {/* Right side with form to schedule a call */}
      <div className="lg:w-1/2 bg-white shadow-xl rounded-lg p-8 w-full max-w-lg mx-auto lg:mx-0 mt-8 lg:mt-0">
        <h3 className="text-2xl font-semibold text-[#7436bb] mb-6">Schedule a Meeting</h3>
        <form action="https://your-meeting-scheduler.com" method="POST" className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7436bb] shadow-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7436bb] shadow-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Preferred Date</label>
            <input
              type="date"
              name="date"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7436bb] shadow-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Preferred Time</label>
            <input
              type="time"
              name="time"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7436bb] shadow-md"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-10 bg-[#7436bb] text-white rounded-lg font-semibold transition duration-300 hover:bg-[#5a2a94] shadow-lg"
            >
              Schedule Call
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookACallSection;
