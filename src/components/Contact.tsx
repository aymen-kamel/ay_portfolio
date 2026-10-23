import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      toast({
        title: t.contact.emailCopied,
        description: `${text} a été copié.`,
      });
      setTimeout(() => setCopiedEmail(false), 3000);
    } else {
      setCopiedPhone(true);
      toast({
        title: "Numéro copié !",
        description: `${text} a été copié.`,
      });
      setTimeout(() => setCopiedPhone(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t.contact.formSuccess,
        description: "Votre message a été transmis avec succès.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding bg-[#111111] relative">
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="editorial-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(242,238,230,0.08)] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#96918E] tracking-widest uppercase">
              <span className="text-[#8C374A] font-bold">05 / 05</span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2EEE6]">
              {t.contact.headline}
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#96918E] max-w-md font-sans leading-relaxed">
            {t.contact.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start font-sans">
          {/* Direct Contact & Profiles Column */}
          <div className="editorial-reveal delay-150 lg:col-span-5 space-y-8">
            <div className="editorial-card p-8 rounded-2xl space-y-6">
              <h3 className="font-editorial text-2xl font-bold text-[#F2EEE6]">
                Coordonnées Directes
              </h3>

              <div className="space-y-4">
                {/* Email Direct */}
                <div className="p-4 rounded-xl bg-[#111111]/60 border border-[rgba(242,238,230,0.06)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#191719] border border-[rgba(242,238,230,0.08)] flex items-center justify-center text-[#8C374A]">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-[#96918E] uppercase">{t.contact.emailLabel}</p>
                      <a href="mailto:kamelaymen793@gmail.com" className="text-xs sm:text-sm font-medium text-[#F2EEE6] hover:text-[#8C374A] transition-colors">
                        kamelaymen793@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("kamelaymen793@gmail.com", "email")}
                    className="p-2 text-[#96918E] hover:text-[#F2EEE6] transition-colors"
                    title={t.contact.copyEmail}
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Telephone */}
                <div className="p-4 rounded-xl bg-[#111111]/60 border border-[rgba(242,238,230,0.06)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#191719] border border-[rgba(242,238,230,0.08)] flex items-center justify-center text-[#8C374A]">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-[#96918E] uppercase">{t.contact.phoneLabel}</p>
                      <a href="tel:+21627379370" className="text-xs sm:text-sm font-medium text-[#F2EEE6] hover:text-[#8C374A] transition-colors">
                        +216 27 379 370
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy("+216 27 379 370", "phone")}
                    className="p-2 text-[#96918E] hover:text-[#F2EEE6] transition-colors"
                  >
                    {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Localisation */}
                <div className="p-4 rounded-xl bg-[#111111]/60 border border-[rgba(242,238,230,0.06)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#191719] border border-[rgba(242,238,230,0.08)] flex items-center justify-center text-[#8C374A]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-[#96918E] uppercase">{t.contact.locationLabel}</p>
                    <p className="text-xs sm:text-sm font-medium text-[#F2EEE6]">{t.contact.locationVal}</p>
                  </div>
                </div>
              </div>

              {/* Profiles & Links */}
              <div className="pt-4 border-t border-[rgba(242,238,230,0.08)] space-y-3">
                <span className="text-xs font-mono text-[#96918E] uppercase tracking-wider block">
                  {t.contact.socialsLabel}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/aymen-kamel"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#111111] border border-[rgba(242,238,230,0.1)] text-[#F2EEE6] hover:text-[#8C374A] hover:border-[#8C374A]/40 transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aymen-kamel-b135a3301/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#111111] border border-[rgba(242,238,230,0.1)] text-[#F2EEE6] hover:text-[#8C374A] hover:border-[#8C374A]/40 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1SVmsOZSuEtvDWRZJbaE9K9z6dmwT8Tnb/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-[#111111] border border-[rgba(242,238,230,0.1)] text-[#F2EEE6] hover:text-[#8C374A] hover:border-[#8C374A]/40 transition-all flex items-center gap-1.5 text-xs font-mono"
                  >
                    <span>CV PDF</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-[#96918E] uppercase tracking-wider mb-2">
                      {t.contact.formName}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Aymen"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-[#111111]/70 border-[rgba(242,238,230,0.12)] focus:border-[#8C374A] text-[#F2EEE6] rounded-xl h-12 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-[#96918E] uppercase tracking-wider mb-2">
                      {t.contact.formEmail}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="contact@entreprise.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-[#111111]/70 border-[rgba(242,238,230,0.12)] focus:border-[#8C374A] text-[#F2EEE6] rounded-xl h-12 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-[#96918E] uppercase tracking-wider mb-2">
                    {t.contact.formSubject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Opportunité IA / Mission Full-Stack..."
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-[#111111]/70 border-[rgba(242,238,230,0.12)] focus:border-[#8C374A] text-[#F2EEE6] rounded-xl h-12 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#96918E] uppercase tracking-wider mb-2">
                    {t.contact.formMessage}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Bonjour Aymen, je vous contacte concernant..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-[#111111]/70 border-[rgba(242,238,230,0.12)] focus:border-[#8C374A] text-[#F2EEE6] rounded-xl text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#702C3B] hover:bg-[#8C374A] text-[#F2EEE6] font-sans font-medium py-6 rounded-full text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? t.contact.formSending : t.contact.formSend}</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
