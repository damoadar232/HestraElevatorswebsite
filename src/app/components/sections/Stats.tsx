import { Counter } from "../../shared/ui";

export function Stats() {
  return (
    <section className="bg-white border-b border-[#E5E5E5]" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E5E5E5]">
          <Counter end={500} suffix="+" label="Projects Completed" />
          <Counter end={100} suffix="+" label="Happy Clients" />
          <Counter end={10} suffix="+" label="Years of Experience" />
          <Counter end={24} suffix="×7" label="Customer Support" />
        </div>
      </div>
    </section>
  );
}
