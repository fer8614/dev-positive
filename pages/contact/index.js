import PageShell from "../../components/PageShell";
import SEOHead from "../../components/SEOHead";
import { HiLocationMarker } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact - Yesi Cepeda Benitez | Get In Touch"
        description="Ready to collaborate? Contact me for web development projects, consultations, or any questions about modern web solutions."
      />
      <PageShell
        eyebrow="Contact"
        title="Let’s Connect"
        description="Ready to bring your ideas to life? I'm here to help you create amazing digital experiences."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="site-surface p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <HiLocationMarker className="mt-1 text-2xl text-violet-300" aria-hidden="true" />
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="font-medium text-white">Keizer, Oregon</p>
              </div>
            </div>
          </div>
          <div className="site-surface p-6 sm:p-8 lg:col-span-2">
            <h2 className="mb-6 text-2xl font-semibold text-white">Send me a message</h2>
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">Your Name</label>
                  <input id="name" type="text" placeholder="Your Name" className="site-input" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Your Email</label>
                  <input id="email" type="email" placeholder="Your Email" className="site-input" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-200">Subject</label>
                <input id="subject" type="text" placeholder="Subject" className="site-input" required />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Your Message</label>
                <textarea id="message" placeholder="Your Message" className="site-input min-h-[150px] resize-y" required />
              </div>
              <button type="submit" className="site-button">
                Send Message <BsArrowRight aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </PageShell>
    </>
  );
};

export default Contact;
