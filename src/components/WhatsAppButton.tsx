import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5511974489877?text=Olá! Gostaria de saber mais sobre os serviços da GEO Digital.";

const WhatsAppButton = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-10 h-10 md:w-12 md:h-12 rounded-full shadow-glow overflow-hidden bg-white hover:shadow-button transition-shadow duration-300"
            >
                <img
                    src="/assets/whatsapp_logo.png"
                    alt="WhatsApp"
                    className="w-full h-full object-cover"
                />
            </a>
        </motion.div>
    );
};

export default WhatsAppButton;
