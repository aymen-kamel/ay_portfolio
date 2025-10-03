import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import { app } from "../../firebaseConfig";

const db = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: Timestamp.now()
      });

      // Send to n8n webhook for email notification
      await fetch("YOUR_N8N_WEBHOOK_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast({
        title: "✅ Message sent!",
        description: "Thank you for your message. I'll get back to you soon!"
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "❌ Error",
        description: "Something went wrong. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or just say hello..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              <Send className="mr-3 h-6 w-6" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
