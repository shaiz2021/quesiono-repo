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

const iconMap: Record<string, React.ComponentType<any>> = {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={href}
        className={cn(
          "block p-8 rounded border transition-all",
          dark
            ? "bg-indigo border-vanilla/10 hover:border-vanilla/30"
            : "bg-white border-sand/20 hover:border-sand/50 shadow-sm"
        )}
      >
        <div className={cn("w-12 h-12 rounded flex items-center justify-center mb-6", dark ? "bg-midnight" : "bg-cream")}>
          <Icon className={cn("w-6 h-6", dark ? "text-vanilla" : "text-midnight")} />
        </div>
        <h3 className={cn("text-xl font-bold mb-3", dark ? "text-vanilla" : "text-text-dark")}>{title}</h3>
        <p className={cn("mb-6", dark ? "text-vanilla/70" : "text-text-muted")}>{description}</p>
        <div className={cn("flex items-center gap-2 font-semibold", dark ? "text-vanilla" : "text-midnight")}>
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}
