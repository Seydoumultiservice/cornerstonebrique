import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="font-playfair text-2xl font-semibold mb-6 text-cornerstone-darkgray">
        Nos Coordonnées
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-cornerstone-blue p-3 rounded-full text-white mr-4">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-cornerstone-darkgray">Adresse</h3>
            <p className="text-gray-600">
              Akodessewa, Après les rails, non loin de la station d'essence CM, Lomé, Togo
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-cornerstone-blue p-3 rounded-full text-white mr-4">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-cornerstone-darkgray">Téléphone</h3>
            <p className="text-gray-600">
              <a href="tel:+22890964993" className="hover:text-cornerstone-blue">(+228) 90 96 49 93</a>
            </p>
            <p className="text-gray-600">
              <a href="tel:+22899870195" className="hover:text-cornerstone-blue">(+228) 99 87 01 95</a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-cornerstone-blue p-3 rounded-full text-white mr-4">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-cornerstone-darkgray">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:contact@cornerstonebrique.com" className="hover:text-cornerstone-blue">
                contact@cornerstonebrique.com
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-lg text-cornerstone-darkgray mb-3">
          Heures d'Ouverture
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li>
            <span className="font-medium">Lundi - Vendredi:</span> 8h00 - 18h00
          </li>
          <li>
            <span className="font-medium">Samedi:</span> 8h00 - 16h00
          </li>
          <li>
            <span className="font-medium">Dimanche:</span> Fermé
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
