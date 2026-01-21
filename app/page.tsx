"use client";

import { motion, Variants } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden px-4 py-12 md:py-20 min-h-screen">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/assets/wall-bg.png"
          alt="Background Texture"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/90 pointer-events-none" />
      </div>

      <motion.div
        className="z-10 w-full max-w-md flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Section */}
        <motion.div variants={itemVariants} className="relative w-48 h-48 md:w-64 md:h-64 mb-4">
          {/* Mobile: Square Logo, Desktop: Could use horizontal but simpler to stick to one main brand element preferably square for avatar/profile feel */}
          {/* Let's use the square logo as the 'profile picture' style which fits Link-in-Bio well */}
          <div className="relative w-full h-full shadow-[0_0_30px_rgba(250,188,72,0.3)]">
            <Image
              src="/assets/logo-square.png"
              alt="Gin Comici Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div variants={itemVariants} className="text-center space-y-2">
          <p className="text-xl md:text-2xl text-[var(--color-foreground)] font-light tracking-wide uppercase">
            Ridi Responsabilmente
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div variants={itemVariants} className="w-full flex flex-col gap-4 mt-4">
          <LinkCard
            href="https://www.instagram.com/gincomici/"
            label="Seguici su Instagram"
            icon={<Instagram className="w-6 h-6" />}
          />
          <LinkCard
            href="https://www.facebook.com/gincomici"
            label="Seguici su Facebook"
            icon={<Facebook className="w-6 h-6" />}
          />
          {/* Example placeholders for future expansion - commented out or kept generic if needed.
              User only asked for FB and Insta specifically as links, but generic structure is good.
          */}
        </motion.div>

        {/* Bottle Showcase (Decorative) */}
        <motion.div
          variants={itemVariants}
          className="mt-12 mb-4 relative w-full h-96 flex justify-center pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--color-brand)]/20 blur-[100px] rounded-full" />
          <Image
            src="/assets/gin-bottle.png"
            alt="Gin Comici Bottle"
            width={200}
            height={500}
            className="object-contain drop-shadow-2xl z-10"
          />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 text-xs text-white/40 z-10 text-center px-4"
      >
        I <em>Gin Comici</em> sono figli degli <em>Scambisti di Testi</em>, un collettivo di persone che si incontrano e accadono.
      </motion.footer>
    </main>
  );
}

function LinkCard({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center p-4 bg-white/5 border border-white/10 hover:border-[var(--color-brand)] rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(250,188,72,0.2)] hover:scale-[1.02] active:scale-95"
    >
      <div className="absolute left-6 text-[var(--color-brand)] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <span className="font-semibold text-lg text-white group-hover:text-[var(--color-brand)] transition-colors duration-300">
        {label}
      </span>
    </a>
  );
}
