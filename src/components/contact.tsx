import { Contact } from "@/types/queries";
import { Phone, MessageCircle } from "lucide-react";

const contacts: Contact[] = [
  {
    id: 1,
    number: "7978692145",
    isWhatsAppBusiness: true,
    label: "Customer Support",
  },
];

export const ContactTo = () => {
  const handleWhatsAppClick = (number: string, isBusinessAccount: boolean) => {
    const message = encodeURIComponent(
      "Hi! I'm interested in knowing more about your products."
    );
    const whatsappURL = isBusinessAccount
      ? `https://wa.me/91${number}?text=${message}`
      : `https://api.whatsapp.com/send?phone=91${number}&text=${message}`;
    window.open(whatsappURL, "_blank");
  };
  const handlePhoneClick = (number: string) => {
    window.location.href = `tel:+91${number}`;
  };
  return (
    <section id="contact" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            For any queries feel free to contact/whatsapp us to place orders.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center space-y-6">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {contact.label}
                </h3>
                <p className="text-gray-600">+91 {contact.number}</p>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => handlePhoneClick(contact.number)}
                  className="flex items-center justify-center px-4 py-2 border-2 border-red-700 text-red-700 rounded-md hover:bg-red-50 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Click to Call</span>
                </button>

                <button
                  onClick={() =>
                    handleWhatsAppClick(
                      contact.number,
                      contact.isWhatsAppBusiness
                    )
                  }
                  className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button className="flex items-center justify-center px-4 py-2 border-2 border-red-700 text-black rounded-md bg-red-50 transition-colors duration-200">
                  <span>
                    Address:{" "}
                    <a
                      href="https://www.google.com/maps/dir//20.4620621,85.8781491/@20.4621348,85.8783126,55m/data=!3m1!1e3!4m2!4m1!3e9?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Dall mill lane, Tarachand Patna, Pithapur, Cuttack
                    </a>
                  </span>
                </button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500">
                {/* <p>
                    Address:{" "}
                    <a
                      href="https://www.google.com/maps/dir//20.4621786,85.8781702/@20.4620707,85.8370217,13395m/data=!3m2!1e3!4b1!4m2!4m1!3e9?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                      className="text-blue-500"
                    >
                      Dall mill lane, Tarachand Patna, Pithapur, Cuttack
                    </a>
                  </p> */}
                <p>Timing: 10:00 AM - 8:00 PM IST</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
