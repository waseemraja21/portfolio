import React from "react";

function Contact() {
  return (
    <div className="bg-custom-dblue">
      <h2 className="text-4xl text-center font-poppins font-semibold py-10">
        CONTACT
      </h2>
      <div className="flex flex-row items-center py-10 justify-center">
        <div className="px-20">
          <h3 className="font-thin text-2xl">Let's Connect</h3>
          <h4 className="font-semibold text-2xl">DIGITALLY</h4>
        </div>
        <div className="px-20 text-2xl font-thin">
          <h3>
            <a
              href="mailto:waseemrajaanim@gmail.com"
              className="hover:underline"
            >
              EMAIL
            </a>
          </h3>
          <h3>
            <a
              href="https://github.com/waseemraja21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GITHUB
            </a>
          </h3>
          <h3>
            <a
              href="https://www.linkedin.com/in/waseem-raja-962863207/"
              target="_blank"
              rel="noopenere noreferrer"
              className="hover:underline"
            >
              LINKEDIN
            </a>
          </h3>
          <h3>
            <a
              href="https://x.com/waseemanim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              TWITTER
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
