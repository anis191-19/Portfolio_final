const Contact = () => {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 py-14">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-3 text-slate-400">
        Open to freelance and full-time opportunities. Send me a message and I’ll reply as soon as possible.
      </p>
      
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <form 
          action="mailto:youremail@example.com" 
          method="POST" 
          encType="text/plain" 
          className="space-y-4">
          <div>
            <label className="text-sm">Name</label>
            <input 
              name="name" 
              required 
              className="mt-1 block w-full rounded-md border border-slate-700 px-3 py-2 bg-transparent" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input 
              name="email" 
              type="email" 
              required 
              className="mt-1 block w-full rounded-md border border-slate-700 px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Message</label>
            <textarea 
              name="message" 
              rows="5" 
              required 
              className="mt-1 block w-full rounded-md border border-slate-700 px-3 py-2 bg-transparent"
            ></textarea>
          </div>
          <button type="submit" className="bg-[#0ea5a4] text-white px-4 py-2 rounded-md">
            Send message
          </button>
        </form>

        <div className="p-6 rounded-lg border border-slate-700">
          <h3 className="text-sm text-slate-500">Other ways to reach me</h3>
          <p className="mt-3 font-medium">anisulalam2003@gmail.com</p>
          <p className="mt-3 text-sm text-slate-500">
            Or message me on LinkedIn / GitHub. I typically reply within 1–3 days.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a 
              href="https://github.com/" 
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700">
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/" 
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
