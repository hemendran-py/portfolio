import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import styles from "@/app/work/work.module.css"; // Import CSS module

const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  index, // Receive index prop for delay
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-[#838383] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      styles.fadeIn, // Apply fade-in effect
      styles[`delay-${index + 1}`], // Apply delay dynamically
      className
    )}
    {...props}
  >
    {/* Icon, Title, and Description at the Top */}
    <div className="p-6 flex flex-col items-start z-10">
      <Icon className="h-12 w-12" />
      <h1 className="font-semibold">{name}</h1>
      <p className="max-w-xl text-xl text-neutral-900">{description}</p>
    </div>

    {/* Background section */}
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {background}
    </div>

    {/* CTA Button */}
    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-90">
      <Button
        variant="ghost"
        asChild
        size="xl"
        className="pointer-events-auto h-fit p-2 px-1 text-lg"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>

    {/* Overlay effect */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
