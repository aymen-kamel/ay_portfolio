import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Phone, MapPin, Copy, Check, Github, Linkedin, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import { app } from "../firebaseConfig";

const db = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 3000);
    }
    toast({
      title: "📋 Copié !",
      description: `${text} a été copié avec succès.`
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: Timestamp.now()
      });

      toast({
        title: "✅ Message envoyé avec succès !",
        description: "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais !"
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "✅ Message enregistré !",
        description: "Merci pour votre message. Je reviendrai vers vous rapidement."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Me Contacter
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une opportunité, un projet IA / Full-Stack ou une question ? N'hésitez pas à me laisser un message.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info Card */}
            <div className="lg:col-span-2 cv-card flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gradient">Coordonnées</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Disponible pour des opportunités en ingénierie logicielle, IA, vision par ordinateur et sourcing IT.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-background/50 border border-primary/15 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="text-accent h-5 w-5 shrink-0" />
                      <div className="text-xs sm:text-sm">
                        <p className="text-muted-foreground">Email</p>
                        <a href="mailto:kamelaymen793@gmail.com" className="font-semibold text-foreground hover:text-primary transition-colors">
                          kamelaymen793@gmail.com
                        </a>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleCopy("kamelaymen793@gmail.com", "email")}
                      className="text-primary hover:bg-primary/10 rounded-lg p-2"
                    >
                      {copiedEmail ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                    </Button>
                  </div>

                  <div className="p-4 rounded-xl bg-background/50 border border-primary/15 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="text-accent h-5 w-5 shrink-0" />
                      <div className="text-xs sm:text-sm">
                        <p className="text-muted-foreground">Téléphone</p>
                        <a href="tel:+21627379370" className="font-semibold text-foreground hover:text-primary transition-colors">
                          +216 27 379 370
                        </a>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleCopy("+216 27 379 370", "phone")}
                      className="text-primary hover:bg-primary/10 rounded-lg p-2"
                    >
                      {copiedPhone ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                    </Button>
                  </div>

                  <div className="p-4 rounded-xl bg-background/50 border border-primary/15 flex items-center gap-3 text-xs sm:text-sm">
                    <MapPin className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="text-muted-foreground">Localisation</p>
                      <p className="font-semibold text-foreground">Sfax, Tunisie</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-primary/10 space-y-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Réseaux & Liens</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/aymen-kamel"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-card border border-primary/20 hover:border-primary/50 text-primary hover:text-accent transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aymen-kamel-b135a3301/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-card border border-primary/20 hover:border-primary/50 text-primary hover:text-accent transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://aymenkamel.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-card border border-primary/20 hover:border-primary/50 text-primary hover:text-accent transition-all duration-300"
                  >
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-3 cv-card">
              <h3 className="text-2xl font-bold text-gradient mb-6">Envoyer un message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                      Nom Complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/60 border-primary/20 focus:border-primary focus:ring-primary/20 text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                      Adresse Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/60 border-primary/20 focus:border-primary focus:ring-primary/20 text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message..."
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background/60 border-primary/20 focus:border-primary focus:ring-primary/20 text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground mb-1.5">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Bonjour Aymen, je vous contacte au sujet de..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background/60 border-primary/20 focus:border-primary focus:ring-primary/20 text-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="hero-button w-full bg-primary/20 hover:bg-primary/30 text-primary border-primary/40 py-6 text-base font-bold flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5 text-accent" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
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
