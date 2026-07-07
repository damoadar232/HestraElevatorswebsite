import { Link } from "react-router";
import { ChevronRight, Home } from "lucide-react";
import { A, IN } from "../../shared/ui";

export type BreadcrumbItem = { label: string; path?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#F1F1F1] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs" style={IN}>
          <li>
            <Link to="/" className="flex items-center gap-1 text-[#8B8B8B] hover:text-[#2F5D7C] transition-colors">
              <Home size={13} />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-[#C5C5C5]" />
              {item.path && i < items.length - 1 ? (
                <Link to={item.path} className="text-[#8B8B8B] hover:text-[#2F5D7C] transition-colors">{item.label}</Link>
              ) : (
                <span style={{ color: A }} className="font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
