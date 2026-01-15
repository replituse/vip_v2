import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const partners = [
  { name: "arcserve", logo: "https://logo.clearbit.com/arcserve.com" },
  { name: "aruba", logo: "https://logo.clearbit.com/arubanetworks.com" },
  { name: "cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { name: "paloalto", logo: "https://logo.clearbit.com/paloaltonetworks.com" },
  { name: "d-link", logo: "https://logo.clearbit.com/dlink.com" },
  { name: "jbl", logo: "https://logo.clearbit.com/jbl.com" },
  { name: "f5", logo: "https://logo.clearbit.com/f5.com" },
  { name: "dell", logo: "https://logo.clearbit.com/dell.com" },
  { name: "netwrix", logo: "https://logo.clearbit.com/netwrix.com" },
  { name: "nutanix", logo: "https://logo.clearbit.com/nutanix.com" },
  { name: "juniper", logo: "https://logo.clearbit.com/juniper.net" },
  { name: "purestorage", logo: "https://logo.clearbit.com/purestorage.com" },
  { name: "commscope", logo: "https://logo.clearbit.com/commscope.com" },
  { name: "dahua", logo: "https://logo.clearbit.com/dahuasecurity.com" },
  { name: "sonicwall", logo: "https://logo.clearbit.com/sonicwall.com" },
  { name: "cohesity", logo: "https://logo.clearbit.com/cohesity.com" },
  { name: "alcatel-lucent", logo: "https://logo.clearbit.com/alcatel-lucent.com" },
  { name: "axis", logo: "https://logo.clearbit.com/axis.com" },
  { name: "aws", logo: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "hikvision", logo: "https://logo.clearbit.com/hikvision.com" },
  { name: "versa", logo: "https://logo.clearbit.com/versa-networks.com" },
  { name: "vmware", logo: "https://logo.clearbit.com/vmware.com" },
  { name: "microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "molex", logo: "https://logo.clearbit.com/molex.com" },
  { name: "hp", logo: "https://logo.clearbit.com/hp.com" },
  { name: "azure", logo: "https://logo.clearbit.com/azure.microsoft.com" },
  { name: "lifesize", logo: "https://logo.clearbit.com/lifesize.com" },
  { name: "crompton", logo: "https://logo.clearbit.com/crompton.co.in" },
  { name: "siemens", logo: "https://logo.clearbit.com/siemens.com" },
  { name: "oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "vertiv", logo: "https://logo.clearbit.com/vertiv.com" },
  { name: "canon", logo: "https://logo.clearbit.com/canon.com" },
  { name: "aten", logo: "https://logo.clearbit.com/aten.com" },
  { name: "zebra", logo: "https://logo.clearbit.com/zebra.com" },
  { name: "audio-technica", logo: "https://logo.clearbit.com/audio-technica.com" },
  { name: "canadian solar", logo: "https://logo.clearbit.com/canadiansolar.com" },
  { name: "lg chem", logo: "https://logo.clearbit.com/lgchem.com" },
  { name: "bosch", logo: "https://logo.clearbit.com/bosch.com" },
  { name: "rubrik", logo: "https://logo.clearbit.com/rubrik.com" },
  { name: "commvault", logo: "https://logo.clearbit.com/commvault.com" },
  { name: "amara raja", logo: "https://logo.clearbit.com/amararaja.com" },
  { name: "tdk", logo: "https://logo.clearbit.com/tdk.com" },
  { name: "qsc", logo: "https://logo.clearbit.com/qsc.com" },
  { name: "polycom", logo: "https://logo.clearbit.com/poly.com" },
  { name: "samsung", logo: "https://logo.clearbit.com/samsung.com" },
];

export default function Partners() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-24 px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto">
        <div className="mb-12 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white border-b-2 border-primary pb-2 uppercase tracking-wide">
            Our Trustable Brands
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              className="bg-white rounded-xl p-4 flex items-center justify-center aspect-[3/2] shadow-lg hover:scale-105 transition-transform group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain transition-all"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('google')) {
                    const domain = partner.logo.split('/').pop();
                    target.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
