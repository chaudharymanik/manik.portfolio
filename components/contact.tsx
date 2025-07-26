"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maniksingh873@gmail.com",
      link: "mailto:maniksingh873@gmail.com",
      color: "from-[#5eead4] to-[#4ade80]",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+919810190643",
      link: "tel:9810190643",
      color: "from-[#facc15] to-[#5eead4]",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, India",
      link: "#",
      color: "from-[#5eead4] to-[#facc15]",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/chaudharymanik",
      color: "hover:text-[#888888]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/manikchaudhary",
      color: "hover:text-[#5eead4]",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#5eead4] to-[#facc15] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5eead4] to-[#facc15] mx-auto rounded-full mb-6" />
          <p className="text-[#f5f5f4] text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#f5f5f4] mb-6">Let's Connect</h3>
              <p className="text-[#f5f5f4] mb-8 leading-relaxed max-w-2xl mx-auto">
                I'm always interested in new opportunities, whether it's a full-time role, freelance project, or just a
                chat about technology and innovation.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex flex-col items-center p-6 bg-[#1c1f1f]/50 backdrop-blur-sm border border-[#1c1f1f] rounded-xl hover:border-[#5eead4]/50 transition-all duration-300 group text-center"
                >
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${info.color} mb-4`}>
                    <info.icon className="w-6 h-6 text-[#0e0f0f]" />
                  </div>
                  <div className="text-[#888888] text-sm mb-1">{info.label}</div>
                  <div className="text-[#f5f5f4] font-medium group-hover:text-[#5eead4] transition-colors">
                    {info.value}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-[#f5f5f4] font-semibold mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-[#1c1f1f] rounded-lg text-[#888888] ${social.color} transition-all duration-300 hover:bg-[#1c1f1f]/80`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-[#1c1f1f] text-center"
        >
          <p className="text-[#888888]">© 2025 Manik Chaudhary. Built with React, Tailwind CSS, and lots of ☕</p>
        </motion.div>
      </div>
    </section>
  )
}
