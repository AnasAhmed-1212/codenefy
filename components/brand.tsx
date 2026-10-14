import Link from "next/link";
import Image from "next/image";
import lightLogo from "@/public/logo/Codenefy logo, transparent background.png";
import darkLogo from "@/public/logo/Codenefy logo on transparent background.png";

export function Brand({ light = false, large = false, onClick }: { light?: boolean; large?: boolean; onClick?: () => void }) {
  const logo = light ? lightLogo : darkLogo;
  const source = logo.src.split("/").map(segment => encodeURIComponent(segment)).join("/");
  return <Link href="/" onClick={onClick} aria-label="Codenefy home" className="inline-flex shrink-0 items-center"><Image src={source} alt="" width={large ? 240 : 170} height={large ? 80 : 57} unoptimized priority={!large} className="h-auto" /></Link>;
}
