

// Add more FAQ items as needed

import AccordionItem from "../according"

function FAQ() {
    return (
        <>

<section className="faq section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <h2>General Info.</h2>

            <div className="accordion" id="accordionGeneral">
              <AccordionItem
                question="What is this Little Fashion?"
                answer="<strong>Little Fashion</strong> is free Bootstrap 5 website template for everyone. There are 8 HTML pages included in this template and you can expand more pages as you need.<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              <AccordionItem
                question="What is Tooplate website?"
                answer="<a href='https://www.tooplate.com/free-templates' target='_blank'>Tooplate</a> is a great website to download free HTML website templates for your business or personal use. Tooplate website has been online for almost 8 years now. Thank you for visiting our website."
              />
              <AccordionItem
                question="How do I support your website?"
                answer="You can support our Tooplate website by sharing it to your friends or colleagues on the web or social media."
              />
            </div>

            <h2 className="mt-5">About <span>our products</span></h2>

            <div className="accordion" id="accordionProduct">
              <AccordionItem
                question="What is Fashion Design?"
                answer="<strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.<br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              <AccordionItem
                question="How do I use the product?"
                answer="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
              />
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}

export default FAQ