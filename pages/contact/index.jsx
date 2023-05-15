const ContactPage = () => {
  return (
    <div className="min-h-screen my-10 p-3 lg:p-0 flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col items-center gap-5 lg:w-3/5">
        <h2 className="text-3xl text-teal-400 font-semibold">Contact Me</h2>
        <form className="w-full lg:w-4/5 flex flex-col gap-5">
          <div className="form-control w-full">
            <label
              className="text-lg hover:text-teal-300 duration-300 cursor-pointer after:content-['*'] after:ml-0.5 after:text-red-500 font-medium"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full py-2 px-2 bg-transparent rounded border outline-none focus:border-teal-300"
              type="text"
              id="name"
              name="name"
              placeholder="your name"
              required
            />
          </div>

          <div className="form-control w-full">
            <label
              className="text-lg hover:text-teal-300 duration-300 cursor-pointer after:content-['*'] after:ml-0.5 after:text-red-500 font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full py-2 px-2 bg-transparent rounded border outline-none focus:border-teal-300"
              type="email"
              id="email"
              name="email"
              placeholder="your email"
              required
            />
          </div>

          <div className="form-control w-full">
            <label
              className="text-lg hover:text-teal-300 duration-300 cursor-pointer after:content-['*'] after:ml-0.5 after:text-red-500 font-medium inline"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full py-2 px-2 bg-transparent rounded border focus:outline-none focus:border-teal-300 resize-none"
              name="message"
              id="message"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="border border-teal-500 rounded py-2 w-full lg:w-2/5 uppercase tracking-wider bg-teal-300 text-teal-50 hover:bg-teal-500 duration-300"
          >
            send message
          </button>
        </form>
      </div>

      <div className="form-right lg:w-2/5 flex flex-col lg:justify-evenly gap-5">
        <address className="flex flex-col justify-between gap-10">
          <div className="present-add">
            <h4 className="text-2xl font-bold">Present Adress:</h4>
            <p>Islamic University</p>
            <p>Kushtia, Bangladesh</p>
          </div>
          <div className="permanent-add">
            <h4 className="text-2xl font-bold">Present Adress:</h4>
            <p>Bogura, Rajshahi, Bangladesh</p>
          </div>
        </address>

        <div className="form-right-down">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.91759624307!2d89.2878040411095!3d24.841514597346322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1684148065337!5m2!1sen!2sbd"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
