import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
            Get In Touch
          </h2>
          
          <div className="cv-card">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Zap className="text-accent mr-3" size={24} />
                <p className="text-xl text-muted-foreground">
                  Open to internships, collaborations, and project offers
                </p>
              </div>
              <a
                href="mailto:kamelaymen793@gmail.com"
                className="group inline-flex items-center text-2xl font-semibold text-gradient hover:scale-105 transition-transform duration-300"
              >
                <Mail className="mr-3 group-hover:animate-pulse" size={28} />
                kamelaymen793@gmail.com
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-lg font-medium text-primary">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-muted/50 border-primary/20 focus:border-primary/40 rounded-xl p-4 text-lg backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-lg font-medium text-primary">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-muted/50 border-primary/20 focus:border-primary/40 rounded-xl p-4 text-lg backdrop-blur-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="block text-lg font-medium text-primary">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-muted/50 border-primary/20 focus:border-primary/40 rounded-xl p-4 text-lg backdrop-blur-sm resize-none"
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="hero-button bg-primary/20 hover:bg-primary/30 text-primary border-primary/40 text-lg px-12 py-4"
                >
                  <Send className="mr-3 h-6 w-6" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="text-center mt-16 pt-8 border-t border-primary/20">
            <p className="text-muted-foreground text-lg">
              © 2025 Aymen Kamel.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;