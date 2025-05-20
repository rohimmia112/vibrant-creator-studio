
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
              <p className="text-gray-600 mb-8">
                Ready to boost your YouTube presence? Let's discuss how my services can help you grow your channel and engage more viewers.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <div className="space-y-1">
                    <p className="text-purple-600">rohimmia138883@gmail.com</p>
                    <p className="text-purple-600">mahinworkocpc@gmail.com</p>
                    <p className="text-purple-600">zaynrahmanonline@gmail.com</p>
                    <p className="text-purple-600">rohimseoexpert@gmail.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Let's Connect</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 transition-colors hover:bg-purple-600 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 transition-colors hover:bg-purple-600 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 transition-colors hover:bg-purple-600 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 transition-colors hover:bg-purple-600 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Volume bars */}
                <div className="flex items-end h-16 mt-4">
                  <div className="flex items-end space-x-1">
                    {[20, 35, 25, 40, 30].map((height, index) => (
                      <div 
                        key={index} 
                        className="w-1.5 bg-purple-500 rounded-full animate-volume-wave" 
                        style={{ 
                          height: `${height}px`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="ml-3 text-sm font-medium text-gray-500">Always listening</div>
                </div>
              </div>
            </div>

            {/* JotForm Embed */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                id="JotFormIFrame-251392805458463"
                title="Contact Form"
                onLoad={() => {
                  window.parent.scrollTo(0, 0);
                }}
                allowTransparency={true}
                allowFullScreen={true}
                allow="geolocation; microphone; camera"
                src="https://form.jotform.com/251392805458463"
                frameBorder="0"
                style={{
                  width: "100%",
                  height: "539px",
                  border: "none",
                }}
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
