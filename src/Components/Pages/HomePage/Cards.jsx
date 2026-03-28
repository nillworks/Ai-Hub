const Cards = () => {
  return (
    <div className="my-4 mx-2 shadow-sm border border-[#ddd] rounded-2xl">
      <div className="flex flex-col gap-4 rounded-2xl">
        {/* Images */}
        <div className="py-15 bg-taupe-100 relative rounded-t-2xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"
            alt="icons"
            className="w-60 h-60 mx-auto object-contain"
          />

          {/* Status */}
          <div>
            <button
              className="px-7 bg-red-500 text-white 
            py-2 rounded-full absolute top-2.5 right-3 uppercase font-semibold"
            >
              🔥 Popular
            </button>
          </div>
        </div>

        {/* contents */}

        <div className="bg-white px-3 py-2 space-y-4">
          {/* details */}
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold">ChatGPT</h2>
            <p className="text-lg">
              The world's most popular AI assistant by OpenAI. Versatile for
              writing, coding, reasoning, and creative tasks.
            </p>
            <h4 className="text-2xl font-semibold">
              $20 <span className="text-gray-400">/month</span>
            </h4>
          </div>

          {/* button */}
          <div>
            <button
              className="btn w-full bg-red-500
             text-white capitalize text-lg border-none shadow-none rounded-lg  px-0 hover:bg-red-600"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
