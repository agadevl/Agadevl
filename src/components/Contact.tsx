import { Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Contact Details
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Email</h3>
              </div>
              <a 
                href="mailto:afraoua@live.fr" 
                className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300 block pl-9"
              >
                afraoua@live.fr
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Phone</h3>
              </div>
              <a 
                href="tel:+393517539367" 
                className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300 block pl-9"
              >
                +39 351 753 9367
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center items-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <Mail className="w-64 h-64 text-primary/30 relative" strokeWidth={0.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
