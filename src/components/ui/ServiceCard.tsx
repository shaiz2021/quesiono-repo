"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, LayoutDashboard, Terminal, FileText, Search, Link2, PenTool, FileEdit, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  dark?: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "code2": Code2,
  "layout-dashboard": LayoutDashboard,
  "terminal": Terminal,
  "file-text": FileText,
  "search": Search,
  "link2": Link2,
  "pen-tool": PenTool,
  "file-edit": FileEdit,
  "book-open": BookOpen,
};

export function ServiceCard({ icon: iconName, title, description, href, dark = true }: ServiceCardProps) {
  const Icon = iconMap[iconName] || Code2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Link
        href={href}
        className={cn(
          "block p-8 rounded-2xl border-2 transition-all duration-300 h-full flex flex-col hover:shadow-xl",
          dark
            ? "bg-indigo border-vanilla/10 hover:border-vanilla/40"
            : "bg-white border-sand/30 hover:border-midnight/20 hover:shadow-lg"
        )}
      >
        <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", dark ? "bg-midnight" : "bg-cream")}>
          <Icon className={cn("w-7 h-7", dark ? "text-vanilla" : "text-midnight")} />
        </div>
        <h3 className={cn("text-2xl font-bold mb-4", dark ? "text-vanilla" : "text-text-dark")}>{title}</h3>
        <p className={cn("mb-8 flex-grow", dark ? "text-vanilla/80" : "text-text-muted")}>{description}</p>
        <div className={cn("flex items-center gap-3 font-semibold group", dark ? "text-vanilla" : "text-midnight")}>
          <span className="border-b border-transparent group-hover:border-current transition-all">Learn More</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}
